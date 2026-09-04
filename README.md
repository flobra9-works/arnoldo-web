# Gelateria Arnoldo — Website

Premium German marketing site for Gelateria Arnoldo in Wien-Hernals. The job of this site is salon visits, not online ordering.

v1 is German only. No i18n, no CMS, no blog, no delivery, no Gelatobox booking product.

## Stack

Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui, Vitest, Playwright. Deploy on Vercel from this repo root. No secrets required for v1.

## Scripts (package.json)

- dev — local server at port 3000
- test — Vitest unit tests once
- test:watch — Vitest watch
- test:e2e — Playwright smoke (starts the Next.js dev server)
- lint — Next.js lint
- build / start — production

## Routes

- / Home
- /eissorten Flavor discovery
- /geschichte Family story
- /salon Place and Gastgarten
- /kontakt Phone, email, map, mailto form
- /impressum Legal
- /datenschutz Privacy

Primary visit verbs: Anfahrt, Anrufen, Jetzt besuchen.

## Photos

Placeholder images ship in public/images/. Client shot list: public/images/README.md. Confirm hours, holiday exceptions, and Impressum text before launch.

## Deploy

Connect this GitHub repo to Vercel, production branch main, framework preset Next.js. Custom domain www.arnoldo.at is a later DNS cutover.

## GitHub Pages

Static preview: https://flobra9-works.github.io/arnoldo-web/

Built with GITHUB_PAGES=true (sets basePath /arnoldo-web) and deployed via .github/workflows/deploy-pages.yml on every push to main.
