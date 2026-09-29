"use client";

import { Bot, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

function formatSubmittedAt(iso: string) {
  try {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function AutoReviewSection() {
  const { data, isLoading, isError, error } = api.teacher.autoReviewQueue.useQuery();

  const items = data ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Автопроверка</h1>
          <p className="text-sm text-slate-600">
            Работы с открытыми ответами: автоматическая проверка нейросетью, затем перенос оценок в
            журнал.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        {isLoading ? (
          <p className="flex items-center justify-center gap-2 p-10 text-sm text-slate-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Загрузка очереди…
          </p>
        ) : isError ? (
          <p className="p-10 text-center text-sm text-red-600">{error?.message ?? "Ошибка загрузки"}</p>
        ) : items.length === 0 ? (
          <p className="p-10 text-center text-sm text-slate-500">
            Нет работ в автопроверке. Очередь появится, когда учащиеся сдадут занятия с открытыми
            вопросами.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3 font-semibold">Учащийся</th>
                  <th className="px-4 py-3 font-semibold">Класс</th>
                  <th className="px-4 py-3 font-semibold">Занятие</th>
                  <th className="px-4 py-3 font-semibold">Сдано</th>
                  <th className="px-4 py-3 font-semibold">Статус ИИ</th>
                  <th className="px-4 py-3 font-semibold">Открытый ответ</th>
                </tr>
              </thead>
              <tbody>
                {items.map((row) => (
                  <tr key={row.submissionId} className="border-b border-slate-50 align-top hover:bg-blue-50/20">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.studentFullName}</td>
                    <td className="px-4 py-3 text-slate-600">
                      {row.className}
                      <span className="block text-xs text-slate-400">{row.schoolName}</span>
                    </td>
                    <td className="px-4 py-3 text-slate-800">{row.assignmentTitle}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-600 whitespace-nowrap">
                      {formatSubmittedAt(row.submittedAt)}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-lg bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-900">
                        {row.autoReviewStatus === "queued" ? "Проверяется" : row.autoReviewStatus}
                      </span>
                    </td>
                    <td className="max-w-md px-4 py-3">
                      <p className="line-clamp-4 whitespace-pre-wrap text-xs text-slate-700">
                        {row.openAnswerPreview || "—"}
                      </p>
                    </td>
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
