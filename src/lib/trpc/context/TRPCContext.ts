import { userSession } from "@/lib/auth/utils";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { inferAsyncReturnType } from "@trpc/server";

export const createTRPCContext = async (opts?: FetchCreateContextFnOptions) => {
  const { session } = await userSession();

  return {
    session,
    ...opts,
  };
};

export type TRPCContext = inferAsyncReturnType<typeof createTRPCContext>;
