import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const schoolRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.school.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true, code: true },
    });
  }),
});
