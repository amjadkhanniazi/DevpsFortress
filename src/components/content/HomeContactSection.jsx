import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const CONTACT_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587737334414",
    type: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/107876218/admin/dashboard/",
    type: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/riaz.naeem.71/",
    type: "instagram",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923228409304?text=Hello%20DevOps%20Fortress",
    type: "whatsapp",
  },
];

function ContactIcon({ type }) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v5h3v-5h2.2l.8-3H13V9a1 1 0 0 1 1-1z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
        <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
        <path d="M7 10v7M11 10v7M11 13a3 3 0 0 1 6 0v4" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.4A8 8 0 1 1 20 12z" />
      <path d="M9.2 8.9c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.3l.9 2c.1.2 0 .5-.1.6l-.7.8c-.1.1-.1.3 0 .5.4.8 1 1.4 1.8 1.8.1.1.4.1.5 0l.8-.7c.2-.1.4-.2.6-.1l2 .9c.2.1.3.3.3.5v.6c0 .3 0 .5-.5.7-.6.2-1.3.2-1.9 0-2-.6-4.2-2.8-4.8-4.8-.2-.6-.2-1.3 0-1.9z" />
    </svg>
  );
}

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
          <h2 className="section-title">Contact Us</h2>
          <p className="section-copy">Reach out using any channel below.</p>

          <div className="contact-links" aria-label="Contact channels">
            {CONTACT_LINKS.map((link) => (
              <a key={link.label} className="contact-link" href={link.href} target="_blank" rel="noreferrer">
                <span className="contact-link__icon">
                  <ContactIcon type={link.type} />
                </span>
                <span>{link.label}</span>
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
              placeholder="We need to secure Kubernetes deployments and standardize CI/CD controls..."
            />
          </label>

          <button type="submit" className="cta-button cta-button--primary">
            Send Request
          </button>

          {submitted ? (
            <p className="contact-form__success">Request received. We will contact you shortly.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
