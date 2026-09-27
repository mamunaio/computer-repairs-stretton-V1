// Real content carried over from the source site, structured for the new homepage.
export const home = {
  heroKicker: 'Award-winning · Family-owned · Servicing Greater Brisbane',
  heroTitle: 'Expert computer repairs in Stretton, without the wait',
  heroLead:
    'Affordable, reliable, award-winning computer repairs and services. We fix any brand of Mac or Windows PC and make you love your computer again. Family-owned, not a franchise, servicing Brisbane, Logan, Ipswich, Moreton and Redland Bay.',

  stats: [
    { value: '800+', label: '5-star reviews' },
    { value: '10 yrs', label: 'Word of Mouth service awards' },
    { value: '$0', label: 'Call-out & travel fees' },
    { value: '1 hr', label: 'Most standard repairs' },
  ],

  services: [
    { label: 'Desktop Computer Repairs', href: '/desktop-computer-repairs-stretton/', icon: 'desktop', blurb: 'Diagnosis and repair for any desktop PC, hardware or software.' },
    { label: 'Laptop Repairs', href: '/laptop-repairs-stretton/', icon: 'laptop', blurb: 'Screens, keyboards, batteries, ports and boot problems sorted.' },
    { label: 'Mac Repairs', href: '/mac-repairs-stretton/', icon: 'apple', blurb: 'MacBook, iMac and Mac mini repairs and tune-ups.' },
    { label: 'Virus & Malware Removal', href: '/virus-removal-stretton/', icon: 'shield', blurb: 'Clean out viruses, spyware and pop-ups and lock things down.' },
    { label: 'Data Recovery', href: '/data-recovery-stretton/', icon: 'database', blurb: 'Recover lost files from failed drives, SSDs and memory cards.' },
    { label: 'Data Backup & Transfer', href: '/data-backup-transfer-stretton/', icon: 'copy', blurb: 'Move and safely back up your files to a new device.' },
    { label: 'Network Setup', href: '/network-setup-stretton/', icon: 'wifi', blurb: 'Wired and wireless networks that actually stay connected.' },
    { label: 'Computer Tune-up', href: '/computer-tune-up-stretton/', icon: 'gauge', blurb: 'Speed up a slow machine and clear out the clutter.' },
    { label: 'New Computer Build', href: '/new-computer-build-stretton/', icon: 'cpu', blurb: 'Custom-built PCs specced for exactly what you need.' },
  ],

  why: [
    'No call-out fees',
    'No travel costs',
    'Most affordable computer repair service anywhere in Stretton',
    'Completes standard repairs within an hour',
    'Expert information and advice throughout the repair process',
    'Trustworthy, friendly service backed by our reviews',
    'Microsoft Certified Professional (MCP) qualified',
    'Expertise in all computer brands, old and new',
  ],

  brands: [
    { label: 'Acer', href: '/acer-repairs-stretton/' },
    { label: 'Apple', href: '/apple-repairs-stretton/' },
    { label: 'Asus', href: '/asus-repairs-stretton/' },
    { label: 'Dell', href: '/dell-repairs-stretton/' },
    { label: 'HP', href: '/hp-repairs-stretton/' },
    { label: 'Lenovo', href: '/lenovo-repairs-stretton/' },
    { label: 'MSI', href: '/msi-repairs-stretton/' },
    { label: 'Samsung', href: '/samsung-repairs-stretton/' },
    { label: 'Sony', href: '/sony-repairs-stretton/' },
    { label: 'Toshiba', href: '/toshiba-repairs-stretton/' },
  ],

  // Local-signals section, verbatim from the source homepage.
  streetsHeading: 'Computer Repair Services and Repairs near Stretton',
  streetsIntro: "If you've Googled “Computer Repairs near me” and you live in Stretton, we are ready to service your computers! Reach out today!",
  streets: [
    'Aldea Place', 'Beechwood Close', 'Birchwood Place', 'Buckinghamia Place', 'Camphor Laurel Court',
    'Candlewood Court', 'Cassia Place', 'Cedar Place', 'Cleveland Place', 'Colvillea Close',
    'Compton Road', 'Coolidge Court', 'Crab Apple Court', 'Ebony Place', 'Eisenhower Street',
    'Elderbury Place', 'Elm Court', 'Frangipani Place', 'Frizzell Street', 'Gardenia Close',
    'Golden Rain Place', 'Gowan Road', 'Harrison Street', 'Hawthorn Circuit', 'Hibiscus Court',
    'Hoover Court', 'Illaweena Street', 'Jefferson Place', 'Juniper Circuit', 'Kameruka Street',
    'Kardella Street', 'Lacebark Street', 'Lancaster Circuit', 'Lexton Street', 'Lincoln Place',
    'Liquidambar Place', 'Magnolia Street', 'Mayfair Place', 'Mckinley Court', 'Mildura Street',
    'Mulberry Place', 'Oxford Place', 'Paddington Crescent', 'Peachtree Place', 'Penson Street',
    'Piccadilly Way', 'Pierce Court', 'Poinciana Crescent', 'Reagan Place', 'Regency Place',
    'Roosevelt Drive', 'Snowbell Close', 'Spruce Bark Court', 'Taft Court', 'Tamarind Place',
    'The Parkway', 'Trafalgar Close', 'Truman Court', 'Tulipwood Place', 'Village Street',
    'Washington Place', 'White Cedar Circuit', 'Willowleaf Close', 'Yorkshire Place',
  ],

  reviews: [
    { name: 'Trevor M.', text: 'Terrific service, very affordable, has fixed my problems every single time, have already recommended him to friends of mine. Robert helps me get the most out of my computer.' },
    { name: 'Diesel D.', text: 'Fantastic service. Fixed our PC issues easily and gave great explanations on how to prevent issues in the future. His hourly rate is the cheapest we’ve found. Would definitely recommend!' },
    { name: 'Ange D.', text: 'Robert is great. He explained the options I had and the costs and was explaining everything along the way. His price is the cheapest I have come across by far and he really knows what he is doing.' },
    { name: 'Lloyd J.', text: 'Robert has been so helpful and nothing was too big or too small to fix. As an “oldie” he recommended a new computer to fit my needs. Have used him for many years. Fantastic!' },
    { name: 'Sandra E.', text: 'Highly professional and very alert to my computer problems. Very highly recommended, such fantastic service.' },
  ],
} as const;
