import ExcelJS from "exceljs";
import { type NextRequest, NextResponse } from "next/server";

import { db } from "~/server/db";
import {
  getAssignmentStatistics,
  getPassPercentForExport,
} from "~/server/assignment-statistics";

function getTeacherIdFromCookie(headers: Headers): number | null {
  const cookie = headers.get("cookie") ?? "";
  for (const part of cookie.split(";")) {
    const [key, value] = part.trim().split("=");
    if (key === "teacher_id" && value) {
      const n = Number.parseInt(value, 10);
      if (Number.isInteger(n)) return n;
    }
  }
  return null;
}

export async function GET(req: NextRequest) {
  const teacherId = getTeacherIdFromCookie(req.headers);
  if (teacherId == null) {
    return NextResponse.json({ error: "Требуется вход" }, { status: 401 });
  }

  const url = new URL(req.url);
  const assignmentId = Number(url.searchParams.get("assignmentId"));
  if (!Number.isInteger(assignmentId) || assignmentId <= 0) {
    return NextResponse.json({ error: "Некорректный assignmentId" }, { status: 400 });
  }

  const stats = await getAssignmentStatistics(db, assignmentId);
  if (!stats) {
    return NextResponse.json({ error: "Занятие не найдено" }, { status: 404 });
  }

  const assignmentRow = await db.assignment.findUnique({
    where: { id: assignmentId },
    select: { configJson: true },
  });
  const passPercent = getPassPercentForExport(assignmentRow?.configJson ?? null);

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Perspective";

  const summary = workbook.addWorksheet("Сводка");
  summary.addRow(["Занятие", stats.assignmentTitle]);
  summary.addRow(["ID", stats.assignmentId]);
  summary.addRow([
    "Назначено учеников",
    stats.assignedStudentCount ?? "— (классы не назначены)",
  ]);
  summary.addRow(["Сдали (отправлено)", stats.submittedCount]);
  summary.addRow([
    "% класса сдали",
    stats.percentClassCompleted != null ? `${stats.percentClassCompleted}%` : "—",
  ]);
  summary.addRow(["Средний % с первой попытки", stats.avgFirstTryPercent ?? "—"]);
  summary.addRow(["Средний балл", stats.avgScore ?? "—"]);
  summary.addRow(["Оцениваемых тест-блоков", stats.gradableTestCount]);
  summary.addRow(["Проходной порог в конфиге, %", passPercent]);

  const studentsSheet = workbook.addWorksheet("По ученикам");
  studentsSheet.addRow([
    "ФИО",
    "Класс",
    "Статус",
    "Балл",
    "% с первой попытки",
    "Прошёл порог",
  ]);
  for (const s of stats.byStudent) {
    studentsSheet.addRow([
      s.fullName,
      s.className,
      s.status,
      s.score ?? "",
      s.firstTryPercent ?? "",
      s.passedThreshold == null ? "" : s.passedThreshold ? "Да" : "Нет",
    ]);
  }

  const blocksSheet = workbook.addWorksheet("По блокам");
  blocksSheet.addRow([
    "Название блока",
    "ID блока",
    "% верных с 1-й попытки",
    "Верных",
    "С ответом (1-я попытка)",
    "Сдавших всего",
  ]);
  for (const b of stats.byBlock) {
    blocksSheet.addRow([
      b.title,
      b.blockId,
      b.firstTryCorrectPercent != null ? `${b.firstTryCorrectPercent}%` : "—",
      b.firstTryCorrectCount,
      b.firstTryAnsweredCount,
      b.submittedCount,
    ]);
  }

  const buffer = await workbook.xlsx.writeBuffer();
  return new NextResponse(buffer, {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="assignment-${assignmentId}-stats.xlsx"`,
    },
  });
}
