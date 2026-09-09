import { events } from "@/data/events"
import { news } from "@/data/news"
import type { Event, NewsArticle } from "@/types/content"

export const informationCategories = ["berita", "pengumuman", "event", "artikel"] as const

export type InformationCategory = (typeof informationCategories)[number]

export const announcements: readonly NewsArticle[] = [
  {
    slug: "jadwal-registrasi-semester-gasal-2026",
    title: "Jadwal Registrasi dan Pembayaran UKT Semester Gasal 2026/2027",
    category: "Akademik",
    publishedAt: "2026-02-01",
    excerpt: "Pengumuman resmi tahapan pendaftaran ulang, verifikasi berkas, dan pembayaran UKT bagi seluruh mahasiswa FEB UNJ.",
    body: [
      "Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta mengumumkan jadwal registrasi akademik dan administratif semester gasal tahun akademik 2026/2027.",
      "Mahasiswa diwajibkan menyelesaikan pengisian Kartu Rencana Studi (KRS) daring melalui sistem informasi akademik sebelum batas akhir yang ditentukan.",
      "Bagi mahasiswa penerima beasiswa dan bantuan biaya pendidikan, proses validasi berkas dilakukan melalui loket terpadu Subbagian Kemahasiswaan.",
    ],
    readingMinutes: 3,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "pembukaan-pendaftaran-beasiswa-unggulan-2026",
    title: "Pembukaan Seleksi Beasiswa Prestasi dan Unggulan FEB 2026",
    category: "Prestasi",
    publishedAt: "2026-02-15",
    excerpt: "Fakultas membuka kesempatan beasiswa bagi mahasiswa berprestasi akademik dan non-akademik tingkat nasional.",
    body: [
      "Dalam rangka mengapresiasi capaian talenta muda, FEB UNJ membuka pendaftaran Program Beasiswa Unggulan Fakultas tahun 2026.",
      "Skema ini mencakup bantuan biaya operasional pendidikan serta dana pembinaan riset bagi mahasiswa aktif semester 3 hingga 7.",
      "Seleksi dilakukan berbasis portofolio prestasi, rekam jejak akademik, dan wawancara panel dosen pembina kemahasiswaan.",
    ],
    readingMinutes: 4,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "jadwal-sidang-skripsi-dan-tesis-periode-i",
    title: "Jadwal dan Prosedur Pendaftaran Sidang Skripsi dan Tesis Periode I",
    category: "Akademik",
    publishedAt: "2026-03-01",
    excerpt: "Batas akhir unggah naskah tugas akhir dan persyaratan administratif ujian kelulusan program sarjana dan magister.",
    body: [
      "Subbagian Akademik FEB UNJ merilis jadwal resmi pelaksanaan ujian sidang tugas akhir untuk periode wisuda semester genap.",
      "Seluruh draf naskah harus telah melalui uji bebas plagiarisme dengan skor similarity maksimal sesuai ketentuan masing-masing program studi.",
      "Persetujuan pembimbing dan berkas kelayakan ujian wajib diunggah paling lambat satu minggu sebelum jadwal sidang diumumkan.",
    ],
    readingMinutes: 3,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "sosialisasi-program-mbkm-mandiri-feb",
    title: "Sosialisasi Program Magang dan Studi Independen Bersertifikat (MBKM) Mandiri",
    category: "Kerjasama",
    publishedAt: "2026-03-10",
    excerpt: "Panduan konversi SKS dan mitra magang terverifikasi di sektor perbankan, BUMN, dan lembaga riset nasional.",
    body: [
      "Unit Pengembangan Karir dan Alumni FEB UNJ menyelenggarakan sesi penjelasan teknis keikutsertaan magang mandiri lintas sektor.",
      "Mahasiswa akan mendapatkan arahan mengenai mekanisme konversi maksimal 20 SKS ke dalam kurikulum program studi asal.",
      "Sesi pendampingan portofolio dan simulasi wawancara kerja disediakan secara cuma-cuma oleh pusat karir fakultas.",
    ],
    readingMinutes: 5,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "penerimaan-proposal-penelitian-kolaboratif",
    title: "Panggilan Proposal Riset Kolaboratif Dosen-Mahasiswa Tahun Anggaran 2026",
    category: "Riset",
    publishedAt: "2026-03-20",
    excerpt: "Unit Riset dan Pengabdian Masyarakat membuka skema hibah riset fokus transformasi ekonomi hijau.",
    body: [
      "FEB UNJ mengalokasikan dana hibah internal untuk mendorong publikasi bereputasi internasional dan hilirisasi riset terapan.",
      "Fokus tema tahun ini menitikberatkan pada ekonomi sirkular, digitalisasi perpajakan, dan model ketahanan usaha mikro.",
      "Setiap tim pengusul wajib melibatkan minimal dua mahasiswa aktif program sarjana atau pascasarjana.",
    ],
    readingMinutes: 4,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "pelaksanaan-yudisium-feb-unj-2026",
    title: "Pelaksanaan Yudisium Sarjana dan Pascasarjana Gelombang I 2026",
    category: "Akademik",
    publishedAt: "2026-04-05",
    excerpt: "Informasi teknis gladi resik, kelengkapan berkas ijazah, dan jadwal yudisium luring di Aula Ki Hajar Dewantara.",
    body: [
      "Yudisium pelepasan lulusan FEB UNJ Gelombang I Tahun 2026 akan diselenggarakan secara luring dengan protokol akademik penuh.",
      "Calon wisudawan diwajibkan memeriksa kembali ejaan nama dan tempat tanggal lahir sesuai ijazah pendidikan sebelumnya.",
      "Undangan resmi dan rincian alur prosesi akademik dapat diunduh melalui portal kelulusan terpadu fakultas.",
    ],
    readingMinutes: 3,
    image: "/images/news/placeholder-campus.jpg",
  },
]

