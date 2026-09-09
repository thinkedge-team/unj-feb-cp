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
      className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-xs"
      onBlur={closeWhenFocusLeaves}
      onKeyDown={closeOnEscape}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="FEB UNJ - Beranda"
          className="group flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006569] rounded-lg"
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
            <span className="font-sans text-base font-extrabold tracking-tight text-slate-900 group-hover:text-[#006569] transition-colors leading-tight">
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
                className={`group inline-flex min-h-11 items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold tracking-tight transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006569] ${
                  groupIsOpen
                    ? "bg-teal-50/90 text-[#006569] shadow-2xs"
                    : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900"
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
                      ? "rotate-180 text-[#006569]"
                      : "text-slate-400 group-hover:text-slate-600"
                  }`}
                  strokeWidth={2}
                />
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            className="hidden sm:inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-[#006569] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all duration-150 hover:bg-[#004e51] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006569]"
            href="/program-studi"
          >
            <span>Pendaftaran</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-80" />
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

