import type {
  ContactItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
} from './types'

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

export const contacts: ContactItem[] = [
  { label: 'smohammadhnd@gmail.com', href: 'mailto:smohammadhnd@gmail.com' },
  {
    label: 'linkedin.com/in/smohammadhn',
    href: 'https://www.linkedin.com/in/smohammadhn/',
  },
  { label: 'github.com/smohammadhn', href: 'https://github.com/smohammadhn' },
]

// ---------------------------------------------------------------------------
// Technical expertise
// ---------------------------------------------------------------------------

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend Engineering',
    highlights: [
      'Motion-driven interfaces and 3D experiences using GSAP, Framer Motion, and Three.js.',
      'Long-running kiosk applications optimized for memory, CPU, and sustained performance.',
      'Responsive, accessible experiences across mobile, desktop, and large-format displays, backed by browser automation and regression testing.',
    ],
    stack: [
      'React/Next.js',
      'TypeScript',
      '3D Graphics',
      'GSAP',
      'React Three Fiber',
      'Drei',
      'Tailwind CSS',
      'Playwright',
      'WebGL',
    ],
  },
  {
    label: 'Backend \n& Systems',
    highlights: [
      'Production APIs and real-time systems with relational database design, query optimization, authentication, and third-party integrations.',
    ],
    stack: [
      'Node.js',
      'NestJS',
      'Prisma',
      'MySQL/PostgreSQL',
      'Supabase',
      'WebSockets/Socket.IO',
    ],
  },
  {
    label: 'Infrastructure \n& Production',
    highlights: [
      'Containerized deployments, infrastructure automation, reverse-proxy routing, SSL, and production observability.',
    ],
    stack: [
      'AWS/Azure/Cloudflare',
      'Docker/Compose/Swarm',
      'Terraform',
      'Traefik',
      'Twilio',
      'Grafana',
    ],
  },
  {
    label: 'AI \nEngineering',
    highlights: [
      'Multi-stage LLM pipelines, document processing, RAG architectures, and semantic retrieval over domain-specific knowledge.',
    ],
    stack: [
      'OpenAI',
      'LangChain',
      'Embeddings',
      'Vector Databases',
      'RAG',
      'Prompt Engineering',
    ],
  },
]

