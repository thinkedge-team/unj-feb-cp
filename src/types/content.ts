export type DegreeLevel =
  | "Doktor"
  | "Magister"
  | "Sarjana"
  | "Sarjana Terapan"
  | "Diploma";

export type StudyProgram = {
  readonly slug: string;
  readonly name: string;
  readonly degree: DegreeLevel;
  readonly accreditation: string;
  readonly vision: string;
  readonly mission: readonly string[];
  readonly careerProspects: readonly string[];
  readonly curriculum: readonly (readonly string[])[];
  readonly head: string;
  readonly contact: string;
};

export type LecturerLinks = {
  readonly sinta: string;
  readonly scopus: string;
  readonly googleScholar: string;
};

export type Lecturer = {
  readonly slug: string;
  readonly name: string;
  readonly nidn: string;
  readonly title: string;
  readonly role: string;
  readonly homebase: string;
  readonly expertise: readonly string[];
  readonly education: readonly string[];
  readonly links: LecturerLinks;
  readonly photo: string;
};

export type StaffMember = {
  readonly slug: string;
  readonly name: string;
  readonly role: string;
  readonly unit: string;
  readonly email: string;
  readonly phone: string;
  readonly bio: string;
  readonly photo?: string;
};

export type NewsCategory =
  | "Akademik"
  | "Prestasi"
  | "Riset"
  | "Kerjasama"
  | "Pengabdian Masyarakat";

export type NewsArticle = {
  readonly slug: string;
  readonly title: string;
  readonly category: NewsCategory;
  readonly publishedAt: string;
  readonly excerpt: string;
  readonly body: readonly string[];
  readonly readingMinutes: number;
  readonly image: string;
};

export type Event = {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly startsAt: string;
  readonly endsAt: string;
  readonly venue: string;
  readonly summary: string;
  readonly registrationUrl: string;
};

export type DocumentItem = {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly publishedAt: string;
  readonly description: string;
  readonly fileUrl: string;
};

export type Partner = {
  readonly slug: string;
  readonly name: string;
  readonly category: string;
  readonly country: string;
  readonly summary: string;
  readonly website: string;
};

export type LandingPageSection = {
  readonly heading: string;
  readonly body: string;
};

export type LandingPage = {
  readonly slug: string;
  readonly title: string;
  readonly eyebrow: string;
  readonly summary: string;
  readonly sections: readonly LandingPageSection[];
};

export const contentTypes = [
  "study-programs",
  "lecturers",
  "staff",
  "news",
  "events",
  "documents",
  "partners",
  "landing-pages",
] as const;

export type ContentType = (typeof contentTypes)[number];

export type ContentItem =
  | StudyProgram
  | Lecturer
  | StaffMember
  | NewsArticle
  | Event
  | DocumentItem
  | Partner
  | LandingPage;

export type SearchableEntity = {
  readonly type: ContentType;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
};
