'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pagePaths, type Locale } from '@/lib/i18n/config';

type Props = {
  locale: Locale;
  retailLabel: string;
  corporateLabel: string;
};

export function RetailCorporateToggle({ locale, retailLabel, corporateLabel }: Props) {
  const pathname = usePathname();
  const retailPath = `/${locale}/${pagePaths.retailBanking}`;
  const corporatePath = `/${locale}/${pagePaths.corporateBanking}`;
  const homePath = `/${locale}`;

  const isCorporateActive = pathname === corporatePath;
  const isRetailActive = !isCorporateActive && (pathname === retailPath || pathname === homePath);

  return (
    <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-[#1E293B]">
      <Link
        href={retailPath as never}
        className={`focus-ring rounded px-4 py-1.5 text-[11px] font-bold transition-colors ${
          isRetailActive ? 'bg-white text-primary shadow-sm dark:bg-[#334155] dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-[#CBD5E1] dark:hover:text-[#F8FAFC]'
        }`}
      >
        {retailLabel}
      </Link>
      <Link
        href={corporatePath as never}
        className={`focus-ring rounded px-4 py-1.5 text-[11px] font-bold transition-colors ${
          isCorporateActive ? 'bg-white text-primary shadow-sm dark:bg-[#334155] dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-[#CBD5E1] dark:hover:text-[#F8FAFC]'
        }`}
      >
        {corporateLabel}
      </Link>
    </div>
  );
}
