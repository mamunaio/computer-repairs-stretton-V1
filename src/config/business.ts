// SINGLE SOURCE OF TRUTH for business details (NAP, links, brand).
// Faithfully carried over from computerrepairsstretton.com.au.
// Change a value here once and it flows into the header, footer, schema, and meta.
//
// NOTE: the source site used two different phone numbers, //   nav menu:            0477 319 160  (tel:+61477319160)
//   floating call button: 0410 659 349 (tel:+61410659349)
// Both are preserved as-is below. Unify them here when you're ready.

export const business = {
  name: 'Computer Repairs Stretton',
  legalName: 'Computer Repairs and Services Stretton',
  tagline: 'Affordable and Expert PC Repair Service in Brisbane',

  // Primary phone (header nav)
  phoneDisplay: '0477 319 160',
  phoneTel: '+61477319160',

  // Floating call button phone (as on source)
  callButtonPhoneDisplay: '0410 659 349',
  callButtonPhoneTel: '+61410659349',

  email: 'hello@computerrepairsstretton.com.au',

  address: {
    street: '578 Gowan Rd',
    locality: 'Stretton',
    region: 'QLD',
    postalCode: '4116',
    country: 'Australia',
  },

  openingHours: 'Mon to Sun 09:00 to 17:00',

  // External quote form used across the site
  quoteUrl: 'https://quote.zoorepairs.com.au',

  // Canonical production domain. Keep this pointed at the real domain so that
  // canonical tags, og:url and JSON-LD stay correct through the DNS cutover.
  domain: 'https://www.computerrepairsstretton.com.au',
} as const;

export type Business = typeof business;
