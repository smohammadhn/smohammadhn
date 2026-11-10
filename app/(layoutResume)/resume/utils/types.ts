export interface ContactItem {
  label: string
  href: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  engagement: string
  period: string
  summary?: string
  highlights?: string[]
}

export interface ProjectItem {
  name: string
  link?: string
  summary: string
  stack: string[]
}
