interface StatItem {
  readonly value: string
  readonly label: string
  readonly description: string
}

const facultyStats: readonly StatItem[] = [
  {
    value: "21",
    label: "Program Studi",
    description: "Jenjang Sarjana, Sarjana Terapan, Magister, hingga Doktor yang adaptif kurikulum industri.",
  },
  {
    value: "120+",
    label: "Dosen & Peneliti",
    description: "Para Guru Besar dan akademisi bergelar Doktor lulusan perguruan tinggi terkemuka dunia.",
  },
  {
    value: "95%",
    label: "Akreditasi Unggul/A",
    description: "Mayoritas program studi telah memenuhi standar mutu tertinggi BAN-PT dan LAMEMBA.",
  },
  {
    value: "5.000+",
    label: "Mahasiswa Aktif",
    description: "Komunitas pembelajar dinamis dari berbagai penjuru tanah air serta mahasiswa internasional.",
  },
  {
    value: "40+",
    label: "Mitra Internasional",
    description: "Jejaring universitas mitra global, Bank Indonesia, OJK, BUMN, dan firma konsultan Big Four.",
  },
]

export function FacultyStatistics() {
  return (
    <section
      aria-labelledby="faculty-statistics-heading"
      className="border-b border-slate-200 bg-[#006569] py-16 md:py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/20 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
              Kapasitas &amp; Akuntabilitas
            </span>
            <h2
              id="faculty-statistics-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Capaian Mutu Berkelanjutan
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-teal-100/90 sm:text-sm">
            Angka-angka kinerja akademik mencerminkan dedikasi kolektif dalam menjaga integritas,
            relevansi pembelajaran, dan daya saing global lulusan FEB UNJ.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {facultyStats.map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col justify-between border-t border-white/20 pt-5 sm:border-t-0 sm:border-l sm:pl-6"
            >
              <div>
                <span className="font-mono text-xs text-teal-200">
                  0{idx + 1}
                </span>
                <p className="mt-2 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl tabular-nums">
                  {item.value}
                </p>
                <h3 className="mt-2 text-sm font-bold text-teal-100">
                  {item.label}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-teal-100/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


