import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server/root";
import { NextResponse } from "next/server";
import { createTRPCContext } from "@/lib/trpc/context/TRPCContext";

const handler = (req: Request, res: NextResponse) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
