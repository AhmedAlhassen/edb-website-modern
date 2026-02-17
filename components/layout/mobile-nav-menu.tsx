'use client';

import Link from 'next/link';
import { ChevronDown, Headphones, Info, Landmark, Lock, MapPin, Menu, TrendingUp, Wallet, X } from 'lucide-react';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import { pagePaths } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import { EdbLogo } from '@/components/layout/edb-logo';

type Props = {
  locale: Locale;
  labels: {
    retail: string;
    corporate: string;
    accounts: string;
    financing: string;
    investment: string;
    about: string;
    login: string;
  };
};

export function MobileNavMenu({ locale, labels }: Props) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'accounts' | 'financing' | 'investment' | 'about' | null>('accounts');
  const isAr = locale === 'ar';
  const menuCopy = {
    current: isAr ? 'الحساب الجاري' : 'Current Account',
    savings: isAr ? 'التوفير بلس' : 'Savings Plus',
    fixed: isAr ? 'الودائع الثابتة' : 'Fixed Deposits',
    salary: isAr ? 'تحويل الرواتب' : 'Salary Transfer',
    autoFinance: isAr ? 'تمويل السيارات' : 'Auto Finance',
    homeFinance: isAr ? 'تمويل المنزل' : 'Home Finance',
    personalFinance: isAr ? 'التمويل الشخصي' : 'Personal Finance',
    educationLoan: isAr ? 'قرض التعليم' : 'Education Loan',
    wealth: isAr ? 'إدارة الثروات' : 'Wealth Management',
    treasury: isAr ? 'إدارة الخزينة' : 'Treasury Services',
    reports: isAr ? 'التقارير والرؤى' : 'Market Reports',
    whoWeAre: isAr ? 'من نحن' : 'Who We Are',
    leadership: isAr ? 'القيادة' : 'Leadership',
    careers: isAr ? 'الوظائف' : 'Careers',
    locations: isAr ? 'المواقع' : 'Locations',
    support: isAr ? 'الدعم' : 'Support',
    authorized: isAr ? 'معتمد من بنك السودان المركزي' : 'Authorized by Central Bank of Sudan',
  };

  const close = () => setOpen(false);
  const toggleSection = (section: 'accounts' | 'financing' | 'investment' | 'about') =>
    setActiveSection((prev) => (prev === section ? null : section));

  return (
    <>
      <button
        aria-expanded={open}
        aria-label="Open navigation menu"
        className="focus-ring inline-flex p-1 text-text"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[-56px] z-[90] h-[calc(100vh-32px)] border-y border-border bg-surface shadow-xl dark:bg-[#111521]">
          <header className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
            <Link href={`/${locale}`} className="focus-ring inline-flex items-center" onClick={close}>
              <EdbLogo locale={locale} width={144} height={48} className="h-9 w-auto" />
            </Link>
            <button className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-slate-900 transition-colors hover:bg-surface-muted active:bg-surface-muted dark:bg-[#1E293B] dark:text-[#F8FAFC]" onClick={close} type="button">
              <X size={24} />
            </button>
          </header>

          <div className="h-[calc(100%-64px)] overflow-y-auto">
              <div className="px-4 py-4">
                <div className="flex rounded-xl border border-border bg-surface-muted p-1 dark:bg-[#1E293B]">
                  <Link className="focus-ring flex-1 rounded-lg border border-border bg-surface py-2.5 text-center text-sm font-bold text-primary transition-colors hover:bg-surface-muted/60 active:bg-surface-muted dark:border-[#334155] dark:bg-[#334155] dark:text-white" href={`/${locale}/${pagePaths.retailBanking}`} onClick={close}>
                    {labels.retail}
                  </Link>
                  <Link className="focus-ring flex-1 rounded-lg py-2.5 text-center text-sm font-bold text-slate-500 transition-colors hover:bg-surface-muted/60 active:bg-surface-muted dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.corporateBanking}`} onClick={close}>
                    {labels.corporate}
                  </Link>
                </div>
              </div>

              <nav className="border-t border-border">
                <section className="border-b border-border">
                  <button className={`group flex w-full items-center justify-between px-4 py-5 transition-colors hover:bg-surface-muted/70 active:bg-surface-muted ${activeSection === 'accounts' ? 'bg-surface-muted/70 text-primary dark:bg-[#1E293B] dark:text-primary' : 'text-slate-900 dark:text-[#F8FAFC]'}`} onClick={() => toggleSection('accounts')} type="button">
                    <span className="flex items-center gap-3 text-[15px] font-extrabold"><Landmark size={20} /> {labels.accounts}</span>
                    <ChevronDown className={`transition-transform duration-200 group-hover:translate-y-0.5 ${activeSection === 'accounts' ? 'rotate-180' : ''}`} size={18} />
                  </button>
                  {activeSection === 'accounts' && (
                    <div className="bg-white px-4 pb-4 pt-1 dark:bg-[#111521]">
                      <ul className="ms-2.5 flex flex-col border-s-2 border-primary/20">
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.current}</Link></li>
                        <li>
                          <Link className="flex items-center justify-between bg-primary/5 py-3.5 ps-5 text-[14px] font-bold text-primary transition-colors hover:bg-primary/10" href={`/${locale}/${pagePaths.services}`} onClick={close}>
                            {menuCopy.savings}
                            <span className="me-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          </Link>
                        </li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.fixed}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.salary}</Link></li>
                      </ul>
                    </div>
                  )}
                </section>

                <section className="border-b border-border">
                  <button
                    className={`group flex w-full items-center justify-between px-4 py-5 transition-colors hover:bg-surface-muted/70 active:bg-surface-muted ${activeSection === 'financing' ? 'bg-surface-muted/70 text-primary dark:bg-[#1E293B] dark:text-primary' : 'text-slate-900 dark:text-[#F8FAFC]'}`}
                    onClick={() => toggleSection('financing')}
                    type="button"
                  >
                    <span className="flex items-center gap-3 text-[15px] font-bold">
                      <Wallet className="text-slate-400" size={20} />
                      {labels.financing}
                    </span>
                    <ChevronDown className={`text-slate-300 transition-transform duration-200 group-hover:translate-y-0.5 ${activeSection === 'financing' ? 'rotate-180 text-primary' : ''}`} size={18} />
                  </button>
                  {activeSection === 'financing' && (
                    <div className="bg-white px-4 pb-4 pt-1 dark:bg-[#111521]">
                      <ul className="ms-2.5 flex flex-col border-s-2 border-primary/20">
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.autoFinance}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.homeFinance}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.personalFinance}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.educationLoan}</Link></li>
                      </ul>
                    </div>
                  )}
                </section>

                <section className="border-b border-border">
                  <button
                    className={`group flex w-full items-center justify-between px-4 py-5 transition-colors hover:bg-surface-muted/70 active:bg-surface-muted ${activeSection === 'investment' ? 'bg-surface-muted/70 text-primary dark:bg-[#1E293B] dark:text-primary' : 'text-slate-900 dark:text-[#F8FAFC]'}`}
                    onClick={() => toggleSection('investment')}
                    type="button"
                  >
                    <span className="flex items-center gap-3 text-[15px] font-bold">
                      <TrendingUp className="text-slate-400" size={20} />
                      {labels.investment}
                    </span>
                    <ChevronDown className={`text-slate-300 transition-transform duration-200 group-hover:translate-y-0.5 ${activeSection === 'investment' ? 'rotate-180 text-primary' : ''}`} size={18} />
                  </button>
                  {activeSection === 'investment' && (
                    <div className="bg-white px-4 pb-4 pt-1 dark:bg-[#111521]">
                      <ul className="ms-2.5 flex flex-col border-s-2 border-primary/20">
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.wealth}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.treasury}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.services}`} onClick={close}>{menuCopy.reports}</Link></li>
                      </ul>
                    </div>
                  )}
                </section>

                <section className="border-b border-border">
                  <button
                    className={`group flex w-full items-center justify-between px-4 py-5 transition-colors hover:bg-surface-muted/70 active:bg-surface-muted ${activeSection === 'about' ? 'bg-surface-muted/70 text-primary dark:bg-[#1E293B] dark:text-primary' : 'text-slate-900 dark:text-[#F8FAFC]'}`}
                    onClick={() => toggleSection('about')}
                    type="button"
                  >
                    <span className="flex items-center gap-3 text-[15px] font-bold">
                      <Info className="text-slate-400" size={20} />
                      {labels.about}
                    </span>
                    <ChevronDown className={`text-slate-300 transition-transform duration-200 group-hover:translate-y-0.5 ${activeSection === 'about' ? 'rotate-180 text-primary' : ''}`} size={18} />
                  </button>
                  {activeSection === 'about' && (
                    <div className="bg-white px-4 pb-4 pt-1 dark:bg-[#111521]">
                      <ul className="ms-2.5 flex flex-col border-s-2 border-primary/20">
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.about}`} onClick={close}>{menuCopy.whoWeAre}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.about}`} onClick={close}>{menuCopy.leadership}</Link></li>
                        <li><Link className="block py-3.5 ps-5 text-[14px] font-semibold text-slate-600 dark:text-[#CBD5E1]" href={`/${locale}/${pagePaths.about}`} onClick={close}>{menuCopy.careers}</Link></li>
                      </ul>
                    </div>
                  )}
                </section>
              </nav>

              <div className="grid grid-cols-2 gap-3 border-b border-border bg-surface px-4 py-4 dark:bg-[#1E293B]/20">
                <Link className="focus-ring flex h-12 items-center gap-3 rounded-xl border border-border bg-surface px-4 transition-colors hover:bg-surface-muted/70 active:bg-surface-muted dark:bg-[#1E293B]" href={`/${locale}/${pagePaths.locations}`} onClick={close}>
                  <MapPin className="text-primary" size={20} />
                  <span className="text-[13px] font-bold text-slate-700 dark:text-[#CBD5E1]">{menuCopy.locations}</span>
                </Link>
                <Link className="focus-ring flex h-12 items-center gap-3 rounded-xl border border-border bg-surface px-4 transition-colors hover:bg-surface-muted/70 active:bg-surface-muted dark:bg-[#1E293B]" href={`/${locale}/${pagePaths.helpCenter}`} onClick={close}>
                  <Headphones className="text-primary" size={20} />
                  <span className="text-[13px] font-bold text-slate-700 dark:text-[#CBD5E1]">{menuCopy.support}</span>
                </Link>
              </div>

              <div className="space-y-3 border-t border-border bg-surface p-4 dark:bg-[#111521]">

              <Link href={`/${locale}/${pagePaths.services}`} onClick={close}>
                <Button className="h-12 w-full gap-3 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
                  <Lock size={22} /> {labels.login}
                </Button>
              </Link>
              </div>
          </div>
        </div>
      )}
    </>
  );
}
