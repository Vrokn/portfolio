import type {
  ContactEntry,
  ExperienceEntry,
  HeroContent,
  ProjectEntry,
  SkillCategory,
} from '@/types/portfolio';

export const SITE_URL = 'https://vrokn.github.io/portfolio/';
export const SITE_TITLE = 'Mateo Gomez Ossa | Senior Product Engineer';
export const SITE_DESCRIPTION =
  'Senior Product Engineer with 8+ years shipping enterprise React and TypeScript products, ML detection interfaces, and agentic systems.';
export const SOCIAL_IMAGE_URL = `${SITE_URL}images/mateo.png`;

export const heroContent: HeroContent = {
  title: 'Mateo Gomez Ossa',
  subtitle:
    'Senior Product Engineer with 8+ years shipping enterprise React systems, ML interfaces, and agentic products.',
  badge: 'React + TypeScript + Product architecture',
  proofs: [
    { value: '5 min to 5 s', label: 'Webpack to Vite at Hauler Hero' },
    { value: 'Hero Vision', label: 'ML detection UI in production' },
    { value: 'Zight', label: 'Agent that files customs entries' },
  ],
  primaryAction: {
    label: 'View my work',
    href: '#experience',
  },
  secondaryAction: {
    label: 'Contact Me',
    href: '#contact',
  },
};

export const aboutParagraphs: string[] = [
  'I am a Senior Product Engineer. I take a feature from the product proposal and the architecture through to production, mostly in large React and TypeScript systems.',
  'At Hauler Hero I build the CRM for waste collection and fleet companies. I led the move from Webpack to Vite, from about 5 minutes a build to about 5 seconds, and I designed Hero Vision, the screen where an ML model flags container overloads so operators stop creating exceptions by hand.',
  'I also consult on architecture and agentic systems. At BorderFlow I shaped the platform and Zight, an agent that reads customs documents from email and files the entry, with a licensed broker in the loop.',
  'On my own products I have shipped Bappy, CVAccelerate, Votelos, and commercial sites that are live today. My fine arts background still shows up in how I structure dense operational screens. I produce music and DJ outside of work. I work in English and Spanish.',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    badges: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Redux Toolkit',
      'RTK Query',
      'JavaScript',
      'deck.gl',
      'Material UI',
      'Tailwind',
      'Vite',
      'HTML5',
      'CSS3',
      'Styled Components',
      'React Native',
      'Zustand',
      'Jest',
      'RTL',
    ],
  },
  {
    title: 'Architecture and Delivery',
    badges: [
      'Product engineering',
      'Feature ownership',
      'SOLID',
      'Technical proposals',
      'Geospatial UI',
      'Design Systems',
      'Performance Optimization',
      'Monorepo Workflows',
      'Micro-frontends',
      'CI/CD',
      'AWS',
      'AWS Amplify',
    ],
  },
  {
    title: 'AI and Agentic',
    badges: [
      'Agentic systems',
      'LLM product UI',
      'Cursor',
      'Automated PR Review Bots',
      'AI Refactoring',
      'Claude',
      'Figma',
    ],
  },
  {
    title: 'Backend and Data',
    badges: ['Node.js', 'Express', 'REST integrations', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Languages',
    badges: ['English (C1)', 'Spanish (Native)'],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'Bappy',
    period: 'Predictions market',
    summary:
      'Prediction market for Latin America. People take a position on sports, politics, economy, and culture, or challenge their circle. I led the rebuild to Next.js, TypeScript, and Node, including fiat and crypto payments.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'AWS'],
    href: 'https://app.bappy.co',
    imageSrc: '/projects/bappy.jpg',
    mediaNote: 'Live app. Open a call or challenge a friend.',
  },
  {
    name: 'CVAccelerate',
    period: 'AI product',
    summary:
      'Paste a CV and a job description. You get a match score, a tailored summary, a note for the recruiter, and an ATS-safe PDF. The model only rewrites what is already in the CV. It does not invent employers, dates, or certifications.',
    stack: ['Next.js', 'TypeScript', 'AI'],
    href: 'https://www.cvaccelerate.app/',
    imageSrc: '/projects/cvaccelerate.jpg',
    mediaNote: 'Free classic template. Pro layouts for senior and academic roles.',
  },
  {
    name: 'Votelos',
    period: 'Civic tool',
    summary:
      'Tool for Colombia\'s 2026 presidential runoff. Voters compare the two finalists blind, then see who said what, with the quote and the page from the official program. Choices stay in the browser. Nothing is stored on a server.',
    stack: ['Next.js', 'TypeScript'],
    href: 'https://votelos.co/',
    imageSrc: '/projects/votelos.jpg',
    mediaNote: 'Twenty contrasting issues. No account. No campaign money.',
  },
  {
    name: 'Ossa Dispro',
    period: 'Commercial site',
    summary:
      'Site for a Bogotá studio that designs, fabricates, and installs custom curtains and blinds. Catalog, process, project photos, and a quote request for homes and offices.',
    stack: ['Next.js', 'TypeScript', 'SEO'],
    href: 'https://www.ossadispro.com/',
    imageSrc: '/projects/ossadispro.jpg',
    mediaNote: 'Residential and corporate installs across Bogotá.',
  },
  {
    name: 'CivilArq',
    period: 'Commercial site',
    summary:
      'Site for a Bogotá architecture and civil engineering practice. Soil studies, structural design, CAD, building permits, and turnkey construction, with the process and the work on the page.',
    stack: ['Next.js', 'TypeScript', 'SEO'],
    href: 'https://civilarq.vercel.app/',
    imageSrc: '/projects/civilarq.jpg',
    mediaNote: 'Three decades of built work, from houses to hotels.',
  },
];

