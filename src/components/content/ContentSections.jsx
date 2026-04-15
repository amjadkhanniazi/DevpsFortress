import { useEffect, useState, useRef } from 'react';
import { RiCodeSSlashLine, RiCpuLine, RiShieldLine } from 'react-icons/ri';
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

// Custom hook for scroll animations
function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

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
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [platformRef, platformVisible] = useScrollReveal();
  const [securityRef, securityVisible] = useScrollReveal();
  const [serviceModelRef, serviceModelVisible] = useScrollReveal();

  return (
    <div className="content-flow">
      <section id="about" className="info-section" ref={aboutRef}>
        <div className={`section-shell ${aboutVisible ? 'scroll-reveal' : ''}`}>
          <p
            className="section-kicker"
            style={{ animationDelay: aboutVisible ? '0s' : 'unset' }}
          >
            {fortressContent.about.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: aboutVisible ? '0.1s' : 'unset' }}
          >
            <RiShieldLine size={30} aria-hidden="true" />{' '}
            {fortressContent.about.title}
          </h2>
          {fortressContent.about.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className="section-copy"
              style={{
                animationDelay: aboutVisible
                  ? `${0.2 + index * 0.1}s`
                  : 'unset',
              }}
            >
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
          </div>

          <div className="services-carousel" ref={servicesRef}>
            <div
              className={`services-carousel__track ${servicesVisible ? 'scroll-reveal' : ''}`}
            >
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  className="services-carousel__slide"
                  style={{
                    animationDelay: servicesVisible
                      ? `${index * 0.1}s`
                      : 'unset',
                  }}
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

      <section id="platform" className="info-section" ref={platformRef}>
        <div
          className={`section-shell ${platformVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: platformVisible ? '0s' : 'unset' }}
          >
            Technology Index
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: platformVisible ? '0.1s' : 'unset' }}
          >
            <RiCpuLine size={30} aria-hidden="true" /> Advanced Capabilities
          </h2>
          <div className="capability-list">
            {TECH_STACK_BADGES.map(({ label, Icon }, index) => {
              return (
                <div
                  key={label}
                  className="capability-pill"
                  style={{
                    animationDelay: platformVisible
                      ? `${0.2 + index * 0.08}s`
                      : 'unset',
                  }}
                >
                  <Icon size={16} aria-hidden="true" /> {label}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="security"
        className="info-section info-section--alt"
        ref={securityRef}
      >
        <div
          className={`section-shell ${securityVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: securityVisible ? '0s' : 'unset' }}
          >
            Why Teams Trust Us
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: securityVisible ? '0.1s' : 'unset' }}
          >
            Built for Security, Speed, and Compliance
          </h2>
          <ul className="trust-list">
            {fortressContent.trustPoints.map((point, index) => (
              <li
                key={point}
                style={{
                  animationDelay: securityVisible
                    ? `${0.2 + index * 0.1}s`
                    : 'unset',
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="service-model"
        className="info-section"
        ref={serviceModelRef}
      >
        <div
          className={`section-shell ${serviceModelVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: serviceModelVisible ? '0s' : 'unset' }}
          >
            Service Model
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: serviceModelVisible ? '0.1s' : 'unset' }}
          >
            <RiShieldLine size={30} aria-hidden="true" /> How We Deliver Results
          </h2>
          <div className="service-grid">
            {fortressContent.serviceHighlights.map((item, index) => {
              return (
                <article
                  key={item.title}
                  className="service-card"
                  style={{
                    animationDelay: serviceModelVisible
                      ? `${0.2 + index * 0.1}s`
                      : 'unset',
                  }}
                >
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
