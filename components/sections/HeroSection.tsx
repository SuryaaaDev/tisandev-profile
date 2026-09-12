import { CONTACT } from '@/lib/constants'

/** Icon: Arrow right */
function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

/** Icon: WhatsApp */
function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero — tisandev"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* ── Liquid orb decorations ── */}
      <div
        aria-hidden="true"
        className="liquid-orb h-[32rem] w-[32rem] bg-tisandev/10 dark:bg-tisandev-dark/30 -top-32 -left-32"
      />
      <div
        aria-hidden="true"
        className="liquid-orb h-96 w-96 bg-tisandev-glow/10 dark:bg-tisandev/20 top-1/3 -right-24"
        style={{ animationDelay: '4s' }}
      />
      <div
        aria-hidden="true"
        className="liquid-orb h-64 w-64 bg-tisandev/5 dark:bg-tisandev-dark/20 bottom-20 left-1/4"
        style={{ animationDelay: '8s' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tisandev/20 bg-tisandev/5 px-4 py-1.5 backdrop-blur-sm dark:border-tisandev-light/20 dark:bg-tisandev-dark/40 opacity-0 animate-fade-in">
          <span className="h-2 w-2 animate-pulse rounded-full bg-tisandev-glow" aria-hidden="true" />
          <span className="text-xs font-semibold text-tisandev dark:text-tisandev-glow">
            Menerima proyek baru — Slot tersedia
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl lg:text-7xl opacity-0 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          Website Modern untuk{' '}
          <span className="text-gradient">Bisnis Anda</span>
        </h1>

        {/* Sub-heading */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          tisandev membangun{' '}
          <strong className="font-semibold text-slate-900 dark:text-slate-200">
            Landing Page, Company Profile, E-Commerce,
          </strong>{' '}
          dan{' '}
          <strong className="font-semibold text-slate-900 dark:text-slate-200">
            Web App
          </strong>{' '}
          yang cepat, responsif, dan mengonversi pengunjung menjadi pelanggan.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-2 px-8 py-3.5 text-base"
          >
            <WhatsAppIcon />
            Konsultasi Gratis
          </a>
          <a
            href="#portfolio"
            className="btn-secondary gap-2 px-8 py-3.5 text-base"
          >
            Lihat Portofolio
            <ArrowRightIcon />
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          {[
            { value: '50+', label: 'Proyek Selesai' },
            { value: '98%', label: 'Klien Puas' },
            { value: '10 Menit', label: 'Rata-rata Respon' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-50">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950"
      />
    </section>
  )
}
