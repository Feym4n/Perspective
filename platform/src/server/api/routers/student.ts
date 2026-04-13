import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { isValidPhoneNumber } from "libphonenumber-js";
import type { PrismaClient } from "../../../../generated/prisma";
import {
  extractGradingSettingsFromConfigJson,
  getGradableSingleChoiceBlocksFromConfigJson,
  serializeOptionKeySet,
  scoreFromFirstTryPercent,
} from "~/lib/grading-settings";
import { createTRPCRouter, publicProcedure, studentProcedure } from "~/server/api/trpc";
import { hashPassword, verifyPassword } from "~/server/auth-utils";

const phoneSchema = z
  .string()
  .min(1, "Введите телефон")
  .refine((v) => isValidPhoneNumber(v), "Некорректный номер телефона");

// Строго 3 символа: два цифры класса + одна заглавная русская буква (например 10Б)
const CLASS_REGEX = /^[0-9]{2}[А-ЯЁ]$/;

type AssignedClass = {
  schoolId: number;
  className: string;
};

type StudentConfigBlockKind =
  | "text"
  | "explanation"
  | "presentation"
  | "image"
  | "audio"
  | "video"
  | "test";

type StudentConfigBlock = {
  id: string;
  kind: StudentConfigBlockKind;
  title: string;
  text: string;
  responseMode?: "single_choice" | "open_question";
  optionsRaw?: string;
  correctOptionKey?: string;
  correctOptionKeys?: string[];
  mediaFileName?: string;
  mediaDataUrl?: string;
  buttonLabel?: string;
};

type StudentConfigEdge = {
  id: string;
  fromId: string;
  toId: string;
  fromType: "block" | "option";
  fromOptionKey?: string;
};

function parseAssignmentConfig(configJson: string | null): {
  assignedClasses: AssignedClass[] | null;
  taskBlocks: StudentConfigBlock[];
  taskGraphEdges: StudentConfigEdge[];
} {
  if (!configJson) return { assignedClasses: null, taskBlocks: [], taskGraphEdges: [] };
  try {
    const parsed = JSON.parse(configJson) as {
      assignedClasses?: unknown;
      taskBlocks?: unknown;
      taskGraph?: { edges?: unknown };
    };
    const assignedClasses = Array.isArray(parsed.assignedClasses)
      ? parsed.assignedClasses
          .map((item) => {
            const candidate = item as Partial<AssignedClass>;
            if (typeof candidate.schoolId !== "number" || typeof candidate.className !== "string") return null;
            return { schoolId: candidate.schoolId, className: candidate.className };
          })
          .filter((v): v is AssignedClass => v !== null)
      : null;
    const taskBlocks = Array.isArray(parsed.taskBlocks)
      ? parsed.taskBlocks
          .map((item) => {
            const block = item as Record<string, unknown>;
            const kindRaw = typeof block.kind === "string" ? block.kind : "";
            const normalizedKind =
              kindRaw === "case" || kindRaw === "reflection"
                ? "text"
                : kindRaw === "explanation" ||
                  kindRaw === "text" ||
                  kindRaw === "presentation" ||
                  kindRaw === "image" ||
                  kindRaw === "audio" ||
                  kindRaw === "video" ||
                  kindRaw === "test"
                ? kindRaw
                : "text";
            return {
              id: typeof block.id === "string" ? block.id : crypto.randomUUID(),
              kind: normalizedKind,
              title: typeof block.title === "string" ? block.title : "Блок",
              text: typeof block.text === "string" ? block.text : "",
              responseMode:
                block.responseMode === "single_choice" || block.responseMode === "open_question"
                  ? block.responseMode
                  : undefined,
              optionsRaw: typeof block.optionsRaw === "string" ? block.optionsRaw : "",
              correctOptionKey: typeof block.correctOptionKey === "string" ? block.correctOptionKey : undefined,
              correctOptionKeys: Array.isArray(block.correctOptionKeys)
                ? block.correctOptionKeys.filter((v): v is string => typeof v === "string")
                : undefined,
              mediaFileName: typeof block.mediaFileName === "string" ? block.mediaFileName : "",
              mediaDataUrl: typeof block.mediaDataUrl === "string" ? block.mediaDataUrl : "",
              buttonLabel: typeof block.buttonLabel === "string" ? block.buttonLabel : "",
            } satisfies StudentConfigBlock;
          })
          .filter(Boolean)
      : [];
    const taskGraphEdges: StudentConfigEdge[] = [];
    if (Array.isArray(parsed.taskGraph?.edges)) {
      parsed.taskGraph.edges.forEach((item) => {
        const edge = item as Record<string, unknown>;
        if (typeof edge.fromId !== "string" || typeof edge.toId !== "string") return;
        taskGraphEdges.push({
          id: typeof edge.id === "string" ? edge.id : crypto.randomUUID(),
          fromId: edge.fromId,
          toId: edge.toId,
          fromType: edge.fromType === "option" ? "option" : "block",
          fromOptionKey: typeof edge.fromOptionKey === "string" ? edge.fromOptionKey : undefined,
        });
      });
    }
    return { assignedClasses, taskBlocks, taskGraphEdges };
  } catch {
    return { assignedClasses: null, taskBlocks: [], taskGraphEdges: [] };
  }
}

