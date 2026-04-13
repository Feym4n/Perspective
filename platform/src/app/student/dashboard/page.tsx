"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { clearStudentCookie } from "~/lib/auth-cookies";

const MENU_ITEMS = [
  { id: "dashboard", label: "Главная" },
  { id: "lessons", label: "Мои занятия" },
  { id: "progress", label: "Мой прогресс" },
  { id: "profile", label: "Мой профиль" },
] as const;

type MenuSection = (typeof MENU_ITEMS)[number]["id"];

export default function StudentDashboardPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<MenuSection>("dashboard");
  const { data, isLoading, error, isError } = api.student.dashboard.useQuery();

  function handleLogout() {
    clearStudentCookie();
    router.push("/");
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12 text-center text-stone-500">
          Загрузка…
        </div>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <p className="text-red-600">
            {error?.message ?? "Нет доступа. Войдите как ученик."}
          </p>
          <Link
            href="/student/login"
            className="mt-4 inline-block rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
          >
            Войти
          </Link>
        </div>
      </main>
    );
  }

  const { student, assignedAssignments, stats } = data;
  const completedCount = stats.completed;
  const pendingCount = Math.max(0, stats.total - stats.completed);
  const averageScore = stats.averageScore;

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[260px_1fr]">
        <aside className="border-r border-teal-800/30 bg-teal-900 text-white">
          <div className="border-b border-teal-700/40 px-5 py-5">
            <p className="text-xs uppercase tracking-wider text-teal-100/80">Личный кабинет</p>
            <h1 className="mt-1 text-base font-semibold leading-tight">
              Интерактивная рабочая тетрадь
            </h1>
          </div>
          <nav className="p-3">
            <ul className="space-y-1">
              {MENU_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      activeSection === item.id
                        ? "bg-teal-700 text-white"
                        : "text-teal-50 hover:bg-teal-800/70"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto space-y-2 border-t border-teal-700/40 p-3">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full rounded-lg bg-white px-3 py-2 text-left text-sm font-medium text-teal-900 hover:bg-teal-50"
            >
              Выйти из кабинета
            </button>
          </div>
        </aside>

        <section className="p-4 sm:p-6 lg:p-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-500">
                  {student.schoolName}, {student.className}
                </p>
                <h2 className="text-xl font-semibold text-slate-900">
                  {student.fullName}
                </h2>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Раздел: {MENU_ITEMS.find((item) => item.id === activeSection)?.label}
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Всего занятий</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{stats.total}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Пройдено</p>
              <p className="mt-2 text-2xl font-semibold text-emerald-700">{completedCount}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500">Средний балл</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {averageScore ?? "—"}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {activeSection === "dashboard" && (
              <>
                <h3 className="text-lg font-semibold text-slate-900">Добро пожаловать</h3>
                <p className="mt-2 text-sm text-slate-600">
                  В этом кабинете вы проходите занятия и отслеживаете прогресс.
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Сейчас к прохождению доступно:{" "}
                  <span className="font-medium text-slate-900">{pendingCount}</span>
                </p>
              </>
            )}

            {activeSection === "lessons" && (
              <>
                <h3 className="text-lg font-semibold text-slate-900">Мои занятия</h3>
                <ul className="mt-4 space-y-2">
                  {assignedAssignments.map((assignment) => (
                    <li
                      key={assignment.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-3"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{assignment.title}</p>
                        <p className="text-sm text-slate-500">
                          {assignment.lesson.courseTitle} — {assignment.lesson.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">{assignment.instruction}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {assignment.submission?.status === "submitted" ? (
                          <>
                            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                              Пройдено
                            </span>
                            {assignment.submission?.score != null && (
                              <span className="text-sm text-slate-600">Балл: {assignment.submission.score}</span>
                            )}
                          </>
                        ) : (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                            Ожидает прохождения
                          </span>
                        )}
                        <Link
                          href={`/student/assignment/${assignment.id}`}
                          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50"
                        >
                          Открыть
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
                {assignedAssignments.length === 0 && (
                  <p className="mt-4 text-sm text-slate-500">Пока нет занятий в программе.</p>
                )}
              </>
            )}

            {activeSection === "progress" && (
              <>
                <h3 className="text-lg font-semibold text-slate-900">Мой прогресс</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Пройдено занятий: <span className="font-medium text-slate-900">{completedCount}</span>
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Осталось пройти: <span className="font-medium text-slate-900">{pendingCount}</span>
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Средний балл по пройденным:{" "}
                  <span className="font-medium text-slate-900">{averageScore ?? "—"}</span>
                </p>
              </>
            )}

            {activeSection === "profile" && (
              <>
                <h3 className="text-lg font-semibold text-slate-900">Мой профиль</h3>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-slate-500">ФИО</dt>
                    <dd className="font-medium text-slate-900">{student.fullName}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Класс</dt>
                    <dd className="font-medium text-slate-900">{student.className}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Школа</dt>
                    <dd className="font-medium text-slate-900">{student.schoolName}</dd>
                  </div>
                </dl>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
