import { getCV } from "@/app/lib/actions";

export async function GET() {
  const buffer = await getCV();
  const headers = new Headers();
  headers.append("Content-Disposition", 'attachment; filename="cv.pdf"');
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
