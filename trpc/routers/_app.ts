import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { z } from "zod";

export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
