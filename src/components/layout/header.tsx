"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { FocusEvent, KeyboardEvent } from "react"

import { MegaMenu } from "@/components/layout/mega-menu"
import { MobileNavigation } from "@/components/layout/mobile-navigation"
import { SearchDialog } from "@/features/search/search-dialog"
import { navigationGroups } from "@/config/navigation"
import { siteConfig } from "@/config/site"

const menuId = (title: string) => `mega-menu-${title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "dan")}`

export function Header() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const activeTriggerRef = useRef<HTMLButtonElement>(null)
  const activeGroup = navigationGroups.find((group) => group.title === activeTitle) ?? null

  const closeMenu = (restoreFocus: boolean) => {
    setActiveTitle(null)
    if (restoreFocus) activeTriggerRef.current?.focus()
  }

  const closeWhenFocusLeaves = (event: FocusEvent<HTMLElement>) => {
    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget as Node)) {
      setActiveTitle(null)
    }
  }

  const closeOnEscape = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape" && activeGroup) {
      event.preventDefault()
      closeMenu(true)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header
      className="sticky top-0 z-40 border-b border-[#F6E2D0] bg-white shadow-xs"
      onBlur={closeWhenFocusLeaves}
      onKeyDown={closeOnEscape}
      role="banner"
    >
      {/* Official FEB UNJ Top Announcement Ribbon */}
      <div className="bg-gradient-to-r from-[#EA580C] via-[#FE8C43] to-[#F97316] text-white px-4 py-1.5 text-[11px] font-semibold tracking-tight shadow-2xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="rounded bg-white/25 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-white">
              Warta Resmi
            </span>
            <span className="truncate">
              Portal Resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta &bull; Akreditasi Unggul BAN-PT &amp; FIBAA Internasional
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-3 shrink-0 text-white/90 text-[11px]">
            <span>Gedung M Kampus A Rawamangun</span>
            <span className="text-white/50">&bull;</span>
            <a href="tel:+62214721340" className="hover:underline hover:text-white">Telp: (021) 4721340</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="FEB UNJ - Beranda"
          className="group flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE8C43] rounded-lg"
          href="/"
        >
          <div className="flex items-center justify-center p-0.5">
            <Image
              alt="Logo Fakultas Ekonomi dan Bisnis UNJ"
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              height={40}
              priority
              src={siteConfig.logos.feb}
              width={40}
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-sans text-base font-extrabold tracking-tight text-slate-900 group-hover:text-[#FE8C43] transition-colors leading-tight">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:block leading-none">
              Fakultas Ekonomi dan Bisnis
            </span>
          </div>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center justify-center gap-1.5 lg:flex">
          {navigationGroups.map((group) => {
            const groupIsOpen = activeTitle === group.title
            return (
              <button
                aria-controls={menuId(group.title)}
                aria-expanded={groupIsOpen}
                aria-haspopup="true"
                className={`group inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE8C43] ${
                  groupIsOpen
                    ? "bg-orange-100/90 text-[#EA580C] shadow-2xs border-b-2 border-[#FE8C43]"
                    : "text-slate-700 hover:bg-orange-50/80 hover:text-[#EA580C]"
                }`}
                key={group.href}
                onClick={(event) => {
                  activeTriggerRef.current = event.currentTarget
                  setActiveTitle(groupIsOpen ? null : group.title)
                }}
                type="button"
              >
                <span>{group.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-3.5 transition-transform duration-200 ${
                    groupIsOpen
                      ? "rotate-180 text-[#FE8C43]"
                      : "text-slate-400 group-hover:text-[#FE8C43]"
                  }`}
                  strokeWidth={2}
                />
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            className="hidden sm:inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#F97316] to-[#FE8C43] px-5 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-150 hover:from-[#EA580C] hover:to-[#F97316] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE8C43] active:scale-[0.98]"
            href="/program-studi"
          >
            <span>Pendaftaran</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-90" />
          </Link>

          <MobileNavigation
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onOpen={() => setMobileMenuOpen(true)}
          />
        </div>
      </div>

      {activeGroup ? (
        <MegaMenu
          activeGroup={activeGroup}
          isOpen={true}
          onClose={() => closeMenu(false)}
        />
      ) : null}

      {isSearchOpen ? (
        <SearchDialog
          isOpen={true}
          onClose={() => setIsSearchOpen(false)}
        />
      ) : null}
    </header>
  )
}

