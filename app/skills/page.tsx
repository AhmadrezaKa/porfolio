export default function SkillsPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">
          We&apos;ll customise this grid to match how you actually work.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Core</h2>
            <span className="tag">What you use daily</span>
          </div>
          <p className="card-body">
            This is where we&apos;ll list your strongest languages, frameworks
            and problem-solving strengths.
          </p>
        </article>

        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Tools</h2>
            <span className="tag">Ecosystem</span>
          </div>
          <p className="card-body">
            Design tools, developer tooling, cloud platforms and anything else
            that supports how you ship projects.
          </p>
        </article>

        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Soft skills</h2>
            <span className="tag">How you collaborate</span>
          </div>
          <p className="card-body">
            Communication, collaboration, mentoring, product thinking – we can
            phrase this in a way that feels natural to you.
          </p>
        </article>
      </div>
    </section>
  );
}
