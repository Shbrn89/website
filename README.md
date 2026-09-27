# Shobirin — Personal Portfolio

A personal portfolio for **Ahmad Khoirul Shobirin** (*Shobirin*), a Computer
Science student at BINUS University, built for internship applications.

Built with **React + TypeScript + Vite + Tailwind CSS**. Dark theme, editorial
typography, restrained accent color — no gradients, glassmorphism, or
percentage bars.

## Sections

1. Navbar
2. Hero (with portrait photo)
3. Selected Projects
4. About
5. Skills
6. Education
7. Contact
8. Footer

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

Edit the values there and the whole site updates automatically — you rarely
need to touch the components.

### Your photo

Put your photo at:

```
public/profile.jpg
```

The Hero shows it at `profile.photo` (`/profile.jpg` by default). If the file
is missing, the site shows a plain placeholder instead of a broken image.

### Project screenshots

Put screenshots under `public/projects/` using the filenames referenced in
`src/data/portfolio.ts` (see `public/projects/README.md`):

- `project-crypto.png`
- `project-nlp.png`
- `project-face-detection.png`

Missing screenshots fall back to a plain "Screenshot pending" placeholder.

### Links you still need to fill in

These are placeholders in `profile` (in `src/data/portfolio.ts`) — replace
`'#'` / the example email with your real values:

- `githubUrl`
- `linkedinUrl`
- `resumeUrl`
- `email`

Each project's `repoUrl` is also a `'#'` placeholder until the repos are
public. `liveUrl` is left empty (`''`) — set it to a real URL only if a
project has an actual deployed demo.

### Where to put real details

| What                    | Edit in `portfolio.ts`              |
| ----------------------- | ------------------------------------ |
| Name, links, photo      | `profile`                             |
| About paragraphs        | `about`                               |
| Skills                  | `skillGroups`                         |
| Projects                | `projects`                            |
| Education & coursework  | `education`, `relevantCoursework`     |
| Contact heading/text    | `contact`                             |

## Project structure

```
website/
├─ index.html
├─ public/
│  ├─ profile.jpg          # ← your photo goes here
│  └─ projects/            # ← project screenshots go here
├─ src/
│  ├─ main.tsx              # app entry
│  ├─ App.tsx               # assembles all sections
│  ├─ index.css             # Tailwind + design tokens
│  ├─ data/
│  │  └─ portfolio.ts       # ← ALL your content lives here
│  └─ components/
│     ├─ ui/                # reusable primitives (Section, Container, Tag, Portrait, ProjectImage, icons)
│     └─ sections/           # the page sections
├─ tailwind.config.js       # theme colors & fonts
└─ ...config files
```

## Theming

Colors and fonts are defined in `tailwind.config.js`. Reusable style classes
(`.card`, `.btn-primary`, `.eyebrow`, etc.) are in `src/index.css`.
