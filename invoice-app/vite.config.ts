import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows Vite to listen on all network interfaces
    port: 5173, // Ensure this matches your Docker config
    strictPort: true, // Prevents Vite from trying to use a different port if 5173 is in use
  },
});
