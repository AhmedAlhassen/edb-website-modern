import type { PageBlock } from '@/schemas/blocks';
import type { Locale } from '@/lib/i18n/config';
import { HeroIntentBlock } from './hero-intent-block';
import { FxRatesBlock } from './fx-rates-block';
import { QuickActionsBlock } from './quick-actions-block';
import { AnnouncementRailBlock } from './announcement-rail-block';
import { LatestNewsBlock } from './latest-news-block';
import { MobileAppPromoBlock } from './mobile-app-promo-block';
import { TrustMetricsBlock } from './trust-metrics-block';

export function BlockRenderer({ blocks, locale }: { blocks: PageBlock[]; locale: Locale }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'hero-intent':
            return <HeroIntentBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          case 'quick-actions':
            return <QuickActionsBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          case 'fx-rates':
            return <FxRatesBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          case 'trust-metrics':
            return <TrustMetricsBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          case 'announcement-rail':
            return <AnnouncementRailBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          case 'latest-news':
            return <LatestNewsBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          case 'mobile-app-promo':
            return <MobileAppPromoBlock key={`${block.type}-${index}`} block={block} locale={locale} />;
          default:
            return null;
        }
      })}
    </>
  );
}
