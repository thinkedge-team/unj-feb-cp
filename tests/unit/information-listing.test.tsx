import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"

import { events } from "@/data/events"
import { news } from "@/data/news"
import { ArticleDetail } from "@/features/information/article-detail"
import { EventDetail } from "@/features/information/event-detail"
import { InformationListing } from "@/features/information/information-listing"
import type { Event, NewsArticle } from "@/types/content"
import { generateStaticParams as generateCategoryParams } from "@/app/(site)/informasi/[category]/page"
import { generateStaticParams as generateSlugParams } from "@/app/(site)/informasi/[category]/[slug]/page"

afterEach(() => {
  cleanup()
})

describe("InformationListing", () => {
  it("renders news category listing with category title, counter, and NewsCards", () => {
    render(
      <InformationListing
        category="berita"
        items={news}
        title="Berita & Kabar Kampus"
      />,
    )

    expect(screen.getByRole("heading", { level: 1, name: /berita & kabar kampus/i })).toBeDefined()
    expect(screen.getByText(new RegExp(`menampilkan \\d+ dari ${news.length} Berita`, "i"))).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: news[0].title })).toBeDefined()
  })

  it("filters news by sub-category chips and updates results", () => {
    render(
      <InformationListing
        category="berita"
        items={news}
        title="Berita & Kabar Kampus"
      />,
    )

    const prestasiChip = screen.getByRole("button", { name: /prestasi/i })
    fireEvent.click(prestasiChip)

    const matchingNews = news.filter((n) => n.category === "Prestasi")
    expect(screen.getByText(new RegExp(`menampilkan ${matchingNews.length} dari ${news.length} Berita`, "i"))).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: matchingNews[0].title })).toBeDefined()
  })

  it("filters items by search query across title and excerpt", () => {
    render(
      <InformationListing
        category="berita"
        items={news}
        title="Berita & Kabar Kampus"
      />,
    )

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "Literasi" } })

    expect(screen.getByRole("heading", { level: 3, name: /literasi keuangan/i })).toBeDefined()
  })

  it("shows empty state when no items match and resets when action is clicked", () => {
    render(
      <InformationListing
        category="berita"
        items={news}
        title="Berita & Kabar Kampus"
      />,
    )

    const searchInput = screen.getByRole("searchbox", { name: /cari/i })
    fireEvent.change(searchInput, { target: { value: "KeywordYangTidakMungkinAda123" } })

    expect(screen.getByRole("heading", { level: 2, name: /tidak ditemukan/i })).toBeDefined()

    const resetButtons = screen.getAllByRole("button", { name: /reset filter/i })
    expect(resetButtons.length).toBeGreaterThan(0)
    fireEvent.click(resetButtons[0])

    expect(screen.getByRole("heading", { level: 3, name: news[0].title })).toBeDefined()
  })

  it("renders events category with EventCards and date badges", () => {
    render(
      <InformationListing
        category="event"
        items={events}
        title="Agenda & Acara Kampus"
      />,
    )

    expect(screen.getByRole("heading", { level: 1, name: /agenda & acara kampus/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: events[0].title })).toBeDefined()
    expect(screen.getAllByText(events[0].venue).length).toBeGreaterThan(0)
  })

  it("paginates items correctly across pages", () => {
    render(
      <InformationListing
        category="berita"
        items={news}
        pageSize={6}
        title="Berita & Kabar Kampus"
      />,
    )

    const page2Button = screen.getByRole("button", { name: "Halaman 2" })
    expect(page2Button).toBeDefined()
    fireEvent.click(page2Button)

    // First item of page 1 should not be in page 2
    expect(screen.queryByRole("heading", { level: 3, name: news[0].title })).toBeNull()
    expect(screen.getByRole("heading", { level: 3, name: news[6].title })).toBeDefined()
  })
})

