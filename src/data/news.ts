import type { NewsArticle } from "@/types/content";

const items = [
  ["feb-unj-perkuat-literasi-keuangan-digital", "FEB UNJ Perkuat Literasi Keuangan Digital untuk Mahasiswa", "Akademik"], ["mahasiswa-feb-raih-medali-pkm", "Mahasiswa FEB Raih Medali pada Pekan Kreativitas Mahasiswa", "Prestasi"], ["riset-ekonomi-hijau-jakarta", "Riset FEB Mengkaji Transisi Ekonomi Hijau Jakarta", "Riset"], ["feb-unj-dan-bi-kembangkan-kurikulum", "FEB UNJ dan Bank Indonesia Kembangkan Kurikulum", "Kerjasama"], ["desa-binaan-kembangkan-pasar-digital", "Desa Binaan Mengembangkan Pasar Digital Inklusif", "Pengabdian Masyarakat"], ["kuliah-umum-ekonomi-global", "Kuliah Umum Membaca Arah Ekonomi Global", "Akademik"], ["tim-debat-feb-juara-nasional", "Tim Debat FEB Menjadi Juara Nasional", "Prestasi"], ["pusat-riset-luncurkan-policy-brief", "Pusat Riset Meluncurkan Policy Brief Ketahanan UMKM", "Riset"], ["kemitraan-australia-mobilitas-mahasiswa", "Kemitraan Australia Membuka Mobilitas Mahasiswa", "Kerjasama"], ["pendampingan-koperasi-perempuan", "Pendampingan Koperasi Perempuan Berbasis Data", "Pengabdian Masyarakat"], ["workshop-penulisan-skripsi", "Workshop Penulisan Skripsi untuk Mahasiswa Tingkat Akhir", "Akademik"], ["alumni-feb-raih-penghargaan", "Alumni FEB Raih Penghargaan Profesional Muda", "Prestasi"], ["seminar-metode-riset-campuran", "Seminar Metode Riset Campuran untuk Peneliti Muda", "Riset"], ["ojk-dan-feb-kolaborasi-edukasi", "OJK dan FEB Berkolaborasi dalam Edukasi Keuangan", "Kerjasama"], ["pajak-untuk-komunitas-usaha", "Klinik Pajak untuk Komunitas Usaha Lokal", "Pengabdian Masyarakat"], ["orientasi-akademik-mahasiswa-baru", "Orientasi Akademik Menyambut Mahasiswa Baru", "Akademik"],
] as const;

export const news: readonly NewsArticle[] = items.map(([slug, title, category], index) => ({
  slug, title, category, publishedAt: `2026-0${(index % 8) + 1}-${String((index % 27) + 1).padStart(2, "0")}`,
  excerpt: `${title} menegaskan komitmen FEB UNJ pada pembelajaran yang relevan, kolaboratif, dan berorientasi dampak.`,
  body: ["Kegiatan ini mempertemukan sivitas akademika dan mitra untuk membahas kebutuhan nyata masyarakat.", "FEB UNJ memastikan hasil pembelajaran dan riset diterjemahkan menjadi manfaat yang dapat diakses publik."],
  readingMinutes: 4 + (index % 4), image: "/images/news/placeholder-campus.jpg",
}));


