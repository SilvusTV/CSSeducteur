import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import fs from 'fs';

// @ts-ignore
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 2222,
    strictPort: true,
    https: mode === 'development' ? {
      key: fs.readFileSync('/etc/letsencrypt/live/csseducteur.love/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/csseducteur.love/fullchain.pem'),
    } : false,
  },
}));
