export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          We&apos;ll fill this with real work once you share more details.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Flagship project</h2>
            <span className="tag">Example</span>
          </div>
          <p className="card-body">
            This area is for your most important work. We can later show
            screenshots, tech stack, and a short story about the impact.
          </p>
          <div className="stack">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Design systems</span>
          </div>
        </article>

        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Experiments</h2>
            <span className="tag">Sandbox</span>
          </div>
          <p className="card-body">
            A place for small experiments, weekend builds, and ideas that
            don&apos;t need a long case study but still show your thinking.
          </p>
        </article>
      </div>
    </section>
  );
}
