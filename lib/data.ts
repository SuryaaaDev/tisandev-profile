import type { PortfolioItem, Service, Testimonial } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    description:
      'Halaman tunggal yang dirancang untuk mengonversi pengunjung menjadi pelanggan. Cepat, responsif, dan persuasif.',
    features: [
      'Desain modern & responsif',
      'Optimasi kecepatan (PageSpeed 90+)',
      'Integrasi WhatsApp & form kontak',
      'SEO dasar (meta tag, OG)',
      'Revisi hingga puas',
    ],
    icon: 'layout',
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    description:
      'Website multi-halaman profesional untuk membangun citra bisnis Anda. Tampilkan layanan, tim, dan portofolio.',
    features: [
      'Multi-halaman (Home, About, Services, Contact)',
      'CMS sederhana untuk update konten',
      'Desain custom sesuai brand',
      'Integrasi Google Maps',
      'SSL & hosting guidance',
    ],
    icon: 'building',
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce',
    description:
      'Toko online lengkap dengan manajemen produk, keranjang belanja, dan integrasi payment gateway lokal.',
    features: [
      'Manajemen produk & stok',
      'Keranjang & checkout',
      'Payment gateway (Midtrans/Xendit)',
      'Dashboard admin',
      'Notifikasi order otomatis',
    ],
    icon: 'shopping-cart',
  },
  {
    id: 'web-app',
    title: 'Custom Web App',
    description:
      'Aplikasi web khusus sesuai kebutuhan bisnis Anda — dari sistem internal hingga platform SaaS skala kecil.',
    features: [
      'Analisis kebutuhan mendalam',
      'Arsitektur scalable',
      'Autentikasi & otorisasi',
      'API integration',
      'Dokumentasi teknis',
    ],
    icon: 'code',
  },
]

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'LibSpace — Sistem Perpustakaan Digital',
    description: 'Sistem perpustakaan digital modern dengan katalog buku pencarian real-time, kalkulasi denda otomatis, dan fitur offline-first.',
    thumbnail: '/images/portfolio/libspace.png',
    category: 'web-app',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Offline-First'],
    liveUrl: 'https://lib-space-mocha.vercel.app/',
  },
  {
    id: '2',
    title: 'E-Voting OSIS',
    description: 'Aplikasi pemilihan ketua OSIS berbasis web yang aman, transparan, dan efisien dengan rekapitulasi suara real-time.',
    thumbnail: '/images/portfolio/osis.png',
    category: 'web-app',
    techStack: ['Laravel', 'Tailwind CSS', 'MySQL'],
    liveUrl: '',
    demoAvailable: false,
  },
  {
    id: '3',
    title: 'Smart Parking System',
    description: 'Sistem manajemen parkir modern yang efisien dan terintegrasi dengan pemantauan kendaraan real-time, struk digital, dan statistik pendapatan.',
    thumbnail: '/images/portfolio/parking.png',
    category: 'web-app',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS'],
    liveUrl: '',
    demoAvailable: false,
  },
  {
    id: '4',
    title: 'Portal Berita',
    description: 'Portal berita online dinamis dengan fitur filter kategori berita, pencarian berita, running text breaking news, dan pendaftaran newsletter.',
    thumbnail: '/images/portfolio/news.png',
    category: 'web-app',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS'],
    liveUrl: '',
    demoAvailable: false,
  },
  {
    id: '5',
    title: 'Monitoring Nilai & Prestasi Siswa',
    description: 'Platform analitik pintar untuk memantau nilai, capaian prestasi, dan perkembangan akademik siswa secara real-time dengan visualisasi data interaktif.',
    thumbnail: '/images/portfolio/monitoring.png',
    category: 'web-app',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS'],
    liveUrl: '',
    demoAvailable: false,
  },
  {
    id: '6',
    title: 'E-Voting OSIS (PHP Native)',
    description: 'Aplikasi pemilihan ketua & wakil ketua OSIS berbasis web versi PHP Native dengan dashboard pemungutan suara kustom dan visualisasi kandidat calon.',
    thumbnail: '/images/portfolio/osis_native.png',
    category: 'web-app',
    techStack: ['PHP', 'MySQL', 'Tailwind CSS'],
    liveUrl: '',
    demoAvailable: false,
  },
  {
    id: '7',
    title: 'CineRate — Film & TV Rating',
    description: 'Aplikasi pencarian dan rating film/TV show real-time yang terintegrasi dengan TVMaze API, dilengkapi dengan filter kategori genre dinamis.',
    thumbnail: '/images/portfolio/cinerate.png',
    category: 'web-app',
    techStack: ['JavaScript', 'TVMaze API', 'Tailwind CSS'],
    liveUrl: '',
    demoAvailable: false,
  },
  {
    id: '8',
    title: 'Tisan POS — Sistem Kasir Modern',
    description: 'Aplikasi Point of Sale (POS) modern untuk mengelola produk, pencatatan transaksi kasir cepat, dan pelaporan keuangan toko secara real-time.',
    thumbnail: '/images/portfolio/pos.png',
    category: 'web-app',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '',
    demoAvailable: false,
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Harto Santoso',
    role: 'Pemilik',
    company: 'TakoStore',
    avatar: '/images/avatars/harto.jpg',
    content:
      'tisandev benar-benar memahami kebutuhan bisnis saya. Toko online saya selesai tepat waktu dan hasilnya jauh melebihi ekspektasi. Penjualan naik 40% dalam bulan pertama!',
    rating: 5,
  },
  {
    id: '2',
    name: 'dr. Sari Dewi',
    role: 'Direktur',
    company: 'Klinik Sehat Bersama',
    avatar: '/images/avatars/sari.jpg',
    content:
      'Profesional, responsif, dan hasilnya sangat memuaskan. Website klinik kami sekarang terlihat sangat modern dan pasien lebih mudah menemukan informasi yang mereka butuhkan.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ahmad Rizki',
    role: 'Co-founder',
    company: 'EduCourse',
    avatar: '/images/avatars/ahmad.jpg',
    content:
      'Komunikasi sangat lancar, revisi cepat direspon, dan kodenya bersih. Tim kami sangat puas dengan platform yang dibangun tisandev.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Rina Kartika',
    role: 'Marketing Manager',
    company: 'RumahKita Property',
    avatar: '/images/avatars/rina.jpg',
    content:
      'Landing page yang dibuat sangat eye-catching dan loading-nya cepat sekali. Konversi lead kami meningkat signifikan sejak menggunakan website baru ini.',
    rating: 5,
  },
]
