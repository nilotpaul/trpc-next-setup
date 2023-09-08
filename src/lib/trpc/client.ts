import { type AppRouter } from "@/server/root";
import { createTRPCReact } from "@trpc/react-query";

export const trpcC = createTRPCReact<AppRouter>({});
