import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at the root of the custom domain www.novacode-tech.sk, so `base` is
// "/". (As a bare GitHub project page this would need to be "/novacode-tech/"
// to match the user.github.io/novacode-tech/ subpath.)
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: { port: 16782, strictPort: true },
  preview: { port: 16783, strictPort: true },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
