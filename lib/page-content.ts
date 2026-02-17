import type { Locale } from './i18n/config';

export type PageKey =
  | 'about'
  | 'services'
  | 'retail-banking'
  | 'corporate-banking'
  | 'locations'
  | 'contact'
  | 'announcements-hub'
  | 'security-center'
  | 'help-center'
  | 'service-status'
  | 'financial-wellness'
  | 'offers-rewards';

type PageContent = {
  title: string;
  subtitle: string;
  points: string[];
};

const EN: Record<PageKey, PageContent> = {
  'about': {
    title: 'About EDB Sudan',
    subtitle: 'A trusted export development banking partner built for structural clarity and public confidence.',
    points: ['Institution profile', 'Leadership and governance', 'Mandate and strategic pillars'],
  },
  'services': {
    title: 'Banking Services',
    subtitle: 'Modular services for exporters, businesses, and retail customers with transparent eligibility.',
    points: ['Accounts and deposits', 'Loans and financing', 'Cards and digital banking'],
  },
  'retail-banking': {
    title: 'Retail Banking',
    subtitle: 'Daily banking products for individuals with strong security defaults and clear pricing.',
    points: ['Current and savings accounts', 'Personal finance and cards', 'Online and mobile services'],
  },
  'corporate-banking': {
    title: 'Corporate Banking',
    subtitle: 'Trade-aligned banking products for SMEs and larger institutions operating in Sudan.',
    points: ['Working capital solutions', 'Trade instruments', 'Treasury support'],
  },
  'locations': {
    title: 'Branch & ATM Locations',
    subtitle: 'Searchable service points across Sudan with routing and accessibility details.',
    points: ['Branch details', 'ATM map', 'Directions and opening hours'],
  },
  'contact': {
    title: 'Contact & Escalation',
    subtitle: 'Reach EDB through verified channels with transparent case tracking and SLA expectations.',
    points: ['Support phone and email', 'Escalation path', 'Complaint form'],
  },
  'announcements-hub': {
    title: 'Announcements Hub',
    subtitle: 'Time-sensitive notices, product updates, and operational communications.',
    points: ['Critical alerts', 'Product updates', 'Policy notices'],
  },
  'security-center': {
    title: 'Security Center',
    subtitle: 'Advisories and scam-awareness guidance to keep customer interactions protected.',
    points: ['Security notices', 'Fraud prevention guides', 'Report suspicious activity'],
  },
  'help-center': {
    title: 'Help Center',
    subtitle: 'Self-service answers and guided support entry for issues across banking channels.',
    points: ['FAQ and intents', 'Case submission', 'Resolution updates'],
  },
  'service-status': {
    title: 'Service Status',
    subtitle: 'Live visibility for channels, incidents, and resolution timelines.',
    points: ['Channel status summary', 'Incident timeline', 'Maintenance schedule'],
  },
  'financial-wellness': {
    title: 'Financial Wellness',
    subtitle: 'Educational content and planning tools to improve long-term financial outcomes.',
    points: ['Budgeting guides', 'Debt planning', 'Savings habit tools'],
  },
  'offers-rewards': {
    title: 'Offers & Rewards',
    subtitle: 'Campaigns and card offers presented with clear eligibility and legal disclosures.',
    points: ['Current offers', 'Rewards catalog', 'Offer legal terms'],
  },
};

const AR: Record<PageKey, PageContent> = {
  'about': {
    title: 'عن بنك تنمية الصادرات',
    subtitle: 'شريك مصرفي موثوق يدعم التنمية عبر هيكل واضح وتجربة دقيقة.',
    points: ['نبذة المؤسسة', 'القيادة والحوكمة', 'الرؤية والمحاور الاستراتيجية'],
  },
  'services': {
    title: 'الخدمات المصرفية',
    subtitle: 'خدمات معيارية للأفراد والشركات والمصدرين مع وضوح الشروط والأهلية.',
    points: ['الحسابات والودائع', 'القروض والتمويل', 'البطاقات والخدمات الرقمية'],
  },
  'retail-banking': {
    title: 'الخدمات المصرفية للأفراد',
    subtitle: 'منتجات يومية للأفراد مع إعدادات أمان افتراضية وتجربة موثوقة.',
    points: ['الحساب الجاري والتوفير', 'التمويل الشخصي والبطاقات', 'الخدمات عبر الإنترنت والجوال'],
  },
  'corporate-banking': {
    title: 'الخدمات المصرفية للشركات',
    subtitle: 'حلول مصرفية داعمة للتجارة للمؤسسات الصغيرة والمتوسطة والشركات الكبرى.',
    points: ['تمويل رأس المال العامل', 'أدوات التجارة', 'دعم الخزانة'],
  },
  'locations': {
    title: 'مواقع الفروع والصرافات',
    subtitle: 'نقاط الخدمة في السودان مع الاتجاهات وساعات العمل وتفاصيل الوصول.',
    points: ['تفاصيل الفروع', 'خريطة أجهزة الصراف', 'الاتجاهات ومواعيد العمل'],
  },
  'contact': {
    title: 'التواصل والتصعيد',
    subtitle: 'تواصل عبر القنوات المعتمدة مع مسار واضح للتصعيد وتتبع الحالة.',
    points: ['الهاتف والبريد', 'مسار التصعيد', 'نموذج الشكاوى'],
  },
  'announcements-hub': {
    title: 'مركز الإعلانات',
    subtitle: 'تنبيهات مهمة وتحديثات المنتجات والإشعارات التشغيلية.',
    points: ['تنبيهات حرجة', 'تحديثات المنتجات', 'إشعارات السياسات'],
  },
  'security-center': {
    title: 'مركز الأمان',
    subtitle: 'إرشادات وتوعية لمكافحة الاحتيال وحماية التفاعل الرقمي للعملاء.',
    points: ['تنبيهات أمنية', 'أدلة مكافحة الاحتيال', 'الإبلاغ عن نشاط مشبوه'],
  },
  'help-center': {
    title: 'مركز المساعدة',
    subtitle: 'إجابات ذاتية ومدخل دعم موجّه لحل المشكلات عبر القنوات المصرفية.',
    points: ['الأسئلة الشائعة', 'تقديم طلب دعم', 'متابعة الحل'],
  },
  'service-status': {
    title: 'حالة الخدمات',
    subtitle: 'عرض مباشر لحالة القنوات والحوادث وجداول الصيانة.',
    points: ['ملخص القنوات', 'الخط الزمني للحوادث', 'الصيانة المجدولة'],
  },
  'financial-wellness': {
    title: 'الصحة المالية',
    subtitle: 'محتوى توعوي وأدوات تخطيط لتحسين النتائج المالية على المدى الطويل.',
    points: ['أدلة الميزانية', 'تنظيم الديون', 'خطط الادخار'],
  },
  'offers-rewards': {
    title: 'العروض والمكافآت',
    subtitle: 'حملات وعروض بطاقات مع توضيح الشروط والأحكام القانونية.',
    points: ['العروض الحالية', 'مكافآت البطاقات', 'الشروط القانونية'],
  },
};

export function getPageContent(locale: Locale, page: PageKey): PageContent {
  return locale === 'ar' ? AR[page] : EN[page];
}
