# EDB Sudan Modern Website (Next.js)

## Folder Structure

- `app/` route tree with locale segments (`/en`, `/ar`) and 13 page routes.
- `components/` reusable layout and UI primitives.
- `modules/` Strapi block modules + block renderer.
- `lib/` i18n, theme, CMS client, utility helpers.
- `schemas/` Zod schemas for typed CMS payloads.
- `styles/` global CSS and design tokens.
- `types/` shared utility types.

## Run locally

```bash
pnpm install
pnpm dev
```

If Strapi is unavailable, local mock data is used for Home page blocks.
