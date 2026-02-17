import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type LatestNewsBlockType = Extract<PageBlock, { type: 'latest-news' }>;

export function LatestNewsBlock({ block, locale }: { block: LatestNewsBlockType; locale: Locale }) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;

  return (
    <section className="w-full border-b border-border bg-surface px-4 py-14 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-primary">{block.eyebrow}</span>
            <h2 className="typo-title text-slate-900 dark:text-[#F8FAFC]">{block.title}</h2>
          </div>
          <Link
            href={`/${locale}/announcements-hub`}
            className="focus-ring hidden items-center gap-2 text-sm font-black uppercase tracking-widest text-primary transition-transform hover:translate-x-1 lg:inline-flex rtl:hover:-translate-x-1 rtl:hover:translate-x-0"
          >
            {block.viewAllLabel} <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-0 border border-border lg:grid-cols-3">
          {block.items.map((item) => (
            <article key={item.id} className="border-b border-e border-border p-8 transition-colors hover:bg-surface-muted/70 last:border-b-0 lg:last:border-b lg:last:border-e-0">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-[#94A3B8]">{item.date}</p>
              <h3 className="mb-4 text-xl font-black leading-tight text-slate-900 dark:text-[#F8FAFC]">{item.title}</h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-500 dark:text-[#CBD5E1]">{item.excerpt}</p>
              <Link href={item.href as never} className="focus-ring inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-primary group">
                {item.cta} <ArrowIcon size={16} className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
