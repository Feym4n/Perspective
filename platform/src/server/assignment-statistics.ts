import type { PrismaClient } from "../../generated/prisma";
import {
  extractGradingSettingsFromConfigJson,
  getGradableSingleChoiceBlocksFromConfigJson,
} from "~/lib/grading-settings";

type AssignedClass = { schoolId: number; className: string };

function parseAssignedClasses(configJson: string | null): AssignedClass[] {
  if (!configJson) return [];
  try {
    const parsed = JSON.parse(configJson) as { assignedClasses?: unknown };
    if (!Array.isArray(parsed.assignedClasses)) return [];
    return parsed.assignedClasses
      .map((item) => {
        const c = item as Partial<AssignedClass>;
        if (typeof c.schoolId !== "number" || typeof c.className !== "string") return null;
        return { schoolId: c.schoolId, className: c.className.trim() };
      })
      .filter((v): v is AssignedClass => v !== null);
  } catch {
    return [];
  }
}

export type AssignmentStatisticsResult = {
  assignmentId: number;
  assignmentTitle: string;
  assignedStudentCount: number | null;
  hasAssignedClasses: boolean;
  submittedCount: number;
  percentClassCompleted: number | null;
  avgFirstTryPercent: number | null;
  avgScore: number | null;
  gradableTestCount: number;
  byBlock: Array<{
    blockId: string;
    title: string;
    firstTryCorrectCount: number;
    firstTryAnsweredCount: number;
    submittedCount: number;
    firstTryCorrectPercent: number | null;
  }>;
  byStudent: Array<{
    studentId: number;
    fullName: string;
    className: string;
    status: string;
    score: number | null;
    firstTryPercent: number | null;
    passedThreshold: boolean | null;
  }>;
};

function blockTitleFromConfig(configJson: string | null, blockId: string): string {
  if (!configJson) return blockId;
  try {
    const parsed = JSON.parse(configJson) as { taskBlocks?: unknown };
    const blocks = parsed.taskBlocks;
    if (!Array.isArray(blocks)) return blockId;
    for (const b of blocks) {
      if (typeof b === "object" && b !== null && (b as { id?: string }).id === blockId) {
        const t = (b as { title?: string }).title;
        return typeof t === "string" && t.trim() ? t : blockId;
      }
    }
  } catch {
    /* ignore */
  }
  return blockId;
}

