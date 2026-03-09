import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createPost, getAllPosts } from "../../../data/posts";

function requireAdmin() {
  const cookieStore = cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "ok") {
    throw new Error("unauthorized");
  }
}

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  try {
    requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content } = (await request.json()) as {
    title?: string;
    content?: string;
  };

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 },
    );
  }

  const post = await createPost({ title, content });
  return NextResponse.json({ post });
}

