import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type AnnouncementRailType = Extract<PageBlock, { type: 'announcement-rail' }>;

export function AnnouncementRailBlock({ block }: { block: AnnouncementRailType }) {
  return (
    <section className="px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-5 border-b-2 border-text pb-2 text-2xl font-bold">{block.title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <Card key={item.id} className="space-y-4">
              <span className="inline-block rounded-sm bg-surface-muted px-2 py-1 text-xs font-semibold text-primary">{item.category}</span>
              <h3 className="text-xl font-bold">{item.headline}</h3>
              <p className="text-muted">{item.excerpt}</p>
              <Link href={item.href} className="focus-ring inline-flex min-h-11 items-center text-sm font-bold text-primary">
                Read more →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
