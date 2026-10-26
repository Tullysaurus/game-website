import { getDb } from "@/lib/db";

export async function GET() {
  const db = await getDb();

  const global = await db.global.upsert({
    where: { id: "global" },
    create: { id: "global", count: 1 },
    update: { count: { increment: 1 } },
  });

  return Response.json({ count: global.count });
}
