"use client";

import { TrendingUp } from "lucide-react";
import { api } from "~/trpc/react";
import { DashboardWidgets } from "./DashboardWidgets";

type GradesProgressSectionProps = {
  onOpenAnalytics: (assignmentId: number) => void;
};

export function GradesProgressSection({ onOpenAnalytics }: GradesProgressSectionProps) {
  const { data: overview } = api.teacher.assignmentDashboardOverview.useQuery();
  const { data: grades, isLoading } = api.teacher.gradesOverview.useQuery();

  const totals = overview?.totals ?? {
    assignedStudentCount: 0,
    submittedCount: 0,
    inProgressCount: 0,
    notStartedCount: 0,
    avgProgressPercent: 0,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <TrendingUp className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Оценки и прогресс</h1>
          <p className="text-sm text-slate-600">
            Сводка по опубликованным занятиям: сдача, средние баллы и переход к детальной аналитике.
          </p>
        </div>
      </div>

      <DashboardWidgets
        avgProgressPercent={totals.avgProgressPercent}
        totals={{
          completed: totals.submittedCount,
          inProgress: totals.inProgressCount,
          notStarted: totals.notStartedCount,
        }}
      />

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Результаты по занятиям</h2>
        <p className="mt-1 text-xs text-slate-500">
          Только опубликованные занятия с назначенными классами. Нажмите строку для подробной аналитики.
        </p>

        {isLoading ? (
          <p className="mt-4 text-sm text-slate-500">Загрузка…</p>
        ) : (grades ?? []).length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            Нет данных: опубликуйте занятие и назначьте его классам во вкладке «Учащиеся».
          </p>
        ) : (
          <div className="mt-4 space-y-2">
            {(grades ?? []).map((row) => (
              <button
                key={row.assignmentId}
                type="button"
                onClick={() => onOpenAnalytics(row.assignmentId)}
                className="flex w-full flex-wrap items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 text-left transition hover:border-blue-200 hover:bg-blue-50/40"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-slate-900">{row.title}</p>
                  <p className="text-xs text-slate-500">Классы: {row.classLabel}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-slate-600">
                    Сдача:{" "}
                    <strong className="text-slate-900">
                      {row.submittedCount}/{row.assignedStudentCount}
                    </strong>{" "}
                    ({row.progressPercent}%)
                  </span>
                  <span className="text-slate-600">
                    Ср. балл: <strong className="text-slate-900">{row.avgScore ?? "—"}</strong>
                  </span>
                  <span className="text-slate-600">
                    1-я попытка:{" "}
                    <strong className="text-slate-900">
                      {row.avgFirstTryPercent != null ? `${row.avgFirstTryPercent}%` : "—"}
                    </strong>
                  </span>
                </div>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${row.progressPercent}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// remove unused statusBadge if not used - I added it but didn't use, remove from file