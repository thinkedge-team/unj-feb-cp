import type { Lecturer } from "@/types/content";

const people = [
  ["mujiyatno", "Dr. Mujiyatno, S.E., M.M.", "0015086704", "Lektor Kepala", "Manajemen", "Manajemen Strategik dan Kewirausahaan"],
  ["hendra-setiawan", "Dr. Hendra Setiawan, S.E., Ak., CA", "0012096903", "Guru Besar", "Akuntansi", "Akuntansi Keuangan dan Audit"],
  ["nur-hidayati", "Dr. Nur Hidayati, M.Pd.", "0017027105", "Lektor Kepala", "Pendidikan Ekonomi", "Ekonomi Pendidikan dan Literasi Finansial"],
  ["rina-wulandari", "Dr. Rina Wulandari, M.M.", "0010047202", "Lektor Kepala", "Pendidikan Tata Niaga", "Pemasaran dan Perilaku Konsumen"],
  ["dwi-lestari", "Dr. Dwi Lestari, M.Pd.", "0011067301", "Lektor Kepala", "Pendidikan Administrasi Perkantoran", "Transformasi Kerja Digital"],
  ["farhan-akbar", "Dr. Farhan Akbar, S.E., M.B.A.", "0012037404", "Lektor", "Bisnis Digital", "Platform Bisnis dan Inovasi Digital"],
  ["bima-prakoso", "Dr. Bima Prakoso, M.Log.", "0013057502", "Lektor", "Manajemen Pelabuhan dan Logistik Maritim", "Logistik Maritim dan Rantai Pasok"],
  ["wulan-sari", "Dr. Wulan Sari, M.M.", "0014077603", "Lektor", "Pemasaran Digital", "Komunikasi Merek dan Analitika Pemasaran"],
  ["taufik-hidayat", "Dr. Taufik Hidayat, S.E., Ak.", "0015097702", "Lektor", "Akuntansi Sektor Publik", "Akuntabilitas dan Keuangan Daerah"],
  ["maya-safitri", "Dr. Maya Safitri, M.M.", "0016117801", "Lektor", "Keuangan Perbankan", "Manajemen Risiko dan Perbankan Digital"],
  ["siti-aisyah", "Prof. Dr. Siti Aisyah, M.Pd.", "0017126502", "Guru Besar", "Pendidikan Ekonomi", "Kebijakan Pendidikan dan Inklusi"],
  ["indrajaya-wijaya", "Prof. Dr. Indrajaya Wijaya, S.E., Ak.", "0018136401", "Guru Besar", "Akuntansi", "Pelaporan Keberlanjutan"],
  ["yusuf-santoso", "Prof. Dr. M. Yusuf Santoso, M.M.", "0019146302", "Guru Besar", "Manajemen", "Organisasi dan Kepemimpinan"],
  ["ratih-pratiwi", "Dr. Ratih Pratiwi, M.M.", "0020157003", "Ketua Program Studi", "Magister Manajemen", "Manajemen SDM"],
  ["arief-nugroho", "Dr. Arief Nugroho, S.E., Ak., CA", "0021167104", "Ketua Program Studi", "Magister Akuntansi", "Akuntansi Manajemen"],
  ["dini-kurniasih", "Dr. Dini Kurniasih, M.B.A.", "0022177205", "Ketua Program Studi", "Magister Terapan Pemasaran", "Inovasi Produk"],
  ["lestari-handayani", "Dr. Lestari Handayani, M.Pd.", "0023187306", "Ketua Program Studi", "Magister Pendidikan Ekonomi", "Kurikulum Ekonomi"],
  ["sri-wahyuni", "Dra. Sri Wahyuni, M.Ak.", "0024196807", "Lektor", "D3 Akuntansi", "Praktik Akuntansi"],
  ["rini-astuti", "Dra. Rini Astuti, M.M.", "0025206908", "Lektor", "D3 Manajemen Pemasaran", "Penjualan dan Negosiasi"],
  ["fajar-laksmi", "Dra. Fajar Laksmi, M.Pd.", "0026217009", "Lektor", "D3 Administrasi Perkantoran", "Administrasi Modern"],
  ["adi-prasetyo", "Dr. Adi Prasetyo, S.E., M.Si.", "0027227110", "Lektor", "Manajemen", "Keuangan Perusahaan"],
  ["nina-kartika", "Dr. Nina Kartika, S.E., M.Si.", "0028237211", "Lektor", "Akuntansi", "Perpajakan"],
  ["bagus-saputra", "Dr. Bagus Saputra, M.Pd.", "0029247312", "Lektor", "Pendidikan Ekonomi", "Ekonomi Kreatif"],
  ["anisa-rahma", "Dr. Anisa Rahma, M.M.", "0030257413", "Lektor", "Bisnis Digital", "Pengalaman Pengguna Digital"],
  ["rizky-maulana", "Dr. Rizky Maulana, M.Log.", "0031267514", "Lektor", "Logistik Maritim", "Operasi Pelabuhan"],
] as const;

export const lecturers: readonly Lecturer[] = people.map(([slug, name, nidn, title, homebase, expertise]) => ({
  slug, name, nidn, title, role: title, homebase, expertise: [expertise],
  education: ["Sarjana pada bidang terkait", "Magister bidang keilmuan", "Doktor bidang keilmuan"],
  links: { sinta: `https://sinta.kemdikbud.go.id/authors/profile/${nidn}`, scopus: `https://www.scopus.com/authid/detail.uri?authorId=${nidn}`, googleScholar: `https://scholar.google.com/citations?user=${slug}` },
  photo: "/images/lecturers/placeholder-portrait.jpg",
}));


