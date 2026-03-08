"use client";

import Link from "next/link";

type LoginCardProps = {
  title: string;
  children: React.ReactNode;
  registrationHref: string;
  registrationLabel?: string;
  homeHref?: string;
  onSubmit: (e: React.FormEvent) => void;
  submitLabel?: string;
  submitDisabled?: boolean;
  error?: string | null;
  forgotPasswordLink?: string;
};

export function LoginCard({
  title,
  children,
  registrationHref,
  registrationLabel = "Регистрация",
  homeHref,
  onSubmit,
  submitLabel = "ВХОД",
  submitDisabled,
  error,
  forgotPasswordLink,
}: LoginCardProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-white to-sky-50">
      {/* Кнопка «На главную» в правом верхнем углу */}
      {homeHref != null && (
        <Link
          href={homeHref}
          className="fixed right-4 top-4 z-10 flex items-center gap-2 rounded-lg border border-sky-200 bg-white/90 px-3 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur-sm hover:bg-sky-50"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          На главную
        </Link>
      )}
      {/* Геометрический фон */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/60 blur-2xl" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-sky-200/80 bg-sky-50/95 p-8 shadow-xl shadow-sky-200/30 backdrop-blur-sm">
          {/* Логотип и заголовок */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-sky-400 bg-white/80">
              <svg
                className="h-6 w-6 text-sky-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-lg font-semibold uppercase tracking-wide text-sky-900">
              {title}
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <Link
                href={registrationHref}
                className="flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 text-sm text-sky-700 hover:bg-sky-100/80"
              >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <span className="text-xs font-medium">{registrationLabel}</span>
              </Link>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            {children}

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </p>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <div>
                {forgotPasswordLink && (
                  <Link
                    href={forgotPasswordLink}
                    className="text-sm text-sky-700 hover:underline"
                  >
                    Забыли пароль?
                  </Link>
                )}
              </div>
              <button
                type="submit"
                disabled={submitDisabled}
                className="rounded-lg border-2 border-sky-500 bg-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-sky-800 shadow-sm hover:bg-sky-50 disabled:opacity-50"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
