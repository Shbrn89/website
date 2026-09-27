/**
 * ============================================================================
 *  PORTFOLIO CONTENT  —  EDIT THIS FILE TO UPDATE YOUR SITE
 * ============================================================================
 *
 *  This is the single source of truth for everything shown on the page.
 *  You almost never need to touch the React components — just edit the values
 *  below (text, links, lists) and the UI updates automatically.
 *
 *  Nothing here is invented. Where a real link isn't available yet, a
 *  placeholder ('#') is used — replace it when you have the real URL.
 * ============================================================================
 */

export type NavLink = { label: string; href: string }

export type SkillGroup = { category: string; skills: string[] }

export type Project = {
  /** display order / project number shown on the card, e.g. "01" */
  number: string
  title: string
  /** one or two natural sentences describing what it does */
  description: string
  /** tech actually used in the project */
  tech: string[]
  /** screenshot path under /public/projects — shown if the file exists */
  image: string
  /** set true for the single featured project shown in the large layout slot */
  featured?: boolean
  /** GitHub repo — use '#' as a placeholder until the real repo is public */
  repoUrl: string
  /** live demo — leave '' when there is no real deployed demo (hides the button) */
  liveUrl: string
}

export type TimelineItem = {
  title: string
  meta: string
  description: string
}

/* -------------------------------------------------------------------------- */
/*  1. BASIC PROFILE                                                          */
/* -------------------------------------------------------------------------- */

export const profile = {
  fullName: 'Ahmad Khoirul Shobirin',
  displayName: 'Shobirin',
  university: 'BINUS University',
  major: 'Computer Science',
  location: 'Indonesia',

  // Shown in the Hero as a small label above the heading.
  label: 'Computer Science @ BINUS University',

  // Short first-person statement, shown large in the Hero.
  statement: "I build software, explore data, and learn by building.",

  // One supporting sentence under the statement.
  summary:
    'Computer Science student focused on software development, machine learning, and practical web applications.',

  // Portrait photo — place your own photo at /public/profile.jpg
  photo: '/profile.jpg',

  // Social / external links. Replace '#' with your real URLs.
  githubUrl: '#', // TODO: replace with your GitHub profile URL
  linkedinUrl: '#', // TODO: replace with your LinkedIn profile URL
  resumeUrl: '#', // TODO: replace with a link to your resume (PDF)
  email: 'your.email@example.com', // TODO: replace with your real email
}

/* -------------------------------------------------------------------------- */
/*  2. NAVIGATION                                                             */
/* -------------------------------------------------------------------------- */

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

/* -------------------------------------------------------------------------- */
/*  3. ABOUT ME                                                               */
/* -------------------------------------------------------------------------- */

export const about = {
  paragraphs: [
    "I'm currently studying Computer Science at BINUS University. Most of what I learn comes from building projects — from machine learning experiments and computer vision to web applications.",
    'I enjoy understanding how things work, building them, and improving them along the way.',
  ],
}

/* -------------------------------------------------------------------------- */
/*  4. SKILLS                                                                 */
/* -------------------------------------------------------------------------- */
/*  Only technologies actually used in the projects below or in coursework.  */

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL'],
  },
  {
    category: 'Web Development',
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Machine Learning & Data',
    skills: ['Machine Learning', 'NLP', 'Pandas', 'NumPy'],
  },
  {
    category: 'Computer Vision',
    skills: ['OpenCV', 'Real-Time Image Processing'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

/* -------------------------------------------------------------------------- */
/*  5. PROJECTS                                                               */
/* -------------------------------------------------------------------------- */
/*  Real projects only. Replace repoUrl with the real GitHub URL when ready.  */
/*  liveUrl stays '' until there is an actual deployed demo.                  */

export const projects: Project[] = [
  {
    number: '01',
    title: 'Fashion Asset Marketplace',
    featured: true,
    description:
      'A web marketplace concept for browsing, listing, and trading fashion assets, built to practice structuring a full front-end product from the browsing flow down to individual listing pages.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/project-fashion.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
  {
    number: '02',
    title: 'Cryptocurrency Trend Analysis',
    description:
      'Applies machine learning to historical cryptocurrency price data to study and model market trends, covering data collection, preprocessing, and model evaluation.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
    image: '/projects/project-crypto.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
  {
    number: '03',
    title: 'Automatic Text Summarization',
    description:
      'An NLP project that generates short summaries from longer documents, using text preprocessing and summarization techniques to condense content while keeping its meaning.',
    tech: ['Python', 'NLP'],
    image: '/projects/project-nlp.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
  {
    number: '04',
    title: 'Real-Time Face Detection',
    description:
      'A computer vision project that detects faces from a live camera feed in real time, processing video frames and drawing detections directly on the stream.',
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    image: '/projects/project-face-detection.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
]

/* -------------------------------------------------------------------------- */
/*  6. EDUCATION                                                              */
/* -------------------------------------------------------------------------- */

export const education = {
  university: 'BINUS University',
  program: 'Computer Science',
  description:
    'Studying core Computer Science topics — data structures, algorithms, object-oriented programming, databases, and software engineering.',
}

// Optional list of relevant coursework (factual — from the program).
export const relevantCoursework: string[] = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Systems',
  'Web Programming',
  'Software Engineering',
  'Artificial Intelligence',
]

/* -------------------------------------------------------------------------- */
/*  7. CONTACT                                                                */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's build something.",
  text: "I'm open to internship opportunities, software projects, and interesting technical challenges.",
}

/* -------------------------------------------------------------------------- */
/*  8. FOOTER                                                                 */
/* -------------------------------------------------------------------------- */

export const footer = {
  note: 'Built with React, TypeScript & Tailwind CSS.',
}
