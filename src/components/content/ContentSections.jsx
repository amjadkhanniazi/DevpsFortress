import {
  RiAlertLine,
  RiCodeSSlashLine,
  RiCpuLine,
  RiShieldLine,
} from 'react-icons/ri';
import {
  SiAnsible,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import SERVICES from '../../data/services';
import { fortressContent } from '../../content/devopsFortressContent';

const TECH_STACK_BADGES = [
  { label: 'GitHub Actions', Icon: SiGithubactions },
  { label: 'GitLab', Icon: SiGitlab },
  { label: 'Jenkins', Icon: SiJenkins },
  { label: 'Docker', Icon: SiDocker },
  { label: 'Kubernetes', Icon: SiKubernetes },
  { label: 'Terraform', Icon: SiTerraform },
  { label: 'Ansible', Icon: SiAnsible },
];

export default function ContentSections() {
  return (
    <div className="content-flow">
      <section id="about" className="info-section">
        <div className="section-shell">
          <p className="section-kicker">{fortressContent.about.kicker}</p>
          <h2 className="section-title">
            <RiShieldLine size={30} aria-hidden="true" />{' '}
            {fortressContent.about.title}
          </h2>
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
          <h2 className="section-title">
            <RiCodeSSlashLine size={30} aria-hidden="true" />
            Core Delivery Areas
          </h2>
          <div className="service-grid">
            {SERVICES.map((service) => {
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="service-card service-card--linked"
                >
                  <h3>{service.title}</h3>
                  <p>{service.shortDesc}</p>
                  <span className="service-card__cta">Learn more →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="platform" className="info-section">
        <div className="section-shell">
          <p className="section-kicker">Technology Index</p>
          <h2 className="section-title">
            <RiCpuLine size={30} aria-hidden="true" /> Advanced Capabilities
          </h2>
          <div className="capability-list">
            {TECH_STACK_BADGES.map(({ label, Icon }) => {
              return (
                <div key={label} className="capability-pill">
                  <Icon size={16} aria-hidden="true" /> {label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="security" className="info-section info-section--alt">
        <div className="section-shell">
          <p className="section-kicker">Why Teams Trust Us</p>
          <h2 className="section-title">
            Built for Security, Speed, and Compliance
          </h2>
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
          <h2 className="section-title">
            <RiShieldLine size={30} aria-hidden="true" /> How We Deliver Results
          </h2>
          <div className="service-grid">
            {fortressContent.serviceHighlights.map((item) => {
              return (
                <article key={item.title} className="service-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
