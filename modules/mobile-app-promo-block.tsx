import { CheckCircle2, QrCode, Smartphone } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type MobileAppPromoBlockType = Extract<PageBlock, { type: 'mobile-app-promo' }>;

export function MobileAppPromoBlock({ block, locale }: { block: MobileAppPromoBlockType; locale: Locale }) {
  const isAr = locale === 'ar';

  return (
    <section className="w-full overflow-hidden border-b border-border bg-[#F1F5F9] dark:bg-[#0F172A]">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="grid items-center lg:grid-cols-2">
          <div className="border-e border-border p-10 lg:p-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded bg-primary/10 px-3 py-1 text-primary">
              <Smartphone size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest">{block.eyebrow}</span>
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-slate-900 dark:text-[#F8FAFC] lg:text-5xl">{block.title}</h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-slate-600 dark:text-[#CBD5E1]">{block.description}</p>
            {block.features?.length ? (
              <ul className="mb-8 space-y-3">
                {block.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-[#CBD5E1]">
                    <CheckCircle2 size={16} className="text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="flex flex-wrap items-center gap-4">
              <a className="focus-ring inline-flex items-center gap-3 rounded-lg bg-slate-900 px-6 py-3 text-white transition-all hover:bg-black" href="#">
                <div className="text-start">
                  <p className="mb-0.5 text-[10px] font-bold uppercase leading-none">{block.appStoreSubLabel}</p>
                  <p className="text-sm font-black leading-none">{block.appStoreLabel}</p>
                </div>
              </a>
              <a className="focus-ring inline-flex items-center gap-3 rounded-lg bg-slate-900 px-6 py-3 text-white transition-all hover:bg-black" href="#">
                <div className="text-start">
                  <p className="mb-0.5 text-[10px] font-bold uppercase leading-none">{block.playStoreSubLabel}</p>
                  <p className="text-sm font-black leading-none">{block.playStoreLabel}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-12 p-10 lg:p-20">
            <div className="relative hidden h-80 w-48 rounded-[2.5rem] border-[6px] border-slate-800 bg-slate-900 shadow-2xl md:block">
              <div className="absolute left-1/2 top-0 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-slate-800" />
              <div className="p-4 pt-8">
                <div className="mb-4 h-4 w-full rounded bg-slate-700" />
                <div className="mb-4 h-24 w-full rounded-lg bg-primary/20" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 rounded bg-slate-800" />
                  <div className="h-16 rounded bg-slate-800" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block border border-border bg-surface p-4 shadow-sm dark:bg-[#1E293B]">
                <div className="flex h-32 w-32 items-center justify-center bg-slate-900 text-white">
                  <QrCode size={72} />
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-[#94A3B8]">{block.qrLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
