import { describe, expect, it } from "vitest"

import robots from "@/app/robots"
import sitemap from "@/app/sitemap"
import { siteConfig } from "@/config/site"
import { lecturers } from "@/data/lecturers"
import { studyPrograms } from "@/data/study-programs"
import { createPageMetadata, SITE_TITLE_SUFFIX } from "@/lib/metadata"

describe("createPageMetadata helper", () => {
  it("formats title with FEB UNJ branding suffix", () => {
    const meta = createPageMetadata({
      title: "Akreditasi & Mutu",
      description: "Informasi akreditasi internasional dan nasional FEB UNJ.",
      path: "/profil/akreditasi",
    })

    expect(SITE_TITLE_SUFFIX).toBe(" | Fakultas Ekonomi dan Bisnis UNJ")
    expect(meta.title).toBe("Akreditasi & Mutu | Fakultas Ekonomi dan Bisnis UNJ")
    expect(meta.description).toBe("Informasi akreditasi internasional dan nasional FEB UNJ.")
  })

  it("uses default site title when no custom title is provided", () => {
    const meta = createPageMetadata({})

    expect(meta.title).toBe(siteConfig.name)
    expect(meta.description).toBe(siteConfig.description)
  })

  it("does not duplicate suffix if title already contains branding", () => {
    const meta = createPageMetadata({
      title: "Profil | Fakultas Ekonomi dan Bisnis UNJ",
    })

    expect(meta.title).toBe("Profil | Fakultas Ekonomi dan Bisnis UNJ")
  })

  it("sets proper canonical URL and alternates", () => {
    const metaWithSlash = createPageMetadata({ path: "/kontak" })
    expect(metaWithSlash.alternates?.canonical).toBe("https://feb.unj.ac.id/kontak")

    const metaWithoutSlash = createPageMetadata({ path: "program-studi/s1-manajemen" })
    expect(metaWithoutSlash.alternates?.canonical).toBe("https://feb.unj.ac.id/program-studi/s1-manajemen")

    const metaRoot = createPageMetadata({ path: "/" })
    expect(metaRoot.alternates?.canonical).toBe("https://feb.unj.ac.id")
  })

  it("sets OpenGraph metadata with all required fields", () => {
    const meta = createPageMetadata({
      title: "S1 Manajemen",
      description: "Program studi Sarjana Manajemen terakreditasi Unggul.",
      path: "/program-studi/s1-manajemen",
      ogType: "article",
      image: "/images/programs/manajemen.jpg",
    })

    expect(meta.openGraph).toBeDefined()
    expect(meta.openGraph?.title).toBe("S1 Manajemen | Fakultas Ekonomi dan Bisnis UNJ")
    expect(meta.openGraph?.description).toBe("Program studi Sarjana Manajemen terakreditasi Unggul.")
    expect(meta.openGraph?.url).toBe("https://feb.unj.ac.id/program-studi/s1-manajemen")
    expect(meta.openGraph?.siteName).toBe(siteConfig.name)
    expect(meta.openGraph?.locale).toBe("id_ID")
    const og = meta.openGraph
    if (og && "type" in og) {
      expect(og.type).toBe("article")
    }
    expect(meta.openGraph?.images).toEqual([
      {
        url: "https://feb.unj.ac.id/images/programs/manajemen.jpg",
        width: 1200,
        height: 630,
        alt: "S1 Manajemen | Fakultas Ekonomi dan Bisnis UNJ",
      },
    ])
  })

  it("sets default OpenGraph image when custom image is not provided", () => {
    const meta = createPageMetadata({
      title: "Tentang FEB",
      path: "/profil/tentang-feb",
    })

    expect(meta.openGraph?.images).toBeDefined()
    const images = meta.openGraph?.images as Array<{ url: string }>
    expect(images.length).toBeGreaterThan(0)
    expect(images[0].url).toContain("febunj2.png")
  })

  it("sets Twitter card metadata with summary_large_image", () => {
    const meta = createPageMetadata({
      title: "Direktori Dosen",
      description: "Daftar staf pengajar FEB UNJ.",
      path: "/sdm/dosen",
      image: "/images/og/dosen.jpg",
    })

    expect(meta.twitter).toBeDefined()
    const twitter = meta.twitter
    if (twitter && "card" in twitter) {
      expect(twitter.card).toBe("summary_large_image")
    }
    expect(meta.twitter?.title).toBe("Direktori Dosen | Fakultas Ekonomi dan Bisnis UNJ")
    expect(meta.twitter?.description).toBe("Daftar staf pengajar FEB UNJ.")
    expect(meta.twitter?.images).toEqual(["https://feb.unj.ac.id/images/og/dosen.jpg"])
  })

  it("sets FEB logo favicon and apple touch icon metadata", () => {
    const meta = createPageMetadata({
      title: "Beranda",
      path: "/",
    })

    expect(meta.icons).toBeDefined()
    const icons = meta.icons as { icon: Array<{ url: string }>; apple: Array<{ url: string }> }
    expect(icons.icon).toEqual([
      { url: "/favicon.ico" },
      { url: "/images/logo/feb-logo.png", type: "image/png" },
    ])
    expect(icons.apple).toEqual([{ url: "/images/logo/feb-logo.png" }])
  })

  it("supports noIndex robot directive when specified", () => {
    const meta = createPageMetadata({
      title: "Hasil Pencarian",
      path: "/search",
      noIndex: true,
    })

    expect(meta.robots).toEqual({
      index: false,
      follow: false,
    })
  })
})

