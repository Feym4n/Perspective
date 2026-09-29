"use client";

import type { ReactNode } from "react";

type FeedCardProps = {
  variant: "content" | "reply";
  title?: string;
  meta?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
};

export function FeedCard({
  variant,
  title,
  meta,
  children,
  footer,
  className = "",
  onClick,
  id,
}: FeedCardProps) {
  const isReply = variant === "reply";
  const base =
    "w-full overflow-hidden rounded-2xl border transition-shadow duration-200 animate-[fadein_.25s_ease-out]";
  const skin = isReply
    ? "border-blue-200/80 bg-blue-50/90 shadow-sm"
    : "border-slate-200/90 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]";

  return (
    <article
      id={id}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={`${base} ${skin} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {(title || meta) && (
        <header className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3">
          <div className="min-w-0">
            {title ? (
              <h3 className={`truncate text-sm font-semibold ${isReply ? "text-blue-900" : "text-slate-900"}`}>
                {title}
              </h3>
            ) : null}
          </div>
          {meta ? <div className="shrink-0 text-xs text-slate-500">{meta}</div> : null}
        </header>
      )}
      <div className={`px-4 py-3 text-sm leading-relaxed ${isReply ? "text-blue-950" : "text-slate-800"}`}>
        {children}
      </div>
      {footer ? <footer className="border-t border-slate-100/80 px-4 py-2 text-xs text-slate-500">{footer}</footer> : null}
    </article>
  );
}
