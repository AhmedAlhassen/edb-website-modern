import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type AnnouncementRailType = Extract<PageBlock, { type: 'announcement-rail' }>;

export function AnnouncementRailBlock({ block, locale }: { block: AnnouncementRailType; locale: Locale }) {
  const isAr = locale === 'ar';
  const labels = {
    navTitle: isAr ? 'مستكشف المنتجات' : 'Product Navigator',
    mobileTitle: isAr ? 'الحلول المالية' : 'Financial Solutions',
    desktopTitle: isAr ? 'حلول مالية مصممة لك' : 'Financial Solutions Tailored to You',
    personal: isAr ? 'الأفراد' : 'Personal',
    business: isAr ? 'الأعمال' : 'Business',
    industrial: isAr ? 'الصناعي' : 'Industrial',
    featured: isAr ? 'مميز' : 'FEATURED',
    secondaryPoints: isAr ? ['خصم الفواتير', 'رصيد أدنى صفر', 'خدمات الكونسيرج'] : ['Bill discounting', 'Zero minimum balance', 'Concierge Services'],
    ctas: isAr ? ['استكشف التمويل', 'عرض الأسعار', 'قدّم الآن'] : ['Explore Financing', 'View Rates', 'Apply Now'],
  };

  return (
    <>
      <section className="bg-[#fcfcfd] px-4 py-12 dark:bg-[#0F172A] lg:hidden">
        <div className="mb-8 text-center">
          <p className="typo-label text-primary">{labels.navTitle}</p>
          <h2 className="typo-title mt-2 text-slate-900 dark:text-[#F8FAFC]">{labels.mobileTitle}</h2>
        </div>
        <div className="flex flex-col gap-4">
          {block.items.map((item, index) => (
            <Card key={item.id} className={`relative rounded-xl bg-surface p-5 shadow-md ${index === 2 ? 'shadow-lg shadow-primary/20 dark:shadow-primary/20' : 'dark:bg-[#1E293B]'}`}>
              {index === 2 && (
                <div className="absolute right-0 top-0">
                  <div className="translate-x-5 translate-y-1 rotate-45 bg-primary px-4 py-0.5 text-[7px] font-black text-white">{labels.featured}</div>
                </div>
              )}
              <h3 className="mb-2 text-base font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC]">{item.category}</h3>
              <p className="typo-body-md mb-5 text-slate-500 dark:text-[#CBD5E1]">{item.excerpt}</p>
              <ul className="mb-5 space-y-2">
                <li className="typo-body-md flex items-center gap-2 text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 size={14} className="text-primary" />
                  {item.headline}
                </li>
              </ul>
              <Link
                href={item.href as never}
                className={`focus-ring typo-caption inline-flex h-11 w-full items-center justify-center rounded uppercase ${
                  index === 2
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface text-slate-900 shadow-sm transition-colors hover:bg-surface-muted/70 active:bg-surface-muted dark:bg-[#25324a] dark:text-[#F8FAFC]'
                }`}
              >
                {labels.ctas[index]}
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="hidden bg-[#fcfcfd] px-8 py-24 dark:bg-[#0F172A] lg:block">
        <div className="mx-auto w-full max-w-[1360px]">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="typo-label text-primary">{labels.navTitle}</p>
              <h2 className="typo-title mt-4 text-slate-900 dark:text-[#F8FAFC]">{labels.desktopTitle}</h2>
            </div>
            <div className="inline-flex rounded-md bg-surface p-1 text-xs shadow-sm dark:bg-[#1E293B]">
              <button className="rounded-md bg-[#0a1633] px-6 py-2 font-bold text-white shadow-sm dark:bg-primary">{labels.personal}</button>
              <button className="rounded-md px-6 py-2 font-bold text-muted hover:bg-slate-50 dark:text-[#CBD5E1] dark:hover:bg-[#334155]">{labels.business}</button>
              <button className="rounded-md px-6 py-2 font-bold text-muted hover:bg-slate-50 dark:text-[#CBD5E1] dark:hover:bg-[#334155]">{labels.industrial}</button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
          {block.items.map((item, index) => (
            <Card
              key={item.id}
              className={`relative flex h-full flex-col rounded-xl bg-surface p-8 shadow-md ${
                index === 2 ? 'shadow-2xl shadow-primary/10 dark:shadow-primary/20' : 'hover:shadow-xl dark:bg-[#1E293B]'
              }`}
            >
              {index === 2 && (
                <div className="absolute right-0 top-0">
                  <div className="translate-x-8 translate-y-4 rotate-45 bg-primary px-4 py-1 text-[10px] font-black text-white">{labels.featured}</div>
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">{item.category}</h3>
              <p className="typo-body-md mb-8 mt-4 flex-1 text-slate-500 dark:text-[#CBD5E1]">{item.excerpt}</p>
              <ul className="mb-8 space-y-3">
                <li className="typo-body-md flex items-center gap-3 text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 size={18} className="text-primary" />
                  {item.headline}
                </li>
                <li className="typo-body-md flex items-center gap-3 text-slate-700 dark:text-[#CBD5E1]">
                  <CheckCircle2 size={18} className="text-primary" />
                  {labels.secondaryPoints[index]}
                </li>
              </ul>
              <Link
                href={item.href as never}
                className={`focus-ring typo-body-md inline-flex min-h-12 w-full items-center justify-center rounded-lg px-4 font-semibold shadow-sm ${
                  index === 2 ? 'bg-primary text-white hover:bg-blue-700' : 'bg-surface text-slate-900 hover:text-primary dark:bg-[#25324a] dark:text-[#F8FAFC]'
                }`}
              >
                {labels.ctas[index]}
              </Link>
            </Card>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
