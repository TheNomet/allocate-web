// Shared site constants. Edit here, used everywhere.

export const SITE = {
  name: 'Allocate',
  tagline: 'Pay yourself first.',
  description:
    'Allocate is a macOS personal finance app. Import a bank statement, let AI categorize every transaction, and see exactly how much you save — all on your Mac.',
  // The app's source repo (not this website's repo).
  appRepo: 'https://github.com/TheNomet/allocate',
  // GitHub Releases page where the signed DMG will live once v1 ships.
  releasesUrl: 'https://github.com/TheNomet/allocate/releases/latest',
  requirements: 'macOS 14 Sonoma or later',
  released: false, // flip to true when a DMG is published to Releases
};

// Cloudflare Web Analytics token. Paste the token from your Cloudflare
// dashboard here (Account → Web Analytics → your site → "Manage site").
// Leaving it empty disables the snippet. Cookieless, no personal data.
export const CLOUDFLARE_ANALYTICS_TOKEN = '';
