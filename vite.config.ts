import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permet d'accéder depuis le proxy
    port: 2222, // Forcer le port
    strictPort: true, // Empêcher le changement automatique de port
    https: false, // Pas d'HTTPS direct (géré par Apache)
    hmr: {
      protocol: 'wss', // Utiliser WebSocket sécurisé
      host: 'csseducteur.love', // Nom de domaine du site
      port: 443, // Utiliser le port 443 pour les WebSockets via le reverse proxy
    },
    build: {
      sourcemap: false, // Assure-toi que les sourcemaps de dev sont désactivés
      minify: 'esbuild', // Minification adaptée pour React
      rollupOptions: {
        output: {
          // Supprime les annotations de dev
          intro: `process.env.NODE_ENV = "production";`,
        },
      },
    },
  },
  ssr: {
    noExternal: ['react', 'react-dom', 'react-router-dom'], // Exemple : force le bundling de certaines dépendances
  },
});
