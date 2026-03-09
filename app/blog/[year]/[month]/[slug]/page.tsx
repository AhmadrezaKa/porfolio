import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "../../../../../data/posts";

type PageProps = {
  params: { year: string; month: string; slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => {
    const date = new Date(post.createdAt);
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return { year, month, slug: post.slug };
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const date = new Date(post.createdAt);

  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">{post.title}</h1>
        <p className="section-subtitle">
          {date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      <article className="card">
        <div className="card-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
}

