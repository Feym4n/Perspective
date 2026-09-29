"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { TRPCClientError } from "@trpc/client";
import { clearTeacherCookie } from "~/lib/auth-cookies";
import {
  DEFAULT_GRADING_SETTINGS,
  type GradingSettings,
  parseGradingSettings,
} from "~/lib/grading-settings";
import { api } from "~/trpc/react";

import { AnalyticsSection } from "~/components/teacher-cabinet/AnalyticsSection";
import { AssignmentsHome } from "~/components/teacher-cabinet/AssignmentsHome";
import { GradesProgressSection } from "~/components/teacher-cabinet/GradesProgressSection";
import { JournalSection } from "~/components/teacher-cabinet/JournalSection";
import { AutoReviewSection } from "~/components/teacher-cabinet/AutoReviewSection";
import { StubSection } from "~/components/teacher-cabinet/StubSection";
import { StudentsSection } from "~/components/teacher-cabinet/StudentsSection";
import { TeacherSidebar, type TeacherNavId } from "~/components/teacher-cabinet/TeacherSidebar";
import { classRowKey } from "~/components/teacher-cabinet/ClassSelector";

type ActiveTab = TeacherNavId;

type WizardBlock = {
  id: string;
  kind: "text" | "explanation" | "presentation" | "image" | "audio" | "video" | "test";
  responseMode?: "single_choice" | "open_question";
  title: string;
  text: string;
  gradeEnabled: boolean;
  buttonLabel: string;
  optionsRaw?: string;
  /** Ключи верных вариантов `opt-N` для single_choice (поддержка мульти-верных). */
  correctOptionKeys?: string[];
  /** legacy-поле, оставлено для обратной совместимости старых конфигов */
  correctOptionKey?: string;
  mediaFileName?: string;
  mediaDataUrl?: string;
  x: number;
  y: number;
};

type TaskGraphEdge = {
  id: string;
  fromId: string;
  fromType?: "block" | "option";
  fromOptionKey?: string;
  toId: string;
  fromSide?: AnchorSide;
  toSide?: AnchorSide;
  label?: string;
};

type AnchorSide = "top" | "right" | "bottom" | "left";

type EdgeAnchor = {
  blockId: string;
  side: AnchorSide;
  sourceType: "block" | "option";
  optionKey?: string;
};

type CanvasPoint = {
  x: number;
  y: number;
};

type CanvasTool = "select" | "pan";

const BLOCK_TEMPLATES: Array<{
  kind: WizardBlock["kind"];
  label: string;
  hint: string;
  defaultTitle: string;
  defaultText: string;
}> = [
  {
    kind: "text",
    label: "Текст",
    hint: "Теория, объяснение, инструкции",
    defaultTitle: "Текстовый блок",
    defaultText: "",
  },
  {
    kind: "explanation",
    label: "Пояснение",
    hint: "Вступительный экран с кнопкой старта",
    defaultTitle: "Пояснение",
    defaultText: "Краткое вступление перед началом занятия.",
  },
  {
    kind: "image",
    label: "Изображение",
    hint: "Фото, схема, иллюстрация",
    defaultTitle: "Блок изображения",
    defaultText: "",
  },
  {
    kind: "audio",
    label: "Аудиозапись",
    hint: "Голосовое задание или аудиофайл",
    defaultTitle: "Аудио блок",
    defaultText: "",
  },
  {
    kind: "video",
    label: "Видео",
    hint: "Видеофрагмент или объяснение",
    defaultTitle: "Видео блок",
    defaultText: "",
  },
  {
    kind: "presentation",
    label: "Презентация",
    hint: "Слайды или ppt/pptx файл",
    defaultTitle: "Блок презентации",
    defaultText: "",
  },
  {
    kind: "test",
    label: "Тест",
    hint: "Вопросы и варианты ответов",
    defaultTitle: "Тестовый блок",
    defaultText: "Вопрос: ",
  },
];

const CANVAS_WIDTH = 1900;
const CANVAS_HEIGHT = 980;
const CANVAS_BLOCK_WIDTH = 250;
const CANVAS_BLOCK_HEIGHT = 170;
const CANVAS_TEST_EXTRA_HEIGHT = 40;
const OPTION_ROW_HEIGHT = 34;
const OPTION_Y_OFFSET = 128;
const SUPPORTED_BLOCK_KINDS: WizardBlock["kind"][] = [
  "text",
  "explanation",
  "presentation",
  "image",
  "audio",
  "video",
  "test",
];

function isWizardBlockKind(kind: string): kind is WizardBlock["kind"] {
  return SUPPORTED_BLOCK_KINDS.includes(kind as WizardBlock["kind"]);
}

function compareOptionKeys(a: string, b: string) {
  const na = Number.parseInt(a.replace("opt-", ""), 10);
  const nb = Number.parseInt(b.replace("opt-", ""), 10);
  if (Number.isInteger(na) && Number.isInteger(nb) && na !== nb) return na - nb;
  return a.localeCompare(b);
}

function normalizeCorrectOptionKeys(keys: string[]): string[] {
  return [...new Set(keys.map((k) => k.trim()).filter(Boolean))].sort(compareOptionKeys);
}

function getCanvasBlockTitle(block: WizardBlock): string {
  if (
    block.kind === "presentation" &&
    (!block.title ||
      block.title.trim() === "Презентационный блок" ||
      block.title.trim() === "Блок презентации")
  ) {
    return "Блок\nпрезентации";
  }
  return block.title || "Блок";
}

