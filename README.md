# Shobirin — Personal Portfolio

A personal portfolio for **Ahmad Khoirul Shobirin** (*Shobirin*), a Computer
Science student at BINUS University, built for internship applications.

Built with **plain HTML, CSS, and vanilla JavaScript only** — no framework,
no build step, no package manager. Dark theme, editorial typography,
restrained accent color.

## Sections

1. Navbar
2. Hero (with portrait photo)
3. Featured Projects
4. About
5. Skills
6. Currently Exploring
7. Education
8. Contact
9. Footer

## Getting started

There's nothing to install and nothing to build. Just open the file:

```
index.html
```

directly in your browser, or serve the folder with any static file server,
for example:

```bash
# Python 3
python3 -m http.server

# Node's `serve` package (if you have it)
npx serve .
```

Then visit `http://localhost:8000` (or whichever port your server prints).

## Project structure

```
website/
├─ index.html         # all page content and structure
├─ css/
│  └─ style.css       # all styling — colors, fonts, spacing, layout, responsive rules
├─ js/
│  └─ script.js       # small interactive behaviors (see below)
├─ favicon.svg
├─ profile.jpg         # ← put your photo here (not included yet)
└─ projects/
   ├─ README.md
   ├─ project-crypto.png          # ← put screenshots here (not included yet)
   ├─ project-nlp.png
   └─ project-face-detection.png
```

There is no `src/`, no `node_modules/`, and no config files — everything
that used to be spread across a React/TypeScript/Vite/Tailwind project now
lives in these three files: `index.html`, `css/style.css`, `js/script.js`.

## Editing your content

Because this is now a plain static site, all content lives directly in
**`index.html`** as regular HTML — there is no separate data file. To change
text, update the relevant tag in `index.html` directly. For example:

- Your name / hero text → inside `<section id="top" class="hero">`
- Projects → inside `<section id="projects" class="section">`
- Skills → inside `<section id="skills" class="section">`
- Contact links → inside `<section id="contact" class="section">`

### Your photo

Put your photo at:

```
profile.jpg
```

(in the same folder as `index.html`). The Hero references it directly. If
the file is missing, the page shows a plain placeholder instead of a broken
image (handled by the `onerror` attribute on the `<img>` tag, no JavaScript
required for this to work).

### Project screenshots

Put screenshots in the `projects/` folder using these filenames (see
`projects/README.md`):

- `project-crypto.png` — Cryptocurrency Trend Analysis
- `project-nlp.png` — Automatic Text Summarization
- `project-face-detection.png` — Real-Time Face Detection

Missing screenshots fall back to a plain "Screenshot pending" placeholder,
the same way the photo does.

### Links you still need to fill in

Several links in `index.html` are still placeholders (`href="#"`) — search
for them and replace with your real URLs:

- GitHub (navbar, hero, contact section)
- LinkedIn (contact section)
- Email (contact section — use `href="mailto:you@example.com"`)
- Resume (navbar, contact section)
- Each project's GitHub repo link

## How the JavaScript works

`js/script.js` is plain vanilla JavaScript with no dependencies. It does
five small things:

1. Adds a background to the navbar once you scroll down.
2. Opens/closes the mobile menu when the hamburger button is tapped.
3. Highlights the nav link for whichever section is currently in view
   (using the browser's built-in `IntersectionObserver`).
4. Fades/slides each section into view the first time it scrolls into the
   viewport (also using `IntersectionObserver`). This is skipped entirely if
   the visitor's OS has "reduce motion" turned on.
5. Writes the current year into the footer copyright line.

Everything else — layout, animations, responsive behavior — is plain CSS.

### Motion & accessibility

All animation (scroll reveal, hover transitions, the hero's fade-in) respects
the `prefers-reduced-motion` setting. If a visitor's operating system is set
to reduce motion, `css/style.css` disables these transitions/animations via a
`@media (prefers-reduced-motion: reduce)` block, and `js/script.js` checks
the same setting before enabling the scroll-reveal effect.

## Theming

All colors, fonts, and spacing are defined once as CSS variables at the top
of `css/style.css` (in the `:root` block), then reused throughout the file.
Change a variable there to update the whole site's look.
