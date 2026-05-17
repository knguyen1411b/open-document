# Open Document

Open Document is a Next.js 16 web application for browsing and searching a structured public document tree.

## Features

- Hierarchical document explorer
- Fast client-side search over flattened document items
- Static route generation for document paths
- Encoded local data source (`data/data.enc`) instead of plain JSON at runtime
- Responsive UI built with HeroUI + Tailwind CSS 4

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- HeroUI
- Tailwind CSS 4
- ESLint + Prettier + Husky + lint-staged

## Project Structure

```text
app/                    # Next.js app routes and layout
components/             # Shared UI and layout components
features/documents/     # Document domain logic, UI, and utilities
features/home/          # Home page feature module
data/                   # Encoded and source data files
lib/, utils/            # Shared utilities
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Install

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Production Build

```bash
pnpm build
pnpm start
```

## Data Workflow

The app loads document data from `data/data.enc` and decodes it in [`data/index.ts`](./data/index.ts).

If you update the source data, re-encode it to `data/data.enc` before running/building.

> [!IMPORTANT]
> Do not rely on raw JSON files at runtime. Keep encoded data in sync before release.

## Code Quality

```bash
pnpm lint
pnpm format
```

## Deployment

Deploy as a standard Next.js application on platforms like Vercel, Docker, or any Node.js host.

## Support

If you find a bug or want to propose an improvement, open an issue with reproduction steps and expected behavior.
