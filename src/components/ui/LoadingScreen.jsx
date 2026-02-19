import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TOTAL_DURATION_MS = 1500;

const SHIELD_POLYGON = [
  [-0.44, -0.48],
  [0.44, -0.48],
  [0.34, 0.14],
  [0.0, 0.56],
  [-0.34, 0.14],
];

const pointInPolygon = (point, polygon) => {
  let inside = false;
  const [x, y] = point;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) {
      inside = !inside;
    }
  }

  return inside;
};

const randomShieldPoint = () => {
  while (true) {
    const x = Math.random() * 1.1 - 0.55;
    const y = Math.random() * 1.15 - 0.55;
    if (pointInPolygon([x, y], SHIELD_POLYGON)) {
      return [x, y];
    }
  }
};

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function LoadingScreen({ onComplete }) {
  const canvasRef = useRef();
  const particlesRef = useRef([]);
  const frameRef = useRef(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const buildParticles = (width, height) => {
      const count = 320;
      const centerX = width * 0.5;
      const centerY = height * 0.43;
      const scale = Math.min(width, height) * 0.26;

      particlesRef.current = Array.from({ length: count }, (_, index) => {
        const [shieldX, shieldY] = randomShieldPoint();
        const angle = (index / count) * Math.PI * 2;
        const startRadius = Math.max(width, height) * (0.36 + Math.random() * 0.28);

        return {
          startX: centerX + Math.cos(angle) * startRadius,
          startY: centerY + Math.sin(angle) * startRadius,
          targetX: centerX + shieldX * scale,
          targetY: centerY + shieldY * scale,
          size: 1.1 + Math.random() * 1.8,
          wobble: Math.random() * 100,
        };
      });
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles(window.innerWidth, window.innerHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const start = performance.now();
    const render = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / TOTAL_DURATION_MS, 1);
      const eased = easeOutCubic(progress);

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = "#111111";
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      context.save();
      context.globalCompositeOperation = "lighter";
      particlesRef.current.forEach((particle, index) => {
        const drift = Math.sin(now * 0.0015 + particle.wobble + index * 0.03) * (1 - eased) * 16;
        const x = particle.startX + (particle.targetX - particle.startX) * eased + drift;
        const y = particle.startY + (particle.targetY - particle.startY) * eased;
        const alpha = 0.16 + eased * 0.78;

        context.fillStyle = `rgba(216,186,141,${alpha})`;
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      context.restore();

      context.fillStyle = `rgba(124,232,255,${0.15 + eased * 0.55})`;
      context.textAlign = "center";
      context.font = "600 18px 'Manrope', sans-serif";
      context.fillText("DEVOPS FORTRESS", window.innerWidth * 0.5, window.innerHeight * 0.72);

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsExiting(true), 1300);
    const completeTimer = window.setTimeout(() => onComplete?.(), 1700);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <canvas ref={canvasRef} className="loading-screen__canvas" />
    </motion.div>
  );
}
