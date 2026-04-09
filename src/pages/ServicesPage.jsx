import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCloud,
  FaCode,
  FaCodeBranch,
  FaGithub,
  FaNetworkWired,
  FaShieldAlt,
} from 'react-icons/fa';
import SERVICES from '../data/services';

const ICON_MAP = {
  FaCodeBranch,
  FaGithub,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaNetworkWired,
};

function ServiceCardImage({ service }) {
  const [src, setSrc] = useState(service.image || service.imageFallback);

  return (
    <img
      src={src}
      alt={service.title}
      className="service-card__img"
      onError={() => {
        if (src !== service.imageFallback) {
          setSrc(service.imageFallback);
        }
      }}
    />
  );
}

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="section-shell">
          <p className="section-kicker">What We Do</p>
          <h1 className="section-title">All Services</h1>
          <p className="section-copy">
            Explore our full range of engineering, automation, cloud, and
            security services designed to help teams ship faster with stronger
            control.
          </p>
        </div>
      </section>

      <section className="inner-body">
        <div className="section-shell">
          <div className="service-grid">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="service-card service-card--linked"
                >
                  <ServiceCardImage service={service} />
                  <div className="service-card__header">
                    {Icon ? <Icon size={18} color="#00f0ff" /> : null}
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.shortDesc}</p>
                  <span className="service-card__cta">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
