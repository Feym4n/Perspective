"use client";

import {
  BarChart3,
  BookMarked,
  BookOpen,
  Bot,
  ClipboardList,
  LogOut,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TeacherNavId =
  | "assignments"
  | "materials"
  | "students"
  | "grades"
  | "autoReview"
  | "journal"
  | "analytics"
  | "settings"
  | "create";

type NavItem = {
  id: TeacherNavId;
  label: string;
  icon: LucideIcon;
  stub?: boolean;
};

export const TEACHER_NAV: NavItem[] = [
  { id: "assignments", label: "Задания", icon: ClipboardList },
  { id: "materials", label: "Материалы", icon: BookOpen },
  { id: "students", label: "Учащиеся", icon: Users },
  { id: "grades", label: "Оценки и прогресс", icon: TrendingUp },
  { id: "autoReview", label: "Автопроверка", icon: Bot },
  { id: "journal", label: "Журнал", icon: BookMarked },
  { id: "analytics", label: "Аналитика", icon: BarChart3 },
  { id: "settings", label: "Настройки", icon: Settings, stub: true },
];

type TeacherSidebarProps = {
  activeTab: TeacherNavId;
  onNavigate: (id: TeacherNavId) => void;
  teacherLabel: string;
  onLogout: () => void;
};

export function TeacherSidebar({ activeTab, onNavigate, teacherLabel, onLogout }: TeacherSidebarProps) {
  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-slate-200/90 bg-white">
      <div className="border-b border-slate-100 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/25">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold leading-tight text-slate-900">Педагогический</p>
            <p className="text-sm font-bold leading-tight text-blue-600">класс</p>
          </div>
        </div>
        <p className="mt-2 text-[11px] leading-snug text-slate-500">Интерактивная рабочая тетрадь</p>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {TEACHER_NAV.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                active
                  ? "bg-blue-50 font-semibold text-blue-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? "text-blue-600" : "text-slate-500"}`} />
              <span className="truncate">{item.label}</span>
              {item.stub ? (
                <span className="ml-auto rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">скоро</span>
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-semibold text-white">
            {teacherLabel.slice(0, 1).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-900">{teacherLabel}</p>
            <p className="text-xs text-slate-500">Педагог</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
        >
          <LogOut className="h-4 w-4" />
          Выйти
        </button>
      </div>
    </aside>
  );
}
