/**
 * ============================================================================
 *  PORTFOLIO CONTENT  —  EDIT THIS FILE TO UPDATE YOUR SITE
 * ============================================================================
 *
 *  This is the single source of truth for everything shown on the page.
 *  You almost never need to touch the React components — just edit the values
 *  below (text, links, lists) and the UI updates automatically.
 *
 *  Nothing here is invented: fill in real links, real projects, and real
 *  details as you build them. Placeholder links are marked with `#` or
 *  `mailto:` — replace them when you have the real ones.
 * ============================================================================
 */

export type NavLink = { label: string; href: string }

export type Skill = { name: string }
export type SkillGroup = { category: string; skills: Skill[] }

export type Project = {
  title: string
  /** short one-line summary */
  summary: string
  /** a few sentences describing what it does / what you learned */
  description: string
  /** tech used, shown as tags */
  tech: string[]
  /** optional links — leave empty string to hide the button */
  repoUrl?: string
  liveUrl?: string
  /** small label shown at the top of the card, e.g. "Academic" / "Personal" */
  type?: string
}

export type TimelineItem = {
  title: string
  meta: string
  description: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
  /** icon key handled in the Contact component */
  icon: 'email' | 'github' | 'linkedin' | 'location'
}

/* -------------------------------------------------------------------------- */
/*  1. BASIC PROFILE                                                          */
/* -------------------------------------------------------------------------- */

export const profile = {
  fullName: 'Ahmad Khoirul Shobirin',
  displayName: 'Shobirin',
  role: 'Computer Science Student',
  university: 'BINUS University',
  major: 'Computer Science',
  semester: 5,
  // Short tagline shown in the hero
  tagline:
    'Computer Science student at BINUS University building academic and personal projects, and looking for a semester 6 internship.',
  // Location is optional — set to '' to hide it
  location: 'Indonesia',
}

/* -------------------------------------------------------------------------- */
/*  2. NAVBAR LINKS                                                           */
/* -------------------------------------------------------------------------- */

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Journey', href: '#journey' },
  { label: 'Availability', href: '#availability' },
  { label: 'Contact', href: '#contact' },
]

/* -------------------------------------------------------------------------- */
/*  3. ABOUT ME                                                               */
/* -------------------------------------------------------------------------- */

export const about = {
  // Write in first person. Keep it honest and student-focused.
  paragraphs: [
    "I'm a fifth-semester Computer Science student at BINUS University who enjoys turning ideas into working software. Most of what I know comes from coursework and building projects on my own time.",
    "I'm especially interested in web development and writing clean, maintainable code. I like understanding how things work end to end — from the interface a user sees down to the logic behind it.",
    'Right now my focus is on strengthening my fundamentals, growing my project portfolio, and finding an internship where I can learn from experienced engineers and contribute to a real team.',
  ],
  // A few quick facts — keep these factual
  highlights: [
    { label: 'Focus', value: 'Web Development' },
    { label: 'Currently', value: 'Semester 5' },
    { label: 'Learning', value: 'React & TypeScript' },
    { label: 'Open to', value: 'Semester 6 Internship' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  4. SKILLS                                                                 */
/* -------------------------------------------------------------------------- */
/*  Only list what you're genuinely comfortable with or actively learning.   */

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    category: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Vite' },
      { name: 'VS Code' },
      { name: 'Figma (basics)' },
    ],
  },
  {
    category: 'Foundations',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'OOP' },
      { name: 'Databases' },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  5. FEATURED PROJECTS                                                      */
/* -------------------------------------------------------------------------- */
/*  Replace these with your real projects. Add or remove items freely.       */
/*  Leave repoUrl / liveUrl as '' (or delete the line) to hide the button.   */

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    type: 'Personal',
    summary: 'The site you are looking at right now.',
    description:
      'A responsive personal portfolio built to present myself for internship applications. Built with reusable components and a centralized content file so it is easy to keep updated.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Project Title',
    type: 'Academic',
    summary: 'One-line summary of what this project does.',
    description:
      'Describe the problem this project solves, your role, and what you learned building it. Keep it honest and specific.',
    tech: ['Add', 'Your', 'Tech'],
    repoUrl: '',
    liveUrl: '',
  },
  {
    title: 'Project Title',
    type: 'Personal',
    summary: 'One-line summary of what this project does.',
    description:
      'Describe the problem this project solves, your role, and what you learned building it. Keep it honest and specific.',
    tech: ['Add', 'Your', 'Tech'],
    repoUrl: '',
    liveUrl: '',
  },
]

/* -------------------------------------------------------------------------- */
/*  6. EDUCATION                                                              */
/* -------------------------------------------------------------------------- */

export const education: TimelineItem[] = [
  {
    title: 'BINUS University',
    meta: 'Bachelor of Computer Science · Currently Semester 5',
    description:
      'Studying core Computer Science topics including data structures, algorithms, object-oriented programming, databases, and software development.',
  },
]

// Optional list of relevant coursework (factual — from your program).
export const relevantCoursework: string[] = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Systems',
  'Web Programming',
  'Software Engineering',
]

/* -------------------------------------------------------------------------- */
/*  7. LEARNING JOURNEY                                                       */
/* -------------------------------------------------------------------------- */
/*  A simple timeline of how you are growing. Keep it aspirational but real.  */

export const learningJourney: TimelineItem[] = [
  {
    title: 'Building strong fundamentals',
    meta: 'Ongoing',
    description:
      'Deepening my understanding of data structures, algorithms, and clean code through coursework and practice.',
  },
  {
    title: 'Learning modern web development',
    meta: 'In progress',
    description:
      'Getting hands-on with React, TypeScript, and Tailwind CSS by building small projects like this portfolio.',
  },
  {
    title: 'Growing my project portfolio',
    meta: 'Next',
    description:
      'Turning course concepts into complete, shareable projects on GitHub to demonstrate what I can build.',
  },
  {
    title: 'Contributing on a real team',
    meta: 'Goal',
    description:
      'Finding a semester 6 internship where I can apply my skills, learn from experienced engineers, and add real value.',
  },
]

/* -------------------------------------------------------------------------- */
/*  8. INTERNSHIP AVAILABILITY                                                */
/* -------------------------------------------------------------------------- */

export const availability = {
  status: 'Open to internships',
  headline: 'Available for a Semester 6 Internship',
  description:
    'I am looking for a Computer Science internship for semester 6 where I can contribute to real projects and grow as an engineer. I am eager to learn, reliable, and comfortable working as part of a team.',
  details: [
    { label: 'Seeking', value: 'Software / Web Development Internship' },
    { label: 'Timing', value: 'Semester 6' },
    { label: 'Interests', value: 'Frontend & Full-stack' },
    { label: 'Location', value: 'On-site, Hybrid, or Remote' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  9. CONTACT                                                                */
/* -------------------------------------------------------------------------- */
/*  Replace the placeholder values below with your real details.             */

export const contact = {
  intro:
    "I'd love to hear about internship opportunities or just connect. Feel free to reach out.",
  links: [
    {
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      icon: 'email',
    },
    {
      label: 'GitHub',
      value: 'github.com/your-username',
      href: '#',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-username',
      href: '#',
      icon: 'linkedin',
    },
    {
      label: 'Location',
      value: profile.location,
      href: '#',
      icon: 'location',
    },
  ] as ContactLink[],
}

/* -------------------------------------------------------------------------- */
/*  10. FOOTER                                                                */
/* -------------------------------------------------------------------------- */

export const footer = {
  note: 'Built with React, TypeScript & Tailwind CSS.',
}