function canRecordFirstAnswerForBlock(configJson: string | null, blockId: string): boolean {
  if (!configJson) return false;
  try {
    const parsed = JSON.parse(configJson) as { taskBlocks?: unknown };
    const blocks = parsed.taskBlocks;
    if (!Array.isArray(blocks)) return false;
    for (const item of blocks) {
      if (typeof item !== "object" || item === null) continue;
      const b = item as Record<string, unknown>;
      if (b.id !== blockId || b.kind !== "test") continue;
      return b.responseMode !== "open_question";
    }
  } catch {
    return false;
  }
  return false;
}

async function buildGradingPayload(
  db: PrismaClient,
  studentId: number,
  assignmentId: number,
  configJson: string | null,
  assignmentMaxScore: number | null
): Promise<{ score: number | null; gradingJson: string }> {
  const settings = extractGradingSettingsFromConfigJson(configJson);
  const maxScore =
    typeof assignmentMaxScore === "number" && assignmentMaxScore > 0
      ? assignmentMaxScore
      : settings.maxScore;
  const merged = { ...settings, maxScore };
  const gradable = getGradableSingleChoiceBlocksFromConfigJson(configJson);
  const firstRows = await db.testAnswerFirst.findMany({
    where: { studentId, assignmentId },
  });
  const byBlockId = new Map(firstRows.map((r) => [r.blockId, r.optionKey]));
  const gradedBlocks = gradable.map((b) => {
    const chosen = byBlockId.get(b.id) ?? null;
    return {
      blockId: b.id,
      chosenKey: chosen,
      correct: chosen !== null && chosen === b.correctOptionSerialized,
    };
  });
  const correctN = gradedBlocks.filter((g) => g.correct).length;
  const denom = gradable.length;
  const firstTryPercent =
    denom > 0 ? Math.round((100 * correctN) / denom) : null;
  const passedThreshold =
    firstTryPercent !== null && firstTryPercent >= merged.passPercent;
  let appliedScore: number | null = null;
  if (
    denom > 0 &&
    (merged.gradingMode === "auto_first_try" ||
      merged.gradingMode === "auto_with_override")
  ) {
    appliedScore = scoreFromFirstTryPercent(firstTryPercent ?? 0, merged);
  }
  const gradingJson = JSON.stringify({
    firstTryPercent,
    passPercent: merged.passPercent,
    passedThreshold,
    gradedBlocks,
    denominator: denom,
    numerator: correctN,
    appliedScore,
    gradingMode: merged.gradingMode,
  });
  const score = merged.gradingMode === "manual" ? null : appliedScore;
  return { score, gradingJson };
}

function isAssignedToStudent(
  assignedClasses: AssignedClass[] | null,
  student: { schoolId: number; className: string }
) {
  if (!assignedClasses || assignedClasses.length === 0) return true;
  return assignedClasses.some(
    (item) => item.schoolId === student.schoolId && item.className.trim() === student.className.trim()
  );
}

function canStudentAccessAssignment(
  assignment: { isPublished: boolean; configJson: string | null },
  student: { schoolId: number; className: string }
) {
  const config = parseAssignmentConfig(assignment.configJson);
  const hasExplicitAssignments = Boolean(config.assignedClasses && config.assignedClasses.length > 0);
  if (hasExplicitAssignments) {
    return isAssignedToStudent(config.assignedClasses, student);
  }
  return assignment.isPublished;
}

