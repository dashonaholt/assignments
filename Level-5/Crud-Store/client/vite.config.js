import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/bounties': {
        target: 'http://localhost:9000',
        changeOrigin: true,
      },
    }
  },
  plugins: [react()],
})
