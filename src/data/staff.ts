import type { StaffMember } from "@/types/content";

export const staff: readonly StaffMember[] = [
  ["ari-prabowo", "Ari Prabowo", "Kepala Subbagian Akademik", "Akademik", "akademik.feb@unj.ac.id", "021-4898486"],
  ["dewi-anggraini", "Dewi Anggraini", "Analis Keuangan", "Keuangan", "keuangan.feb@unj.ac.id", "021-4898487"],
  ["rudi-hartono", "Rudi Hartono", "Koordinator Layanan TI", "Teknologi Informasi", "ti.feb@unj.ac.id", "021-4898488"],
  ["sari-novita", "Sari Novita", "Petugas Kemahasiswaan", "Kemahasiswaan", "kemahasiswaan.feb@unj.ac.id", "021-4898489"],
  ["andi-kurniawan", "Andi Kurniawan", "Arsiparis", "Tata Usaha", "tu.feb@unj.ac.id", "021-4898490"],
  ["yuni-lestari", "Yuni Lestari", "Pengelola Kerja Sama", "Kerja Sama", "kerjasama.feb@unj.ac.id", "021-4898491"],
  ["fahmi-ramadhan", "Fahmi Ramadhan", "Pranata Laboratorium Pendidikan", "Laboratorium", "lab.feb@unj.ac.id", "021-4898492"],
  ["nita-susanti", "Nita Susanti", "Pustakawan", "Perpustakaan", "perpustakaan.feb@unj.ac.id", "021-4898493"],
  ["galih-permana", "Galih Permana", "Pengelola BMN", "Umum", "umum.feb@unj.ac.id", "021-4898494"],
  ["vina-maharani", "Vina Maharani", "Petugas Layanan Alumni", "Karier dan Alumni", "alumni.feb@unj.ac.id", "021-4898495"],
].map(([slug, name, role, unit, email, phone]) => ({ slug, name, role, unit, email, phone, bio: `${name} mendukung layanan ${unit.toLowerCase()} FEB UNJ secara responsif dan akuntabel.`, photo: `/images/staff/${slug}.jpg` }));
