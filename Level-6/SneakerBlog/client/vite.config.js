import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/sneakers": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
      "/api/comment": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
      "/auth": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
