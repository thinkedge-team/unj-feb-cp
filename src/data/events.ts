import type { Event } from "@/types/content";

const items = [
  ["conference-ekonomi-berkelanjutan", "International Conference on Sustainable Economics", "Konferensi"], ["kuliah-tamu-perbankan-digital", "Kuliah Tamu Perbankan Digital", "Kuliah Tamu"], ["seminar-nasional-akuntabilitas", "Seminar Nasional Akuntabilitas Publik", "Seminar"], ["feb-career-fair-2026", "FEB Career Fair 2026", "Karier"], ["kompetisi-business-case", "Kompetisi Business Case Mahasiswa", "Kompetisi"], ["workshop-data-ekonomi", "Workshop Data untuk Analisis Ekonomi", "Workshop"], ["forum-kurikulum-internasional", "Forum Kurikulum Internasional", "Forum"], ["kuliah-umum-ekonomi-kreatif", "Kuliah Umum Ekonomi Kreatif", "Kuliah Umum"], ["pelatihan-pengabdian-umkm", "Pelatihan Pendampingan UMKM", "Pelatihan"], ["reuni-akbar-alumni-feb", "Reuni Akbar Alumni FEB", "Alumni"],
] as const;

export const events: readonly Event[] = items.map(([slug, title, category], index) => ({
  slug, title, category, startsAt: `2026-1${index % 3}-${String(10 + index).padStart(2, "0")}T08:00:00+07:00`, endsAt: `2026-1${index % 3}-${String(10 + index).padStart(2, "0")}T16:00:00+07:00`, venue: index % 2 === 0 ? "Aula Ki Hajar Dewantara, Kampus A UNJ" : "Ruang Sidang FEB UNJ", summary: `${title} menjadi ruang belajar bersama untuk memperluas jejaring akademik dan profesional.`, registrationUrl: `https://feb.unj.ac.id/registrasi/${slug}`,
}));
