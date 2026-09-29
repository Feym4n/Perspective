"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type LessonFeedHeaderProps = {
  title: string;
  subtitle: string;
};

export function LessonFeedHeader({ title, subtitle }: LessonFeedHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Link
          href="/student/dashboard"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100"
          aria-label="Назад в кабинет"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold text-slate-900">{title}</h1>
          <p className="truncate text-xs text-slate-500">{subtitle}</p>
        </div>
      </div>
    </header>
  );
}
