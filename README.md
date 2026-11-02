# Web development starter

The starting point for your project on the Dnyx Academy **MERN (PostgreSQL first)**
training-cum-internship. One project, grown over four weeks, in one repository.

> **Use this template** (green button, top right) → name it something like
> `clinic-booking` → keep it **public** so your mentor can read your pull requests → clone it.

Then replace this README with your own. [docs/README-template.md](docs/README-template.md) is the
shape we expect by Week 4.

## First, today

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
git switch -c week-1/first-pull-request
```

Open `index.html` in a browser. Edit the title to your project's name, commit, push, and open a pull
request. That is your **first pull request, due Wednesday of Week 1** — it is meant to be tiny. The
point is the flow, not the code.

```bash
git add -A
git commit -m "Set the project name"
git push -u origin week-1/first-pull-request
```

## What is here

```
index.html          your home page — start here in Week 1
css/styles.css      your styles
js/main.js          your JavaScript
.env.example        copy to .env for keys and database URLs (never commit .env)
docs/               how to submit, the week plan, the README shape we expect
.github/            the pull request template and CI
```

Nothing here is a framework. Week 1 is plain HTML, CSS and JavaScript on purpose — you will add
Tailwind and React in Week 2, Next.js and Express in Week 3, and tests and CI in Week 4. The folders
change as you go, and that is expected.

## The four weeks

| Week | Dates | What the project becomes |
|---|---|---|
| 1 | 2–7 Nov | A responsive static prototype, deployed |
| 2 | 9–14 Nov | A typed React front end, with Tailwind |
| 3 | 16–21 Nov | Next.js, an Express API and PostgreSQL |
| 4 | 23–28 Nov | Sign-in, tests in CI, shipped, demoed |

The day-by-day plan is in [docs/week-plan.md](docs/week-plan.md). Your tickets and due dates are in
Dnyx Learn; the full assignment briefs are in
[MERN-Assignments](https://github.com/dnyxacademy/MERN-Assignments).

## How you are marked

Delivering the tickets, code quality, **pull request habits**, your weekly note, and going beyond the
minimum. The detail is in each assignment brief. Two things people lose marks on without realising:

- **One commit on the last evening.** Mentors read your history. Commit across several days.
- **Review comments left unanswered.** Reply in writing to every one, then push the fix.

## Rules worth repeating

- Never commit `.env`, keys, tokens or database URLs. `.gitignore` covers it — do not fight it.
- Never commit `node_modules/` or build output.
- AI assistants are allowed and taught. Disclose what you used in your weekly note, and do not ship
  a line you cannot explain in review.

Full version: [CONTRIBUTING.md](https://github.com/dnyxacademy/.github/blob/main/.github/CONTRIBUTING.md).

## Getting help

Lesson Q&A in Dnyx Learn, your batch chat, mentor office hours (two hours a day), or a support
ticket. Stuck for more than an hour on the same thing: ask. That is what the mentors are for.

---

MIT licensed ([LICENSE](LICENSE)) — your project is yours.
