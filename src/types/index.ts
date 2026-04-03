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

export interface SupportedSoftwareItem {
  name: string
  version: string
  /** Python wheel ABI 标签，如 cp310、cp311 */
  abi: string[]
}

export interface SupportedSoftwareGridSection {
  type: 'supportedSoftwareGrid'
  title: string
  columns: {
    package: string
    version: string
    abi: string
  }
  items: SupportedSoftwareItem[]
}

export type ServiceSection = RepoServiceSection | SupportedSoftwareGridSection

export interface ServiceData {
  sections: ServiceSection[]
}
