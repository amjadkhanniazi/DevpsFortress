import { Link } from "react-router-dom";

export default function InnerPage({ kicker, title, intro, blocks }) {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="section-shell">
          <p className="section-kicker">{kicker}</p>
          <h1 className="section-title">{title}</h1>
          <p className="section-copy">{intro}</p>
        </div>
      </section>

      <section className="inner-body">
        <div className="section-shell inner-grid">
          {blocks.map((block) => (
            <article key={block.title} className="service-card inner-card">
              <h2>{block.title}</h2>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-cta">
        <div className="section-shell section-shell--cta">
          <p className="section-kicker">Need guidance?</p>
          <h2 className="section-title">Let us design your execution roadmap.</h2>
          <div className="cta-row">
            <Link to="/#contact" className="cta-button cta-button--primary">
              Contact Team
            </Link>
            <Link to="/" className="cta-button cta-button--secondary">
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
