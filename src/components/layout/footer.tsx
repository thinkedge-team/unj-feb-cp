import Image from "next/image"
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react"

import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <section aria-labelledby="footer-identity" className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-slate-700 bg-slate-800/80 p-2">
              <Image alt="Logo FEB UNJ" className="h-10 w-auto object-contain" height={44} src={siteConfig.logos.feb} width={44} />
            </div>
            <div>
              <h2 className="font-sans text-base font-bold text-white tracking-tight" id="footer-identity">
                {siteConfig.shortName}
              </h2>
              <p className="text-xs text-teal-400 font-medium">Universitas Negeri Jakarta</p>
            </div>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-slate-400 sm:text-sm">
            {siteConfig.contact.address}
          </p>
          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            {siteConfig.contact.city} {siteConfig.contact.postalCode}
          </p>

          <p className="flex flex-wrap items-center gap-x-3 text-xs text-slate-300 sm:text-sm">
            <a className="inline-flex min-h-11 items-center hover:text-white transition-colors" href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}>
              {siteConfig.contact.phone}
            </a>
            <span aria-hidden="true" className="text-slate-600"> · </span>
            <a className="inline-flex min-h-11 items-center hover:text-white transition-colors" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </p>

          <div>
            <a
              className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
              href={siteConfig.contact.mapUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MapPin aria-hidden="true" className="size-4" />
              <span>Peta Kampus</span>
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </section>

        <section aria-labelledby="footer-links" className="space-y-4">
          <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400" id="footer-links">
            Akses Cepat
          </h2>
          <ul className="grid gap-1">
            {siteConfig.quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="inline-flex min-h-11 items-center text-xs font-medium text-slate-300 transition-colors hover:text-white sm:text-sm"
                  href={link.href}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="footer-accreditation" className="space-y-4">
          <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400" id="footer-accreditation">
            {siteConfig.accreditation.title}
          </h2>

          <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-4">
            <div className="flex items-start gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded bg-[#006569] text-white">
                <ShieldCheck className="size-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{siteConfig.accreditation.badge}</p>
                <p className="mt-0.5 text-xs text-slate-400">{siteConfig.accreditation.agency}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Media Sosial Resmi
            </p>
            <div className="flex flex-wrap gap-2">
              {siteConfig.socials.map((social) => (
                <a
                  aria-label={social.label}
                  className="inline-flex min-h-11 items-center rounded-md border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                  href={social.href}
                  key={social.platform}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-slate-800 bg-[#0A0F1D]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Identitas resmi FEB UNJ.</p>
          <p className="text-xs text-slate-500">Mencerdaskan &amp; Memartabatkan Bangsa</p>
        </div>
      </div>
    </footer>
  )
}


