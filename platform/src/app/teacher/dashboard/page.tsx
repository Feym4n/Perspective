"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { clearTeacherCookie } from "~/lib/auth-cookies";

const CLASS_NAMES = ["10А", "10Б", "11А", "11Б"] as const;

export default function TeacherDashboardPage() {
  const router = useRouter();
  const [schoolId, setSchoolId] = useState<number | "">("");
  const [className, setClassName] = useState<(typeof CLASS_NAMES)[number]>(CLASS_NAMES[0]);

  const { data: me, isLoading: meLoading, isError: meError } = api.teacher.me.useQuery();
  const { data: studentsData, isLoading: studentsLoading } = api.teacher.getStudentsByClass.useQuery(
    { schoolId: schoolId as number, className },
    { enabled: typeof schoolId === "number" && schoolId > 0 }
  );
  const { data: statsData } = api.teacher.getClassStats.useQuery(
    { schoolId: schoolId as number, className },
    { enabled: typeof schoolId === "number" && schoolId > 0 }
  );

  function handleLogout() {
    clearTeacherCookie();
    router.push("/");
  }

  if (meLoading || !me) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12 text-center text-stone-500">
          Загрузка…
        </div>
      </main>
    );
  }

  if (meError) {
    return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="mx-auto max-w-2xl px-4 py-12">
          <p className="text-red-600">Нет доступа. Войдите как педагог.</p>
          <Link
            href="/teacher"
            className="mt-4 inline-block rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700"
          >
            Войти
          </Link>
        </div>
      </main>
    );
  }

  const schools = me.schools ?? [];
  const students = studentsData?.students ?? [];
  const lessons = studentsData?.lessons ?? [];
  const stats = statsData;

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
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
            <span className="text-sm text-stone-600">{me.emailOrPhone}</span>
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

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-2xl font-bold text-stone-800">Кабинет педагога</h2>
        <p className="mt-1 text-stone-600">
          Выберите школу и класс для просмотра учеников и статистики.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-stone-700">Школа</span>
            <select
              value={schoolId}
              onChange={(e) =>
                setSchoolId(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="">Выберите школу</option>
              {schools.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-stone-700">Класс</span>
            <select
              value={className}
              onChange={(e) =>
                setClassName(e.target.value as (typeof CLASS_NAMES)[number])
              }
              className="rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              {CLASS_NAMES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>

        {stats && (
          <div className="mt-8 rounded-xl border border-stone-200 bg-white p-4">
            <h3 className="text-lg font-semibold text-stone-800">Статистика по классу</h3>
            <p className="mt-1 text-sm text-stone-600">
              Учеников в классе: <strong>{stats.totalStudents}</strong>
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              {stats.lessons.map((l) => (
                <li key={l.id} className="flex justify-between gap-4">
                  <span>
                    {l.courseTitle} — {l.title}
                  </span>
                  <span>
                    Пройдено: {l.completedCount}
                    {l.averageScore != null && ` · Средний балл: ${l.averageScore}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 overflow-x-auto rounded-xl border border-stone-200 bg-white">
          <h3 className="border-b border-stone-200 px-4 py-3 text-lg font-semibold text-stone-800">
            Ученики класса
          </h3>
          {studentsLoading && schoolId !== "" ? (
            <div className="p-4 text-stone-500">Загрузка…</div>
          ) : students.length === 0 ? (
            <div className="p-4 text-stone-500">
              {schoolId === ""
                ? "Выберите школу и класс"
                : "В выбранном классе пока нет учеников"}
            </div>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="px-4 py-3 font-medium text-stone-700">ФИО</th>
                  <th className="px-4 py-3 font-medium text-stone-700">Телефон</th>
                  {lessons.map((l) => (
                    <th key={l.id} className="px-4 py-3 font-medium text-stone-700">
                      {l.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-b border-stone-100">
                    <td className="px-4 py-3">{s.fullName}</td>
                    <td className="px-4 py-3 text-stone-600">{s.phone}</td>
                    {lessons.map((l) => {
                      const attempt = s.attempts.find((a) => a.lessonId === l.id);
                      return (
                        <td key={l.id} className="px-4 py-3">
                          {attempt ? (
                            attempt.score != null ? (
                              <span className="text-green-700">Балл: {attempt.score}</span>
                            ) : (
                              <span className="text-amber-700">Сдан</span>
                            )
                          ) : (
                            <span className="text-stone-400">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </main>
  );
}
