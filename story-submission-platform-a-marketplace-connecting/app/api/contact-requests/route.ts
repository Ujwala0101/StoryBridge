import { NextResponse } from "next/server";
import { z } from "zod";
const contactRequestSchema = z.object({ storyId: z.string().min(1), message: z.string().min(40).max(1200) });
export async function POST(request: Request) { const parsed = contactRequestSchema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 }); return NextResponse.json({ data: { id: crypto.randomUUID(), status: "pending", ...parsed.data } }, { status: 201 }); }
