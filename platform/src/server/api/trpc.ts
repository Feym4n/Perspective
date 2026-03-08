import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { TRPCError } from "@trpc/server";

import { db } from "~/server/db";

const STUDENT_COOKIE = "student_id";
const TEACHER_COOKIE = "teacher_id";

function parseSessionFromHeaders(headers: Headers): {
  studentId: number | null;
  teacherId: number | null;
} {
  const cookie = headers.get("cookie") ?? "";
  let studentId: number | null = null;
  let teacherId: number | null = null;
  for (const part of cookie.split(";")) {
    const [key, value] = part.trim().split("=");
    if (key === STUDENT_COOKIE && value) {
      const n = Number.parseInt(value, 10);
      if (Number.isInteger(n)) studentId = n;
    }
    if (key === TEACHER_COOKIE && value) {
      const n = Number.parseInt(value, 10);
      if (Number.isInteger(n)) teacherId = n;
    }
  }
  return { studentId, teacherId };
}

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const { studentId, teacherId } = parseSessionFromHeaders(opts.headers);
  return {
    db,
    studentId,
    teacherId,
    ...opts,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();

  if (t._config.isDev) {
    const waitMs = Math.floor(Math.random() * 400) + 100;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();
  const end = Date.now();
  console.log(`[TRPC] ${path} took ${end - start}ms to execute`);

  return result;
});

export const publicProcedure = t.procedure.use(timingMiddleware);

const studentAuthMiddleware = t.middleware(({ ctx, next }) => {
  if (ctx.studentId == null) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Войдите как ученик" });
  }
  return next({ ctx: { ...ctx, studentId: ctx.studentId } });
});

const teacherAuthMiddleware = t.middleware(({ ctx, next }) => {
  if (ctx.teacherId == null) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Войдите как педагог" });
  }
  return next({ ctx: { ...ctx, teacherId: ctx.teacherId } });
});

export const studentProcedure = t.procedure
  .use(timingMiddleware)
  .use(studentAuthMiddleware);
export const teacherProcedure = t.procedure
  .use(timingMiddleware)
  .use(teacherAuthMiddleware);
