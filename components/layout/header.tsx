import Link from 'next/link';
import { Building2, ChevronDown, Headphones, Lock, MapPin, Moon } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { pagePaths } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Button } from '@/components/ui/button';

type MegaColumn = {
  title: string;
  links: string[];
};

function getMegaMenu(locale: Locale): MegaColumn[] {
  if (locale === 'ar') {
    return [
      {
        title: 'خدمات البطاقات',
        links: ['فيزا بلاتينوم', 'فيزا سيغنتشر', 'بطاقات مسبقة الدفع', 'أمان البطاقات'],
      },
      {
        title: 'القروض الشخصية',
        links: ['تمويل السيارات', 'تمويل المنزل', 'التمويل الشخصي', 'قرض التعليم'],
      },
      {
        title: 'الادخار والودائع',
        links: ['الحساب الجاري', 'حساب التوفير', 'الودائع الثابتة', 'تحويل الرواتب'],
      },
    ];
  }

  return [
    {
      title: 'SAVINGS & DEPOSITS',
      links: ['Current Account', 'Savings Plus', 'Fixed Deposits', 'Salary Transfer'],
    },
    {
      title: 'PERSONAL LOANS',
      links: ['Auto Finance', 'Home Finance', 'Personal Finance', 'Education Loan'],
    },
    {
      title: 'CARD SERVICES',
      links: ['Visa Platinum', 'Visa Signature', 'Prepaid Cards', 'Card Security'],
    },
  ];
}

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const otherLocale: Locale = locale === 'en' ? 'ar' : 'en';
  const megaColumns = getMegaMenu(locale);
  const isAr = locale === 'ar';

  return (
    <header className="border-b border-border bg-surface">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between">
          <div className="flex items-center divide-x divide-border text-xs font-bold uppercase tracking-wider text-muted rtl:divide-x-reverse">
            <span className="inline-flex min-h-[42px] items-center gap-2 px-6">
              <MapPin size={13} /> {t.common.branches}
            </span>
            <span className="inline-flex min-h-[42px] items-center gap-2 px-6">
              <Headphones size={13} /> {t.common.supportLine}
            </span>
          </div>
          <div className="inline-flex min-h-[42px] items-center gap-4 px-6 text-sm font-bold text-muted">
            <Link href={`/${otherLocale}`} className="focus-ring inline-flex items-center gap-2">
              <span>EN</span>
              <span className="text-border">|</span>
              <span>عربي</span>
            </Link>
            <Moon size={16} />
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 border-b border-border lg:grid-cols-[auto_1fr_auto]">
        <div className="border-b border-border px-8 py-5 lg:border-b-0 lg:border-e">
          <Link href={`/${locale}`} className="focus-ring inline-flex min-h-11 items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded bg-primary text-white">
              <Building2 size={21} />
            </span>
            <span>
              <span className="block text-[38px] font-black leading-none text-text">EDB Sudan</span>
              <span className="block text-xs font-extrabold uppercase tracking-widest text-primary">Export Development Bank</span>
            </span>
          </Link>
        </div>

        <nav className="grid grid-cols-2 lg:grid-cols-5">
          <div className="flex min-h-[84px] items-center justify-center border-b border-e border-border px-3 lg:border-b-0">
            <div className="flex rounded-lg bg-surface-muted p-1">
              <Link
                href={`/${locale}/${pagePaths.retailBanking}`}
                className="focus-ring rounded bg-surface px-4 py-2 text-sm font-bold text-primary"
              >
                {t.nav.retail}
              </Link>
              <Link
                href={`/${locale}/${pagePaths.corporateBanking}`}
                className="focus-ring rounded px-4 py-2 text-sm font-semibold text-muted"
              >
                {t.nav.corporate}
              </Link>
            </div>
          </div>

          <Link href={`/${locale}/${pagePaths.services}`} className="focus-ring flex min-h-[84px] items-center justify-center border-b border-e border-border px-4 text-xl font-semibold lg:border-b-0">
            {t.nav.accounts} <ChevronDown className="ms-2" size={14} />
          </Link>
          <Link href={`/${locale}/${pagePaths.services}`} className="focus-ring flex min-h-[84px] items-center justify-center border-b border-e border-border px-4 text-xl font-semibold lg:border-b-0">
            {t.nav.financing} <ChevronDown className="ms-2" size={14} />
          </Link>
          <Link href={`/${locale}/${pagePaths.services}`} className="focus-ring flex min-h-[84px] items-center justify-center border-b border-e border-border px-4 text-xl font-semibold lg:border-b-0">
            {t.nav.investment}
          </Link>
          <Link href={`/${locale}/${pagePaths.about}`} className="focus-ring flex min-h-[84px] items-center justify-center border-b border-border px-4 text-xl font-semibold lg:border-b-0">
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center justify-center border-t border-border p-4 lg:border-s lg:border-t-0">
          <Link href={`/${locale}/${pagePaths.services}`}>
            <Button className="min-w-[190px] gap-2"> <Lock size={16} /> {t.common.login}</Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-[1360px] grid-cols-1 gap-8 border-b border-border px-8 py-10 lg:grid lg:grid-cols-[1fr_1fr_1fr_300px]">
        {megaColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 border-b border-border pb-3 text-xl font-black tracking-wide text-primary">
              {column.title}
            </h3>
            <ul className="space-y-3 text-[32px]">
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

        <aside className="rounded-lg border border-border bg-surface-muted p-6">
          <span className="inline-flex rounded bg-primary px-2 py-1 text-xs font-bold text-white">{isAr ? 'جديد' : 'NEW'}</span>
          <h3 className="mt-4 text-4xl font-black leading-tight text-text">{isAr ? 'قدّم على تمويلك عبر الإنترنت' : 'Apply for Finance Online'}</h3>
          <p className="mt-4 text-base text-muted">
            {isAr
              ? 'موافقة فورية للعملاء الحاليين مع حسابات تحويل الرواتب.'
              : 'Instant approval for existing customers with salary transfer accounts.'}
          </p>
          <a href="#" className="focus-ring mt-6 inline-flex min-h-11 items-center text-lg font-bold text-primary">
            {isAr ? 'اعرف المزيد ←' : 'Learn more →'}
          </a>
        </aside>
      </div>
    </header>
  );
}
