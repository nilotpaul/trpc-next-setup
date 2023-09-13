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
    .query(async ({ input, ctx: { req, session } }) => {
      return input;
    }),

  getName: protectedProcedure.query(async () => {
    return `your name`;
  }),
});
