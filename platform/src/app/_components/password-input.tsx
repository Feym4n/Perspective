"use client";

import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const inputBaseClass =
  "w-full rounded-lg border border-stone-300 px-3 py-2.5 pr-10 text-stone-900 placeholder:text-stone-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500";

const SCORE_WORDS_RU = ["слабый", "слабый", "нормально", "хороший", "надёжный"];

type PasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  showStrengthBar?: boolean;
  className?: string;
  id?: string;
};

export function PasswordInput({
  value,
  onChange,
  label,
  placeholder = "••••••••",
  required,
  minLength = 6,
  showStrengthBar = false,
  className,
  id,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label className={`block ${className ?? ""}`}>
      {label && (
        <span className="mb-1 block text-sm font-medium text-stone-700">
          {label}
        </span>
      )}
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          autoComplete={showStrengthBar ? "new-password" : "current-password"}
          className={inputBaseClass}
        />
        <button
          type="button"
          aria-label={visible ? "Скрыть пароль" : "Показать пароль"}
          onClick={() => setVisible((v) => !v)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-600"
        >
          {visible ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>
      {showStrengthBar && (
        <PasswordStrengthBar
          password={value}
          minLength={minLength}
          scoreWords={SCORE_WORDS_RU}
          shortScoreWord="слишком короткий"
          barColors={["#e5e7eb", "#ef4836", "#f6b44d", "#2b90ef", "#25c281"]}
          className="mt-2"
          scoreWordClassName="text-right text-xs text-stone-500"
        />
      )}
    </label>
  );
}
