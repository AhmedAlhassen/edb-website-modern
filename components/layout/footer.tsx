import Link from 'next/link';
import { Globe, Share2 } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { EdbLogo } from '@/components/layout/edb-logo';

export function Footer({ locale }: { locale: Locale }) {
  const isAr = locale === 'ar';
  const labels = {
    bank: isAr ? 'بنك تنمية الصادرات' : 'EDB Sudan',
    hq: isAr ? 'المقر: الخرطوم، السودان' : 'Headquarters: Khartoum, Sudan',
    addr1: isAr ? 'قطعة 12، بلوك 4، شارع المشتل' : 'Plot 12, Block 4, Al-Mashtal Street',
    addr2: isAr ? 'صندوق بريد 2733' : 'P.O. Box 2733',
    personal: isAr ? 'الخدمات المصرفية للأفراد' : 'Personal Banking',
    trade: isAr ? 'التجارة والأعمال' : 'Trade & Business',
    legal: isAr ? 'القانون والأمن' : 'Legal & Security',
    personalLinks: isAr ? ['الحسابات الجارية', 'التمويل الشخصي', 'بطاقات الخصم والائتمان', 'إدارة الثروات'] : ['Current Accounts', 'Personal Finance', 'Debit & Credit Cards', 'Wealth Management'],
    tradeLinks: isAr ? ['تمويل الصادرات', 'خطابات الاعتماد', 'خزينة الشركات', 'خدمات التجار'] : ['Export Financing', 'Letters of Credit', 'Corporate Treasury', 'Merchant Services'],
    legalLinks: isAr ? ['سياسة الخصوصية', 'شروط الاستخدام', 'نصائح الأمان', 'الإفصاحات'] : ['Privacy Policy', 'Terms of Use', 'Security Tips', 'Disclosures'],
    rights: isAr ? 'منظّم من بنك السودان المركزي' : 'Regulated by the Central Bank of Sudan',
  };

  return (
    <footer className="border-t border-border bg-slate-50 dark:bg-[#1E293B]">
      <div className="px-4 py-10 lg:hidden">
        <div className="space-y-10">
          <div className="space-y-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <EdbLogo locale={locale} width={170} height={56} className="h-12 w-auto" />
            </div>
            <p className="text-[10px] font-medium leading-relaxed text-slate-500 dark:text-[#CBD5E1]">
              {labels.hq}
              <br />
              {labels.addr1}
              <br />
              {labels.addr2}
            </p>
            <div className="flex justify-center gap-3">
              <button className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded border border-border text-slate-400 dark:text-[#CBD5E1]">
                <Share2 size={16} />
              </button>
              <button className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded border border-border text-slate-400 dark:text-[#CBD5E1]">
                <Globe size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h3 className="mb-4 border-b border-slate-200 pb-2 text-[9px] font-black uppercase tracking-widest text-slate-900 dark:border-[#334155] dark:text-[#F8FAFC]">{labels.personal}</h3>
              <ul className="space-y-3">
                <li><Link href={`/${locale}/services`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.personalLinks[0]}</Link></li>
                <li><Link href={`/${locale}/services`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.personalLinks[1]}</Link></li>
                <li><Link href={`/${locale}/services`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.personalLinks[2]}</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="mb-4 border-b border-slate-200 pb-2 text-[9px] font-black uppercase tracking-widest text-slate-900 dark:border-[#334155] dark:text-[#F8FAFC]">{labels.trade}</h3>
              <ul className="space-y-3">
                <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.tradeLinks[0]}</Link></li>
                <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.tradeLinks[1]}</Link></li>
                <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.tradeLinks[2]}</Link></li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="mb-4 border-b border-slate-200 pb-2 text-[9px] font-black uppercase tracking-widest text-slate-900 dark:border-[#334155] dark:text-[#F8FAFC]">{labels.legal}</h3>
              <ul className="space-y-3">
                <li><Link href={`/${locale}/security-center`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.legalLinks[0]}</Link></li>
                <li><Link href={`/${locale}/security-center`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.legalLinks[1]}</Link></li>
                <li><Link href={`/${locale}/security-center`} className="focus-ring text-[10px] font-bold text-slate-500 dark:text-[#CBD5E1]">{labels.legalLinks[2]}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden px-8 py-20 lg:block">
        <div className="mx-auto grid w-full max-w-[1360px] gap-12 md:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-3">
              <EdbLogo locale={locale} width={190} height={64} className="h-14 w-auto" />
            </div>
            <p className="mt-6 text-xs font-medium leading-loose text-slate-500 dark:text-[#CBD5E1]">
              {labels.hq}
              <br />
              {labels.addr1}
              <br />
              {labels.addr2}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded border border-border text-slate-400 hover:text-primary dark:text-[#CBD5E1]">
                <Share2 size={14} />
              </button>
              <button className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded border border-border text-slate-400 hover:text-primary dark:text-[#CBD5E1]">
                <Globe size={14} />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-[#F8FAFC]">{labels.personal}</h3>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/services`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.personalLinks[0]}</Link></li>
              <li><Link href={`/${locale}/services`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.personalLinks[1]}</Link></li>
              <li><Link href={`/${locale}/services`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.personalLinks[2]}</Link></li>
              <li><Link href={`/${locale}/services`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.personalLinks[3]}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-[#F8FAFC]">{labels.trade}</h3>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.tradeLinks[0]}</Link></li>
              <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.tradeLinks[1]}</Link></li>
              <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.tradeLinks[2]}</Link></li>
              <li><Link href={`/${locale}/corporate-banking`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.tradeLinks[3]}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-xs font-black uppercase tracking-[0.18em] text-slate-900 dark:text-[#F8FAFC]">{labels.legal}</h3>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/security-center`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.legalLinks[0]}</Link></li>
              <li><Link href={`/${locale}/security-center`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.legalLinks[1]}</Link></li>
              <li><Link href={`/${locale}/security-center`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.legalLinks[2]}</Link></li>
              <li><Link href={`/${locale}/security-center`} className="focus-ring text-xs font-bold text-slate-500 hover:text-primary dark:text-[#CBD5E1]">{labels.legalLinks[3]}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-surface py-6 text-center dark:bg-[#0F172A] lg:py-8">
        <p className="text-[8px] font-black uppercase tracking-widest leading-relaxed text-slate-500 dark:text-[#475569] lg:text-[10px] lg:tracking-[0.2em]">
          © 2024 {labels.bank} | {labels.rights}
        </p>
      </div>
    </footer>
  );
}
