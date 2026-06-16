# Allocate — Website

Marketing site for [Allocate](https://github.com/TheNomet/allocate), a macOS-first
personal finance app. Built with [Astro](https://astro.build) and deployed to
GitHub Pages on the custom domain **https://allocateit.app**.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command           | Action                                   |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the local dev server               |
| `npm run build`   | Build the static site into `dist/`       |
| `npm run preview` | Preview the production build locally     |

## Project structure

```
src/
  config.ts                 Site constants + Cloudflare analytics token
  layouts/Layout.astro      Base HTML shell (SEO, analytics, header/footer)
  components/               Header, Footer, Button, Feature, ScreenshotPlaceholder, icons
  pages/
    index.astro             Landing page
    download.astro          Download / “coming soon” page
    privacy.astro           Privacy policy
  styles/global.css         Design tokens (mirrored from the app's Theme)
public/                     Static assets (favicon, screenshots/)
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
`withastro/action` and publishes to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment
→ Source** and select **GitHub Actions**.

### Custom domain (allocateit.app)

`public/CNAME` tells GitHub Pages to serve the site at `allocateit.app`. To make
it resolve, add these DNS records at your registrar:

| Type | Host | Value |
| ---- | ---- | ----- |
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |
| CNAME | www | thenomet.github.io |

Then in **Settings → Pages → Custom domain** enter `allocateit.app` and enable
**Enforce HTTPS** once the certificate is provisioned.


## To do later

- **Screenshots.** Real imagery is stubbed with `ScreenshotPlaceholder`. Export
  PNGs from `designs/allocalte.pen` into `public/screenshots/`, then pass
  `src="/screenshots/your-file.png"` to the `<ScreenshotPlaceholder>` instances.
- **Analytics.** Paste your Cloudflare Web Analytics token into
  `CLOUDFLARE_ANALYTICS_TOKEN` in `src/config.ts` to enable cookieless tracking.
- **Release.** When the signed `.dmg` is published to GitHub Releases, set
  `released: true` in `src/config.ts` to flip the download page to live.
```
