import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx,mdx}',
    './types/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        tisandev: {
          DEFAULT: '#006019', // Logo-matched Deep Emerald Green (Official Hex was #005A1C, dominant logo pixel is #006019)
          light: '#008022',   // Hover state (brighter green)
          dark: '#004010',    // Dark mode accent (deeper shade)
          glow: '#10B981',    // Emerald/Mint glow accent
        },
      },
      boxShadow: {
        tisandev: '0 8px 32px 0 rgba(0, 96, 25, 0.2)',
        'tisandev-lg': '0 12px 48px 0 rgba(0, 96, 25, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config
