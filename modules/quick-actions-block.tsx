import Link from 'next/link';
import { Banknote, ChevronLeft, ChevronRight, CreditCard, ReceiptText, WalletCards } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type QuickActionsBlockType = Extract<PageBlock, { type: 'quick-actions' }>;

export function QuickActionsBlock({ block, locale }: { block: QuickActionsBlockType; locale: Locale }) {
  const isAr = locale === 'ar';
  const ArrowIcon = isAr ? ChevronLeft : ChevronRight;
  const mobileTitles = isAr ? ['التحويلات', 'سداد الفواتير', 'البطاقات', 'أسعار العملات'] : ['Transfers', 'Bill Pay', 'Cards', 'FX Rates'];
  const mobileDescriptions = isAr ? ['محلي وسويفت.', 'تسويات فورية.', 'إدارة بطاقات فيزا.', 'بيانات السوق.'] : ['Local and SWIFT.', 'Instant settlements.', 'Manage Visa cards.', 'Market data.'];
  const mobileCtas = isAr ? ['اذهب', 'ادفع', 'إدارة', 'الأسعار'] : ['Go', 'Pay', 'Manage', 'Rates'];
  const desktopDescriptions = isAr
    ? [
        'تحويلات محلية ودولية عبر سويفت بأسعار تنافسية.',
        'سداد فواتير الخدمات والرسوم الحكومية فورًا.',
        'إدارة بطاقات فيزا وضبط حدود المعاملات.',
        'أسعار صرف مباشرة لاحتياجات الاستيراد والتصدير.',
      ]
    : [
        'Local and international SWIFT transfers at competitive rates.',
        'Settle utility bills and government fees instantly.',
        'Manage your Visa cards and set transaction limits.',
        'Real-time FX rates for your export-import needs.',
      ];
  const desktopCtas = isAr ? ['أرسل الأموال', 'ادفع الآن', 'عرض البطاقات', 'تحقق من الأسعار'] : ['Send Money', 'Pay Now', 'View Cards', 'Check Rates'];

  const meta = [
    {
      Icon: WalletCards,
      title: block.actions[0]?.label ?? (isAr ? 'التحويلات' : 'Transfers'),
      href: block.actions[0]?.href ?? '#',
    },
    {
      Icon: ReceiptText,
      title: block.actions[1]?.label ?? (isAr ? 'سداد الفواتير' : 'Bill Payments'),
      href: block.actions[1]?.href ?? '#',
    },
    {
      Icon: CreditCard,
      title: block.actions[2]?.label ?? (isAr ? 'البطاقات' : 'Cards'),
      href: block.actions[2]?.href ?? '#',
    },
    {
      Icon: Banknote,
      title: block.actions[3]?.label ?? (isAr ? 'العملات الأجنبية' : 'Foreign Exchange'),
      href: block.actions[3]?.href ?? '#',
    },
  ];

  return (
    <>
      <section className="bg-surface dark:bg-[#0F172A] lg:hidden">
        <div className="grid grid-cols-2 gap-3 p-3">
          {meta.map(({ Icon, title, href }, index) => (
            <Link key={title} href={href as never} className="group">
              <article className="rounded-xl bg-surface p-6 shadow-sm transition-colors hover:bg-surface-muted/60 active:bg-surface-muted dark:bg-[#1E293B]">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded bg-primary/10 text-primary dark:bg-primary/20">
                  <Icon size={18} />
                </span>
                <h3 className="mb-1 text-sm font-black text-slate-900 dark:text-[#F8FAFC]">{mobileTitles[index]}</h3>
                <p className="typo-body-md mb-3 text-slate-500 dark:text-[#CBD5E1]">{mobileDescriptions[index]}</p>
                <span className="typo-caption inline-flex items-center gap-1 uppercase text-primary">
                  {mobileCtas[index]}{' '}
                  <ArrowIcon
                    size={10}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:group-active:-translate-x-0.5"
                  />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="hidden bg-surface px-8 py-4 dark:bg-[#0F172A] lg:block">
        <div className="mx-auto grid w-full max-w-[1360px] grid-cols-4 gap-4">
          {meta.map(({ Icon, title, href }, index) => (
            <Link key={title} href={href as never} className="group">
              <article className="min-h-[270px] rounded-xl bg-surface p-10 shadow-sm transition-colors hover:bg-slate-50 dark:bg-[#1E293B] dark:hover:bg-[#1E293B]">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded bg-primary/10 text-primary transition-transform group-hover:scale-110 dark:bg-primary/20">
                  <Icon size={22} />
                </span>
                <h3 className="mb-2 text-lg font-bold leading-[1.2] text-slate-900 dark:text-[#F8FAFC]">{title}</h3>
                <p className="typo-body-md mb-6 text-slate-500 dark:text-[#CBD5E1]">{desktopDescriptions[index]}</p>
                <span className="typo-label inline-flex items-center gap-1 text-primary">
                  {desktopCtas[index]}{' '}
                  <ArrowIcon
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-1 rtl:group-hover:-translate-x-1 rtl:group-active:-translate-x-1"
                  />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
