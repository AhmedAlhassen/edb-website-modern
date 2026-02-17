import { pageSchema, type CmsPage } from '@/schemas/blocks';
import { mockPages } from './mock-data';
import type { Locale } from '@/lib/i18n/config';

const STRAPI_URL = process.env.STRAPI_URL;

async function fetchFromStrapi(slug: string, locale: Locale): Promise<CmsPage | null> {
  if (!STRAPI_URL) return null;

  try {
    const url = `${STRAPI_URL}/api/pages?filters[slug][$eq]=${slug}&locale=${locale}&populate[blocks][populate]=*`;
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) return null;
    const data = await response.json();
    const first = data?.data?.[0]?.attributes;
    if (!first) return null;
    return pageSchema.parse({ slug: first.slug, locale, blocks: first.blocks });
  } catch {
    return null;
  }
}

export async function getPageBySlug(slug: string, locale: Locale): Promise<CmsPage | null> {
  const remote = await fetchFromStrapi(slug, locale);
  if (remote) return remote;
  const local = mockPages.find((page) => page.slug === slug && page.locale === locale);
  return local ?? null;
}
