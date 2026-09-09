import { documents } from "@/data/documents";
import { events } from "@/data/events";
import { landingPages } from "@/data/landing-pages";
import { lecturers } from "@/data/lecturers";
import { mockEmeritusLecturers, mockPractitioners } from "@/data/sdm-categories";
import { news } from "@/data/news";
import { partners } from "@/data/partners";
import { staff } from "@/data/staff";
import { studyPrograms } from "@/data/study-programs";
import type {
  ContentItem,
  ContentType,
  Lecturer,
  SearchableEntity,
  StudyProgram,
} from "@/types/content";

export const allLecturers: readonly Lecturer[] = [
  ...lecturers,
  ...mockPractitioners,
  ...mockEmeritusLecturers,
];

export function getAllLecturers(): readonly Lecturer[] {
  return allLecturers;
}

export function getStudyProgram(slug: string): StudyProgram | undefined {
  return studyPrograms.find((program) => program.slug === slug);
}

export function getLecturer(slug: string): Lecturer | undefined {
  return allLecturers.find((lecturer) => lecturer.slug === slug);
}

export function getContentItem(
  type: ContentType,
  slug: string,
): ContentItem | undefined {
  switch (type) {
    case "study-programs":
      return studyPrograms.find((item) => item.slug === slug);
    case "lecturers":
      return lecturers.find((item) => item.slug === slug);
    case "staff":
      return staff.find((item) => item.slug === slug);
    case "news":
      return news.find((item) => item.slug === slug);
    case "events":
      return events.find((item) => item.slug === slug);
    case "documents":
      return documents.find((item) => item.slug === slug);
    case "partners":
      return partners.find((item) => item.slug === slug);
    case "landing-pages":
      return landingPages.find((item) => item.slug === slug);
  }
}

export const searchableEntities: readonly SearchableEntity[] = [
  ...studyPrograms.map((item) => ({
    type: "study-programs" as const,
    slug: item.slug,
    title: item.name,
    description: item.vision,
  })),
  ...lecturers.map((item) => ({
    type: "lecturers" as const,
    slug: item.slug,
    title: item.name,
    description: item.expertise.join(", "),
  })),
  ...staff.map((item) => ({
    type: "staff" as const,
    slug: item.slug,
    title: item.name,
    description: item.bio,
  })),
  ...news.map((item) => ({
    type: "news" as const,
    slug: item.slug,
    title: item.title,
    description: item.excerpt,
  })),
  ...events.map((item) => ({
    type: "events" as const,
    slug: item.slug,
    title: item.title,
    description: item.summary,
  })),
  ...documents.map((item) => ({
    type: "documents" as const,
    slug: item.slug,
    title: item.title,
    description: item.description,
  })),
  ...partners.map((item) => ({
    type: "partners" as const,
    slug: item.slug,
    title: item.name,
    description: item.summary,
  })),
  ...landingPages.map((item) => ({
    type: "landing-pages" as const,
    slug: item.slug,
    title: item.title,
    description: item.summary,
  })),
];
