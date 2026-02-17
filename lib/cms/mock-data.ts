import type { CmsPage } from '@/schemas/blocks';

export const mockPages: CmsPage[] = [
  {
    slug: 'home',
    locale: 'en',
    blocks: [
      {
        type: 'hero-intent',
        title: "Banking that grows with Sudan's economy.",
        subtitle: 'Empowering exporters and local industries with innovative financial solutions and global trade expertise.',
        primaryCta: { label: 'Explore Services', href: '/en/services' },
        secondaryCta: { label: 'Contact Advisor', href: '/en/contact' },
      },
      {
        type: 'quick-actions',
        title: 'Quick Actions',
        actions: [
          { label: 'Open Account', href: '/en/retail-banking' },
          { label: 'Find ATM', href: '/en/locations' },
          { label: 'Service Status', href: '/en/service-status' },
          { label: 'Get Help', href: '/en/help-center' },
        ],
      },
      {
        type: 'announcement-rail',
        title: 'Announcements Rail',
        items: [
          { id: 'a1', category: 'Security', headline: 'Planned security maintenance', excerpt: 'Online services may be intermittently unavailable Friday 11PM-2AM.', href: '/en/security-center' },
          { id: 'a2', category: 'Product', headline: 'New exporter financing package', excerpt: 'Apply online with faster turnaround for approved exporters.', href: '/en/offers-rewards' },
        ],
      },
    ],
  },
  {
    slug: 'home',
    locale: 'ar',
    blocks: [
      {
        type: 'hero-intent',
        title: 'خدمات مصرفية تدعم نمو اقتصاد السودان.',
        subtitle: 'نمكّن المصدرين والصناعات المحلية عبر حلول مالية مبتكرة وخبرة واسعة في التجارة العالمية.',
        primaryCta: { label: 'استكشف الخدمات', href: '/ar/services' },
        secondaryCta: { label: 'تواصل مع مستشار', href: '/ar/contact' },
      },
      {
        type: 'quick-actions',
        title: 'إجراءات سريعة',
        actions: [
          { label: 'فتح حساب', href: '/ar/retail-banking' },
          { label: 'مواقع الصراف', href: '/ar/locations' },
          { label: 'حالة الخدمات', href: '/ar/service-status' },
          { label: 'مركز المساعدة', href: '/ar/help-center' },
        ],
      },
      {
        type: 'announcement-rail',
        title: 'شريط الإعلانات',
        items: [
          { id: 'a1', category: 'أمان', headline: 'صيانة أمنية مجدولة', excerpt: 'قد تتأثر بعض الخدمات الرقمية يوم الجمعة من ١١ مساءً إلى ٢ صباحًا.', href: '/ar/security-center' },
          { id: 'a2', category: 'منتج', headline: 'حزمة تمويل جديدة للمصدرين', excerpt: 'قدّم عبر الإنترنت مع وقت معالجة أسرع للعملاء المؤهلين.', href: '/ar/offers-rewards' },
        ],
      },
    ],
  },
];
