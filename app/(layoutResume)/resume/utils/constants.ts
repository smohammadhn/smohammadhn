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
    company: 'Lorem Ipsum Inc.',
    siteUrl: 'https://loremipsum.com',
    engagement: 'Independent Contractor · Canada · Remote',
    period: '2023 — Present',
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    ],
  },
  {
    company: 'Dolor Sit Technologies',
    siteUrl: 'https://dolorsit.com',
    engagement: 'Independent Contractor · Canada · Remote',
    period: '2023 — Present',
    highlights: [
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Projects (page two, hidden when visible is false)
// ---------------------------------------------------------------------------

export const projects: ProjectItem[] = [
  {
    name: 'Project Lorem',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    visible: true,
  },
  {
    name: 'Project Ipsum',
    summary:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stack: ['OpenAI', 'LangChain', 'RAG', 'Supabase'],
    visible: true,
  },
  {
    name: 'Project Dolor',
    summary:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    stack: ['Docker Swarm', 'Traefik', 'Terraform', 'Grafana'],
    visible: true,
  },
  {
    name: 'Project Sit',
    summary:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stack: ['React', 'Three.js', 'GSAP'],
    visible: true,
  },
  {
    name: 'Project Amet',
    summary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    stack: ['Vue', 'Nuxt', 'Socket.IO', 'MySQL'],
    visible: true,
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
