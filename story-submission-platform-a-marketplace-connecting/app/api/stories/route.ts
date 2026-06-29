import { NextResponse } from "next/server";
import { stories } from "@/data/stories";
import { storySubmissionSchema } from "@/schemas/story";
export async function GET() { return NextResponse.json({ data: stories }); }
export async function POST(request: Request) { const body = await request.json(); const parsed = storySubmissionSchema.safeParse(body); if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 }); return NextResponse.json({ data: { id: crypto.randomUUID(), ...parsed.data, status: "draft" } }, { status: 201 }); }
