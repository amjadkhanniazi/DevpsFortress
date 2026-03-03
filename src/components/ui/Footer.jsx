import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Platform", to: "/platform" },
  { label: "Security", to: "/security" },
  { label: "Automation", to: "/automation" },
  { label: "Docs", to: "/docs" },
];

const BRAND_LOGO_SRC = "/Logo/LOGODOF.png";
const WHATSAPP_DISPLAY_NUMBER = "03228409304";
const WHATSAPP_CHAT_LINK = "https://wa.me/923228409304?text=Hello%20DevOps%20Fortress";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587737334414",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/107876218/admin/dashboard/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/riaz.naeem.71/",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.4A8 8 0 1 1 20 12z" />
      <path d="M9.2 8.9c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.3l.9 2c.1.2 0 .5-.1.6l-.7.8c-.1.1-.1.3 0 .5.4.8 1 1.4 1.8 1.8.1.1.4.1.5 0l.8-.7c.2-.1.4-.2.6-.1l2 .9c.2.1.3.3.3.5v.6c0 .3 0 .5-.5.7-.6.2-1.3.2-1.9 0-2-.6-4.2-2.8-4.8-4.8-.2-.6-.2-1.3 0-1.9z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={BRAND_LOGO_SRC} alt="DevOps Fortress logo" className="fortress-brand__logo" />
          <div>
            <h3>DevOps Fortress</h3>
            <p>Secure DevOps and cloud security delivery for modern engineering teams.</p>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Footer links">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/#contact">Contact</Link>
        </nav>

        <div className="site-footer__meta">
          <a className="site-footer__contact-link" href={`tel:${WHATSAPP_DISPLAY_NUMBER}`}>
            WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
          </a>
          <p>support@devopsfortress.com</p>
          <p>ISO 27001 | PCI-DSS | SOC 2</p>
        </div>

        <div className="site-footer__social" aria-label="Social links">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_CHAT_LINK} target="_blank" rel="noreferrer">
            WhatsApp Chat
          </a>
        </div>
      </div>

      <a
        className="floating-whatsapp"
        href={WHATSAPP_CHAT_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with DevOps Fortress on WhatsApp"
      >
        <span className="floating-whatsapp__icon">
          <WhatsAppIcon />
        </span>
      </a>
    </footer>
  );
}
