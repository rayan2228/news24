import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/v2": "http://localhost:8000"
    }
  },
  plugins: [react()],
})
