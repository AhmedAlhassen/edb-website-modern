import type { Locale } from '@/lib/i18n/config';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-10 border-t border-border px-4 py-8 text-sm text-muted md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
        <p>© 2024 Export Development Bank Sudan</p>
        <p>{locale === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}</p>
      </div>
    </footer>
  );
}
