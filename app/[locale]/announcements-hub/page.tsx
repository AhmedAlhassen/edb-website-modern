import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n/config';

const entries = {
  en: [
    { title: 'Exclusive discounts for EDB customers', tag: 'Offers', excerpt: 'Up to 30% partner discounts with EDB cards through international payment networks.' },
    { title: 'Digital trade financing is now available', tag: 'Bank News', excerpt: 'Apply online and reduce processing times for exporter financing requests.' },
    { title: 'Annual report 2024 published', tag: 'Reports', excerpt: 'Download the full annual report that outlines financial and market impact.' },
    { title: 'Mobile app UX update rollout', tag: 'Tech Update', excerpt: 'The new interface improves speed, accessibility, and transaction clarity.' },
  ],
  ar: [
    { title: 'خصومات حصرية لعملاء البنك', tag: 'عروض', excerpt: 'خصومات تصل إلى 30٪ مع شركائنا عند استخدام بطاقات البنك للشراء الدولي.' },
    { title: 'إطلاق التمويل التجاري الرقمي', tag: 'أخبار البنك', excerpt: 'قدّم طلبك عبر المنصة الجديدة لتسريع معالجة طلبات التمويل التجاري.' },
    { title: 'صدور التقرير السنوي 2024', tag: 'تقارير', excerpt: 'يمكنكم تحميل النسخة الكاملة للتقرير السنوي والاطلاع على أبرز النتائج.' },
    { title: 'تحديث واجهة تطبيق الهاتف', tag: 'تحديث تقني', excerpt: 'التحديث الجديد يوفّر تجربة أسلس مع وضوح أعلى لعملياتك المصرفية.' },
  ],
};

export default function Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const isAr = locale === 'ar';

  return (
    <section className="px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid max-w-[1300px] gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <h1 className="mb-4 border-b-2 border-text pb-3 text-4xl font-black md:text-6xl">
            {isAr ? 'مركز الإعلانات' : 'Announcements Hub'}
          </h1>
          <div className="grid gap-4 md:grid-cols-2">
            {entries[locale].map((entry) => (
              <Card key={entry.title} className="space-y-4">
                <span className="inline-flex rounded-sm bg-surface-muted px-2 py-1 text-xs font-bold text-primary">{entry.tag}</span>
                <h2 className="text-2xl font-black leading-tight">{entry.title}</h2>
                <p className="text-muted">{entry.excerpt}</p>
                <a className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-primary" href="#">
                  {isAr ? 'اقرأ المزيد ←' : 'Read more →'}
                </a>
              </Card>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <Card className="space-y-3">
            <h3 className="text-lg font-bold">{isAr ? 'تصفية الإعلانات' : 'Filter Announcements'}</h3>
            <Button className="w-full">{isAr ? 'الكل' : 'All'}</Button>
            <Button variant="secondary" className="w-full">{isAr ? 'أخبار البنك' : 'Bank News'}</Button>
            <Button variant="secondary" className="w-full">{isAr ? 'تحديثات تقنية' : 'Tech Updates'}</Button>
          </Card>
          <Card className="space-y-3">
            <h3 className="text-lg font-bold">{isAr ? 'النشرة الإخبارية' : 'Newsletter'}</h3>
            <input className="focus-ring min-h-11 w-full rounded-md border border-border bg-surface px-3" placeholder={isAr ? 'البريد الإلكتروني' : 'Email address'} />
            <Button className="w-full">{isAr ? 'اشتراك' : 'Subscribe'}</Button>
          </Card>
        </aside>
      </div>
    </section>
  );
}
