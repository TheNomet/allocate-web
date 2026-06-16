// @ts-check
import { defineConfig } from 'astro/config';

// Allocate marketing site — deployed as a GitHub Pages *project* site
// at https://thenomet.github.io/allocate-web/.
// If a custom domain is added later, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://thenomet.github.io',
  base: '/allocate-web',
  output: 'static',
  trailingSlash: 'ignore',
});
