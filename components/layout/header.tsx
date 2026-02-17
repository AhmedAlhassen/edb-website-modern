import Link from 'next/link';
import { Building2, ChevronDown, Headphones, MapPin } from 'lucide-react';
import { ThemeToggle } from '@/components/providers/theme-toggle';
import type { Locale } from '@/lib/i18n/config';
import { pagePaths } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Button } from '@/components/ui/button';

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const otherLocale: Locale = locale === 'en' ? 'ar' : 'en';

  return (
    <header className="border-b border-border bg-surface">
      <div className="border-b border-border bg-surface-muted">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted md:px-8">
          <div className="flex items-center gap-6">
            <span className="inline-flex min-h-11 items-center gap-2"><MapPin size={14} /> {t.common.branches}</span>
            <span className="inline-flex min-h-11 items-center gap-2"><Headphones size={14} /> {t.common.supportLine}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/${otherLocale}`} className="focus-ring inline-flex min-h-11 items-center rounded-md border border-border px-3 text-text">
              {otherLocale.toUpperCase()}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 border-b border-border md:grid-cols-[auto_1fr_auto]">
        <div className="border-b border-border p-4 md:border-b-0 md:border-e">
          <Link href={`/${locale}`} className="focus-ring inline-flex min-h-11 items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
              <Building2 size={24} />
            </span>
            <span>
              <span className="block text-3xl font-black leading-none text-text">EDB Sudan</span>
              <span className="block text-xs font-bold uppercase tracking-widest text-primary">Export Development Bank</span>
            </span>
          </Link>
        </div>

        <nav className="grid grid-cols-2 md:grid-cols-6">
          <Link href={`/${locale}/${pagePaths.retailBanking}`} className="focus-ring flex min-h-[74px] items-center justify-center border-b border-e border-border bg-surface-muted px-4 text-sm font-bold md:border-b-0">
            {t.nav.retail}
          </Link>
          <Link href={`/${locale}/${pagePaths.corporateBanking}`} className="focus-ring flex min-h-[74px] items-center justify-center border-b border-e border-border px-4 text-sm font-semibold md:border-b-0">
            {t.nav.corporate}
          </Link>
          <Link href={`/${locale}/${pagePaths.services}`} className="focus-ring flex min-h-[74px] items-center justify-center border-b border-e border-border px-4 text-sm font-semibold md:border-b-0">
            {t.nav.accounts} <ChevronDown className="ms-2" size={14} />
          </Link>
          <Link href={`/${locale}/${pagePaths.services}`} className="focus-ring flex min-h-[74px] items-center justify-center border-b border-e border-border px-4 text-sm font-semibold md:border-b-0">
            {t.nav.financing} <ChevronDown className="ms-2" size={14} />
          </Link>
          <Link href={`/${locale}/${pagePaths.services}`} className="focus-ring flex min-h-[74px] items-center justify-center border-b border-e border-border px-4 text-sm font-semibold md:border-b-0">
            {t.nav.investment}
          </Link>
          <Link href={`/${locale}/${pagePaths.about}`} className="focus-ring flex min-h-[74px] items-center justify-center border-b border-border px-4 text-sm font-semibold md:border-b-0">
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center justify-center border-t border-border p-4 md:border-s md:border-t-0">
          <Link href={`/${locale}/${pagePaths.services}`}>
            <Button className="min-w-[220px]">{t.common.login}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
