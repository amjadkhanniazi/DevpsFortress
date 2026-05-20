import { useEffect, useRef, useState } from 'react';
import { RiCodeSSlashLine, RiCpuLine, RiShieldLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
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

export default function ContentSections() {
  const [overviewRef, overviewVisible] = useScrollReveal();
  const [servicesRef, servicesVisible] = useScrollReveal();
  const [riskRef, riskVisible] = useScrollReveal();
  const [processRef, processVisible] = useScrollReveal();
  const [platformRef, platformVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="content-flow">
      <section id="about" className="info-section" ref={overviewRef}>
        <div
          className={`section-shell ${overviewVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: overviewVisible ? '0s' : 'unset' }}
          >
            {fortressContent.serviceConnectionOverview.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: overviewVisible ? '0.1s' : 'unset' }}
          >
            <RiShieldLine size={30} aria-hidden="true" />{' '}
            {fortressContent.serviceConnectionOverview.title}
          </h2>
          {fortressContent.serviceConnectionOverview.body.map(
            (paragraph, index) => (
              <p
                key={paragraph}
                className="section-copy"
                style={{
                  animationDelay: overviewVisible
                    ? `${0.2 + index * 0.1}s`
                    : 'unset',
                }}
              >
                {paragraph}
              </p>
            ),
          )}
        </div>
      </section>

      <section
        id="services"
        className="info-section info-section--alt"
        ref={servicesRef}
      >
        <div
          className={`section-shell ${servicesVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: servicesVisible ? '0s' : 'unset' }}
          >
            Services
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: servicesVisible ? '0.1s' : 'unset' }}
          >
            <RiCodeSSlashLine size={30} aria-hidden="true" />
            Our Azure DevOps Services
          </h2>

          <div className="service-grid service-grid--azure">
            {fortressContent.azureServices.map((service, index) => (
              <article
                key={service.title}
                className="service-card service-card--detailed"
                style={{
                  animationDelay: servicesVisible
                    ? `${0.2 + index * 0.1}s`
                    : 'unset',
                }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-card__bullets">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="info-section" ref={riskRef}>
        <div className={`section-shell ${riskVisible ? 'scroll-reveal' : ''}`}>
          <p
            className="section-kicker"
            style={{ animationDelay: riskVisible ? '0s' : 'unset' }}
          >
            {fortressContent.riskManagement.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: riskVisible ? '0.1s' : 'unset' }}
          >
            {fortressContent.riskManagement.title}
          </h2>
          <p
            className="section-copy"
            style={{ animationDelay: riskVisible ? '0.2s' : 'unset' }}
          >
            {fortressContent.riskManagement.intro}
          </p>
          <ul className="trust-list">
            {fortressContent.riskManagement.risks.map((point, index) => (
              <li
                key={point}
                style={{
                  animationDelay: riskVisible
                    ? `${0.3 + index * 0.1}s`
                    : 'unset',
                }}
              >
                {point}
              </li>
            ))}
          </ul>
          <p
            className="section-copy"
            style={{ animationDelay: riskVisible ? '0.8s' : 'unset' }}
          >
            {fortressContent.riskManagement.closing}
          </p>
        </div>
      </section>

      <section
        id="service-model"
        className="info-section info-section--alt"
        ref={processRef}
      >
        <div
          className={`section-shell ${processVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: processVisible ? '0s' : 'unset' }}
          >
            {fortressContent.setupProcess.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: processVisible ? '0.1s' : 'unset' }}
          >
            <RiShieldLine size={30} aria-hidden="true" />{' '}
            {fortressContent.setupProcess.title}
          </h2>
          <p
            className="section-copy"
            style={{ animationDelay: processVisible ? '0.2s' : 'unset' }}
          >
            {fortressContent.setupProcess.intro}
          </p>

          <div className="setup-steps">
            {fortressContent.setupProcess.steps.map((step, index) => (
              <article
                key={step.title}
                className="service-card setup-step"
                style={{
                  animationDelay: processVisible
                    ? `${0.3 + index * 0.1}s`
                    : 'unset',
                }}
              >
                <span className="setup-step__badge">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
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
            {fortressContent.technologies.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: platformVisible ? '0.1s' : 'unset' }}
          >
            <RiCpuLine size={30} aria-hidden="true" />{' '}
            {fortressContent.technologies.title}
          </h2>
          <div className="capability-list capability-list--dense">
            {fortressContent.technologies.items.map((label, index) => (
              <div
                key={label}
                className="capability-pill"
                style={{
                  animationDelay: platformVisible
                    ? `${0.2 + index * 0.04}s`
                    : 'unset',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="info-section info-section--alt" ref={faqRef}>
        <div className={`section-shell ${faqVisible ? 'scroll-reveal' : ''}`}>
          <p
            className="section-kicker"
            style={{ animationDelay: faqVisible ? '0s' : 'unset' }}
          >
            FAQ
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: faqVisible ? '0.1s' : 'unset' }}
          >
            Frequently Asked Questions About Azure DevOps Service Connections
          </h2>
          <div className="faq-stack">
            {fortressContent.faqs.map((item, index) => (
              <details
                key={item.question}
                className="faq-item"
                open={index === 0}
                style={{
                  animationDelay: faqVisible
                    ? `${0.2 + index * 0.08}s`
                    : 'unset',
                }}
              >
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="azure-devops-cta" className="info-section" ref={ctaRef}>
        <div
          className={`section-shell final-cta ${ctaVisible ? 'scroll-reveal' : ''}`}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: ctaVisible ? '0s' : 'unset' }}
          >
            {fortressContent.cta.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: ctaVisible ? '0.1s' : 'unset' }}
          >
            {fortressContent.cta.title}
          </h2>
          <p
            className="section-copy"
            style={{ animationDelay: ctaVisible ? '0.2s' : 'unset' }}
          >
            {fortressContent.cta.description}
          </p>
          <div
            className="cta-row"
            style={{ animationDelay: ctaVisible ? '0.3s' : 'unset' }}
          >
            <a href="#contact" className="cta-button cta-button--primary">
              {fortressContent.cta.primary}
            </a>
            <Link to="/services" className="cta-button cta-button--secondary">
              {fortressContent.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