export default function TeacherDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ActiveTab>("assignments");
  const [step, setStep] = useState(1);
  const [workspaceLessonId, setWorkspaceLessonId] = useState<number | null>(null);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState<number | "">("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");
  const [taskBlocks, setTaskBlocks] = useState<WizardBlock[]>([]);
  const [taskGraphEdges, setTaskGraphEdges] = useState<TaskGraphEdge[]>([]);
  const [gradingSettings, setGradingSettings] = useState<GradingSettings>({ ...DEFAULT_GRADING_SETTINGS });
  const [previewImageNames, setPreviewImageNames] = useState<string[]>([]);
  const [methodicFileNames, setMethodicFileNames] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [uiError, setUiError] = useState<string | null>(null);
  const [assignTargetId, setAssignTargetId] = useState<number | "">("");
  const [assignedClasses, setAssignedClasses] = useState<Record<string, boolean>>({});
  const [selectedCanvasBlockId, setSelectedCanvasBlockId] = useState<string | null>(null);
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null);
  const [hoveredAnchor, setHoveredAnchor] = useState<EdgeAnchor | null>(null);
  const [draftEdgeStart, setDraftEdgeStart] = useState<EdgeAnchor | null>(null);
  const [draftEdgeCursor, setDraftEdgeCursor] = useState<CanvasPoint | null>(null);
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null);
  const [canvasTool, setCanvasTool] = useState<CanvasTool>("select");
  const [canvasScale, setCanvasScale] = useState(1);
  const [isCanvasMaximized, setIsCanvasMaximized] = useState(false);
  const panStartRef = useRef<CanvasPoint | null>(null);
  const scrollStartRef = useRef<CanvasPoint | null>(null);
  const canvasSceneRef = useRef<HTMLDivElement | null>(null);
  const optionAnchorRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const utils = api.useUtils();
  const { data: me, isLoading: meLoading, isError: meError } = api.teacher.me.useQuery();
  const ensureWorkspaceLesson = api.teacher.workspaceLessonEnsure.useMutation();
  const { data: classList } = api.teacher.classList.useQuery();
  const {
    data: assignmentList,
    refetch: refetchAssignments,
    isLoading: libraryLoading,
  } = api.teacher.assignmentByLesson.useQuery(
    { lessonId: workspaceLessonId as number },
    { enabled: typeof workspaceLessonId === "number" && workspaceLessonId > 0 }
  );
  const assignmentCreate = api.teacher.assignmentCreate.useMutation();
  const assignmentUpdate = api.teacher.assignmentUpdate.useMutation();
  const assignmentDelete = api.teacher.assignmentDelete.useMutation();
  const assignmentAssignClasses = api.teacher.assignmentAssignClasses.useMutation();

  const [analyticsFocusId, setAnalyticsFocusId] = useState<number | undefined>(undefined);
  const [selectedClassKey, setSelectedClassKey] = useState("");

  const { data: dashboardOverview, isLoading: overviewLoading } =
    api.teacher.assignmentDashboardOverview.useQuery();

  const [textModal, setTextModal] = useState<
    | { type: "lesson"; value: string }
    | { type: "block"; blockId: string; value: string }
    | null
  >(null);

  useEffect(() => {
    if (selectedClassKey || !classList?.length) return;
    const first = classList[0]!;
    setSelectedClassKey(classRowKey(first.schoolId, first.className));
  }, [classList, selectedClassKey]);

  useEffect(() => {
    let mounted = true;
    void ensureWorkspaceLesson
      .mutateAsync()
      .then((lesson) => {
        if (!mounted) return;
        setWorkspaceLessonId(lesson.id);
      })
      .catch((err: unknown) => {
        if (!mounted) return;
        if (err instanceof TRPCClientError) {
          setUiError(err.message);
        } else {
          setUiError("Не удалось инициализировать рабочее пространство педагога");
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  const selectedAssignment = useMemo(
    () =>
      typeof selectedAssignmentId === "number"
        ? (assignmentList ?? []).find((a) => a.id === selectedAssignmentId) ?? null
        : null,
    [assignmentList, selectedAssignmentId]
  );

  useEffect(() => {
    if (!selectedAssignment) return;
    setLessonTitle(selectedAssignment.title);
    setLessonDescription(selectedAssignment.instruction);
    if (!selectedAssignment.configJson) {
      setTaskBlocks([]);
      setTaskGraphEdges([]);
      setSelectedCanvasBlockId(null);
      setGradingSettings({
        ...DEFAULT_GRADING_SETTINGS,
        maxScore: selectedAssignment.maxScore ?? DEFAULT_GRADING_SETTINGS.maxScore,
      });
      setPreviewImageNames([]);
      setMethodicFileNames([]);
      return;
    }
    try {
      const parsed = JSON.parse(selectedAssignment.configJson) as {
        taskBlocks?: Array<Omit<Partial<WizardBlock>, "kind"> & { kind?: string }>;
        taskGraph?: { edges?: TaskGraphEdge[] };
        gradingSettings?: unknown;
        previewImageNames?: string[];
        methodicFileNames?: string[];
      };
      setTaskBlocks(
        Array.isArray(parsed.taskBlocks) && parsed.taskBlocks.length > 0
          ? parsed.taskBlocks.map((b, idx) => {
              const normalizedKind =
                b.kind === "case" || b.kind === "reflection"
                  ? "text"
                  : typeof b.kind === "string" && isWizardBlockKind(b.kind)
                  ? b.kind
                  : "text";
              const legacyCorrectKey =
                typeof b.correctOptionKey === "string" && b.correctOptionKey.trim() ? b.correctOptionKey.trim() : "";
              const correctOptionKeys = normalizeCorrectOptionKeys(
                Array.isArray(b.correctOptionKeys)
                  ? [
                      ...b.correctOptionKeys
                        .map((v) => (typeof v === "string" ? v.trim() : ""))
                        .filter(Boolean),
                      ...(legacyCorrectKey ? [legacyCorrectKey] : []),
                    ]
                  : legacyCorrectKey
                  ? [legacyCorrectKey]
                  : []
              );
              return {
                id: b.id ?? crypto.randomUUID(),
                kind: normalizedKind,
                responseMode:
                  b.responseMode ??
                  (normalizedKind === "test" ? (b.optionsRaw?.trim() ? "single_choice" : "open_question") : undefined),
                title: b.title ?? BLOCK_TEMPLATES.find((t) => t.kind === normalizedKind)?.defaultTitle ?? "Блок",
                text: b.text ?? "",
                gradeEnabled: Boolean(b.gradeEnabled),
                buttonLabel: b.buttonLabel ?? (normalizedKind === "explanation" ? "Начать" : "Добавить кнопку"),
                optionsRaw: b.optionsRaw ?? "",
                correctOptionKeys,
                correctOptionKey: correctOptionKeys[0] ?? undefined,
                mediaFileName: b.mediaFileName ?? "",
                mediaDataUrl: b.mediaDataUrl ?? "",
                x: typeof b.x === "number" ? b.x : 40 + (idx % 4) * (CANVAS_BLOCK_WIDTH + 36),
                y: typeof b.y === "number" ? b.y : 40 + Math.floor(idx / 4) * 230,
              };
            })
          : []
      );
      setTaskGraphEdges(
        Array.isArray(parsed.taskGraph?.edges)
          ? parsed.taskGraph.edges
              .filter((edge) => edge?.fromId && edge?.toId)
              .map((edge) => ({
                id: edge.id ?? crypto.randomUUID(),
                fromId: edge.fromId,
                fromType: edge.fromType === "option" ? "option" : "block",
                fromOptionKey: edge.fromOptionKey,
                toId: edge.toId,
                fromSide: edge.fromSide,
                toSide: edge.toSide,
                label: edge.label ?? "",
              }))
          : []
      );
      setSelectedCanvasBlockId(null);
      {
        let gs = parseGradingSettings(parsed.gradingSettings);
        const ms = selectedAssignment.maxScore;
        if (typeof ms === "number" && ms > 0) gs = { ...gs, maxScore: ms };
        setGradingSettings(gs);
      }
      setPreviewImageNames(Array.isArray(parsed.previewImageNames) ? parsed.previewImageNames : []);
      setMethodicFileNames(Array.isArray(parsed.methodicFileNames) ? parsed.methodicFileNames : []);
    } catch {
      setTaskBlocks([]);
      setTaskGraphEdges([]);
      setSelectedCanvasBlockId(null);
      setGradingSettings({
        ...DEFAULT_GRADING_SETTINGS,
        maxScore: selectedAssignment.maxScore ?? DEFAULT_GRADING_SETTINGS.maxScore,
      });
      setPreviewImageNames([]);
      setMethodicFileNames([]);
    }
  }, [selectedAssignment]);

  function handleLogout() {
    clearTeacherCookie();
    router.replace("/");
    window.location.assign("/");
  }

  function resetCreateForm() {
    setSelectedAssignmentId("");
    setStep(1);
    setLessonTitle("");
    setLessonDescription("");
    setTaskBlocks([]);
    setTaskGraphEdges([]);
    setSelectedCanvasBlockId(null);
    setSelectedEdgeId(null);
    setDraftEdgeStart(null);
    setDraftEdgeCursor(null);
    setHoveredAnchor(null);
    setHoveredBlockId(null);
    setGradingSettings({ ...DEFAULT_GRADING_SETTINGS });
    setPreviewImageNames([]);
    setMethodicFileNames([]);
  }

  function addBlock(kind: WizardBlock["kind"]) {
    const template = BLOCK_TEMPLATES.find((t) => t.kind === kind);
    const newId = crypto.randomUUID();
    setTaskBlocks((prev) => [
      ...prev,
      {
        id: newId,
        kind,
        responseMode: kind === "test" ? "single_choice" : undefined,
        title: template ? template.defaultTitle : "Новый блок",
        text: template ? template.defaultText : "",
        gradeEnabled: kind === "test",
        buttonLabel: kind === "explanation" ? "Начать" : "Добавить кнопку",
        optionsRaw: kind === "test" ? "Вариант 1\nВариант 2\nВариант 3" : "",
        correctOptionKeys: kind === "test" ? [] : undefined,
        mediaFileName: "",
        mediaDataUrl: "",
        x: 40 + (prev.length % 3) * (CANVAS_BLOCK_WIDTH + 36),
        y: 40 + Math.floor(prev.length / 3) * 170,
      },
    ]);
    setSelectedCanvasBlockId(newId);
  }

  function updateBlock(id: string, patch: Partial<WizardBlock>) {
    setTaskBlocks((prev) => prev.map((block) => (block.id === id ? { ...block, ...patch } : block)));
  }

  function updateBlockOption(blockId: string, optionIndex: number, value: string) {
    setTaskBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== blockId) return block;
        const options = getBlockOptions(block).map((o) => o.label);
        if (optionIndex < 0 || optionIndex >= options.length) return block;
        options[optionIndex] = value;
        return { ...block, optionsRaw: options.join("\n") };
      })
    );
  }

  function addBlockOption(blockId: string) {
    setTaskBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== blockId) return block;
        const options = getBlockOptions(block).map((o) => o.label);
        options.push(`Вариант ${options.length + 1}`);
        return { ...block, optionsRaw: options.join("\n") };
      })
    );
  }

  function removeBlockOption(blockId: string, optionIndex: number) {
    setTaskBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== blockId) return block;
        const options = getBlockOptions(block).map((o) => o.label);
        if (optionIndex < 0 || optionIndex >= options.length) return block;
        options.splice(optionIndex, 1);
        const nextRaw = options.join("\n");
        const nextBlock = { ...block, optionsRaw: nextRaw };
        const keys = new Set(getBlockOptions(nextBlock).map((o) => o.key));
        const nextCorrectKeys = normalizeCorrectOptionKeys(
          (block.correctOptionKeys ?? (block.correctOptionKey ? [block.correctOptionKey] : [])).filter((k) =>
            keys.has(k)
          )
        );
        return {
          ...nextBlock,
          correctOptionKeys: nextCorrectKeys,
          correctOptionKey: nextCorrectKeys[0] ?? undefined,
        };
      })
    );
  }

  function getFileAcceptForKind(kind: WizardBlock["kind"]) {
    if (kind === "image") return "image/*";
    if (kind === "audio") return "audio/*";
    if (kind === "video") return "video/mp4";
    if (kind === "presentation") return ".pdf,application/pdf";
    return "*";
  }

  async function uploadMediaFile(kind: WizardBlock["kind"], file: File): Promise<string | null> {
    const formData = new FormData();
    formData.append("kind", kind);
    formData.append("file", file);
    const res = await fetch("/api/media/upload", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) return null;
    const payload = (await res.json()) as { url?: unknown };
    return typeof payload.url === "string" ? payload.url : null;
  }

  function handleBlockFileUpload(blockId: string, kind: WizardBlock["kind"], file: File | null) {
    if (!file) return;
    void (async () => {
      try {
        // Видео сохраняем на диск и в конфиг пишем только URL.
        if (kind === "video") {
          const uploadedUrl = await uploadMediaFile(kind, file);
          if (!uploadedUrl) {
            setUiError("Не удалось загрузить видео. Попробуйте ещё раз.");
            return;
          }
          updateBlock(blockId, {
            mediaFileName: file.name,
            mediaDataUrl: uploadedUrl,
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = typeof reader.result === "string" ? reader.result : "";
          const patch: Partial<WizardBlock> = {
            mediaFileName: file.name,
            mediaDataUrl: dataUrl,
          };
          if (kind === "presentation") {
            patch.text = `Файл: ${file.name}`;
          }
          updateBlock(blockId, patch);
        };
        reader.readAsDataURL(file);
      } catch {
        setUiError("Ошибка загрузки файла");
      }
    })();
  }

  function removeBlock(id: string) {
    setTaskBlocks((prev) => prev.filter((block) => block.id !== id));
  }

  function moveBlockOnCanvas(id: string, x: number, y: number) {
    setTaskBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== id) return block;
        const nextX = Math.max(12, Math.min(x, CANVAS_WIDTH - CANVAS_BLOCK_WIDTH - 12));
        const nextY = Math.max(12, Math.min(y, CANVAS_HEIGHT - getBlockHeight(block) - 12));
        return { ...block, x: nextX, y: nextY };
      })
    );
  }

  function addGraphEdge(start: EdgeAnchor, end: EdgeAnchor) {
    if (start.blockId === end.blockId) return;
    if (start.sourceType === "option") {
      const fromBlock = getBlockById(start.blockId);
      if (!fromBlock || fromBlock.kind !== "test" || fromBlock.responseMode === "open_question") return;
    }
    setTaskGraphEdges((prev) => {
      const existingFromOption =
        start.sourceType === "option"
          ? prev.find(
              (edge) =>
                edge.fromId === start.blockId &&
                (edge.fromType ?? "block") === "option" &&
                (edge.fromOptionKey ?? "") === (start.optionKey ?? "")
            )
          : null;
      if (existingFromOption) return prev;
      const duplicate = prev.some(
        (edge) =>
          edge.fromId === start.blockId &&
          edge.toId === end.blockId &&
          (edge.fromType ?? "block") === start.sourceType &&
          (edge.fromOptionKey ?? "") === (start.optionKey ?? "") &&
          edge.fromSide === start.side &&
          edge.toSide === end.side
      );
      if (duplicate) return prev;
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          fromId: start.blockId,
          fromType: start.sourceType,
          fromOptionKey: start.optionKey,
          toId: end.blockId,
          fromSide: start.side,
          toSide: end.side,
          label: "",
        },
      ];
    });
    setSelectedEdgeId(null);
    setDraftEdgeStart(null);
    setDraftEdgeCursor(null);
  }

  function getBlockById(blockId: string) {
    return taskBlocks.find((block) => block.id === blockId) ?? null;
  }

  function isOutputAnchor(anchor: EdgeAnchor) {
    const block = getBlockById(anchor.blockId);
    if (!block) return false;
    if (anchor.sourceType === "option") {
      return block.kind === "test" && block.responseMode !== "open_question";
    }
    if (block.kind === "test") return block.responseMode === "open_question" && anchor.side === "right";
    return anchor.side === "right";
  }

  function isInputAnchor(anchor: EdgeAnchor) {
    if (anchor.sourceType !== "block") return false;
    return anchor.side === "left";
  }

  function removeGraphEdge(edgeId: string) {
    setTaskGraphEdges((prev) => prev.filter((edge) => edge.id !== edgeId));
    if (selectedEdgeId === edgeId) setSelectedEdgeId(null);
  }

  function removeSelectedEdge() {
    if (!selectedEdgeId) return;
    removeGraphEdge(selectedEdgeId);
  }

  function zoomIn() {
    setCanvasScale((prev) => Math.min(2, Math.round((prev + 0.1) * 10) / 10));
  }

  function zoomOut() {
    setCanvasScale((prev) => Math.max(0.6, Math.round((prev - 0.1) * 10) / 10));
  }

  function getAnchorPoint(block: WizardBlock, side: AnchorSide) {
    const height = getBlockHeight(block);
    if (side === "top") return { x: block.x + CANVAS_BLOCK_WIDTH / 2, y: block.y };
    if (side === "right") return { x: block.x + CANVAS_BLOCK_WIDTH, y: block.y + 20 };
    if (side === "bottom") return { x: block.x + CANVAS_BLOCK_WIDTH / 2, y: block.y + height };
    return { x: block.x, y: block.y + 20 };
  }

  /** Строки optionsRaw без схлопывания пустых — удаление только по «×». */
  function getBlockOptions(block: WizardBlock) {
    if (block.kind !== "test") return [];
    return (block.optionsRaw ?? "").split("\n").map((line, idx) => ({
      key: `opt-${idx}`,
      label: line.replace(/\r$/, ""),
      index: idx,
    }));
  }

  function getBlockHeight(block: WizardBlock) {
    if (block.kind !== "test") return CANVAS_BLOCK_HEIGHT;
    const optionCount = Math.max(getBlockOptions(block).length, 1);
    return CANVAS_BLOCK_HEIGHT + CANVAS_TEST_EXTRA_HEIGHT + optionCount * OPTION_ROW_HEIGHT;
  }

  function getOptionAnchorRefKey(blockId: string, optionKey: string) {
    return `${blockId}::${optionKey}`;
  }

  function getOptionAnchorPoint(block: WizardBlock, optionKey: string) {
    const anchorEl = optionAnchorRefs.current[getOptionAnchorRefKey(block.id, optionKey)];
    const sceneEl = canvasSceneRef.current;
    if (anchorEl && sceneEl) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const sceneRect = sceneEl.getBoundingClientRect();
      return {
        x: (anchorRect.left + anchorRect.width / 2 - sceneRect.left) / canvasScale,
        y: (anchorRect.top + anchorRect.height / 2 - sceneRect.top) / canvasScale,
      };
    }
    const optionIndex = Number.parseInt(optionKey.replace("opt-", ""), 10);
    const safeIndex = Number.isInteger(optionIndex) ? optionIndex : 0;
    const y = block.y + OPTION_Y_OFFSET + safeIndex * OPTION_ROW_HEIGHT + OPTION_ROW_HEIGHT / 2;
    return { x: block.x + CANVAS_BLOCK_WIDTH, y };
  }

  function resolveEdgeSides(edge: TaskGraphEdge, from: WizardBlock, to: WizardBlock) {
    if ((edge.fromType ?? "block") === "option") {
      return {
        fromSide: "right" as const,
        toSide: edge.toSide ?? ("left" as const),
      };
    }
    if (edge.fromSide && edge.toSide) return { fromSide: edge.fromSide, toSide: edge.toSide };
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    if (Math.abs(dx) >= Math.abs(dy)) {
      return dx >= 0
        ? { fromSide: "right" as const, toSide: "left" as const }
        : { fromSide: "left" as const, toSide: "right" as const };
    }
    return dy >= 0
      ? { fromSide: "bottom" as const, toSide: "top" as const }
      : { fromSide: "top" as const, toSide: "bottom" as const };
  }

  function shouldShowAnchor(blockId: string, side: AnchorSide) {
    if (draftEdgeStart) {
      if (blockId === draftEdgeStart.blockId) {
        return draftEdgeStart.sourceType === "block" && draftEdgeStart.side === side;
      }
      return true;
    }
    return hoveredBlockId === blockId;
  }

  function shouldShowOptionAnchor(blockId: string, optionKey: string) {
    if (draftEdgeStart) {
      if (blockId === draftEdgeStart.blockId) {
        return draftEdgeStart.sourceType === "option" && draftEdgeStart.optionKey === optionKey;
      }
      return true;
    }
    return hoveredBlockId === blockId;
  }

  function cancelDraftEdgeStart() {
    setDraftEdgeStart(null);
    setDraftEdgeCursor(null);
  }

  function handleAnchorClick(anchor: EdgeAnchor) {
    if (!draftEdgeStart) {
      if (!isOutputAnchor(anchor)) return;
      setDraftEdgeStart(anchor);
      setDraftEdgeCursor(null);
      return;
    }
    if (!isInputAnchor(anchor)) return;
    addGraphEdge(draftEdgeStart, anchor);
  }

  useEffect(() => {
    if (!draftEdgeStart) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cancelDraftEdgeStart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [draftEdgeStart]);

  useEffect(() => {
    const ids = new Set(taskBlocks.map((block) => block.id));
    const optionKeysByBlock = new Map(
      taskBlocks.map((block) => [
        block.id,
        new Set(block.kind === "test" ? getBlockOptions(block).map((opt) => opt.key) : []),
      ])
    );
    setTaskGraphEdges((prev) =>
      prev.filter((edge) => {
        if (!ids.has(edge.fromId) || !ids.has(edge.toId)) return false;
        const fromBlock = taskBlocks.find((block) => block.id === edge.fromId);
        const toBlock = taskBlocks.find((block) => block.id === edge.toId);
        if (!fromBlock || !toBlock) return false;
        if ((edge.fromType ?? "block") === "option") {
          if (!edge.fromOptionKey) return false;
          if (fromBlock.kind !== "test") return false;
          if (fromBlock.responseMode === "open_question") return false;
          if (!(optionKeysByBlock.get(edge.fromId)?.has(edge.fromOptionKey) ?? false)) return false;
          return (edge.toSide ?? "left") === "left";
        }
        if (fromBlock.kind === "test") {
          return (
            fromBlock.responseMode === "open_question" &&
            (edge.fromSide ?? "right") === "right" &&
            (edge.toSide ?? "left") === "left"
          );
        }
        return (edge.fromSide ?? "right") === "right" && (edge.toSide ?? "left") === "left";
      })
    );
    if (selectedCanvasBlockId && !ids.has(selectedCanvasBlockId)) setSelectedCanvasBlockId(null);
    if (selectedEdgeId && !taskGraphEdges.some((edge) => edge.id === selectedEdgeId)) setSelectedEdgeId(null);
    if (hoveredBlockId && !ids.has(hoveredBlockId)) setHoveredBlockId(null);
    if (draftEdgeStart && !ids.has(draftEdgeStart.blockId)) {
      setDraftEdgeStart(null);
      setDraftEdgeCursor(null);
    }
    if (hoveredAnchor && !ids.has(hoveredAnchor.blockId)) setHoveredAnchor(null);
  }, [taskBlocks, selectedCanvasBlockId, selectedEdgeId, taskGraphEdges, hoveredBlockId, draftEdgeStart, hoveredAnchor]);

  async function persistWizard(opts?: { publish?: boolean }) {
    if (typeof workspaceLessonId !== "number") return;
    setIsSaving(true);
    setUiError(null);
    try {
      const gradingPayload: GradingSettings =
        gradingSettings.tiers.length > 0
          ? gradingSettings
          : { ...gradingSettings, tiers: [...DEFAULT_GRADING_SETTINGS.tiers] };
      const configJson = JSON.stringify({
        taskBlocks,
        taskGraph: {
          edges: taskGraphEdges,
        },
        gradingSettings: gradingPayload,
        previewImageNames,
        methodicFileNames,
      });
      let assignmentId = selectedAssignmentId;
      if (typeof assignmentId !== "number") {
        const created = await assignmentCreate.mutateAsync({
          lessonId: workspaceLessonId,
          title: lessonTitle.trim() || "Без названия",
          instruction: lessonDescription.trim() || "Описание не заполнено",
          taskType: "text_quest",
          answerFormat: "mixed",
        });
        assignmentId = created.id;
        setSelectedAssignmentId(created.id);
      }
      const gradingModeDb =
        gradingPayload.gradingMode === "manual" ? "manual" : "auto_first_try";
      await assignmentUpdate.mutateAsync({
        id: assignmentId as number,
        title: lessonTitle.trim() || "Без названия",
        instruction: lessonDescription.trim() || "Описание не заполнено",
        taskType: "text_quest",
        answerFormat: "mixed",
        configJson,
        maxScore: gradingPayload.maxScore,
        gradingMode: gradingModeDb,
        isPublished: opts?.publish ? true : undefined,
      });
      await refetchAssignments();
      void utils.teacher.assignmentDashboardOverview.invalidate();
    } catch (err: unknown) {
      if (err instanceof TRPCClientError) {
        setUiError(err.message);
      } else {
        setUiError("Ошибка сохранения занятия");
      }
    } finally {
      setIsSaving(false);
    }
  }

  async function handleNext() {
    if (step === 1 || step === 2 || step === 4) {
      await persistWizard();
    }
    setStep((prev) => Math.min(prev + 1, 4));
  }

  function handleBack() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  async function handlePublish() {
    await persistWizard({ publish: true });
  }

  function toggleAssignClass(key: string) {
    setAssignedClasses((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  async function handleAssignToClasses() {
    if (typeof assignTargetId !== "number") return;
    const selected = Object.entries(assignedClasses)
      .filter(([, checked]) => checked)
      .map(([key]) => {
        const [schoolId, className] = key.split("::");
        if (!className) return null;
        return { schoolId: Number(schoolId), className };
      })
      .filter((v): v is { schoolId: number; className: string } => v !== null);
    setUiError(null);
    try {
      await assignmentAssignClasses.mutateAsync({
        assignmentId: assignTargetId,
        classes: selected,
      });
      void utils.teacher.assignmentDashboardOverview.invalidate();
      void utils.teacher.gradesOverview.invalidate();
      if (selectedClassKey) {
        const parsed = selectedClassKey.split("::");
        const schoolId = Number(parsed[0]);
        const className = parsed.slice(1).join("::");
        if (Number.isFinite(schoolId) && className) {
          void utils.teacher.classRosterProgress.invalidate({ schoolId, className });
          void utils.teacher.gradebookMatrix.invalidate({ schoolId, className });
        }
      }
    } catch (err: unknown) {
      if (err instanceof TRPCClientError) {
        setUiError(err.message);
      } else {
        setUiError("Не удалось назначить занятие классам");
      }
    }
  }

  async function handleDeleteAssignment(assignmentId: number) {
    const ok = window.confirm("Удалить занятие без возможности восстановления?");
    if (!ok) return;
    setUiError(null);
    try {
      await assignmentDelete.mutateAsync({ id: assignmentId });
      if (selectedAssignmentId === assignmentId) {
        resetCreateForm();
      }
      await refetchAssignments();
      void utils.teacher.assignmentDashboardOverview.invalidate();
    } catch (err: unknown) {
      if (err instanceof TRPCClientError) {
        setUiError(err.message);
      } else {
        setUiError("Не удалось удалить занятие");
      }
    }
  }

  if (meLoading || !me) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12 text-center text-stone-500">Загрузка…</div>
      </main>
    );
  }

  if (meError) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <p className="text-red-600">Нет доступа. Войдите как педагог.</p>
          <Link
            href="/teacher"
            className="mt-4 inline-block rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
          >
            Войти
          </Link>
        </div>
      </main>
    );
  }

  const stepTitle =
    step === 1
      ? "Редактирование шаг 1 из 4"
      : step === 2
      ? "Редактирование шаг 2 из 4"
      : step === 3
      ? "Редактирование шаг 3 из 4"
      : "Редактирование шаг 4 из 4";

  const shareLink =
    typeof selectedAssignmentId === "number"
      ? `https://perspective.local/assignment/${selectedAssignmentId}`
      : "https://perspective.local/assignment/demo";
  const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    shareLink
  )}`;

  function navigateTab(id: ActiveTab) {
    if (id === "settings") return;
    setActiveTab(id);
    if (id === "create") setStep(1);
  }

  const teacherDisplayName = me.emailOrPhone.includes("@")
    ? me.emailOrPhone.split("@")[0]!
    : me.emailOrPhone;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen w-full">
        <TeacherSidebar
          activeTab={activeTab === "create" ? "assignments" : activeTab}
          onNavigate={navigateTab}
          teacherLabel={teacherDisplayName}
          onLogout={handleLogout}
        />

        <section className="min-w-0 flex-1 overflow-y-auto p-4 lg:p-8">
          {uiError && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {uiError}
            </div>
          )}
          {activeTab === "assignments" && (
            <AssignmentsHome
              rows={dashboardOverview?.assignments ?? []}
              totals={
                dashboardOverview?.totals ?? {
                  assignedStudentCount: 0,
                  submittedCount: 0,
                  inProgressCount: 0,
                  notStartedCount: 0,
                  avgProgressPercent: 0,
                }
              }
              loading={overviewLoading}
              onCreate={() => {
                resetCreateForm();
                setActiveTab("create");
                setStep(1);
              }}
              onOpen={(id) => {
                setSelectedAssignmentId(id);
                setStep(1);
                setActiveTab("create");
              }}
              onAssign={(id) => {
                setAssignTargetId(id);
                setActiveTab("students");
              }}
              onStats={(id) => {
                setAnalyticsFocusId(id);
                setActiveTab("analytics");
              }}
              onDelete={(id) => void handleDeleteAssignment(id)}
              deletePending={assignmentDelete.isPending}
            />
          )}

          {activeTab === "materials" && (
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-900">Материалы</h1>
                <button
                  type="button"
                  onClick={() => {
                    resetCreateForm();
                    setActiveTab("create");
                  }}
                  className="rounded-lg bg-amber-600 px-4 py-2.5 text-base font-medium text-white hover:bg-amber-700"
                >
                  Новое занятие
                </button>
              </div>
              {libraryLoading ? (
                <p className="text-sm text-stone-500">Загрузка библиотеки...</p>
              ) : (assignmentList ?? []).length === 0 ? (
                <p className="text-sm text-stone-500">Пока нет сохраненных занятий.</p>
              ) : (
                <div className="space-y-2">
                  {(assignmentList ?? []).map((assignment) => (
                    <div key={assignment.id} className="rounded-lg border border-stone-200 p-3">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-stone-900">{assignment.title}</p>
                          <p className="mt-1 text-sm text-stone-600">{assignment.instruction}</p>
                          <p className="mt-1 text-xs text-stone-500">
                            {assignment.isPublished ? "Опубликован" : "Черновик"}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedAssignmentId(assignment.id);
                              setStep(1);
                              setActiveTab("create");
                            }}
                            className="rounded-lg border border-stone-300 px-4 py-2.5 text-base hover:bg-stone-100"
                          >
                            Открыть в редакторе
                          </button>
                          <button
                            type="button"
                            onClick={() => void handleDeleteAssignment(assignment.id)}
                            disabled={assignmentDelete.isPending}
                            className="rounded-lg border border-red-200 px-4 py-2.5 text-base text-red-700 hover:bg-red-50 disabled:opacity-50"
                          >
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "students" && (
            <StudentsSection
              classList={classList ?? []}
              selectedClassKey={selectedClassKey}
              onClassKeyChange={setSelectedClassKey}
              assignments={(assignmentList ?? []).map((a) => ({ id: a.id, title: a.title }))}
              assignTargetId={assignTargetId}
              onAssignTargetChange={setAssignTargetId}
              assignedClasses={assignedClasses}
              onToggleClass={toggleAssignClass}
              onAssignSubmit={() => void handleAssignToClasses()}
              assignPending={assignmentAssignClasses.isPending}
            />
          )}

          {activeTab === "journal" && (
            <JournalSection
              classList={classList ?? []}
              selectedClassKey={selectedClassKey}
              onClassKeyChange={setSelectedClassKey}
            />
          )}

          {activeTab === "grades" && (
            <GradesProgressSection
              onOpenAnalytics={(id) => {
                setAnalyticsFocusId(id);
                setActiveTab("analytics");
              }}
            />
          )}

          {activeTab === "analytics" && (
            <AnalyticsSection focusAssignmentId={analyticsFocusId} />
          )}

          {activeTab === "autoReview" && <AutoReviewSection />}

          {activeTab === "settings" && (
            <StubSection
              title="Настройки"
              description="Профиль педагога, уведомления, параметры оценивания по умолчанию. Обмен сообщениями с учащимися — в следующей версии."
            />
          )}

          {activeTab === "create" && (
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("assignments")}
                    className="mb-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    ← К списку заданий
                  </button>
                  <h1 className="text-2xl font-bold text-slate-900">Создать занятие</h1>
                  <p className="text-sm text-slate-500">{stepTitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="rounded-lg border border-stone-300 px-4 py-2.5 text-base disabled:opacity-50"
                  >
                    Назад
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleNext()}
                    disabled={step === 4 || isSaving || workspaceLessonId == null}
                    className="rounded-lg bg-amber-600 px-4 py-2.5 text-base font-medium text-white hover:bg-amber-700 disabled:opacity-50"
                  >
                    {isSaving ? "Сохранение..." : "Далее"}
                  </button>
                </div>
              </div>

              {step === 1 && (
                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
                  <div className="space-y-4">
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-stone-700">Название урока</span>
                      <input
                        type="text"
                        value={lessonTitle}
                        onChange={(e) => setLessonTitle(e.target.value)}
                        placeholder="Например: Социальные роли и нормы"
                        className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-stone-700">Краткое описание</span>
                      <textarea
                        value={lessonDescription}
                        onChange={(e) => setLessonDescription(e.target.value)}
                        onDoubleClick={() => setTextModal({ type: "lesson", value: lessonDescription })}
                        rows={6}
                        title="Двойной щелчок — открыть окно редактирования"
                        placeholder="Опишите цель урока, основной результат и формат работы."
                        className="rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </label>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                    <h3 className="text-sm font-semibold text-stone-800">Подсказка</h3>
                    <p className="mt-2 text-sm text-stone-600">
                      Заполните название и описание. Далее настройте блоки, связи, выдачу и оценивание.
                    </p>
                    <div className="mt-3 rounded-lg bg-white p-3 text-xs text-stone-500">
                      <p>• Шаг 2: блоки и переходы</p>
                      <p>• Шаг 3: доступ к уроку</p>
                      <p>• Шаг 4: оценивание и материалы</p>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div
                  className={
                    isCanvasMaximized
                      ? "fixed inset-2 z-40 flex flex-col rounded-xl border border-stone-300 bg-white p-3 shadow-2xl"
                      : "mt-6 space-y-3"
                  }
                >
                  {!isCanvasMaximized && (
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-stone-900">Конструктор блоков заданий</h3>
                      <span className="text-sm text-stone-500">Пустой канвас + панель инструментов блоков</span>
                    </div>
                  )}
                  <div className={`space-y-3 ${isCanvasMaximized ? "flex min-h-0 flex-1 flex-col" : ""}`}>
                    <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {BLOCK_TEMPLATES.map((tpl) => (
                          <button
                            key={tpl.kind}
                            type="button"
                            onClick={() => addBlock(tpl.kind)}
                            className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-800 hover:border-amber-300 hover:bg-amber-50"
                            title={tpl.hint}
                          >
                            {tpl.label}
                          </button>
                        ))}
                        <div className="ml-auto flex flex-wrap items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setCanvasTool("select")}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${canvasTool === "select" ? "border-cyan-500 bg-cyan-50 text-cyan-700" : "border-stone-300 bg-white text-stone-700"}`}
                            title="Режим выбора"
                          >
                            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="M5 5h6v2H8.4l7.6 7.6-1.4 1.4L7 8.4V11H5V5z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => setCanvasTool("pan")}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${canvasTool === "pan" ? "border-cyan-500 bg-cyan-50 text-cyan-700" : "border-stone-300 bg-white text-stone-700"}`}
                            title="Режим перемещения"
                          >
                            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="M6 15.5V8.8a1 1 0 0 1 2 0v3.2-5.8a1 1 0 0 1 2 0V12V7a1 1 0 1 1 2 0v5V8.3a1 1 0 1 1 2 0v5.2c0 2-1.3 3.5-3.2 3.5H9.2C7.3 17 6 15.8 6 15.5z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={zoomIn}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-700"
                            title="Увеличить"
                          >
                            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <circle cx="9" cy="9" r="5.5" />
                              <path d="M9 6.6v4.8M6.6 9h4.8M13 13l3.2 3.2" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={zoomOut}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-700"
                            title="Уменьшить"
                          >
                            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <circle cx="9" cy="9" r="5.5" />
                              <path d="M6.6 9h4.8M13 13l3.2 3.2" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsCanvasMaximized((prev) => !prev)}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${
                              isCanvasMaximized
                                ? "border-cyan-500 bg-cyan-50 text-cyan-700"
                                : "border-stone-300 bg-white text-stone-700"
                            }`}
                            title={isCanvasMaximized ? "Свернуть канвас" : "Развернуть канвас"}
                          >
                            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d={isCanvasMaximized ? "M7 3H3v4M13 3h4v4M3 13v4h4M17 13v4h-4" : "M3 8V3h5M12 3h5v5M17 12v5h-5M8 17H3v-5"} />
                            </svg>
                          </button>
                          <span className="ml-1 min-w-[3.2rem] text-right text-xs font-medium text-stone-500">
                            {Math.round(canvasScale * 100)}%
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex min-h-[38px] flex-wrap items-center gap-2">
                        {selectedEdgeId && (
                          <button
                            type="button"
                            onClick={removeSelectedEdge}
                            className="rounded-lg border border-red-200 px-4 py-2 text-base text-red-700 hover:bg-red-50"
                          >
                            Удалить выбранную связь
                          </button>
                        )}
                      </div>
                    </div>

                    <div className={`rounded-xl border border-stone-200 bg-white p-2 ${isCanvasMaximized ? "min-h-0 flex-1" : ""}`}>
                      <div
                        className={`overflow-auto rounded-lg border border-stone-200 ${
                          isCanvasMaximized ? "h-full min-h-0" : "max-h-[760px]"
                        } ${
                          canvasTool === "pan" ? "cursor-grab active:cursor-grabbing" : "cursor-default"
                        }`}
                        onMouseDown={(e) => {
                          if (canvasTool !== "pan") return;
                          panStartRef.current = { x: e.clientX, y: e.clientY };
                          scrollStartRef.current = {
                            x: e.currentTarget.scrollLeft,
                            y: e.currentTarget.scrollTop,
                          };
                        }}
                        onMouseMove={(e) => {
                          if (canvasTool !== "pan" || !panStartRef.current || !scrollStartRef.current) return;
                          const dx = e.clientX - panStartRef.current.x;
                          const dy = e.clientY - panStartRef.current.y;
                          e.currentTarget.scrollLeft = scrollStartRef.current.x - dx;
                          e.currentTarget.scrollTop = scrollStartRef.current.y - dy;
                        }}
                        onMouseUp={() => {
                          panStartRef.current = null;
                          scrollStartRef.current = null;
                        }}
                        onMouseLeave={() => {
                          panStartRef.current = null;
                          scrollStartRef.current = null;
                        }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          if (canvasTool !== "select") return;
                          e.preventDefault();
                          const blockId = e.dataTransfer.getData("text/plain");
                          if (!blockId) return;
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x =
                            (e.clientX - rect.left + e.currentTarget.scrollLeft) / canvasScale -
                            CANVAS_BLOCK_WIDTH / 2;
                          const y = (e.clientY - rect.top + e.currentTarget.scrollTop) / canvasScale - 40;
                          moveBlockOnCanvas(blockId, x, y);
                        }}
                      >
                        <div style={{ width: CANVAS_WIDTH * canvasScale, height: CANVAS_HEIGHT * canvasScale }}>
                        <div
                          ref={canvasSceneRef}
                          className="relative overflow-hidden bg-[linear-gradient(#f5f5f4_1px,transparent_1px),linear-gradient(90deg,#f5f5f4_1px,transparent_1px)] bg-[size:24px_24px]"
                          style={{
                            width: CANVAS_WIDTH,
                            height: CANVAS_HEIGHT,
                            transform: `scale(${canvasScale})`,
                            transformOrigin: "top left",
                          }}
                          onClick={() => {
                            setSelectedEdgeId(null);
                            if (draftEdgeStart) cancelDraftEdgeStart();
                          }}
                          onMouseMove={(e) => {
                            if (!draftEdgeStart) return;
                            const rect = e.currentTarget.getBoundingClientRect();
                            setDraftEdgeCursor({
                              x: (e.clientX - rect.left) / canvasScale,
                              y: (e.clientY - rect.top) / canvasScale,
                            });
                          }}
                          onMouseLeave={() => {
                            setHoveredBlockId(null);
                            setHoveredAnchor(null);
                            if (draftEdgeStart) setDraftEdgeCursor(null);
                          }}
                        >
                          <svg
                            className="absolute inset-0 z-0"
                            width={CANVAS_WIDTH}
                            height={CANVAS_HEIGHT}
                            viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
                          >
                            <defs>
                              <marker
                                id="edge-arrow"
                                viewBox="0 0 10 10"
                                refX="9"
                                refY="5"
                                markerWidth="6"
                                markerHeight="6"
                                orient="auto-start-reverse"
                              >
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#a8a29e" />
                              </marker>
                            </defs>
                            {draftEdgeStart && draftEdgeCursor
                              ? (() => {
                                  const startBlock = taskBlocks.find((b) => b.id === draftEdgeStart.blockId);
                                  if (!startBlock) return null;
                                  const start =
                                    draftEdgeStart.sourceType === "option" && draftEdgeStart.optionKey
                                      ? getOptionAnchorPoint(startBlock, draftEdgeStart.optionKey)
                                      : getAnchorPoint(startBlock, draftEdgeStart.side);
                                  const curve = Math.max(40, Math.abs(draftEdgeCursor.x - start.x) * 0.35);
                                  const path = `M ${start.x} ${start.y} C ${start.x + curve} ${start.y}, ${
                                    draftEdgeCursor.x - curve
                                  } ${draftEdgeCursor.y}, ${draftEdgeCursor.x} ${draftEdgeCursor.y}`;
                                  return (
                                    <path
                                      d={path}
                                      fill="none"
                                      stroke="#3b82f6"
                                      strokeWidth="2"
                                      strokeDasharray="6 4"
                                      opacity="0.9"
                                    />
                                  );
                                })()
                              : null}
                            {taskGraphEdges.map((edge) => {
                              const from = taskBlocks.find((b) => b.id === edge.fromId);
                              const to = taskBlocks.find((b) => b.id === edge.toId);
                              if (!from || !to) return null;
                              const { fromSide, toSide } = resolveEdgeSides(edge, from, to);
                              const startPoint =
                                (edge.fromType ?? "block") === "option" && edge.fromOptionKey
                                  ? getOptionAnchorPoint(from, edge.fromOptionKey)
                                  : getAnchorPoint(from, fromSide);
                              const endPoint = getAnchorPoint(to, toSide);
                              const startX = startPoint.x;
                              const startY = startPoint.y;
                              const endX = endPoint.x;
                              const endY = endPoint.y;
                              const curve = Math.max(40, Math.abs(endX - startX) * 0.35);
                              const path = `M ${startX} ${startY} C ${startX + curve} ${startY}, ${endX - curve} ${endY}, ${endX} ${endY}`;
                              const midX = (startX + endX) / 2;
                              const midY = (startY + endY) / 2;
                              const optionLabel =
                                (edge.fromType ?? "block") === "option" && edge.fromOptionKey
                                  ? getBlockOptions(from).find((opt) => opt.key === edge.fromOptionKey)?.label
                                  : null;
                              const edgeCaption = optionLabel
                                ? `Ответ: ${optionLabel}${edge.label ? ` · ${edge.label}` : ""}`
                                : edge.label ?? "";
                              return (
                                <g key={edge.id}>
                                  <path
                                    d={path}
                                    fill="none"
                                    stroke={selectedEdgeId === edge.id ? "#3b82f6" : "#a8a29e"}
                                    strokeWidth={selectedEdgeId === edge.id ? "3" : "2"}
                                    markerEnd="url(#edge-arrow)"
                                  />
                                  <path
                                    d={path}
                                    fill="none"
                                    stroke="transparent"
                                    strokeWidth="12"
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (draftEdgeStart) cancelDraftEdgeStart();
                                      setSelectedEdgeId(edge.id);
                                    }}
                                  />
                                  {edgeCaption ? (
                                    <>
                                      <rect
                                        x={midX - 80}
                                        y={midY - 13}
                                        width="160"
                                        height="20"
                                        rx="8"
                                        fill="white"
                                        stroke="#e7e5e4"
                                      />
                                      <text
                                        x={midX}
                                        y={midY + 1}
                                        textAnchor="middle"
                                        fontSize="11"
                                        fill="#57534e"
                                      >
                                        {edgeCaption}
                                      </text>
                                    </>
                                  ) : null}
                                </g>
                              );
                            })}
                          </svg>
                          {taskBlocks.length === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center text-sm text-stone-500">
                              Канвас пуст. Добавьте блок из панели инструментов слева.
                            </div>
                          )}
                          {taskBlocks.map((block) => (
                            <div
                              key={block.id}
                              draggable
                              onDragStart={(e) => {
                                if (canvasTool !== "select") {
                                  e.preventDefault();
                                  return;
                                }
                                e.dataTransfer.setData("text/plain", block.id);
                                setSelectedCanvasBlockId(block.id);
                              }}
                              onMouseEnter={() => setHoveredBlockId(block.id)}
                              onMouseLeave={() => setHoveredBlockId((prev) => (prev === block.id ? null : prev))}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (draftEdgeStart) cancelDraftEdgeStart();
                                setSelectedCanvasBlockId(block.id);
                              }}
                              className={`absolute z-10 cursor-move rounded-xl border bg-white p-3 shadow-sm ${
                                selectedCanvasBlockId === block.id ? "border-amber-400" : "border-stone-300"
                              }`}
                              style={{
                                left: block.x,
                                top: block.y,
                                minHeight: getBlockHeight(block),
                                width: CANVAS_BLOCK_WIDTH,
                              }}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="min-w-0 flex-1 whitespace-pre-line break-words text-xl font-extrabold leading-tight text-stone-900">
                                  {getCanvasBlockTitle(block)}
                                </h4>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeBlock(block.id);
                                  }}
                                  className="shrink-0 text-sm text-red-600 hover:text-red-700"
                                >
                                  удалить
                                </button>
                              </div>
                              <textarea
                                value={block.text}
                                onChange={(e) => updateBlock(block.id, { text: e.target.value })}
                                onDoubleClick={(e) => {
                                  e.stopPropagation();
                                  setTextModal({ type: "block", blockId: block.id, value: block.text });
                                }}
                                rows={6}
                                title="Двойной щелчок — развернуть редактор"
                                placeholder="Впишите текст"
                                className="mt-3 w-full rounded-lg border border-stone-300 px-3 py-2 text-sm"
                              />
                              {block.kind === "explanation" && (
                                <label className="mt-3 flex flex-col gap-1">
                                  <span className="text-sm font-medium text-stone-700">Текст кнопки старта</span>
                                  <input
                                    type="text"
                                    value={block.buttonLabel || "Начать"}
                                    onChange={(e) =>
                                      updateBlock(block.id, {
                                        buttonLabel: e.target.value.trim() === "" ? "Начать" : e.target.value,
                                      })
                                    }
                                    placeholder="Начать"
                                    className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                                  />
                                </label>
                              )}
                              {(block.kind === "presentation" ||
                                block.kind === "image" ||
                                block.kind === "audio" ||
                                block.kind === "video") && (
                                <label className="mt-3 flex flex-col gap-1">
                                  <span className="text-sm font-medium text-stone-700">Файл с компьютера</span>
                                  {block.kind === "presentation" && (
                                    <span className="text-xs text-stone-500">Презентация: только PDF (.pdf)</span>
                                  )}
                                  {block.kind === "video" && (
                                    <span className="text-xs text-stone-500">Видео: только MP4 (.mp4)</span>
                                  )}
                                  <input
                                    type="file"
                                    accept={getFileAcceptForKind(block.kind)}
                                    onChange={(e) =>
                                      handleBlockFileUpload(block.id, block.kind, e.target.files?.[0] ?? null)
                                    }
                                    className="rounded-lg border border-stone-300 bg-white px-2 py-2 text-xs text-stone-700 file:mr-3 file:rounded file:border-0 file:bg-stone-100 file:px-2 file:py-1 file:text-xs file:font-medium"
                                  />
                                  {block.mediaFileName && (
                                    <p className="text-xs text-stone-500">Загружен файл: {block.mediaFileName}</p>
                                  )}
                                  {block.kind === "image" && block.mediaDataUrl && (
                                    <img
                                      src={block.mediaDataUrl}
                                      alt={block.mediaFileName || "Изображение блока"}
                                      className="max-h-28 w-full rounded border border-stone-200 object-contain"
                                    />
                                  )}
                                  {block.kind === "audio" && block.mediaDataUrl && (
                                    <audio controls src={block.mediaDataUrl} className="w-full" />
                                  )}
                                  {block.kind === "video" && block.mediaDataUrl && (
                                    <video controls src={block.mediaDataUrl} className="max-h-32 w-full rounded" />
                                  )}
                                  {block.kind === "presentation" && block.mediaDataUrl && (
                                    <iframe
                                      src={block.mediaDataUrl}
                                      title={block.mediaFileName || "Презентация"}
                                      className="h-36 w-full rounded border border-stone-200 bg-white"
                                    />
                                  )}
                                </label>
                              )}
                              <div className="mt-3 flex items-center justify-between">
                                <span className="text-lg text-amber-500">•</span>
                                <span className="text-sm font-medium text-stone-700">Оценивать задание</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateBlock(block.id, { gradeEnabled: !block.gradeEnabled });
                                  }}
                                  className={`relative h-6 w-11 rounded-full transition ${
                                    block.gradeEnabled ? "bg-cyan-500" : "bg-stone-300"
                                  }`}
                                >
                                  <span
                                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                                      block.gradeEnabled ? "right-0.5" : "left-0.5"
                                    }`}
                                  />
                                </button>
                              </div>
                              {block.kind === "test" && (
                                <>
                                  <label className="mt-3 flex flex-col gap-1">
                                    <span className="text-sm font-medium text-cyan-800">Тип добавления</span>
                                    <select
                                      value={block.responseMode ?? "single_choice"}
                                      onChange={(e) => {
                                        const mode = e.target.value as "single_choice" | "open_question";
                                        updateBlock(block.id, {
                                          responseMode: mode,
                                          ...(mode === "open_question"
                                            ? { correctOptionKeys: [], correctOptionKey: undefined }
                                            : {}),
                                        });
                                      }}
                                      className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                                    >
                                      <option value="single_choice">Одиночный выбор</option>
                                      <option value="open_question">Открытый вопрос</option>
                                    </select>
                                  </label>
                                  {block.responseMode === "open_question" && (
                                    <p className="mt-2 text-xs text-stone-600">
                                      Строки ниже — подписи к полям ответа. От каждой строки можно провести стрелку к
                                      следующему блоку (часто все стрелки ведут в один блок).
                                    </p>
                                  )}
                                  <div className="mt-3 space-y-2">
                                      {getBlockOptions(block).map((option) => {
                                        const isVisible = shouldShowOptionAnchor(block.id, option.key);
                                        const isDraftStart =
                                          draftEdgeStart?.blockId === block.id &&
                                          draftEdgeStart.sourceType === "option" &&
                                          draftEdgeStart.optionKey === option.key;
                                        const isHovered =
                                          hoveredAnchor?.blockId === block.id &&
                                          hoveredAnchor.sourceType === "option" &&
                                          hoveredAnchor.optionKey === option.key;
                                        return (
                                          <div key={option.key} className="relative">
                                            <div className="flex items-center gap-2">
                                              {block.responseMode !== "open_question" && (
                                                <label className="flex shrink-0 cursor-pointer items-center gap-1 text-xs text-stone-600">
                                                  <input
                                                    type="checkbox"
                                                    checked={(block.correctOptionKeys ?? []).includes(option.key)}
                                                    onChange={() => {
                                                      const current = new Set(block.correctOptionKeys ?? []);
                                                      if (current.has(option.key)) {
                                                        current.delete(option.key);
                                                      } else {
                                                        current.add(option.key);
                                                      }
                                                      const next = normalizeCorrectOptionKeys([...current]);
                                                      updateBlock(block.id, {
                                                        correctOptionKeys: next,
                                                        correctOptionKey: next[0] ?? undefined,
                                                      });
                                                    }}
                                                    className="text-cyan-600"
                                                  />
                                                  верный
                                                </label>
                                              )}
                                              <div className="relative flex-1">
                                                {block.responseMode === "open_question" ? (
                                                  <textarea
                                                    value={option.label}
                                                    onChange={(e) =>
                                                      updateBlockOption(block.id, option.index, e.target.value)
                                                    }
                                                    rows={2}
                                                    className="w-full resize-y rounded border border-stone-200 bg-stone-50 px-3 py-2 pr-8 text-sm focus:outline-none"
                                                  />
                                                ) : (
                                                  <input
                                                    type="text"
                                                    value={option.label}
                                                    onChange={(e) =>
                                                      updateBlockOption(block.id, option.index, e.target.value)
                                                    }
                                                    className="w-full rounded border border-stone-200 bg-stone-50 px-3 py-2 pr-8 text-sm focus:outline-none"
                                                  />
                                                )}
                                                <button
                                                  type="button"
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeBlockOption(block.id, option.index);
                                                  }}
                                                  className={`absolute right-2 text-base font-semibold leading-none text-red-500 transition hover:text-red-700 ${
                                                    block.responseMode === "open_question"
                                                      ? "top-2"
                                                      : "top-1/2 -translate-y-1/2"
                                                  }`}
                                                  title="Удалить вариант"
                                                >
                                                  ×
                                                </button>
                                              </div>
                                            </div>
                                            {block.responseMode !== "open_question" && (
                                              <button
                                                type="button"
                                                onMouseDown={(e) => {
                                                  e.stopPropagation();
                                                  e.preventDefault();
                                                }}
                                                onMouseEnter={() =>
                                                  setHoveredAnchor({
                                                    blockId: block.id,
                                                    side: "right",
                                                    sourceType: "option",
                                                    optionKey: option.key,
                                                  })
                                                }
                                                onMouseLeave={() =>
                                                  setHoveredAnchor((prev) =>
                                                    prev?.blockId === block.id &&
                                                    prev.sourceType === "option" &&
                                                    prev.optionKey === option.key
                                                      ? null
                                                      : prev
                                                  )
                                                }
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleAnchorClick({
                                                    blockId: block.id,
                                                    side: "right",
                                                    sourceType: "option",
                                                    optionKey: option.key,
                                                  });
                                                }}
                                                ref={(el) => {
                                                  optionAnchorRefs.current[
                                                    getOptionAnchorRefKey(block.id, option.key)
                                                  ] = el;
                                                }}
                                                className={`absolute right-0 top-1/2 h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-full border transition ${
                                                  isVisible
                                                    ? "pointer-events-auto opacity-100"
                                                    : "pointer-events-none opacity-0"
                                                } ${
                                                  isDraftStart
                                                    ? "border-sky-700 bg-sky-500"
                                                    : isHovered
                                                    ? "border-sky-600 bg-sky-400"
                                                    : "border-stone-500 bg-stone-300"
                                                }`}
                                              />
                                            )}
                                          </div>
                                        );
                                      })}
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          addBlockOption(block.id);
                                        }}
                                        className="w-full rounded bg-stone-100 px-2 py-2 text-sm font-semibold text-cyan-800 hover:bg-stone-200"
                                      >
                                        {block.responseMode === "open_question"
                                          ? "ДОБАВИТЬ ПОЛЕ ОТВЕТА"
                                          : "ДОБАВИТЬ ВАРИАНТ ОТВЕТА"}
                                      </button>
                                  </div>
                                </>
                              )}
                              {(
                                block.kind === "test"
                                  ? ((block.responseMode === "open_question"
                                      ? ["left", "right"]
                                      : ["left"]) as AnchorSide[])
                                  : (["left", "right"] as AnchorSide[])
                              ).map((side) => {
                                const isVisible = shouldShowAnchor(block.id, side);
                                if (!isVisible) return null;
                                const isDraftStart =
                                  draftEdgeStart?.blockId === block.id &&
                                  draftEdgeStart.sourceType === "block" &&
                                  draftEdgeStart.side === side;
                                const isHovered =
                                  hoveredAnchor?.blockId === block.id &&
                                  hoveredAnchor.sourceType === "block" &&
                                  hoveredAnchor.side === side;
                                const sideClass =
                                  block.kind === "test"
                                    ? side === "right"
                                      ? "right-0 top-5 translate-x-1/2 -translate-y-1/2"
                                      : "left-0 top-5 -translate-x-1/2 -translate-y-1/2"
                                    : side === "right"
                                    ? "right-0 top-5 translate-x-1/2 -translate-y-1/2"
                                    : "left-0 top-5 -translate-x-1/2 -translate-y-1/2";
                                return (
                                  <button
                                    key={side}
                                    type="button"
                                    onMouseDown={(e) => {
                                      e.stopPropagation();
                                      e.preventDefault();
                                    }}
                                    onMouseEnter={() =>
                                      setHoveredAnchor({
                                        blockId: block.id,
                                        side,
                                        sourceType: "block",
                                      })
                                    }
                                    onMouseLeave={() =>
                                      setHoveredAnchor((prev) =>
                                        prev?.blockId === block.id &&
                                        prev.sourceType === "block" &&
                                        prev.side === side
                                          ? null
                                          : prev
                                      )
                                    }
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleAnchorClick({ blockId: block.id, side, sourceType: "block" });
                                    }}
                                    className={`absolute ${sideClass} h-2.5 w-2.5 rounded-full border transition ${
                                      isDraftStart
                                        ? "border-sky-700 bg-sky-500"
                                        : isHovered
                                        ? "border-sky-600 bg-sky-400"
                                        : "border-stone-500 bg-stone-300"
                                    }`}
                                    title={`Якорь: ${side}`}
                                  />
                                );
                              })}
                            </div>
                          ))}
                        </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_220px]">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                    <h3 className="text-lg font-semibold text-stone-900">Занятие готово к выдаче</h3>
                    <p className="mt-2 text-sm text-stone-600">
                      Отправьте ссылку ученикам или используйте идентификатор для быстрого доступа.
                    </p>
                    <div className="mt-4 space-y-2 text-sm">
                      <p className="break-all">
                        <span className="text-stone-500">Ссылка:</span> {shareLink}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-4">
                    <p className="mb-2 text-sm font-medium text-stone-700">QR-код</p>
                    <img src={qrLink} alt="QR-код занятия" className="h-44 w-44 rounded-lg border border-stone-200" />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="mt-6 space-y-6">
                  <p className="text-sm text-stone-600">
                    Балл считается по доле <strong>верных ответов с первой попытки</strong> на тестах с одиночным
                    выбором, у которых на шаге 2 отмечен верный вариант. Открытые вопросы в расчёт не входят.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-stone-700">Превью (до 3 файлов)</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                          const names = Array.from(e.target.files ?? [])
                            .slice(0, 3)
                            .map((file) => file.name);
                          setPreviewImageNames(names);
                        }}
                        className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-stone-700">Методические файлы</span>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => {
                          const names = Array.from(e.target.files ?? []).map((file) => file.name);
                          setMethodicFileNames(names);
                        }}
                        className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                      />
                    </label>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 space-y-4">
                    <h3 className="text-sm font-semibold text-stone-900">Оценивание</h3>
                    <label className="flex max-w-md flex-col gap-1">
                      <span className="text-sm font-medium text-stone-700">Режим</span>
                      <select
                        value={gradingSettings.gradingMode}
                        onChange={(e) =>
                          setGradingSettings((prev) => ({
                            ...prev,
                            gradingMode: e.target.value as GradingSettings["gradingMode"],
                          }))
                        }
                        className="rounded-lg border border-stone-300 px-3 py-2 text-sm"
                      >
                        <option value="auto_first_try">Авто: балл по ступеням от % с первой попытки</option>
                        <option value="manual">Вручную: не выставлять балл при отправке</option>
                        <option value="auto_with_override">Авто (как выше; правка учителем — позже)</option>
                      </select>
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-stone-700">Максимальный балл</span>
                        <input
                          type="number"
                          min={1}
                          max={1000}
                          value={gradingSettings.maxScore}
                          onChange={(e) =>
                            setGradingSettings((prev) => ({
                              ...prev,
                              maxScore: Math.max(1, Math.min(1000, Number(e.target.value) || 1)),
                            }))
                          }
                          className="w-28 rounded-lg border border-stone-300 px-3 py-2 text-sm"
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-stone-700">Проходной порог, %</span>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={gradingSettings.passPercent}
                          onChange={(e) =>
                            setGradingSettings((prev) => ({
                              ...prev,
                              passPercent: Math.max(0, Math.min(100, Math.round(Number(e.target.value) || 0))),
                            }))
                          }
                          className="w-28 rounded-lg border border-stone-300 px-3 py-2 text-sm"
                        />
                      </label>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-stone-700">
                          Ступени (от большего % к меньшему; первая подходящая сверху)
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setGradingSettings((prev) => ({
                              ...prev,
                              tiers: [...prev.tiers, { minPercent: 0, score: 0 }],
                            }))
                          }
                          className="rounded border border-stone-300 px-2 py-1 text-xs font-medium hover:bg-white"
                        >
                          Добавить ступень
                        </button>
                      </div>
                      <div className="space-y-2">
                        {gradingSettings.tiers.map((tier, idx) => (
                          <div key={idx} className="flex flex-wrap items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm">
                            <span className="text-stone-500">от</span>
                            <input
                              type="number"
                              min={0}
                              max={100}
                              value={tier.minPercent}
                              onChange={(e) => {
                                const minPercent = Math.max(0, Math.min(100, Math.round(Number(e.target.value) || 0)));
                                setGradingSettings((prev) => ({
                                  ...prev,
                                  tiers: prev.tiers.map((t, i) => (i === idx ? { ...t, minPercent } : t)),
                                }));
                              }}
                              className="w-20 rounded border border-stone-300 px-2 py-1"
                            />
                            <span className="text-stone-500">% → балл</span>
                            <input
                              type="number"
                              min={0}
                              value={tier.score}
                              onChange={(e) => {
                                const score = Math.max(0, Math.floor(Number(e.target.value) || 0));
                                setGradingSettings((prev) => ({
                                  ...prev,
                                  tiers: prev.tiers.map((t, i) => (i === idx ? { ...t, score } : t)),
                                }));
                              }}
                              className="w-20 rounded border border-stone-300 px-2 py-1"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setGradingSettings((prev) => ({
                                  ...prev,
                                  tiers: prev.tiers.filter((_, i) => i !== idx),
                                }))
                              }
                              className="ml-auto text-red-600 hover:underline"
                            >
                              Удалить
                            </button>
                          </div>
                        ))}
                      </div>
                      {gradingSettings.tiers.length === 0 && (
                        <p className="text-xs text-amber-700">Добавьте хотя бы одну ступень.</p>
                      )}
                    </div>
                  </div>

                  {(previewImageNames.length > 0 || methodicFileNames.length > 0) && (
                    <div className="rounded-lg border border-stone-200 bg-stone-50 p-3 text-xs text-stone-600">
                      {previewImageNames.length > 0 && <p>Превью: {previewImageNames.join(", ")}</p>}
                      {methodicFileNames.length > 0 && <p>Методички: {methodicFileNames.join(", ")}</p>}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => void handlePublish()}
                    disabled={isSaving || workspaceLessonId == null}
                    className="rounded-lg bg-green-600 px-5 py-2.5 text-base font-medium text-white hover:bg-green-700 disabled:opacity-50"
                  >
                    {isSaving ? "Публикация..." : "Опубликовать изменения"}
                  </button>
                </div>
              )}
            </div>
          )}
        </section>
      </div>

      {textModal ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Редактор текста"
        >
          <div className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-lg font-semibold text-stone-900">
              {textModal.type === "lesson" ? "Описание урока" : "Текст блока"}
            </h2>
            <textarea
              value={textModal.value}
              onChange={(e) => setTextModal({ ...textModal, value: e.target.value })}
              className="mt-4 min-h-[min(60vh,28rem)] w-full flex-1 resize-y rounded-xl border border-stone-300 px-4 py-3 text-sm text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              autoFocus
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setTextModal(null)}
                className="rounded-lg border border-stone-300 px-5 py-2.5 text-base font-medium text-stone-700 hover:bg-stone-50"
              >
                Отмена
              </button>
              <button
                type="button"
                onClick={() => {
                  if (textModal.type === "lesson") {
                    setLessonDescription(textModal.value);
                  } else {
                    updateBlock(textModal.blockId, { text: textModal.value });
                  }
                  setTextModal(null);
                }}
                className="rounded-lg bg-amber-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-amber-700"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