// ---------------------------------------------------------------------------
// Experience (current, Canadian engagements)
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    company: 'Reflektor Digital Inc.',
    siteUrl: 'https://reflektor.digital/',
    engagement: 'Independent Contractor · Canada · Remote',
    period: '2023 — Present',
    highlights: [
      'Contributed to 20+ digital projects for internationally recognized clients, including TD Bank, CBC, Mercedes-Benz, Meta, and Missing Pieces.',
      'Led engineering across frontend, backend, and DevOps, frequently owning entire application layers and delivering complete experiences under tight deadlines, sometimes in under two weeks.',
      'Engineered performance-sensitive kiosk applications and owned release readiness, covering memory optimization, asset preloading, leak detection, Playwright automation, accessibility, security audits, and production testing.',
    ],
  },
  {
    company: 'Dream Team Creative Inc.',
    siteUrl: '',
    engagement: 'Independent Contractor · Canada · Remote',
    period: '2023 — Present',
    highlights: [
      'Designed a multi-stage AI processing engine combining document analysis, preprocessing, Pinecone semantic retrieval, and dynamically constructed LLM prompts.',
      'Implemented an LLM orchestration pipeline with deterministic post-processing, Azure Functions execution, and end-to-end streaming across backend and frontend services.',
      'Rebuilt the platform around a new product design, developing a customized Lexical editor with structured content nodes and integrating Supabase infrastructure and Stripe payments while preserving existing data integrity.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Projects (page two, hidden when visible is false)
// ---------------------------------------------------------------------------

export const projects: ProjectItem[] = [
  {
    name: 'Canadian Broadcasting Corporation; CBC Winter Olympics 2026',
    period: 'Fall 2025 — Winter 2026',
    commitCount: 340,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/cbc-olympics-winter-2026',
    summary:
      'One of my most challenging projects: a live multiplayer game with 5,000+ concurrent users. I was the sole backend developer and DevOps engineer, responsible for real-time synchronization and precise job scheduling.',
    visible: true,
  },
  {
    name: 'TD Bank of Canada; Talk Money Challenge 2026',
    period: 'Summer — Fall 2026',
    commitCount: 246,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/td-barbie-game',
    summary:
      'Worked across three TD Bank projects, all undergoing extensive accessibility audits and penetration testing. I led backend development for Talk Money Challenge, a puzzle-style game, and handled frontend development for the other two.',
    visible: true,
  },
  {
    name: "Cobrief's SaaS Platform & Website",
    period: 'Winter — Fall 2026',
    commitCount: 827,
    githubRepoURL: 'https://github.com/cobriefhq/cobrief-platform',
    summary:
      'Built an AI engine that analyzes documents and identifies potential risks. Also overhauled the entire platform and website to match their new product design.',
    visible: true,
  },
  {
    name: 'Mercedes x MuseAI Trackside 2026',
    period: 'Fall 2026',
    commitCount: 105,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/f1ace',
    summary:
      'Helped bring a Formula 1 pitwall experience to life in Las Vegas and Austin, with 10 monitors and 5 tablets. The kiosks handled 3,000+ runs and stayed active for 9-hour sessions, requiring extensive memory testing and careful asset preloading to keep everything running smoothly.',
    visible: true,
  },
  {
    name: "Armstrong's CheeseAI Chatbot",
    period: 'Early 2025 — Summer 2026',
    commitCount: 364,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/saputo-armstrong-cheesegpt',
    summary:
      'A ChatGPT with a PhD in cheese. We built an AI chatbot using Azure AI Search, along with an admin panel and a React-based widget for Armstrong’s official website. I led frontend development and contributed to the backend.',
    visible: true,
  },
  {
    name: 'Be The People Music Mix Event',
    period: 'Spring — Summer 2026',
    commitCount: 110,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/be-the-people-music',
    summary:
      'An interactive event in New York where DJs and music producers explored AI-generated music and artwork based on their answers to a series of questions. I handled the backend and roughly half of the kiosk interfaces, using Convex for real-time data synchronization.',
    visible: true,
  },
  {
    name: 'Candy Crush x Thundercat: Upside Down',
    period: 'Fall 2025',
    commitCount: 118,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/candy-crush-proto',
    summary:
      "The world's first playable live-action music video. Players swipe, match, and interact with Thundercat's cinematic narrative in real time. I was part of a five-person frontend team.",
    visible: true,
  },
  {
    name: 'TRUE Hockey - Game On Ball',
    period: 'Spring 2026',
    commitCount: 66,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/game-on-true-hockey',
    summary:
      'Built the website for TRUE Hockey’s tech-enabled street hockey ball, designed to combat rat-running. The site features heavy GSAP animations and parallax effects.',
    visible: true,
  },
  {
    name: 'tentree Following Wildfire; The Admin Panel',
    period: 'Early 2024',
    commitCount: 172,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/following-wildfire-admin-panel',
    summary:
      'They showed me the website and asked me to build an admin panel. No Figma file, no design references, just the website. I figured it out and delivered the panel in under two weeks. The website went on to win multiple awards.',
    visible: true,
  },

  // ------------------------------------------------------------------------------------------
  // --- INVISIBLE ONES, They don't get nominated for the "Selected Projects" section, but they're here for completeness -------
  // ------------------------------------------------------------------------------------------
  {
    name: 'ufc-meta-ai-barbershop',
    period: 'Summer 2025',
    commitCount: 102,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/ufc-meta-ai-barbershop',
    summary: '',
    visible: false,
  },
  {
    name: 'dnd-tify',
    period: 'Fall 2024 — Winter 2025',
    commitCount: 468,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/dnd-tify',
    summary: '',
    visible: false,
  },
  {
    name: 'msft-build_terminal-prototype',
    period: 'Spring 2025',
    commitCount: 56,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/msft-build_terminal-prototype',
    summary: '',
    visible: false,
  },
  {
    name: 'td-junos-website-frontend',
    period: 'early 2025',
    commitCount: 149,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/td-junos-website-frontend',
    summary: '',
    visible: false,
  },
  {
    name: 'cbc-olympics-frontend',
    period: 'Spring — Summer 2024',
    commitCount: 724,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/cbc-olympics-frontend',
    summary: '',
    visible: false,
  },
  {
    name: 'cbc-olympics-backend',
    period: 'Spring — Summer 2024',
    commitCount: 147,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/cbc-olympics-backend',
    summary: 'CBC Olympics backend.',
    visible: false,
  },
  {
    name: 'following-wildfire-frontend',
    period: 'early 2025',
    commitCount: 18,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/following-wildfire-frontend',
    summary: '',
    visible: false,
  },
  {
    name: 'td-aeroplan-contest-panel',
    period: 'Fall 2024',
    commitCount: 39,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/td-aeroplan-contest-panel',
    summary:
      'Admin portal for the TD Aeroplan 10-year anniversary contest, built with Next.js and TypeScript.',
    visible: false,
  },
  {
    name: 'f1-beta-testers-nverse',
    period: 'Fall 2024',
    commitCount: 44,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/f1-beta-testers-nverse',
    summary:
      'Next.js and TypeScript project for F1 beta testers at nverse.com.',
    visible: false,
  },
  {
    name: 'td-junos-panel-frontend',
    period: 'early 2025',
    commitCount: 3,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/td-junos-panel-frontend',
    summary: '',
    visible: false,
  },
  {
    name: 'muse-trackside-proto',
    period: 'Fall 2026',
    commitCount: 13,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/muse-trackside-proto',
    summary:
      'Meta Trackside 2026 Muse iPad prototype, using Muse Spark via OpenRouter for F1 Q&A artifacts.',
    visible: false,
  },
  {
    name: 'you-always-have-options',
    period: 'Fall 2024',
    commitCount: 18,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/you-always-have-options',
    summary: 'The one with the rounded text and one pager.',
    visible: false,
  },
  {
    name: 'Bazarkhodro Website',
    visible: false,
  },
  {
    name: 'Ryca CMS',
    visible: false,
  },
  {
    name: 'Rentifa Website & Admin Panels',
    visible: false,
  },
  {
    name: 'NutricaSteel Website',
    visible: false,
  },
]

// ---------------------------------------------------------------------------
// Earlier experience (pre-2023 roles, page two)
// ---------------------------------------------------------------------------

export const earlierExperience: ExperienceItem[] = [
  {
    company: 'Bazarkhodro',
    role: 'Lead Front-end Developer',
    period: 'Sep 2021 — Feb 2023',
    summary:
      'Led the front end of bazarkhodro.ir and built rentifa.com, a bilingual car rental platform.',
  },
  {
    company: 'Ryca & freelance clients',
    role: 'Front-end Developer',
    period: 'Feb 2019 — Sep 2021',
    summary: 'Websites and admin panels for clients, in Vue, Nuxt and React.',
  },
]

// One line under earlier experience, in place of the Did You Know list
export const earlierExperienceNote =
  'Languages: English (Fluent) · 3 years of daily collaboration with Canadian and UK teams.'
