"use client";

import Link from "next/link";
import { BookOpen, ClipboardList, Play, Shield } from "lucide-react";

export type StudentAssignmentRow = {
  id: number;
  title: string;
  instruction: string;
  lesson: { title: string; courseTitle: string };
  submission: { status: string; score: number | null } | null;
};

type Stats = {
  total: number;
  completed: number;
  averageScore: number | null;
};

export function StudentHomeSection({
  pendingCount,
  nextAssignment,
  stats,
}: {
  pendingCount: number;
  nextAssignment: StudentAssignmentRow | null;
  stats: Stats;
}) {
  const pct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Shield className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Главная</h1>
          <p className="text-sm text-slate-600">Добро пожаловать в интерактивную рабочую тетрадь</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Всего занятий" value={String(stats.total)} />
        <StatCard label="Пройдено" value={String(stats.completed)} accent="text-emerald-600" />
        <StatCard label="Средний балл" value={stats.averageScore != null ? String(stats.averageScore) : "—"} />
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Общий прогресс</p>
        <div className="mt-3 flex items-center gap-4">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-500 transition-all" style={{ width: `${pct}%` }} />
          </div>
          <span className="text-sm font-semibold tabular-nums text-slate-900">{pct}%</span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Ожидает прохождения: <strong>{pendingCount}</strong> занятий
        </p>
      </div>

      {nextAssignment ? (
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Следующее занятие</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{nextAssignment.title}</p>
          <p className="mt-1 text-sm text-slate-600">{nextAssignment.instruction}</p>
          <Link
            href={`/student/assignment/${nextAssignment.id}`}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700"
          >
            <Play className="h-4 w-4" />
            Начать прохождение
          </Link>
        </div>
      ) : (
        <p className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
          Все назначенные занятия пройдены. Ожидайте новых заданий от педагога.
        </p>
      )}
    </div>
  );
}

export function StudentLessonsSection({ assignments }: { assignments: StudentAssignmentRow[] }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ClipboardList className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Мои занятия</h1>
          <p className="text-sm text-slate-600">Назначенные педагогом интерактивные работы</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        {assignments.length === 0 ? (
          <p className="p-10 text-center text-sm text-slate-500">Пока нет назначенных занятий.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3 font-semibold">Занятие</th>
                  <th className="px-4 py-3 font-semibold">Курс</th>
                  <th className="px-4 py-3 font-semibold">Статус</th>
                  <th className="px-4 py-3 font-semibold">Балл</th>
                  <th className="px-4 py-3 font-semibold" />
                </tr>
              </thead>
              <tbody>
                {assignments.map((a) => {
                  const autoReview = a.submission?.status === "auto_review";
                  const done = a.submission?.status === "submitted" || autoReview;
                  const draft = a.submission?.status === "draft";
                  return (
                    <tr key={a.id} className="border-b border-slate-50 hover:bg-blue-50/30">
                      <td className="px-4 py-3">
                        <p className="font-medium text-slate-900">{a.title}</p>
                        <p className="mt-0.5 max-w-md truncate text-xs text-slate-500">{a.instruction}</p>
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {a.lesson.courseTitle}
                        <span className="text-slate-400"> · </span>
                        {a.lesson.title}
                      </td>
                      <td className="px-4 py-3">
                        {autoReview ? (
                          <span className="inline-flex rounded-lg bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-800">
                            Автопроверка
                          </span>
                        ) : done ? (
                          <span className="inline-flex rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                            Сдано
                          </span>
                        ) : draft ? (
                          <span className="inline-flex rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-800">
                            В работе
                          </span>
                        ) : (
                          <span className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                            Не начато
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 tabular-nums text-slate-800">
                        {a.submission?.score ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/student/assignment/${a.id}`}
                          className="inline-flex rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                        >
                          {done ? "Открыть" : "Пройти"}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function StudentProgressSection({
  stats,
  assignments,
}: {
  stats: Stats;
  assignments: StudentAssignmentRow[];
}) {
  const pending = Math.max(0, stats.total - stats.completed);
  const pct = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
  const completed = assignments.filter(
    (a) => a.submission?.status === "submitted" || a.submission?.status === "auto_review"
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Мой прогресс</h1>
          <p className="text-sm text-slate-600">Итоги по назначенным занятиям</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Выполнение</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{pct}%</p>
          <p className="mt-1 text-sm text-slate-600">
            {stats.completed} из {stats.total} занятий сдано
          </p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Осталось</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">{pending}</p>
          <p className="mt-1 text-sm text-slate-600">занятий к прохождению</p>
          <p className="mt-4 text-sm text-slate-600">
            Средний балл:{" "}
            <strong className="text-slate-900">{stats.averageScore ?? "—"}</strong>
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">Сданные работы</h2>
        {completed.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">Пока нет сданных занятий.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {completed.map((a) => (
              <li
                key={a.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/50 px-3 py-2"
              >
                <span className="font-medium text-slate-900">{a.title}</span>
                <span className="text-sm text-slate-600">
                  Балл: <strong>{a.submission?.score ?? "—"}</strong>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function StudentProfileSection({
  fullName,
  className,
  schoolName,
  phone,
}: {
  fullName: string;
  className: string;
  schoolName: string;
  phone?: string;
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Shield className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Профиль</h1>
          <p className="text-sm text-slate-600">Данные вашей учётной записи</p>
        </div>
      </div>

      <dl className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:grid-cols-2">
        <ProfileField label="ФИО" value={fullName} />
        <ProfileField label="Класс" value={className} />
        <ProfileField label="Школа" value={schoolName} />
        {phone ? <ProfileField label="Телефон" value={phone} /> : null}
      </dl>
    </div>
  );
}

function StatCard({
  label,
  value,
  accent = "text-slate-900",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-2 text-2xl font-bold ${accent}`}>{value}</p>
    </div>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-slate-900">{value}</dd>
    </div>
  );
}
