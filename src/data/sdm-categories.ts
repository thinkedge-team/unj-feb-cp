import type { Lecturer } from "@/types/content"

export const validCategories = [
  "tenaga-kependidikan",
  "tendik",
  "dosen-praktisi",
  "senat",
  "dosen-purnabakti",
] as const

export type SDMCategory = (typeof validCategories)[number]

export const mockPractitioners: readonly Lecturer[] = [
  {
    slug: "reza-mahendra",
    name: "Reza Mahendra, S.E., M.B.A., CFA",
    nidn: "9901001201",
    title: "Senior Vice President Investment Banking",
    role: "Dosen Praktisi Industri",
    homebase: "Manajemen & Keuangan",
    expertise: ["Investment Banking", "Corporate Valuation", "Capital Markets"],
    education: ["S1 Manajemen Keuangan", "MBA Finance (NUS Singapore)"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
  {
    slug: "anita-kusuma",
    name: "Anita Kusuma, S.Ak., M.Ak., CPA, CA",
    nidn: "9901001202",
    title: "Partner Audit & Assurance (Big 4)",
    role: "Dosen Praktisi Industri",
    homebase: "Akuntansi",
    expertise: ["Forensic Audit", "PSAK IFRS", "Enterprise Risk Management"],
    education: ["S1 Akuntansi", "Magister Akuntansi"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
  {
    slug: "denny-setiawan",
    name: "Denny Setiawan, S.Kom., M.M.",
    nidn: "9901001203",
    title: "Chief Product Officer (Tech Unicorn)",
    role: "Dosen Praktisi Industri",
    homebase: "Bisnis Digital",
    expertise: ["Digital Product Growth", "E-Commerce Logistics", "Data Strategy"],
    education: ["S1 Sistem Informasi", "Magister Manajemen Bisnis"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
  {
    slug: "kartika-dewi",
    name: "Kartika Dewi, S.E., M.Sc.",
    nidn: "9901001204",
    title: "Head of Supply Chain (Global Shipping)",
    role: "Dosen Praktisi Industri",
    homebase: "Manajemen Pelabuhan & Logistik",
    expertise: ["Maritime Trade", "Port Operations", "Supply Chain Optimization"],
    education: ["S1 Manajemen", "M.Sc Maritime Studies (Erasmus)"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
]

export const mockEmeritusLecturers: readonly Lecturer[] = [
  {
    slug: "prof-soemarno",
    name: "Prof. Dr. Soemarno, S.E., M.Sc. (Purnabakti)",
    nidn: "0001014201",
    title: "Guru Besar Emeritus",
    role: "Dosen Purnabakti",
    homebase: "Ilmu Manajemen",
    expertise: ["Teori Ekonomi Klasik", "Kepemimpinan Strategis"],
    education: ["S1 Ekonomi", "M.Sc Economics", "Doktor Ilmu Manajemen"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
  {
    slug: "prof-hartati",
    name: "Prof. Dr. Hj. Hartati, M.Pd. (Purnabakti)",
    nidn: "0002024502",
    title: "Guru Besar Emeritus",
    role: "Dosen Purnabakti",
    homebase: "Pendidikan Ekonomi",
    expertise: ["Didaktik Metodik Ekonomi", "Evaluasi Pendidikan"],
    education: ["S1 Pendidikan Ekonomi", "Magister Pendidikan", "Doktor Pendidikan"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
  {
    slug: "drs-h-widodo",
    name: "Drs. H. Widodo, M.Si., Ak. (Purnabakti)",
    nidn: "0003034803",
    title: "Lektor Kepala Purnabakti",
    role: "Dosen Purnabakti",
    homebase: "Akuntansi",
    expertise: ["Sistem Informasi Akuntansi", "Akuntansi Biaya"],
    education: ["S1 Akuntansi", "Magister Sains Akuntansi"],
    links: {
      sinta: "https://sinta.kemdikbud.go.id",
      scopus: "https://www.scopus.com",
      googleScholar: "https://scholar.google.com",
    },
    photo: "/images/lecturers/placeholder-portrait.jpg",
  },
]
