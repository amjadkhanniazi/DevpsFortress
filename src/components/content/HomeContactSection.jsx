import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

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
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Start Your DevSecOps Engagement</h2>
          <p className="section-copy">
            Share your stack, security goals, and delivery timeline. We will respond with a focused
            implementation path.
          </p>
          <div className="contact-badges">
            <span>Cloud Migration</span>
            <span>CI/CD Hardening</span>
            <span>VAPT & Compliance</span>
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
