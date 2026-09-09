import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { DocumentCard } from "@/components/cards/document-card"
import { EventCard } from "@/components/cards/event-card"
import { NewsCard } from "@/components/cards/news-card"
import { ProfileCard } from "@/components/cards/profile-card"
import { degreeBadge, StudyProgramCard } from "@/components/cards/study-program-card"
import { EmptyState } from "@/components/common/empty-state"
import { ErrorState } from "@/components/common/error-state"
import type { DocumentItem, Event, Lecturer, NewsArticle, StaffMember, StudyProgram } from "@/types/content"

afterEach(() => {
  cleanup()
})

describe("Entity Cards and States", () => {
  it("renders StudyProgramCard with degree badge, title, and link", () => {
    const program: StudyProgram = {
      slug: "s1-terapan-administrasi-perkantoran-digital",
      name: "S1 Terapan Administrasi Perkantoran Digital",
      degree: "Sarjana Terapan",
      accreditation: "Unggul",
      vision: "Menjadi program unggul.",
      mission: ["Misi 1"],
      careerProspects: ["Prospek 1"],
      curriculum: [["Matkul 1"]],
      head: "Dr. Dwi Lestari",
      contact: "akademik@unj.ac.id",
    }

    render(<StudyProgramCard program={program} />)

    expect(screen.getByRole("heading", { level: 3, name: "S1 Terapan Administrasi Perkantoran Digital" })).toBeDefined()
    expect(screen.getByText("D4")).toBeDefined()
    expect(screen.getByText("Sarjana Terapan")).toBeDefined()
    expect(screen.getByText("Unggul")).toBeDefined()
    const link = screen.getByRole("link", { name: /Lihat Program/i })
    expect(link.getAttribute("href")).toBe("/program-studi/s1-terapan-administrasi-perkantoran-digital")
  })

  it("renders ProfileCard for lecturer with photo, NIDN, and expertise", () => {
    const lecturer: Lecturer = {
      slug: "dr-mujiyatno",
      name: "Dr. Mujiyatno, S.E., M.M.",
      nidn: "0015086704",
      title: "Lektor Kepala",
      role: "Lektor Kepala",
      homebase: "Manajemen",
      expertise: ["Manajemen Strategik", "Kewirausahaan"],
      education: ["S1", "S2", "S3"],
      links: { sinta: "#", scopus: "#", googleScholar: "#" },
      photo: "/images/lecturers/mujiyatno.jpg",
    }

    render(<ProfileCard profile={lecturer} />)

    expect(screen.getByRole("heading", { level: 3, name: "Dr. Mujiyatno, S.E., M.M." })).toBeDefined()
    expect(screen.getByText("NIDN 0015086704")).toBeDefined()
    expect(screen.getByText("Manajemen Strategik")).toBeDefined()
    const photo = screen.getByAltText("Foto Dr. Mujiyatno, S.E., M.M.")
    expect(photo.getAttribute("src")).toBe("/images/lecturers/mujiyatno.jpg")
    expect(screen.getByRole("link", { name: "Lihat Profil" }).getAttribute("href")).toBe("/sdm/dosen/dr-mujiyatno")
  })

  it("maps every typed degree level to its mandated short badge", () => {
    expect(degreeBadge("Doktor")).toBe("S3")
    expect(degreeBadge("Magister")).toBe("S2")
    expect(degreeBadge("Sarjana")).toBe("S1")
    expect(degreeBadge("Sarjana Terapan")).toBe("D4")
    expect(degreeBadge("Diploma")).toBe("D3")
  })

  it("renders ProfileCard for staff member photo and unit", () => {
    const staff: StaffMember = {
      slug: "staff-budi",
      name: "Budi Santoso, S.Kom.",
      role: "Pranata Komputer",
      unit: "Laboratorium Komputer",
      email: "budi@unj.ac.id",
      phone: "08123456789",
      bio: "Pengelola infrastruktur TI FEB.",
      photo: "/images/staff/budi.jpg",
    }

    render(<ProfileCard profile={staff} />)

    expect(screen.getByRole("heading", { level: 3, name: "Budi Santoso, S.Kom." })).toBeDefined()
    expect(screen.getByAltText("Foto Budi Santoso, S.Kom.").getAttribute("src")).toBe("/images/staff/budi.jpg")
    expect(screen.getByText("Laboratorium Komputer")).toBeDefined()
    expect(screen.getByText("Pengelola infrastruktur TI FEB.")).toBeDefined()
  })

  it("renders initials when a staff profile has no photo", () => {
    const staff: StaffMember = {
      slug: "staff-budi",
      name: "Budi Santoso, S.Kom.",
      role: "Pranata Komputer",
      unit: "Laboratorium Komputer",
      email: "budi@unj.ac.id",
      phone: "08123456789",
      bio: "Pengelola infrastruktur TI FEB.",
    }

    render(<ProfileCard profile={staff} />)

    expect(screen.getByText("BS")).toBeDefined()
  })

  it("renders NewsCard with editorial photo, published date, reading time, and link", () => {
    const article: NewsArticle = {
      slug: "feb-unj-literasi",
      title: "FEB UNJ Perkuat Literasi Keuangan",
      category: "Akademik",
      publishedAt: "2026-03-15",
      excerpt: "Ringkasan berita literasi keuangan digital.",
      body: ["Paragraf 1"],
      readingMinutes: 5,
      image: "/images/news/campus.jpg",
    }

    render(<NewsCard article={article} />)

    expect(screen.getByRole("heading", { level: 3, name: "FEB UNJ Perkuat Literasi Keuangan" })).toBeDefined()
    const img = screen.getByAltText("Foto berita FEB UNJ Perkuat Literasi Keuangan")
    expect(img.getAttribute("src")).toBe("/images/news/campus.jpg")
    expect(screen.getByText(/5 menit baca/i)).toBeDefined()
    expect(screen.getByText("Akademik")).toBeDefined()
    expect(screen.getByRole("link", { name: /Baca Berita/i }).getAttribute("href")).toBe("/berita/feb-unj-literasi")
  })

  it("renders NewsCard horizontal variant with compact layout and thumbnail", () => {
    const article: NewsArticle = {
      slug: "feb-unj-literasi-horizontal",
      title: "Riset Ekonomi Digital FEB UNJ",
      category: "Riset",
      publishedAt: "2026-03-16",
      excerpt: "Ringkasan riset ekonomi.",
      body: ["Paragraf 1"],
      readingMinutes: 3,
      image: "/images/news/campus.jpg",
    }

    render(<NewsCard article={article} variant="horizontal" />)

    expect(screen.getByRole("heading", { level: 3, name: "Riset Ekonomi Digital FEB UNJ" })).toBeDefined()
    expect(screen.getByText("Riset")).toBeDefined()
    expect(screen.getByText(/3 min/i)).toBeDefined()
    expect(screen.getByRole("link", { name: /Baca Berita/i })).toBeDefined()
  })

  it("renders EventCard with calendar block and venue details", () => {
    const event: Event = {
      slug: "konferensi-ekonomi",
      title: "Konferensi Ekonomi Berkelanjutan",
      category: "Konferensi",
      startsAt: "2026-10-15T08:00:00+07:00",
      endsAt: "2026-10-15T16:00:00+07:00",
      venue: "Aula Ki Hajar Dewantara",
      summary: "Diskusi keberlanjutan ekonomi.",
      registrationUrl: "https://feb.unj.ac.id/registrasi/konferensi",
    }

    render(<EventCard event={event} />)

    expect(screen.getByRole("heading", { level: 3, name: "Konferensi Ekonomi Berkelanjutan" })).toBeDefined()
    expect(screen.getByText("Aula Ki Hajar Dewantara")).toBeDefined()
    expect(screen.getByText("15")).toBeDefined()
    expect(screen.getByRole("link", { name: "Lihat Event" }).getAttribute("href")).toBe("https://feb.unj.ac.id/registrasi/konferensi")
  })

  it("renders DocumentCard with file format and download link", () => {
    const document: DocumentItem = {
      slug: "pedoman-akademik",
      title: "Pedoman Akademik 2026",
      category: "Akademik",
      publishedAt: "2026-01-15",
      description: "Panduan perkuliahan resmi.",
      fileUrl: "/dokumen/pedoman.pdf",
    }

    render(<DocumentCard document={document} />)

    expect(screen.getByRole("heading", { level: 3, name: "Pedoman Akademik 2026" })).toBeDefined()
    expect(screen.getByText("Akademik / 2026")).toBeDefined()
    const downloadLink = screen.getByRole("link", { name: /Unduh PDF/i })
    expect(downloadLink.getAttribute("href")).toBe("/dokumen/pedoman.pdf")
    expect(downloadLink.hasAttribute("download")).toBe(true)
  })

  it("renders EmptyState with reset action", () => {
    const onAction = vi.fn()
    render(
      <EmptyState
        actionLabel="Hapus Filter"
        description="Tidak ada data yang cocok dengan kriteria pencarian."
        onAction={onAction}
        title="Data Tidak Ditemukan"
      />,
    )

    expect(screen.getByRole("heading", { level: 2, name: "Data Tidak Ditemukan" })).toBeDefined()
    expect(screen.getByText("Tidak ada data yang cocok dengan kriteria pencarian.")).toBeDefined()

    const actionButton = screen.getByRole("button", { name: "Hapus Filter" })
    fireEvent.click(actionButton)
    expect(onAction).toHaveBeenCalledOnce()
  })

  it("renders ErrorState with retry trigger", () => {
    const onRetry = vi.fn()
    render(
      <ErrorState
        description="Gagal memuat direktori program studi."
        onRetry={onRetry}
      />,
    )

    expect(screen.getByRole("alert")).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: "Informasi belum dapat dimuat" })).toBeDefined()

    const retryButton = screen.getByRole("button", { name: "Coba Lagi" })
    fireEvent.click(retryButton)
    expect(onRetry).toHaveBeenCalledOnce()
  })
})
