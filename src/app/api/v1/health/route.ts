import { connection } from "next/server";

export async function GET() {
    // Without this, Cache Components prerenders the response at build time
    await connection();
    return Response.json({ status: "ok" });
}
