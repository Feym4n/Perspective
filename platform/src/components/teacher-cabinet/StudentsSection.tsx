"use client";

import { Users } from "lucide-react";
import { api } from "~/trpc/react";
import { ClassAssignmentPanel } from "./ClassAssignmentPanel";
import { ClassSelector, parseClassKey, type ClassListRow } from "./ClassSelector";

type StudentsSectionProps = {
  classList: ClassListRow[];
  selectedClassKey: string;
  onClassKeyChange: (key: string) => void;
  assignments: Array<{ id: number; title: string }>;
  assignTargetId: number | "";
  onAssignTargetChange: (id: number | "") => void;
  assignedClasses: Record<string, boolean>;
  onToggleClass: (key: string) => void;
  onAssignSubmit: () => void;
  assignPending?: boolean;
};

export function StudentsSection({
  classList,
  selectedClassKey,
  onClassKeyChange,
  assignments,
  assignTargetId,
  onAssignTargetChange,
  assignedClasses,
  onToggleClass,
  onAssignSubmit,
  assignPending,
}: StudentsSectionProps) {
  const parsed = parseClassKey(selectedClassKey);

  const { data: roster, isLoading } = api.teacher.classRosterProgress.useQuery(
    parsed
      ? { schoolId: parsed.schoolId, className: parsed.className }
      : { schoolId: 0, className: "" },
    { enabled: !!parsed }
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Users className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Учащиеся</h1>
          <p className="text-sm text-slate-600">
            Состав классов, активность по назначенным занятиям и назначение новых работ.
          </p>
        </div>
      </div>

      <ClassAssignmentPanel
        assignments={assignments}
        classList={classList}
        assignTargetId={assignTargetId}
        onAssignTargetChange={onAssignTargetChange}
        assignedClasses={assignedClasses}
        onToggleClass={onToggleClass}
        onSubmit={onAssignSubmit}
        pending={assignPending}
      />

      <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
        <ClassSelector classList={classList} value={selectedClassKey} onChange={onClassKeyChange} />

        {!parsed ? (
          <p className="mt-6 text-sm text-slate-500">Выберите класс, чтобы увидеть список учащихся.</p>
        ) : isLoading ? (
          <p className="mt-6 text-sm text-slate-500">Загрузка…</p>
        ) : (roster ?? []).length === 0 ? (
          <p className="mt-6 text-sm text-slate-500">В классе пока нет зарегистрированных учащихся.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">ФИО</th>
                  <th className="py-3 pr-4">Телефон</th>
                  <th className="py-3 pr-4">Доступно занятий</th>
                  <th className="py-3 pr-4">Сдано</th>
                  <th className="py-3 pr-4">В работе</th>
                  <th className="py-3">Последняя активность</th>
                </tr>
              </thead>
              <tbody>
                {(roster ?? []).map((row) => (
                  <tr key={row.studentId} className="border-b border-slate-50 hover:bg-slate-50/80">
                    <td className="py-3 pr-4 font-medium text-slate-900">{row.fullName}</td>
                    <td className="py-3 pr-4 text-slate-600">{row.phone}</td>
                    <td className="py-3 pr-4 tabular-nums">{row.availableAssignments}</td>
                    <td className="py-3 pr-4 tabular-nums text-emerald-700">{row.submittedCount}</td>
                    <td className="py-3 pr-4 tabular-nums text-blue-700">{row.draftCount}</td>
                    <td className="py-3 text-slate-500">{row.lastActivity ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
