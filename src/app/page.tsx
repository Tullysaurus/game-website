import { Suspense } from "react";
import { getDb } from "@/lib/db";


async function Content() {
  const db = await getDb();

  const global = await db.global.upsert({
    where: { id: "global" },
    create: { id: "global", count: 1 },
    update: { count: { increment: 1 } },
  });

  return (
    <div>
      Count: {global.count}
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <p>
        Home
      </p>
      <Suspense>
        <Content />
      </Suspense>
    </div>
  )
}
