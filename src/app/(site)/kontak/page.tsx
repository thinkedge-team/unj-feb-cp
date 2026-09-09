import type { Metadata } from "next"
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react"

import { LandingPageTemplate } from "@/components/templates/landing-page-template"
import { siteConfig } from "@/config/site"
import { ContactForm } from "@/features/contact/contact-form"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Hubungi Kami",
  description:
    "Alamat kampus, kontak resmi, nomor telepon, email, jam layanan, dan formulir pengajuan informasi FEB UNJ di Rawamangun, Jakarta Timur.",
  path: "/kontak",
})

export default function KontakPage() {
  return (
    <LandingPageTemplate
      breadcrumbs={[
        { label: "Beranda", href: "/" },
        { label: "Kontak" },
      ]}
      category="Pusat Informasi & Layanan"
      relatedResources={[
        {
          title: "Layanan PPID",
          href: "/layanan/ppid",
          category: "Layanan",
          description: "Mekanisme resmi permohonan informasi publik.",
        },
        {
          title: "Layanan Fakultas",
          href: "/layanan/layanan-fakultas",
          category: "Layanan",
          description: "Administrasi akademik dan persuratan mahasiswa.",
        },
      ]}
      sections={[
        {
          heading: "Alamat dan Lokasi Kampus",
          body: `${siteConfig.contact.address}, ${siteConfig.contact.city} ${siteConfig.contact.postalCode}. Terletak strategis di Kampus A Universitas Negeri Jakarta, Rawamangun, Jakarta Timur.`,
          content: (
            <div className="mt-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-limestone)] p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[var(--color-unj-teal)]" />
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-ink)]">
                      Gedung M &amp; R, Kampus A UNJ
                    </h3>
                    <p className="mt-0.5 text-xs text-[var(--color-muted-ink)] sm:text-sm">
                      Rawamangun, Pulo Gadung, Jakarta Timur 13220
                    </p>
                  </div>
                </div>
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-sm bg-[var(--color-unj-teal)] px-4 py-2 text-xs font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-teal-deep)] sm:text-sm"
                  href={siteConfig.contact.mapUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Buka Peta Kampus</span>
                  <ExternalLink aria-hidden="true" className="size-3.5" strokeWidth={2} />
                </a>
              </div>
            </div>
          ),
        },
        {
          heading: "Kontak Resmi dan Jam Pelayanan",
          body: "Silakan hubungi staf layanan kami melalui kanal telepon, surat elektronik resmi, atau berkunjung langsung selama jam operasional.",
          content: (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
                <div className="flex size-8 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
                  <Phone aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[var(--color-ink)]">Telepon Kantor</h3>
                <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                  <a className="hover:text-[var(--color-unj-teal)]" href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}>
                    {siteConfig.contact.phone}
                  </a>
                </p>
              </div>

              <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
                <div className="flex size-8 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
                  <Mail aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[var(--color-ink)]">Email Resmi</h3>
                <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                  <a className="hover:text-[var(--color-unj-teal)]" href={`mailto:${siteConfig.contact.email}`}>
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-4">
                <div className="flex size-8 items-center justify-center rounded-sm bg-[var(--color-teal-soft)] text-[var(--color-unj-teal)]">
                  <Clock aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 text-sm font-bold text-[var(--color-ink)]">Jam Kerja</h3>
                <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                  Senin - Jumat: 08.00 - 16.00 WIB
                </p>
              </div>
            </div>
          ),
        },
      ]}
      summary="Pusat layanan informasi terpadu dan kontak resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta."
      title="Hubungi FEB UNJ"
    >
      {/* Interactive Contact Form Section */}
      <section aria-labelledby="form-heading" className="mt-10 border-t border-[var(--color-border)] pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl" id="form-heading">
          Kirimkan Pertanyaan atau Pesan
        </h2>
        <p className="mt-2 text-base text-[var(--color-muted-ink)]">
          Gunakan formulir interaktif di bawah ini untuk menyampaikan pertanyaan seputar penerimaan mahasiswa, kurikulum, legalisir, kemitraan, atau informasi publik.
        </p>

        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </LandingPageTemplate>
  )
}
