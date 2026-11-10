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

export const skillGroups = [
  {
    label: 'Frontend Engineering',
    highlights: [
      'Complex motion-driven interfaces combining GSAP, Framer Motion, and Three.js.',
      'Long-running kiosk applications engineered for stable memory and CPU usage.',
      'Responsive experiences across mobile, desktop, and large-format displays.',
      'Accessible interfaces built with WCAG guidelines in mind.',
      'Browser automation, interaction testing, and regression testing.',
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'GSAP',
      'Framer Motion',
      'Three.js',
      'React Three Fiber',
      'Drei',
      'Tailwind CSS',
      'Playwright',
    ],
  },
  {
    label: 'Backend & Systems',
    highlights: [
      'Modular backend architecture and production API development.',
      'Real-time communication and event-driven application features.',
      'Relational database design, schema modeling, and query optimization.',
      'Authentication, authorization, and third-party service integrations.',
    ],
    stack: [
      'Node.js',
      'NestJS',
      'Prisma',
      'PostgreSQL',
      'MySQL',
      'Supabase',
      'Socket.IO',
    ],
  },
  {
    label: 'Infrastructure & Production',
    highlights: [
      'Containerized deployments and multi-service production environments.',
      'Cloud infrastructure provisioning and infrastructure as code.',
      'Reverse proxy configuration, traffic routing, and SSL management.',
      'Infrastructure monitoring, observability, and production troubleshooting.',
    ],
    stack: [
      'Docker',
      'Docker Compose',
      'Docker Swarm',
      'AWS',
      'Terraform',
      'Traefik',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    label: 'AI Engineering',
    highlights: [
      'RAG systems connected to domain-specific knowledge.',
      'Multi-stage LLM processing and document preprocessing pipelines.',
      'Semantic retrieval and vector-based knowledge search.',
    ],
    stack: ['OpenAI', 'LangChain', 'Embeddings', 'Vector Databases', 'RAG'],
  },
] as const

// ---------------------------------------------------------------------------
// Experience (current, Canadian engagements)
// ---------------------------------------------------------------------------

export const experience: ExperienceItem[] = [
  {
    company: 'Lorem Ipsum Inc.',
    role: 'Senior Full-Stack Engineer',
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
    role: 'Full-Stack Engineer',
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
// Selected projects (strongest few, shown on page one)
// ---------------------------------------------------------------------------

export const selectedProjects: ProjectItem[] = [
  {
    name: 'Project Lorem',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    name: 'Project Ipsum',
    summary:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stack: ['OpenAI', 'LangChain', 'RAG', 'Supabase'],
  },
  {
    name: 'Project Dolor',
    summary:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    stack: ['Docker Swarm', 'Traefik', 'Terraform', 'Grafana'],
  },
]

// ---------------------------------------------------------------------------
// More projects (overflow from selected projects, page two)
// ---------------------------------------------------------------------------

export const moreProjects: ProjectItem[] = [
  {
    name: 'Project Sit',
    summary:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stack: ['React', 'Three.js', 'GSAP'],
  },
  {
    name: 'Project Amet',
    summary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    stack: ['Vue', 'Nuxt', 'Socket.IO', 'MySQL'],
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
