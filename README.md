# ABADÁ Capoeira Belgique - Next.js 14

Complete Next.js 14 + Tailwind CSS site for ABADÁ Capoeira Belgique with Mestre Tigre.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with dark mode
- ✅ Framer Motion animations
- ✅ next-intl (FR/EN/PT)
- ✅ Mobile-first responsive design
- ✅ Azure deployment ready

## Installation

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deployment

Push to GitHub main branch. GitHub Actions auto-deploys to Azure.

## Structure

- `/app` - Next.js app router pages
- `/components` - React components
- `/messages` - i18n translation files
- `/config` - i18n configuration
- `.github/workflows` - CI/CD pipeline
- `middleware.ts` - Subdomain routing

## Environment

- Node.js 18+
- React 18
- Next.js 14
