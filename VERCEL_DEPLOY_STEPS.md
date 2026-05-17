# Vercel Deployment Steps

This Replit export is a pnpm workspace. The portfolio app is located at `artifacts/portfolio`.

Use these Vercel settings if importing from GitHub:

- Framework Preset: Vite
- Root Directory: `.`
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm --filter @workspace/portfolio build`
- Output Directory: `artifacts/portfolio/dist/public`

A root `vercel.json` has already been added with these settings.

## Local commands

```bash
corepack enable
pnpm install
pnpm --filter @workspace/portfolio build
```

## Deploy by CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```
