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
  /** 2-3 concise, concrete technical points on what was actually built */
  highlights: string[]
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

export type ExploringItem = {
  title: string
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
    'Computer Science student focused on software development, machine learning, computer vision, and practical web applications.',

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
    "I'm a Computer Science student at BINUS University interested in building practical software and exploring how technology can solve real problems. My interests include software development, machine learning, computer vision, and web applications.",
    "I'm currently expanding my technical foundation through academic projects and independent learning, including Network Security Fundamentals. I learn best by turning concepts into working projects and experimenting with different technologies.",
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
    category: 'Networking & Security',
    skills: ['Computer Networking', 'Network Security Fundamentals'],
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
      'A web marketplace concept for browsing, listing, and trading fashion assets.',
    highlights: [
      'Built the browsing, listing, and item detail flows as a full front-end product',
      'Structured the UI into reusable React components with TypeScript',
      'Styled the interface with Tailwind CSS, focused on layout and usability',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/project-fashion.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
  {
    number: '02',
    title: 'Cryptocurrency Trend Analysis',
    description:
      'Applies machine learning to historical cryptocurrency price data to study market trends.',
    highlights: [
      'Collected and cleaned historical price data for preprocessing',
      'Trained and evaluated machine learning models to study price trends',
      'Used Pandas and NumPy for data handling and analysis',
    ],
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
    image: '/projects/project-crypto.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
  {
    number: '03',
    title: 'Automatic Text Summarization',
    description:
      'An NLP project that generates short summaries from longer documents.',
    highlights: [
      'Built a text preprocessing pipeline to clean raw input',
      'Applied NLP summarization techniques to condense text while keeping its meaning',
    ],
    tech: ['Python', 'NLP'],
    image: '/projects/project-nlp.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
  {
    number: '04',
    title: 'Real-Time Face Detection',
    description:
      'A computer vision project that detects faces from a live camera feed in real time.',
    highlights: [
      'Processed live video frames using OpenCV',
      'Implemented real-time face detection and drew results directly on the stream',
    ],
    tech: ['Python', 'OpenCV', 'Computer Vision'],
    image: '/projects/project-face-detection.png',
    repoUrl: '#', // TODO: replace with the real GitHub repo URL
    liveUrl: '',
  },
]

/* -------------------------------------------------------------------------- */
/*  6. CURRENTLY EXPLORING                                                    */
/* -------------------------------------------------------------------------- */
/*  Areas being actively learned right now — not claimed expertise.           */

export const currentlyExploring: ExploringItem[] = [
  {
    title: 'Deep Learning',
    description:
      'Exploring model inference, computer vision, and image analysis.',
  },
  {
    title: 'Network Security',
    description:
      'Learning network security fundamentals, networking concepts, TCP/IP, common security threats, and basic security practices.',
  },
  {
    title: 'Software Engineering',
    description:
      'Improving understanding of application architecture, APIs, testing, and software development practices.',
  },
]

/* -------------------------------------------------------------------------- */
/*  7. EDUCATION                                                              */
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
/*  8. CONTACT                                                                */
/* -------------------------------------------------------------------------- */

export const contact = {
  heading: "Let's build something.",
  text: "I'm open to internship opportunities, software projects, and interesting technical challenges.",
}

/* -------------------------------------------------------------------------- */
/*  9. FOOTER                                                                 */
/* -------------------------------------------------------------------------- */

export const footer = {
  note: 'Built with React, TypeScript & Tailwind CSS.',
}
