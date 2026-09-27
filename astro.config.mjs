import { defineConfig } from 'astro/config';

// Faithful clone of computerrepairsstretton.com.au.
// Static output — deploys directly to Cloudflare Pages (no adapter needed).
export default defineConfig({
  site: 'https://www.computerrepairsstretton.com.au',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
