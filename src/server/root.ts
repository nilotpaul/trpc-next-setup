import { testRouter } from "./router/testRouter";
import { router } from "./trpc";

export const appRouter = router({
  test: testRouter,
});

export type AppRouter = typeof appRouter;
