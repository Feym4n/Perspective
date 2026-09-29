"use client";

import { useEffect, useMemo, useState } from "react";
import { BarChart3, Download } from "lucide-react";
import { api } from "~/trpc/react";

function statusLabel(status: string): string {
  if (status === "none") return "Не начато";
  if (status === "draft") return "В работе";
  if (status === "submitted") return "Сдано";
  if (status === "auto_review") return "Автопроверка";
  return status;
}

function statusClass(status: string): string {
  if (status === "none") return "bg-slate-100 text-slate-600";
  if (status === "draft") return "bg-amber-100 text-amber-900";
  if (status === "auto_review") return "bg-violet-100 text-violet-900";
  if (status === "submitted") return "bg-emerald-100 text-emerald-900";
  return "bg-slate-100 text-slate-700";
}

type AnalyticsSectionProps = {
  /** При переходе из «Оценки» / «Задания» — открыть это занятие */
  focusAssignmentId?: number;
};

export function AnalyticsSection({ focusAssignmentId }: AnalyticsSectionProps) {
  const { data: overview, isLoading: overviewLoading } =
    api.teacher.assignmentDashboardOverview.useQuery();

  const publishedAssignments = useMemo(
    () => (overview?.assignments ?? []).filter((a) => a.isPublished),
    [overview?.assignments]
  );

  const [selectedId, setSelectedId] = useState<number | "">("");

  useEffect(() => {
    if (focusAssignmentId != null) setSelectedId(focusAssignmentId);
  }, [focusAssignmentId]);

  useEffect(() => {
    if (selectedId !== "" || publishedAssignments.length === 0) return;
    const preferred =
      publishedAssignments.find((a) => a.assignedStudentCount > 0) ?? publishedAssignments[0];
    if (preferred) setSelectedId(preferred.id);
  }, [publishedAssignments, selectedId]);

  const { data: stats, isLoading: statsLoading } = api.teacher.assignmentStatistics.useQuery(
    { assignmentId: typeof selectedId === "number" ? selectedId : 0 },
    { enabled: typeof selectedId === "number" }
  );

  const selectedOverview = publishedAssignments.find((a) => a.id === selectedId);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Аналитика</h1>
            <p className="text-sm text-slate-600">
              Сводка по занятиям и детальный разбор: блоки, класс, первая попытка, Excel.
            </p>
          </div>
        </div>
        {typeof selectedId === "number" ? (
          <a
            href={`/api/teacher/export-stats?assignmentId=${selectedId}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Скачать Excel
          </a>
        ) : null}
      </div>

      {overview?.totals ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Охват (назначено)", value: overview.totals.assignedStudentCount },
            { label: "Сдано работ", value: overview.totals.submittedCount },
            { label: "В работе", value: overview.totals.inProgressCount },
            { label: "Ср. прогресс", value: `${overview.totals.avgProgressPercent}%` },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{card.label}</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{card.value}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Все опубликованные занятия</h2>
        <p className="mt-1 text-xs text-slate-500">
          Нажмите строку, чтобы открыть подробную аналитику по занятию.
        </p>
        {overviewLoading ? (
          <p className="mt-4 text-sm text-slate-500">Загрузка…</p>
        ) : publishedAssignments.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">
            Нет опубликованных занятий. Опубликуйте занятие в разделе «Материалы» или «Задания».
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-2 pr-4 font-semibold">Занятие</th>
                  <th className="py-2 pr-4 font-semibold">Класс</th>
                  <th className="py-2 pr-4 font-semibold">Назначено</th>
                  <th className="py-2 pr-4 font-semibold">Сдали</th>
                  <th className="py-2 font-semibold">Прогресс</th>
                </tr>
              </thead>
              <tbody>
                {publishedAssignments.map((row) => {
                  const active = selectedId === row.id;
                  return (
                    <tr
                      key={row.id}
                      className={`cursor-pointer border-b border-slate-50 transition hover:bg-blue-50/40 ${
                        active ? "bg-blue-50/70" : ""
                      }`}
                      onClick={() => setSelectedId(row.id)}
                    >
                      <td className="py-2.5 pr-4 font-medium text-slate-900">{row.title}</td>
                      <td className="py-2.5 pr-4 text-slate-600">{row.classLabel}</td>
                      <td className="py-2.5 pr-4 tabular-nums">{row.assignedStudentCount || "—"}</td>
                      <td className="py-2.5 pr-4 tabular-nums">{row.submittedCount}</td>
                      <td className="py-2.5">
                        <span className="inline-flex min-w-[3rem] items-center gap-2">
                          <span className="h-2 w-16 overflow-hidden rounded-full bg-slate-100">
                            <span
                              className="block h-full rounded-full bg-blue-500"
                              style={{ width: `${row.progressPercent}%` }}
                            />
                          </span>
                          <span className="tabular-nums text-slate-700">{row.progressPercent}%</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">
          {selectedOverview ? selectedOverview.title : "Детализация по занятию"}
        </h2>
        {selectedOverview ? (
          <p className="mt-0.5 text-xs text-slate-500">
            Класс: {selectedOverview.classLabel} · сдали {selectedOverview.submittedCount} из{" "}
            {selectedOverview.assignedStudentCount || "—"}
          </p>
        ) : null}

        {typeof selectedId !== "number" ? (
          <p className="mt-6 text-sm text-slate-500">Выберите занятие в таблице выше.</p>
        ) : statsLoading ? (
          <p className="mt-6 text-sm text-slate-500">Загрузка детализации…</p>
        ) : !stats ? (
          <p className="mt-6 text-sm text-slate-500">Нет данных по занятию.</p>
        ) : (
          <div className="mt-6 space-y-6">
            {stats.gradableTestCount === 0 && (
              <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                В занятии нет тестов с выбором ответа — таблица «по блокам» может быть пустой.
              </p>
            )}

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { label: "Назначено", value: stats.assignedStudentCount ?? "—" },
                { label: "Сдали", value: stats.submittedCount },
                {
                  label: "% класса",
                  value: stats.percentClassCompleted != null ? `${stats.percentClassCompleted}%` : "—",
                },
                { label: "Ср. 1-я попытка", value: stats.avgFirstTryPercent ?? "—" },
                { label: "Ср. балл", value: stats.avgScore ?? "—" },
              ].map((card) => (
                <div key={card.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase text-slate-500">{card.label}</p>
                  <p className="mt-1 text-xl font-bold text-slate-900">{card.value}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">По блокам (первая попытка)</h3>
              <div className="mt-2 overflow-x-auto">
                {stats.byBlock.length === 0 ? (
                  <p className="text-sm text-slate-500">Нет оцениваемых блоков с выбором ответа.</p>
                ) : (
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-600">
                        <th className="py-2 pr-4">Блок</th>
                        <th className="py-2 pr-4">% верных</th>
                        <th className="py-2 pr-4">Верно</th>
                        <th className="py-2">Сдавших</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.byBlock.map((row) => (
                        <tr key={row.blockId} className="border-b border-slate-50">
                          <td className="py-2 pr-4">{row.title}</td>
                          <td className="py-2 pr-4">
                            {row.firstTryCorrectPercent != null ? `${row.firstTryCorrectPercent}%` : "—"}
                          </td>
                          <td className="py-2 pr-4">{row.firstTryCorrectCount}</td>
                          <td className="py-2">{row.submittedCount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                По ученикам ({stats.byStudent.length})
              </h3>
              <div className="mt-2 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-600">
                      <th className="py-2 pr-4">ФИО</th>
                      <th className="py-2 pr-4">Класс</th>
                      <th className="py-2 pr-4">Статус</th>
                      <th className="py-2 pr-4">Балл</th>
                      <th className="py-2 pr-4">% 1-я попытка</th>
                      <th className="py-2">Порог</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.byStudent.map((row) => (
                      <tr key={row.studentId} className="border-b border-slate-50">
                        <td className="py-2 pr-4 font-medium text-slate-900">{row.fullName}</td>
                        <td className="py-2 pr-4">{row.className}</td>
                        <td className="py-2 pr-4">
                          <span
                            className={`inline-flex rounded-md px-2 py-0.5 text-xs font-semibold ${statusClass(row.status)}`}
                          >
                            {statusLabel(row.status)}
                          </span>
                        </td>
                        <td className="py-2 pr-4 tabular-nums">{row.score ?? "—"}</td>
                        <td className="py-2 pr-4 tabular-nums">
                          {row.firstTryPercent != null ? `${row.firstTryPercent}%` : "—"}
                        </td>
                        <td className="py-2">
                          {row.passedThreshold == null
                            ? "—"
                            : row.passedThreshold
                              ? "Да"
                              : "Нет"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
