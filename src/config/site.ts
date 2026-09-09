export type SiteLogos = {
  readonly feb: string
  readonly unj: string
}

export type SiteContact = {
  readonly address: string
  readonly city: string
  readonly postalCode: string
  readonly phone: string
  readonly email: string
  readonly mapUrl: string
}

export type SocialLink = {
  readonly platform: string
  readonly label: string
  readonly href: string
}

export type AccreditationInfo = {
  readonly title: string
  readonly badge: string
  readonly agency: string
}

export type SiteConfig = {
  readonly name: string
  readonly shortName: string
  readonly description: string
  readonly url: string
  readonly logos: SiteLogos
  readonly contact: SiteContact
  readonly socials: readonly SocialLink[]
  readonly accreditation: AccreditationInfo
  readonly quickLinks: readonly { readonly title: string; readonly href: string }[]
}

export const siteConfig: SiteConfig = {
  name: "Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta",
  shortName: "FEB UNJ",
  description:
    "Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta berkomitmen mencetak pemimpin dan profesional berdaya saing global, berkarakter, dan berjiwa wirausaha.",
  url: "https://feb.unj.ac.id",
  logos: {
    feb: "https://feb.unj.ac.id/feb/assets/filegambar/logo/febunj2.png",
    unj: "https://feb.unj.ac.id/feb/assets/filegambar/logo/unjlogo.png",
  },
  contact: {
    address:
      "Gedung M Kampus A UNJ, Jl. Rawamangun Muka, RT.11/RW.14, Rawamangun, Pulo Gadung",
    city: "Jakarta Timur, DKI Jakarta",
    postalCode: "13220",
    phone: "+62 21 4721340",
    email: "feb@unj.ac.id",
    mapUrl: "https://maps.google.com/?q=FEB+UNJ+Rawamangun",
  },
  socials: [
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://instagram.com/febunj_official",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://youtube.com/@febunjofficial",
    },
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://facebook.com/febunjofficial",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/school/feb-unj",
    },
  ],
  accreditation: {
    title: "Akreditasi Institusi",
    badge: "Akreditasi Unggul BAN-PT",
    agency: "BAN-PT & Akreditasi Internasional",
  },
  quickLinks: [
    { title: "Program Studi", href: "/program-studi" },
    { title: "Profil Fakultas", href: "/profil/tentang-feb" },
    { title: "Layanan Akademik", href: "/akademik/informasi" },
    { title: "Informasi & Berita", href: "/informasi/berita" },
    { title: "PPID & Layanan", href: "/layanan/ppid" },
    { title: "Kontak", href: "/kontak" },
  ],
} as const
