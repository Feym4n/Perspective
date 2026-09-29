import type { PrismaClient } from "../../generated/prisma";

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

export type AssignmentKind = "test" | "quest" | "project";

export function inferAssignmentKind(taskType: string, configJson: string | null): AssignmentKind {
  const tt = taskType.toLowerCase();
  if (tt.includes("тест") || tt.includes("test")) return "test";
  if (tt.includes("проект") || tt.includes("project")) return "project";
  if (tt.includes("квест") || tt.includes("quest")) return "quest";

  if (configJson) {
    try {
      const parsed = JSON.parse(configJson) as { taskBlocks?: Array<{ kind?: string }> };
      const blocks = Array.isArray(parsed.taskBlocks) ? parsed.taskBlocks : [];
      const testCount = blocks.filter((b) => b.kind === "test").length;
      if (testCount >= 2) return "test";
      if (testCount === 1) return "quest";
      if (blocks.length >= 4) return "quest";
    } catch {
      /* ignore */
    }
  }
  return "quest";
}

export async function getTeacherWorkspaceLessonId(db: PrismaClient, teacherId: number) {
  const courseTitle = `Личная библиотека педагога #${teacherId}`;
  const course = await db.course.findFirst({
    where: { title: courseTitle },
    select: { id: true },
  });
  if (!course) return null;
  const lesson = await db.lesson.findFirst({
    where: { courseId: course.id, title: "Материалы педагога" },
    select: { id: true },
  });
  return lesson?.id ?? null;
}

export type AssignmentOverviewRow = {
  id: number;
  title: string;
  instruction: string;
  isPublished: boolean;
  kind: AssignmentKind;
  classLabel: string;
  deadlineLabel: string;
  assignedStudentCount: number;
  submittedCount: number;
  progressPercent: number;
};

export type DashboardOverview = {
  assignments: AssignmentOverviewRow[];
  totals: {
    assignedStudentCount: number;
    submittedCount: number;
    inProgressCount: number;
    notStartedCount: number;
    avgProgressPercent: number;
  };
};

export async function getDashboardOverview(
  db: PrismaClient,
  teacherId: number
): Promise<DashboardOverview | null> {
  const lessonId = await getTeacherWorkspaceLessonId(db, teacherId);
  if (!lessonId) {
    return { assignments: [], totals: { assignedStudentCount: 0, submittedCount: 0, inProgressCount: 0, notStartedCount: 0, avgProgressPercent: 0 } };
  }

  const assignments = await db.assignment.findMany({
    where: { lessonId },
    orderBy: [{ order: "desc" }, { id: "desc" }],
    select: {
      id: true,
      title: true,
      instruction: true,
      taskType: true,
      isPublished: true,
      configJson: true,
      updatedAt: true,
    },
  });

  const rows: AssignmentOverviewRow[] = [];

  for (const a of assignments) {
    const classes = parseAssignedClasses(a.configJson);
    let assignedStudentCount = 0;
    if (classes.length > 0) {
      assignedStudentCount = await db.student.count({
        where: {
          OR: classes.map((c) => ({ schoolId: c.schoolId, className: c.className })),
        },
      });
    }

    const submittedCount = await db.assignmentSubmission.count({
      where: { assignmentId: a.id, status: { in: ["submitted", "auto_review"] } },
    });

    const progressPercent =
      assignedStudentCount > 0 ? Math.round((submittedCount / assignedStudentCount) * 100) : 0;

    const classLabel =
      classes.length === 0
        ? "Не назначен"
        : classes.length === 1
          ? classes[0]!.className
          : `${classes[0]!.className} +${classes.length - 1}`;

    const deadlineLabel = a.isPublished
      ? new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(a.updatedAt)
      : "Черновик";

    rows.push({
      id: a.id,
      title: a.title,
      instruction: a.instruction,
      isPublished: a.isPublished,
      kind: inferAssignmentKind(a.taskType, a.configJson),
      classLabel,
      deadlineLabel,
      assignedStudentCount,
      submittedCount,
      progressPercent,
    });

  }

  const assignedStudentCount = rows.reduce((s, r) => s + r.assignedStudentCount, 0);
  const submittedCount = rows.reduce((s, r) => s + r.submittedCount, 0);
  const assignmentIds = assignments.map((a) => a.id);
  const draftCount =
    assignmentIds.length > 0
      ? await db.assignmentSubmission.count({
          where: { assignmentId: { in: assignmentIds }, status: "draft" },
        })
      : 0;
  const inProgressCount = draftCount;
  const notStartedCount = Math.max(0, assignedStudentCount - submittedCount - draftCount);
  const avgProgressPercent =
    rows.length > 0
      ? Math.round(rows.reduce((s, r) => s + r.progressPercent, 0) / rows.length)
      : 0;

  return {
    assignments: rows,
    totals: {
      assignedStudentCount,
      submittedCount,
      inProgressCount,
      notStartedCount,
      avgProgressPercent,
    },
  };
}
