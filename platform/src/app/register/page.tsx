"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { setStudentCookie } from "~/lib/auth-cookies";
import { PhoneInput } from "~/app/_components/phone-input";
import { PasswordInput } from "~/app/_components/password-input";

// Строго 3 символа: два цифры класса + одна заглавная русская буква (например 10Б)
const CLASS_REGEX = /^[0-9]{2}[А-ЯЁ]$/;

function validateClassName(value: string): string | null {
  if (value.length !== 3) return "Ровно 3 символа: число класса и буква (например 10Б)";
  if (!CLASS_REGEX.test(value)) return "Формат: две цифры и заглавная русская буква (например 10Б)";
  return null;
}

export default function RegisterPage() {
  const router = useRouter();
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [schoolId, setSchoolId] = useState<number | "">("");
  const [className, setClassName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [classError, setClassError] = useState<string | null>(null);

  const { data: schools, isLoading: schoolsLoading } = api.school.list.useQuery();
  const registerMutation = api.student.register.useMutation();
  const loginMutation = api.student.login.useMutation();

  function handleClassChange(value: string) {
    setClassName(value);
    if (value.length === 3) {
      setClassError(validateClassName(value));
    } else {
      setClassError(null);
    }
  }

  function handleClassBlur() {
    if (className) setClassError(validateClassName(className));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const cnErr = validateClassName(className);
    if (cnErr) {
      setClassError(cnErr);
      return;
    }
    if (schoolId === "") {
      setError("Выберите школу");
      return;
    }
    try {
      await registerMutation.mutateAsync({
        surname,
        name,
        patronymic: patronymic || undefined,
        phone,
        password,
        schoolId,
        className,
      });
      const loginResult = await loginMutation.mutateAsync({ phone, password });
      setStudentCookie(loginResult.student.id);
      router.push("/student/dashboard");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Ошибка регистрации";
      setError(message);
    }
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-stone-800 hover:underline"
          >
            Интерактивная рабочая тетрадь
          </Link>
          <Link
            href="/student/login"
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
          >
            Вход
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-65px)] max-w-md flex-col items-center justify-center px-4 py-12">
        <h1 className="text-2xl font-bold text-stone-800">Регистрация</h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full space-y-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
        >
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-stone-700">
              Фамилия
            </span>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Фамилия"
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-stone-700">
              Имя
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-stone-700">
              Отчество <span className="text-stone-400">(необяз.)</span>
            </span>
            <input
              type="text"
              value={patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
              placeholder="Отчество"
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            />
          </label>
          <PhoneInput
            label="Мобильный телефон"
            value={phone}
            onChange={setPhone}
            placeholder="+7 (999) 123-45-67"
            required
          />
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-stone-700">
              Класс
            </span>
            <input
              type="text"
              value={className}
              onChange={(e) => handleClassChange(e.target.value.toUpperCase())}
              onBlur={handleClassBlur}
              placeholder="10Б"
              maxLength={3}
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 font-medium tracking-wide text-stone-900 placeholder:text-stone-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              required
            />
            {classError && (
              <p className="mt-1 text-sm text-red-600">{classError}</p>
            )}
            <p className="mt-1 text-xs text-stone-500">
              Ровно 3 символа: число класса и заглавная буква (например 10Б, 11А)
            </p>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-stone-700">
              Школа
            </span>
            <select
              value={schoolId}
              onChange={(e) =>
                setSchoolId(e.target.value === "" ? "" : Number(e.target.value))
              }
              className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              required
            >
              <option value="">Выберите школу</option>
              {schools?.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {schoolsLoading && (
              <span className="mt-1 block text-xs text-stone-500">
                Загрузка списка школ…
              </span>
            )}
          </label>
          <PasswordInput
            label="Пароль"
            value={password}
            onChange={setPassword}
            placeholder="Не менее 6 символов"
            required
            minLength={6}
            showStrengthBar
          />

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          <p className="text-center text-sm text-stone-600">
            Нажимая на кнопку «Зарегистрироваться», вы соглашаетесь с{" "}
            <Link href="#" className="text-sky-600 hover:underline">
              Условиями использования
            </Link>{" "}
            и{" "}
            <Link href="#" className="text-sky-600 hover:underline">
              Политикой конфиденциальности
            </Link>
            .
          </p>

          <button
            type="submit"
            disabled={
              registerMutation.isPending ||
              loginMutation.isPending ||
              !!classError ||
              className.length !== 3
            }
            className="w-full rounded-lg bg-sky-600 py-3 font-medium text-white hover:bg-sky-700 disabled:opacity-50"
          >
            {registerMutation.isPending || loginMutation.isPending
              ? "Регистрация…"
              : "Зарегистрироваться"}
          </button>
        </form>
      </section>
    </main>
  );
}
