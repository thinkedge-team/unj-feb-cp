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
      className="border-b border-orange-300 bg-gradient-to-r from-[#F97316] via-[#FE8C43] to-[#F97316] py-16 md:py-20 text-white shadow-xl shadow-orange-500/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/30 pb-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="inline-block rounded-md bg-white/25 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-orange-950 backdrop-blur-xs">
              Kapasitas &amp; Akuntabilitas
            </span>
            <h2
              id="faculty-statistics-heading"
              className="mt-2 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Capaian Mutu Berkelanjutan
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-white/95 sm:text-sm font-medium">
            Angka-angka kinerja akademik mencerminkan dedikasi kolektif dalam menjaga integritas,
            relevansi pembelajaran, dan daya saing global lulusan FEB UNJ.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {facultyStats.map((item, idx) => (
            <div
              key={item.label}
              className="group flex flex-col justify-between border-t border-white/25 pt-5 transition-transform duration-300 hover:-translate-y-1 sm:border-t-0 sm:border-l sm:pl-6"
            >
              <div>
                <span className="font-mono text-xs font-bold text-white/80 transition-colors group-hover:text-white">
                  0{idx + 1}
                </span>
                <p className="mt-2 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl tabular-nums drop-shadow-xs">
                  {item.value}
                </p>
                <h3 className="mt-2 text-sm font-bold text-white">
                  {item.label}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


