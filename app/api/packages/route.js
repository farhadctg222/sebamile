// /app/api/packages/route.js";

import { db } from "../../lib/db";


export async function GET() {
  const [rows] = await db.execute("SELECT * FROM packages WHERE status=1");
  return Response.json(rows);
}