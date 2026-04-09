import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SERVICES from '../data/services';

function ServiceHeroImage({ service }) {
  const [src, setSrc] = useState(service.image || service.imageFallback);

  return (
    <img
      src={src}
      alt={service.title}
      className="service-detail-hero__img"
      onError={() => {
        if (src !== service.imageFallback) {
          setSrc(service.imageFallback);
        }
      }}
    />
  );
}

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <main className="inner-page">
        <section className="inner-hero">
          <div className="section-shell">
            <p className="section-kicker">Services</p>
            <h1 className="section-title">Service not found</h1>
            <p className="section-copy">
              The service you requested could not be found.
            </p>
            <Link to="/services" className="service-detail__back">
              ← All Services
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="inner-page">
      <section className="service-detail-hero">
        <ServiceHeroImage service={service} />
        <div className="service-detail-hero__overlay">
          <div className="section-shell">
            <Link to="/services" className="service-detail__back">
              ← All Services
            </Link>
            <h1 className="section-title">{service.title}</h1>
            <p className="section-copy">{service.fullDesc}</p>
          </div>
        </div>
      </section>

      <section className="inner-body">
        <div className="section-shell">
          <h2 className="section-title service-detail__section-title">
            What&apos;s Included
          </h2>
          <ul className="inner-list">
            {service.highlights.map((item) => (
              <li key={item} className="inner-list__item">
                {item}
              </li>
            ))}
          </ul>

          <h2
            className="section-title service-detail__section-title"
            style={{ marginTop: '36px' }}
          >
            Tools & Technologies
          </h2>
          <div className="capability-list">
            {service.tools.map((tool) => (
              <div key={tool} className="capability-pill">
                {tool}
              </div>
            ))}
          </div>

          {/* <div className="service-detail__cta">
            <h2 className="section-title service-detail__section-title">
              Ready to get started?
            </h2>
            <p className="section-copy">
              Talk to our team about {service.title}
            </p>
            <Link to="/#contact" className="cta-button cta-button--primary">
              Contact Us
            </Link>
          </div> */}
        </div>
      </section>
    </main>
  );
}
