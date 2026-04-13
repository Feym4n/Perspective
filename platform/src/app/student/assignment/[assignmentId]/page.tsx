"use client";

import { Check, CheckCheck, Play, Send, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChatHeader } from "~/components/student-chat/ChatHeader";
import { MessageBubble } from "~/components/student-chat/MessageBubble";
import { api } from "~/trpc/react";

type StudentBlock = {
  id: string;
  kind: "text" | "explanation" | "presentation" | "image" | "audio" | "video" | "test";
  title: string;
  text: string;
  responseMode?: "single_choice" | "open_question";
  optionsRaw?: string;
  correctOptionKey?: string;
  correctOptionKeys?: string[];
  mediaFileName?: string;
  mediaDataUrl?: string;
  buttonLabel?: string;
};

type StudentEdge = {
  id: string;
  fromId: string;
  toId: string;
  fromType?: "block" | "option";
  fromOptionKey?: string;
};

type StudentReply = {
  kind: "option" | "open";
  text: string;
  timestamp: number;
};

/** Строки optionsRaw 1:1 со строками в редакторе учителя (пустые строки сохраняются). */
function getTestOptionLines(block: StudentBlock) {
  if (block.kind !== "test") return [];
  return (block.optionsRaw ?? "").split("\n").map((line, idx) => ({
    key: `opt-${idx}`,
    label: line.replace(/\r$/, ""),
  }));
}

function openFieldKey(blockId: string, optKey: string) {
  return `${blockId}::${optKey}`;
}

function compareOptionKeys(a: string, b: string) {
  const na = Number.parseInt(a.replace("opt-", ""), 10);
  const nb = Number.parseInt(b.replace("opt-", ""), 10);
  if (Number.isInteger(na) && Number.isInteger(nb) && na !== nb) return na - nb;
  return a.localeCompare(b);
}

function normalizeOptionKeys(keys: string[]) {
  return [...new Set(keys.map((k) => k.trim()).filter(Boolean))].sort(compareOptionKeys);
}

function getCorrectOptionKeys(block: StudentBlock): string[] {
  return normalizeOptionKeys([
    ...(Array.isArray(block.correctOptionKeys) ? block.correctOptionKeys : []),
    ...(block.correctOptionKey ? [block.correctOptionKey] : []),
  ]);
}

function formatTime(ts: number) {
  return new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date(ts));
}

function dataUrlMime(dataUrl: string): string | undefined {
  const m = /^data:([^;,]+)/i.exec(dataUrl);
  return m?.[1]?.trim();
}

