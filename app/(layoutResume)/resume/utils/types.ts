export interface ContactItem {
  label: string
  href: string
}

export interface SkillGroup {
  label: string
  highlights: readonly string[]
  note?: string
  stack: readonly string[]
}

export interface ExperienceItem {
  company: string
  role?: string
  siteUrl?: string
  engagement: string
  period: string
  summary?: string
  highlights?: string[]
}

export interface ProjectItem {
  name: string
  period?: string
  link?: string
  githubRepoURL?: string
  commitCount?: number
  summary?: string
  visible: boolean
}
