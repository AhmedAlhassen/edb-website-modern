'use client';

import Link from 'next/link';
import {
  Banknote,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Landmark,
  ReceiptText,
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type QuickActionsBlockType = Extract<PageBlock, { type: 'quick-actions' }>;

export function QuickActionsBlock({ block, locale }: { block: QuickActionsBlockType; locale: Locale }) {
  const isAr = locale === 'ar';
  const CTAArrow = isAr ? ChevronLeft : ChevronRight;

  const fallbacks = isAr
    ? [
        { label: 'التمويل', subtitle: 'اكتشف خيارات التمويل', campaign: 'قدّم على تمويلك', campaignSub: 'شخصي - منزل - سيارة' },
        { label: 'الحسابات', subtitle: 'اكتشف الحسابات', campaign: 'افتح حسابك', campaignSub: 'من خلال تطبيقنا' },
        { label: 'البطاقات', subtitle: 'اكتشف البطاقات', campaign: 'قدّم على بطاقتك', campaignSub: 'أميال - استرداد - نقاط' },
        { label: 'التحويلات', subtitle: 'اكتشف التحويلات', campaign: 'تحويلات أسرع', campaignSub: 'محلي ودولي' },
        { label: 'الودائع', subtitle: 'اكتشف الودائع', campaign: 'نمِّ مدخراتك', campaignSub: 'حلول ادخار مرنة' },
        { label: 'الحماية', subtitle: 'اكتشف الحماية', campaign: 'حماية حساباتك', campaignSub: 'أمان رقمي متقدم' },
      ]
    : [
        { label: 'Finance', subtitle: 'Discover Finance', campaign: 'Apply For Your Finance', campaignSub: 'Personal - Home - Auto' },
        { label: 'Accounts', subtitle: 'Discover Accounts', campaign: 'Open Your Account', campaignSub: 'Through Our App' },
        { label: 'Cards', subtitle: 'Discover Cards', campaign: 'Apply For Your Card', campaignSub: 'Miles - Cashback - Points' },
        { label: 'Transfers', subtitle: 'Discover Transfers', campaign: 'Move Money Faster', campaignSub: 'Local and Global' },
        { label: 'Deposits', subtitle: 'Discover Deposits', campaign: 'Grow Your Savings', campaignSub: 'Flexible Deposit Plans' },
        { label: 'Security', subtitle: 'Discover Security', campaign: 'Protect Your Banking', campaignSub: 'Advanced Digital Safety' },
      ];

  const iconSet = [WalletCards, ReceiptText, CreditCard, Banknote, Landmark, ShieldCheck] as const;
  const iconBgSet = ['bg-[#1BA9E8]', 'bg-[#FF4E78]', 'bg-[#22C55E]', 'bg-[#0EA5E9]', 'bg-[#6366F1]', 'bg-[#F59E0B]'] as const;
  const imageSet = [
    "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80')",
    "url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80')",
    "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80')",
    "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80')",
    "url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80')",
    "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80')",
  ] as const;

  const cards = useMemo(() => {
    const base = Array.from({ length: 6 }, (_, i) => {
      const action = block.actions[i];
      const fallback = fallbacks[i];
      return {
        title: fallback.label,
        href: action?.href ?? '#',
        subtitle: fallback.subtitle,
        campaign: fallback.campaign,
        campaignSub: fallback.campaignSub,
        Icon: iconSet[i % iconSet.length],
        iconBg: iconBgSet[i % iconBgSet.length],
        image: imageSet[i % imageSet.length],
      };
    });
    return base;
  }, [block.actions, fallbacks]);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const canSlide = cards.length > visibleCount;

  const visibleCards = useMemo(() => {
    if (!canSlide) return cards;
    return Array.from({ length: visibleCount }, (_, i) => cards[(startIndex + i) % cards.length]);
  }, [cards, canSlide, startIndex]);

  const goPrev = () => {
    if (!canSlide) return;
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goNext = () => {
    if (!canSlide) return;
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <>
      <section className="border-b border-border bg-surface px-4 py-10 dark:bg-[#0F172A] lg:hidden">
        <div className="mb-5 text-center">
          <p className="text-xl font-bold text-[#12235D] dark:text-[#F8FAFC]">{isAr ? 'الإجراءات السريعة' : 'Quick Actions'}</p>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {cards.map((item) => (
            <article key={item.title} className="relative h-[440px] min-w-[82vw] snap-start overflow-hidden rounded-[22px] border border-[#d7deef] bg-[#E9EEF8] shadow-md dark:border-[#334155] dark:bg-[#1E293B]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: item.image }} />
              <div className="absolute inset-0 bg-white/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between p-5">
                <div className="text-center text-[#0B1530]">
                  <h3 className="text-[17px] font-bold leading-tight">{item.campaign}</h3>
                  <p className="mt-1 text-[11px]">{item.campaignSub}</p>
                </div>
                <Link href={item.href as never} className="focus-ring inline-flex items-center justify-between rounded-2xl bg-white px-5 py-3 text-[#12235D] shadow-md">
                  <span className="inline-flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white ${item.iconBg}`}>
                      <item.Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-[17px] font-bold text-[#0B1530]">{item.title}</span>
                      <span className="block text-[11px] text-slate-500">{item.subtitle}</span>
                    </span>
                  </span>
                  <CTAArrow size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hidden border-b border-border bg-surface px-8 py-14 dark:bg-[#0F172A] lg:block">
        <div className="mx-auto w-full max-w-[1360px]">
          <div className="relative px-12">
            <button
              onClick={goPrev}
              className="focus-ring absolute -left-1 top-1/2 z-20 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#1BA9E8] text-white disabled:opacity-40"
              disabled={!canSlide}
            >
              <ChevronLeft size={26} />
            </button>
            <button
              onClick={goNext}
              className="focus-ring absolute -right-1 top-1/2 z-20 inline-flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#1BA9E8] text-white disabled:opacity-40"
              disabled={!canSlide}
            >
              <ChevronRight size={26} />
            </button>

            <div className="grid grid-cols-3 gap-8 overflow-visible">
            {visibleCards.map((item, index) => {
              const isLeft = index === 0;
              const isRight = index === 2;
              return (
                <div key={`${item.title}-${index}`} className="relative isolate overflow-visible">
                  {isLeft ? (
                    <>
                      <span className="pointer-events-none absolute -left-8 top-8 z-0 h-[92%] w-full rounded-[24px] border border-[#d2daec] bg-[#e0e8f6]" />
                      <span className="pointer-events-none absolute -left-4 top-4 z-[1] h-[96%] w-full rounded-[24px] border border-[#d8dfef] bg-[#e8eef9]" />
                    </>
                  ) : null}
                  {isRight ? (
                    <>
                      <span className="pointer-events-none absolute -right-8 top-8 z-0 h-[92%] w-full rounded-[24px] border border-[#d2daec] bg-[#e0e8f6]" />
                      <span className="pointer-events-none absolute -right-4 top-4 z-[1] h-[96%] w-full rounded-[24px] border border-[#d8dfef] bg-[#e8eef9]" />
                    </>
                  ) : null}
                  <article
                    className="relative z-10 overflow-hidden rounded-[24px] border border-[#d7deef] bg-[#E9EEF8] shadow-xl transition-all duration-500 dark:border-[#334155] dark:bg-[#1E293B]"
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: item.image }} />
                    <div className="absolute inset-0 bg-white/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-7">
                    <div className="text-center text-[#0B1530]">
                      <h3 className="text-[15px] font-bold leading-[1.2] tracking-tight">{item.campaign}</h3>
                      <p className="mt-1.5 text-[11px]">{item.campaignSub}</p>
                    </div>

                    <Link href={item.href as never} className="focus-ring inline-flex items-center justify-between rounded-3xl bg-white px-6 py-4 text-[#12235D] shadow-lg">
                      <span className="inline-flex items-center gap-4">
                        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-white ${item.iconBg}`}>
                          <item.Icon size={22} />
                        </span>
                        <span>
                          <span className="block text-[15px] font-bold leading-tight text-[#0B1530]">{item.title}</span>
                          <span className="block text-[11px] leading-tight text-slate-500">{item.subtitle}</span>
                        </span>
                      </span>
                      <CTAArrow size={26} />
                    </Link>
                  </div>
                  </article>
                </div>
              );
            })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {cards.map((_, i) => (
              <span key={i} className={`inline-block rounded-full ${i === startIndex ? 'h-4 w-4 bg-[#0F1F64]' : 'h-4 w-4 bg-slate-300'}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
