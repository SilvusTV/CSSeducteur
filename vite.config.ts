import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2222, // Port fixe
    strictPort: true, // Évite que Vite cherche un autre port si 2222 est occupé
    host: true, // Écoute sur toutes les interfaces
  }
})
