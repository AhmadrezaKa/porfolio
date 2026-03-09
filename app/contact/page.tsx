export default function ContactPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">
          We can plug in your real channels (email, LinkedIn, anything else) once
          you decide what you want to share.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Direct email</h2>
            <span className="tag">Default option</span>
          </div>
          <p className="card-body">
            This card can become a simple email button, or we can add a contact
            form that forwards messages to you.
          </p>
        </article>

        <article className="card">
          <div className="card-header">
            <h2 className="card-title">Other links</h2>
            <span className="tag">Social / profiles</span>
          </div>
          <p className="card-body">
            GitHub, LinkedIn, or anything else you want people to see before
            they contact you.
          </p>
        </article>
      </div>
    </section>
  );
}
