// Content API Client for Stretton CCTV Landing Page
// Build-time static fetch with runtime schema validation and fallback

export interface StrettonSiteContent {
  suburb: string;
  slug: string;
}

export interface StrettonHeroContent {
  heading: string;
  description: string;
}

export interface StrettonSeoContent {
  title: string;
  description: string;
}

export interface StrettonContent {
  site: StrettonSiteContent;
  hero: StrettonHeroContent;
  seo: StrettonSeoContent;
}

export interface ApiResponse {
  status: string;
  slug: string;
  content: StrettonContent;
}

export const FALLBACK_STRETTON_CONTENT: StrettonContent = {
  site: {
    suburb: 'Stretton',
    slug: 'stretton',
  },
  hero: {
    heading: 'CCTV & Security Camera Installation in Stretton',
    description:
      'Professionally installed camera systems for local homes and businesses, with tidy cabling, clear night footage, mobile viewing and practical after-installation support.',
  },
  seo: {
    title: 'CCTV & Security Camera Installation in Stretton | CCTV Stretton',
    description:
      'Professionally installed CCTV & security camera systems for local homes and businesses in Stretton and surrounding Brisbane South suburbs. Licensed QLD installers, tidy cabling, clear night vision, mobile viewing.',
  },
};

function isValidStrettonContent(data: any): data is StrettonContent {
  if (!data || typeof data !== 'object') return false;
  if (!data.site || typeof data.site !== 'object') return false;
  if (typeof data.site.suburb !== 'string' || !data.site.suburb.trim()) return false;
  if (typeof data.site.slug !== 'string' || !data.site.slug.trim()) return false;

  if (!data.hero || typeof data.hero !== 'object') return false;
  if (typeof data.hero.heading !== 'string' || !data.hero.heading.trim()) return false;
  if (typeof data.hero.description !== 'string' || !data.hero.description.trim()) return false;

  if (!data.seo || typeof data.seo !== 'object') return false;
  if (typeof data.seo.title !== 'string' || !data.seo.title.trim()) return false;
  if (typeof data.seo.description !== 'string' || !data.seo.description.trim()) return false;

  return true;
}

export async function getStrettonContent(slug = 'stretton'): Promise<StrettonContent> {
  const rawApiUrl =
    (typeof process !== 'undefined' && process.env?.CONTENT_API_URL) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.CONTENT_API_URL) ||
    'http://127.0.0.1:8787';

  const baseUrl = rawApiUrl.replace(/\/+$/, '');
  const targetUrl = `${baseUrl}/api/content/${slug}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn(`[content-client] API returned HTTP ${response.status} for ${targetUrl}. Using fallback content.`);
      return FALLBACK_STRETTON_CONTENT;
    }

    const payload = (await response.json()) as ApiResponse;

    if (payload.status === 'success' && isValidStrettonContent(payload.content)) {
      return payload.content;
    }

    console.warn(`[content-client] Invalid API response structure from ${targetUrl}. Using fallback content.`);
    return FALLBACK_STRETTON_CONTENT;
  } catch (error: any) {
    console.warn(`[content-client] Failed to fetch content from ${targetUrl} (${error?.message || error}). Using fallback content.`);
    return FALLBACK_STRETTON_CONTENT;
  }
}

// Named alias to support both getStrettonContent and fetchContent
export const fetchContent = getStrettonContent;
