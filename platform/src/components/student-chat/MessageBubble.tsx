"use client";

import type { ReactNode } from "react";

type MessageBubbleProps = {
  side: "incoming" | "outgoing";
  title?: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  /** Клик по карточке (например, открыть презентацию на весь экран) */
  onArticleClick?: () => void;
};

export function MessageBubble({
  side,
  title,
  subtitle,
  children,
  footer,
  className = "",
  onArticleClick,
}: MessageBubbleProps) {
  const isIncoming = side === "incoming";
  const wrapperClass = isIncoming ? "justify-start" : "justify-end";
  const bubbleClass = isIncoming
    ? "bg-white text-slate-900 rounded-2xl rounded-bl-md"
    : "bg-cyan-500 text-white rounded-2xl rounded-br-md";

  return (
    <div className={`flex w-full ${wrapperClass}`}>
      <article
        role={onArticleClick ? "button" : undefined}
        tabIndex={onArticleClick ? 0 : undefined}
        onClick={onArticleClick}
        onKeyDown={
          onArticleClick
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onArticleClick();
                }
              }
            : undefined
        }
        className={`max-w-[88%] px-4 py-3 shadow-[0_4px_14px_rgba(15,23,42,0.12)] transition-all duration-200 ${bubbleClass} ${onArticleClick ? "cursor-pointer" : ""} ${className}`}
      >
        {title ? <p className={`text-sm font-semibold ${isIncoming ? "text-slate-800" : "text-white"}`}>{title}</p> : null}
        {subtitle ? (
          <p className={`mb-1 text-xs ${isIncoming ? "text-slate-500" : "text-cyan-100"}`}>{subtitle}</p>
        ) : null}
        <div className={`text-sm leading-relaxed ${isIncoming ? "text-slate-800" : "text-white"}`}>{children}</div>
        {footer ? <div className="mt-2 text-xs opacity-85">{footer}</div> : null}
      </article>
    </div>
  );
}
