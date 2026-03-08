"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { clearStudentCookie } from "~/lib/auth-cookies";

export default function StudentDashboardPage() {
  const router = useRouter();
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

  const { student, lessons } = data;

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight text-stone-800 hover:underline"
            >
              Интерактивная рабочая тетрадь
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-stone-300 px-3 py-2 text-sm font-medium text-stone-600 hover:bg-stone-50"
            >
              На главную
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-stone-600">
              {student.fullName} · {student.schoolName}, {student.className}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium hover:bg-stone-100"
            >
              Выйти
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-4 py-8">
        <h2 className="text-2xl font-bold text-stone-800">
          Здравствуйте, {student.fullName}
        </h2>
        <p className="mt-1 text-stone-600">
          Здесь отображаются занятия программы. Пропущенные можно пройти в любое время.
        </p>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold text-stone-800">Занятия</h3>
          <ul className="space-y-2">
            {lessons.map((lesson) => (
              <li
                key={lesson.id}
                className="flex items-center justify-between rounded-xl border border-stone-200 bg-white p-4"
              >
                <div>
                  <p className="font-medium text-stone-800">{lesson.title}</p>
                  <p className="text-sm text-stone-500">{lesson.courseTitle}</p>
                </div>
                <div className="flex items-center gap-3">
                  {lesson.attempted ? (
                    <>
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Пройдено
                      </span>
                      {lesson.score != null && (
                        <span className="text-sm text-stone-600">
                          Балл: {lesson.score}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                        Не пройдено
                      </span>
                      <button
                        type="button"
                        className="rounded-lg bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700"
                      >
                        Пройти
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {lessons.length === 0 && (
          <p className="mt-6 text-stone-500">
            Пока нет занятий в программе. Ожидайте добавления от педагога.
          </p>
        )}
      </section>
    </main>
  );
}
