import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = () => {
  const site = import.meta.env.SITE || 'http://localhost:4321';
  const sitemap = new URL(withBase('sitemap.xml'), site).toString();
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
