"use client";

import { CheckCircle2, X, XCircle } from "lucide-react";

type LessonHandInBannerProps = {
  variant: "success" | "error";
  title: string;
  message: string;
  onDismiss: () => void;
  /** В боковой панели — без внешних отступов ленты */
  embedded?: boolean;
};

export function LessonHandInBanner({
  variant,
  title,
  message,
  onDismiss,
  embedded = false,
}: LessonHandInBannerProps) {
  const isSuccess = variant === "success";

  return (
    <div
      role="status"
      className={`flex gap-3 rounded-xl border px-3 py-3 shadow-sm ${
        embedded ? "mt-3" : "mx-3 mt-3 sm:mx-5"
      } ${
        isSuccess
          ? "border-violet-200 bg-violet-50 text-violet-950"
          : "border-red-200 bg-red-50 text-red-950"
      }`}
    >
      <span className="mt-0.5 shrink-0">
        {isSuccess ? (
          <CheckCircle2 className="h-5 w-5 text-violet-600" aria-hidden />
        ) : (
          <XCircle className="h-5 w-5 text-red-600" aria-hidden />
        )}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-sm leading-snug opacity-90">{message}</p>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className={`shrink-0 rounded-lg p-1 transition ${
          isSuccess ? "text-violet-700 hover:bg-violet-100" : "text-red-700 hover:bg-red-100"
        }`}
        aria-label="Закрыть уведомление"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
