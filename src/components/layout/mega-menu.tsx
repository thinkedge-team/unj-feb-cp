"use client"

import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { useEffect } from "react"

import type { NavigationGroup } from "@/config/navigation"

export type MegaMenuProps = Readonly<{
  readonly activeGroup: NavigationGroup
  readonly isOpen: boolean
  readonly onClose: () => void
}>

export function MegaMenu({ activeGroup, isOpen, onClose }: MegaMenuProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [onClose])

  if (!isOpen) return null

  const id = `mega-menu-${activeGroup.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "dan")}`

  return (
    <div
      aria-label={`${activeGroup.title} submenu`}
      className="animate-fade-in absolute left-0 right-0 top-full z-30 border-b border-[#F0E4D8] bg-white shadow-xl"
      id={id}
      role="region"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className="border-b border-orange-100 pb-4 lg:border-b-0 lg:border-r lg:pr-6 lg:pb-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FE8C43]">
              Navigasi
            </span>
            <h2 className="mt-1 font-sans text-xl font-bold tracking-tight text-slate-900">
              {activeGroup.title}
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Akses cepat direktori dan portal resmi Fakultas Ekonomi dan Bisnis UNJ.
            </p>
            <div className="mt-4">
              <Link
                className="inline-flex min-h-9 items-center gap-1.5 text-xs font-bold text-[#EA580C] hover:text-[#F97316] transition-colors"
                href={activeGroup.href}
                onClick={onClose}
              >
                <span>Lihat semua {activeGroup.title}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {activeGroup.items.map((item) => (
                <li key={item.href}>
                  <Link
                    aria-label={item.title}
                    className="group flex min-h-11 flex-col justify-center rounded-lg border border-transparent p-2.5 transition-colors hover:border-orange-200 hover:bg-orange-50/60"
                    href={item.href}
                    onClick={onClose}
                  >
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 group-hover:text-[#EA580C]">
                      <ChevronRight className="size-3 text-slate-400 group-hover:text-[#FE8C43] transition-transform group-hover:translate-x-0.5" />
                      {item.title}
                    </span>
                    {item.description ? (
                      <span aria-hidden="true" className="mt-0.5 pl-4.5 text-[11px] text-slate-500 line-clamp-1">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
