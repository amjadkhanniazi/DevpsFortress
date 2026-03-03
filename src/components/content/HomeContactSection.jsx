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
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.01 2C6.13 2 1.35 6.78 1.35 12.66c0 1.87.49 3.7 1.42 5.3L1 23l5.17-1.35a10.61 10.61 0 0 0 5.84 1.75c5.88 0 10.66-4.78 10.66-10.66A10.66 10.66 0 0 0 12.01 2Zm0 19.59h-.01a8.84 8.84 0 0 1-4.5-1.23l-.32-.18-3.07.8.82-2.99-.2-.31a8.81 8.81 0 0 1-1.36-4.7c0-4.85 3.93-8.78 8.77-8.78 2.35 0 4.55.91 6.2 2.56a8.72 8.72 0 0 1 2.57 6.19c0 4.84-3.94 8.77-8.9 8.64Zm4.84-6.55c-.26-.13-1.54-.75-1.78-.84-.24-.09-.41-.13-.58.13-.17.25-.66.84-.81 1.01-.15.17-.3.19-.56.07-.26-.13-1.08-.4-2.06-1.29a7.72 7.72 0 0 1-1.43-1.77c-.15-.24-.01-.38.11-.51.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.05-.32-.02-.45-.07-.13-.58-1.42-.8-1.95-.22-.52-.44-.44-.6-.45h-.51c-.17 0-.44.06-.67.31-.23.26-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.12.17 1.79 2.73 4.33 3.82.6.26 1.07.42 1.44.54.61.19 1.17.16 1.6.1.49-.07 1.54-.62 1.75-1.21.21-.58.21-1.09.15-1.2-.06-.11-.24-.17-.5-.3Z" />
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
