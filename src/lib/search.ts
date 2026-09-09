import { documents } from "@/data/documents";
import { events } from "@/data/events";
import { landingPages } from "@/data/landing-pages";
import { getAllLecturers } from "@/lib/content";
import { announcements, articles } from "@/features/information/information-data";
import { news } from "@/data/news";
import { studyPrograms } from "@/data/study-programs";

export type SearchEntityType =
  | "program"
  | "lecturer"
  | "news"
  | "event"
  | "document"
  | "page";

export type SearchScope =
  | "all"
  | "programs"
  | "lecturers"
  | "news"
  | "events"
  | "documents"
  | "pages";

export type SearchResult = {
  readonly id: string;
  readonly title: string;
  readonly type: SearchEntityType;
  readonly category: string;
  readonly description: string;
  readonly url: string;
  readonly keywords: readonly string[];
};

export const scopeToType: Record<Exclude<SearchScope, "all">, SearchEntityType> = {
  programs: "program",
  lecturers: "lecturer",
  news: "news",
  events: "event",
  documents: "document",
  pages: "page",
};

export const scopeLabels: Record<SearchScope, string> = {
  all: "Semua",
  programs: "Program Studi",
  lecturers: "Dosen & Pengajar",
  news: "Berita & Warta",
  events: "Agenda & Kalender",
  documents: "Dokumen & Panduan",
  pages: "Halaman Fakultas",
};

function degreeBadge(degree: string): string {
  switch (degree) {
    case "Doktor":
      return "S3";
    case "Magister":
      return "S2";
    case "Sarjana":
      return "S1";
    case "Sarjana Terapan":
      return "D4";
    case "Diploma":
      return "D3";
    default:
      return "S1";
  }
}

const profilSlugs = new Set([
  "tentang-feb",
  "sejarah",
  "visi-misi-tujuan",
  "visi-misi",
  "struktur-organisasi",
  "pimpinan",
  "prestasi",
  "fasilitas",
]);

const akademikSlugs = new Set([
  "informasi-akademik",
  "informasi",
  "kalender-akademik",
  "kalender",
  "kurikulum",
  "dokumen-akademik",
  "dokumen",
]);

const kemahasiswaanSlugs = new Set([
  "beasiswa",
  "organisasi",
  "prestasi-mahasiswa",
  "karya-mahasiswa",
  "karya",
]);

const layananSlugs = new Set([
  "ppid",
  "zona-integritas",
  "layanan-fakultas",
  "fakultas",
]);

const risetSlugs = new Set([
  "riset",
  "penelitian",
  "publikasi",
  "pengabdian",
]);

const kerjasamaSlugs = new Set([
  "kerjasama",
  "dalam-negeri",
  "dokumen-kerjasama",
]);

const internasionalSlugs = new Set([
  "internasional",
  "mobilitas",
  "program",
  "mitra",
]);

function getLandingPageUrl(slug: string): string {
  if (slug === "prestasi-mahasiswa") return "/kemahasiswaan/prestasi";
  if (slug === "karya-mahasiswa") return "/kemahasiswaan/karya-mahasiswa";
  if (profilSlugs.has(slug)) return `/profil/${slug}`;
  if (akademikSlugs.has(slug)) return `/akademik/${slug}`;
  if (kemahasiswaanSlugs.has(slug)) return `/kemahasiswaan/${slug}`;
  if (layananSlugs.has(slug)) return `/layanan/${slug}`;
  if (risetSlugs.has(slug)) return `/riset/${slug}`;
  if (kerjasamaSlugs.has(slug)) return `/kerjasama/${slug}`;
  if (internasionalSlugs.has(slug)) return `/internasional/${slug}`;
  return `/profil/${slug}`;
}

