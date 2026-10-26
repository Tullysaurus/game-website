import { Suspense } from "react";
import { getDb } from "@/lib/db";

async function Content() {
  const db = await getDb();

  const global = await db.global.upsert({
    where: { id: "global" },
    create: { id: "global" },             // count defaults to 0
    update: { count: { increment: 1 } },  // or {} to just read it
  });

  return (
    <div>
      Count: {global.count}
    </div>
  )
}

export default function Home() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  )
}
