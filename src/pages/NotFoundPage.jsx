import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="section-shell">
          <p className="section-kicker">404</p>
          <h1 className="section-title">Page not found</h1>
          <p className="section-copy">
            The requested page does not exist. Return to the homepage to continue.
          </p>
          <div className="cta-row">
            <Link to="/" className="cta-button cta-button--primary">
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
