"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import { setStudentCookie } from "~/lib/auth-cookies";
import { LoginCard } from "~/app/_components/login-card";
import { PhoneInput, validatePhone } from "~/app/_components/phone-input";
import { PasswordInput } from "~/app/_components/password-input";

export default function StudentLoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const loginMutation = api.student.login.useMutation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const phErr = validatePhone(phone);
    if (phErr) {
      setPhoneError(phErr);
      return;
    }
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
        onChange={(v) => { setPhone(v); if (phoneError) setPhoneError(validatePhone(v)); }}
        placeholder="+7 (999) 123-45-67"
        required
        error={phoneError}
        className="[&_input]:rounded-xl [&_input]:border [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-500 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500"
      />
      <PasswordInput
        label="Пароль"
        value={password}
        onChange={setPassword}
        placeholder="••••••••"
        required
        className="[&_input]:rounded-xl [&_input]:border [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-500 [&_input]:focus:ring-1 [&_input]:focus:ring-blue-500"
      />
    </LoginCard>
  );
}
