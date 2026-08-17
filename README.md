# Camilla Sinding-Larsen — Guided Tours in Tuscany

Static GitHub Pages rebuild of the current Guide i Toscana website, adapted to present **Camilla Sinding-Larsen only**.

## Current phase

**Baseline / recognizable replica.**

The first version intentionally stays close to the current website in structure, content and imagery. It removes Annika and adapts the copy to a single guide. A separate visual redesign will follow after Camilla has reviewed this baseline.

See [`docs/PROJECT.md`](docs/PROJECT.md) for scope, decisions and the redesign roadmap.

## Structure

- `/index.html` — English homepage
- `/nb/index.html` — Norwegian homepage
- `/assets/css/styles.css` — shared styles
- `/assets/js/main.js` — navigation, slideshow and tour modals
- `/assets/js/nb-copy.js` — Norwegian modal copy
- `/.github/workflows/pages.yml` — GitHub Pages deployment
- `/docs/PROJECT.md` — project notes and roadmap

## Local preview

Because the site is plain static HTML, it can be opened directly or served with any local web server, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## GitHub Pages

The repository includes a deployment workflow. In GitHub repository settings select:

`Settings → Pages → Build and deployment → Source → GitHub Actions`

After Pages is enabled, pushes to `main` deploy automatically.

## Temporary image dependency

The baseline references images hosted by the existing `guideitoscana.com` WordPress site so the first preview stays visually familiar. Before replacing the old site, move the final image originals into this repository (or another controlled asset host).
