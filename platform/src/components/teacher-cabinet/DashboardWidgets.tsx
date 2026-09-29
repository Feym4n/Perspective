"use client";

import { TrendingUp } from "lucide-react";

type DonutProps = {
  completed: number;
  inProgress: number;
  notStarted: number;
};

function DonutChart({ completed, inProgress, notStarted }: DonutProps) {
  const total = Math.max(completed + inProgress + notStarted, 1);
  const c1 = (completed / total) * 100;
  const c2 = (inProgress / total) * 100;
  const gradient = `conic-gradient(#22c55e 0 ${c1}%, #3b82f6 ${c1}% ${c1 + c2}%, #cbd5e1 ${c1 + c2}% 100%)`;

  return (
    <div
      className="mx-auto h-28 w-28 rounded-full"
      style={{ background: gradient }}
      role="img"
      aria-label="Прогресс учащихся"
    >
      <div className="m-[18px] flex h-[calc(100%-36px)] w-[calc(100%-36px)] items-center justify-center rounded-full bg-white text-center">
        <div>
          <p className="text-xl font-bold text-slate-900">{completed > 0 ? Math.round((completed / total) * 100) : 0}%</p>
          <p className="text-[10px] text-slate-500">сдали</p>
        </div>
      </div>
    </div>
  );
}

type DashboardWidgetsProps = {
  avgProgressPercent: number;
  totals: DonutProps;
};

export function DashboardWidgets({ avgProgressPercent, totals }: DashboardWidgetsProps) {
  const total = Math.max(totals.completed + totals.inProgress + totals.notStarted, 1);
  const pctCompleted = Math.round((totals.completed / total) * 100);
  const pctProgress = Math.round((totals.inProgress / total) * 100);
  const pctIdle = Math.round((totals.notStarted / total) * 100);

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Успеваемость класса</p>
        <div className="mt-3 flex items-end justify-between gap-2">
          <p className="text-3xl font-bold text-blue-600">{avgProgressPercent}%</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
            <TrendingUp className="h-3.5 w-3.5" />
            активность
          </span>
        </div>
        <div className="mt-4 flex h-16 items-end gap-1">
          {[42, 55, 48, 62, 58, 70, avgProgressPercent || 35].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-blue-500/80"
              style={{ height: `${Math.min(100, h)}%` }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-slate-500">Средний процент сдачи по занятиям</p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Прогресс учащихся</p>
        <div className="mt-2 flex flex-col items-center sm:flex-row sm:gap-4">
          <DonutChart {...totals} />
          <ul className="mt-3 space-y-2 text-xs sm:mt-0">
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-700">Выполнено — {pctCompleted}%</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <span className="text-slate-700">В процессе — {pctProgress}%</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="text-slate-700">Не выполнено — {pctIdle}%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
