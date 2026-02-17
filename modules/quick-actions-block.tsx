import Link from 'next/link';
import { Card } from '@/components/ui/card';
import type { PageBlock } from '@/schemas/blocks';
import type { Extract } from '@/types/block-types';

type QuickActionsBlockType = Extract<PageBlock, { type: 'quick-actions' }>;

export function QuickActionsBlock({ block }: { block: QuickActionsBlockType }) {
  return (
    <section className="border-b border-border px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-5 text-2xl font-bold">{block.title}</h2>
        <div className="grid gap-3 md:grid-cols-4">
          {block.actions.map((action) => (
            <Link key={action.href} href={action.href}>
              <Card className="min-h-24 transition hover:border-primary">
                <p className="font-semibold">{action.label}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
