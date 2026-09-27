// Build-time generator: turns the crawl workspace (../../crawl) into the
// site's data files. Re-run with `npm run generate` whenever the crawl changes.
import { load } from 'cheerio';
import {
  readFileSync, writeFileSync, readdirSync, mkdirSync,
  rmSync, cpSync, existsSync,
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { rewriteFragment, rewriteHref, rewriteAsset } from './rewrite.mjs';

const __dir = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dir, '..');              // site/
const CRAWL = join(__dir, '..', '..', 'crawl'); // crawl/

const DATA = join(SITE, 'src', 'data');
const PAGES_OUT = join(DATA, 'pages');
const STYLES = join(SITE, 'src', 'styles');
const PUBLIC = join(SITE, 'public');

for (const d of [DATA, PAGES_OUT, STYLES, PUBLIC]) mkdirSync(d, { recursive: true });

// 1. Copy assets into public/assets
const assetsSrc = join(CRAWL, 'assets');
const assetsDst = join(PUBLIC, 'assets');
if (existsSync(assetsDst)) rmSync(assetsDst, { recursive: true, force: true });
cpSync(assetsSrc, assetsDst, { recursive: true });
console.log('assets copied ->', assetsDst);

// 2. Copy chrome, css-links, global inline css
cpSync(join(CRAWL, 'out', 'chrome.json'), join(DATA, 'chrome.json'));
cpSync(join(CRAWL, 'css-links.json'), join(DATA, 'css-links.json'));
cpSync(join(CRAWL, 'out', 'global-inline.css'), join(STYLES, 'global-inline.css'));

const pageExtra = JSON.parse(readFileSync(join(CRAWL, 'out', 'page-extra-css.json'), 'utf8'));
const sliderInit = readFileSync(join(CRAWL, 'out', 'slider-init.js'), 'utf8');

// Remove leftover page-builder shortcodes that render as literal text
// (plugins are inactive on the source): WPBakery/Visual Composer vc_* and
// Contact Form 7. The tags are wrappers around real content, so stripping the
// tags keeps the inner text and just drops the literal [shortcode] noise.
function stripShortcodes(html) {
  return html
    .replace(/\[\/?vc_[a-z0-9_]*(?:\s[^\]]*)?\]/gi, '')
    .replace(/\[\/?contact-form-7(?:\s[^\]]*)?\]/gi, '');
}

// 3. Rewrite each page's content + emit page data
function rewriteContent(html) {
  const $ = load(`<div id="__c"></div>`, null, false);
  $('#__c').append(stripShortcodes(html));
  rewriteFragment($, $('#__c'));
  // drop paragraphs left empty after removing a shortcode (no text, no media)
  $('#__c p').each((i, el) => {
    const $p = $(el);
    const hasMedia = $p.find('img,iframe,video,audio,br,a,input,button').length > 0;
    if (!hasMedia && $p.text().replace(/ /g, '').trim() === '') $p.remove();
  });
  return $('#__c').html() || '';
}

// Clean article body for the redesigned template: main content only
// (no legacy sidebar, no duplicate H1, no legacy inline colours).
function extractMain(html) {
  const $ = load(`<div id="__m"></div>`, null, false);
  $('#__m').append(stripShortcodes(html));
  const $article = $('#__m article').first();
  const rootSel = $article.length ? '#__m article' : '#__m';
  $(rootSel).find('header.section-title, #comments, .sidebar, #back-to-top, .responsive-nav, .arrows').remove();
  $(rootSel).find('[style]').each((i, el) => {
    let s = ($(el).attr('style') || '').replace(/(?:^|;)\s*(color|background-color|background)\s*:[^;]+/gi, '');
    s = s.replace(/^;+/, '').trim();
    if (s === '') $(el).removeAttr('style'); else $(el).attr('style', s);
  });
  rewriteFragment($, $(rootSel));
  $(rootSel + ' p').each((i, el) => {
    const $p = $(el);
    const hasMedia = $p.find('img,iframe,video,audio,br,a,input,button').length > 0;
    if (!hasMedia && $p.text().replace(/ /g, '').trim() === '') $p.remove();
  });
  return $(rootSel).html() || '';
}

const crawlPages = readdirSync(join(CRAWL, 'pages')).filter((f) => f.endsWith('.json'));
const routes = [];
for (const f of crawlPages) {
  const p = JSON.parse(readFileSync(join(CRAWL, 'pages', f), 'utf8'));
  const slug = f.replace(/\.json$/, '');
  const out = {
    path: new URL(p.url).pathname,
    slug,
    head: {
      title: p.title,
      metaDescription: p.metaDescription,
      canonical: p.canonical,
      robots: p.robots,
      og: p.og,
      twitter: p.twitter,
      jsonld: p.jsonld,
    },
    contentHtml: rewriteContent(p.contentHtml),
    mainHtml: extractMain(p.contentHtml),
    // service pages use the sidebar layout on the source; redesign those first
    template: p.contentHtml.includes('pull-right sidebar') ? 'service' : 'faithful',
    extraCss: pageExtra[slug] || '',
    sliderInit: p.contentHtml.includes('layers-widget-slide-4') ? sliderInit : '',
  };
  writeFileSync(join(PAGES_OUT, `${slug}.json`), JSON.stringify(out));
  routes.push(out.path);
}
console.log('pages written:', routes.length);

// 4. robots.txt + sitemap.xml (production domain)
const DOMAIN = 'https://www.computerrepairsstretton.com.au';
writeFileSync(join(PUBLIC, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`);

const urls = routes
  .map((r) => `  <url><loc>${DOMAIN}${r}</loc></url>`)
  .sort()
  .join('\n');
writeFileSync(join(PUBLIC, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log('robots.txt + sitemap.xml written');
