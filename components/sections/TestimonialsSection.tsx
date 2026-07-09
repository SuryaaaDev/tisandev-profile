import { TESTIMONIALS } from '@/lib/data'

/** Render bintang rating */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${rating} dari 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 ${i < rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}`}
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  )
}

/** Icon: kutipan */
function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-tisandev-glow/30 dark:text-tisandev-glow/20" aria-hidden="true">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
    </svg>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background orb */}
      <div aria-hidden="true" className="liquid-orb h-80 w-80 bg-tisandev/10 dark:bg-tisandev-dark/30 bottom-10 -right-20" style={{ animationDelay: '5s' }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tisandev dark:text-tisandev-glow">
            Testimoni
          </p>
          <h2 id="testimonials-heading" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Kata Mereka tentang{' '}
            <span className="text-gradient">tisandev</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Kepercayaan klien adalah motivasi terbesar kami untuk terus berkembang.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="glass-panel flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon + rating */}
              <div className="flex items-start justify-between">
                <QuoteIcon />
                <StarRating rating={t.rating} />
              </div>

              {/* Content */}
              <blockquote>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <figcaption className="mt-auto flex items-center gap-3 border-t border-white/20 dark:border-white/10 pt-4">
                {/* Avatar placeholder */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-tisandev to-tisandev-glow text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