export function buildSearchIndex(): readonly SearchResult[] {
  const items: SearchResult[] = [];

  // 1. Study Programs
  for (const program of studyPrograms) {
    const badge = degreeBadge(program.degree);
    const degreeLevelKey = badge.startsWith("S") ? badge : badge;
    items.push({
      id: `program-${program.slug}`,
      title: program.name,
      type: "program",
      category: `${badge} - ${program.degree}`,
      description: `Program ${program.name} FEB UNJ terakreditasi ${program.accreditation}. ${program.vision}`,
      url: `/program-studi/${program.slug}`,
      keywords: [
        program.degree,
        badge,
        degreeLevelKey,
        program.accreditation,
        program.head,
        "program studi",
        "jurusan",
        "kurikulum",
        ...program.careerProspects,
      ],
    });
  }

  // 2. Lecturers
  for (const lecturer of getAllLecturers()) {
    items.push({
      id: `lecturer-${lecturer.slug}`,
      title: lecturer.name,
      type: "lecturer",
      category: `${lecturer.homebase} (${lecturer.role})`,
      description: `Dosen ${lecturer.homebase} dengan keahlian ${lecturer.expertise.join(", ")}. NIDN: ${lecturer.nidn}.`,
      url: `/sdm/dosen/${lecturer.slug}`,
      keywords: [
        lecturer.nidn,
        lecturer.title,
        lecturer.role,
        lecturer.homebase,
        "dosen",
        "pengajar",
        "akademisi",
        ...lecturer.expertise,
        ...lecturer.education,
      ],
    });
  }

  // 3. News Articles
  for (const article of news) {
    items.push({
      id: `news-${article.slug}`,
      title: article.title,
      type: "news",
      category: article.category,
      description: article.excerpt,
      url: `/informasi/berita/${article.slug}`,
      keywords: [
        article.category,
        "berita",
        "kabar",
        "warta",
        "artikel",
        ...article.body,
      ],
    });
  }

  for (const item of announcements) {
    items.push({
      id: `announcement-${item.slug}`,
      title: item.title,
      type: "news",
      category: `Pengumuman - ${item.category}`,
      description: item.excerpt,
      url: `/informasi/pengumuman/${item.slug}`,
      keywords: [
        item.category,
        "pengumuman",
        "informasi",
        "resmi",
        ...item.body,
      ],
    });
  }

  for (const item of articles) {
    items.push({
      id: `article-${item.slug}`,
      title: item.title,
      type: "news",
      category: `Artikel - ${item.category}`,
      description: item.excerpt,
      url: `/informasi/artikel/${item.slug}`,
      keywords: [
        item.category,
        "artikel",
        "opini",
        "kajian",
        ...item.body,
      ],
    });
  }

  // 4. Events
  for (const event of events) {
    items.push({
      id: `event-${event.slug}`,
      title: event.title,
      type: "event",
      category: `${event.category} - ${event.venue}`,
      description: event.summary,
      url: `/informasi/event/${event.slug}`,
      keywords: [
        event.category,
        event.venue,
        "event",
        "agenda",
        "seminar",
        "workshop",
        "kegiatan",
      ],
    });
  }

  // 5. Documents
  for (const doc of documents) {
    items.push({
      id: `document-${doc.slug}`,
      title: doc.title,
      type: "document",
      category: doc.category,
      description: doc.description,
      url: `/dokumen`,
      keywords: [
        doc.category,
        "dokumen",
        "pedoman",
        "panduan",
        "standar",
        "formulir",
        "unduhan",
        "pdf",
        doc.fileUrl,
      ],
    });
  }

  // 6. Landing Pages
  for (const page of landingPages) {
    const url = getLandingPageUrl(page.slug);
    items.push({
      id: `page-${page.slug}`,
      title: `${page.title} FEB UNJ`,
      type: "page",
      category: page.eyebrow,
      description: page.summary,
      url,
      keywords: [
        page.eyebrow,
        page.title,
        "halaman",
        "profil",
        ...page.sections.map((s) => s.heading),
      ],
    });
  }

  // 7. Core Portal Hubs
  items.push(
    {
      id: "hub-kontak",
      title: "Kontak & Layanan Informasi Kampus",
      type: "page",
      category: "Kontak & Sekretariat",
      description: "Informasi kontak resmi, surel fakultas, saluran pengaduan, dan lokasi gedung FEB UNJ Kampus Rawamangun.",
      url: "/kontak",
      keywords: ["kontak", "alamat", "telepon", "email", "lokasi", "pengaduan", "layanan"],
    },
    {
      id: "hub-program-studi",
      title: "Daftar Lengkap Program Studi FEB UNJ",
      type: "page",
      category: "Akademik & Kurikulum",
      description: "Eksplorasi seluruh program sarjana, magister, doktor, dan sarjana terapan di lingkungan FEB UNJ.",
      url: "/program-studi",
      keywords: ["program studi", "jurusan", "prodi", "s1", "s2", "s3", "d4", "akreditasi"],
    },
    {
      id: "hub-sdm-dosen",
      title: "Direktori Profil Dosen & Tenaga Kependidikan",
      type: "page",
      category: "Sumber Daya Manusia",
      description: "Profil lengkap dosen, bidang keahlian, jabatan fungsional, dan tautan publikasi ilmiah Sinta / Scopus.",
      url: "/sdm/dosen",
      keywords: ["direktori dosen", "profil dosen", "sdm", "tendik", "tenaga kependidikan"],
    },
    {
      id: "hub-dokumen",
      title: "Pusat Dokumen Publik & Formulir Akademik",
      type: "page",
      category: "Keterbukaan Informasi",
      description: "Repositori berkas panduan skripsi, kalender akademik, kode etik, dan SOP layanan mahasiswa FEB UNJ.",
      url: "/dokumen",
      keywords: ["repositori dokumen", "unduhan", "formulir", "pedoman", "peraturan"],
    },
  );

  return items;
}

export const searchIndex: readonly SearchResult[] = buildSearchIndex();

export function searchContent(
  query: string,
  scope: SearchScope = "all",
): SearchResult[] {
  if (!query || typeof query !== "string") {
    return [];
  }
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return [];
  }

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  let pool = searchIndex;
  if (scope !== "all") {
    const targetType = scopeToType[scope];
    if (targetType) {
      pool = pool.filter((item) => item.type === targetType);
    }
  }

  type ScoredResult = {
    item: SearchResult;
    score: number;
  };

  const matched: ScoredResult[] = [];

  for (const item of pool) {
    const titleLower = item.title.toLowerCase();
    const catLower = item.category.toLowerCase();
    const descLower = item.description.toLowerCase();
    const keywordsJoined = item.keywords.join(" ").toLowerCase();

    // Check if every term appears in at least one field
    const allTermsMatch = terms.every(
      (term) =>
        titleLower.includes(term) ||
        catLower.includes(term) ||
        descLower.includes(term) ||
        keywordsJoined.includes(term),
    );

    if (!allTermsMatch) {
      continue;
    }

    let score = 0;

    // Exact title matches
    if (titleLower === normalizedQuery) {
      score += 100;
    } else if (titleLower.startsWith(normalizedQuery)) {
      score += 60;
    } else if (titleLower.includes(normalizedQuery)) {
      score += 40;
    }

    // Term-level scoring
    for (const term of terms) {
      if (titleLower.includes(term)) {
        score += 15;
      }
      if (catLower.includes(term)) {
        score += 8;
      }
      if (keywordsJoined.includes(term)) {
        score += 5;
      }
      if (descLower.includes(term)) {
        score += 3;
      }
    }

    matched.push({ item, score });
  }

  matched.sort((a, b) => b.score - a.score);

  return matched.map((m) => m.item);
}
