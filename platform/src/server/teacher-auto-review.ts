import type { PrismaClient } from "../../generated/prisma";
import { getTeacherWorkspaceLessonId } from "~/server/teacher-dashboard-overview";
import { assignmentHasOpenQuestionBlocks } from "~/lib/submission-flow";

export type AutoReviewQueueItem = {
  submissionId: number;
  assignmentId: number;
  assignmentTitle: string;
  studentId: number;
  studentFullName: string;
  className: string;
  schoolName: string;
  submittedAt: string;
  openAnswerPreview: string;
  autoReviewStatus: string;
};

function parseOpenPreviews(answersJson: string): string {
  try {
    const parsed = JSON.parse(answersJson) as {
      studentReplies?: Record<string, { kind?: string; text?: string }>;
    };
    const replies = parsed.studentReplies;
    if (!replies) return "";
    const parts = Object.values(replies)
      .filter((r) => r?.kind === "open" && typeof r.text === "string" && r.text.trim())
      .map((r) => r.text!.trim());
    const joined = parts.join("\n\n---\n\n");
    return joined.length > 280 ? `${joined.slice(0, 277)}…` : joined;
  } catch {
    return "";
  }
}

function parseAutoReviewStatus(gradingJson: string | null): string {
  if (!gradingJson) return "queued";
  try {
    const g = JSON.parse(gradingJson) as { autoReview?: { status?: string } };
    return typeof g.autoReview?.status === "string" ? g.autoReview.status : "queued";
  } catch {
    return "queued";
  }
}

export async function getAutoReviewQueue(
  db: PrismaClient,
  teacherId: number
): Promise<AutoReviewQueueItem[]> {
  const lessonId = await getTeacherWorkspaceLessonId(db, teacherId);
  if (!lessonId) return [];

  const assignments = await db.assignment.findMany({
    where: { lessonId },
    select: { id: true, title: true, configJson: true },
  });

  const assignmentIds = assignments
    .filter((a) => assignmentHasOpenQuestionBlocks(a.configJson))
    .map((a) => a.id);

  if (assignmentIds.length === 0) return [];

  const submissions = await db.assignmentSubmission.findMany({
    where: { assignmentId: { in: assignmentIds }, status: "auto_review" },
    orderBy: [{ submittedAt: "desc" }, { updatedAt: "desc" }],
    select: {
      id: true,
      assignmentId: true,
      answersJson: true,
      submittedAt: true,
      updatedAt: true,
      gradingJson: true,
      student: {
        select: {
          id: true,
          surname: true,
          name: true,
          patronymic: true,
          className: true,
          school: { select: { name: true } },
        },
      },
    },
  });

  const titleById = new Map(assignments.map((a) => [a.id, a.title]));

  return submissions.map((s) => ({
    submissionId: s.id,
    assignmentId: s.assignmentId,
    assignmentTitle: titleById.get(s.assignmentId) ?? `Занятие #${s.assignmentId}`,
    studentId: s.student.id,
    studentFullName: [s.student.surname, s.student.name, s.student.patronymic]
      .filter(Boolean)
      .join(" "),
    className: s.student.className,
    schoolName: s.student.school.name,
    submittedAt: (s.submittedAt ?? s.updatedAt).toISOString(),
    openAnswerPreview: parseOpenPreviews(s.answersJson),
    autoReviewStatus: parseAutoReviewStatus(s.gradingJson),
  }));
}
