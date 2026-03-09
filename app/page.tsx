import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <div className="hero-chip-row">
            <div className="chip-accent chip">
              <span className="dot" />
              Personal studio
            </div>
            <div className="chip">Portfolio · Skills · Writing</div>
          </div>

          <h1 className="hero-title">
            A focused space for your work, skills, and long-form thinking.
          </h1>
          <p className="hero-subtitle">
            This site is your digital home: highlight projects, capture what
            you&apos;re learning, and publish blog posts with a minimal CMS.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="pill-link pill-link--primary">
              <span>View projects</span>
            </Link>
            <Link href="/blog" className="pill-link">
              Read the blog
            </Link>
          </div>

          <div className="hero-meta">
            <span>Next.js · TypeScript · File-based CMS</span>
            <span>Designed to evolve with your ideas</span>
          </div>
        </div>

        <aside className="hero-orbit">
          <div className="hero-orbit-inner">
            <div className="orbit-row">
              <div>
                <strong>Creative dashboard</strong>
                <div>One place to see your work and thoughts.</div>
              </div>
              <div className="orbit-tag">CMS preview</div>
            </div>

            <div className="orbit-mesh">
              <div className="orbit-circle">
                <div className="orbit-core" />
                <div className="orbit-dot" />
                <div className="orbit-dot" />
                <div className="orbit-dot" />
                <div className="orbit-dot" />
              </div>
            </div>

            <div className="orbit-footer">
              <div>
                <strong>Publishing</strong>
                <div>Draft, review, and publish posts in seconds.</div>
              </div>
              <div>
                <strong>Sections</strong>
                <div>Projects, skills, contact and blog.</div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Overview</h2>
          <p className="section-subtitle">
            You can refine each area later as we go.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <div className="card-header">
              <h3 className="card-title">Projects</h3>
              <span className="tag">Coming next</span>
            </div>
            <p className="card-body">
              A space to present selected work, case studies and experiments.
              We&apos;ll shape the layout and content exactly how you want.
            </p>
          </article>

          <article className="card">
            <div className="card-header">
              <h3 className="card-title">Skills</h3>
              <span className="tag">Highlight strengths</span>
            </div>
            <p className="card-body">
              Capture your core skills, tools and focus areas with a clear
              structure that hiring managers and collaborators can scan quickly.
            </p>
          </article>

          <article className="card">
            <div className="card-header">
              <h3 className="card-title">Contact</h3>
              <span className="tag">Stay reachable</span>
            </div>
            <p className="card-body">
              A minimal, low-friction way for people to reach you — tailored for
              how you prefer to communicate.
            </p>
          </article>

          <article className="card">
            <div className="card-header">
              <h3 className="card-title">Blog & CMS</h3>
              <span className="tag">Built-in editor</span>
            </div>
            <p className="card-body">
              Write and publish posts with a simple text editor, protected by a
              password-only admin area — no external platforms required.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
