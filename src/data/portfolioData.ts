import type {
  ContactEntry,
  ExperienceEntry,
  HeroContent,
  ProjectEntry,
  SkillCategory,
} from '@/types/portfolio';

export const SITE_URL = 'https://vrokn.github.io/portfolio/';
export const SITE_TITLE = 'Mateo Gomez Ossa | Senior Frontend Engineer';
export const SITE_DESCRIPTION =
  'Senior Frontend Engineer with 8+ years building enterprise-grade React and TypeScript products across fintech, betting platforms and data-driven SaaS.';
export const SOCIAL_IMAGE_URL = `${SITE_URL}images/mateo.png`;

export const heroContent: HeroContent = {
  title: 'Mateo Gomez Ossa',
  subtitle:
    'Senior Frontend Engineer with 8+ years building enterprise-grade UI systems in fintech, betting and data-driven SaaS.',
  badge: 'React + TypeScript + Scalable UI Architecture',
  primaryAction: {
    label: 'View my work',
    href: '#projects',
  },
  secondaryAction: {
    label: 'Contact Me',
    href: '#contact',
  },
};

export const aboutParagraphs: string[] = [
  'I am a Senior Frontend Engineer specializing in React and TypeScript, with 8+ years of experience building enterprise-grade products across fintech, betting platforms and data-driven SaaS.',
  'I focus on scalable UI architecture, reusable component systems and high-performance interfaces that support complex workflows while preserving type safety, usability and maintainability.',
  'I work with a product-oriented mindset: translating complex requirements into intuitive user experiences in close collaboration with product, design and backend teams.',
  'I actively leverage AI-assisted workflows, including Cursor, automated code review systems, and AI-assisted refactoring and documentation to accelerate delivery and improve engineering productivity.',
  'My Fine and Visual Arts background influences how I design interaction clarity and usability. Outside software, I am passionate about music production and DJing. Fluent in English and Spanish.',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    badges: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Redux',
      'Zustand',
      'Hooks',
      'HTML5',
      'CSS3',
      'SASS',
      'Styled Components',
      'Tailwind',
      'Material UI',
      'Bootstrap',
      'Jest',
      'RTL',
      'Vite',
    ],
  },
  {
    title: 'Backend and APIs',
    badges: ['Node.js', 'Express', 'Python (basics)', 'REST integrations'],
  },
  {
    title: 'Architecture and Delivery',
    badges: [
      'Design Systems',
      'Shared Packages',
      'Git Submodules',
      'Monorepo Workflows',
      'Micro-frontends',
      'Performance Optimization',
      'UX and Usability',
      'CI/CD',
      'AWS',
      'AWS Amplify',
    ],
  },
  {
    title: 'Data and Tools',
    badges: ['MongoDB', 'PostgreSQL', 'MySQL', 'Jira', 'Notion', 'Linear', 'Slack', 'Teams', 'GitHub'],
  },
  {
    title: 'AI and Creative',
    badges: [
      'Cursor',
      'Automated PR Review Bots',
      'AI Refactoring',
      'AI Documentation',
      'Claude',
      'Arduino',
      'Processing',
      'P5.js',
      'Figma',
      'Photoshop',
      'Illustrator',
    ],
  },
  {
    title: 'Languages',
    badges: ['English (C1)', 'Spanish (Native)'],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'Knot E-commerce',
    period: 'Personal Project',
    summary:
      'Responsive e-commerce concept built with Bootstrap. Focused on clean UI structure and reusable layout components.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    href: 'https://vrokn.github.io/bootstrap-e-commerce/',
    videoSrc: '/videos/knot.mp4',
    mediaNote: 'Product-focused demo of the responsive storefront flow.',
  },
  {
    name: 'Posts Voting Blog',
    period: 'Personal Project',
    summary:
      'Reddit-inspired voting feed where posts can be ranked in real time. Built to practice reusable React state patterns.',
    stack: ['React', 'Semantic UI', 'JavaScript'],
    href: 'https://vrokn.github.io/postsvoting/',
    videoSrc: '/videos/voting.mp4',
    mediaNote: 'Demo highlighting live ranking interactions and state updates.',
  },
  {
    name: 'Bulls and Cows',
    period: 'Personal Project',
    summary:
      'Classic number guessing game with random generation and event-driven logic.',
    stack: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
    href: 'https://vrokn.github.io/picasyfijas/',
    videoSrc: '/videos/picas.mp4',
    mediaNote: 'Gameplay walkthrough focused on event-driven guessing logic.',
  },
  {
    name: 'Jaguar Landing',
    period: 'Personal Project',
    summary: 'Landing page concept focused on transitions, styling and clean visual hierarchy.',
    stack: ['HTML', 'CSS'],
    href: 'https://vrokn.github.io/landingforjaguar/',
    videoSrc: '/videos/jaguar.mp4',
    mediaNote: 'Visual pass through layout, styling and transition details.',
  },
  {
    name: 'Stopwatches',
    period: 'Personal Project',
    summary:
      'Utility app to create multiple stopwatches for task tracking. Built with reusable components and state handling.',
    stack: ['React', 'JavaScript'],
    href: 'https://vrokn.github.io/Timers/',
    videoSrc: '/videos/timers.mp4',
    mediaNote: 'Feature preview for multiple timers and task-oriented tracking.',
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: 'FUSE',
    role: 'Senior Frontend Engineer',
    location: 'Remote, New York, United States',
    period: 'May 2025 - Mar 2026',
    highlights: [
      'Delivered critical UI modules for enterprise financial template creation, including dynamic page rendering, row expansion, creation flows and complex form integrations.',
      'Built reusable strongly-typed React/TypeScript components aligned with design systems and shared packages to improve consistency and maintainability.',
      'Implemented an AI-assisted PR review bot that reduced integration cycle time by around 50% and improved merge readiness.',
    ],
    stack: ['React', 'TypeScript', 'Design Systems', 'Monorepo', 'CI/CD'],
    previewImageSrc: '/career/fuse.png',
  },
  {
    company: 'BAPPY',
    role: 'Head of Engineering',
    location: 'Bogota, Colombia',
    period: '2024 - 2026',
    highlights: [
      'Led full-stack engineering for a P2P betting platform, owning architecture decisions, delivery quality and cross-functional coordination.',
      'Modernized the stack from legacy code to React, Next.js, TypeScript, Tailwind and Node.js, improving scalability and developer experience.',
      'Integrated fiat and crypto payment flows, and maintained CI/CD pipelines in AWS to streamline secure releases.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'AWS Amplify', 'CI/CD'],
    previewImageSrc: '/career/bappy.png',
  },
  {
    company: 'Experienceflow.ai',
    role: 'Senior Frontend Engineer',
    location: 'Remote, San Francisco, California',
    period: '2023 - 2025',
    highlights: [
      'Led critical data-visualization features and a major UI revamp focused on clarity and robustness.',
      'Migrated build tooling from Webpack to Vite, reducing build times from around 3 minutes to around 200ms.',
      'Upgraded React from v16 to v18 and refactored legacy class components into hooks-based architecture.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Redux', 'Material UI', 'RTL', 'Jest'],
    previewImageSrc: '/career/experienceflow.png',
  },
  {
    company: 'Hourly',
    role: 'Senior Frontend Engineer',
    location: 'Remote, Palo Alto, California',
    period: '2022 - 2023',
    highlights: [
      'Designed and implemented pixel-perfect UI components and defined high-level frontend solutions for key product flows.',
      'Identified architectural improvements that increased maintainability and long-term scalability.',
      'Implemented unit and integration tests with React Testing Library and TypeScript for reliable coverage.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'Jest', 'RTL'],
    previewImageSrc: '/career/hourly.png',
  },
  {
    company: 'Struxtion',
    role: 'Senior Frontend Engineer',
    location: 'Remote, Cincinnati, Ohio',
    period: '2021 - 2023',
    highlights: [
      'Built financial software interfaces for construction workflows with strict business-rule requirements.',
      'Created intuitive, data-heavy interfaces in React and Material UI to simplify complex operations.',
      'Implemented testing protocols with Jest to improve reliability in core financial features.',
    ],
    stack: ['React', 'Material UI', 'Redux', 'Jest', 'Keycloak', 'Docker'],
    previewImageSrc: '/career/struxtion.png',
  },
  {
    company: 'Museo de Bogota',
    role: 'Full-stack Developer',
    location: 'Bogota, Colombia',
    period: '2020 - 2021',
    highlights: [
      'Designed architecture, development and deployment for bogotarot.com.',
      'Supported technology migrations and digital communication initiatives.',
      'Built newsletter web templates and delivered museum digital experiences.',
    ],
    stack: ['React', 'MongoDB', 'Express', 'Bootstrap', 'SASS'],
    href: 'https://vrokn.github.io/bogotarot/#/',
    previewImageSrc: '/career/museo-bogota.png',
  },
];

export const contactEntries: ContactEntry[] = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/573196127049',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/Mateogomezossa',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/vrokn',
  },
];

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mateo Gomez Ossa',
  jobTitle: 'Senior Frontend Engineer',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: contactEntries.map((entry) => entry.href),
  knowsLanguage: ['English', 'Spanish'],
  knowsAbout: skillCategories.flatMap((category) => category.badges),
};
