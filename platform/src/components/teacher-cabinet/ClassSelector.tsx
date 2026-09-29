"use client";

export type ClassListRow = {
  schoolId: number;
  schoolName: string;
  className: string;
  studentCount: number;
};

type ClassSelectorProps = {
  classList: ClassListRow[];
  value: string;
  onChange: (key: string) => void;
  label?: string;
};

export function classRowKey(schoolId: number, className: string) {
  return `${schoolId}::${className}`;
}

export function parseClassKey(key: string): { schoolId: number; className: string } | null {
  const [schoolId, ...rest] = key.split("::");
  const className = rest.join("::");
  if (!schoolId || !className) return null;
  const id = Number(schoolId);
  if (!Number.isFinite(id) || id <= 0) return null;
  return { schoolId: id, className };
}

export function ClassSelector({ classList, value, onChange, label = "Класс" }: ClassSelectorProps) {
  return (
    <label className="flex max-w-md flex-col gap-1">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Выберите класс</option>
        {classList.map((row) => {
          const key = classRowKey(row.schoolId, row.className);
          return (
            <option key={key} value={key}>
              {row.className} — {row.schoolName} ({row.studentCount} уч.)
            </option>
          );
        })}
      </select>
    </label>
  );
}
