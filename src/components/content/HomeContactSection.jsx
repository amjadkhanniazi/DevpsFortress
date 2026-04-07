import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

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
    <section id="contact" className="info-section info-section--cta">
      <div className="section-shell section-shell--cta contact-layout">
        <div className="contact-panel">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            <RiCodeSSlashLine size={30} /> Contact Us
          </h2>
          <p className="section-copy">Reach out using any channel below.</p>

          {/* ✅ Unified Social Icons */}
          <div className="contact-links">
            {CONTACT_LINKS.map(({ label, icon: Icon, href, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="social-icon-btn"
                style={{ '--hover-color': hoverColor }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
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
              placeholder="We need to secure Kubernetes deployments..."
            />
          </label>

          <button type="submit" className="cta-button cta-button--primary">
            Send Request
          </button>

          {submitted && (
            <p className="contact-form__success">
              Request received. We will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
