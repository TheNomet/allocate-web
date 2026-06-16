// @ts-check
import { defineConfig } from 'astro/config';

// Allocate marketing site — deployed to GitHub Pages on the custom
// domain https://allocateit.app (served from the domain root, so no
// `base` path prefix). The CNAME file in public/ tells Pages the domain.
export default defineConfig({
  site: 'https://allocateit.app',
  output: 'static',
  trailingSlash: 'ignore',
});
