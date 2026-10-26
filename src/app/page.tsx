import { Suspense } from "react";
import { getDb } from "@/lib/db";

async function Content() {
  const db = await getDb();


  return (
    <div>
      Home
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
