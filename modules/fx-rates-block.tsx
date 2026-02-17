import { ArrowDown, ArrowUp, CircleDollarSign, Minus } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type FxRatesBlockType = Extract<PageBlock, { type: 'fx-rates' }>;

export function FxRatesBlock({ block, locale }: { block: FxRatesBlockType; locale: Locale }) {
  const isAr = locale === 'ar';
  const orderedRates = isAr ? [...block.rates].reverse() : block.rates;

  const trendMeta = {
    up: {
      Icon: ArrowUp,
      color: 'text-emerald-600',
    },
    down: {
      Icon: ArrowDown,
      color: 'text-rose-600',
    },
    flat: {
      Icon: Minus,
      color: 'text-slate-400',
    },
  } as const;

  return (
    <>
      <section className="border-b border-border bg-[#F8FAFC] dark:bg-[#0F172A] lg:hidden">
        <div className="border-b border-border bg-surface px-4 py-3 dark:bg-[#0F172A]">
          <div className="flex items-center gap-2">
            <CircleDollarSign size={14} className="text-primary" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 dark:text-[#F8FAFC]">
              {block.title} <span className="ms-1 text-slate-400 dark:text-[#94A3B8]">({block.liveLabel})</span>
            </h3>
          </div>
        </div>

        <div className="fx-ticker overflow-hidden bg-surface dark:bg-[#0F172A]" dir="ltr">
          <div className={`fx-marquee fx-ticker-speed-mobile ${isAr ? 'fx-marquee-rtl' : 'fx-marquee-ltr'}`}>
            {[0, 1].map((copy) => (
              <div key={copy} className="fx-marquee-group">
                {orderedRates.map((rate, index) => {
                  const meta = trendMeta[rate.trend];
                  return (
                    <div key={`${copy}-${rate.pair}-${index}`} className="flex min-w-[220px] items-center justify-between border-e border-border px-4 py-3 transition-colors hover:bg-surface-muted/70 dark:hover:bg-[#1E293B]">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-[#CBD5E1]">{rate.pair}</span>
                        <div className={`mt-1 inline-flex items-center gap-1 text-[10px] font-bold ${meta.color}`}>
                          <meta.Icon size={12} />
                          <span>{rate.change}</span>
                        </div>
                      </div>
                      <div className="flex items-end gap-5">
                        <div className="text-end">
                          <p className="text-[9px] font-black uppercase tracking-tight text-slate-400 dark:text-[#94A3B8]">{rate.buyLabel}</p>
                          <p className="text-xs font-black tracking-tight text-slate-900 dark:text-[#F8FAFC]">{rate.buy}</p>
                        </div>
                        <div className="text-end">
                          <p className="text-[9px] font-black uppercase tracking-tight text-slate-400 dark:text-[#94A3B8]">{rate.sellLabel}</p>
                          <p className="text-xs font-black tracking-tight text-slate-900 dark:text-[#F8FAFC]">{rate.sell}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden border-b border-border bg-[#F8FAFC] dark:bg-[#0F172A] lg:block">
        <div className="mx-auto flex h-14 w-full max-w-[1360px] overflow-hidden">
          <div className="flex min-w-[280px] items-center border-e border-border bg-surface px-8 dark:bg-[#0F172A]">
            <div className="flex items-center gap-2">
              <CircleDollarSign size={14} className="text-primary" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-900 dark:text-[#F8FAFC]">
                {block.title} <span className="ms-1 text-slate-400 dark:text-[#94A3B8]">({block.liveLabel})</span>
              </h3>
            </div>
          </div>

          <div className="fx-ticker flex-1 overflow-hidden bg-surface dark:bg-[#0F172A]" dir="ltr">
            <div className={`fx-marquee fx-ticker-speed-desktop ${isAr ? 'fx-marquee-rtl' : 'fx-marquee-ltr'}`}>
              {[0, 1].map((copy) => (
                <div key={copy} className="fx-marquee-group">
                  {orderedRates.map((rate, index) => {
                    const meta = trendMeta[rate.trend];
                    return (
                      <div
                        key={`${copy}-${rate.pair}-${index}`}
                        className="flex min-w-[270px] items-center justify-between border-e border-border px-6 py-3 transition-colors hover:bg-surface-muted/70 dark:hover:bg-[#1E293B]"
                      >
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-[#CBD5E1]">{rate.pair}</span>
                          <div className={`inline-flex items-center gap-1 text-[10px] font-bold ${meta.color}`}>
                            <meta.Icon size={12} />
                            <span>{rate.change}</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="text-end">
                            <p className="text-[9px] font-black uppercase tracking-tight text-slate-400 dark:text-[#94A3B8]">{rate.buyLabel}</p>
                            <p className="text-xs font-black tracking-tight text-slate-900 dark:text-[#F8FAFC]">{rate.buy}</p>
                          </div>
                          <div className="text-end">
                            <p className="text-[9px] font-black uppercase tracking-tight text-slate-400 dark:text-[#94A3B8]">{rate.sellLabel}</p>
                            <p className="text-xs font-black tracking-tight text-slate-900 dark:text-[#F8FAFC]">{rate.sell}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
