import type { PageBlock } from '@/schemas/blocks';
import { HeroIntentBlock } from './hero-intent-block';
import { QuickActionsBlock } from './quick-actions-block';
import { AnnouncementRailBlock } from './announcement-rail-block';

export function BlockRenderer({ blocks }: { blocks: PageBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'hero-intent':
            return <HeroIntentBlock key={`${block.type}-${index}`} block={block} />;
          case 'quick-actions':
            return <QuickActionsBlock key={`${block.type}-${index}`} block={block} />;
          case 'announcement-rail':
            return <AnnouncementRailBlock key={`${block.type}-${index}`} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
