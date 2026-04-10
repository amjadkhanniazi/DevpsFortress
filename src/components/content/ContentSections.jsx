import { useEffect, useState } from 'react';
import {
  RiAlertLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
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
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 720) {
        setCardsPerView(1);
        return;
      }

      if (window.innerWidth <= 1080) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(SERVICES.length - cardsPerView, 0);
    setActiveServiceIndex((currentIndex) => Math.min(currentIndex, maxIndex));
  }, [cardsPerView]);

  const maxServiceIndex = Math.max(SERVICES.length - cardsPerView, 0);
  const serviceSlideWidth = 100 / cardsPerView;

  const goToPreviousServices = () => {
    setActiveServiceIndex((currentIndex) =>
      currentIndex === 0 ? maxServiceIndex : currentIndex - 1,
    );
  };

  const goToNextServices = () => {
    setActiveServiceIndex((currentIndex) =>
      currentIndex >= maxServiceIndex ? 0 : currentIndex + 1,
    );
  };

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
          <div className="services-carousel__top">
            <div>
              <p className="section-kicker">Services</p>
              <h2 className="section-title">
                <RiCodeSSlashLine size={30} aria-hidden="true" />
                Core Delivery Areas
              </h2>
            </div>

            {/* <div className="services-carousel__controls">
              <button
                type="button"
                className="services-carousel__button"
                onClick={goToPreviousServices}
                aria-label="Previous services"
              >
                <RiArrowLeftSLine size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="services-carousel__button"
                onClick={goToNextServices}
                aria-label="Next services"
              >
                <RiArrowRightSLine size={22} aria-hidden="true" />
              </button>
            </div> */}
          </div>

          <div className="services-carousel">
            <div
              className="services-carousel__track"
              style={{
                transform: `translateX(-${activeServiceIndex * serviceSlideWidth}%)`,
              }}
            >
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="services-carousel__slide"
                  style={{ flexBasis: `${serviceSlideWidth}%` }}
                >
                  <Link
                    to={`/services/${service.id}`}
                    className="service-card service-card--linked service-card--media"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card__img"
                    />
                    <div className="service-card__header">
                      <h3>{service.title}</h3>
                    </div>
                    <p>{service.shortDesc}</p>
                    <span className="service-card__cta">Learn more →</span>
                  </Link>
                </div>
              ))}
            </div>
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
