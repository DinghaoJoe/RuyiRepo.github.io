export interface FeedbackItem {
  label: string
  value: string
  url?: string
}

export interface Feedback {
  title: string
  note?: string
  closing?: string
  items: FeedbackItem[]
}

export interface SiteConfig {
  lang: 'zh' | 'en'
  intro: {
    title: string
    paragraphs: string[]
  }
  servicesTitle: string
  feedback: Feedback
}

// --- Service data types ---

export interface RepoServiceSection {
  type: 'repoService'
  repoAddress: { label: string; url: string }
  usageExample: { title: string; code: string }
}

export interface SupportedSoftwareGridSection {
  type: 'supportedSoftwareGrid'
  title: string
  items: { name: string; version?: string }[]
}

export type ServiceSection = RepoServiceSection | SupportedSoftwareGridSection

export interface ServiceData {
  sections: ServiceSection[]
}
