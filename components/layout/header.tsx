import Link from 'next/link';
import {
  Building2,
  ChevronDown,
  Headphones,
  Lock,
  MapPin,
  Moon,
} from 'lucide-react';
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
      title: 'Savings & Deposits',
      links: ['Current Account', 'Savings Plus', 'Fixed Deposits', 'Salary Transfer'],
    },
    {
      title: 'Personal Loans',
      links: ['Auto Finance', 'Home Finance', 'Personal Finance', 'Education Loan'],
    },
    {
      title: 'Card Services',
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
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 md:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap items-center divide-x divide-border text-sm font-semibold text-muted rtl:divide-x-reverse">
            <span className="inline-flex min-h-[62px] items-center gap-2 px-5 uppercase tracking-wide">
              <MapPin size={14} /> {t.common.branches}
            </span>
            <span className="inline-flex min-h-[62px] items-center gap-2 px-5 uppercase tracking-wide">
              <Headphones size={14} /> {t.common.supportLine}
            </span>
          </div>
          <div className="flex items-center justify-end gap-3 px-5 text-sm font-semibold text-muted">
            <Link
              href={`/${otherLocale}`}
              className="focus-ring inline-flex min-h-11 items-center gap-2"
            >
              <span>EN</span>
              <span className="text-border">|</span>
              <span>عربي</span>
            </Link>
            <Moon size={18} />
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 border-b border-border md:grid-cols-[auto_1fr_auto]">
        <div className="border-b border-border p-5 md:border-b-0 md:border-e">
          <Link href={`/${locale}`} className="focus-ring inline-flex min-h-11 items-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-md bg-primary text-white">
              <Building2 size={26} />
            </span>
            <span>
              <span className="block text-[2rem] font-black leading-[0.95] text-text">EDB Sudan</span>
              <span className="block text-xs font-extrabold uppercase tracking-widest text-primary">
                Export Development Bank
              </span>
            </span>
          </Link>
        </div>

        <nav className="grid grid-cols-2 md:grid-cols-5">
          <div className="flex min-h-[88px] items-center justify-center border-b border-e border-border p-3 md:border-b-0">
            <div className="flex rounded-lg bg-surface-muted p-1">
              <Link
                href={`/${locale}/${pagePaths.retailBanking}`}
                className="focus-ring rounded-md bg-surface px-4 py-2 text-sm font-bold text-primary"
              >
                {t.nav.retail}
              </Link>
              <Link
                href={`/${locale}/${pagePaths.corporateBanking}`}
                className="focus-ring rounded-md px-4 py-2 text-sm font-semibold text-muted"
              >
                {t.nav.corporate}
              </Link>
            </div>
          </div>
          <Link
            href={`/${locale}/${pagePaths.services}`}
            className="focus-ring flex min-h-[88px] items-center justify-center border-b border-e border-border px-4 text-xl font-semibold md:border-b-0"
          >
            {t.nav.accounts} <ChevronDown className="ms-2" size={16} />
          </Link>
          <Link
            href={`/${locale}/${pagePaths.services}`}
            className="focus-ring flex min-h-[88px] items-center justify-center border-b border-e border-border px-4 text-xl font-semibold md:border-b-0"
          >
            {t.nav.financing} <ChevronDown className="ms-2" size={16} />
          </Link>
          <Link
            href={`/${locale}/${pagePaths.services}`}
            className="focus-ring flex min-h-[88px] items-center justify-center border-b border-e border-border px-4 text-xl font-semibold md:border-b-0"
          >
            {t.nav.investment}
          </Link>
          <Link
            href={`/${locale}/${pagePaths.about}`}
            className="focus-ring flex min-h-[88px] items-center justify-center border-b border-border px-4 text-xl font-semibold md:border-b-0"
          >
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center justify-center border-t border-border p-5 md:border-s md:border-t-0">
          <Link href={`/${locale}/${pagePaths.services}`}>
            <Button className="min-w-[220px] gap-2 px-6 py-3 text-base">
              <Lock size={18} /> {t.common.login}
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-5 py-8 md:grid-cols-[1fr_1fr_1fr_360px] md:px-9">
        {megaColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-4 border-b border-border pb-3 text-lg font-black uppercase tracking-wide text-primary">
              {column.title}
            </h3>
            <ul className="space-y-3 text-xl text-text">
              {column.links.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-primary/45">•</span>
                  <a className="focus-ring inline-flex min-h-11 items-center" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-xl border border-border bg-surface-muted p-6">
          <span className="inline-flex rounded-md bg-primary px-2 py-1 text-xs font-extrabold text-white">
            {isAr ? 'جديد' : 'NEW'}
          </span>
          <h3 className="mt-4 text-4xl font-black leading-tight text-text">
            {isAr ? 'قدّم على تمويلك عبر الإنترنت' : 'Apply for Finance Online'}
          </h3>
          <p className="mt-3 text-lg text-muted">
            {isAr
              ? 'موافقة فورية للعملاء الحاليين مع حسابات تحويل الرواتب.'
              : 'Instant approval for existing customers with salary transfer accounts.'}
          </p>
          <a href="#" className="focus-ring mt-5 inline-flex min-h-11 items-center text-lg font-bold text-primary">
            {isAr ? 'اعرف المزيد ←' : 'Learn more →'}
          </a>
        </div>
      </div>
    </header>
  );
}
