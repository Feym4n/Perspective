"use client";

type AssignmentOption = { id: number; title: string };

type ClassAssignmentPanelProps = {
  assignments: AssignmentOption[];
  classList: Array<{ schoolId: number; schoolName: string; className: string; studentCount: number }>;
  assignTargetId: number | "";
  onAssignTargetChange: (id: number | "") => void;
  assignedClasses: Record<string, boolean>;
  onToggleClass: (key: string) => void;
  onSubmit: () => void;
  pending?: boolean;
};

export function ClassAssignmentPanel({
  assignments,
  classList,
  assignTargetId,
  onAssignTargetChange,
  assignedClasses,
  onToggleClass,
  onSubmit,
  pending,
}: ClassAssignmentPanelProps) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
      <h2 className="text-sm font-semibold text-slate-900">Назначить занятие классам</h2>
      <p className="mt-1 text-xs text-slate-600">
        Выберите занятие и отметьте классы, которым оно доступно учащимся.
      </p>
      <div className="mt-3 max-w-md">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-slate-700">Занятие</span>
          <select
            value={assignTargetId}
            onChange={(e) =>
              onAssignTargetChange(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Выберите занятие</option>
            {assignments.map((a) => (
              <option key={a.id} value={a.id}>
                {a.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {classList.map((row) => {
          const key = `${row.schoolId}::${row.className}`;
          return (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-white bg-white px-3 py-2 text-sm shadow-sm"
            >
              <input
                type="checkbox"
                checked={!!assignedClasses[key]}
                onChange={() => onToggleClass(key)}
              />
              <span>
                <span className="font-medium text-slate-900">{row.className}</span>
                <span className="text-slate-500"> · {row.schoolName}</span>
              </span>
            </label>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onSubmit}
        disabled={typeof assignTargetId !== "number" || pending}
        className="mt-3 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {pending ? "Назначение…" : "Сохранить назначение"}
      </button>
    </div>
  );
}
