import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';

const FOOTER_LINKS = [
  { label: 'Platform', to: '/platform' },
  { label: 'Security', to: '/security' },
  { label: 'Automation', to: '/automation' },
  { label: 'Docs', to: '/docs' },
];

const BRAND_LOGO_SRC = '/Logo/LOGODOF.png';
const WHATSAPP_DISPLAY_NUMBER = '03228409304';
const WHATSAPP_CHAT_LINK =
  'https://wa.me/923228409304?text=Hello%20DevOps%20Fortress';
const GITHUB_PROFILE_LINK = 'https://github.com/DevOps-Fortress';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    Icon: FaFacebook,
    href: 'https://www.facebook.com/profile.php?id=61587737334414',
    hoverColor: '#1877F2',
  },
  {
    label: 'LinkedIn',
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/company/107876218/admin/dashboard/',
    hoverColor: '#0A66C2',
  },
  {
    label: 'Instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/riaz.naeem.71/',
    hoverColor: '#E1306C',
  },
  {
    label: 'GitHub',
    Icon: FaGithub,
    href: GITHUB_PROFILE_LINK,
    hoverColor: '#ffffff',
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* ── Brand ── */}
        <div className="site-footer__brand">
          <img
            src={BRAND_LOGO_SRC}
            alt="DevOps Fortress logo"
            className="fortress-brand__logo"
          />
          <div>
            <h3>DevOps Fortress</h3>
            <p>
              Azure DevOps service connection setup, CI/CD automation, and
              secure cloud delivery.
            </p>
          </div>
        </div>

        {/* ── Nav Links ── */}
        <nav className="site-footer__links" aria-label="Footer links">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/#contact">Contact</Link>
        </nav>

        {/* ── Meta ── */}
        <div className="site-footer__meta">
          <a
            className="site-footer__contact-link"
            href={`tel:${WHATSAPP_DISPLAY_NUMBER}`}
          >
            WhatsApp: {WHATSAPP_DISPLAY_NUMBER}
          </a>
          <p>support@devopsfortress.com</p>
          <p>ISO 27001 | PCI-DSS | SOC 2</p>
        </div>

        {/* ── Social Icons ── */}
        <div className="site-footer__social" aria-label="Social links">
          {SOCIAL_LINKS.map(({ label, Icon, href, hoverColor }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="social-icon-btn"
              style={{ '--hover-color': hoverColor }}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* ── Floating WhatsApp Button ── */}
      <a
        className="floating-whatsapp"
        href={WHATSAPP_CHAT_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with DevOps Fortress on WhatsApp"
      >
        <span className="floating-whatsapp__icon">
          <FaWhatsapp size={36} aria-hidden="true" />
        </span>
      </a>
    </footer>
  );
}
