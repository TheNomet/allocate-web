# Allocate — Website

Marketing site for [Allocate](https://github.com/TheNomet/allocate), a macOS-first
personal finance app. Built with [Astro](https://astro.build) and deployed to
GitHub Pages at **https://thenomet.github.io/allocate-web/**.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/allocate-web
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

## To do later

- **Screenshots.** Real imagery is stubbed with `ScreenshotPlaceholder`. Export
  PNGs from `designs/allocalte.pen` into `public/screenshots/`, then pass
  `src="/screenshots/your-file.png"` to the `<ScreenshotPlaceholder>` instances.
- **Analytics.** Paste your Cloudflare Web Analytics token into
  `CLOUDFLARE_ANALYTICS_TOKEN` in `src/config.ts` to enable cookieless tracking.
- **Release.** When the signed `.dmg` is published to GitHub Releases, set
  `released: true` in `src/config.ts` to flip the download page to live.
```
