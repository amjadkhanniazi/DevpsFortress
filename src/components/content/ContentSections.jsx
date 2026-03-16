import { fortressContent } from "../../content/devopsFortressContent";

export default function ContentSections() {
  return (
    <div className="content-flow">
      <section id="about" className="info-section">
        <div className="section-shell">
          <p className="section-kicker">{fortressContent.about.kicker}</p>
          <h2 className="section-title">{fortressContent.about.title}</h2>
          {fortressContent.about.body.map((paragraph) => (
            <p key={paragraph} className="section-copy">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section id="services" className="info-section info-section--alt">
        <div className="section-shell">
          <p className="section-kicker">Services</p>
          <h2 className="section-title">Core Delivery Areas</h2>
          <div className="service-grid">
            {fortressContent.services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="info-section">
        <div className="section-shell">
          <p className="section-kicker">Technology Index</p>
          <h2 className="section-title">Advanced Capabilities</h2>
          <div className="capability-list">
            {fortressContent.capabilities.map((item) => (
              <div key={item} className="capability-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="info-section info-section--alt">
        <div className="section-shell">
          <p className="section-kicker">Why Teams Trust Us</p>
          <h2 className="section-title">Built for Security, Speed, and Compliance</h2>
          <ul className="trust-list">
            {fortressContent.trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="service-model" className="info-section">
        <div className="section-shell">
          <p className="section-kicker">Service Model</p>
          <h2 className="section-title">How We Deliver Results</h2>
          <div className="service-grid">
            {fortressContent.serviceHighlights.map((item) => (
              <article key={item.title} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
