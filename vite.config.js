import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});
