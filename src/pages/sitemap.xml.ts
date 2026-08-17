import type { APIRoute } from 'astro';
import { toursByLocale } from '../data/tours';
import { homePath, tourPath } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = () => {
  const site = import.meta.env.SITE || 'http://localhost:4321';
  const paths = [
    homePath('en'),
    homePath('nb'),
    ...toursByLocale.en.map((tour) => tourPath('en', tour.slug)),
    ...toursByLocale.nb.map((tour) => tourPath('nb', tour.slug))
  ];

  const urls = [...new Set(paths)].map((path) => new URL(path, site).toString());
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
