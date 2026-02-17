import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type TrustMetricsBlockType = Extract<PageBlock, { type: 'trust-metrics' }>;

export function TrustMetricsBlock({ block, locale }: { block: TrustMetricsBlockType; locale: Locale }) {
  const isAr = locale === 'ar';

  return (
    <section className="w-full border-b border-border bg-surface px-4 py-12 dark:bg-[#0F172A] lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="mb-8 flex flex-col gap-3 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="typo-label text-primary">{block.eyebrow}</p>
            <h2 className="typo-title mt-3 text-slate-900 dark:text-[#F8FAFC]">{block.title}</h2>
          </div>
        </div>

        <div className="grid gap-0 border border-border sm:grid-cols-2 lg:grid-cols-4">
          {block.metrics.map((metric, index) => (
            <article
              key={`${metric.label}-${index}`}
              className="border-b border-e border-border p-6 transition-colors hover:bg-surface-muted/70 last:border-b-0 sm:last:border-b sm:[&:nth-child(2n)]:border-e-0 lg:border-b-0 lg:[&:not(:last-child)]:border-e"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-[#94A3B8]">{metric.label}</p>
              <p className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-[#F8FAFC]">{metric.value}</p>
              {metric.note ? (
                <p className={`mt-2 text-xs text-slate-500 dark:text-[#CBD5E1] ${isAr ? 'leading-7' : ''}`}>{metric.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
