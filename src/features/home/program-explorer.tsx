"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

import { StudyProgramCard } from "@/components/cards/study-program-card"
import { studyPrograms } from "@/data/study-programs"
import type { DegreeLevel, StudyProgram } from "@/types/content"

type TabDegree = "Semua" | DegreeLevel

const degreeTabs: readonly TabDegree[] = [
  "Semua",
  "Doktor",
  "Magister",
  "Sarjana",
  "Sarjana Terapan",
  "Diploma",
]

export function ProgramExplorer() {
  const [activeTab, setActiveTab] = useState<TabDegree>("Semua")

  const filteredPrograms: readonly StudyProgram[] =
    activeTab === "Semua"
      ? studyPrograms.slice(0, 6)
      : studyPrograms.filter((p) => p.degree === activeTab)

  return (
    <section
      aria-labelledby="program-explorer-heading"
      className="border-b border-[#F0E4D8] bg-[#FFF9F2] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-orange-100 pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
              Pilihan Pendidikan Tinggi
            </span>
            <h2
              id="program-explorer-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Eksplorasi Program Studi
            </h2>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
              Kurikulum terstruktur berbasis luaran (OBE) yang memadukan keunggulan akademik, riset terapan,
              dan kesiapan berkarier di era ekonomi digital.
            </p>
          </div>

          <a
            className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            href="/program-studi"
          >
            <span>Lihat Semua 21 Program Studi</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Kategori Jenjang Program Studi">
          <div className="inline-flex flex-wrap gap-1 rounded-lg border border-orange-200/80 bg-white p-1 shadow-sm">
            {degreeTabs.map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  aria-selected={isActive}
                  className={`min-h-9 rounded-md px-4 py-1.5 text-xs font-semibold tracking-tight transition-all duration-150 active:scale-[0.98] ${
                    isActive
                      ? "bg-[#C2410C] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  type="button"
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        <div key={activeTab} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          {filteredPrograms.map((program) => (
            <StudyProgramCard key={program.slug} program={program} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-orange-200/80 bg-white px-6 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-orange-50/50 hover:text-slate-900"
            href="/program-studi"
          >
            <span>Lihat Semua 21 Program Studi &amp; Jalur Masuk</span>
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}


