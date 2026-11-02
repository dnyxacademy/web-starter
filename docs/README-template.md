# The README we expect by Week 4

Your README is the first thing an employer reads, and it carries marks in the final project. Replace
the root `README.md` with something shaped like this.

---

# Project name

One sentence: what it does and who it is for.

**Live:** https://...  |  **API:** https://...  |  **Demo video:** https://...

![A screenshot of the app](docs/screenshot.png)

## The problem

Two or three sentences. Who has this problem, and what they do today instead.

## What it does

- Feature, in terms of what a user can now do
- Feature
- Feature

## Built with

Next.js, TypeScript, Tailwind CSS, Express, PostgreSQL (Neon), Prisma, Vitest, Playwright

## Running it locally

    git clone https://github.com/<you>/<repo>.git
    cd <repo>
    npm install
    cp .env.example .env    # then fill in the values
    npx prisma migrate dev
    npm run dev

You need Node 22 and a PostgreSQL connection string. The variables are listed in `.env.example`.

## Testing

    npm test          # unit and API tests
    npm run test:e2e  # the end-to-end flow

## How it is put together

A short paragraph or a small diagram: the front end, the API, the database. Your schema diagram
belongs here.

## Decisions

The interesting ones, with the reason. For example: why PostgreSQL rather than MongoDB; why sessions
rather than JWT; what you dropped to finish on time.

## Limitations

Be honest. What does not work, what is not tested, what would break with a thousand users. This
section gains marks - it does not lose them.

## What I would do next

## How I used AI

Which tools, for what - scaffolding, debugging, explaining errors, writing tests. Every line here is
something you can explain.

## Licence

MIT. Built on the Dnyx Academy training-cum-internship, November 2026.
