# Analytics

The site uses **Cloudflare Web Analytics** — cookieless, privacy-friendly,
no consent banner required. The beacon is enabled via
`CLOUDFLARE_ANALYTICS_TOKEN` in `src/config.ts` and loads on every page.

Dashboard: **Cloudflare → Web Analytics → allocateit.app**

## Excluding your own (test) visits

Cloudflare Web Analytics has **no IP filter and no way to delete past data**,
so visits already recorded can't be removed — they age out over time.

To stop counting your own visits going forward, the site supports a per-device
opt-out (stored in `localStorage`, handled in `src/layouts/Layout.astro`):

- Visit any page with **`?analytics=off`** once per browser/device, e.g.
  `https://allocateit.app/?analytics=off` — the beacon stops loading there.
- Visit **`?analytics=on`** to re-enable.

Do this on every browser/device you test from. (Most ad blockers also block
`static.cloudflareinsights.com` automatically.)

## What we track

Anonymous, aggregate traffic only — no cookies, no personal data, no idea
*who* visited.

**Traffic**

- Page views (total and per page: `/`, `/download`, `/privacy`)
- Visits (sessions)
- Approximate unique visitors (estimated without cookies)

**Where people come from**

- Referrers (Google, social links, direct, …)
- Country (country-level location only)
- Top paths

**How they arrive**

- Browser (Chrome, Safari, …) and OS (macOS, Windows, …)
- Device type (desktop, mobile)

**Performance**

- Core Web Vitals (real-visitor load timing)

## What we do NOT track

- No individual identities — can't see who visited
- No cookies, no cross-site tracking, no ad profiles
- No click-level events by default (e.g. it counts `/download` **page views**,
  not button clicks or actual file downloads)

## Tracking downloads (for launch)

Cloudflare counts `/download` page views, not the download action itself.
When the app ships:

- **Download count** — GitHub Releases exposes a per-asset `download_count`
  via the API.
- **"Clicked download"** — needs a small custom event or a `/download`
  redirect; wire this up once a real DMG exists to point at.

## Considered and skipped

- **Google Analytics (GA4)** — more powerful, but sets cookies, sends data to
  Google, and requires a GDPR consent banner. That contradicts the app's
  privacy-first positioning and is overkill for a pre-launch page. Revisit only
  if running paid ad campaigns that need funnel/attribution data.
