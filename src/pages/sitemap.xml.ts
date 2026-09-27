import type { APIRoute } from 'astro';

// Sitemap generated from the actual page data so it can never drift out of
// sync. Every file in src/data/pages/*.json is a live URL (the four static
// pages carry their own JSON entry too), so one glob covers the whole site.
const SITE = 'https://www.computerrepairsstretton.com.au';

export const prerender = true;

export const GET: APIRoute = async () => {
  const mods = import.meta.glob('../data/pages/*.json', { eager: true });
  const paths = new Set<string>();
  for (const m of Object.values(mods)) {
    const page: any = (m as any).default ?? m;
    let p = String(page.path || '');
    if (!p.startsWith('/')) p = '/' + p;
    if (!p.endsWith('/')) p += '/';
    if (p === '/cctv-security-camera-stretton/') continue;
    paths.add(p);
  }
  paths.add('/our-services/cctv-service-stretton/');
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [...paths]
    .sort()
    .map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
