import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
