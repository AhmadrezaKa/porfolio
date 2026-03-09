import fs from "node:fs/promises";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const POSTS_PATH = path.join(DATA_DIR, "posts.json");

async function ensureStore() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(POSTS_PATH);
  } catch {
    const initial: Post[] = [];
    await fs.writeFile(POSTS_PATH, JSON.stringify(initial, null, 2), "utf8");
  }
}

export async function getAllPosts(): Promise<Post[]> {
  await ensureStore();
  const raw = await fs.readFile(POSTS_PATH, "utf8");
  const data = JSON.parse(raw) as Post[];
  return data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export async function createPost(input: {
  title: string;
  content: string;
}): Promise<Post> {
  await ensureStore();
  const raw = await fs.readFile(POSTS_PATH, "utf8");
  const posts = (JSON.parse(raw) as Post[]) ?? [];

  const baseSlug = input.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 80) || "post";

  let slug = baseSlug;
  let counter = 1;
  while (posts.some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${counter++}`;
  }

  const createdAt = new Date().toISOString();
  const excerpt =
    input.content.split("\n").find((line) => line.trim().length > 0)?.slice(0, 180) ??
    "";

  const post: Post = {
    slug,
    title: input.title,
    excerpt,
    content: input.content,
    createdAt,
  };

  posts.push(post);
  await fs.writeFile(POSTS_PATH, JSON.stringify(posts, null, 2), "utf8");

  return post;
}
