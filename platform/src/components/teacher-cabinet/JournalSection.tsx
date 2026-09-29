"use client";

import { BookMarked } from "lucide-react";
import { api } from "~/trpc/react";
import { ClassSelector, parseClassKey, type ClassListRow } from "./ClassSelector";

type JournalSectionProps = {
  classList: ClassListRow[];
  selectedClassKey: string;
  onClassKeyChange: (key: string) => void;
};

function cellLabel(cell: {
  status: string;
  score: number | null;
  firstTryPercent: number | null;
}) {
  if (cell.status === "none") return "—";
  if (cell.status === "draft") return "черн.";
  if (cell.status === "auto_review") return "авто";
  const parts: string[] = [];
  if (cell.score != null) parts.push(String(cell.score));
  if (cell.firstTryPercent != null) parts.push(`${cell.firstTryPercent}%`);
  return parts.length > 0 ? parts.join(" / ") : "сдано";
}

function cellClass(cell: { status: string; passedThreshold: boolean | null }) {
  if (cell.status === "none") return "bg-slate-50 text-slate-400";
  if (cell.status === "draft") return "bg-amber-50 text-amber-900";
  if (cell.status === "auto_review") return "bg-violet-50 text-violet-900";
  if (cell.passedThreshold === true) return "bg-emerald-50 text-emerald-900";
  if (cell.passedThreshold === false) return "bg-red-50 text-red-900";
  return "bg-blue-50 text-blue-900";
}

export function JournalSection({
  classList,
  selectedClassKey,
  onClassKeyChange,
}: JournalSectionProps) {
  const parsed = parseClassKey(selectedClassKey);

  const { data: matrix, isLoading } = api.teacher.gradebookMatrix.useQuery(
    parsed
      ? { schoolId: parsed.schoolId, className: parsed.className }
      : { schoolId: 0, className: "" },
    { enabled: !!parsed }
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <BookMarked className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Журнал</h1>
          <p className="text-sm text-slate-600">
            Классический журнал успеваемости: учащиеся в строках, занятия в столбцах.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <ClassSelector classList={classList} value={selectedClassKey} onChange={onClassKeyChange} />

        {!parsed ? (
          <p className="mt-6 text-sm text-slate-500">Выберите класс для отображения журнала.</p>
        ) : isLoading ? (
          <p className="mt-6 text-sm text-slate-500">Загрузка…</p>
        ) : (matrix?.assignments.length ?? 0) === 0 ? (
          <p className="mt-6 text-sm text-slate-500">
            Для этого класса нет назначенных занятий. Назначьте занятия во вкладке «Учащиеся».
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 min-w-[140px] border-b border-r border-slate-200 bg-white py-2 pr-3 font-semibold text-slate-700">
                    Учащийся
                  </th>
                  {matrix!.assignments.map((col) => (
                    <th
                      key={col.assignmentId}
                      className="min-w-[100px] max-w-[140px] border-b border-slate-200 px-2 py-2 text-center font-semibold text-slate-700"
                      title={col.title}
                    >
                      <span className="line-clamp-2">{col.title}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix!.rows.map((row) => (
                  <tr key={row.studentId} className="border-b border-slate-50">
                    <td className="sticky left-0 z-10 border-r border-slate-100 bg-white py-2 pr-3 font-medium text-slate-900">
                      {row.fullName}
                    </td>
                    {matrix!.assignments.map((col) => {
                      const cell = row.cells[col.assignmentId] ?? {
                        status: "none" as const,
                        score: null,
                        firstTryPercent: null,
                        passedThreshold: null,
                      };
                      return (
                        <td
                          key={col.assignmentId}
                          className={`px-2 py-2 text-center tabular-nums ${cellClass(cell)}`}
                          title={cellLabel(cell)}
                        >
                          {cellLabel(cell)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-4 text-[11px] text-slate-500">
          Обозначения: — не начато; черн. — черновик; число — балл; % — результат с первой попытки. Цвет: зелёный —
          порог пройден, красный — не пройден.
        </p>
      </div>
    </div>
  );
}
