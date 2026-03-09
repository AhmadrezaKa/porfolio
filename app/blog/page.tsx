import Link from "next/link";
import { getAllPosts } from "../../data/posts";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">
          Thoughts, notes, and longer pieces. New posts appear here as soon as
          you publish them from the CMS.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="helper-text">
          No posts yet. Log in at <code>/admin</code> to publish your first one.
        </p>
      ) : (
        <div className="blog-list">
          {posts.map((post) => {
            const date = new Date(post.createdAt);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const href = `/blog/${year}/${month}/${post.slug}`;

            return (
              <article key={post.slug} className="blog-item">
                <h3>
                  <Link href={href}>{post.title}</Link>
                </h3>
                <div className="blog-item-meta">
                  {date.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                {post.excerpt && (
                  <p className="blog-item-excerpt">{post.excerpt}</p>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
