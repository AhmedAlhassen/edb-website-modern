import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { localeMeta, locales, type Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;
  const dir = localeMeta[locale].dir;

  return (
    <div lang={locale} dir={dir} className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-[390px] border-x border-slate-200 dark:border-[#334155] lg:max-w-none lg:border-x-0">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      </div>
    </div>
  );
}
