import { cleanup, render, screen } from "@testing-library/react"
import type { ReactNode } from "react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { InPageNavigation } from "@/components/common/in-page-navigation"
import { MetadataRow } from "@/components/common/metadata-row"
import { DetailPageTemplate } from "@/components/templates/detail-page-template"
import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"

const breadcrumbs = [
  { label: "Beranda", href: "/" },
  { label: "Akademik", href: "/akademik" },
  { label: "Kurikulum" },
] as const

const TemplateSection = ({ children }: Readonly<{ children: ReactNode }>) => <p>{children}</p>

afterEach(() => {
  cleanup()
})

describe("InPageNavigation", () => {
  it("renders a labelled table of contents with an active jump link", () => {
    // Given: documented sections with one active anchor.
    render(
      <InPageNavigation
        activeId="arah"
        items={[
          { id: "komitmen", label: "Komitmen" },
          { id: "arah", label: "Arah Strategis" },
        ]}
      />,
    )

    // When: readers navigate the document outline.
    const navigation = screen.getByRole("navigation", { name: /dalam halaman/i })

    // Then: each item targets a section and the active item is announced.
    expect(navigation).toBeDefined()
    expect(screen.getByRole("link", { name: "Komitmen" }).getAttribute("href")).toBe("#komitmen")
    expect(screen.getByRole("link", { name: "Arah Strategis" }).getAttribute("aria-current")).toBe("location")
  })
})

describe("MetadataRow", () => {
  it("renders key value metadata in a description list", () => {
    // Given: entity metadata.
    render(<MetadataRow items={[{ label: "Akreditasi", value: "Unggul" }]} />)

    // When: the facts are presented.
    const definitionList = screen.getByText("Akreditasi").closest("dl")

    // Then: label and value are semantic description terms.
    expect(definitionList).not.toBeNull()
    expect(screen.getByText("Akreditasi").tagName).toBe("DT")
    expect(screen.getByText("Unggul").tagName).toBe("DD")
  })

  it("renders duplicate labels without React key warnings", () => {
    // Given: independently identified metadata with duplicate visible labels.
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined)
    render(
      <MetadataRow
        items={[
          { id: "accreditation-current", label: "Akreditasi", value: "Unggul" },
          { id: "accreditation-previous", label: "Akreditasi", value: "A" },
        ]}
      />,
    )

    // When: the metadata list is rendered.
    const labels = screen.getAllByText("Akreditasi")

    // Then: both terms render without duplicate-key warnings.
    expect(labels).toHaveLength(2)
    expect(consoleError).not.toHaveBeenCalled()
    consoleError.mockRestore()
  })
})

describe("LandingPageTemplate", () => {
  it("renders one page title, breadcrumbs, anchored editorial sections, and CTA", () => {
    // Given: content landing data with an institutional call to action.
    render(
      <LandingPageTemplate
        breadcrumbs={breadcrumbs}
        category="FEB UNJ"
        cta={{ href: "/kontak", label: "Hubungi FEB UNJ", title: "Mari terhubung" }}
        inPageNavItems={[{ id: "komitmen", label: "Komitmen" }]}
        sections={[{ body: "Ruang belajar berbasis riset.", heading: "Komitmen", id: "komitmen" }]}
        summary="Ekosistem pendidikan ekonomi yang terbuka dan berdampak."
        title="Tentang FEB"
      />,
    )

    // When: the page is rendered.
    const title = screen.getByRole("heading", { level: 1, name: "Tentang FEB" })

    // Then: hierarchy and deep links are accessible.
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1)
    expect(title).toBeDefined()
    expect(screen.getByRole("navigation", { name: /breadcrumb/i })).toBeDefined()
    expect(document.getElementById("komitmen")).not.toBeNull()
    expect(screen.getByRole("link", { name: "Hubungi FEB UNJ" }).getAttribute("href")).toBe("/kontak")
  })

  it("generates unique section IDs when headings repeat", () => {
    // Given: editorial sections with the same heading.
    render(
      <LandingPageTemplate
        sections={[
          { body: "Pertama", heading: "Overview" },
          { body: "Kedua", heading: "Overview" },
        ]}
        title="Tentang FEB"
      />,
    )

    // When: the landing template derives section anchors.
    const sections = document.querySelectorAll("section[id]")

    // Then: repeated heading slugs are unique and addressable.
    expect(Array.from(sections, (section) => section.id)).toEqual(["overview", "overview-2"])
  })

  it("uses a level-two callout heading when no sections exist", () => {
    // Given: a callout-only content landing.
    render(
      <LandingPageTemplate
        callout={{ description: "Komitmen kami.", title: "Komitmen Institusi" }}
        title="Tentang FEB"
      />,
    )

    // When: the title hierarchy renders without editorial sections.
    const calloutHeading = screen.getByRole("heading", { name: "Komitmen Institusi" })

    // Then: the heading follows the single h1 directly.
    expect(calloutHeading.tagName).toBe("H2")
  })
})

