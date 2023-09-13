import { TRPCError, initTRPC } from "@trpc/server";
import { TRPCContext } from "../lib/trpc/context/TRPCContext";

export const t = initTRPC.context<TRPCContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

const isAuthenticated = t.middleware(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return next({
    ctx: {
      session: ctx.session,
      req: ctx.req,
      resHeaders: ctx.resHeaders,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthenticated);
