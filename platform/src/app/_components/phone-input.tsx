"use client";

import PhoneInputLib from "react-phone-number-input";
import "react-phone-number-input/style.css";
import type { E164Number } from "libphonenumber-js";

const inputBaseClass =
  "w-full rounded-lg border border-stone-300 px-3 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500";

/** Подписи стран только RU и BY на русском (без «Международный») */
const countryLabels = { RU: "Россия", BY: "Беларусь" };

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
};

export function PhoneInput({
  value,
  onChange,
  label,
  placeholder,
  required,
  className,
  id,
}: PhoneInputProps) {
  return (
    <label className={`block ${className ?? ""}`}>
      {label && (
        <span className="mb-1 block text-sm font-medium text-stone-700">
          {label}
        </span>
      )}
      <div
        className="[&_.PhoneInputInput]:rounded-lg [&_.PhoneInputInput]:border-stone-300 [&_.PhoneInputInput]:focus:border-sky-500 [&_.PhoneInputInput]:focus:ring-sky-500"
        style={{ ["--PhoneInput-color--focus" as string]: "#0ea5e9" }}
      >
        <PhoneInputLib
          id={id}
          international
          defaultCountry="RU"
          countries={["RU", "BY"]}
          labels={countryLabels}
          value={(value || undefined) as E164Number | undefined}
          onChange={(v) => onChange((v as E164Number) ?? "")}
          placeholder={placeholder}
          required={required}
          limitMaxLength
          addInternationalOption={false}
          numberInputProps={{
            className: inputBaseClass,
          }}
        />
      </div>
    </label>
  );
}
