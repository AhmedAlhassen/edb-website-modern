import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Extract } from '@/types/block-types';
import type { PageBlock } from '@/schemas/blocks';

type HeroBlock = Extract<PageBlock, { type: 'hero-intent' }>;

export function HeroIntentBlock({ block }: { block: HeroBlock }) {
  return (
    <section className="border-b border-border px-4 py-16 md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-4xl font-black tracking-tight md:text-7xl">{block.title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted">{block.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href={block.primaryCta.href}><Button>{block.primaryCta.label}</Button></Link>
          <Link href={block.secondaryCta.href}><Button variant="secondary">{block.secondaryCta.label}</Button></Link>
        </div>
      </div>
    </section>
  );
}