describe("ListingPageTemplate", () => {
  it("renders the heading, live count, filters, results, and pagination slot", () => {
    // Given: a directory with controls and paginated results.
    render(
      <ListingPageTemplate
        breadcrumbs={breadcrumbs}
        description="Dokumen penting untuk sivitas akademika."
        filterControls={<button type="button">Filter kategori</button>}
        paginationControls={<nav aria-label="Pagination">Halaman 1</nav>}
        title="Dokumen Akademik"
        totalItemsCount={12}
      >
        <TemplateSection>Pedoman Akademik</TemplateSection>
      </ListingPageTemplate>,
    )

    // When: readers inspect the directory.
    const count = screen.getByText(/12 dokumen/i)

    // Then: its primary controls and result content are present.
    expect(screen.getByRole("heading", { level: 1, name: "Dokumen Akademik" })).toBeDefined()
    expect(count.getAttribute("aria-live")).toBe("polite")
    expect(screen.getByRole("button", { name: "Filter kategori" })).toBeDefined()
    expect(screen.getByText("Pedoman Akademik")).toBeDefined()
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeDefined()
  })
})

describe("DetailPageTemplate", () => {
  it("renders an article, metadata list, and back link from breadcrumb hierarchy", () => {
    // Given: a complete academic entity detail.
    render(
      <DetailPageTemplate
        breadcrumbs={breadcrumbs}
        eyebrow="Program Studi"
        metadataItems={[{ label: "Jenjang", value: "Sarjana" }]}
        relatedContentSlot={<p>Program terkait</p>}
        sidebarSlot={<p>Informasi pendaftaran</p>}
        summary="Program studi untuk pemimpin bisnis masa depan."
        title="S1 Manajemen"
      >
        <h2>Kurikulum</h2>
        <p>Kurikulum responsif terhadap kebutuhan industri.</p>
      </DetailPageTemplate>,
    )

    // When: the detail page renders its primary content.
    const article = screen.getByRole("article")

    // Then: main information, facts, related content, and a back link are semantic.
    expect(article).toBeDefined()
    expect(screen.getByText("Jenjang").closest("dl")).not.toBeNull()
    expect(screen.getByRole("link", { name: /kembali ke akademik/i }).getAttribute("href")).toBe("/akademik")
    expect(screen.getByText("Program terkait")).toBeDefined()
  })

  it("omits the detail sidebar when it has no metadata or supplementary content", () => {
    // Given: a detail page with only primary article content.
    render(
      <DetailPageTemplate breadcrumbs={breadcrumbs} metadataItems={[]} title="S1 Manajemen">
        <h2>Kurikulum</h2>
      </DetailPageTemplate>,
    )

    // When: the template has no sidebar inputs.
    const detailSidebar = screen.queryByRole("complementary", { name: "Informasi detail" })

    // Then: no empty detail aside is rendered.
    expect(detailSidebar).toBeNull()
  })
})
