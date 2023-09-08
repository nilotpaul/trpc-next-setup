import { userSession } from "@/lib/auth/utils";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export const createTRPCContext = async (opts?: FetchCreateContextFnOptions) => {
  const { session } = await userSession();

  return {
    session,
  };
};

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;
