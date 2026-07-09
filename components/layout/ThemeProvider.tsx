'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ComponentProps } from 'react'

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>

/**
 * Wrapper tipis di atas NextThemesProvider.
 * Dipakai di layout.tsx (Server Component) untuk mengisolasi
 * direktif 'use client' agar tidak mencemari seluruh layout.
 *
 * Konfigurasi:
 * - attribute="class"  → Tailwind dark mode via class di <html>
 * - defaultTheme="system" → ikuti preferensi OS pengguna
 * - disableTransitionOnChange → cegah flash transisi CSS saat mode berganti
 */
export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
