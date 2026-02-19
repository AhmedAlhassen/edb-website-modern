'use client';

import Link from 'next/link';
import { ChevronDown, Lock } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import { pagePaths } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import { RetailCorporateToggle } from '@/components/layout/retail-corporate-toggle';
import { EdbLogo } from '@/components/layout/edb-logo';

type MegaColumn = {
  title: string;
  links: string[];
};

type Props = {
  locale: Locale;
  labels: {
    brand: string;
    brandSub: string;
    retail: string;
    corporate: string;
    accounts: string;
    financing: string;
    investment: string;
    about: string;
    login: string;
    alertBadge: string;
    alertText: string;
    alertLink: string;
    promoBadge: string;
    promoTitle: string;
    promoDescription: string;
    promoLink: string;
  };
  accountsColumns: MegaColumn[];
  financingColumns: MegaColumn[];
  investmentColumns: MegaColumn[];
  aboutColumns: MegaColumn[];
};

export function DesktopNavWithMega({ locale, labels, accountsColumns, financingColumns, investmentColumns, aboutColumns }: Props) {
  const [activeMenu, setActiveMenu] = useState<'accounts' | 'financing' | 'investment' | 'about' | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const columns = useMemo(
    () =>
      activeMenu === 'financing'
        ? financingColumns
        : activeMenu === 'investment'
          ? investmentColumns
          : activeMenu === 'about'
            ? aboutColumns
          : activeMenu === 'accounts'
            ? accountsColumns
            : [],
    [activeMenu, financingColumns, investmentColumns, aboutColumns, accountsColumns],
  );
  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 220);
  };

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={clearCloseTimer}
      onMouseLeave={scheduleClose}
    >
      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 lg:grid-cols-[auto_1fr_auto]">
        <div className="px-8 py-4">
          <Link href={`/${locale}`} className="focus-ring inline-flex min-h-11 items-center">
            <EdbLogo locale={locale} width={220} height={74} className="h-14 w-auto" />
          </Link>
        </div>

        <nav className="grid grid-cols-2 lg:grid-cols-5">
          <div
            className="flex min-h-20 items-center justify-center px-4"
            onMouseEnter={() => setActiveMenu(null)}
          >
            <RetailCorporateToggle locale={locale} retailLabel={labels.retail} corporateLabel={labels.corporate} />
          </div>

          <Link
            href={`/${locale}/${pagePaths.services}`}
            className="focus-ring group flex min-h-20 items-center justify-center px-6 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:text-primary dark:text-[#CBD5E1] dark:hover:bg-[#1E293B]"
            onMouseEnter={() => setActiveMenu('accounts')}
            onFocus={() => setActiveMenu('accounts')}
          >
            {labels.accounts}{' '}
            <ChevronDown className={`ms-2 transition-transform duration-200 group-hover:translate-y-0.5 ${activeMenu === 'accounts' ? 'rotate-180' : ''}`} size={14} />
          </Link>
          <Link
            href={`/${locale}/${pagePaths.services}`}
            className="focus-ring group flex min-h-20 items-center justify-center px-6 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:text-primary dark:text-[#CBD5E1] dark:hover:bg-[#1E293B]"
            onMouseEnter={() => setActiveMenu('financing')}
            onFocus={() => setActiveMenu('financing')}
          >
            {labels.financing}{' '}
            <ChevronDown className={`ms-2 transition-transform duration-200 group-hover:translate-y-0.5 ${activeMenu === 'financing' ? 'rotate-180' : ''}`} size={14} />
          </Link>
          <Link
            href={`/${locale}/${pagePaths.services}`}
            className="focus-ring group flex min-h-20 items-center justify-center px-6 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:text-primary dark:text-[#CBD5E1] dark:hover:bg-[#1E293B]"
            onMouseEnter={() => setActiveMenu('investment')}
            onFocus={() => setActiveMenu('investment')}
          >
            {labels.investment}{' '}
            <ChevronDown className={`ms-2 transition-transform duration-200 group-hover:translate-y-0.5 ${activeMenu === 'investment' ? 'rotate-180' : ''}`} size={14} />
          </Link>
          <Link
            href={`/${locale}/${pagePaths.about}`}
            className="focus-ring group flex min-h-20 items-center justify-center px-6 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 hover:text-primary dark:text-[#CBD5E1] dark:hover:bg-[#1E293B]"
            onMouseEnter={() => setActiveMenu('about')}
            onFocus={() => setActiveMenu('about')}
          >
            {labels.about}{' '}
            <ChevronDown className={`ms-2 transition-transform duration-200 group-hover:translate-y-0.5 ${activeMenu === 'about' ? 'rotate-180' : ''}`} size={14} />
          </Link>
        </nav>

        <div className="flex items-center justify-center px-8 py-4">
          <Link href={`/${locale}/${pagePaths.services}`}>
            <Button className="min-w-[180px] gap-2 px-6 py-3 text-sm font-bold shadow-lg shadow-primary/20">
              <Lock size={16} /> {labels.login}
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-[#07142d] text-white dark:bg-[#1E293B]">
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 py-2 text-[11px]">
          <div className="flex items-center gap-3">
            <span className="rounded bg-primary px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">{labels.alertBadge}</span>
            <p className="font-medium tracking-wide">{labels.alertText}</p>
          </div>
          <a href="#" className="focus-ring inline-flex items-center gap-1 font-bold text-primary hover:underline">
            {labels.alertLink}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 top-full z-40">
        <div
          className={`mx-auto grid w-full max-w-[1360px] translate-y-2 grid-cols-[1fr_1fr_1fr_300px] gap-8 bg-surface px-8 py-10 shadow-[0_20px_36px_-30px_rgba(15,23,42,0.5)] transition duration-200 ${
            activeMenu ? 'pointer-events-auto translate-y-0 opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
        >
          {columns.map((column) => (
            <div key={`${activeMenu}-${column.title}`}>
              <h3 className="mb-4 pb-3 text-sm font-black tracking-wide text-primary">
                {column.title}
              </h3>
              <ul className="space-y-2 text-base">
                {column.links.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-text">
                    <span className="text-primary/45">•</span>
                    <a href="#" className="focus-ring inline-flex min-h-11 items-center">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <aside className="rounded-lg bg-surface-muted p-6 shadow-sm">
            <span className="inline-flex rounded bg-primary px-2 py-1 text-xs font-bold text-white">{labels.promoBadge}</span>
            <h3 className="mt-4 text-2xl font-black leading-tight text-text">{labels.promoTitle}</h3>
            <p className="mt-4 text-sm text-muted">{labels.promoDescription}</p>
            <a href="#" className="focus-ring mt-6 inline-flex min-h-11 items-center text-base font-bold text-primary">
              {labels.promoLink}
            </a>
          </aside>
        </div>
      </div>
    </div>
  );
}
