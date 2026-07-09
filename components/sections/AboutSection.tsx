export default function AboutSection() {
  const stats = [
    { value: '3+', label: 'Tahun Pengalaman' },
    { value: '50+', label: 'Proyek Selesai' },
    { value: '30+', label: 'Klien Aktif' },
    { value: '98%', label: 'Tingkat Kepuasan' },
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background orb */}
      <div aria-hidden="true" className="liquid-orb h-80 w-80 bg-tisandev-glow/10 dark:bg-tisandev/20 bottom-0 -left-20" style={{ animationDelay: '6s' }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left — text content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tisandev dark:text-tisandev-glow">
              Tentang tisandev
            </p>
            <h2 id="about-heading" className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              Studio Digital yang{' '}
              <span className="text-gradient">Peduli Hasil</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                tisandev adalah studio pengembangan web yang berfokus pada kualitas, performa, dan pengalaman pengguna. Kami percaya bahwa website yang baik bukan hanya terlihat indah tetapi juga harus bekerja keras untuk bisnis Anda.
              </p>
              <p>
                Dengan pengalaman lebih dari 3 tahun melayani klien dari berbagai industri, mulai dari UMKM lokal hingga startup teknologi. Kami memahami bahwa setiap bisnis punya kebutuhan unik yang membutuhkan solusi yang tepat sasaran.
              </p>
              <p>
                Prinsip kami sederhana:{' '}
                <strong className="font-semibold text-slate-900 dark:text-slate-200">
                  kode yang bersih, desain yang inovatif, dan komunikasi yang transparan.
                </strong>
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Mulai Proyek
              </a>
              <a href="#portfolio" className="btn-secondary">
                Lihat Hasil Kerja
              </a>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel flex flex-col items-center justify-center gap-2 p-8 text-center"
              >
                <span className="text-4xl font-extrabold text-gradient">{stat.value}</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
