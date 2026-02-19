import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "three-stack": ["three", "@react-three/fiber"],
          "motion-gsap": ["framer-motion", "gsap"],
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },
});