export const studentRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        surname: z.string().min(1, "Введите фамилию"),
        name: z.string().min(1, "Введите имя"),
        patronymic: z.string().optional(),
        phone: phoneSchema,
        password: z.string().min(6, "Пароль не менее 6 символов"),
        schoolId: z.number().int().positive(),
        className: z
          .string()
          .length(3, "Класс: ровно 3 символа")
          .regex(CLASS_REGEX, "Формат: число класса и заглавная буква (например 10Б)"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.student.findUnique({
        where: { phone: input.phone },
      });
      if (existing) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Ученик с таким телефоном уже зарегистрирован",
        });
      }
      const passwordHash = await hashPassword(input.password);
      const student = await ctx.db.student.create({
        data: {
          surname: input.surname,
          name: input.name,
          patronymic: input.patronymic ?? null,
          phone: input.phone,
          passwordHash,
          schoolId: input.schoolId,
          className: input.className,
        },
        select: {
          id: true,
          surname: true,
          name: true,
          patronymic: true,
          phone: true,
          schoolId: true,
          className: true,
        },
      });
      return { student };
    }),

  login: publicProcedure
    .input(
      z.object({
        phone: phoneSchema,
        password: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const student = await ctx.db.student.findUnique({
        where: { phone: input.phone },
        include: { school: { select: { name: true } } },
      });
      if (!student) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Неверный телефон или пароль",
        });
      }
      const ok = await verifyPassword(input.password, student.passwordHash);
      if (!ok) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Неверный телефон или пароль",
        });
      }
      return {
        student: {
          id: student.id,
          surname: student.surname,
          name: student.name,
          patronymic: student.patronymic,
          phone: student.phone,
          schoolId: student.schoolId,
          schoolName: student.school.name,
          className: student.className,
        },
      };
    }),

  me: studentProcedure.query(async ({ ctx }) => {
    const student = await ctx.db.student.findUnique({
      where: { id: ctx.studentId },
      include: { school: { select: { name: true } } },
    });
    if (!student) return null;
    return {
      id: student.id,
      surname: student.surname,
      name: student.name,
      patronymic: student.patronymic,
      phone: student.phone,
      schoolId: student.schoolId,
      schoolName: student.school.name,
      className: student.className,
    };
  }),

  dashboard: studentProcedure.query(async ({ ctx }) => {
    const [student, assignments] = await Promise.all([
      ctx.db.student.findUnique({
        where: { id: ctx.studentId },
        include: { school: { select: { name: true } } },
      }),
      ctx.db.assignment.findMany({
        orderBy: [{ lessonId: "asc" }, { order: "asc" }, { id: "asc" }],
        include: {
          lesson: {
            select: {
              id: true,
              title: true,
              course: { select: { title: true } },
            },
          },
          submissions: {
            where: { studentId: ctx.studentId },
            select: {
              id: true,
              status: true,
              score: true,
              submittedAt: true,
              updatedAt: true,
            },
          },
        },
      }),
    ]);
    if (!student) return null;
    const assignedAssignments = assignments
      .map((assignment) => {
        if (!canStudentAccessAssignment(assignment, student)) return null;
        return {
          id: assignment.id,
          title: assignment.title,
          instruction: assignment.instruction,
          taskType: assignment.taskType,
          answerFormat: assignment.answerFormat,
          maxScore: assignment.maxScore,
          lesson: {
            id: assignment.lesson.id,
            title: assignment.lesson.title,
            courseTitle: assignment.lesson.course.title,
          },
          submission: assignment.submissions[0] ?? null,
        };
      })
      .filter(
        (
          value
        ): value is {
          id: number;
          title: string;
          instruction: string;
          taskType: string;
          answerFormat: string;
          maxScore: number;
          lesson: { id: number; title: string; courseTitle: string };
          submission: {
            id: number;
            status: string;
            score: number | null;
            submittedAt: Date | null;
            updatedAt: Date;
          } | null;
        } => value !== null
      );
    const scores = assignedAssignments
      .map((item) => item.submission?.score ?? null)
      .filter((score): score is number => score != null);
    return {
      student: {
        id: student.id,
        fullName: [student.surname, student.name, student.patronymic].filter(Boolean).join(" "),
        schoolName: student.school.name,
        className: student.className,
      },
      assignedAssignments,
      stats: {
        total: assignedAssignments.length,
        completed: assignedAssignments.filter((item) => item.submission?.status === "submitted").length,
        averageScore:
          scores.length === 0
            ? null
            : Math.round((scores.reduce((acc, score) => acc + score, 0) / scores.length) * 10) / 10,
      },
    };
  }),

  assignmentDetail: studentProcedure
    .input(z.object({ assignmentId: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
    const student = await ctx.db.student.findUnique({
      where: { id: ctx.studentId },
      select: { id: true, schoolId: true, className: true },
    });
    if (!student) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Ученик не найден" });
    }
    const assignment = await ctx.db.assignment.findUnique({
      where: { id: input.assignmentId },
      include: {
        lesson: {
          select: {
            id: true,
            title: true,
            course: { select: { title: true } },
          },
        },
        submissions: {
          where: { studentId: ctx.studentId },
          select: {
            id: true,
            status: true,
            score: true,
            submittedAt: true,
            updatedAt: true,
          },
        },
      },
    });
    if (!assignment) {
      throw new TRPCError({ code: "NOT_FOUND", message: "Занятие не найдено" });
    }
    if (!canStudentAccessAssignment(assignment, student)) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Нет доступа к занятию" });
    }
    const config = parseAssignmentConfig(assignment.configJson);
    return {
      id: assignment.id,
      title: assignment.title,
      instruction: assignment.instruction,
      lesson: {
        id: assignment.lesson.id,
        title: assignment.lesson.title,
        courseTitle: assignment.lesson.course.title,
      },
      blocks: config.taskBlocks,
      edges: config.taskGraphEdges,
      submission: assignment.submissions[0] ?? null,
    };
    }),

  recordTestFirstAnswer: studentProcedure
    .input(
      z.object({
        assignmentId: z.number().int().positive(),
        blockId: z.string().min(1),
        optionKeys: z.array(z.string().min(1)).min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const student = await ctx.db.student.findUnique({
        where: { id: ctx.studentId },
        select: { schoolId: true, className: true },
      });
      if (!student) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Ученик не найден" });
      }
      const assignment = await ctx.db.assignment.findUnique({
        where: { id: input.assignmentId },
        select: { id: true, isPublished: true, configJson: true },
      });
      if (!assignment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Задание не найдено" });
      }
      if (!canStudentAccessAssignment(assignment, student)) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Нет доступа к занятию" });
      }
      if (!canRecordFirstAnswerForBlock(assignment.configJson, input.blockId)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Для этого блока ответ не фиксируется",
        });
      }
      const existing = await ctx.db.testAnswerFirst.findUnique({
        where: {
          studentId_assignmentId_blockId: {
            studentId: ctx.studentId,
            assignmentId: input.assignmentId,
            blockId: input.blockId,
          },
        },
      });
      if (existing) return { ok: true as const, created: false };
      await ctx.db.testAnswerFirst.create({
        data: {
          studentId: ctx.studentId,
          assignmentId: input.assignmentId,
          blockId: input.blockId,
          optionKey: serializeOptionKeySet(input.optionKeys),
        },
      });
      return { ok: true as const, created: true };
    }),

  assignmentSaveDraft: studentProcedure
    .input(
      z.object({
        assignmentId: z.number().int().positive(),
        answersJson: z.string().min(2),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const student = await ctx.db.student.findUnique({
        where: { id: ctx.studentId },
        select: { schoolId: true, className: true },
      });
      if (!student) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Ученик не найден" });
      }
      const assignment = await ctx.db.assignment.findUnique({
        where: { id: input.assignmentId },
        select: { id: true, isPublished: true, configJson: true },
      });
      if (!assignment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Задание не найдено" });
      }
      if (!canStudentAccessAssignment(assignment, student)) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Нет доступа к занятию" });
      }
      return ctx.db.assignmentSubmission.upsert({
        where: {
          assignmentId_studentId: {
            assignmentId: input.assignmentId,
            studentId: ctx.studentId,
          },
        },
        update: {
          status: "draft",
          answersJson: input.answersJson,
        },
        create: {
          assignmentId: input.assignmentId,
          studentId: ctx.studentId,
          status: "draft",
          answersJson: input.answersJson,
        },
      });
    }),

  assignmentSubmit: studentProcedure
    .input(
      z.object({
        assignmentId: z.number().int().positive(),
        answersJson: z.string().min(2),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const student = await ctx.db.student.findUnique({
        where: { id: ctx.studentId },
        select: { schoolId: true, className: true },
      });
      if (!student) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Ученик не найден" });
      }
      const assignment = await ctx.db.assignment.findUnique({
        where: { id: input.assignmentId },
        select: { id: true, isPublished: true, configJson: true, maxScore: true },
      });
      if (!assignment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Задание не найдено" });
      }
      if (!canStudentAccessAssignment(assignment, student)) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Нет доступа к занятию" });
      }
      const { score, gradingJson } = await buildGradingPayload(
        ctx.db,
        ctx.studentId,
        input.assignmentId,
        assignment.configJson,
        assignment.maxScore
      );
      return ctx.db.assignmentSubmission.upsert({
        where: {
          assignmentId_studentId: {
            assignmentId: input.assignmentId,
            studentId: ctx.studentId,
          },
        },
        update: {
          status: "submitted",
          answersJson: input.answersJson,
          submittedAt: new Date(),
          score,
          gradingJson,
        },
        create: {
          assignmentId: input.assignmentId,
          studentId: ctx.studentId,
          status: "submitted",
          answersJson: input.answersJson,
          submittedAt: new Date(),
          score,
          gradingJson,
        },
      });
    }),
});

