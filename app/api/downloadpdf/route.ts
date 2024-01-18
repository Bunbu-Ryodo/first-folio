import type { NextApiRequest, NextApiResponse } from "next";
import { getCV } from "@/app/lib/actions";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const buffer = await getCV();
  const headers = new Headers();
  headers.append("Content-Disposition", 'attachment; filename="cv.pdf"');
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}