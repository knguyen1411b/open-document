# Contributing Guide

Thanks for taking the time to contribute.

## Development Setup

1. Fork the repository.
2. Clone your fork.
3. Install dependencies:

```bash
pnpm install
```

4. Start development:

```bash
pnpm dev
```

## Branching

- Create a branch from `main`.
- Use clear branch names, for example:
  - `feat/document-search-highlight`
  - `fix/static-path-generation`
  - `docs/readme-improvements`

## Commit Style

- Write focused commits with clear messages.
- Prefer conventional commit style:
  - `feat: add breadcrumb normalization`
  - `fix: handle empty document folder`
  - `docs: update setup instructions`

## Before Opening a Pull Request

Run checks locally:

```bash
pnpm lint
pnpm format
```

If you changed document data, re-encode and update `data/data.enc`.

## Pull Request Checklist

- Scope is small and focused
- No unrelated refactors
- Lint passes
- UI changes include screenshots (if applicable)
- Linked issue (if available)

## Reporting Bugs

Please open an issue and include:

- Environment (OS, Node.js version, package manager)
- Reproduction steps
- Expected behavior
- Actual behavior
- Screenshots/logs if relevant

## Code of Conduct

By participating, you agree to follow [Code of Conduct](./CODE_OF_CONDUCT.md).
