import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist/iotnetsim',
    rollupOptions: {
      external: ['net'], // Exclude incompatible modules
    },
  },
});
