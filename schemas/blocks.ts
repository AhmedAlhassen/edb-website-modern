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

export const fxRatesBlockSchema = z.object({
  type: z.literal('fx-rates'),
  title: z.string(),
  liveLabel: z.string(),
  rates: z.array(
    z.object({
      pair: z.string(),
      trend: z.enum(['up', 'down', 'flat']),
      change: z.string(),
      buyLabel: z.string(),
      sellLabel: z.string(),
      buy: z.string(),
      sell: z.string(),
    }),
  ),
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

export const latestNewsBlockSchema = z.object({
  type: z.literal('latest-news'),
  title: z.string(),
  eyebrow: z.string(),
  viewAllLabel: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      date: z.string(),
      title: z.string(),
      excerpt: z.string(),
      href: z.string(),
      cta: z.string(),
    }),
  ),
});

export const mobileAppPromoBlockSchema = z.object({
  type: z.literal('mobile-app-promo'),
  eyebrow: z.string(),
  title: z.string(),
  description: z.string(),
  features: z.array(z.string()).optional(),
  appStoreLabel: z.string(),
  appStoreSubLabel: z.string(),
  playStoreLabel: z.string(),
  playStoreSubLabel: z.string(),
  qrLabel: z.string(),
});

export const trustMetricsBlockSchema = z.object({
  type: z.literal('trust-metrics'),
  eyebrow: z.string(),
  title: z.string(),
  metrics: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      note: z.string().optional(),
    }),
  ),
});

export const pageBlockSchema = z.discriminatedUnion('type', [
  heroIntentBlockSchema,
  fxRatesBlockSchema,
  trustMetricsBlockSchema,
  quickActionsBlockSchema,
  announcementRailBlockSchema,
  latestNewsBlockSchema,
  mobileAppPromoBlockSchema,
]);

export type PageBlock = z.infer<typeof pageBlockSchema>;

export const pageSchema = z.object({
  slug: z.string(),
  locale: z.enum(['en', 'ar']),
  blocks: z.array(pageBlockSchema),
});

export type CmsPage = z.infer<typeof pageSchema>;