export const experience: ExperienceEntry[] = [
  {
    company: 'Hauler Hero',
    role: 'Senior Product Engineer, Frontend',
    location: 'Remote, San Diego, California',
    period: 'May 2026 - Present',
    highlights: [
      'Own features end to end on the core CRM for waste collection and fleet companies, from the product proposal through production, on a large React and Redux app (RTK Query, MUI) moving to TypeScript.',
      'Led the migration from Webpack to Vite. Build time dropped from about 5 minutes to about 5 seconds, and hot reload got fast for the whole engineering team.',
      'Designed and built the Hero Vision review UI. An ML model flags container overloads. The screen shows the detection, the driver photo, the map, and a confirm action, replacing the old loop of uploading tablet photos and typing exceptions by hand.',
      'Shipped routing, work orders, billing, and deck.gl maps for fleet operations, and set the frontend direction: SOLID boundaries, strict layering (utils, components, state, forms), and the TypeScript migration.',
    ],
    stack: ['React', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'MUI', 'deck.gl', 'Vite'],
    previewImageSrc: '/career/hauler-hero.jpg',
  },
  {
    company: 'BorderFlow',
    role: 'Architecture and Agentic Engineer, Freelance',
    location: 'Remote, US-Mexico',
    period: 'Feb 2026 - Oct 2026',
    highlights: [
      'Consulted on the architecture of BorderFlow, a licensed customs broker on both sides of the US-Mexico border. Entries, pedimentos, border transfers, and long haul sit on one shipment record.',
      'Designed the agentic workflow for Zight. A shipper CCs the agent with the invoice, packing list, and BOL. Zight reads the documents, classifies the entry, and files it with CBP, with a licensed broker reviewing it.',
      'Shaped BorderFlow Transfers: a shipper posts a lane, a verified carrier accepts, and Carta Porte plus the e-Manifest are produced from the same record before the truck reaches the bridge.',
    ],
    stack: ['Next.js', 'TypeScript', 'System design', 'AI agents', 'Product architecture'],
    links: [
      { label: 'borderflow.co', href: 'https://borderflow.co/' },
      { label: 'bftransfer.co', href: 'https://bftransfer.co/' },
    ],
    previewImageSrc: '/career/borderflow.jpg',
  },
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
    href: 'https://app.bappy.co',
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
  jobTitle: 'Senior Product Engineer',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: contactEntries.map((entry) => entry.href),
  knowsLanguage: ['English', 'Spanish'],
  knowsAbout: skillCategories.flatMap((category) => category.badges),
};
