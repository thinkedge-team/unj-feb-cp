import { Award, Briefcase, Users } from "lucide-react"

import { ProfileCard } from "@/components/cards/profile-card"
import { ListingPageTemplate } from "@/components/templates/listing-page-template"
import {
  mockEmeritusLecturers,
  mockPractitioners,
} from "@/data/sdm-categories"
import type { Lecturer } from "@/types/content"

export function PractitionersView() {
  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "SDM", href: "/sdm/dosen" },
    { label: "Dosen Praktisi" },
  ] as const

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel="Dosen Praktisi Industri"
      description="Program Dosen Praktisi FEB UNJ menghadirkan para eksekutif, profesional terkemuka, dan pakar industri untuk mentransfer pengalaman langsung dan studi kasus mutakhir ke dalam ruang kuliah."
      title="Dosen Praktisi & Pakar Industri"
      totalItemsCount={mockPractitioners.length}
    >
      <div className="mb-8 rounded-sm border-l-4 border-[var(--color-feb-copper)] bg-[var(--color-white)] p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[var(--color-ink)]">
          <Briefcase
            aria-hidden="true"
            className="size-5 text-[var(--color-feb-copper)]"
          />
          Sinergi Pendidikan &amp; Dunia Usaha Dunia Industri (DUDI)
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
          Melalui program Merdeka Belajar Kampus Merdeka (MBKM) dan kemitraan strategis,
          FEB UNJ secara aktif mengintegrasikan kurikulum berbasis industri dengan
          pengajar tamu berpengalaman lebih dari 10 tahun di korporasi multinasional,
          startup unicorn, dan regulator keuangan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockPractitioners.map((practitioner) => (
          <ProfileCard
            href={null}
            key={practitioner.slug}
            profile={practitioner}
          />
        ))}
      </div>
    </ListingPageTemplate>
  )
}

export function SenatView({
  senatProfessors,
}: Readonly<{ senatProfessors: readonly Lecturer[] }>) {
  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "SDM", href: "/sdm/dosen" },
    { label: "Senat Fakultas" },
  ] as const

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel="Anggota Senat Fakultas"
      description="Senat Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta bertugas merumuskan kebijakan normatif, pedoman akademik, pertimbangan kenaikan jabatan akademik, serta pengawasan mutu pendidikan dan etika akademik."
      title="Senat Fakultas Ekonomi dan Bisnis"
      totalItemsCount={senatProfessors.length + 2}
    >
      <div className="space-y-8">
        <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-white)] p-6 sm:p-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-[var(--color-ink)]">
            <Users
              aria-hidden="true"
              className="size-6 text-[var(--color-unj-teal)]"
            />
            Pimpinan &amp; Struktur Senat FEB UNJ
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted-ink)]">
            Struktur kepengurusan Senat Fakultas periode aktif:
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm border-t-4 border-[var(--color-unj-teal)] bg-[var(--color-teal-soft)] p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-unj-teal)]">
                Ketua Senat Fakultas
              </span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">
                Prof. Dr. Siti Aisyah, M.Pd.
              </h3>
              <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                Guru Besar Bidang Kebijakan Pendidikan &bull; Fakultas Ekonomi dan Bisnis UNJ
              </p>
            </div>

            <div className="rounded-sm border-t-4 border-[var(--color-feb-copper)] bg-[var(--color-teal-soft)] p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-feb-copper)]">
                Sekretaris Senat Fakultas
              </span>
              <h3 className="mt-2 text-lg font-bold text-[var(--color-ink)]">
                Prof. Dr. Indrajaya Wijaya, S.E., Ak.
              </h3>
              <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                Guru Besar Bidang Akuntansi &bull; Fakultas Ekonomi dan Bisnis UNJ
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--color-border)] pt-6">
            <h3 className="text-lg font-bold text-[var(--color-ink)]">
              Komisi-Komisi Senat Fakultas:
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-sm border border-[var(--color-border)] p-4">
                <h4 className="font-bold text-[var(--color-unj-teal)]">
                  Komisi I: Akademik &amp; Kurikulum
                </h4>
                <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                  Standar mutu pembelajaran, akreditasi, dan kurikulum prodi.
                </p>
              </div>
              <div className="rounded-sm border border-[var(--color-border)] p-4">
                <h4 className="font-bold text-[var(--color-unj-teal)]">
                  Komisi II: Riset, Pengabdian &amp; Kerja Sama
                </h4>
                <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                  Arah kebijakan penelitian, publikasi, dan kemitraan strategis.
                </p>
              </div>
              <div className="rounded-sm border border-[var(--color-border)] p-4">
                <h4 className="font-bold text-[var(--color-unj-teal)]">
                  Komisi III: Etika &amp; Integritas Akademik
                </h4>
                <p className="mt-1 text-xs text-[var(--color-muted-ink)]">
                  Penegakan kode etik dosen, integritas riset, dan disiplin akademik.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold text-[var(--color-ink)]">
            Anggota Senat (Guru Besar &amp; Perwakilan Akademik)
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {senatProfessors.map((professor) => (
              <ProfileCard
                href={`/sdm/dosen/${professor.slug}`}
                key={professor.slug}
                profile={professor}
              />
            ))}
          </div>
        </div>
      </div>
    </ListingPageTemplate>
  )
}

export function EmeritusView() {
  const breadcrumbs = [
    { label: "Beranda", href: "/" },
    { label: "SDM", href: "/sdm/dosen" },
    { label: "Dosen Purnabakti" },
  ] as const

  return (
    <ListingPageTemplate
      breadcrumbs={breadcrumbs}
      countLabel="Dosen Purnabakti"
      description="Penghargaan setinggi-tingginya kepada para pendidik, perintis, dan guru besar purnabakti yang telah mendedikasikan ilmu dan keteladanan bagi kemajuan Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta."
      title="Dosen & Guru Besar Purnabakti"
      totalItemsCount={mockEmeritusLecturers.length}
    >
      <div className="mb-8 rounded-sm border-l-4 border-[var(--color-unj-teal)] bg-[var(--color-white)] p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-xl font-bold text-[var(--color-ink)]">
          <Award
            aria-hidden="true"
            className="size-5 text-[var(--color-unj-teal)]"
          />
          Jejak Pengabdian &amp; Teladan Akademik
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-ink)]">
          Sivitas akademika FEB UNJ senantiasa mengenang dan menjunjung tinggi sumbangsih
          bersejarah para dosen purnabakti yang telah meletakkan fondasi kurikulum, etika
          keilmuan, dan tradisi riset unggul bagi generasi penerus.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockEmeritusLecturers.map((emeritus) => (
          <ProfileCard
            href={null}
            key={emeritus.slug}
            profile={emeritus}
          />
        ))}
      </div>
    </ListingPageTemplate>
  )
}
