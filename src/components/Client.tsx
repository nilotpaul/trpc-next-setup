"use client";

import { trpcC } from "@/lib/trpc/client";
import { trpcS } from "@/lib/trpc/trpcServer";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

type ClientProps = {
  initialData: Awaited<ReturnType<(typeof trpcS)["test"]["getName"]["query"]>>;
  session: Session | null;
};

const Client: FC<ClientProps> = ({ initialData, session }) => {
  if (!session) {
    redirect("/api/auth/signin");
  }

  const { data } = trpcC.test.getName.useQuery(undefined, {
    initialData,
  });
  return <div>{data}</div>;
};

export default Client;
