import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permet d'accéder depuis le proxy
    port: 2222, // Forcer le port
    strictPort: true,
    https: false, // Désactiver HTTPS en dev
  }
})
