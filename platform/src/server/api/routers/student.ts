import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure, studentProcedure } from "~/server/api/trpc";
import { hashPassword, verifyPassword } from "~/server/auth-utils";

// Строго 3 символа: два цифры класса + одна заглавная русская буква (например 10Б)
const CLASS_REGEX = /^[0-9]{2}[А-ЯЁ]$/;

export const studentRouter = createTRPCRouter({
  register: publicProcedure
    .input(
      z.object({
        surname: z.string().min(1, "Введите фамилию"),
        name: z.string().min(1, "Введите имя"),
        patronymic: z.string().optional(),
        phone: z.string().min(1, "Введите телефон"),
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
        phone: z.string().min(1),
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
    const [student, lessons, attempts] = await Promise.all([
      ctx.db.student.findUnique({
        where: { id: ctx.studentId },
        include: { school: { select: { name: true } } },
      }),
      ctx.db.lesson.findMany({
        orderBy: [{ courseId: "asc" }, { order: "asc" }],
        include: { course: { select: { title: true } } },
      }),
      ctx.db.attempt.findMany({
        where: { studentId: ctx.studentId },
      }),
    ]);
    if (!student) return null;
    const attemptByLesson = new Map(attempts.map((a) => [a.lessonId, a]));
    return {
      student: {
        id: student.id,
        fullName: [student.surname, student.name, student.patronymic].filter(Boolean).join(" "),
        schoolName: student.school.name,
        className: student.className,
      },
      lessons: lessons.map((l) => ({
        id: l.id,
        title: l.title,
        courseTitle: l.course.title,
        attempted: attemptByLesson.has(l.id),
        score: attemptByLesson.get(l.id)?.score ?? null,
      })),
    };
  }),
});

