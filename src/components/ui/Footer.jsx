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
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.01 2C6.13 2 1.35 6.78 1.35 12.66c0 1.87.49 3.7 1.42 5.3L1 23l5.17-1.35a10.61 10.61 0 0 0 5.84 1.75c5.88 0 10.66-4.78 10.66-10.66A10.66 10.66 0 0 0 12.01 2Zm0 19.59h-.01a8.84 8.84 0 0 1-4.5-1.23l-.32-.18-3.07.8.82-2.99-.2-.31a8.81 8.81 0 0 1-1.36-4.7c0-4.85 3.93-8.78 8.77-8.78 2.35 0 4.55.91 6.2 2.56a8.72 8.72 0 0 1 2.57 6.19c0 4.84-3.94 8.77-8.9 8.64Zm4.84-6.55c-.26-.13-1.54-.75-1.78-.84-.24-.09-.41-.13-.58.13-.17.25-.66.84-.81 1.01-.15.17-.3.19-.56.07-.26-.13-1.08-.4-2.06-1.29a7.72 7.72 0 0 1-1.43-1.77c-.15-.24-.01-.38.11-.51.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.05-.32-.02-.45-.07-.13-.58-1.42-.8-1.95-.22-.52-.44-.44-.6-.45h-.51c-.17 0-.44.06-.67.31-.23.26-.88.86-.88 2.09 0 1.23.9 2.42 1.03 2.59.12.17 1.79 2.73 4.33 3.82.6.26 1.07.42 1.44.54.61.19 1.17.16 1.6.1.49-.07 1.54-.62 1.75-1.21.21-.58.21-1.09.15-1.2-.06-.11-.24-.17-.5-.3Z" />
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
