# Novacode Tech — website

Company website for **Novacode Tech s.r.o.** — React + Vite + TypeScript with an
interactive WebGL "ASCII fluid" background. Bilingual (EN / SK). **Pre-rendered to
static HTML per route** (via `vite-react-ssg`) and deployed to GitHub Pages, so every
page has real content + its own SEO/meta in the initial HTML.

## Develop

```bash
npm install
npm run dev        # dev server with HMR + SSR (http://localhost:16782/novacode-tech/)
```

## Build

```bash
npm run build      # tsc + prerender each route to dist/*.html + sitemap/robots/404
npm run preview    # serve the production build (http://localhost:16783/novacode-tech/)
```

Each route is rendered to its own HTML file (`dist/index.html`, `dist/work.html`, …)
with a unique `<title>`, description, canonical URL, OpenGraph + Twitter card, and a
shared JSON-LD Organization block. `sitemap.xml`, `robots.txt`, a `404.html` SPA
fallback, and `favicon.svg` / `og.svg` are emitted too.

Routing uses **BrowserRouter** with `basename = import.meta.env.BASE_URL`. GitHub Pages
resolves clean URLs (`/work` → `work.html`); the `404.html` fallback covers anything
else.

## ⚙️ Configure before deploy

Built for a GitHub **project page** at `jurazubach.github.io/novacode-tech/`
(`base` in `vite.config.ts` and `siteUrl` in `site.config.json` are already set to this).

- **Custom domain later?** If you attach e.g. `novacode.tech`, set `base: "/"` in
  `vite.config.ts`, update `siteUrl` in `site.config.json`, change the favicon `href`
  in `index.html` to `/favicon.svg`, and add a `public/CNAME` file.
- (Optional) Replace `public/og.svg` with a 1200×630 **PNG** for the widest social
  preview support.

## Deploy to GitHub Pages

1. **GitHub Actions (recommended):** push to `main`; `.github/workflows/deploy.yml`
   builds and publishes. Enable once under **Settings → Pages → Source: GitHub Actions**.
2. **Manual:** `npm run deploy` (pushes `dist/` to the `gh-pages` branch).

## Structure

```
index.html              Vite HTML shell (favicon, theme-color, fonts)
site.config.json        siteUrl + basePath (single source for SEO URLs)
src/
  main.tsx              ViteReactSSG entry (routes + basename)
  routes.tsx            route table (Layout + pages)
  Layout.tsx            provider + chrome + <Outlet/> + JSON-LD
  i18n/                 dict.ts (EN/SK, type-checked) + I18nContext (SSR-safe)
  seo/                  Seo.tsx (per-route Head), OrgJsonLd.tsx
  components/           Header, Footer, FluidBackground, Reveal, CtaBanner
  pages/                Home, Services, Expertise, Work, Contact
  lib/fluid.ts          WebGL background (pauses when hidden / reduced-motion)
  styles/index.css
scripts/postbuild.mjs   sitemap.xml + robots.txt + 404.html
```
