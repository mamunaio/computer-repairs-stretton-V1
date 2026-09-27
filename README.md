# Computer Repairs Stretton

Marketing/lead-gen website for Computer Repairs Stretton, built with [Astro](https://astro.build).
Static output — deploys to Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # build static site to dist/
npm run preview  # preview the built site
```

## Deploy (Cloudflare Pages)

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

No adapter is required — the site is fully static.

## Structure

- `src/config/business.ts` — single source of truth for business details (name, phone, address, hours). Change once, flows everywhere.
- `src/layouts/Site.astro` — main layout (redesigned pages).
- `src/components/site/` — Header, Footer, ServiceSidebar.
- `src/pages/` — pages (`index.astro`, `about-us/`, `our-services/`, `[...slug].astro` for service pages).
- `src/data/` — page content and data.
- `src/styles/theme.css` — design system (tokens, palette, components).

## Palette

Design palette is token-driven in `theme.css`. Preview alternates in dev with `?p=a|b|c`.
