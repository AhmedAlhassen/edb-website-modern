import Link from 'next/link';
import { Headphones, MapPin } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { ThemeToggle } from '@/components/providers/theme-toggle';
import { MobileNavMenu } from '@/components/layout/mobile-nav-menu';
import { DesktopNavWithMega } from '@/components/layout/desktop-nav-with-mega';
import { EdbLogo } from '@/components/layout/edb-logo';

type MegaColumn = {
  title: string;
  links: string[];
};

function getMegaMenu(locale: Locale): { accounts: MegaColumn[]; financing: MegaColumn[]; investment: MegaColumn[]; about: MegaColumn[] } {
  if (locale === 'ar') {
    return {
      accounts: [
        {
          title: 'الادخار والودائع',
          links: ['الحساب الجاري', 'حساب التوفير', 'الودائع الثابتة', 'تحويل الرواتب'],
        },
        {
          title: 'خدمات البطاقات',
          links: ['فيزا بلاتينوم', 'فيزا سيغنتشر', 'بطاقات مسبقة الدفع', 'أمان البطاقات'],
        },
        {
          title: 'الخدمات اليومية',
          links: ['التحويلات المحلية', 'التحويلات الدولية', 'دفع الفواتير', 'الخدمات الرقمية'],
        },
      ],
      financing: [
        {
          title: 'القروض الشخصية',
          links: ['تمويل السيارات', 'تمويل المنزل', 'التمويل الشخصي', 'قرض التعليم'],
        },
        {
          title: 'تمويل الأعمال',
          links: ['رأس المال العامل', 'تمويل التجارة', 'خطابات الاعتماد', 'قروض المؤسسات'],
        },
        {
          title: 'حلول متخصصة',
          links: ['تمويل المصدرين', 'تمويل المستوردين', 'تمويل سلاسل الإمداد', 'حلول الخزينة'],
        },
      ],
      investment: [
        {
          title: 'الاستثمار الشخصي',
          links: ['الودائع الاستثمارية', 'خطط الادخار', 'حسابات العائد', 'الاستثمار المتدرج'],
        },
        {
          title: 'استثمار الأعمال',
          links: ['حلول الخزينة', 'إدارة السيولة', 'منتجات الصرف', 'التحوط المالي'],
        },
        {
          title: 'الرؤى والتخطيط',
          links: ['تقارير السوق', 'تحليلات اقتصادية', 'استشارات استثمارية', 'خدمات مديري العلاقات'],
        },
      ],
      about: [
        {
          title: 'عن البنك',
          links: ['من نحن', 'القيادة', 'الوظائف', 'رسالتنا ورؤيتنا'],
        },
        {
          title: 'الشفافية والحوكمة',
          links: ['الحوكمة المؤسسية', 'الإفصاحات', 'التقارير السنوية', 'الامتثال'],
        },
        {
          title: 'مراكز الدعم',
          links: ['مركز المساعدة', 'إعلانات البنك', 'مركز الأمان', 'اتصل بنا'],
        },
      ],
    };
  }

  return {
    accounts: [
      {
        title: 'SAVINGS & DEPOSITS',
        links: ['Current Account', 'Savings Plus', 'Fixed Deposits', 'Salary Transfer'],
      },
      {
        title: 'CARD SERVICES',
        links: ['Visa Platinum', 'Visa Signature', 'Prepaid Cards', 'Card Security'],
      },
      {
        title: 'DAILY BANKING',
        links: ['Local Transfers', 'International Transfers', 'Bill Payments', 'Digital Services'],
      },
    ],
    financing: [
      {
        title: 'PERSONAL LOANS',
        links: ['Auto Finance', 'Home Finance', 'Personal Finance', 'Education Loan'],
      },
      {
        title: 'BUSINESS FINANCING',
        links: ['Working Capital', 'Trade Finance', 'Letters of Credit', 'Corporate Loans'],
      },
      {
        title: 'SPECIALIZED SOLUTIONS',
        links: ['Exporter Finance', 'Importer Finance', 'Supply Chain Finance', 'Treasury Support'],
      },
    ],
    investment: [
      {
        title: 'PERSONAL INVESTMENT',
        links: ['Investment Deposits', 'Savings Plans', 'Yield Accounts', 'Step-Up Investment'],
      },
      {
        title: 'BUSINESS INVESTMENT',
        links: ['Treasury Solutions', 'Liquidity Management', 'FX Products', 'Risk Hedging'],
      },
      {
        title: 'INSIGHTS & PLANNING',
        links: ['Market Reports', 'Economic Analysis', 'Investment Advisory', 'Relationship Support'],
      },
    ],
    about: [
      {
        title: 'ABOUT EDB',
        links: ['Who We Are', 'Leadership', 'Careers', 'Mission & Vision'],
      },
      {
        title: 'GOVERNANCE',
        links: ['Corporate Governance', 'Disclosures', 'Annual Reports', 'Compliance'],
      },
      {
        title: 'SUPPORT HUBS',
        links: ['Help Center', 'Announcements', 'Security Center', 'Contact Us'],
      },
    ],
  };
}

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const otherLocale: Locale = locale === 'en' ? 'ar' : 'en';
  const megaMenus = getMegaMenu(locale);
  const isAr = locale === 'ar';
  const mobileLabels = {
    branches: isAr ? 'الفروع' : 'Branches',
    support: isAr ? 'الدعم' : 'Support',
    logoSub: isAr ? 'بنك تنمية الصادرات' : 'Export Development Bank',
    alert: isAr ? 'منصة تمويل التجارة الجديدة متاحة الآن.' : 'New Trade Finance Portal is live.',
    updates: isAr ? 'التحديثات ←' : 'Updates →',
  };
  const desktopAlert = isAr
    ? 'نعمل على تعزيز عمليات التصدير عبر بوابة تمويل التجارة الجديدة. زر مكتب المساعدة للحصول على دعم الانتقال.'
    : 'Enhancing export operations with new Trade Finance Portal. Visit our help desk for migration assistance.';
  const desktopUpdates = isAr ? 'اقرأ التحديثات ←' : 'Read Updates →';
  const desktopAlertBadge = isAr ? 'تنبيه' : 'Alert';
  const promoLabels = {
    badge: isAr ? 'جديد' : 'NEW',
    title: isAr ? 'قدّم على تمويلك عبر الإنترنت' : 'Apply for Finance Online',
    description: isAr
      ? 'موافقة فورية للعملاء الحاليين مع حسابات تحويل الرواتب.'
      : 'Instant approval for existing customers with salary transfer accounts.',
    link: isAr ? 'اعرف المزيد ←' : 'Learn more →',
  };

  return (
    <header className="border-b border-border bg-surface">
      <div className="lg:hidden">
        <div className="border-b border-border bg-surface">
          <div className="mx-auto flex h-8 w-full max-w-[390px] items-center justify-between px-4 text-[10px] font-bold uppercase tracking-wider text-muted">
            <div className="flex h-full items-center">
              <span className="inline-flex h-full items-center gap-1 pe-3">
                <MapPin size={12} /> {mobileLabels.branches}
              </span>
              <span className="inline-flex h-full items-center gap-1 border-s border-border ps-3">
                <Headphones size={12} /> {mobileLabels.support}
              </span>
            </div>
            <div className="inline-flex items-center gap-3">
              <Link href={`/${otherLocale}`} className="focus-ring inline-flex items-center gap-1">
                <span className={locale === 'en' ? 'text-primary' : ''}>EN</span>
                <span className="text-border">|</span>
                <span className={locale === 'ar' ? 'text-primary' : ''}>عربي</span>
              </Link>
              <ThemeToggle className="h-auto min-w-0 border-0 bg-transparent p-0 text-muted hover:text-primary" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-14 w-full max-w-[390px] items-center justify-between px-4">
          <Link href={`/${locale}`} className="focus-ring inline-flex items-center">
            <EdbLogo locale={locale} width={156} height={52} className="h-10 w-auto" />
          </Link>
          <MobileNavMenu
            locale={locale}
            labels={{
              retail: t.nav.retail,
              corporate: t.nav.corporate,
              accounts: t.nav.accounts,
              financing: t.nav.financing,
              investment: t.nav.investment,
              about: t.nav.about,
              login: t.common.login,
            }}
          />
        </div>

        <div className="bg-[#07142d] px-4 py-2 text-white">
          <div className="mx-auto flex w-full max-w-[390px] items-center justify-between gap-2">
            <p className="truncate text-[9px] font-medium">{mobileLabels.alert}</p>
            <a href="#" className="focus-ring inline-flex items-center gap-1 whitespace-nowrap text-[9px] font-bold text-primary">
              {mobileLabels.updates}
            </a>
          </div>
        </div>
      </div>

      <div className="hidden border-b border-border bg-surface lg:block">
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between">
          <div className="flex items-center divide-x divide-border text-xs font-bold uppercase tracking-wider text-muted rtl:divide-x-reverse">
            <span className="inline-flex min-h-10 items-center gap-2 px-4">
              <MapPin size={13} /> {t.common.branches}
            </span>
            <span className="inline-flex min-h-10 items-center gap-2 px-4">
              <Headphones size={13} /> {t.common.supportLine}
            </span>
          </div>
          <div className="inline-flex min-h-10 items-center gap-4 px-4 text-xs font-bold uppercase tracking-wider text-muted">
            <Link href={`/${otherLocale}`} className="focus-ring inline-flex items-center gap-2">
              <span>EN</span>
              <span className="text-border">|</span>
              <span>عربي</span>
            </Link>
            <ThemeToggle className="h-auto min-w-0 border-0 bg-transparent p-0 text-muted hover:text-primary" />
          </div>
        </div>
      </div>

      <DesktopNavWithMega
        locale={locale}
        labels={{
          brand: 'EDB Sudan',
          brandSub: mobileLabels.logoSub,
          retail: t.nav.retail,
          corporate: t.nav.corporate,
          accounts: t.nav.accounts,
          financing: t.nav.financing,
          investment: t.nav.investment,
          about: t.nav.about,
          login: t.common.login,
          alertBadge: desktopAlertBadge,
          alertText: desktopAlert,
          alertLink: desktopUpdates,
          promoBadge: promoLabels.badge,
          promoTitle: promoLabels.title,
          promoDescription: promoLabels.description,
          promoLink: promoLabels.link,
        }}
        accountsColumns={megaMenus.accounts}
        financingColumns={megaMenus.financing}
        investmentColumns={megaMenus.investment}
        aboutColumns={megaMenus.about}
      />
    </header>
  );
}
