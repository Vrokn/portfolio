# Portfolio - Mateo Gomez Ossa

Personal portfolio refactored to a modern, SEO-oriented setup using Next.js with static export.

## Why this stack

- Better SEO baseline than legacy CRA setup.
- Fast static deployment to GitHub Pages.
- Cleaner, data-driven structure for projects, skills and experience updates.
- Easier long-term maintenance with TypeScript.

## Tech

- Next.js (static export)
- React 19
- TypeScript
- CSS Modules
- GitHub Pages (`gh-pages`)

## Project structure

- `src/pages` route entrypoints
- `src/components` reusable UI grouped by domain (`effects`, `layout`, `sections`)
- `src/components/**/ComponentName/` component folder pattern:
- `ComponentName.tsx`, `ComponentName.module.css`, `index.ts`
- `src/components/index.ts` and nested `index.ts` barrel exports
- `src/data/portfolioData.ts` CV-driven content source
- `src/styles` global and module styles
- `public` static SEO assets (`robots.txt`, `sitemap.xml`, image assets)

## Local development

```bash
yarn install
yarn dev
```

## Quality checks

```bash
yarn typecheck
yarn lint
yarn build
```

## GitHub Pages deploy

```bash
yarn deploy
```

Deployment flow:

1. `yarn predeploy` runs `yarn build:gh`
2. `build:gh` builds with `GITHUB_PAGES=true` to apply `basePath=/portfolio`
3. Static output from `out/` is published to `gh-pages`

## Content updates

Most of the portfolio content is centralized in:

- `src/data/portfolioData.ts`

Update this file to edit:

- Intro/about text
- Skills badges
- Projects list
- Experience timeline
- Contact links
