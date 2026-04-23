import type { NextRequest } from "next/server";
import { generateCarReportPdf } from "@/lib/genreportpdf";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  ctx: { params: Promise<{ carId: string; checkId: string }> }
) {
  const params = await ctx.params;
  return generateCarReportPdf(req, params);
}