export const articles: readonly NewsArticle[] = [
  {
    slug: "menakar-peluang-perbankan-digital-ai",
    title: "Menakar Peluang dan Tantangan Transformasi Perbankan Digital Berbasis AI",
    category: "Riset",
    publishedAt: "2026-01-28",
    excerpt: "Analisis mendalam mengenai adopsi kecerdasan buatan dalam penilaian risiko kredit dan perlindungan konsumen perbankan.",
    body: [
      "Perkembangan teknologi machine learning telah mengubah lanskap industri perbankan nasional dari model konvensional menuju otomasi cerdas.",
      "Pemanfaatan data alternatif dalam credit scoring memperluas akses permodalan bagi kelompok unbanked, namun memunculkan urgensi perlindungan privasi data nasabah.",
      "Regulasi perbankan adaptif dan penguatan tata kelola algoritma menjadi kunci agar inovasi finansial sejalan dengan stabilitas sistem keuangan.",
    ],
    readingMinutes: 6,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "strategi-akselerasi-umkm-berkelanjutan",
    title: "Strategi Akselerasi UMKM Hijau dalam Mendukung Dekarbonisasi Perkotaan",
    category: "Pengabdian Masyarakat",
    publishedAt: "2026-02-12",
    excerpt: "Bagaimana pelaku usaha mikro mengintegrasikan praktik sirkular dan pencatatan akuntansi berbasis keberlanjutan.",
    body: [
      "Transformasi menuju ekonomi rendah karbon menuntut partisipasi aktif sektor usaha mikro, kecil, dan menengah sebagai penggerak ekonomi riil.",
      "Melalui pendampingan pencatatan jejak karbon sederhana dan efisiensi bahan baku, UMKM terbukti mampu memangkas biaya operasional secara konsisten.",
      "Dukungan insentif fiskal dan pembiayaan hijau perbankan daerah menjadi katalis utama percepatan adopsi standar ramah lingkungan.",
    ],
    readingMinutes: 5,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "dinamika-pasar-keuangan-dan-ketahanan-rupiah",
    title: "Dinamika Suku Bunga Global dan Ketahanan Fondasi Makroekonomi Nasional",
    category: "Akademik",
    publishedAt: "2026-02-25",
    excerpt: "Tinjauan empiris respons kebijakan moneter Bank Indonesia dalam menjaga stabilitas nilai tukar di tengah volatilitas global.",
    body: [
      "Ketidakpastian arah kebijakan bank sentral utama dunia memicu arus keluar modal jangka pendek dari negara-negara berkembang.",
      "Kebijakan intervensi pasar ganda dan instrumen sekuritas valas Bank Indonesia memberikan bantalan likuiditas yang memadai bagi perbankan domestik.",
      "Penguatan ekspor produk manufaktur bernilai tambah tinggi merupakan benteng jangka panjang ketahanan neraca transaksi berjalan.",
    ],
    readingMinutes: 7,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "inovasi-pembelajaran-akuntansi-studi-kasus",
    title: "Inovasi Pedagogi Akuntansi Berbasis Forensic Analytics dan Big Data",
    category: "Akademik",
    publishedAt: "2026-03-08",
    excerpt: "Integrasi audit analitis ke dalam kurikulum sarjana untuk menjawab kebutuhan industri akuntansi modern.",
    body: [
      "Profesi akuntan publik kini dihadapkan pada volume transaksi digital masif yang tidak lagi efektif diperiksa dengan metode sampling tradisional.",
      "Laboratorium Akuntansi FEB UNJ mengembangkan modul simulasi audit forensik dengan memanfaatkan teknologi pemrosesan data skala besar.",
      "Lulusan dibekali kemampuan mendeteksi anomali finansial secara dini sekaligus menyusun laporan kepatuhan yang memenuhi standar internasional.",
    ],
    readingMinutes: 5,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "revolusi-tata-kelola-bumn-transparansi-esg",
    title: "Penerapan Tata Kelola Perusahaan (GCG) Berstandar ESG pada BUMN",
    category: "Kerjasama",
    publishedAt: "2026-03-18",
    excerpt: "Kajian kepatuhan pelaporan keberlanjutan dan dampaknya terhadap efisiensi biaya modal perusahaan publik.",
    body: [
      "Standar Environmental, Social, and Governance (ESG) kini telah berevolusi dari sekadar kepatuhan moral menjadi tolok ukur valuasi investasi global.",
      "BUMN yang menerapkan transparansi emisi dan keterlibatan komunitas lokal memperoleh akses pendanaan obligasi hijau dengan kupon lebih kompetitif.",
      "Kemitraan akademisi dan korporasi strategis berperan sentral dalam menyusun metrik pengungkapan yang terstandarisasi dan dapat diverifikasi.",
    ],
    readingMinutes: 6,
    image: "/images/news/placeholder-campus.jpg",
  },
  {
    slug: "penguatan-koperasi-perempuan-ekonomi-keluarga",
    title: "Pemberdayaan Koperasi Simpan Pinjam Syariah untuk Ketahanan Ekonomi Keluarga",
    category: "Pengabdian Masyarakat",
    publishedAt: "2026-04-02",
    excerpt: "Bukti lapangan efektivitas pendampingan literasi keuangan di tingkat komunitas perkotaan Jakarta Timur.",
    body: [
      "Koperasi berbasis komunitas perempuan terbukti memiliki rasio kelancaran pengembalian pembiayaan mikro yang sangat tinggi di masa pemulihan ekonomi.",
      "Edukasi pemisahan kas usaha dengan pengeluaran rumah tangga menjadi fondasi pertama pencegahan jeratan pinjaman daring ilegal.",
      "Pendampingan berkelanjutan dosen dan mahasiswa FEB UNJ menumbuhkan budaya menabung terencana serta pembukuan digital sederhana.",
    ],
    readingMinutes: 5,
    image: "/images/news/placeholder-campus.jpg",
  },
]

