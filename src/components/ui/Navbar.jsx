import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SERVICES from '../../data/services';

const MENU_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: '/platform' },
  { label: 'Security', to: '/security' },
  { label: 'Automation', to: '/automation' },
  { label: 'Docs', to: '/docs' },
];

const SERVICE_MENU_ITEMS = [
  { label: 'All Services', to: '/services' },
  ...SERVICES.map((service) => ({
    label: service.title,
    to: `/services/${service.id}`,
  })),
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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const servicesCloseTimerRef = useRef(null);
  const isHomeRoute = useMemo(
    () => location.pathname === '/',
    [location.pathname],
  );
  const isServicesRoute = useMemo(
    () =>
      location.pathname === '/services' ||
      location.pathname.startsWith('/services/'),
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
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (servicesCloseTimerRef.current) {
        window.clearTimeout(servicesCloseTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isServicesOpen) {
      return undefined;
    }

    const onPointerDown = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [isServicesOpen]);

  const openServicesDropdown = () => {
    if (servicesCloseTimerRef.current) {
      window.clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }

    setIsServicesOpen(true);
  };

  const closeServicesDropdown = () => {
    if (servicesCloseTimerRef.current) {
      window.clearTimeout(servicesCloseTimerRef.current);
    }

    servicesCloseTimerRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, 140);
  };

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
            <div
              ref={servicesDropdownRef}
              className={`fortress-dropdown${isServicesOpen ? ' fortress-dropdown--open' : ''}`}
              onMouseEnter={openServicesDropdown}
              onMouseLeave={closeServicesDropdown}
            >
              <button
                type="button"
                className={`fortress-link fortress-link--dropdown${
                  isServicesRoute ? ' fortress-link--active' : ''
                }`}
                onClick={() => setIsServicesOpen((open) => !open)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <RiArrowDownSLine
                  className={`fortress-dropdown__chevron${
                    isServicesOpen ? ' fortress-dropdown__chevron--open' : ''
                  }`}
                  size={18}
                  aria-hidden="true"
                />
              </button>

              <div className="fortress-dropdown__menu">
                {SERVICE_MENU_ITEMS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`fortress-dropdown__item${
                      location.pathname === item.to
                        ? ' fortress-dropdown__item--active'
                        : ''
                    }`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
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
                className="mobile-menu__dropdown"
              >
                <button
                  type="button"
                  className="mobile-menu__dropdown-toggle"
                  onClick={() => setIsMobileServicesOpen((open) => !open)}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <RiArrowDownSLine
                    size={20}
                    className={`mobile-menu__dropdown-icon${
                      isMobileServicesOpen
                        ? ' mobile-menu__dropdown-icon--open'
                        : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isMobileServicesOpen ? (
                    <motion.div
                      className="mobile-menu__dropdown-items"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      {SERVICE_MENU_ITEMS.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`mobile-menu__sublink${
                            location.pathname === item.to
                              ? ' mobile-menu__sublink--active'
                              : ''
                          }`}
                          onClick={() => {
                            setIsMobileServicesOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
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
