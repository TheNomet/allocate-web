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


## Marketing media (screenshots + demo video)

The landing page is **video-first**: the hero plays an autoplaying screen
recording, and each feature row shows a real screenshot in a clean rounded
panel (no faux title bar). All media is captured for **all six themes**, and the
theme cards in the "Make it yours" section swap both the hero video and every
screenshot live (and re-theme the site).

Assets live under `public/`:

```
public/
  demo-<theme>.mp4 / .webm           hero demo video, one pair per theme
  screenshots/<theme>/
    home.png  pay-yourself-first.png  budget.png  goals.png
    net-worth.png  transactions.png  import.png    (home.png doubles as the video poster)
```

where `<theme>` ∈ `rosepine-dawn rosepine nord catppuccin tokyonight gruvbox`
(`rosepine-dawn` is the default shown on load).

These are produced deterministically by the **`marketing-capture` skill** in the
app repo (`allocate/main/.claude/skills/marketing-capture/`), which drives the
real app via Quartz/cliclick + `screencapture` and writes straight into this
repo's `public/`. To regenerate one theme:

```sh
cd allocate/main/.claude/skills/marketing-capture
python3 capture.py rosepine-dawn          # or any theme raw value
```

See that skill's `SKILL.md` for prerequisites (cliclick, ffmpeg, pyobjc-Quartz,
screen-recording permission) and the full pipeline.


## To do later

- **Analytics.** Paste your Cloudflare Web Analytics token into
  `CLOUDFLARE_ANALYTICS_TOKEN` in `src/config.ts` to enable cookieless tracking.
  (A token is already set.)
- **Release.** When the signed `.dmg` is published to GitHub Releases, set
  `released: true` in `src/config.ts` to flip the download page to live.
```