describe("ArticleDetail", () => {
  const sampleArticle: NewsArticle = {
    slug: "feb-unj-perkuat-literasi-keuangan-digital",
    title: "FEB UNJ Perkuat Literasi Keuangan Digital untuk Mahasiswa",
    category: "Akademik",
    publishedAt: "2026-03-15",
    excerpt: "Ringkasan berita literasi keuangan digital FEB UNJ.",
    body: [
      "Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta menyelenggarakan program edukasi keuangan komprehensif.",
      "Program ini bertujuan membekali mahasiswa dengan keterampilan manajemen finansial modern berbasis teknologi.",
    ],
    readingMinutes: 5,
    image: "/images/news/placeholder-campus.jpg",
  }

  it("renders semantic article with title h1, category, author, date, and reading time", () => {
    render(
      <ArticleDetail
        article={sampleArticle}
        category="berita"
        relatedArticles={news.slice(1, 4)}
      />,
    )

    expect(screen.getByRole("heading", { level: 1, name: sampleArticle.title })).toBeDefined()
    expect(screen.getAllByText("Akademik").length).toBeGreaterThan(0)
    expect(screen.getAllByText(/5 menit baca/i).length).toBeGreaterThan(0)
    expect(screen.getByText(sampleArticle.body[0])).toBeDefined()
    expect(screen.getByText(sampleArticle.body[1])).toBeDefined()
  })

  it("renders pull quote, share button mock, and related articles", () => {
    render(
      <ArticleDetail
        article={sampleArticle}
        category="berita"
        relatedArticles={news.slice(1, 4)}
      />,
    )

    expect(screen.getByText(/bagikan artikel/i)).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /berita terkait/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 3, name: news[1].title })).toBeDefined()
  })
})

describe("EventDetail", () => {
  const sampleEvent: Event = {
    slug: "conference-ekonomi-berkelanjutan",
    title: "International Conference on Sustainable Economics",
    category: "Konferensi",
    startsAt: "2026-10-15T08:00:00+07:00",
    endsAt: "2026-10-15T16:00:00+07:00",
    venue: "Aula Ki Hajar Dewantara, Kampus A UNJ",
    summary: "Konferensi internasional tahunan yang mengkaji transisi ekonomi hijau dan inklusi keuangan global.",
    registrationUrl: "https://feb.unj.ac.id/registrasi/conference-ekonomi-berkelanjutan",
  }

  it("renders event detail with schedule, speakers, venue, and sidebar metadata", () => {
    render(<EventDetail event={sampleEvent} relatedEvents={events.slice(1, 4)} />)

    expect(screen.getByRole("heading", { level: 1, name: sampleEvent.title })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /deskripsi acara/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /pembicara & narasumber/i })).toBeDefined()
    expect(screen.getByRole("heading", { level: 2, name: /jadwal & susunan acara/i })).toBeDefined()
    expect(screen.getAllByText(sampleEvent.venue).length).toBeGreaterThan(0)
  })

  it("opens and handles accessible registration mock modal with confirmation", async () => {
    render(<EventDetail event={sampleEvent} relatedEvents={events.slice(1, 4)} />)

    const openModalButton = screen.getByRole("button", { name: /daftar acara sekarang/i })
    expect(openModalButton).toBeDefined()
    fireEvent.click(openModalButton)

    // Modal is now open
    expect(screen.getByRole("dialog", { name: /formulir pendaftaran/i })).toBeDefined()
    expect(screen.getByLabelText(/nama lengkap/i)).toBeDefined()
    expect(screen.getByLabelText(/email aktif/i)).toBeDefined()
    expect(screen.getByLabelText(/institusi \/ instansi/i)).toBeDefined()

    // Fill form and submit
    fireEvent.change(screen.getByLabelText(/nama lengkap/i), { target: { value: "Ahmad Fauzi" } })
    fireEvent.change(screen.getByLabelText(/email aktif/i), { target: { value: "fauzi@example.com" } })
    fireEvent.change(screen.getByLabelText(/institusi \/ instansi/i), { target: { value: "Universitas Negeri Jakarta" } })

    const submitButton = screen.getByRole("button", { name: /konfirmasi pendaftaran/i })
    fireEvent.click(submitButton)

    // Shows confirmation toast / alert
    await waitFor(() => {
      expect(screen.getByRole("status")).toBeDefined()
      expect(screen.getByText(/pendaftaran berhasil dikonfirmasi/i)).toBeDefined()
    })
  })
})

describe("Information Route Static Params", () => {
  it("generates static route parameters for information categories", async () => {
    const params = await generateCategoryParams()
    const categories = params.map((p) => p.category)

    expect(categories).toContain("berita")
    expect(categories).toContain("pengumuman")
    expect(categories).toContain("event")
    expect(categories).toContain("artikel")
  })

  it("generates static route parameters for all information slugs across categories", async () => {
    const params = await generateSlugParams()
    expect(params.length).toBeGreaterThanOrEqual(news.length + events.length)

    const beritaSlugs = params.filter((p) => p.category === "berita").map((p) => p.slug)
    for (const item of news) {
      expect(beritaSlugs).toContain(item.slug)
    }

    const eventSlugs = params.filter((p) => p.category === "event").map((p) => p.slug)
    for (const item of events) {
      expect(eventSlugs).toContain(item.slug)
    }
  })
})
