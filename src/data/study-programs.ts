import type { StudyProgram } from "@/types/content";

const curriculum = [
  ["Pengantar Ekonomi", "Pancasila", "Komunikasi Akademik"],
  ["Statistika Bisnis", "Akuntansi Dasar", "Bahasa Inggris Profesional"],
  ["Metodologi Penelitian", "Ekonomi Mikro", "Kewirausahaan"],
  ["Manajemen Strategik", "Ekonomi Makro", "Etika Profesi"],
  ["Analitika Data", "Manajemen Proyek", "Pilihan Konsentrasi"],
  ["Magang Industri", "Riset Terapan", "Kepemimpinan"],
  ["Seminar Proposal", "Kolaborasi Lintas Disiplin", "Pengabdian Masyarakat"],
  ["Tugas Akhir", "Diseminasi Hasil", "Persiapan Karier"],
] as const;

const program = (slug: string, name: string, degree: StudyProgram["degree"], head: string): StudyProgram => ({
  slug, name, degree, head, accreditation: "Unggul", contact: "akademik.feb@unj.ac.id", curriculum,
  vision: `Menjadi program ${name} yang unggul, relevan, dan berdampak bagi ekonomi Indonesia.`,
  mission: ["Menyelenggarakan pembelajaran berbasis riset dan praktik", "Menghasilkan lulusan berintegritas serta adaptif", "Memperluas kemitraan untuk manfaat publik"],
  careerProspects: ["Analis kebijakan dan bisnis", "Manajer atau konsultan", "Peneliti dan wirausahawan"],
});

export const studyPrograms: readonly StudyProgram[] = [
  program("s3-ilmu-manajemen", "S3 Ilmu Manajemen", "Doktor", "Prof. Dr. M. Yusuf"),
  program("s3-ilmu-akuntansi", "S3 Ilmu Akuntansi", "Doktor", "Prof. Dr. Indra Wijaya"),
  program("s3-pendidikan-ekonomi", "S3 Pendidikan Ekonomi", "Doktor", "Prof. Dr. Siti Aisyah"),
  program("s2-manajemen", "S2 Manajemen", "Magister", "Dr. Ratih Pratiwi"),
  program("s2-akuntansi", "S2 Akuntansi", "Magister", "Dr. Arief Nugroho"),
  program("s2-magister-terapan-pemasaran-inovasi-dan-teknologi", "S2 Magister Terapan Pemasaran, Inovasi dan Teknologi", "Magister", "Dr. Dini Kurniasih"),
  program("s2-pendidikan-ekonomi", "S2 Pendidikan Ekonomi", "Magister", "Dr. Lestari Handayani"),
  program("s1-manajemen", "S1 Manajemen", "Sarjana", "Dr. Mujiyatno"),
  program("s1-akuntansi", "S1 Akuntansi", "Sarjana", "Dr. Hendra Setiawan"),
  program("s1-pendidikan-ekonomi", "S1 Pendidikan Ekonomi", "Sarjana", "Dr. Nur Hidayati"),
  program("s1-pendidikan-tata-niaga", "S1 Pendidikan Tata Niaga", "Sarjana", "Dr. Rina Wulandari"),
  program("s1-pendidikan-administrasi-perkantoran", "S1 Pendidikan Administrasi Perkantoran", "Sarjana", "Dr. Dwi Lestari"),
  program("s1-bisnis-digital", "S1 Bisnis Digital", "Sarjana", "Dr. Farhan Akbar"),
  program("d4-manajemen-pelabuhan-dan-logistik-maritim", "D4 Manajemen Pelabuhan dan Logistik Maritim", "Sarjana Terapan", "Dr. Bima Prakoso"),
  program("d4-pemasaran-digital", "D4 Pemasaran Digital", "Sarjana Terapan", "Dr. Wulan Sari"),
  program("s1-terapan-administrasi-perkantoran-digital", "S1 Terapan Administrasi Perkantoran Digital", "Sarjana Terapan", "Dr. Dwi Lestari"),
  program("d4-akuntansi-sektor-publik", "D4 Akuntansi Sektor Publik", "Sarjana Terapan", "Dr. Taufik Hidayat"),
  program("d4-keuangan-perbankan", "D4 Keuangan Perbankan", "Sarjana Terapan", "Dr. Maya Safitri"),
  program("d3-akuntansi", "D3 Akuntansi", "Diploma", "Dra. Sri Wahyuni"),
  program("d3-manajemen-pemasaran", "D3 Manajemen Pemasaran", "Diploma", "Dra. Rini Astuti"),
  program("d3-administrasi-perkantoran", "D3 Administrasi Perkantoran", "Diploma", "Dra. Fajar Laksmi"),
] as const;
