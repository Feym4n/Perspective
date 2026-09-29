"use client";

import { LessonHandInBanner } from "./LessonHandInBanner";

type LessonMetaSidebarProps = {
  courseTitle: string;
  lessonTitle: string;
  assignmentTitle: string;
  revealedCount: number;
  totalCount: number;
  statusLabel: string;
  handInBanner?: null | "auto_review" | "error";
  handInErrorText?: string;
  onDismissHandInBanner?: () => void;
  onSave: () => void;
  onSubmit: () => void;
  savePending: boolean;
  submitPending: boolean;
};

export function LessonMetaSidebar({
  courseTitle,
  lessonTitle,
  assignmentTitle,
  revealedCount,
  totalCount,
  statusLabel,
  handInBanner = null,
  handInErrorText = "",
  onDismissHandInBanner,
  onSave,
  onSubmit,
  savePending,
  submitPending,
}: LessonMetaSidebarProps) {
  const pct = totalCount > 0 ? Math.round((revealedCount / totalCount) * 100) : 0;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Занятие</p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{assignmentTitle}</p>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          {courseTitle}
          <span className="text-slate-400"> · </span>
          {lessonTitle}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Прогресс</p>
        <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">
          {revealedCount}
          <span className="text-lg font-medium text-slate-400"> / {totalCount}</span>
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-slate-500">Открыто блоков: {pct}%</p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Статус работы</p>
        <p className="mt-1 text-sm font-medium text-slate-800">{statusLabel}</p>

        {handInBanner === "auto_review" ? (
          <LessonHandInBanner
            embedded
            variant="success"
            title="Занятие сдано"
            message="Открытые ответы отправлены на автопроверку. Балл по ним появится после проверки."
            onDismiss={() => onDismissHandInBanner?.()}
          />
        ) : null}

        {handInBanner === "error" ? (
          <LessonHandInBanner
            embedded
            variant="error"
            title="Не удалось сдать занятие"
            message={handInErrorText}
            onDismiss={() => onDismissHandInBanner?.()}
          />
        ) : null}

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={onSave}
            disabled={savePending}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 disabled:opacity-60"
          >
            Сохранить черновик
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={submitPending}
            className="w-full rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
          >
            Отправить работу
          </button>
        </div>
      </div>
    </div>
  );
}
