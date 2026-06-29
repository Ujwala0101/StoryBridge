# StoryBridge

StoryBridge is a premium story-submission marketplace that connects writers with verified directors, producers, production houses, OTT platforms, consultants, investors, and talent scouts while protecting writer IP.

## Included

- Next.js App Router, React, TypeScript, Tailwind CSS
- Premium responsive landing page with cinematic hero
- Browse/search experience, story cards, and protected story details
- Writer, producer, and admin dashboards
- Story submission wizard UI
- Contact request and messaging screens
- Supabase-ready client/server scaffolding
- Role-aware middleware and security headers
- Zod validation for story submissions and contact requests
- Supabase SQL schema with RLS policies
- Dark mode with persistent preference
- SEO routes for sitemap and robots

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and fill in Supabase, Resend, PostHog, and Sentry values before production deployment.

## IP protection model

Public story pages intentionally expose only title, genre, language, logline, and protected synopsis. There are no full-script fields, PDF preview routes, or download routes. Contact is only unlocked through the request approval workflow.

## Production checklist

- Apply `database/schema.sql` in Supabase
- Enable Supabase Auth email verification
- Configure Supabase Storage buckets for avatars, covers, and verification documents
- Add Resend transactional emails for verification and request updates
- Add Sentry and PostHog keys
- Tune RLS policies for the exact admin claims model
- Add Playwright tests for role flows before launch
