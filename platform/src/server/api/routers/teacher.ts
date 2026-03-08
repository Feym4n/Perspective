import { z } from "zod";
import { TRPCError } from "@trpc/server";
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
});
