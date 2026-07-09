# Product Requirement Document (PRD) - tisandev

## 1. Project Overview
* **Project Name:** tisandev
* **Product Type:** Company Profile & Portfolio Website
* **Core Service:** Jasa Pembuatan Website (Web Development Services)
* **Tech Stack:** Next.js, Tailwind CSS, TypeScript
* **Target Audience:** Pemilik bisnis, UMKM, startup, dan profesional yang membutuhkan website modern dan berkualitas tinggi.

## 2. Objectives & Goals
* Menampilkan identitas brand **tisandev** sebagai penyedia jasa pembuatan website yang modern, profesional, dan tepercaya.
* Menampilkan portofolio kerja dan testimoni untuk membangun *trust*.
* Mengonversi pengunjung menjadi *leads* melalui CTA (Call to Action) yang jelas.
* Menyediakan pengalaman pengguna (UX) yang interaktif menggunakan tema *Liquid Glass* serta transisi *Dark/Light Mode* yang mulus.

## 3. Core Features
### 3.1. Theme & Accessibility
* **Liquid Glassmorphism:** Efek kaca transparan, *background blur*, dan gradasi warna dinamis yang menyerupai cairan.
* **Toggle Dark/Light Mode:** Perpindahan mode warna secara instan tanpa *flickering* (menggunakan `next-themes`).

### 3.2. Page Structure (Single Page / Multi-Page)
Untuk fase awal, website akan menggunakan struktur **Single Page App (SPA)** yang interaktif dengan navigasi *smooth scroll* ke section berikut:
1. **Hero Section:** Judul utama, sub-judul yang persuasif, visual/animasi *liquid*, dan tombol CTA utama.
2. **About Section:** Penjelasan singkat tentang tisandev dan visi misinya.
3. **Services Section:** Daftar layanan (misal: Landing Page, Company Profile, E-Commerce, Custom Web App).
4. **Portfolio Section:** Galeri proyek yang pernah dikerjakan (dengan filter kategori).
5. **Testimonials Section:** Slider/Grid ulasan dari klien terdahulu.
6. **Contact & CTA Section:** Formulir kontak interaktif dan tombol langsung menuju WhatsApp/Email.

### 3.3. Non-Functional Requirements
* **Performance:** Skor Google PageSpeed Insights minimal 90+ untuk Mobile dan Desktop.
* **SEO Friendly:** Struktur HTML semantik, optimasi meta tag via Next.js Metadata API, dan *sitemap*.
* **Responsive Design:** Tampilan harus optimal di semua ukuran layar (Mobile, Tablet, Desktop).

### 3.4. Portfolio Section (Project Showcase)
* **Deskripsi:** Galeri interaktif yang menampilkan proyek website yang telah berhasil diselesaikan oleh tisandev.
* **Fitur Utama:**
  * **Interactive Filter:** Pengunjung dapat memfilter proyek berdasarkan kategori (misal: E-Commerce, Landing Page, Company Profile, Web App).
  * **Project Cards:** Setiap kartu proyek menampilkan gambar *thumbnail* beresolusi tinggi, judul, deskripsi singkat teknologi yang digunakan (tech stack tags), dan tombol aksi.
  * **External Redirect Links:** 
    * Tombol **"Live Demo"** / **"Visit Website"** yang mengarahkan (redirect) pengunjung secara langsung ke URL *live* website tersebut di tab baru (`target="_blank"`).
    * *(Opsional)* Tombol **"Case Study"** atau **"GitHub"** jika proyek tersebut bersifat open-source atau memiliki pembahasan teknis lebih dalam.
---