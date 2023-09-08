import { protectedProcedure, publicProcedure, router } from "../trpc";
import * as z from "zod";

export const testRouter = router({
  getTest: publicProcedure
    .input(
      z.object({
        name: z.string(),
        num: z.coerce.number(),
      })
    )
    .query(async ({ input }) => {
      return input;
    }),

  getName: protectedProcedure.query(async ({ ctx: { session } }) => {
    return `your name`;
  }),
});
