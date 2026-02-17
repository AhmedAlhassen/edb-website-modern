'use client';

import Link from 'next/link';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n/config';
import type { Extract } from '@/types/block-types';
import type { PageBlock } from '@/schemas/blocks';

type HeroBlock = Extract<PageBlock, { type: 'hero-intent' }>;

export function HeroIntentBlock({ block, locale }: { block: HeroBlock; locale: Locale }) {
  const isAr = locale === 'ar';
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    const fullText = block.title;
    if (!fullText) {
      setTypedTitle('');
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedTitle(fullText);
      return;
    }

    setTypedTitle('');
    let index = 0;
    const intervalMs = Math.max(24, Math.floor(1800 / fullText.length));
    const timer = window.setInterval(() => {
      index += 1;
      setTypedTitle(fullText.slice(0, index));
      if (index >= fullText.length) {
        window.clearInterval(timer);
      }
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [block.title]);

  const titleText = typedTitle || '\u00A0';
  const isTyping = typedTitle.length < block.title.length;
  const chartBars = [
    { height: '40%', light: 'bg-slate-100', dark: 'dark:bg-[#334155]' },
    { height: '60%', light: 'bg-slate-100', dark: 'dark:bg-[#334155]' },
    { height: '55%', light: 'bg-slate-200', dark: 'dark:bg-[#475569]' },
    { height: '90%', light: 'bg-primary', dark: '' },
    { height: '75%', light: 'bg-slate-100', dark: 'dark:bg-[#334155]' },
    { height: '65%', light: 'bg-slate-200', dark: 'dark:bg-[#475569]' },
    { height: '50%', light: 'bg-slate-100', dark: 'dark:bg-[#334155]' },
  ] as const;
  const labels = {
    badge: isAr ? 'ريادة التقدم' : 'Pioneering Progress',
    index: isAr ? 'مؤشر الصادرات السوداني' : 'Sudan Export Index',
    cardTitle: isAr ? 'الانضمام الرقمي' : 'Digital Onboarding',
    cardSubtitle: isAr ? 'تسريع نموك' : 'Fast tracking growth',
    mobileSubtitle: isAr
      ? 'نمكّن المصدرين عبر حلول مالية مبتكرة وأدوات رقمية حديثة.'
      : 'Empowering exporters with innovative financial solutions and digital-first tools.',
    desktopCardSubtitle: isAr ? 'تسريع نموك' : 'Fast tracking your growth',
  };

  return (
    <>
      <section className="border-b border-border bg-surface lg:hidden">
        <div className="bg-[radial-gradient(circle_at_top_right,rgba(29,79,215,0.08),transparent_70%)] px-4 pb-10 pt-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest text-primary">{labels.badge}</span>
          </span>
          <h1 className="typo-display mb-4 mt-4 text-slate-900 dark:text-[#F8FAFC]">
            <span className={isTyping ? 'typing-cursor' : ''}>{titleText}</span>
          </h1>
          <p className="typo-body-md mb-6 text-slate-500 dark:text-[#CBD5E1]">{labels.mobileSubtitle}</p>
          <div className="flex w-full flex-col gap-3">
            <Link href={block.primaryCta.href as never}><Button className="h-11 w-full text-[11px] font-black uppercase tracking-widest">{block.primaryCta.label}</Button></Link>
            <Link href={block.secondaryCta.href as never}><Button variant="secondary" className="h-11 w-full border-2 border-slate-900 text-[11px] font-black uppercase tracking-widest text-slate-900 dark:border-[#CBD5E1] dark:text-[#F8FAFC]">{block.secondaryCta.label}</Button></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-slate-50 p-4 dark:bg-[#1E293B]/50 lg:hidden">
        <article className="w-full rounded-xl border border-border bg-surface p-5 shadow-lg dark:bg-[#1E293B]">
          <div className="mb-6 flex items-start justify-between">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:border dark:border-primary/30 dark:bg-primary/20 dark:text-primary">
              <TrendingUp size={16} />
            </span>
            <div className="text-end">
              <p className="typo-caption uppercase text-slate-500 dark:text-[#CBD5E1]">{labels.index}</p>
              <p className="text-lg font-black text-slate-900 dark:text-[#F8FAFC]">+14.2%</p>
            </div>
          </div>
          <div className="mb-6 grid h-24 grid-cols-7 items-end gap-1.5">
            {chartBars.map((bar, index) => (
              <span
                key={`mobile-chart-bar-${index}`}
                className={`chart-bar-anim rounded-t ${bar.light} ${bar.dark}`}
                style={{ height: bar.height, animationDelay: `${index * 90}ms` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 dark:border-[#334155]">
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC]">{labels.cardTitle}</p>
              <p className="typo-caption text-slate-500 dark:text-[#CBD5E1]">{labels.cardSubtitle}</p>
            </div>
            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-primary transition-colors hover:bg-surface-muted/70 active:bg-surface-muted dark:border-[#334155]">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5"
              />
            </span>
          </div>
        </article>
      </section>

      <section className="hidden overflow-hidden border-b border-border bg-surface dark:bg-[#0F172A] lg:block">
        <div className="mx-auto grid min-h-[600px] w-full max-w-[1360px] gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-e border-border px-12 py-14 lg:px-16 lg:py-20">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">{labels.badge}</span>
            </span>
            <h1 className="typo-display mt-8 max-w-[540px] text-[#0b1530] dark:text-[#F8FAFC]">
              <span className={isTyping ? 'typing-cursor' : ''}>{titleText}</span>
            </h1>
            <p className="typo-body mt-8 max-w-[560px] text-slate-500 dark:text-[#CBD5E1]">{block.subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={block.primaryCta.href as never}><Button className="min-w-[220px] px-10 py-5 text-sm font-black uppercase tracking-[0.14em] shadow-xl shadow-primary/20">{block.primaryCta.label}</Button></Link>
              <Link href={block.secondaryCta.href as never}><Button variant="secondary" className="min-w-[220px] border-2 border-slate-900 px-10 py-5 text-sm font-black uppercase tracking-[0.14em] text-slate-900 hover:bg-slate-900 hover:text-white dark:border-[#CBD5E1] dark:text-[#F8FAFC] dark:hover:bg-[#F8FAFC] dark:hover:text-[#0F172A]">{block.secondaryCta.label}</Button></Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center bg-slate-50 p-8 dark:bg-[#1E293B]/50">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,79,215,0.1),transparent_55%)]" />
            <article className="relative w-full max-w-lg rounded-2xl border border-border bg-surface p-8 shadow-2xl dark:bg-[#1E293B]">
              <div className="mb-12 flex items-start justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1633] text-white dark:border dark:border-primary/30 dark:bg-primary/20 dark:text-primary">
                  <TrendingUp size={18} />
                </span>
                <div className="text-end">
                  <p className="typo-label text-muted dark:text-[#CBD5E1]">{labels.index}</p>
                  <p className="text-4xl font-black text-[#0a1633] dark:text-[#F8FAFC]">+14.2%</p>
                </div>
              </div>
              <div className="grid h-[220px] grid-cols-7 items-end gap-2">
                {chartBars.map((bar, index) => (
                  <span
                    key={`desktop-chart-bar-${index}`}
                    className={`chart-bar-anim rounded-t ${index === 0 || index === 1 || index === 4 || index === 6 ? 'bg-surface-muted' : bar.light} ${bar.dark}`}
                    style={{ height: bar.height, animationDelay: `${index * 90}ms` }}
                  />
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-8 dark:border-[#334155]">
                <div>
                  <p className="text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">{labels.cardTitle}</p>
                  <p className="text-xs text-slate-500 dark:text-[#CBD5E1]">{labels.desktopCardSubtitle}</p>
                </div>
                <span className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-text transition-colors hover:bg-surface-muted/70 active:bg-surface-muted dark:border-[#334155] dark:text-[#F8FAFC]">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1 group-active:-translate-y-1"
                  />
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
