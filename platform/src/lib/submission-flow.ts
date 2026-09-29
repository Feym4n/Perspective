import {
  getGradableSingleChoiceBlocksFromConfigJson,
  normalizeOptionKeySet,
  serializeOptionKeySet,
} from "~/lib/grading-settings";

export const SUBMISSION_STATUS = {
  draft: "draft",
  submitted: "submitted",
  autoReview: "auto_review",
} as const;

export type SubmissionStatus = (typeof SUBMISSION_STATUS)[keyof typeof SUBMISSION_STATUS];

export function isFinishedSubmissionStatus(status: string | null | undefined): boolean {
  return status === SUBMISSION_STATUS.submitted || status === SUBMISSION_STATUS.autoReview;
}

export function isTestChoiceAnswerCorrect(correctKeys: string[], selectedKeys: string[]): boolean {
  const correct = normalizeOptionKeySet(correctKeys);
  const selected = normalizeOptionKeySet(selectedKeys);
  if (correct.length === 0) return false;
  return serializeOptionKeySet(correct) === serializeOptionKeySet(selected);
}

export function assignmentHasOpenQuestionBlocks(configJson: string | null): boolean {
  if (!configJson) return false;
  try {
    const parsed = JSON.parse(configJson) as { taskBlocks?: unknown };
    if (!Array.isArray(parsed.taskBlocks)) return false;
    return parsed.taskBlocks.some((item) => {
      if (typeof item !== "object" || item === null) return false;
      const b = item as Record<string, unknown>;
      return b.kind === "test" && b.responseMode === "open_question";
    });
  } catch {
    return false;
  }
}

export function submissionAnswersHaveOpenReplies(answersJson: string): boolean {
  try {
    const parsed = JSON.parse(answersJson) as { studentReplies?: unknown };
    if (!parsed.studentReplies || typeof parsed.studentReplies !== "object") return false;
    return Object.values(parsed.studentReplies as Record<string, { kind?: string }>).some(
      (r) => r && typeof r === "object" && r.kind === "open"
    );
  } catch {
    return false;
  }
}

export function resolveSubmissionStatusOnHandIn(
  configJson: string | null,
  answersJson: string
): SubmissionStatus {
  if (
    assignmentHasOpenQuestionBlocks(configJson) &&
    submissionAnswersHaveOpenReplies(answersJson)
  ) {
    return SUBMISSION_STATUS.autoReview;
  }
  return SUBMISSION_STATUS.submitted;
}

export function buildSimulatedAutoReviewMeta() {
  return {
    provider: "deepseek" as const,
    simulated: true,
    status: "queued" as const,
    queuedAt: new Date().toISOString(),
    message: "Открытые ответы поставлены в очередь автопроверки.",
  };
}

export async function assertAllChoiceBlocksAnsweredCorrectly(
  db: {
    testAnswerFirst: {
      findMany: (args: {
        where: { studentId: number; assignmentId: number };
      }) => Promise<{ blockId: string; optionKey: string }[]>;
    };
  },
  studentId: number,
  assignmentId: number,
  configJson: string | null
): Promise<void> {
  const gradable = getGradableSingleChoiceBlocksFromConfigJson(configJson);
  if (gradable.length === 0) return;
  const firstRows = await db.testAnswerFirst.findMany({
    where: { studentId, assignmentId },
  });
  const byBlockId = new Map(firstRows.map((r) => [r.blockId, r.optionKey]));
  const incomplete = gradable.filter((b) => {
    const chosen = byBlockId.get(b.id) ?? null;
    return chosen === null || chosen !== b.correctOptionSerialized;
  });
  if (incomplete.length > 0) {
    throw new Error(
      "Сдайте занятие только после верных ответов на все вопросы с выбором варианта."
    );
  }
}