describe("robots.txt generation", () => {
  it("generates valid robots configuration", () => {
    const robotsConfig = robots()

    expect(robotsConfig).toBeDefined()
    expect(robotsConfig.rules).toEqual({
      userAgent: "*",
      allow: "/",
    })
    expect(robotsConfig.sitemap).toBe("https://feb.unj.ac.id/sitemap.xml")
    expect(robotsConfig.host).toBe("https://feb.unj.ac.id")
  })
})

describe("sitemap.xml generation", () => {
  it("generates comprehensive dynamic sitemap covering 150+ routes", () => {
    const entries = sitemap()

    expect(Array.isArray(entries)).toBe(true)
    expect(entries.length).toBeGreaterThanOrEqual(150)

    // Verify root home entry
    const homeEntry = entries.find((e) => e.url === "https://feb.unj.ac.id")
    expect(homeEntry).toBeDefined()
    expect(homeEntry?.priority).toBe(1.0)
    expect(homeEntry?.changeFrequency).toBe("daily")

    // Verify all 21 study programs are present
    expect(studyPrograms.length).toBe(21)
    for (const prog of studyPrograms) {
      const progUrl = `https://feb.unj.ac.id/program-studi/${prog.slug}`
      const found = entries.find((e) => e.url === progUrl)
      expect(found, `Missing study program in sitemap: ${progUrl}`).toBeDefined()
      expect(found?.priority).toBeGreaterThanOrEqual(0.8)
    }

    // Verify all 5 degree levels are present
    const degrees = ["doktor", "magister", "sarjana", "sarjana-terapan", "diploma"]
    for (const deg of degrees) {
      const degUrl = `https://feb.unj.ac.id/program-studi/${deg}`
      const found = entries.find((e) => e.url === degUrl)
      expect(found, `Missing degree level in sitemap: ${degUrl}`).toBeDefined()
    }

    // Verify all 25 lecturers are present
    expect(lecturers.length).toBe(25)
    for (const lecturer of lecturers) {
      const lecturerUrl = `https://feb.unj.ac.id/sdm/dosen/${lecturer.slug}`
      const found = entries.find((e) => e.url === lecturerUrl)
      expect(found, `Missing lecturer in sitemap: ${lecturerUrl}`).toBeDefined()
    }

    // Verify SDM categories
    const sdmCategories = ["tenaga-kependidikan", "tendik", "dosen-praktisi", "senat", "dosen-purnabakti"]
    for (const cat of sdmCategories) {
      const catUrl = `https://feb.unj.ac.id/sdm/${cat}`
      const found = entries.find((e) => e.url === catUrl)
      expect(found, `Missing SDM category in sitemap: ${catUrl}`).toBeDefined()
    }

    // Verify key information and document categories
    const infoCategories = ["berita", "pengumuman", "event", "artikel"]
    for (const cat of infoCategories) {
      const catUrl = `https://feb.unj.ac.id/informasi/${cat}`
      const found = entries.find((e) => e.url === catUrl)
      expect(found, `Missing info category in sitemap: ${catUrl}`).toBeDefined()
    }

    const docCategories = ["publik", "unduhan", "akademik", "kemahasiswaan"]
    for (const cat of docCategories) {
      const catUrl = `https://feb.unj.ac.id/dokumen/${cat}`
      const found = entries.find((e) => e.url === catUrl)
      expect(found, `Missing doc category in sitemap: ${catUrl}`).toBeDefined()
    }

    // Check all entries have valid URLs and properties
    for (const entry of entries) {
      expect(entry.url).toMatch(/^https:\/\/feb\.unj\.ac\.id/)
      expect(entry.lastModified).toBeDefined()
      expect(entry.changeFrequency).toBeDefined()
      expect(typeof entry.priority).toBe("number")
      expect(entry.priority).toBeGreaterThanOrEqual(0)
      expect(entry.priority).toBeLessThanOrEqual(1)
    }
  })
})
