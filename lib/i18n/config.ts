export const locales = ['en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { dir: 'ltr' | 'rtl'; label: string }> = {
  en: { dir: 'ltr', label: 'EN' },
  ar: { dir: 'rtl', label: 'AR' },
};

export const defaultLocale: Locale = 'en';

export const pagePaths = {
  home: '',
  about: 'about',
  services: 'services',
  retailBanking: 'retail-banking',
  corporateBanking: 'corporate-banking',
  locations: 'locations',
  contact: 'contact',
  announcementsHub: 'announcements-hub',
  securityCenter: 'security-center',
  helpCenter: 'help-center',
  serviceStatus: 'service-status',
  financialWellness: 'financial-wellness',
  offersRewards: 'offers-rewards',
} as const;
