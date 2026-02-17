import { z } from 'zod';

const ctaSchema = z.object({ label: z.string(), href: z.string() });

export const heroIntentBlockSchema = z.object({
  type: z.literal('hero-intent'),
  title: z.string(),
  subtitle: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema,
});

export const quickActionsBlockSchema = z.object({
  type: z.literal('quick-actions'),
  title: z.string(),
  actions: z.array(z.object({ label: z.string(), href: z.string() })),
});

export const announcementRailBlockSchema = z.object({
  type: z.literal('announcement-rail'),
  title: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      category: z.string(),
      headline: z.string(),
      excerpt: z.string(),
      href: z.string(),
    }),
  ),
});

export const pageBlockSchema = z.discriminatedUnion('type', [
  heroIntentBlockSchema,
  quickActionsBlockSchema,
  announcementRailBlockSchema,
]);

export type PageBlock = z.infer<typeof pageBlockSchema>;

export const pageSchema = z.object({
  slug: z.string(),
  locale: z.enum(['en', 'ar']),
  blocks: z.array(pageBlockSchema),
});

export type CmsPage = z.infer<typeof pageSchema>;
