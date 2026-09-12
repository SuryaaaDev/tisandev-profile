'use client'

import { useState, useId } from 'react'
import { CONTACT } from '@/lib/constants'

/** Icon: WhatsApp */
function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

/** Icon: Email */
function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

type FormStatus = 'idle' | 'success'

export default function ContactSection() {
  const id = useId()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as keyof typeof errors
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {}
    if (!form.name.trim()) newErrors.name = 'Nama Lengkap wajib diisi.'
    if (!form.email.trim()) newErrors.email = 'Email wajib diisi.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email tidak valid.'
    if (!form.message.trim()) newErrors.message = 'Pesan wajib diisi.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const message = `Halo, saya ${form.name} (${form.email}).%0A%0APesan:%0A${form.message}`
    const waNumber = CONTACT.whatsapp.replace('https://wa.me/', '')
    const waUrl = `https://wa.me/${waNumber}?text=${message}`
    window.open(waUrl, '_blank', 'noopener,noreferrer')
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setErrors({})
  }

  const inputClass = 'w-full rounded-xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-3 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none transition focus:border-tisandev dark:focus:border-tisandev-light focus:ring-2 focus:ring-tisandev/20'

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background orbs */}
      <div aria-hidden="true" className="liquid-orb h-96 w-96 bg-tisandev/10 dark:bg-tisandev-dark/30 -top-20 -left-20" style={{ animationDelay: '1s' }} />
      <div aria-hidden="true" className="liquid-orb h-72 w-72 bg-tisandev-glow/10 dark:bg-tisandev/20 bottom-0 right-0" style={{ animationDelay: '7s' }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tisandev dark:text-tisandev-glow">
            Hubungi Kami
          </p>
          <h2 id="contact-heading" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
            Siap Mulai{' '}
            <span className="text-gradient">Proyek Anda?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Ceritakan kebutuhan Anda — kami akan membalas dalam waktu 1x24 jam.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left — quick contact cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-500">
                <WhatsAppIcon />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">WhatsApp</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Respon cepat &lt; 5 menit</p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="glass-panel flex items-center gap-4 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-tisandev/10 text-tisandev dark:text-tisandev-glow">
                <EmailIcon />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">Email</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{CONTACT.email}</p>
              </div>
            </a>

            {/* Info card */}
            <div className="glass-panel p-5">
              <p className="mb-2 font-semibold text-slate-900 dark:text-slate-50">Jam Operasional</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Senin – Minggu</p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-200">24 Jam</p>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="glass-panel p-6 lg:col-span-3 lg:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 text-3xl">
                  ✓
                </div>
                <p className="text-xl font-bold text-slate-900 dark:text-slate-50">Pesan Terkirim!</p>
                <p className="text-slate-600 dark:text-slate-400">Kami akan segera menghubungi Anda.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-2">
                  Kirim Pesan Lagi
                </button>
              </div>
            ) : (
<form onSubmit={handleSubmit}>
                 <div className="flex flex-col gap-4">
                   <div>
                     <label htmlFor={`${id}-name`} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                       Nama Lengkap <span className="text-red-500" aria-hidden="true">*</span>
                     </label>
                     <input
                       id={`${id}-name`}
                       name="name"
                       type="text"
                       required
                       autoComplete="name"
                       placeholder="Ramdan Hakim"
                       value={form.name}
                       onChange={handleChange}
                       className={`${inputClass} ${errors.name ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                     />
                     {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                   </div>

                   <div>
                     <label htmlFor={`${id}-email`} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                       Email <span className="text-red-500" aria-hidden="true">*</span>
                     </label>
                     <input
                       id={`${id}-email`}
                       name="email"
                       type="email"
                       required
                       autoComplete="email"
                       placeholder="ramdan@mail.com"
                       value={form.email}
                       onChange={handleChange}
                       className={`${inputClass} ${errors.email ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                     />
                     {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                   </div>

                   <div>
                     <label htmlFor={`${id}-message`} className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                       Ceritakan Proyek Anda <span className="text-red-500" aria-hidden="true">*</span>
                     </label>
                     <textarea
                       id={`${id}-message`}
                       name="message"
                       required
                       rows={5}
                       placeholder="Saya butuh website untuk bisnis saya di bidang..."
                       value={form.message}
                       onChange={handleChange}
                       className={`${inputClass} resize-none ${errors.message ? 'border-red-500 focus:ring-red-500/20' : ''}`}
                     />
                     {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                   </div>

<button
                     type="submit"
                     className="btn-primary w-full py-3.5 text-base"
                   >
                      Kirim Pesan
                   </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
