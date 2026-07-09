'use client'

import { useState } from 'react'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'
import { PORTFOLIO_ITEMS } from '@/lib/data'
import type { PortfolioCategory } from '@/types'
import PortfolioCard from '@/components/ui/PortfolioCard'

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all')

  const filtered = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p) => p.category === activeCategory)

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background orb */}
      <div aria-hidden="true" className="liquid-orb h-96 w-96 bg-tisandev/10 dark:bg-tisandev-dark/30 top-10 right-10" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tisandev dark:text-tisandev-glow">
            Portofolio
          </p>
          <h2 id="portfolio-heading" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Hasil Kerja yang
            <span className="text-gradient"> Membawa Kekuatan</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Berikut sebagian proyek yang telah kami kerjakan dengan penuh dedikasi.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter kategori portofolio">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              aria-pressed={activeCategory === cat.value}
              className={[
                'rounded-full px-5 py-2 text-sm px-0 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tisandev',
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-tisandev to-tisandev-light text-white shadow-lg shadow-tisandev/20'
                  : 'glass-panel hover:-translate-y-0.5 text-slate-600 dark:text-slate-400'
              ].join(' ')
            }>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}

          {/* To Be Continued Card */}
          <div className="group relative flex flex-col justify-center items-center text-center p-8 rounded-3xl border border-dashed border-tisandev/40 dark:border-tisandev-glow/30 bg-white/20 dark:bg-slate-900/20 backdrop-blur-md shadow-lg min-h-[350px] overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-tisandev/20">
            {/* Decorative background glow */}
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-tisandev/5 dark:bg-tisandev-glow/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="rounded-2xl bg-tisandev/10 dark:bg-tisandev-glow/10 p-4 text-tisandev dark:text-tisandev-glow mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-tisandev dark:group-hover:text-tisandev-glow transition-colors duration-300">
              Proyek Baru Segera Hadir
            </h3>
            
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-[240px]">
              Kami terus melakukan inovasi dan mengerjakan berbagai proyek menarik lainnya. Tetap pantau halaman ini!
            </p>
            
            <span className="mt-6 text-xs font-semibold uppercase tracking-wider text-tisandev dark:text-tisandev-glow bg-tisandev/10 dark:bg-tisandev-glow/10 px-3 py-1.5 rounded-full">
              To Be Continued
            </span>
          </div>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="py-20 text-center text-slate-500 dark:text-slate-400">
            Belum ada proyek di kategori ini.
          </div>
        )}
      </div>
    </section>
  )
}