export type CategoryMeta = {
  readonly title: string
  readonly subtitle: string
  readonly countLabel: string
  readonly singularLabel: string
}

export function getInformationCategoryMeta(category: InformationCategory): CategoryMeta {
  switch (category) {
    case "berita":
      return {
        title: "Berita & Kabar Kampus",
        subtitle: "Liputan kegiatan akademik, prestasi mahasiswa, riset mutakhir, dan dinamika sivitas akademika FEB UNJ.",
        countLabel: "Berita",
        singularLabel: "Berita",
      }
    case "pengumuman":
      return {
        title: "Pengumuman Resmi",
        subtitle: "Informasi resmi jadwal akademik, registrasi, beasiswa, dan kebijakan tata kelola fakultas.",
        countLabel: "Pengumuman",
        singularLabel: "Pengumuman",
      }
    case "event":
      return {
        title: "Agenda & Acara Kampus",
        subtitle: "Jadwal seminar nasional, kuliah umum, konferensi internasional, dan lokakarya akademik FEB UNJ.",
        countLabel: "Event",
        singularLabel: "Event",
      }
    case "artikel":
      return {
        title: "Artikel & Opini Akademik",
        subtitle: "Ulasan ilmiah populer, analisis kebijakan publik, dan pandangan pakar ekonomi dan bisnis FEB UNJ.",
        countLabel: "Artikel",
        singularLabel: "Artikel",
      }
  }
}

export function getItemsForCategory(category: InformationCategory): readonly NewsArticle[] | readonly Event[] {
  switch (category) {
    case "berita":
      return news
    case "pengumuman":
      return announcements
    case "event":
      return events
    case "artikel":
      return articles
  }
}

export function getInformationItem(
  category: InformationCategory,
  slug: string,
): NewsArticle | Event | undefined {
  if (category === "event") {
    return events.find((e) => e.slug === slug)
  }
  if (category === "berita") {
    return news.find((n) => n.slug === slug)
  }
  if (category === "pengumuman") {
    return announcements.find((a) => a.slug === slug)
  }
  if (category === "artikel") {
    return articles.find((a) => a.slug === slug)
  }
  return undefined
}

export function getAllInformationSlugs(): readonly { readonly category: InformationCategory; readonly slug: string }[] {
  const result: { category: InformationCategory; slug: string }[] = []

  for (const item of news) {
    result.push({ category: "berita", slug: item.slug })
  }
  for (const item of announcements) {
    result.push({ category: "pengumuman", slug: item.slug })
  }
  for (const item of events) {
    result.push({ category: "event", slug: item.slug })
  }
  for (const item of articles) {
    result.push({ category: "artikel", slug: item.slug })
  }

  return result
}
