// Shared rewriting: stretton URLs -> local relative paths / /assets
const SITE_RE=/^https?:\/\/(www\.)?computerrepairsstretton\.com\.au/i;
export function rewriteHref(h){
  if(!h) return h;
  if(/^(tel:|mailto:|#|javascript:)/i.test(h)) return h;
  // sitemap -> local /sitemap.xml
  if(/sitemap_index\.xml/i.test(h)) return '/sitemap.xml';
  if(SITE_RE.test(h)){
    let path=h.replace(SITE_RE,'');
    if(path==='') path='/';
    // assets stay as asset paths
    if(/^\/wp-content\/|^\/wp-includes\//.test(path)) return '/assets'+path;
    return path;
  }
  if(/^\/wp-content\/|^\/wp-includes\//.test(h)) return '/assets'+h;
  return h; // external absolute or already-relative
}
export function rewriteAsset(u){
  if(!u) return u;
  if(/^data:/i.test(u)) return u;
  if(SITE_RE.test(u)){ const path=u.replace(SITE_RE,''); return '/assets'+path; }
  if(/^\/wp-content\/|^\/wp-includes\//.test(u)) return '/assets'+u;
  return u;
}
export function rewriteSrcset(ss){
  if(!ss) return ss;
  return ss.split(',').map(part=>{
    const seg=part.trim().split(/\s+/);
    seg[0]=rewriteAsset(seg[0]);
    return seg.join(' ');
  }).join(', ');
}
export function rewriteStyleUrls(css){
  if(!css) return css;
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g,(m,q,ref)=>{
    if(/^data:/i.test(ref)) return m;
    return `url(${rewriteAsset(ref)})`;
  });
}
// apply to a cheerio-loaded fragment
export function rewriteFragment($, root){
  root.find('a[href]').each((i,el)=>{ $(el).attr('href', rewriteHref($(el).attr('href'))); });
  root.find('img[src]').each((i,el)=>{ $(el).attr('src', rewriteAsset($(el).attr('src'))); });
  root.find('img[data-src]').each((i,el)=>{ $(el).attr('data-src', rewriteAsset($(el).attr('data-src'))); });
  root.find('[srcset]').each((i,el)=>{ $(el).attr('srcset', rewriteSrcset($(el).attr('srcset'))); });
  root.find('source[src]').each((i,el)=>{ $(el).attr('src', rewriteAsset($(el).attr('src'))); });
  root.find('[style*="url("]').each((i,el)=>{ $(el).attr('style', rewriteStyleUrls($(el).attr('style'))); });
  root.find('[data-settings]').each((i,el)=>{ let d=$(el).attr('data-settings'); if(d&&d.includes('computerrepairsstretton')){ $(el).attr('data-settings', d.replace(/https?:\?\/\?\/(www\.)?computerrepairsstretton\.com\.au/gi,'')); } });
  return root;
}
