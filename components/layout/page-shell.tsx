import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/lib/i18n/config';
import { getPageContent, type PageKey } from '@/lib/page-content';

export function PageShell({ page, locale }: { page: PageKey; locale: Locale }) {
  const content = getPageContent(locale, page);

  return (
    <section className="border-b border-border px-4 py-10 md:px-8">
      <div className="mx-auto max-w-[1200px] border border-border bg-surface">
        <div className="border-b border-border px-6 py-8 md:px-10 md:py-10">
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-4xl text-lg text-muted">{content.subtitle}</p>
        </div>
        <div className="grid gap-0 md:grid-cols-3">
          {content.points.map((point) => (
            <Card key={point} className="rounded-none border-0 border-e border-b md:min-h-[180px]">
              <p className="text-base font-bold">{point}</p>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 border-t border-border px-6 py-6 md:px-10">
          <Button>{locale === 'ar' ? 'ابدأ الآن' : 'Get Started'}</Button>
          <Button variant="secondary">{locale === 'ar' ? 'اطّلع على التفاصيل' : 'View Details'}</Button>
        </div>
      </div>
    </section>
  );
}
