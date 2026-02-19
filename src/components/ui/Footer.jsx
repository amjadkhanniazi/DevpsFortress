import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Platform", to: "/platform" },
  { label: "Security", to: "/security" },
  { label: "Automation", to: "/automation" },
  { label: "Docs", to: "/docs" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="fortress-brand__glyph">DF</span>
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
          <p>support@devopsfortress.com</p>
          <p>ISO 27001 | PCI-DSS | SOC 2</p>
        </div>
      </div>
    </footer>
  );
}
