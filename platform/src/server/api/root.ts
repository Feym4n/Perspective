import { schoolRouter } from "~/server/api/routers/school";
import { studentRouter } from "~/server/api/routers/student";
import { teacherRouter } from "~/server/api/routers/teacher";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  school: schoolRouter,
  student: studentRouter,
  teacher: teacherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
