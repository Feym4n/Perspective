"use client";

import { Check, Circle, Lock } from "lucide-react";

export type LessonNavBlock = {
  id: string;
  kind: string;
  title: string;
};

type LessonBlocksNavProps = {
  blocks: LessonNavBlock[];
  revealedIds: string[];
  repliedIds: string[];
  activeBlockId: string | null;
  onSelect: (blockId: string) => void;
};

function blockLabel(block: LessonNavBlock) {
  if (block.title.trim()) return block.title.trim();
  const labels: Record<string, string> = {
    text: "Текст",
    test: "Вопрос",
    image: "Изображение",
    video: "Видео",
    audio: "Аудио",
    presentation: "Презентация",
    explanation: "Пояснение",
  };
  return labels[block.kind] ?? "Блок";
}

export function LessonBlocksNav({
  blocks,
  revealedIds,
  repliedIds,
  activeBlockId,
  onSelect,
}: LessonBlocksNavProps) {
  const visible = blocks.filter((b) => b.kind !== "explanation");

  return (
    <nav className="flex flex-col gap-0.5 p-2" aria-label="Содержание занятия">
      <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">Содержание</p>
      {visible.map((block, index) => {
        const revealed = revealedIds.includes(block.id);
        const replied = repliedIds.includes(block.id);
        const isActive = activeBlockId === block.id;
        const done = block.kind === "test" ? replied : revealed;

        return (
          <button
            key={block.id}
            type="button"
            disabled={!revealed}
            onClick={() => revealed && onSelect(block.id)}
            className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-sm transition ${
              !revealed
                ? "cursor-default text-slate-400"
                : isActive
                  ? "bg-blue-600/15 font-medium text-blue-900"
                  : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center">
              {!revealed ? (
                <Lock className="h-3.5 w-3.5 text-slate-400" />
              ) : done ? (
                <Check className="h-4 w-4 text-blue-600" />
              ) : (
                <Circle className={`h-3 w-3 ${isActive ? "fill-blue-500 text-blue-500" : "text-slate-400"}`} />
              )}
            </span>
            <span className="min-w-0 flex-1 truncate">
              <span className="text-[10px] text-slate-400">{index + 1}. </span>
              {blockLabel(block)}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
