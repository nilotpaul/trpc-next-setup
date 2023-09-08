"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpcC } from "./client";
import { httpBatchLink } from "@trpc/client";
import { getUrl } from "@/lib/utils/trpcBaseUrl";

const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpcC.createClient({
      links: [
        httpBatchLink({
          url: getUrl(),
        }),
      ],
    })
  );

  return (
    <trpcC.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcC.Provider>
  );
};

export default TRPCProvider;
