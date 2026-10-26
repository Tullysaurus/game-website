import { PrismaClient } from "@/generated/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { connection } from "next/server";

export const getDb = async () => {
  // D1 data is per-request; never read it during build-time prerender
  await connection();
  const { env } = await getCloudflareContext({ async: true });
  const adapter = new PrismaD1(env.DATABASE);
  return new PrismaClient({ adapter });
};