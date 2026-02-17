import type { Locale } from '@/lib/i18n/config';

export function PageShell({ title, locale }: { title: string; locale: Locale }) {
  return (
    <section className="mx-auto max-w-6xl border-x border-b border-border bg-surface px-6 py-16">
      <h1 className="text-4xl font-black">{title}</h1>
      <p className="mt-4 text-muted">
        {locale === 'ar' ? 'سيتم تحميل هذه الصفحة من وحدات Strapi القابلة لإعادة الاستخدام.' : 'This page is wired for Strapi block rendering and ready for module composition.'}
      </p>
    </section>
  );
}
