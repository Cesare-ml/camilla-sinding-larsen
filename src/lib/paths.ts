export type Locale = 'en' | 'nb';

export function withBase(path = ''): string {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}${cleanPath}`;
}

export function homePath(locale: Locale, hash = ''): string {
  const path = locale === 'nb' ? 'nb/' : '';
  return `${withBase(path)}${hash}`;
}

export function tourPath(locale: Locale, slug: string): string {
  return withBase(`${locale === 'nb' ? 'nb/' : ''}tours/${slug}/`);
}

export function assetPath(path: string): string {
  return withBase(`assets/${path.replace(/^\/+/, '')}`);
}
