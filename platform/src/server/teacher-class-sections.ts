import type { PrismaClient } from "../../generated/prisma";
import { getTeacherWorkspaceLessonId } from "~/server/teacher-dashboard-overview";

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

function classKey(schoolId: number, className: string) {
  return `${schoolId}::${className}`;
}

function assignmentAppliesToClass(configJson: string | null, schoolId: number, className: string) {
  return parseAssignedClasses(configJson).some(
    (c) => c.schoolId === schoolId && c.className === className
  );
}

export type ClassRosterStudent = {
  studentId: number;
  fullName: string;
  phone: string;
  className: string;
  schoolName: string;
  availableAssignments: number;
  submittedCount: number;
  draftCount: number;
  lastActivity: string | null;
};

export async function getClassRosterProgress(
  db: PrismaClient,
  teacherId: number,
  schoolId: number,
  className: string,
  schoolName: string
): Promise<ClassRosterStudent[]> {
  const lessonId = await getTeacherWorkspaceLessonId(db, teacherId);
  if (!lessonId) return [];

  const students = await db.student.findMany({
    where: { schoolId, className },
    orderBy: [{ surname: "asc" }, { name: "asc" }],
    select: {
      id: true,
      surname: true,
      name: true,
      patronymic: true,
      phone: true,
      className: true,
    },
  });

  const assignments = await db.assignment.findMany({
    where: { lessonId },
    select: { id: true, configJson: true, updatedAt: true },
  });

  const relevantAssignmentIds = assignments
    .filter((a) => assignmentAppliesToClass(a.configJson, schoolId, className))
    .map((a) => a.id);

  const submissions =
    relevantAssignmentIds.length > 0 && students.length > 0
      ? await db.assignmentSubmission.findMany({
          where: {
            assignmentId: { in: relevantAssignmentIds },
            studentId: { in: students.map((s) => s.id) },
          },
          select: {
            studentId: true,
            status: true,
            updatedAt: true,
            submittedAt: true,
          },
        })
      : [];

  return students.map((s) => {
    const mine = submissions.filter((sub) => sub.studentId === s.id);
    const submitted = mine.filter(
      (sub) => sub.status === "submitted" || sub.status === "auto_review"
    );
    const draft = mine.filter((sub) => sub.status === "draft");
    const latest = mine
      .map((sub) => sub.submittedAt ?? sub.updatedAt)
      .sort((a, b) => b.getTime() - a.getTime())[0];

    return {
      studentId: s.id,
      fullName: [s.surname, s.name, s.patronymic].filter(Boolean).join(" "),
      phone: s.phone,
      className: s.className,
      schoolName,
      availableAssignments: relevantAssignmentIds.length,
      submittedCount: submitted.length,
      draftCount: draft.length,
      lastActivity: latest
        ? new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(latest)
        : null,
    };
  });
}

export type GradebookAssignmentCol = {
  assignmentId: number;
  title: string;
  isPublished: boolean;
};

export type GradebookCell = {
  status: "none" | "draft" | "submitted" | "auto_review";
  score: number | null;
  firstTryPercent: number | null;
  passedThreshold: boolean | null;
};

export type GradebookRow = {
  studentId: number;
  fullName: string;
  cells: Record<number, GradebookCell>;
};

export type GradebookMatrix = {
  assignments: GradebookAssignmentCol[];
  rows: GradebookRow[];
};

