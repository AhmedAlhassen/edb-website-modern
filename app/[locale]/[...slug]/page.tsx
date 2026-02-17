import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

export default function DetailsPage({ params }: { params: { locale: Locale; slug: string[] } }) {
  return (
    <section className="mx-auto max-w-4xl border-x border-b border-border bg-surface px-6 py-16">
      <h1 className="text-3xl font-black">{params.slug.join(' / ')}</h1>
      <p className="mt-4 text-muted">{params.locale === 'ar' ? 'صفحة تفاصيل تجريبية لتدفق النماذج الأولية.' : 'Prototype detail page for key user flows.'}</p>
      <Link href={`/${params.locale}/contact`} className="focus-ring mt-6 inline-flex min-h-11 items-center text-primary">{params.locale === 'ar' ? 'الانتقال للتواصل' : 'Proceed to contact'} →</Link>
    </section>
  );
}