export async function getAssignmentStatistics(
  db: PrismaClient,
  assignmentId: number
): Promise<AssignmentStatisticsResult | null> {
  const assignment = await db.assignment.findUnique({
    where: { id: assignmentId },
    select: { id: true, title: true, configJson: true },
  });
  if (!assignment) return null;

  const assignedClasses = parseAssignedClasses(assignment.configJson);
  const hasAssignedClasses = assignedClasses.length > 0;
  let assignedStudentCount: number | null = null;
  if (hasAssignedClasses) {
    const seen = new Set<string>();
    let sum = 0;
    for (const c of assignedClasses) {
      const key = `${c.schoolId}::${c.className}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const n = await db.student.count({
        where: { schoolId: c.schoolId, className: c.className },
      });
      sum += n;
    }
    assignedStudentCount = sum;
  }

  const submissions = await db.assignmentSubmission.findMany({
    where: { assignmentId },
    include: {
      student: {
        select: { surname: true, name: true, patronymic: true, className: true },
      },
    },
  });

  const submitted = submissions.filter(
    (s) => s.status === "submitted" || s.status === "auto_review"
  );
  const submittedCount = submitted.length;
  const percentClassCompleted =
    assignedStudentCount != null && assignedStudentCount > 0
      ? Math.round((100 * submittedCount) / assignedStudentCount)
      : null;

  let sumFirst = 0;
  let cntFirst = 0;
  for (const s of submitted) {
    if (!s.gradingJson) continue;
    try {
      const g = JSON.parse(s.gradingJson) as { firstTryPercent?: unknown };
      if (typeof g.firstTryPercent === "number") {
        sumFirst += g.firstTryPercent;
        cntFirst += 1;
      }
    } catch {
      /* ignore */
    }
  }
  const avgFirstTryPercent =
    cntFirst > 0 ? Math.round((sumFirst / cntFirst) * 10) / 10 : null;

  const withScore = submitted.filter((s) => s.score != null);
  const avgScore =
    withScore.length > 0
      ? Math.round(
          (withScore.reduce((a, s) => a + (s.score ?? 0), 0) / withScore.length) * 10
        ) / 10
      : null;

  const gradable = getGradableSingleChoiceBlocksFromConfigJson(assignment.configJson);
  const submittedIds = submitted.map((s) => s.studentId);
  const firstAnswers =
    submittedIds.length > 0
      ? await db.testAnswerFirst.findMany({
          where: { assignmentId, studentId: { in: submittedIds } },
        })
      : [];

  const byBlock = gradable.map((b) => {
    const rows = firstAnswers.filter((f) => f.blockId === b.id);
    const firstTryCorrectCount = rows.filter((f) => f.optionKey === b.correctOptionSerialized).length;
    const firstTryAnsweredCount = rows.length;
    const denom = submittedCount;
    const firstTryCorrectPercent =
      denom > 0 ? Math.round((100 * firstTryCorrectCount) / denom) : null;
    return {
      blockId: b.id,
      title: blockTitleFromConfig(assignment.configJson, b.id),
      firstTryCorrectCount,
      firstTryAnsweredCount,
      submittedCount: denom,
      firstTryCorrectPercent,
    };
  });

  const submissionByStudentId = new Map(submissions.map((s) => [s.studentId, s]));

  function rowFromSubmission(s: (typeof submissions)[number]) {
    let firstTryPercent: number | null = null;
    let passedThreshold: boolean | null = null;
    if (s.gradingJson) {
      try {
        const g = JSON.parse(s.gradingJson) as {
          firstTryPercent?: unknown;
          passedThreshold?: unknown;
        };
        if (typeof g.firstTryPercent === "number") firstTryPercent = g.firstTryPercent;
        if (typeof g.passedThreshold === "boolean") passedThreshold = g.passedThreshold;
      } catch {
        /* ignore */
      }
    }
    const st = s.student;
    const fullName = [st.surname, st.name, st.patronymic].filter(Boolean).join(" ");
    return {
      studentId: s.studentId,
      fullName,
      className: st.className,
      status: s.status,
      score: s.score,
      firstTryPercent,
      passedThreshold,
    };
  }

  let byStudent: AssignmentStatisticsResult["byStudent"];

  if (hasAssignedClasses && assignedStudentCount != null && assignedStudentCount > 0) {
    const seen = new Set<string>();
    const or: Array<{ schoolId: number; className: string }> = [];
    for (const c of assignedClasses) {
      const key = `${c.schoolId}::${c.className}`;
      if (seen.has(key)) continue;
      seen.add(key);
      or.push({ schoolId: c.schoolId, className: c.className });
    }
    const roster = await db.student.findMany({
      where: { OR: or },
      orderBy: [{ surname: "asc" }, { name: "asc" }],
      select: {
        id: true,
        surname: true,
        name: true,
        patronymic: true,
        className: true,
      },
    });
    byStudent = roster.map((st) => {
      const sub = submissionByStudentId.get(st.id);
      if (sub) return rowFromSubmission(sub);
      const fullName = [st.surname, st.name, st.patronymic].filter(Boolean).join(" ");
      return {
        studentId: st.id,
        fullName,
        className: st.className,
        status: "none",
        score: null,
        firstTryPercent: null,
        passedThreshold: null,
      };
    });
  } else {
    byStudent = submissions.map((s) => rowFromSubmission(s));
  }

  return {
    assignmentId: assignment.id,
    assignmentTitle: assignment.title,
    assignedStudentCount,
    hasAssignedClasses,
    submittedCount,
    percentClassCompleted,
    avgFirstTryPercent,
    avgScore,
    gradableTestCount: gradable.length,
    byBlock,
    byStudent,
  };
}

export function getPassPercentForExport(configJson: string | null): number {
  return extractGradingSettingsFromConfigJson(configJson).passPercent;
}