export async function getGradebookMatrix(
  db: PrismaClient,
  teacherId: number,
  schoolId: number,
  className: string
): Promise<GradebookMatrix> {
  const lessonId = await getTeacherWorkspaceLessonId(db, teacherId);
  if (!lessonId) return { assignments: [], rows: [] };

  const assignments = await db.assignment.findMany({
    where: { lessonId },
    orderBy: [{ order: "asc" }, { id: "asc" }],
    select: { id: true, title: true, isPublished: true, configJson: true },
  });

  const cols = assignments
    .filter((a) => assignmentAppliesToClass(a.configJson, schoolId, className))
    .map((a) => ({
      assignmentId: a.id,
      title: a.title,
      isPublished: a.isPublished,
    }));

  const students = await db.student.findMany({
    where: { schoolId, className },
    orderBy: [{ surname: "asc" }, { name: "asc" }],
    select: { id: true, surname: true, name: true, patronymic: true },
  });

  const assignmentIds = cols.map((c) => c.assignmentId);
  const submissions =
    assignmentIds.length > 0 && students.length > 0
      ? await db.assignmentSubmission.findMany({
          where: {
            assignmentId: { in: assignmentIds },
            studentId: { in: students.map((s) => s.id) },
          },
          select: {
            assignmentId: true,
            studentId: true,
            status: true,
            score: true,
            gradingJson: true,
          },
        })
      : [];

  const rows: GradebookRow[] = students.map((s) => {
    const cells: Record<number, GradebookCell> = {};
    for (const col of cols) {
      const sub = submissions.find(
        (x) => x.studentId === s.id && x.assignmentId === col.assignmentId
      );
      if (!sub) {
        cells[col.assignmentId] = {
          status: "none",
          score: null,
          firstTryPercent: null,
          passedThreshold: null,
        };
        continue;
      }
      let firstTryPercent: number | null = null;
      let passedThreshold: boolean | null = null;
      if (sub.gradingJson) {
        try {
          const g = JSON.parse(sub.gradingJson) as {
            firstTryPercent?: unknown;
            passedThreshold?: unknown;
          };
          if (typeof g.firstTryPercent === "number") firstTryPercent = g.firstTryPercent;
          if (typeof g.passedThreshold === "boolean") passedThreshold = g.passedThreshold;
        } catch {
          /* ignore */
        }
      }
      cells[col.assignmentId] = {
        status:
          sub.status === "submitted"
            ? "submitted"
            : sub.status === "auto_review"
              ? "auto_review"
              : "draft",
        score: sub.score,
        firstTryPercent,
        passedThreshold,
      };
    }
    return {
      studentId: s.id,
      fullName: [s.surname, s.name, s.patronymic].filter(Boolean).join(" "),
      cells,
    };
  });

  return { assignments: cols, rows };
}

export type GradesAssignmentSummary = {
  assignmentId: number;
  title: string;
  classLabel: string;
  submittedCount: number;
  assignedStudentCount: number;
  progressPercent: number;
  avgScore: number | null;
  avgFirstTryPercent: number | null;
};

export async function getGradesOverview(
  db: PrismaClient,
  teacherId: number
): Promise<GradesAssignmentSummary[]> {
  const lessonId = await getTeacherWorkspaceLessonId(db, teacherId);
  if (!lessonId) return [];

  const assignments = await db.assignment.findMany({
    where: { lessonId, isPublished: true },
    orderBy: [{ order: "desc" }, { id: "desc" }],
    select: { id: true, title: true, configJson: true },
  });

  const result: GradesAssignmentSummary[] = [];

  for (const a of assignments) {
    const classes = parseAssignedClasses(a.configJson);
    if (classes.length === 0) continue;

    let assignedStudentCount = 0;
    const seen = new Set<string>();
    for (const c of classes) {
      const key = classKey(c.schoolId, c.className);
      if (seen.has(key)) continue;
      seen.add(key);
      assignedStudentCount += await db.student.count({
        where: { schoolId: c.schoolId, className: c.className },
      });
    }

    const submissions = await db.assignmentSubmission.findMany({
      where: { assignmentId: a.id, status: { in: ["submitted", "auto_review"] } },
      select: { score: true, gradingJson: true },
    });

    const submittedCount = submissions.length;
    const progressPercent =
      assignedStudentCount > 0 ? Math.round((submittedCount / assignedStudentCount) * 100) : 0;

    const withScore = submissions.filter((s) => s.score != null);
    const avgScore =
      withScore.length > 0
        ? Math.round(
            (withScore.reduce((acc, s) => acc + (s.score ?? 0), 0) / withScore.length) * 10
          ) / 10
        : null;

    let sumFirst = 0;
    let cntFirst = 0;
    for (const s of submissions) {
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

    const classLabel =
      classes.length === 1
        ? classes[0]!.className
        : classes.map((c) => c.className).join(", ");

    result.push({
      assignmentId: a.id,
      title: a.title,
      classLabel,
      submittedCount,
      assignedStudentCount,
      progressPercent,
      avgScore,
      avgFirstTryPercent,
    });
  }

  return result;
}
