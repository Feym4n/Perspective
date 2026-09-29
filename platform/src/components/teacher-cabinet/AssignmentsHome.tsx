"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  Filter,
  FlaskConical,
  Map,
  MoreHorizontal,
  Plus,
  Shield,
  Target,
} from "lucide-react";
import type { AssignmentKind } from "~/server/teacher-dashboard-overview";
import { DashboardWidgets } from "./DashboardWidgets";

export type AssignmentRow = {
  id: number;
  title: string;
  instruction: string;
  isPublished: boolean;
  kind: AssignmentKind;
  classLabel: string;
  deadlineLabel: string;
  assignedStudentCount: number;
  submittedCount: number;
  progressPercent: number;
};

type FilterTab = "all" | AssignmentKind;

const KIND_LABELS: Record<AssignmentKind, string> = {
  test: "Тест",
  quest: "Квест",
  project: "Проект",
};

const KIND_STYLES: Record<AssignmentKind, string> = {
  test: "bg-violet-100 text-violet-800",
  quest: "bg-blue-100 text-blue-800",
  project: "bg-amber-100 text-amber-800",
};

function KindIcon({ kind }: { kind: AssignmentKind }) {
  if (kind === "test") return <FlaskConical className="h-4 w-4 text-violet-600" />;
  if (kind === "project") return <Target className="h-4 w-4 text-amber-600" />;
  return <Map className="h-4 w-4 text-blue-600" />;
}

type AssignmentsHomeProps = {
  rows: AssignmentRow[];
  totals: {
    assignedStudentCount: number;
    submittedCount: number;
    inProgressCount: number;
    notStartedCount: number;
    avgProgressPercent: number;
  };
  loading?: boolean;
  onCreate: () => void;
  onOpen: (id: number) => void;
  onAssign: (id: number) => void;
  onStats: (id: number) => void;
  onDelete: (id: number) => void;
  deletePending?: boolean;
};

export function AssignmentsHome({
  rows,
  totals,
  loading,
  onCreate,
  onOpen,
  onAssign,
  onStats,
  onDelete,
  deletePending,
}: AssignmentsHomeProps) {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [menuId, setMenuId] = useState<number | null>(null);

  const filtered =
    filter === "all" ? rows : rows.filter((r) => r.kind === filter);

  const tabs: { id: FilterTab; label: string }[] = [
    { id: "all", label: "Все задания" },
    { id: "test", label: "Тесты" },
    { id: "quest", label: "Квесты" },
    { id: "project", label: "Проекты" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Интерактивные задания</h1>
            <p className="text-sm text-slate-500">Кабинет педагога · рабочая тетрадь</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Filter className="h-4 w-4" />
            Фильтры
          </button>
          <button
            type="button"
            onClick={onCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Создать задание
          </button>
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

      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex flex-wrap gap-1 border-b border-slate-100 px-4 pt-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`rounded-t-lg px-4 py-2 text-sm font-medium transition ${
                filter === tab.id
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="p-8 text-center text-sm text-slate-500">Загрузка заданий…</p>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center">
            <ClipboardCheck className="mx-auto h-10 w-10 text-slate-300" />
            <p className="mt-3 text-sm text-slate-600">Пока нет занятий. Создайте первое задание.</p>
            <button
              type="button"
              onClick={onCreate}
              className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Создать задание
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3 font-semibold">Задание</th>
                  <th className="px-4 py-3 font-semibold">Тип</th>
                  <th className="px-4 py-3 font-semibold">Класс</th>
                  <th className="px-4 py-3 font-semibold">Срок</th>
                  <th className="min-w-[140px] px-4 py-3 font-semibold">Прогресс</th>
                  <th className="px-4 py-3 font-semibold">Сдача</th>
                  <th className="w-12 px-2 py-3" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-slate-50 transition hover:bg-blue-50/30"
                  >
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        onClick={() => onOpen(row.id)}
                        className="flex items-start gap-3 text-left"
                      >
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                          <KindIcon kind={row.kind} />
                        </span>
                        <span>
                          <span className="font-medium text-slate-900">{row.title}</span>
                          <span className="mt-0.5 block max-w-md truncate text-xs text-slate-500">
                            {row.instruction}
                          </span>
                        </span>
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold ${KIND_STYLES[row.kind]}`}
                      >
                        {KIND_LABELS[row.kind]}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.classLabel}</td>
                    <td className="px-4 py-3 text-slate-600">{row.deadlineLabel}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-blue-500 transition-all"
                            style={{ width: `${row.progressPercent}%` }}
                          />
                        </div>
                        <span className="w-10 text-right text-xs font-medium text-slate-700">
                          {row.progressPercent}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 tabular-nums text-slate-700">
                      {row.submittedCount}/{row.assignedStudentCount || "—"}
                    </td>
                    <td className="relative px-2 py-3">
                      <button
                        type="button"
                        onClick={() => setMenuId(menuId === row.id ? null : row.id)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
                        aria-label="Действия"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                      {menuId === row.id ? (
                        <div className="absolute right-2 top-10 z-10 min-w-[160px] rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                          <button
                            type="button"
                            className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                            onClick={() => {
                              onOpen(row.id);
                              setMenuId(null);
                            }}
                          >
                            Редактор
                          </button>
                          <button
                            type="button"
                            className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                            onClick={() => {
                              onAssign(row.id);
                              setMenuId(null);
                            }}
                          >
                            Назначить классам
                          </button>
                          <button
                            type="button"
                            className="block w-full px-3 py-2 text-left text-sm hover:bg-slate-50"
                            onClick={() => {
                              onStats(row.id);
                              setMenuId(null);
                            }}
                          >
                            Статистика
                          </button>
                          <button
                            type="button"
                            disabled={deletePending}
                            className="block w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                            onClick={() => {
                              onDelete(row.id);
                              setMenuId(null);
                            }}
                          >
                            Удалить
                          </button>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
