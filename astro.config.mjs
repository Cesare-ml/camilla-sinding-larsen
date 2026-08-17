import { defineConfig } from 'astro/config';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: githubPages ? 'https://cesare-ml.github.io' : 'http://localhost:4321',
  base: githubPages ? '/camilla-sinding-larsen' : '/',
  trailingSlash: 'always'
});
