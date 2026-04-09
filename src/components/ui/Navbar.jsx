import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const MENU_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'Security', to: '/security' },
  { label: 'Automation', to: '/automation' },
  { label: 'Services', to: '/services' },
  { label: 'Docs', to: '/docs' },
];

const BRAND_LOGO_SRC = '/Logo/LOGODOF.png';

const itemVariants = {
  hidden: { opacity: 0, x: 22 },
  show: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomeRoute = useMemo(
    () => location.pathname === '/',
    [location.pathname],
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fortress-navbar"
        animate={{
          height: isScrolled ? 64 : 84,
          backgroundColor: isScrolled
            ? 'rgba(15,16,18,0.82)'
            : 'rgba(15,16,18,0.58)',
          borderColor: isScrolled
            ? 'rgba(0,240,255,0.42)'
            : 'rgba(255,255,255,0.08)',
          boxShadow: isScrolled
            ? '0 0 32px rgba(0,240,255,0.2)'
            : '0 0 0 rgba(0,240,255,0)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="fortress-navbar__inner">
          <Link to="/" className="fortress-brand">
            <img
              src={BRAND_LOGO_SRC}
              alt="DevOps Fortress logo"
              className="fortress-brand__logo"
            />
            <span>DevOps Fortress</span>
          </Link>

          <div className="fortress-links fortress-links--desktop">
            {MENU_ITEMS.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `fortress-link${isActive ? ' fortress-link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {isHomeRoute ? (
              <a href="#contact" className="nav-cta">
                Get Access
              </a>
            ) : (
              <Link to="/#contact" className="nav-cta">
                Get Access
              </Link>
            )}
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <motion.span
              className="hamburger-line"
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="hamburger-line"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="hamburger-line"
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.aside
            className="mobile-menu"
            initial={{ x: '100%', rotateY: 24, opacity: 0 }}
            animate={{ x: '0%', rotateY: 0, opacity: 1 }}
            exit={{ x: '100%', rotateY: 16, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              className="mobile-menu__items"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {MENU_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <NavLink
                    to={item.to}
                    className="mobile-menu__link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                {isHomeRoute ? (
                  <a
                    href="#contact"
                    className="mobile-menu__cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Access
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="mobile-menu__cta"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Access
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
