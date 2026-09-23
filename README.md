# Shobirin — Personal Portfolio

A professional, modern, dark-theme personal portfolio for **Ahmad Khoirul Shobirin**
(displayed as *Shobirin*), a Computer Science student at BINUS University
applying for a semester 6 internship.

Built with **React + TypeScript + Vite + Tailwind CSS**.

## Sections

1. Navbar (sticky, responsive with mobile menu)
2. Hero
3. About Me
4. Skills
5. Featured Projects
6. Education
7. Learning Journey
8. Internship Availability
9. Contact
10. Footer

## Getting started

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

> Using `pnpm` or `yarn`? Just swap `npm` for your package manager.

## Editing your content

All the text, links, projects, and details live in **one file**:

```
src/data/portfolio.ts
```

Edit the values there (name, about text, skills, projects, contact links, etc.)
and the whole site updates automatically — you rarely need to touch the
components. Placeholder links are marked with `#` or `example.com`; replace
them with your real GitHub, LinkedIn, and email when ready.

### Featured projects

The portfolio currently showcases these projects (edit them in the `projects`
array of `src/data/portfolio.ts`):

1. **Fashion Asset Marketplace** — Web Application
2. **Cryptocurrency Trend Analysis using Machine Learning** — Machine Learning
3. **Automatic Text Summarization using NLP** — Natural Language Processing
4. **Real-Time Face Detection using Computer Vision** — Computer Vision

Each project's `repoUrl` and `liveUrl` are **placeholders** (`'#'`). Replace them
with your real GitHub repo and live demo links. Set a link to `''` (empty
string) to hide that button.

### Where to put real details

| What                | Edit in `portfolio.ts` |
| ------------------- | ---------------------- |
| Name, university, tagline | `profile`        |
| About paragraphs & facts  | `about`          |
| Skills                    | `skillGroups`    |
| Projects                  | `projects`       |
| Education & coursework    | `education`, `relevantCoursework` |
| Learning journey          | `learningJourney`|
| Internship availability   | `availability`   |
| Contact links             | `contact`        |

## Project structure

```
portfolio/
├─ index.html
├─ src/
│  ├─ main.tsx              # app entry
│  ├─ App.tsx              # assembles all sections
│  ├─ index.css            # Tailwind + design tokens
│  ├─ data/
│  │  └─ portfolio.ts      # ← ALL your content lives here
│  └─ components/
│     ├─ ui/               # reusable primitives (Section, Container, Tag, Timeline, icons)
│     └─ sections/         # the 10 page sections
├─ tailwind.config.js      # dark theme colors & fonts
└─ ...config files
```

## Theming

The dark palette, accent gradient, and fonts are defined in
`tailwind.config.js` (`theme.extend.colors`, `backgroundImage`, `fontFamily`).
Reusable style classes (`.card`, `.btn-primary`, `.text-gradient`, etc.) are in
`src/index.css`.
