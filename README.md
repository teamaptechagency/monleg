# Mon Leg

Responsive Next.js frontend for Mon Leg, built with React, TypeScript and CSS.

## Requirements

- Node.js 20.9 or later
- npm

## Development

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

## Production

```sh
npm ci
npm run build
npm start
```

Run `npm run typecheck` for TypeScript validation. Media files are included in `public/assets`; fonts are bundled locally. The application can be run and maintained independently with Node.js and npm.

## Pages and features

- Landing, About, Contact, FAQ, Terms and Privacy pages.
- Five-step signup followed by a four-step onboarding flow with no plan selection. New accounts start on Basic and can change their plan from the dashboard after registration.
- Dashboard with separate contacts and journal collections, search, sorting and plan limits.
- Journal photo/video galleries, profile name and photo editing.
- Basic, Standard and Premium plan selection after registration, with a simulated checkout. Completed changes persist per account; dashboard URL parameters only preview plans for the demo account.

## Accounts and storage

The current account implementation is a browser-local prototype. Registration stores profile details locally and derives password hashes with PBKDF2 and a unique salt. Login sessions use session storage. Each registered account has separate contacts, journal entries and capacity counters. Uploaded journal media uses IndexedDB. The demo account alone has sample data and a restore button.

Demo login: `demo@monleg.fr` / `MonlegDemo123!`.

These browser-local accounts are not server authentication and do not provide cross-device access. Clearing browser storage removes saved data. Production authentication, authorization and database persistence must be implemented with the backend before collecting real customer information.

## Pending integrations

Strapi/backend API, PostgreSQL, real payments, activation and password recovery emails, magic-link and social sign-in, contact form delivery and newsletter subscriptions are not connected. Checkout and additional storage purchases are simulations and do not charge money. French is currently the implemented interface language. Policy and FAQ content needs final review.

## Project structure

- `app/`: routes, React components and styles.
- `app/dashboard/`: contacts, journal and media features.
- `public/assets/`: application images, icons and videos.

No environment variables are currently required. Keep future secrets in untracked environment files and configure them separately on the deployment host.
