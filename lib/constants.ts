import type { NavItem, PortfolioCategory } from '@/types'

/** Daftar item navigasi untuk smooth-scroll */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda',      href: '#hero' },
  { label: 'Tentang',      href: '#about' },
  { label: 'Layanan',      href: '#services' },
  { label: 'Portofolio',   href: '#portfolio' },
  { label: 'Testimoni',    href: '#testimonials' },
  { label: 'Kontak',       href: '#contact' },
]

/** Kategori filter portofolio */
export const PORTFOLIO_CATEGORIES: { value: PortfolioCategory; label: string }[] = [
  { value: 'all',             label: 'Semua' },
  { value: 'landing-page',   label: 'Landing Page' },
  { value: 'company-profile', label: 'Company Profile' },
  { value: 'e-commerce',     label: 'E-Commerce' },
  { value: 'web-app',        label: 'Web App' },
]

/** Kontak bisnis */
export const CONTACT = {
  whatsapp: 'https://wa.me/6289502264034',
  email: 'to be updated',
  instagram: 'https://instagram.com/tisan.dev',
  tiktok: 'https://tiktok.com/@tisandev',
} as const
