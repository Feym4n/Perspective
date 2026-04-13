"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ChatHeaderProps = {
  title: string;
  subtitle: string;
};

export function ChatHeader({ title, subtitle }: ChatHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-3 py-2 backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3">
        <Link
          href="/student/dashboard"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
          aria-label="Назад"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">{title}</p>
          <p className="truncate text-xs text-slate-500">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
