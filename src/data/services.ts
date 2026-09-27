// Full service catalogue (carried over from the source), grouped for the
// Our Services overview page. Every href points at an existing page.
export const serviceGroups = [
  {
    title: 'Repairs & upgrades',
    items: [
      { label: 'Desktop Computer Repairs', href: '/desktop-computer-repairs-stretton/' },
      { label: 'Laptop Repairs', href: '/laptop-repairs-stretton/' },
      { label: 'Mac Repairs', href: '/mac-repairs-stretton/' },
      { label: 'Desktop | Laptop | Mac Upgrades', href: '/desktop-laptop-mac-upgrades-stretton/' },
      { label: 'Hardware Repair', href: '/hardware-repair-stretton/' },
      { label: 'Hardware Installs', href: '/hardware-installs-stretton/' },
      { label: 'New Computer Build', href: '/new-computer-build-stretton/' },
    ],
  },
  {
    title: 'Troubleshooting & security',
    items: [
      { label: 'Virus Removal', href: '/virus-removal-stretton/' },
      { label: 'Virus & Spyware Removal', href: '/virus-spyware-removal-stretton/' },
      { label: 'Computer & Network Security', href: '/computer-network-security-stretton/' },
      { label: 'General Troubleshooting', href: '/general-troubleshooting-stretton/' },
      { label: 'Computer Tune-up', href: '/computer-tune-up-stretton/' },
      { label: 'Operating System Install & Repair', href: '/operating-system-install-repair-stretton/' },
    ],
  },
  {
    title: 'Data & setup',
    items: [
      { label: 'Data Recovery', href: '/data-recovery-stretton/' },
      { label: 'Data Backup & Transfer', href: '/data-backup-transfer-stretton/' },
      { label: 'Computer Setup', href: '/computer-setup-stretton/' },
      { label: 'Setup New Equipment', href: '/setup-new-equipment-stretton/' },
      { label: 'Mobile Device Setup', href: '/mobile-device-setup-stretton/' },
      { label: 'Email Setup', href: '/email-setup-stretton/' },
      { label: 'Software Install & Setup', href: '/software-install-setup-stretton/' },
      { label: 'Insurance Reports', href: '/insurance-reports-stretton/' },
    ],
  },
  {
    title: 'Networks',
    items: [
      { label: 'Network Setup', href: '/network-setup-stretton/' },
      { label: 'Setup a Wireless Home Network', href: '/setup-wireless-home-network-stretton/' },
    ],
  },
  {
    title: 'Web & digital',
    items: [
      { label: 'Website Design', href: '/website-design-stretton/' },
      { label: 'Website Hosting', href: '/website-hosting-stretton/' },
      { label: 'Smart SEO Services', href: '/smart-seo-services-stretton/' },
    ],
  },
  {
    title: 'Security cameras & training',
    items: [
      { label: 'CCTV Security Camera Installations', href: '/our-services/cctv-service-stretton/' },
      { label: 'Training', href: '/training-stretton/' },
    ],
  },
] as const;
