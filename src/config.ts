// Shared site constants. Edit here, used everywhere.

export const SITE = {
  name: 'Allocate',
  tagline: 'Pay yourself first.',
  description:
    'Allocate is a macOS personal finance app. Import a bank statement, let on-device AI categorize every transaction, and track your budgets, goals, and net worth — privately, with no account and nothing leaving your Mac.',
  // The app's source repo. Currently PRIVATE, so it is intentionally not
  // linked anywhere on the public site. Wire links back up if it goes public.
  appRepo: 'https://github.com/TheNomet/allocate',
  // GitHub Releases page where the signed DMG will live once v1 ships.
  // Points at this PUBLIC website repo so the DMG is downloadable without
  // login — the app source repo can stay private; upload the .dmg here.
  releasesUrl: 'https://github.com/TheNomet/allocate-web/releases/latest',
  // Stable direct-download URL for the latest signed DMG. The release
  // script re-uploads this fixed-name asset every release, so the link
  // never changes and clicking it downloads immediately (GitHub serves
  // release assets as attachments) instead of opening the release page.
  downloadUrl: 'https://github.com/TheNomet/allocate-web/releases/download/appcast/Allocate-latest.dmg',
  requirements: 'macOS 14 Sonoma or later',
  released: true, // flip to true when a DMG is published to Releases
};

// Cloudflare Web Analytics token. Paste the token from your Cloudflare
// dashboard here (Account → Web Analytics → your site → "Manage site").
// Leaving it empty disables the snippet. Cookieless, no personal data.
export const CLOUDFLARE_ANALYTICS_TOKEN = '107d6094b8b0448a8b78fafc11952d27';
