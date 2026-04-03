"use client";

import PhoneInputLib, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { E164Number } from "libphonenumber-js";

const inputBaseClass =
  "w-full rounded-lg border px-3 py-2.5 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1";

const inputNormal =
  `${inputBaseClass} border-stone-300 focus:border-sky-500 focus:ring-sky-500`;

const inputError =
  `${inputBaseClass} border-red-500 focus:border-red-500 focus:ring-red-500`;

const countryLabels = { RU: "Россия", BY: "Беларусь" };

export function validatePhone(value: string): string | null {
  if (!value) return "Введите номер телефона";
  if (!isValidPhoneNumber(value)) return "Введите корректный номер телефона";
  return null;
}

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string | null;
  className?: string;
  id?: string;
};

export function PhoneInput({
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  required,
  error,
  className,
  id,
}: PhoneInputProps) {
  const hasError = !!error;

  return (
    <div className={`block ${className ?? ""}`}>
      {label && (
        <span className="mb-1 block text-sm font-medium text-stone-700">
          {label}
        </span>
      )}
      <div
        className={
          hasError
            ? "[&_.PhoneInputInput]:rounded-lg [&_.PhoneInputInput]:border-red-500 [&_.PhoneInputInput]:focus:border-red-500 [&_.PhoneInputInput]:focus:ring-red-500"
            : "[&_.PhoneInputInput]:rounded-lg [&_.PhoneInputInput]:border-stone-300 [&_.PhoneInputInput]:focus:border-sky-500 [&_.PhoneInputInput]:focus:ring-sky-500"
        }
        style={{ ["--PhoneInput-color--focus" as string]: hasError ? "#ef4444" : "#0ea5e9" }}
      >
        <PhoneInputLib
          id={id}
          international
          defaultCountry="RU"
          countries={["RU", "BY"]}
          labels={countryLabels}
          value={(value || undefined) as E164Number | undefined}
          onChange={(v) => onChange((v as E164Number) ?? "")}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          limitMaxLength
          addInternationalOption={false}
          numberInputProps={{
            className: hasError ? inputError : inputNormal,
          }}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
