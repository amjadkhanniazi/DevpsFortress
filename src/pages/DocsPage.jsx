import { fortressContent } from "../content/devopsFortressContent";

export default function DocsPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="section-shell">
          <p className="section-kicker">Docs</p>
          <h1 className="section-title">Implementation FAQs and Delivery Guidance</h1>
          <p className="section-copy">
            Practical answers about onboarding, DevSecOps integration, cloud migration, compliance,
            and operating secure infrastructure at scale.
          </p>
        </div>
      </section>

      <section className="inner-body">
        <div className="section-shell">
          <div className="faq-stack">
            {fortressContent.faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
