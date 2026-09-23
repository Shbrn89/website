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
 *  placeholder ('#' or 'example.com') is used — replace it when you have the
 *  real GitHub repo or live demo URL.
 * ============================================================================
 */

export type NavLink = { label: string; href: string }

export type Skill = { name: string }
export type SkillGroup = { category: string; skills: Skill[] }

export type Project = {
  title: string
  /** short one-line summary */
  summary: string
  /** a few sentences describing what it does */
  description: string
  /** a few concrete, honest bullet points about the work */
  highlights?: string[]
  /** tech used, shown as tags */
  tech: string[]
  /** the main domain/discipline, shown as a badge, e.g. "Machine Learning" */
  domain?: string
  /** optional links — leave empty string to hide the button */
  repoUrl?: string
  liveUrl?: string
  /** whether this is an Academic or Personal project */
  type?: string
  /** emoji/icon accent shown on the card */
  accent?: string
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
  // A couple of rotating role words used for emphasis in the hero
  focusAreas: ['Web Development', 'Machine Learning', 'Computer Vision'],
  // Short tagline shown in the hero
  tagline:
    'Fifth-semester Computer Science student at BINUS University who builds academic and personal projects across web development, machine learning, and computer vision — now looking for a semester 6 internship.',
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
    'My interests span a few areas — building web applications, and exploring machine learning, natural language processing, and computer vision through hands-on projects. I like understanding how things work end to end, from the interface a user sees down to the logic and data behind it.',
    'Right now my focus is on strengthening my fundamentals, growing my project portfolio, and finding an internship where I can learn from experienced engineers and contribute to a real team.',
  ],
  // A few quick facts — keep these factual
  highlights: [
    { label: 'Focus', value: 'Software & ML' },
    { label: 'Currently', value: 'Semester 5' },
    { label: 'University', value: 'BINUS' },
    { label: 'Open to', value: 'Sem 6 Internship' },
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
      { name: 'Python' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'SQL' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' },
    ],
  },
  {
    category: 'ML / Data',
    skills: [
      { name: 'Machine Learning' },
      { name: 'NLP' },
      { name: 'Computer Vision' },
      { name: 'NumPy' },
      { name: 'Pandas' },
    ],
  },
  {
    category: 'Tools & Foundations',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
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
/*  These are real projects. Replace the '#' repoUrl / liveUrl placeholders   */
/*  with your actual GitHub repo and live demo links when ready.              */
/*  (Leave a link as '' to hide that button entirely.)                        */

export const projects: Project[] = [
  {
    title: 'Fashion Asset Marketplace',
    type: 'Project',
    domain: 'Web Application',
    accent: '🛍️',
    summary: 'A marketplace platform for buying and selling fashion assets.',
    description:
      'A web-based marketplace concept where users can browse, list, and trade fashion assets. Focused on building a clean, usable interface and the core flows of a marketplace.',
    highlights: [
      'Designed the browsing and listing experience for fashion items',
      'Structured the app into reusable, maintainable components',
      'Practised end-to-end product thinking, from UI to data flow',
    ],
    tech: ['Web', 'Frontend', 'UI/UX'],
    repoUrl: '#', // TODO: replace with your GitHub repo URL
    liveUrl: '#', // TODO: replace with your live demo URL (or set to '')
  },
  {
    title: 'Cryptocurrency Trend Analysis using Machine Learning',
    type: 'Project',
    domain: 'Machine Learning',
    accent: '📈',
    summary:
      'Analysing cryptocurrency price trends with machine learning techniques.',
    description:
      'An exploration of how machine learning can be applied to historical cryptocurrency data to study and model market trends. Covered data collection, preprocessing, and building models to analyse patterns.',
    highlights: [
      'Collected and preprocessed historical cryptocurrency data',
      'Applied machine learning techniques to study price trends',
      'Explored model evaluation and interpretation of results',
    ],
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
    repoUrl: '#', // TODO: replace with your GitHub repo URL
    liveUrl: '', // no live demo — button hidden
  },
  {
    title: 'Automatic Text Summarization using NLP',
    type: 'Project',
    domain: 'Natural Language Processing',
    accent: '📝',
    summary: 'Generating concise summaries from longer text using NLP.',
    description:
      'A natural language processing project that automatically produces short summaries from longer documents. Explored text preprocessing and summarization techniques to condense content while keeping the key meaning.',
    highlights: [
      'Built a pipeline to clean and process raw text input',
      'Implemented automatic summarization using NLP techniques',
      'Compared how different approaches affect summary quality',
    ],
    tech: ['Python', 'NLP', 'Text Processing'],
    repoUrl: '#', // TODO: replace with your GitHub repo URL
    liveUrl: '', // no live demo — button hidden
  },
  {
    title: 'Real-Time Face Detection using Computer Vision',
    type: 'Project',
    domain: 'Computer Vision',
    accent: '👁️',
    summary: 'Detecting faces in a live video stream in real time.',
    description:
      'A computer vision project that detects human faces from a live camera feed in real time. Focused on processing video frames efficiently and drawing detections on the stream as it runs.',
    highlights: [
      'Processed live video frames from a camera feed',
      'Implemented real-time face detection on each frame',
      'Visualised detections directly on the video stream',
    ],
    tech: ['Python', 'Computer Vision', 'OpenCV'],
    repoUrl: '#', // TODO: replace with your GitHub repo URL
    liveUrl: '', // no live demo — button hidden
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
      'Studying core Computer Science topics including data structures, algorithms, object-oriented programming, databases, and software development, alongside hands-on project work in web development, machine learning, and computer vision.',
  },
]

// Optional list of relevant coursework (factual — from your program).
export const relevantCoursework: string[] = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Systems',
  'Web Programming',
  'Software Engineering',
  'Artificial Intelligence',
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
      'Deepening my understanding of data structures, algorithms, and clean code through coursework and consistent practice.',
  },
  {
    title: 'Exploring AI, ML & computer vision',
    meta: 'In progress',
    description:
      'Applying what I learn through projects in machine learning, natural language processing, and computer vision to see how theory works in practice.',
  },
  {
    title: 'Building real web applications',
    meta: 'In progress',
    description:
      'Getting hands-on with React, TypeScript, and Tailwind CSS to turn ideas into complete, usable web applications.',
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
    { label: 'Seeking', value: 'Software / ML Internship' },
    { label: 'Timing', value: 'Semester 6' },
    { label: 'Interests', value: 'Web, ML & Computer Vision' },
    { label: 'Location', value: 'On-site, Hybrid, or Remote' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  9. CONTACT                                                                */
/* -------------------------------------------------------------------------- */
/*  Replace the placeholder values below with your real details.             */

export const contact = {
  intro:
    "I'd love to hear about internship opportunities or just connect. Feel free to reach out through any of the channels below.",
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
      href: '#', // TODO: replace with your GitHub profile URL
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/your-username',
      href: '#', // TODO: replace with your LinkedIn profile URL
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
