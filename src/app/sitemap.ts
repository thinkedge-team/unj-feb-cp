import type { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"
import { lecturers } from "@/data/lecturers"
import { validCategories as sdmCategories } from "@/data/sdm-categories"
import { studyPrograms } from "@/data/study-programs"
import {
  getAllInformationSlugs,
  informationCategories,
} from "@/features/information/information-data"

const STATIC_ROUTES: readonly {
  readonly path: string
  readonly priority: number
  readonly changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
}[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "profil", priority: 0.9, changeFrequency: "weekly" },
  { path: "akademik", priority: 0.9, changeFrequency: "weekly" },
  { path: "kemahasiswaan", priority: 0.9, changeFrequency: "weekly" },
  { path: "layanan", priority: 0.9, changeFrequency: "weekly" },
  { path: "riset", priority: 0.9, changeFrequency: "weekly" },
  { path: "kerjasama", priority: 0.9, changeFrequency: "weekly" },
  { path: "internasional", priority: 0.9, changeFrequency: "weekly" },
  { path: "dokumen", priority: 0.85, changeFrequency: "weekly" },
  { path: "program-studi", priority: 0.95, changeFrequency: "weekly" },
  { path: "sdm", priority: 0.85, changeFrequency: "weekly" },
  { path: "sdm/dosen", priority: 0.85, changeFrequency: "weekly" },
  { path: "informasi", priority: 0.9, changeFrequency: "daily" },
  { path: "kontak", priority: 0.8, changeFrequency: "monthly" },
]

const PROFIL_SLUGS = [
  "tentang-feb",
  "sejarah",
  "visi-misi-tujuan",
  "visi-misi",
  "struktur-organisasi",
  "pimpinan",
  "prestasi",
  "fasilitas",
] as const

const AKADEMIK_SLUGS = [
  "informasi-akademik",
  "informasi",
  "kalender-akademik",
  "kalender",
  "kurikulum",
  "dokumen-akademik",
  "dokumen",
] as const

const KEMAHASISWAAN_SLUGS = [
  "beasiswa",
  "organisasi",
  "prestasi",
  "karya-mahasiswa",
  "karya",
] as const

const LAYANAN_SLUGS = [
  "ppid",
  "zona-integritas",
  "layanan-fakultas",
  "fakultas",
] as const

const RISET_SLUGS = ["penelitian", "publikasi", "pengabdian"] as const

const KERJASAMA_SLUGS = [
  "dalam-negeri",
  "internasional",
  "dokumen",
  "dokumen-kerjasama",
] as const

const INTERNASIONAL_SLUGS = ["mobilitas", "program", "mitra"] as const

const DOKUMEN_CATEGORIES = [
  "publik",
  "unduhan",
  "akademik",
  "kemahasiswaan",
] as const

const DEGREE_LEVELS = [
  "doktor",
  "magister",
  "sarjana",
  "sarjana-terapan",
  "diploma",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, "")
  const lastModified = new Date("2026-03-01T00:00:00.000Z")

  const entries: MetadataRoute.Sitemap = []
  const seenUrls = new Set<string>()

  function addEntry(
    path: string,
    priority: number,
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
  ) {
    const cleanPath = path.trim().replace(/^\/+/, "").replace(/\/+$/, "")
    const url = cleanPath ? `${baseUrl}/${cleanPath}` : baseUrl

    if (seenUrls.has(url)) {
      return
    }
    seenUrls.add(url)

    entries.push({
      url,
      lastModified,
      changeFrequency,
      priority,
    })
  }

  // 1. Static top-level pages
  for (const route of STATIC_ROUTES) {
    addEntry(route.path, route.priority, route.changeFrequency)
  }

  // 2. Program studi details & degree levels
  for (const prog of studyPrograms) {
    addEntry(`program-studi/${prog.slug}`, 0.85, "weekly")
  }
  for (const deg of DEGREE_LEVELS) {
    addEntry(`program-studi/${deg}`, 0.8, "weekly")
  }

  // 3. SDM: lecturers and categories
  for (const lecturer of lecturers) {
    addEntry(`sdm/dosen/${lecturer.slug}`, 0.75, "monthly")
  }
  for (const cat of sdmCategories) {
    addEntry(`sdm/${cat}`, 0.7, "monthly")
  }

  // 4. Section landing subpages
  for (const slug of PROFIL_SLUGS) {
    addEntry(`profil/${slug}`, 0.75, "monthly")
  }
  for (const slug of AKADEMIK_SLUGS) {
    addEntry(`akademik/${slug}`, 0.75, "monthly")
  }
  for (const slug of KEMAHASISWAAN_SLUGS) {
    addEntry(`kemahasiswaan/${slug}`, 0.75, "monthly")
  }
  for (const slug of LAYANAN_SLUGS) {
    addEntry(`layanan/${slug}`, 0.75, "monthly")
  }
  for (const slug of RISET_SLUGS) {
    addEntry(`riset/${slug}`, 0.75, "monthly")
  }
  for (const slug of KERJASAMA_SLUGS) {
    addEntry(`kerjasama/${slug}`, 0.75, "monthly")
  }
  for (const slug of INTERNASIONAL_SLUGS) {
    addEntry(`internasional/${slug}`, 0.75, "monthly")
  }

  // 5. Dokumen categories
  for (const cat of DOKUMEN_CATEGORIES) {
    addEntry(`dokumen/${cat}`, 0.75, "monthly")
  }

  // 6. Informasi categories
  for (const cat of informationCategories) {
    addEntry(`informasi/${cat}`, 0.85, "daily")
  }

  // 7. Information detail items
  const infoItems = getAllInformationSlugs()
  for (const item of infoItems) {
    addEntry(`informasi/${item.category}/${item.slug}`, 0.7, "weekly")
  }

  return entries
}
