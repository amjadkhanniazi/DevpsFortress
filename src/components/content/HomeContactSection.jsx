import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useState, useRef, useEffect } from 'react';
import { fortressContent } from '../../content/devopsFortressContent';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

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

const CONTACT_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/DevOps-Fortress',
    icon: FaGithub,
    hoverColor: '#ffffff',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61587737334414',
    icon: FaFacebook,
    hoverColor: '#1877F2',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/riaz.naeem.71/',
    icon: FaInstagram,
    hoverColor: '#E1306C',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/107876218/admin/dashboard/',
    icon: FaLinkedin,
    hoverColor: '#0A66C2',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923228409304?text=Hello%20DevOps%20Fortress',
    icon: FaWhatsapp,
    hoverColor: '#25D366',
  },
];

export default function HomeContactSection() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [contactRef, contactVisible] = useScrollReveal();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <section
      id="contact"
      className="info-section info-section--cta"
      ref={contactRef}
    >
      <div
        className={`section-shell section-shell--cta contact-layout ${contactVisible ? 'scroll-reveal' : ''}`}
      >
        <div
          className="contact-panel"
          style={{ animationDelay: contactVisible ? '0s' : 'unset' }}
        >
          <p
            className="section-kicker"
            style={{ animationDelay: contactVisible ? '0s' : 'unset' }}
          >
            {fortressContent.contact.kicker}
          </p>
          <h2
            className="section-title"
            style={{ animationDelay: contactVisible ? '0.1s' : 'unset' }}
          >
            <RiCodeSSlashLine size={30} /> {fortressContent.contact.title}
          </h2>
          <p
            className="section-copy"
            style={{ animationDelay: contactVisible ? '0.2s' : 'unset' }}
          >
            {fortressContent.contact.description}
          </p>

          <div className="contact-links">
            {CONTACT_LINKS.map(
              ({ label, icon: Icon, href, hoverColor }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="social-icon-btn"
                  style={{
                    '--hover-color': hoverColor,
                    animationDelay: contactVisible
                      ? `${0.3 + index * 0.08}s`
                      : 'unset',
                  }}
                >
                  <Icon size={18} />
                </a>
              ),
            )}
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          style={{ animationDelay: contactVisible ? '0.2s' : 'unset' }}
        >
          <label>
            Full Name
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Carter"
            />
          </label>

          <label>
            Work Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
            />
          </label>

          <label>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
            />
          </label>

          <label>
            What do you want to improve?
            <textarea
              required
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={fortressContent.contact.messagePlaceholder}
            />
          </label>

          <button type="submit" className="cta-button cta-button--primary">
            Send Request
          </button>

          {submitted && (
            <p className="contact-form__success">
              {fortressContent.contact.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
