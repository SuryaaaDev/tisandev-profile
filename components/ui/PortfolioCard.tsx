import Image from 'next/image'
import type { PortfolioItem } from '@/types'

/** Icon: External link ↗ */
function ArrowUpRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  )
}

/** Icon: GitHub */
function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/60 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-tisandev/20">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl p-2">
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800">
          <Image
            src={item.thumbnail}
            alt={`Screenshot ${item.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 pt-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {item.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5" aria-label="Tech stack">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-tisandev/10 px-2.5 py-0.5 text-xs font-medium text-tisandev-dark dark:bg-tisandev/20 dark:text-tisandev-glow"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-1 flex items-center gap-2">
          {item.demoAvailable === false || !item.liveUrl ? (
            <button
              disabled
              className="btn-primary flex-1 py-2 text-xs opacity-50 cursor-not-allowed pointer-events-none"
              title="Demo tidak tersedia"
            >
              <ArrowUpRightIcon />
              Demo Tidak Tersedia
            </button>
          ) : (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 py-2 text-xs"
            >
              <ArrowUpRightIcon />
              Kunjungi Situs
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository ${item.title}`}
              className="btn-secondary p-2"
            >
              <GitHubIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}