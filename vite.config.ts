import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permet d'accéder depuis le réseau
    port: 2222, // Utilise un port fixe
    strictPort: true, // Ne change pas automatiquement le port si occupé
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/csseducteur.love/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/csseducteur.love/fullchain.pem'),
    },
  },
});
