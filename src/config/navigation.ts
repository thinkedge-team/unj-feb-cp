export type NavigationItem = {
  readonly title: string
  readonly href: string
  readonly description?: string
}

export type NavigationGroup = {
  readonly title: string
  readonly href: string
  readonly items: readonly NavigationItem[]
}

export const navigationGroups: readonly NavigationGroup[] = [
  {
    title: "Profil & SDM",
    href: "/profil",
    items: [
      { title: "Tentang FEB", href: "/profil/tentang-feb", description: "Profil umum dan identitas fakultas" },
      { title: "Sejarah", href: "/profil/sejarah", description: "Rekam jejak dan tonggak sejarah" },
      { title: "Visi Misi", href: "/profil/visi-misi", description: "Visi, misi, dan tujuan strategis" },
      { title: "Struktur Organisasi", href: "/profil/struktur-organisasi", description: "Bagan tata kelola fakultas" },
      { title: "Pimpinan", href: "/profil/pimpinan", description: "Dekanat dan ketua departemen" },
      { title: "Prestasi", href: "/profil/prestasi", description: "Capaian sivitas akademika" },
      { title: "Fasilitas", href: "/profil/fasilitas", description: "Laboratorium dan sarana kampus" },
      { title: "Direktori Dosen", href: "/sdm/dosen", description: "Daftar dosen dan kepakaran riset" },
      { title: "Tenaga Kependidikan", href: "/sdm/tendik", description: "Staf layanan administrasi" },
      { title: "Dosen Praktisi", href: "/sdm/dosen-praktisi", description: "Pengajar praktisi industri" },
      { title: "Senat Fakultas", href: "/sdm/senat", description: "Lembaga normatif perwakilan dosen" },
      { title: "Dosen Purnabakti", href: "/sdm/dosen-purnabakti", description: "Guru besar & dosen purnatugas" },
    ],
  },
  {
    title: "Program & Akademik",
    href: "/program-studi",
    items: [
      { title: "Semua Program", href: "/program-studi", description: "Daftar 21 program studi FEB" },
      { title: "Program Doktor (S3)", href: "/program-studi/doktor", description: "Manajemen, Akuntansi, Pendidikan" },
      { title: "Program Magister (S2)", href: "/program-studi/magister", description: "Magister reguler & terapan" },
      { title: "Program Sarjana (S1)", href: "/program-studi/sarjana", description: "Manajemen, Akuntansi, Bisnis Digital" },
      { title: "Program Sarjana Terapan (D4)", href: "/program-studi/sarjana-terapan", description: "Vokasi & manajemen pelabuhan" },
      { title: "Informasi Akademik", href: "/akademik/informasi", description: "Regulasi dan pedoman perkuliahan" },
      { title: "Kalender Akademik", href: "/akademik/kalender", description: "Jadwal semester ganjil & genap" },
      { title: "Kurikulum", href: "/akademik/kurikulum", description: "Struktur kurikulum berbasis OBE" },
      { title: "Dokumen Akademik", href: "/akademik/dokumen", description: "Format tugas akhir dan skripsi" },
    ],
  },
  {
    title: "Riset & Kemitraan",
    href: "/riset",
    items: [
      { title: "Penelitian", href: "/riset/penelitian", description: "Pusat studi & hibah riset" },
      { title: "Publikasi", href: "/riset/publikasi", description: "Jurnal terindeks SINTA & Scopus" },
      { title: "Pengabdian Masyarakat", href: "/riset/pengabdian", description: "Pemberdayaan ekonomi masyarakat" },
      { title: "Mitra Dalam Negeri", href: "/kerjasama/dalam-negeri", description: "BUMN, kementerian, & perbankan" },
      { title: "Mitra Internasional", href: "/kerjasama/internasional", description: "Universitas mitra luar negeri" },
      { title: "Dokumen Kerjasama", href: "/kerjasama/dokumen", description: "Pedoman MoU & MoA kemitraan" },
      { title: "Mobilitas Mahasiswa", href: "/internasional/mobilitas", description: "Exchange & credit transfer" },
      { title: "Program Internasional", href: "/internasional/program", description: "Kelas internasional & dual degree" },
      { title: "Mitra Global", href: "/internasional/mitra", description: "Jejaring universitas internasional" },
    ],
  },
  {
    title: "Mahasiswa & Layanan",
    href: "/kemahasiswaan",
    items: [
      { title: "Beasiswa", href: "/kemahasiswaan/beasiswa", description: "Informasi beasiswa mahasiswa" },
      { title: "Organisasi Mahasiswa", href: "/kemahasiswaan/organisasi", description: "BEM, BPM, dan himpunan prodi" },
      { title: "Prestasi Mahasiswa", href: "/kemahasiswaan/prestasi", description: "Juara kompetisi nasional & global" },
      { title: "Karya Mahasiswa", href: "/kemahasiswaan/karya", description: "Inovasi bisnis & publikasi muda" },
      { title: "Berita", href: "/informasi/berita", description: "Warta dan liputan kegiatan terkini" },
      { title: "Pengumuman", href: "/informasi/pengumuman", description: "Pemberitahuan resmi kampus" },
      { title: "Event", href: "/informasi/event", description: "Seminar, lokakarya, & agenda ilmiah" },
      { title: "Artikel", href: "/informasi/artikel", description: "Tulisan dan opini keilmuan dosen" },
      { title: "Dokumen Publik", href: "/dokumen/publik", description: "Laporan kinerja & informasi publik" },
      { title: "Unduhan", href: "/dokumen/unduhan", description: "Formulir dan berkas administratif" },
      { title: "PPID", href: "/layanan/ppid", description: "Layanan permohonan informasi" },
      { title: "Zona Integritas", href: "/layanan/zona-integritas", description: "Reformasi birokrasi WBK & WBBM" },
      { title: "Layanan Fakultas", href: "/layanan/fakultas", description: "Helpdesk dan loket terpadu" },
      { title: "Hubungi FEB UNJ", href: "/kontak", description: "Alamat, telepon, dan surel resmi" },
    ],
  },
] as const
