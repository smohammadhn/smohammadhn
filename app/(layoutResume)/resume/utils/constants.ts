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
      'Complex motion-driven interfaces combining GSAP, Framer Motion, and Three.js.',
      'Long-running kiosk applications engineered for stable memory and CPU usage.',
    ],
    note: 'Responsive across mobile, desktop, and large-format displays, built with WCAG in mind and covered by browser automation and regression testing.',
    stack: [
      'React/Next.js',
      'TypeScript',
      '3D Graphics',
      'GSAP',
      'React Three Fiber',
      'Drei',
      'Tailwind CSS',
      'Playwright',
    ],
  },
  {
    label: 'Backend \n& Systems',
    highlights: [
      'Modular production APIs with real-time, event-driven features, backed by relational schema design, query optimization, authentication, and third-party integrations.',
    ],
    stack: [
      'Node.js',
      'NestJS',
      'Prisma',
      'MySQL/PostgreSQL/MariaDb',
      'Supabase',
      'Websockets/Socket.IO',
    ],
  },
  {
    label: 'Infrastructure \n& Production',
    highlights: [
      'Containerized multi-service production, provisioned as code and run behind reverse-proxy routing, SSL, and observability.',
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
      'RAG systems connected to domain-specific knowledge, through multi-stage LLM processing, document preprocessing, and semantic retrieval.',
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
      'Trusted with lead engineering responsibilities across frontend, backend, and DevOps, frequently taking ownership of entire application layers based on project requirements.',
      'Delivered complete websites and interactive digital experiences under exceptionally tight deadlines, sometimes turning around entire projects in under two weeks.',
      'Engineered performance-sensitive kiosk applications, focusing on asset preloading, memory and heap management, leak detection, and sustained performance across extended sessions.',
      'Owned end-to-end quality and release readiness through Playwright automation, accessibility and security audit requirements, analytics instrumentation, and production testing.',
    ],
  },
  {
    company: 'Dream Team Creative Inc.',
    siteUrl: '',
    engagement: 'Independent Contractor · Canada · Remote',
    period: '2023 — Present',
    highlights: [
      'Designed and developed a multi-stage AI processing engine combining document analysis, preprocessing, Pinecone-powered semantic retrieval, and dynamically constructed LLM prompts.',

      'Implemented a multi-step LLM orchestration pipeline with deterministic post-processing, Azure Functions execution, and end-to-end streaming through backend services to the frontend.',

      'Built a highly customized rich-text editor using Lexical, implementing an extensive collection of custom nodes including pricing tables, payment components, buttons, and other structured content elements.',

      'Led a comprehensive overhaul of the existing platform, rebuilding its interface and application experience around a new product design.',

      'Integrated Supabase-backed data infrastructure and Stripe payments, maintaining existing data integrity throughout the platform transition.',
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
      'One of my most challenging projects, over 5000 concurrent users all playing a live game at the same time. So much synchronization and precise job scheduling. I was the Solo backend developer and Devops engineer for this project.',
    visible: true,
  },
  {
    name: 'TD Bank of Canada; Talk Money Challenge 2026',
    period: 'Summer — Fall 2026',
    commitCount: 246,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/td-barbie-game',
    summary:
      'Undergoing huge accessibility audit and PEN-testing, I was involved in three projects for TD Bank of Canada. The most recent one called "Talk Money Challenge" is a puzzle style game. I was Lead Backend Developer for the Talk Money Challenge 2026 and the Frontend developer of the other two.',
    visible: true,
  },
  {
    name: "Cobrief's SASS Platform & Website",
    period: 'Winter — Fall 2026',
    commitCount: 827,
    githubRepoURL: 'https://github.com/cobriefhq/cobrief-platform',
    summary:
      'Created a full AI engine to parse documents and review for risks, Overhauled the entire platform and website UI according to their provided new design.',
    visible: true,
  },
  {
    name: 'Mercedes x MuseAI Trackside 2026',
    period: 'Fall 2026',
    commitCount: 105,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/f1ace',
    summary:
      'Las Vegas and Austin, hosted a physical pitwall to drag the user in the shoes of a Formula 1 manager, 10 Monitors, 5 tablets, over 3000+ runs, kiosk mode tabs constantly running for 9 hours. Significant memory and heap testing plus smartest asset preloading to eliminate lag.',
    visible: true,
  },
  {
    name: "Armstrong's CheeseAI Chatbot",
    period: 'Early 2025 — Summer 2026',
    commitCount: 364,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/saputo-armstrong-cheesegpt',
    summary:
      'A ChatGpt with a PHD in Cheese, we implemented Azure Vector Search, admin panel, react-based widget for their official Website. Lead Frontend and part backend developer on this one.',
    visible: true,
  },
  {
    name: 'Be The People Music Mix Event',
    period: 'Spring — Summer 2026',
    commitCount: 110,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/be-the-people-music',
    summary:
      'Another private event in New York, For DJs and Music producers to see their AI-generated music and artworks based on their answers to certain questions. First time using Convex for real-time data syncing. Hardware aside, I was in charge of all the backend and half of kiosk views.',
    visible: true,
  },
  {
    name: 'Candy Crush x Thundercat: Upside Down',
    period: 'Fall 2025',
    commitCount: 118,
    githubRepoURL: 'https://github.com/reflektor-digital-inc/candy-crush-proto',
    summary:
      "The world's first playable live-action music video. Swipe, match, and drive Thundercat's cinematic narrative in real time. So much frontend work, I was in their frontend team of 5.",
    visible: true,
  },
  {
    name: 'True Hockey - Game On Ball',
    period: 'Spring 2026',
    commitCount: 66,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/game-on-true-hockey',
    summary:
      'The Game On Ball by TRUE Hockey is a tech-enabled street hockey ball designed to combat "rat-running". Website includes heavy GSAP animations and parallax effects.',
    visible: true,
  },
  {
    name: 'tentree Following Wildfire; The Admin Panel',
    period: 'Early 2024',
    commitCount: 172,
    githubRepoURL:
      'https://github.com/reflektor-digital-inc/following-wildfire-admin-panel',
    summary:
      'They showed me the website, asked me to make an admin panel for them with no figma design or references of any kind. Their panel was ready in under 2 weeks. The whole website ended up winning multiple awards. ',
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
      'Admin portal for the TD Aeroplan 10 year anniversary contest. Next.js and TypeScript.',
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
    engagement: 'Remote',
    period: 'Sep 2021 — Feb 2023',
    highlights: [
      'Led front-end development of bazarkhodro.ir, a car marketplace for buying and selling vehicles, with a focus on SEO and web performance.',
      'Built rentifa.com, a bilingual car rental platform serving the domestic market and neighboring countries.',
    ],
  },
  {
    company: 'Ryca & freelance clients',
    role: 'Front-end Developer',
    engagement: 'Remote',
    period: 'Feb 2019 — Sep 2021',
    summary:
      'Delivered websites and admin panels for a range of clients with Vue, Nuxt and React.',
  },
]

// ---------------------------------------------------------------------------
// Did you know (short personal facts, closes page two)
// ---------------------------------------------------------------------------

export const didYouKnow: string[] = [
  'Fluent in English, with three years of daily collaboration with Canadian and UK teams.',
  'Worked with engineers and stakeholders from Canada, the US, the UK, India, Japan and Türkiye.',
]
