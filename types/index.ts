/**
 * Tipe data global untuk tisandev
 */

/** Kategori proyek portfolio */
export type PortfolioCategory =
  | 'all'
  | 'landing-page'
  | 'company-profile'
  | 'e-commerce'
  | 'web-app'

/** Satu item proyek portfolio */
export interface PortfolioItem {
  id: string
  title: string
  description: string
  thumbnail: string
  category: Exclude<PortfolioCategory, 'all'>
  techStack: string[]
  liveUrl?: string
  demoAvailable?: boolean
  githubUrl?: string
  caseStudyUrl?: string
}

/** Satu layanan yang ditawarkan */
export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

/** Satu testimoni klien */
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: 1 | 2 | 3 | 4 | 5
}

/** Item navigasi */
export interface NavItem {
  label: string
  href: string
}
