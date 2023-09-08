import { loggerLink } from "@trpc/client";
import { experimental_createTRPCNextAppDirServer as createTRPCAppDirServer } from "@trpc/next/app-dir/server";
import { experimental_nextCacheLink as nextCacheLink } from "@trpc/next/app-dir/links/nextCache";
import { AppRouter, appRouter } from "@/server/root";
import { userSession } from "../auth/utils";

export const trpcS = createTRPCAppDirServer<AppRouter>({
  config() {
    return {
      links: [
        loggerLink({
          enabled: () => true,
        }),

        nextCacheLink({
          router: appRouter,
          createContext: async () => {
            const { session } = await userSession();

            return {
              session,
            };
          },
        }),
      ],
    };
  },
});
