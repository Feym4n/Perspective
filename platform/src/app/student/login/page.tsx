"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { setStudentCookie } from "~/lib/auth-cookies";
import { LoginCard } from "~/app/_components/login-card";
import { PhoneInput } from "~/app/_components/phone-input";
import { PasswordInput } from "~/app/_components/password-input";

export default function StudentLoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loginMutation = api.student.login.useMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const result = await loginMutation.mutateAsync({ phone, password });
      setStudentCookie(result.student.id);
      router.push("/student/dashboard");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Неверный телефон или пароль";
      setError(message);
    }
  }

  return (
    <LoginCard
      title="Интерактивная рабочая тетрадь"
      homeHref="/"
      registrationHref="/register"
      registrationLabel="Регистрация"
      onSubmit={handleSubmit}
      submitLabel="Вход"
      submitDisabled={loginMutation.isPending}
      error={error}
      forgotPasswordLink="#"
    >
      <PhoneInput
        label="Мобильный телефон"
        value={phone}
        onChange={setPhone}
        placeholder="+7 (999) 123-45-67"
        required
        className="[&_input]:border-2 [&_input]:border-sky-200 [&_input]:bg-white"
      />
      <PasswordInput
        label="Пароль"
        value={password}
        onChange={setPassword}
        placeholder="••••••••"
        required
        className="[&_input]:border-2 [&_input]:border-sky-200 [&_input]:bg-white"
      />
    </LoginCard>
  );
}
