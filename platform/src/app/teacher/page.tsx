"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { setTeacherCookie } from "~/lib/auth-cookies";
import { LoginCard } from "~/app/_components/login-card";
import { PasswordInput } from "~/app/_components/password-input";

export default function TeacherLoginPage() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loginMutation = api.teacher.login.useMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const result = await loginMutation.mutateAsync({
        emailOrPhone,
        password,
      });
      setTeacherCookie(result.teacher.id);
      router.push("/teacher/dashboard");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Неверный email/телефон или пароль";
      setError(message);
    }
  }

  return (
    <LoginCard
      title="Интерактивная рабочая тетрадь"
      homeHref="/"
      registrationHref="#"
      registrationLabel="Заявка"
      onSubmit={handleSubmit}
      submitLabel="Вход"
      submitDisabled={loginMutation.isPending}
      error={error}
      forgotPasswordLink="#"
    >
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium text-sky-800">Логин</span>
        <input
          type="text"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          placeholder="teacher@school.ru"
          className="rounded-lg border-2 border-sky-200 bg-white px-3 py-2.5 text-sky-900 placeholder:text-sky-400 focus:border-sky-500 focus:outline-none"
          required
        />
      </label>
      <PasswordInput
        label="Пароль"
        value={password}
        onChange={setPassword}
        placeholder="••••••••"
        required
        className="[&_input]:rounded-lg [&_input]:border-2 [&_input]:border-sky-200 [&_input]:bg-white [&_input]:px-3 [&_input]:py-2.5 [&_input]:text-sky-900 [&_input]:placeholder:text-sky-400 [&_input]:focus:border-sky-500 [&_input]:focus:outline-none"
      />
    </LoginCard>
  );
}
