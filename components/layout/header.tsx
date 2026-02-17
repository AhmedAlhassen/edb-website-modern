import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { ThemeToggle } from '@/components/providers/theme-toggle';
import type { Locale } from '@/lib/i18n/config';
import { pagePaths } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const otherLocale: Locale = locale === 'en' ? 'ar' : 'en';

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href={`/${locale}`} className="focus-ring inline-flex min-h-11 items-center gap-2 font-bold">
          <Building2 className="text-primary" /> EDB Sudan
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link className="focus-ring min-h-11 py-2" href={`/${locale}/${pagePaths.services}`}>{t.nav.services}</Link>
          <Link className="focus-ring min-h-11 py-2" href={`/${locale}/${pagePaths.announcementsHub}`}>{t.nav.announcements}</Link>
          <Link className="focus-ring min-h-11 py-2" href={`/${locale}/${pagePaths.about}`}>{t.nav.about}</Link>
          <Link className="focus-ring min-h-11 py-2" href={`/${locale}/${pagePaths.contact}`}>{t.nav.contact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href={`/${otherLocale}`} className="focus-ring inline-flex min-h-11 items-center rounded-md border border-border px-3">{otherLocale.toUpperCase()}</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
