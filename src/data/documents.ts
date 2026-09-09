import type { DocumentItem } from "@/types/content";

type RawDocConfig = readonly [
  title: string,
  category: "Akademik" | "Kemahasiswaan" | "Fakultas & Tata Kelola" | "Kebijakan & Regulasi",
  publishedAt: string,
];

const items: readonly RawDocConfig[] = [
  ["Pedoman Akademik 2025/2026", "Akademik", "2026-01-15"],
  ["Panduan Skripsi", "Akademik", "2025-08-10"],
  ["Panduan Tesis", "Akademik", "2025-09-01"],
  ["Kode Etik Mahasiswa", "Kemahasiswaan", "2024-11-20"],
  ["Rencana Strategis FEB", "Fakultas & Tata Kelola", "2024-03-12"],
  ["Kalender Akademik", "Akademik", "2026-01-10"],
  ["Standar Mutu Pembelajaran", "Kebijakan & Regulasi", "2025-06-15"],
  ["Formulir Layanan Akademik", "Akademik", "2026-02-01"],
  ["Panduan Magang", "Kemahasiswaan", "2025-10-18"],
  ["Panduan MBKM", "Kemahasiswaan", "2026-01-20"],
  ["Pedoman Penelitian", "Kebijakan & Regulasi", "2024-05-14"],
  ["Pedoman Pengabdian Masyarakat", "Kebijakan & Regulasi", "2025-04-12"],
  ["Standar Operasional Keuangan", "Fakultas & Tata Kelola", "2024-09-05"],
  ["Panduan Wisuda", "Kemahasiswaan", "2026-02-10"],
  ["Panduan Keamanan Informasi", "Fakultas & Tata Kelola", "2025-12-01"],
  ["Laporan Kinerja FEB", "Fakultas & Tata Kelola", "2025-01-25"],
  ["Pedoman Organisasi Mahasiswa", "Kemahasiswaan", "2024-08-19"],
  ["Formulir Surat Aktif Kuliah", "Akademik", "2026-03-05"],
] as const;

export const documents: readonly DocumentItem[] = items.map(([title, category, publishedAt], index) => ({
  slug: title.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-"),
  title,
  category,
  publishedAt,
  description: `${title} menyediakan acuan resmi dan standar operasional bagi sivitas akademika FEB UNJ.`,
  fileUrl: `/dokumen/${index + 1}.pdf`,
}));
