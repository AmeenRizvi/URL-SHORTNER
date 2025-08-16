import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@tanstack/react-query']  // e.g., 'firebase' or 'axios'
  },
  plugins: [react(),tailwindcss()],
})
