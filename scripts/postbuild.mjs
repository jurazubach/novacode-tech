// Post-build: emit sitemap.xml + robots.txt (from site.config.json) and a
// 404.html SPA fallback so deep links survive a hard refresh on GitHub Pages.
import { readFileSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const { siteUrl } = JSON.parse(readFileSync(resolve(root, "site.config.json"), "utf8"));
const base = siteUrl.replace(/\/$/, "");

const ROUTES = ["", "/expertise", "/work", "/contact"];

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n` +
  ROUTES.map((r) => `  <url><loc>${base}${r}</loc><changefreq>monthly</changefreq></url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(resolve(dist, "sitemap.xml"), sitemap);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;
writeFileSync(resolve(dist, "robots.txt"), robots);

// SPA fallback for any non-prerendered path.
const index = resolve(dist, "index.html");
if (existsSync(index)) copyFileSync(index, resolve(dist, "404.html"));

console.log(`postbuild: wrote sitemap.xml (${ROUTES.length} urls), robots.txt, 404.html`);
