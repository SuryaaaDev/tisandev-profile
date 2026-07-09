import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/layout/ThemeProvider'

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'TisanDev - Jasa Pembuatan Website Modern & Profesional',
    template: '%s | TisanDev',
  },
  description:
    'TisanDev adalah studio jasa pembuatan website modern untuk bisnis, UMKM, dan startup. Kami membangun Landing Page, Company Profile, E-Commerce, hingga Web App yang cepat, responsif, dan SEO-friendly.',
  keywords: [
    'jasa pembuatan website',
    'web developer',
    'landing page',
    'company profile',
    'e-commerce',
    'TisanDev',
  ],
  authors: [{ name: 'TisanDev' }],
  creator: 'TisanDev',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'TisanDev — Jasa Pembuatan Website Modern & Profesional',
    description:
      'Studio jasa pembuatan website modern untuk bisnis, UMKM, dan startup.',
    siteName: 'TisanDev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tisandev — Jasa Pembuatan Website Modern & Profesional',
    description:
      'Studio jasa pembuatan website modern untuk bisnis, UMKM, dan startup.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo-tisan.png',
    apple: '/images/logo-tisan.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    /*
     * suppressHydrationWarning diperlukan di <html> karena next-themes
     * menyuntikkan atribut class="dark|light" setelah hidrasi,
     * yang menyebabkan mismatch antara server dan klien.
     * Ini adalah pola resmi yang direkomendasikan next-themes.
     */
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
