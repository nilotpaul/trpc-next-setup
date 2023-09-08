import Client from "@/components/Client";
import { userSession } from "@/lib/auth/utils";
import { trpcS } from "@/lib/trpc/trpcServer";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await trpcS.test.getName.query();
  const { session } = await userSession();

  return (
    <div>
      hey
      <Client initialData={data} session={session} />
    </div>
  );
}
