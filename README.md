# Camilla Sinding-Larsen — Guide i Toscana

Astro rebuild of the Guide i Toscana website, dedicated exclusively to **Camilla Sinding-Larsen**.

This branch intentionally reproduces the current baseline before the visual redesign. English and Norwegian share the same components and data model, while the generated output remains fully static HTML.

## Branch

Development is currently on:

```text
astro-rebuild
```

`main` remains the reference implementation of the previous plain HTML/CSS/JS baseline.

## Stack

- Astro 6
- TypeScript
- static output / prerendering
- English + Norwegian
- vanilla JavaScript only for the mobile menu and hero slideshow
- no backend
- no database
- no CMS yet
- no GitHub Actions workflow in this branch

## Requirements

Node 22.12 or newer.

The repository includes `.nvmrc`:

```bash
nvm use
```

## Local development

```bash
npm install
npm run dev
```

Default local URL:

```text
http://localhost:4321/
```

## Production build

```bash
npm run build
npm run preview
```

Astro writes the generated static site to `dist/`.

## Future GitHub Pages build

GitHub Actions is intentionally not configured in this branch while Actions usage is unavailable.

The Astro config already supports the GitHub Pages project path when the environment variable below is set:

```powershell
$env:GITHUB_PAGES='true'
npm run build
```

This activates:

```text
site = https://cesare-ml.github.io
base = /camilla-sinding-larsen
```

A deployment workflow can be added later without changing the site architecture.

## Source structure

```text
src/
  components/
    Header.astro
    Footer.astro
    HomePage.astro
    TourCard.astro
    TourDetail.astro
  data/
    home.ts
    tours.ts
  layouts/
    BaseLayout.astro
  lib/
    paths.ts
  pages/
    index.astro
    404.astro
    sitemap.xml.ts
    robots.txt.ts
    nb/index.astro
    tours/[slug].astro
    nb/tours/[slug].astro
  styles/
    astro.css
public/
  assets/
```

## Tour pages

The eight English and eight Norwegian tour pages are generated from `src/data/tours.ts`. The two languages therefore use the same slugs and the same layout instead of maintaining sixteen independent HTML files.

## SEO baseline

The Astro rebuild includes:

- title and meta description per page;
- canonical URLs;
- EN/NB `hreflang` alternates;
- Open Graph metadata;
- Twitter card metadata;
- XML sitemap;
- robots.txt;
- a noindex 404 page.

These will use the final production domain once the definitive domain/deployment configuration is chosen.

## CMS

Pages CMS is **not enabled yet**. The next CMS step should be implemented after testing Pages CMS locally. The intended direction is to move future editorial articles into Astro Content Collections so Camilla can write and publish through a visual CMS without interacting with Git.

## Temporary image dependency

Most tour and hero photographs are still served from the existing `guideitoscana.com` WordPress installation to keep the baseline visually identical. Before the old site is retired, the final selected images must be copied to controlled local assets or another permanent asset host.

## Documentation

- [`docs/ASTRO-MIGRATION.md`](docs/ASTRO-MIGRATION.md)
- [`docs/GROWTH-SEO-ARCHITECTURE.md`](docs/GROWTH-SEO-ARCHITECTURE.md)
- [`docs/PROJECT.md`](docs/PROJECT.md)
