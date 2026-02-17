import type { Locale } from './config';

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    announcements: string;
    about: string;
    contact: string;
    retail: string;
    corporate: string;
    accounts: string;
    financing: string;
    investment: string;
  };
  common: {
    login: string;
    search: string;
    theme: string;
    locale: string;
    readMore: string;
    supportLine: string;
    branches: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    quickActionsTitle: string;
    announcementsTitle: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      announcements: 'Announcements',
      about: 'About Us',
      contact: 'Contact',
      retail: 'Retail',
      corporate: 'Corporate',
      accounts: 'Accounts',
      financing: 'Financing',
      investment: 'Investment',
    },
    common: {
      login: 'Digital Banking',
      search: 'Search announcements...',
      theme: 'Theme',
      locale: 'Language',
      readMore: 'Read more',
      supportLine: 'Support: +249 183 777 000',
      branches: 'Branches & ATMs',
    },
    home: {
      heroTitle: "Banking that grows with Sudan's economy.",
      heroSubtitle:
        'Empowering exporters and local industries with innovative financial solutions and global trade expertise.',
      primaryCta: 'Explore Services',
      secondaryCta: 'Contact Advisor',
      quickActionsTitle: 'Quick Actions',
      announcementsTitle: 'Announcements Rail',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      announcements: 'الإعلانات',
      about: 'عن البنك',
      contact: 'اتصل بنا',
      retail: 'الأفراد',
      corporate: 'الشركات',
      accounts: 'الحسابات',
      financing: 'التمويل',
      investment: 'الاستثمار',
    },
    common: {
      login: 'الخدمات الرقمية',
      search: '...بحث في الإعلانات',
      theme: 'السمة',
      locale: 'اللغة',
      readMore: 'اقرأ المزيد',
      supportLine: 'الدعم: +249 183 777 000',
      branches: 'الفروع وأجهزة الصراف',
    },
    home: {
      heroTitle: 'خدمات مصرفية تدعم نمو اقتصاد السودان.',
      heroSubtitle:
        'نمكّن المصدرين والصناعات المحلية عبر حلول مالية مبتكرة وخبرة واسعة في التجارة العالمية.',
      primaryCta: 'استكشف الخدمات',
      secondaryCta: 'تواصل مع مستشار',
      quickActionsTitle: 'إجراءات سريعة',
      announcementsTitle: 'شريط الإعلانات',
    },
  },
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
