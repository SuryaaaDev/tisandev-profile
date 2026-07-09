# Design System & Guidelines - tisandev

## 1. Visual Theme: Liquid Glass
Tema ini menggabungkan tren **Glassmorphic** (efek kaca transparan) dengan elemen **Liquid** (bentuk cairan organik dan gradasi warna yang bergerak lambat di latar belakang). Efek ini memberikan kesan premium, modern, dan sangat futuristik.

## 2. Color Palette & Modes

### 2.1. Light Mode (Fresh & Clean Glass)
* **Background:** `bg-slate-50` dengan aksen gradasi lingkaran cair (`bg-cyan-200/40` & `bg-fuchsia-200/40`) di balik elemen kaca.
* **Glass Panels:** `bg-white/40` dengan `backdrop-blur-md` dan *border* tipis `border-white/60`.
* **Primary Text:** `text-slate-900`
* **Secondary Text:** `text-slate-600`
* **Accent Color:** `text-cyan-600` / `bg-cyan-600`

### 2.2. Dark Mode (Deep Cyber Glass)
* **Background:** `bg-slate-950` dengan aksen gradasi lingkaran cair (`bg-indigo-900/30` & `bg-violet-950/40`).
* **Glass Panels:** `bg-slate-900/40` dengan `backdrop-blur-md` dan *border* tipis `border-white/10`.
* **Primary Text:** `text-slate-50`
* **Secondary Text:** `text-slate-400`
* **Accent Color:** `text-cyan-400` / `bg-cyan-500`

## 3. Typography
* **Font Family:** Inter atau Plus Jakarta Sans (Sangat direkomendasikan untuk desain modern).
* **Headings:** Bold/Extra Bold dengan sedikit *letter-spacing* negatif (`tracking-tight`). Gunakan efek teks gradasi (`bg-clip-text text-transparent bg-gradient-to-r...`) pada Hero Title.
* **Body Text:** Regular/Medium dengan *line-height* yang lega (`leading-relaxed`) untuk kemudahan membaca.

## 4. UI Components & Tailwind Implementation

### 4.1. Glass Card Component Example
Untuk membuat efek *Liquid Glass*, kombinasikan transparansi background, border tipis, dan `backdrop-blur`.

### 4.3. Portfolio Glass Card dengan Redirect Link

Komponen kartu proyek ini didesain menggunakan tema *Liquid Glass* yang interaktif. Saat di-*hover*, gambar akan sedikit membesar (scale-up) dan muncul tombol aksi dengan efek transisi yang mulus.

```html
<!-- Contoh Komponen Kartu Portofolio (Tailwind CSS) -->
<div class="group relative overflow-hidden rounded-3xl border bg-white/30 dark:bg-slate-900/30 border-white/50 dark:border-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
  
  <!-- Thumbnail Website -->
  <div class="relative overflow-hidden aspect-video w-full rounded-2xl p-2">
    <img 
      src="/path-to-screenshot.jpg" 
      alt="Nama Website Klien" 
      class="h-full w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
    />
  </div>

  <!-- Detail Proyek -->
  <div class="p-6">
    <!-- Tech Stack Tags -->
    <div class="flex flex-wrap gap-2 mb-3">
      <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 backdrop-blur-md">Next.js</span>
      <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 backdrop-blur-md">Tailwind</span>
    </div>

    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">E-Commerce Brand Lokal</h3>
    <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
      Website toko online modern dengan integrasi payment gateway dan sistem manajemen stok real-time.
    </p>

    <!-- Action Buttons (Link Redirect) -->
    <div class="flex items-center justify-between gap-4">
      <!-- Link Menuju Web Asli -->
      <a 
        href="[https://website-klien-anda.com](https://website-klien-anda.com)" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:opacity-90"
      >
        Kunjungi Situs
        <!-- Icon Arrow-Up-Right -->
        <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    </div>
  </div>
</div>