/** Data URL → blob URL: надёжнее для `<video>` в Safari и при длинных base64. */
function useBlobUrlFromDataUrl(dataUrl: string | undefined): string | undefined {
  const [blobUrl, setBlobUrl] = useState<string | undefined>(undefined);
  useEffect(() => {
    const trimmed = dataUrl?.trim();
    if (!trimmed) {
      setBlobUrl(undefined);
      return;
    }
    if (!trimmed.startsWith("data:")) {
      setBlobUrl(trimmed);
      return;
    }
    let cancelled = false;
    let objectUrl = "";
    void (async () => {
      try {
        const res = await fetch(trimmed);
        const blob = await res.blob();
        objectUrl = URL.createObjectURL(blob);
        if (!cancelled) setBlobUrl(objectUrl);
      } catch {
        if (!cancelled) setBlobUrl(trimmed);
      }
    })();
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [dataUrl]);
  return blobUrl;
}

function submissionStatusLabel(submission: { status: string } | null | undefined): string {
  if (!submission) return "Не сохранено";
  if (submission.status === "submitted") return "Отправлено";
  if (submission.status === "draft") return "Черновик сохранён";
  return submission.status;
}

function StudentVideoPlayer({ dataUrl }: { dataUrl: string }) {
  const src = useBlobUrlFromDataUrl(dataUrl);
  const mime = dataUrlMime(dataUrl) ?? "video/mp4";
  if (!src) return null;
  return (
    <video controls playsInline className="max-h-80 w-full rounded-lg bg-black">
      <source src={src} type={mime} />
    </video>
  );
}

export default function StudentAssignmentChatPage() {
  const params = useParams<{ assignmentId: string }>();
  const assignmentId = Number(params.assignmentId);
  const { data, isLoading, isError, error } = api.student.assignmentDetail.useQuery(
    { assignmentId: Number.isFinite(assignmentId) ? assignmentId : 0 },
    { enabled: Number.isFinite(assignmentId) && assignmentId > 0 }
  );
  const utils = api.useUtils();
  const saveDraft = api.student.assignmentSaveDraft.useMutation({
    onSuccess: (_data, vars) => {
      void utils.student.assignmentDetail.invalidate({ assignmentId: vars.assignmentId });
    },
  });
  const submit = api.student.assignmentSubmit.useMutation({
    onSuccess: (_data, vars) => {
      void utils.student.assignmentDetail.invalidate({ assignmentId: vars.assignmentId });
    },
  });
  const recordTestFirstAnswer = api.student.recordTestFirstAnswer.useMutation();

  const [revealedIds, setRevealedIds] = useState<string[]>([]);
  const [openAnswers, setOpenAnswers] = useState<Record<string, string>>({});
  const [pendingChoiceKeys, setPendingChoiceKeys] = useState<Record<string, string[]>>({});
  const [studentReplies, setStudentReplies] = useState<Record<string, StudentReply>>({});
  const [dismissedExplanationIds, setDismissedExplanationIds] = useState<string[]>([]);
  const [presentationFullscreen, setPresentationFullscreen] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const blocks = (data?.blocks ?? []) as StudentBlock[];
  const edges = (data?.edges ?? []) as StudentEdge[];

  const { firstBlock, blockById } = useMemo(() => {
    const byId = new Map(blocks.map((block) => [block.id, block]));
    const incoming = new Map<string, number>();
    blocks.forEach((block) => incoming.set(block.id, 0));
    edges.forEach((edge) => incoming.set(edge.toId, (incoming.get(edge.toId) ?? 0) + 1));
    const roots = blocks.filter((block) => (incoming.get(block.id) ?? 0) === 0);
    const first = roots[0] ?? blocks[0] ?? null;
    return { firstBlock: first, blockById: byId };
  }, [blocks, edges]);

  const activeTestBlock = useMemo(() => {
    for (let i = revealedIds.length - 1; i >= 0; i -= 1) {
      const blockId = revealedIds[i];
      if (!blockId) continue;
      const block = blockById.get(blockId);
      if (!block || block.kind !== "test") continue;
      if (studentReplies[block.id]) continue;
      return block;
    }
    return null;
  }, [revealedIds, blockById, studentReplies]);

  function getNextBlockId(fromId: string, optionKey?: string) {
    const exact = edges.find(
      (edge) =>
        edge.fromId === fromId &&
        (edge.fromType ?? "block") === (optionKey ? "option" : "block") &&
        (optionKey ? (edge.fromOptionKey ?? "") === optionKey : true)
    );
    if (exact) return exact.toId;
    if (optionKey) return null;
    const currentIndex = blocks.findIndex((block) => block.id === fromId);
    if (currentIndex < 0) return null;
    const nextLinear = blocks[currentIndex + 1];
    return nextLinear?.id ?? null;
  }

  /** После открытого вопроса — только выход от блока (без ветвления по строкам). */
  function getNextAfterOpenQuestion(blockId: string) {
    return getNextBlockId(blockId);
  }

  function getNextAfterSelectedOptions(blockId: string, optionKeys: string[]) {
    for (const key of normalizeOptionKeys(optionKeys)) {
      const next = getNextBlockId(blockId, key);
      if (next) return next;
    }
    return getNextBlockId(blockId);
  }

  const pendingExplanationBlock = useMemo(() => {
    for (let i = revealedIds.length - 1; i >= 0; i -= 1) {
      const blockId = revealedIds[i];
      if (!blockId) continue;
      const block = blockById.get(blockId);
      if (!block || block.kind !== "explanation") continue;
      if (dismissedExplanationIds.includes(block.id)) continue;
      return block;
    }
    return null;
  }, [revealedIds, blockById, dismissedExplanationIds]);

  const activeContinue = (() => {
    if (pendingExplanationBlock) return null;
    if (activeTestBlock) return null;
    const lastId = revealedIds[revealedIds.length - 1];
    if (!lastId) return null;
    const block = blockById.get(lastId);
    if (!block || block.kind === "test" || block.kind === "explanation") return null;
    const nextId = getNextBlockId(block.id);
    if (!nextId) return null;
    if (revealedIds.includes(nextId)) return null;
    return { blockId: block.id, nextId };
  })();

  function revealNext(nextId: string | null) {
    if (!nextId || !blockById.has(nextId)) return;
    setRevealedIds((prev) => (prev.includes(nextId) ? prev : [...prev, nextId]));
  }

  function dismissExplanationOverlay() {
    if (!pendingExplanationBlock) return;
    const blockId = pendingExplanationBlock.id;
    setDismissedExplanationIds((prev) => (prev.includes(blockId) ? prev : [...prev, blockId]));
    revealNext(getNextBlockId(blockId));
  }

  function setReply(blockId: string, kind: StudentReply["kind"], text: string) {
    setStudentReplies((prev) => ({
      ...prev,
      [blockId]: {
        kind,
        text,
        timestamp: Date.now(),
      },
    }));
  }

  function submitChoiceReply(assignmentIdForAnswer: number, block: StudentBlock, optionKeys: string[], replyText: string) {
    const normalized = normalizeOptionKeys(optionKeys);
    if (normalized.length === 0) return;
    void (async () => {
      try {
        await recordTestFirstAnswer.mutateAsync({
          assignmentId: assignmentIdForAnswer,
          blockId: block.id,
          optionKeys: normalized,
        });
      } catch {
        /* продолжаем прохождение даже если запись на сервер не удалась */
      }
      setReply(block.id, "option", replyText);
      revealNext(getNextAfterSelectedOptions(block.id, normalized));
      setPendingChoiceKeys((prev) => {
        const next = { ...prev };
        delete next[block.id];
        return next;
      });
    })();
  }

  function submitOpenReplyFromComposer() {
    if (!activeTestBlock || activeTestBlock.responseMode !== "open_question") return;
    const entries = getTestOptionLines(activeTestBlock);
    const blockId = activeTestBlock.id;

    let combined = "";
    if (entries.length === 0) return;

    if (entries.length === 1) {
      const fk = openFieldKey(blockId, entries[0]!.key);
      const raw =
        (openAnswers[fk] ?? openAnswers[blockId] ?? "").trim();
      if (!raw) return;
      combined = entries[0]!.label.trim()
        ? `${entries[0]!.label}\n${raw}`
        : raw;
    } else {
      const parts: string[] = [];
      for (const e of entries) {
        const fk = openFieldKey(blockId, e.key);
        const v = (openAnswers[fk] ?? "").trim();
        if (!v) return;
        parts.push(e.label.trim() ? `${e.label}\n${v}` : v);
      }
      combined = parts.join("\n\n");
    }

    setReply(blockId, "open", combined);
    revealNext(getNextAfterOpenQuestion(blockId));
    setOpenAnswers((prev) => {
      const next = { ...prev };
      delete next[blockId];
      for (const e of entries) {
        delete next[openFieldKey(blockId, e.key)];
      }
      return next;
    });
  }

  useEffect(() => {
    if (!data || blocks.length === 0) return;
    if (revealedIds.length > 0) return;
    const startId = firstBlock?.id;
    if (startId) setRevealedIds([startId]);
  }, [data, blocks.length, firstBlock, revealedIds.length]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [revealedIds, studentReplies, pendingExplanationBlock]);

  useEffect(() => {
    if (!presentationFullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPresentationFullscreen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [presentationFullscreen]);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-100 p-6 text-slate-700">
        <p>Загрузка занятия...</p>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="min-h-screen bg-slate-100 p-6 text-slate-700">
        <p className="text-red-600">{error?.message ?? "Не удалось открыть занятие"}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#dbe4eb]">
      <ChatHeader title={data.title} subtitle={`${data.lesson.courseTitle} • ${data.lesson.title}`} />

      <section className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-3xl flex-col">
        <div
          className="flex-1 overflow-y-auto bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:16px_16px] p-3 sm:p-4"
        >
          <div className="space-y-3">
              {revealedIds.map((blockId) => {
                const block = blockById.get(blockId);
                if (!block) return null;
                if (block.kind === "explanation") return null;
                const studentReply = studentReplies[block.id];

                const incomingFooter = (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                    {formatTime(studentReply?.timestamp ?? Date.now())}
                  </span>
                );

                return (
                  <div key={block.id} className="space-y-2 animate-[fadein_.2s_ease-out]">
                    {block.kind === "test" ? (
                      <>
                        <MessageBubble side="incoming" title={block.title || "Вопрос"} footer={incomingFooter}>
                          <p className="whitespace-pre-wrap">{block.text}</p>
                          {!studentReply ? (
                            <p className="mt-2 text-xs text-slate-500">
                              {block.responseMode === "open_question"
                                ? "Заполните поля ответа внизу экрана."
                                : getCorrectOptionKeys(block).length > 1
                                ? "Выберите несколько верных ответов внизу экрана."
                                : "Выберите один ответ внизу экрана."}
                            </p>
                          ) : null}
                        </MessageBubble>
                      </>
                    ) : (
                      <MessageBubble
                        side="incoming"
                        title={block.title || "Сообщение"}
                        footer={incomingFooter}
                        onArticleClick={
                          block.kind === "presentation" && block.mediaDataUrl
                            ? () =>
                                setPresentationFullscreen({
                                  src: block.mediaDataUrl!,
                                  title: block.mediaFileName || block.title || "Презентация",
                                })
                            : undefined
                        }
                      >
                        {block.kind === "audio" ? (
                          <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                              <Play className="h-3 w-3" /> Голосовое сообщение
                            </div>
                            <audio controls src={block.mediaDataUrl} className="w-full" />
                          </div>
                        ) : null}

                        {block.kind === "image" ? (
                          block.mediaDataUrl ? (
                            <img
                              src={block.mediaDataUrl}
                              alt={block.mediaFileName || block.title}
                              className="max-h-80 w-full rounded-xl object-contain"
                            />
                          ) : (
                            <p className="text-xs text-slate-500">Изображение не загружено</p>
                          )
                        ) : null}

                        {block.kind === "video" ? (
                          <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                            {block.mediaDataUrl ? (
                              <StudentVideoPlayer dataUrl={block.mediaDataUrl} />
                            ) : (
                              <p className="text-xs text-slate-500">
                                Видео не загружено. Допустимый формат: MP4.
                              </p>
                            )}
                          </div>
                        ) : null}

                        {block.kind === "presentation" ? (
                          <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                            {block.mediaDataUrl ? (
                              <>
                                <p className="text-center text-[11px] text-slate-500">
                                  Нажмите на сообщение — просмотр на весь экран
                                </p>
                                <iframe
                                  src={block.mediaDataUrl}
                                  title={block.mediaFileName || "Презентация"}
                                  className="pointer-events-none h-72 w-full rounded-lg border border-slate-200 bg-white"
                                />
                              </>
                            ) : (
                              <p className="text-xs text-slate-500">
                                Презентация не загружена. Допустимый формат: PDF.
                              </p>
                            )}
                          </div>
                        ) : null}

                        {block.kind === "text" || block.text ? (
                          <p className="whitespace-pre-wrap">{block.text}</p>
                        ) : null}

                      </MessageBubble>
                    )}

                    {studentReply ? (
                      <MessageBubble
                        side="outgoing"
                        footer={
                          <span className="inline-flex items-center gap-1 text-[11px] text-cyan-100">
                            {formatTime(studentReply.timestamp)}
                            {data.submission?.status === "submitted" ? (
                              <CheckCheck className="h-3 w-3" />
                            ) : (
                              <Check className="h-3 w-3" />
                            )}
                          </span>
                        }
                      >
                        <p
                          className={`whitespace-pre-wrap ${
                            studentReply.kind === "open" ? "[text-indent:1.5em]" : ""
                          }`}
                        >
                          {studentReply.text}
                        </p>
                      </MessageBubble>
                    ) : null}
                  </div>
                );
              })}
              <div ref={endRef} />
            </div>
        </div>

        <footer className="sticky bottom-0 border-t border-slate-200 bg-white/95 p-3 backdrop-blur">
          <div className="mx-auto flex max-w-3xl flex-col gap-2">
            {activeTestBlock?.responseMode === "single_choice" ? (
              <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-2">
                {(() => {
                  const options = getTestOptionLines(activeTestBlock).filter((option) => option.label.trim() !== "");
                  const correctKeys = getCorrectOptionKeys(activeTestBlock);
                  const multiMode = correctKeys.length > 1;
                  const selected = pendingChoiceKeys[activeTestBlock.id] ?? [];
                  if (options.length === 0) {
                    return (
                      <p className="px-2 py-2 text-center text-xs text-amber-800">
                        Нет вариантов с текстом. Попросите учителя заполнить варианты ответа.
                      </p>
                    );
                  }
                  return (
                    <>
                      <p className="px-2 text-xs text-slate-600">
                        {multiMode ? "Выберите несколько верных ответов" : "Выберите один верный ответ"}
                      </p>
                      {options.map((option) => {
                        const isSelected = selected.includes(option.key);
                        return (
                          <button
                            key={option.key}
                            type="button"
                            onClick={() => {
                              if (!multiMode) {
                                submitChoiceReply(data.id, activeTestBlock, [option.key], option.label);
                                return;
                              }
                              setPendingChoiceKeys((prev) => {
                                const current = new Set(prev[activeTestBlock.id] ?? []);
                                if (current.has(option.key)) {
                                  current.delete(option.key);
                                } else {
                                  current.add(option.key);
                                }
                                return { ...prev, [activeTestBlock.id]: normalizeOptionKeys([...current]) };
                              });
                            }}
                            className={`block w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition hover:-translate-y-0.5 ${
                              isSelected
                                ? "border-cyan-400 bg-cyan-50 text-cyan-900"
                                : "border-white/80 bg-white text-slate-800 shadow-[0_3px_10px_rgba(15,23,42,0.07)] hover:bg-slate-50"
                            }`}
                          >
                            {multiMode ? (
                              <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded border border-slate-400 text-[10px]">
                                {isSelected ? "✓" : ""}
                              </span>
                            ) : null}
                            {option.label}
                          </button>
                        );
                      })}
                      {multiMode ? (
                        <button
                          type="button"
                          onClick={() => {
                            const normalizedSelected = normalizeOptionKeys(selected);
                            if (normalizedSelected.length === 0) return;
                            const selectedLabels = options
                              .filter((option) => normalizedSelected.includes(option.key))
                              .map((option) => option.label)
                              .join(", ");
                            submitChoiceReply(data.id, activeTestBlock, normalizedSelected, selectedLabels);
                          }}
                          disabled={selected.length === 0}
                          className="inline-flex w-full items-center justify-center gap-1 rounded-lg bg-cyan-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 disabled:opacity-60"
                        >
                          <Send className="h-3.5 w-3.5" />
                          Отправить ответ
                        </button>
                      ) : null}
                    </>
                  );
                })()}
              </div>
            ) : null}

            {activeTestBlock?.responseMode === "open_question" ? (
              <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                {getTestOptionLines(activeTestBlock).map((opt) => (
                  <div key={opt.key}>
                    {opt.label.trim() ? (
                      <p className="mb-1 whitespace-pre-wrap text-xs font-medium text-slate-700">{opt.label}</p>
                    ) : (
                      <p className="mb-1 text-xs text-slate-400">Ответ</p>
                    )}
                    <textarea
                      value={
                        openAnswers[openFieldKey(activeTestBlock.id, opt.key)] ??
                        (opt.key === "opt-0" ? (openAnswers[activeTestBlock.id] ?? "") : "")
                      }
                      onChange={(e) => {
                        const k = openFieldKey(activeTestBlock.id, opt.key);
                        setOpenAnswers((prev) => {
                          const next = { ...prev, [k]: e.target.value };
                          if (opt.key === "opt-0" && prev[activeTestBlock.id] !== undefined) {
                            const copy = { ...next };
                            delete copy[activeTestBlock.id];
                            return copy;
                          }
                          return next;
                        });
                      }}
                      rows={3}
                      placeholder="Введите ответ..."
                      className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-cyan-500"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={submitOpenReplyFromComposer}
                  className="inline-flex w-full items-center justify-center gap-1 rounded-lg bg-cyan-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700"
                >
                  <Send className="h-3.5 w-3.5" />
                  Отправить ответ
                </button>
              </div>
            ) : null}

            {!activeTestBlock && activeContinue ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                <button
                  type="button"
                  onClick={() => revealNext(activeContinue.nextId)}
                  className="w-full rounded-lg bg-cyan-600 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
                >
                  Дальше
                </button>
              </div>
            ) : null}

            <div className="flex items-center justify-between gap-2">
              <p className="text-xs text-slate-500">Статус: {submissionStatusLabel(data.submission)}</p>
              <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  saveDraft.mutate({
                    assignmentId: data.id,
                    answersJson: JSON.stringify({ openAnswers, revealedIds, studentReplies }),
                  })
                }
                disabled={saveDraft.isPending}
                className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-60"
              >
                Сохранить
              </button>
              <button
                type="button"
                onClick={() =>
                  submit.mutate({
                    assignmentId: data.id,
                    answersJson: JSON.stringify({ openAnswers, revealedIds, studentReplies }),
                  })
                }
                disabled={submit.isPending}
                className="rounded-lg bg-cyan-600 px-3 py-2 text-xs font-semibold text-white hover:bg-cyan-700 disabled:opacity-60"
              >
                Отправить
              </button>
              </div>
            </div>
          </div>
        </footer>
      </section>
      {presentationFullscreen ? (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-slate-950/90 p-3 sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Презентация на весь экран"
        >
          <div className="mb-2 flex shrink-0 items-center justify-between gap-2 text-white">
            <p className="min-w-0 truncate text-sm font-medium">{presentationFullscreen.title}</p>
            <button
              type="button"
              onClick={() => setPresentationFullscreen(null)}
              className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold hover:bg-white/20"
            >
              <X className="h-4 w-4" />
              Закрыть
            </button>
          </div>
          <iframe
            src={presentationFullscreen.src}
            title={presentationFullscreen.title}
            className="min-h-0 w-full flex-1 rounded-xl border border-white/10 bg-white"
          />
          <p className="mt-2 shrink-0 text-center text-[11px] text-slate-400">Esc — закрыть</p>
        </div>
      ) : null}

      {pendingExplanationBlock ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]/45 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-[2.25rem] bg-white p-6 shadow-2xl sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">{pendingExplanationBlock.title || data.title}</h2>
            <p className="mt-4 whitespace-pre-wrap text-base leading-7 text-slate-800">
              {pendingExplanationBlock.text || data.instruction}
            </p>
            <button
              type="button"
              onClick={dismissExplanationOverlay}
              className="mt-6 w-full rounded-xl bg-cyan-100 px-4 py-3 text-base font-semibold text-cyan-900 transition hover:bg-cyan-200"
            >
              {pendingExplanationBlock.buttonLabel || "Продолжить"}
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
