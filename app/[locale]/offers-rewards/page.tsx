import { PageShell } from '@/components/layout/page-shell';
import type { Locale } from '@/lib/i18n/config';

export default function Page({ params }: { params: { locale: Locale } }) {
  return <PageShell locale={params.locale} title='offers rewards' />;
}
