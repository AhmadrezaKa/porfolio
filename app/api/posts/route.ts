import { NextResponse } from "next/server";
import { createPost, getAllPosts } from "../../../data/posts";

const USERNAME = "admin";
const PASSWORD = "admin123";

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: Request) {
  const { title, content, username, password } = (await request.json()) as {
    title?: string;
    content?: string;
    username?: string;
    password?: string;
  };

  if (username !== USERNAME || password !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 },
    );
  }

  const post = await createPost({ title, content });
  return NextResponse.json({ post });
}

