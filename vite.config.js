import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['holiest-michal-caducean.ngrok-free.dev'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-stack': ['three', '@react-three/fiber'],
          'motion-gsap': ['framer-motion', 'gsap'],
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },
});
