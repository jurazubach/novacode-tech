import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed as a GitHub *project page*: user.github.io/novacode-tech/.
// `base` must match that subpath so absolute asset URLs and router basename
// line up. If you later attach a custom domain, change base to "/" and update
// siteUrl in site.config.json.
export default defineConfig({
  base: "/novacode-tech/",
  plugins: [react()],
  server: { port: 16782, strictPort: true },
  preview: { port: 16783, strictPort: true },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
