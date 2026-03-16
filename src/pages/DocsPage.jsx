import { Link } from "react-router-dom";
import { fortressContent } from "../content/devopsFortressContent";

export default function DocsPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="section-shell">
          <p className="section-kicker">Delivery</p>
          <h1 className="section-title">Service Delivery Overview</h1>
          <p className="section-copy">
            A clear view of how we plan, build, secure, and operate your platform so teams can
            ship faster with confidence.
          </p>
        </div>
      </section>

      <section className="inner-body">
        <div className="section-shell">
          <div className="docs-grid">
            {fortressContent.serviceHighlights.map((item, index) => (
              <article key={item.title} className="service-card docs-card">
                <div className="docs-card__badge">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
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
