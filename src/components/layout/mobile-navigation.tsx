"use client"

import { useEffect, useRef } from "react"
import type { KeyboardEvent as ReactKeyboardEvent } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

import { navigationGroups } from "@/config/navigation"

export type MobileNavigationProps = Readonly<{
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly onOpen?: () => void
}>

const focusableSelector =
  'button:not([disabled]), a[href], summary, [tabindex]:not([tabindex="-1"])'

export function MobileNavigation({ isOpen, onClose, onOpen }: MobileNavigationProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) triggerRef.current?.focus()
  }, [isOpen])

  const trapFocus = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== "Tab") return

    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(focusableSelector)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (!firstElement || !lastElement) return

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return (
    <div className="lg:hidden">
      {onOpen ? (
        <button
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Buka menu"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)]"
          onClick={onOpen}
          ref={triggerRef}
          type="button"
        >
          <Menu aria-hidden="true" size={22} strokeWidth={1.8} />
        </button>
      ) : null}
      {isOpen ? (
        <div className="fixed inset-0 z-50 overflow-hidden bg-[var(--color-ink)]/50 backdrop-blur-xs animate-fade-in" onClick={onClose}>
          <aside
            aria-label="Menu navigasi mobile"
            aria-modal="true"
            className="ml-auto flex h-full max-h-full w-full max-w-sm flex-col bg-[var(--color-limestone)] p-4 shadow-2xl animate-slide-in-right"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={trapFocus}
            role="dialog"
          >
            <div className="flex shrink-0 items-center justify-between border-b border-[var(--color-border)] pb-3">
              <p className="font-semibold text-[var(--color-unj-teal)]">FEB UNJ</p>
              <button
                aria-label="Tutup menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-[var(--color-unj-teal)] hover:bg-[var(--color-teal-soft)] transition-colors active:scale-95"
                onClick={onClose}
                ref={closeButtonRef}
                type="button"
              >
                <X aria-hidden="true" size={22} strokeWidth={1.8} />
              </button>
            </div>
            <nav aria-label="Navigasi mobile" className="mt-3 flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1">
              {navigationGroups.map((group) => (
                <details className="group/details border-b border-[var(--color-border)]" key={group.href}>
                  <summary className="flex min-h-11 cursor-pointer items-center justify-between px-2 py-2 font-semibold text-[var(--color-ink)] hover:text-[var(--color-unj-teal)] transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span>{group.title}</span>
                    <ChevronDown aria-hidden="true" className="size-4 text-slate-400 transition-transform duration-200 group-open/details:rotate-180 group-open/details:text-[var(--color-unj-teal)]" />
                  </summary>
                  <ul className="pb-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          className="flex min-h-11 items-center px-4 py-2 text-sm text-[var(--color-muted-ink)] hover:bg-[var(--color-teal-soft)] hover:text-[var(--color-teal-deep)] rounded-sm transition-colors"
                          href={item.href}
                          onClick={onClose}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </div>
  )
}
