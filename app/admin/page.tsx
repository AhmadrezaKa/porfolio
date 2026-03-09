"use client";

import { useEffect, useState } from "react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  createdAt: string;
};

export default function AdminPage() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postError, setPostError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  async function fetchPosts() {
    setIsLoadingPosts(true);
    try {
      const res = await fetch("/api/posts", { cache: "no-store" });
      if (!res.ok) {
        if (res.status === 401) {
          setIsLoggedIn(false);
        }
        return;
      }
      const data = (await res.json()) as { posts: Post[] };
      setPosts(data.posts);
    } finally {
      setIsLoadingPosts(false);
    }
  }

  useEffect(() => {
    // Try to load posts on first visit; if it works we assume user is already logged in.
    void (async () => {
      const res = await fetch("/api/posts", { cache: "no-store" });
      if (res.ok) {
        setIsLoggedIn(true);
        const data = (await res.json()) as { posts: Post[] };
        setPosts(data.posts);
      }
    })();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setLoginError(data.error ?? "Login failed");
        return;
      }
      setIsLoggedIn(true);
      setLoginError(null);
      await fetchPosts();
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCreatePost(e: React.FormEvent) {
    e.preventDefault();
    setPostError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setPostError(data.error ?? "Could not save post");
        return;
      }
      setTitle("");
      setContent("");
      await fetchPosts();
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isLoggedIn) {
    return (
      <section className="section">
        <div className="section-header">
          <h1 className="section-title">Admin</h1>
          <p className="section-subtitle">
            Log in with your private credentials to access the editor.
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleLogin}>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="input"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="input"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="helper-text">
                Default for local use only: <code>admin</code> /{" "}
                <code>admin123</code>.
              </p>
            </div>

            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in…" : "Sign in"}
            </button>
            {loginError && <div className="error">{loginError}</div>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">CMS</h1>
        <p className="section-subtitle">
          Create and publish posts. This editor accepts plain text and simple
          Markdown.
        </p>
      </div>

      <div className="admin-layout">
        <div className="admin-panel">
          <h2>New post</h2>
          <p>Give it a title and write your content below.</p>

          <form onSubmit={handleCreatePost}>
            <div className="field">
              <label htmlFor="post-title">Title</label>
              <input
                id="post-title"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My first post"
              />
            </div>

            <div className="field">
              <label htmlFor="post-content">Content (Markdown supported)</label>
              <textarea
                id="post-content"
                className="textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write in plain text or Markdown (## Heading, - lists, etc.)"
              />
              <p className="helper-text">
                For example: <code>## Heading</code>, <code>- bullet</code>,{" "}
                <code>**bold**</code>.
              </p>
            </div>

            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing…" : "Publish post"}
            </button>
            {postError && <div className="error">{postError}</div>}
          </form>
        </div>

        <div className="admin-panel">
          <h2>Published posts</h2>
          <p>New posts appear here immediately. Click through on the public blog.</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => void fetchPosts()}
            disabled={isLoadingPosts}
          >
            {isLoadingPosts ? "Refreshing…" : "Refresh list"}
          </button>

          <div className="blog-list" style={{ marginTop: 12 }}>
            {posts.length === 0 ? (
              <p className="helper-text">No posts yet.</p>
            ) : (
              posts.map((post) => {
                const date = new Date(post.createdAt);
                return (
                  <article key={post.slug} className="blog-item">
                    <h3>{post.title}</h3>
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
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

