import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { getAssignmentStatistics } from "~/server/assignment-statistics";
import { createTRPCRouter, publicProcedure, teacherProcedure } from "~/server/api/trpc";
import { hashPassword, verifyPassword } from "~/server/auth-utils";

export const teacherRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        emailOrPhone: z.string().min(1, "Введите email или телефон"),
        password: z.string().min(6, "Пароль не менее 6 символов"),
        schoolIds: z.array(z.number().int().positive()).min(1, "Выберите хотя бы одну школу"),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existing = await ctx.db.teacher.findUnique({
        where: { emailOrPhone: input.emailOrPhone },
      });
      if (existing) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Педагог с таким email/телефоном уже зарегистрирован",
        });
      }
      const passwordHash = await hashPassword(input.password);
      const teacher = await ctx.db.teacher.create({
        data: {
          emailOrPhone: input.emailOrPhone,
          passwordHash,
        },
      });
      await ctx.db.teacherSchool.createMany({
        data: input.schoolIds.map((schoolId) => ({
          teacherId: teacher.id,
          schoolId,
        })),
      });
      return {
        teacher: {
          id: teacher.id,
          emailOrPhone: teacher.emailOrPhone,
        },
      };
    }),

  login: publicProcedure
    .input(
      z.object({
        emailOrPhone: z.string().min(1),
        password: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const teacher = await ctx.db.teacher.findUnique({
        where: { emailOrPhone: input.emailOrPhone },
      });
      if (!teacher) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Неверный email/телефон или пароль",
        });
      }
      const ok = await verifyPassword(input.password, teacher.passwordHash);
      if (!ok) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Неверный email/телефон или пароль",
        });
      }
      return {
        teacher: {
          id: teacher.id,
          emailOrPhone: teacher.emailOrPhone,
        },
      };
    }),

  me: teacherProcedure.query(async ({ ctx }) => {
    const teacher = await ctx.db.teacher.findUnique({
      where: { id: ctx.teacherId },
      include: {
        schools: { include: { school: true } },
      },
    });
    if (!teacher) return null;
    return {
      id: teacher.id,
      emailOrPhone: teacher.emailOrPhone,
      schools: teacher.schools.map((s) => ({ id: s.school.id, name: s.school.name })),
    };
  }),

  getStudentsByClass: teacherProcedure
    .input(
      z.object({
        schoolId: z.number().int().positive(),
        className: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const canAccess = await ctx.db.teacherSchool.findFirst({
        where: { teacherId: ctx.teacherId, schoolId: input.schoolId },
      });
      if (!canAccess) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Нет доступа к этой школе" });
      }
      const students = await ctx.db.student.findMany({
        where: { schoolId: input.schoolId, className: input.className },
        select: {
          id: true,
          surname: true,
          name: true,
          patronymic: true,
          phone: true,
          className: true,
        },
      });
      const attempts = await ctx.db.attempt.findMany({
        where: { studentId: { in: students.map((s) => s.id) } },
        include: { lesson: { select: { id: true, title: true, courseId: true } } },
      });
      const lessons = await ctx.db.lesson.findMany({
        orderBy: [{ courseId: "asc" }, { order: "asc" }],
        select: { id: true, title: true, courseId: true },
      });
      const byStudent = new Map<number, { lessonId: number; score: number | null }[]>();
      for (const a of attempts) {
        const list = byStudent.get(a.studentId) ?? [];
        list.push({ lessonId: a.lessonId, score: a.score });
        byStudent.set(a.studentId, list);
      }
      return {
        students: students.map((s) => ({
          ...s,
          fullName: [s.surname, s.name, s.patronymic].filter(Boolean).join(" "),
          attempts: byStudent.get(s.id) ?? [],
        })),
        lessons,
      };
    }),

  getClassStats: teacherProcedure
    .input(
      z.object({
        schoolId: z.number().int().positive(),
        className: z.string().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const canAccess = await ctx.db.teacherSchool.findFirst({
        where: { teacherId: ctx.teacherId, schoolId: input.schoolId },
      });
      if (!canAccess) {
        throw new TRPCError({ code: "FORBIDDEN", message: "Нет доступа к этой школе" });
      }
      const [students, lessons, attempts] = await Promise.all([
        ctx.db.student.findMany({
          where: { schoolId: input.schoolId, className: input.className },
          select: { id: true },
        }),
        ctx.db.lesson.findMany({
          orderBy: [{ courseId: "asc" }, { order: "asc" }],
          include: { course: { select: { title: true } } },
        }),
        ctx.db.attempt.findMany({
          where: {
            student: { schoolId: input.schoolId, className: input.className },
          },
        }),
      ]);
      const studentIds = new Set(students.map((s) => s.id));
      const byLesson = new Map<number, { count: number; totalScore: number }>();
      for (const l of lessons) {
        byLesson.set(l.id, { count: 0, totalScore: 0 });
      }
      for (const a of attempts) {
        if (studentIds.has(a.studentId) && a.score != null) {
          const cur = byLesson.get(a.lessonId);
          if (cur) {
            cur.count += 1;
            cur.totalScore += a.score;
          }
        }
      }
      return {
        totalStudents: students.length,
        lessons: lessons.map((l) => {
          const stat = byLesson.get(l.id) ?? { count: 0, totalScore: 0 };
          return {
            id: l.id,
            title: l.title,
            courseTitle: l.course.title,
            completedCount: stat.count,
            averageScore: stat.count > 0 ? Math.round((stat.totalScore / stat.count) * 10) / 10 : null,
          };
        }),
      };
    }),

  lessonList: teacherProcedure.query(async ({ ctx }) => {
    return ctx.db.lesson.findMany({
      orderBy: [{ courseId: "asc" }, { order: "asc" }],
      include: { course: { select: { title: true } } },
    });
  }),

  workspaceLessonEnsure: teacherProcedure.mutation(async ({ ctx }) => {
    const courseTitle = `Личная библиотека педагога #${ctx.teacherId}`;
    let course = await ctx.db.course.findFirst({
      where: { title: courseTitle },
      select: { id: true },
    });
    if (!course) {
      course = await ctx.db.course.create({
        data: { title: courseTitle },
        select: { id: true },
      });
    }

    let lesson = await ctx.db.lesson.findFirst({
      where: { courseId: course.id, title: "Материалы педагога" },
      select: { id: true, courseId: true, title: true },
    });
    if (!lesson) {
      lesson = await ctx.db.lesson.create({
        data: { courseId: course.id, title: "Материалы педагога", order: 1 },
        select: { id: true, courseId: true, title: true },
      });
    }
    return lesson;
  }),

  classList: teacherProcedure.query(async ({ ctx }) => {
    const schoolIds = await ctx.db.teacherSchool.findMany({
      where: { teacherId: ctx.teacherId },
      select: { schoolId: true },
    });
    const ids = schoolIds.map((s) => s.schoolId);
    if (ids.length === 0) return [];

    const rows = await ctx.db.student.groupBy({
      by: ["schoolId", "className"],
      where: { schoolId: { in: ids } },
      _count: { _all: true },
      orderBy: [{ schoolId: "asc" }, { className: "asc" }],
    });
    const schools = await ctx.db.school.findMany({
      where: { id: { in: ids } },
      select: { id: true, name: true },
    });
    const schoolMap = new Map(schools.map((s) => [s.id, s.name]));
    return rows.map((r) => ({
      schoolId: r.schoolId,
      schoolName: schoolMap.get(r.schoolId) ?? `Школа #${r.schoolId}`,
      className: r.className,
      studentCount: r._count._all,
    }));
  }),

  assignmentTemplateList: teacherProcedure.query(async ({ ctx }) => {
    return ctx.db.assignmentTemplate.findMany({
      orderBy: { id: "asc" },
    });
  }),

  assignmentByLesson: teacherProcedure
    .input(z.object({ lessonId: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.assignment.findMany({
        where: { lessonId: input.lessonId },
        orderBy: [{ order: "asc" }, { id: "asc" }],
        include: {
          fields: { orderBy: [{ order: "asc" }, { id: "asc" }] },
        },
      });
    }),

  assignmentCreate: teacherProcedure
    .input(
      z.object({
        lessonId: z.number().int().positive(),
        title: z.string().min(1),
        instruction: z.string().min(1),
        taskType: z.string().min(1),
        answerFormat: z.string().min(1),
        goal: z.string().optional(),
        maxScore: z.number().int().positive().optional(),
        templateKey: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const last = await ctx.db.assignment.findFirst({
        where: { lessonId: input.lessonId },
        orderBy: { order: "desc" },
      });
      return ctx.db.assignment.create({
        data: {
          lessonId: input.lessonId,
          title: input.title,
          goal: input.goal ?? null,
          instruction: input.instruction,
          taskType: input.taskType,
          answerFormat: input.answerFormat,
          maxScore: input.maxScore ?? null,
          order: (last?.order ?? 0) + 1,
          configJson: input.templateKey ? JSON.stringify({ templateKey: input.templateKey }) : null,
        },
      });
    }),

  assignmentUpdate: teacherProcedure
    .input(
      z.object({
        id: z.number().int().positive(),
        title: z.string().min(1).optional(),
        goal: z.string().optional().nullable(),
        instruction: z.string().min(1).optional(),
        taskType: z.string().min(1).optional(),
        answerFormat: z.string().min(1).optional(),
        gradingMode: z.string().min(1).optional(),
        maxScore: z.number().int().positive().optional().nullable(),
        order: z.number().int().optional(),
        isPublished: z.boolean().optional(),
        configJson: z.string().optional().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...patch } = input;
      return ctx.db.assignment.update({
        where: { id },
        data: patch,
      });
    }),

  assignmentDelete: teacherProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.assignment.delete({ where: { id: input.id } });
      return { ok: true };
    }),

  assignmentAssignClasses: teacherProcedure
    .input(
      z.object({
        assignmentId: z.number().int().positive(),
        classes: z.array(
          z.object({
            schoolId: z.number().int().positive(),
            className: z.string().min(1),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const assignment = await ctx.db.assignment.findUnique({
        where: { id: input.assignmentId },
        select: { id: true, configJson: true },
      });
      if (!assignment) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Занятие не найдено" });
      }

      let config: Record<string, unknown> = {};
      if (assignment.configJson) {
        try {
          config = JSON.parse(assignment.configJson) as Record<string, unknown>;
        } catch {
          config = {};
        }
      }

      config.assignedClasses = input.classes;

      await ctx.db.assignment.update({
        where: { id: assignment.id },
        data: { configJson: JSON.stringify(config) },
      });
      return { ok: true };
    }),

  assignmentStatistics: teacherProcedure
    .input(z.object({ assignmentId: z.number().int().positive() }))
    .query(async ({ ctx, input }) => {
      const stats = await getAssignmentStatistics(ctx.db, input.assignmentId);
      if (!stats) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Занятие не найдено" });
      }
      return stats;
    }),
});
