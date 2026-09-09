import { SearchX } from "lucide-react"
import { Button } from "@/components/ui/button"

export type EmptyStateProps = Readonly<{ readonly title: string; readonly description: string; readonly actionLabel?: string; readonly onAction?: () => void }>
export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) { return <section className="border border-[var(--color-border)] bg-[var(--color-white)] px-6 py-12 text-center"><SearchX aria-hidden="true" className="mx-auto size-9 text-[var(--color-feb-copper)]" strokeWidth={1.5} /><h2 className="mt-5 text-2xl">{title}</h2><p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted-ink)]">{description}</p>{actionLabel && onAction ? <Button className="mt-6" onClick={onAction} variant="secondary">{actionLabel}</Button> : null}</section> }
