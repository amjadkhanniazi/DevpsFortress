import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { fortressContent } from "../../content/devopsFortressContent";

const CinematicHeroScene = lazy(() => import("./CinematicHeroScene"));

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function HeroSection() {
  const sectionRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollProgressRef = useRef(0);
  const [liteMode, setLiteMode] = useState(false);
  const [projectionReady, setProjectionReady] = useState(false);
  const [headlineReady, setHeadlineReady] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;

      if (!sectionRef.current) {
        return;
      }

      const sectionTop = sectionRef.current.offsetTop;
      const travelDistance = sectionRef.current.offsetHeight - window.innerHeight;
      const raw = (window.scrollY - sectionTop) / Math.max(travelDistance, 1);
      scrollProgressRef.current = clamp(raw, 0, 1);
    };

    const onScrollOrResize = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(updateProgress);
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    const evaluateDevice = () => {
      const mobileWidth = window.matchMedia("(max-width: 900px)").matches;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lowCpu = (navigator.hardwareConcurrency || 8) <= 4;
      setLiteMode(mobileWidth || reducedMotion || lowCpu);
    };

    evaluateDevice();
    window.addEventListener("resize", evaluateDevice);
    return () => window.removeEventListener("resize", evaluateDevice);
  }, []);

  const onPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    pointerRef.current.x = clamp(x, -1, 1);
    pointerRef.current.y = clamp(y, -1, 1);
  };

  return (
    <section ref={sectionRef} className="hero-shell">
      <div
        className="hero-sticky"
        onPointerMove={onPointerMove}
        onPointerLeave={() => {
          pointerRef.current.x = 0;
          pointerRef.current.y = 0;
        }}
      >
        <div className="hero-canvas">
          <Suspense fallback={<div className="hero-canvas-fallback" />}>
            <CinematicHeroScene
              pointerRef={pointerRef}
              scrollProgressRef={scrollProgressRef}
              liteMode={liteMode}
              onProjectionReady={() => setProjectionReady(true)}
              onHeadlineReady={() => setHeadlineReady(true)}
            />
          </Suspense>
        </div>

        <div className="hero-vignette" />

        {/* Stage 4 + 5 UI reveal layer */}
        <div className="hero-overlay">
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            animate={
              projectionReady
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: 14, filter: "blur(10px)" }
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {fortressContent.hero.tagline}
          </motion.p>

          <motion.h1
            className={`hero-heading${headlineReady ? " hero-heading--pulse" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={headlineReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {fortressContent.hero.title}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={headlineReady ? { opacity: 0.95, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
          >
            {fortressContent.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={headlineReady ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 14, stiffness: 150, delay: 0.16 }}
          >
            <motion.button
              className="cta-button cta-button--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Launch Fortress
            </motion.button>

            <motion.button
              className="cta-button cta-button--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Blueprint
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
