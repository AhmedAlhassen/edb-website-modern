import { notFound } from 'next/navigation';
import { BlockRenderer } from '@/modules/block-renderer';
import { getPageBySlug } from '@/lib/cms/client';
import { locales, type Locale } from '@/lib/i18n/config';

export default async function HomePage({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;

  const page = await getPageBySlug('home', locale);
  if (!page) notFound();

  return <BlockRenderer blocks={page.blocks} />;
}
