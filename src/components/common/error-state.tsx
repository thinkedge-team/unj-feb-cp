import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export type ErrorStateProps = Readonly<{ readonly title?: string; readonly description: string; readonly onRetry: () => void }>
export function ErrorState({ title = "Informasi belum dapat dimuat", description, onRetry }: ErrorStateProps) { return <section aria-live="assertive" className="border border-[var(--color-feb-copper)] bg-[var(--color-white)] px-6 py-10 text-center" role="alert"><AlertTriangle aria-hidden="true" className="mx-auto size-9 text-[var(--color-feb-copper)]" strokeWidth={1.5} /><h2 className="mt-5 text-2xl">{title}</h2><p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-muted-ink)]">{description}</p><Button className="mt-6" onClick={onRetry} variant="copper">Coba Lagi</Button></section> }
