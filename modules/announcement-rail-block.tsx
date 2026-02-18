'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type AnnouncementRailType = Extract<PageBlock, { type: 'announcement-rail' }>;

export function AnnouncementRailBlock({ block, locale }: { block: AnnouncementRailType; locale: Locale }) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const defaultActiveIndex = useMemo(() => Math.max(0, block.items.length - 1), [block.items.length]);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  useEffect(() => {
    setActiveIndex(defaultActiveIndex);
  }, [defaultActiveIndex, locale]);
  const labels = {
    navTitle: isAr ? 'اختر تجربتك' : 'Choose your experience',
    mobileTitle: isAr ? 'الحلول المالية' : 'Financial Solutions',
    desktopTitle: isAr ? 'حلول مالية مصممة لك' : 'Financial Solutions Tailored to You',
    personal: isAr ? 'الأفراد' : 'Personal',
    business: isAr ? 'الأعمال' : 'Business',
    industrial: isAr ? 'الصناعي' : 'Industrial',
    learnMore: isAr ? 'اعرف المزيد' : 'Learn More',
  };
  const cardThemes = [
    {
      bg: 'from-[#1E4ED8] via-[#3B66F0] to-[#9DB3FF]',
      image:
        "url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80')",
    },
    {
      bg: 'from-[#7A7D87] via-[#A6A8AF] to-[#D3D4D9]',
      image:
        "url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80')",
    },
    {
      bg: 'from-[#7C7A8F] via-[#A4A4B4] to-[#D9DCE6]',
      image:
        "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80')",
    },
    {
      bg: 'from-[#060D6A] via-[#20289A] to-[#4D58D2]',
      image:
        "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80')",
    },
    {
      bg: 'from-[#064E3B] via-[#0F766E] to-[#34D399]',
      image:
        "url('https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=900&q=80')",
    },
  ] as const;

  return (
    <>
      <section className="bg-surface px-4 py-12 dark:bg-[#0F172A] lg:hidden">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-slate-600 dark:text-[#CBD5E1]">{labels.navTitle}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-[#F8FAFC]">{labels.mobileTitle}</h2>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
          {block.items.map((item, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div key={item.id} className="group relative h-[440px] min-w-[280px] snap-start">
                <article
                  className={`relative z-0 mx-auto h-full w-full overflow-hidden rounded-[24px] border border-slate-200/70 bg-gradient-to-br ${theme.bg} shadow-xl transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform group-hover:z-10 group-hover:shadow-2xl dark:border-[#334155]`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-85 transition-opacity duration-300"
                    style={{ backgroundImage: `${theme.image}` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <div className="max-w-[94%] rounded-2xl bg-white/95 p-4 shadow-md">
                      <h3 className="text-lg font-bold tracking-tight text-[#0B1530]">{item.category}</h3>
                      <p className="mt-1 text-xs font-medium text-[#1C2C63]">{item.headline}</p>
                    </div>
                    <div className="flex justify-center">
                      <Link
                        href={item.href as never}
                        className="focus-ring inline-flex items-center rounded-xl bg-primary px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
                      >
                        {labels.learnMore}
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>

      <section className="hidden bg-surface px-8 py-24 dark:bg-[#0F172A] lg:block">
        <div className="mx-auto w-full max-w-[1360px]">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-center text-2xl font-semibold text-slate-600 dark:text-[#CBD5E1]">{labels.navTitle}</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-[#F8FAFC]">{labels.desktopTitle}</h2>
            </div>
            <div className="inline-flex rounded-md border border-border bg-surface p-1 text-xs dark:bg-[#1E293B]">
              <button className="rounded-md bg-[#0a1633] px-6 py-2 font-bold text-white dark:bg-primary">{labels.personal}</button>
              <button className="rounded-md px-6 py-2 font-bold text-muted hover:bg-slate-50 dark:text-[#CBD5E1] dark:hover:bg-[#334155]">{labels.business}</button>
              <button className="rounded-md px-6 py-2 font-bold text-muted hover:bg-slate-50 dark:text-[#CBD5E1] dark:hover:bg-[#334155]">{labels.industrial}</button>
            </div>
          </div>

          <div className="flex gap-6 overflow-visible pb-2" onMouseLeave={() => setActiveIndex(defaultActiveIndex)}>
            {block.items.map((item, index) => {
              const theme = cardThemes[index % cardThemes.length];
              const isActive = index === activeIndex;
              const flexShare = isActive ? 'flex-[1.5]' : 'flex-1';
              return (
                <div
                  key={item.id}
                  className={`group relative h-[720px] min-w-0 basis-0 ${flexShare} transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <article
                    className={`relative h-full w-full overflow-hidden rounded-[30px] border border-slate-200/70 bg-gradient-to-br ${theme.bg} shadow-xl transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform dark:border-[#334155] ${
                      isActive ? 'z-10 shadow-2xl' : 'z-0'
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-90 transition-opacity duration-300"
                      style={{ backgroundImage: `${theme.image}` }}
                    />
                    <div className={`absolute inset-0 ${isActive ? 'bg-gradient-to-t from-black/35 via-black/5 to-transparent' : 'bg-gradient-to-t from-black/50 via-black/15 to-transparent'}`} />

                    <div className="relative z-10 flex h-full flex-col justify-between p-8">
                      {isActive ? (
                        <div className="max-w-[92%] rounded-3xl bg-white/95 p-6 shadow-lg">
                          <h3 className="text-xl font-bold tracking-tight text-[#0B1530]">{item.category}</h3>
                          <p className="mt-2 text-sm font-medium text-[#1C2C63]">{item.headline}</p>
                        </div>
                      ) : (
                        <div className="max-w-[88%]">
                          <h3 className="text-lg font-bold text-white">{item.category}</h3>
                          <p className="mt-2 text-xs text-white/90">{item.headline}</p>
                        </div>
                      )}

                      <div className={`flex items-center ${isActive ? 'justify-center' : 'justify-center'}`}>
                        {isActive ? (
                          <Link
                            href={item.href as never}
                            className="focus-ring inline-flex items-center rounded-xl bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700"
                          >
                            {labels.learnMore}
                          </Link>
                        ) : (
                          <Link
                            href={item.href as never}
                            className="focus-ring inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-slate-700 transition-all hover:scale-105 hover:bg-white"
                          >
                            <ArrowIcon size={26} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
