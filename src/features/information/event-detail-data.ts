export type EventSpeaker = Readonly<{
  name: string
  title: string
  institution: string
  topic: string
}>

export type EventScheduleItem = Readonly<{
  time: string
  session: string
  pic: string
}>

export const defaultEventSpeakers: readonly EventSpeaker[] = [
  {
    name: "Prof. Dr. Aditya Pratama, S.E., M.A.",
    title: "Guru Besar & Peneliti Senior Ekonomi",
    institution: "Pusat Studi Kebijakan Ekonomi Nasional",
    topic: "Transformasi Struktur Ekonomi Berkelanjutan",
  },
  {
    name: "Dr. Sri Indah Lestari, S.E., M.M.",
    title: "Pakar Tata Kelola & Akuntansi Forensik",
    institution: "Fakultas Ekonomi dan Bisnis UNJ",
    topic: "Integritas & Akuntabilitas Publik",
  },
  {
    name: "Budi Kurniawan, M.Sc.",
    title: "Head of Digital Ecosystem & Strategy",
    institution: "Fintech & Banking Alliance",
    topic: "Inovasi Layanan Finansial Inklusif",
  },
]

export const defaultEventSchedule: readonly EventScheduleItem[] = [
  { time: "08:00 - 08:30", session: "Registrasi Peserta & Morning Coffee", pic: "Panitia Pelaksana" },
  { time: "08:30 - 09:00", session: "Pembukaan Resmi & Sambutan Dekan FEB UNJ", pic: "Dekanat FEB UNJ" },
  { time: "09:00 - 11:30", session: "Sesi Pleno Keynote Speech & Diskusi Panel", pic: "Narasumber & Moderator" },
  { time: "11:30 - 13:00", session: "Ishoma & Networking Session", pic: "Sivitas Akademika" },
  { time: "13:00 - 15:30", session: "Workshop Paralel & Q&A Interaktif", pic: "Fasilitator Ahli" },
  { time: "15:30 - 16:00", session: "Kesimpulan, Pembagian E-Sertifikat, & Penutupan", pic: "Panitia Pelaksana" },
]
