import { describe, expect, it } from "vitest";

import { documents } from "@/data/documents";
import { events } from "@/data/events";
import { faculty } from "@/data/faculty";
import { landingPages } from "@/data/landing-pages";
import { lecturers } from "@/data/lecturers";
import { news } from "@/data/news";
import { partners } from "@/data/partners";
import { staff } from "@/data/staff";
import { studyPrograms } from "@/data/study-programs";
import {
  getContentItem,
  getLecturer,
  getStudyProgram,
  searchableEntities,
} from "@/lib/content";

describe("FEB UNJ content domain datasets", () => {
  it("includes exactly 21 unique study program slugs across mandated degrees", () => {
    // Given: the study program dataset
    // When: analyzing counts, slugs, and degree distribution
    const slugs = studyPrograms.map((p) => p.slug);
    const degrees = new Set(studyPrograms.map((p) => p.degree));

    // Then: count is 21, slugs are unique, and required degree levels exist
    expect(studyPrograms).toHaveLength(21);
    expect(new Set(slugs).size).toBe(21);
    expect(degrees.has("Doktor")).toBe(true);
    expect(degrees.has("Magister")).toBe(true);
    expect(degrees.has("Sarjana")).toBe(true);
    expect(degrees.has("Sarjana Terapan")).toBe(true);

    const digitalAdmin = studyPrograms.find(
      (p) => p.name === "S1 Terapan Administrasi Perkantoran Digital",
    );
    expect(digitalAdmin).toBeDefined();
    expect(digitalAdmin?.slug).toBe("s1-terapan-administrasi-perkantoran-digital");
  });

  it("enforces full metadata on all study programs without placeholder text", () => {
    // Given: all study programs
    // When: verifying required structure
    for (const program of studyPrograms) {
      expect(program.slug.length).toBeGreaterThan(0);
      expect(program.name.length).toBeGreaterThan(0);
      expect(program.accreditation.length).toBeGreaterThan(0);
      expect(program.vision.length).toBeGreaterThan(0);
      expect(program.mission.length).toBeGreaterThan(0);
      expect(program.careerProspects.length).toBeGreaterThan(0);
      expect(program.curriculum.length).toBe(8);
      expect(program.head.length).toBeGreaterThan(0);
      expect(program.contact.length).toBeGreaterThan(0);
      expect(program.vision).not.toContain("Lorem ipsum");
    }
  });

  it("includes at least 25 lecturer profiles with complete public identifiers", () => {
    // Given: the lecturers dataset
    // When: checking count and completeness of each profile
    expect(lecturers.length).toBeGreaterThanOrEqual(25);

    for (const lecturer of lecturers) {
      expect(lecturer.slug.length).toBeGreaterThan(0);
      expect(lecturer.name.length).toBeGreaterThan(0);
      expect(lecturer.nidn.length).toBeGreaterThan(0);
      expect(lecturer.title.length).toBeGreaterThan(0);
      expect(lecturer.role.length).toBeGreaterThan(0);
      expect(lecturer.homebase.length).toBeGreaterThan(0);
      expect(lecturer.expertise.length).toBeGreaterThan(0);
      expect(lecturer.education.length).toBeGreaterThan(0);
      expect(lecturer.links.sinta).toMatch(/^https:\/\//);
      expect(lecturer.links.scopus).toMatch(/^https:\/\//);
      expect(lecturer.links.googleScholar).toMatch(/^https:\/\//);
      expect(lecturer.photo).toMatch(/^\/images\//);
    }
  });

  it("includes exactly 10 staff members with unit and contact details", () => {
    // Given: the staff dataset
    // When: checking count and fields
    expect(staff).toHaveLength(10);
    for (const member of staff) {
      expect(member.slug.length).toBeGreaterThan(0);
      expect(member.name.length).toBeGreaterThan(0);
      expect(member.role.length).toBeGreaterThan(0);
      expect(member.unit.length).toBeGreaterThan(0);
      expect(member.email).toContain("@unj.ac.id");
      expect(member.phone.length).toBeGreaterThan(0);
      expect(member.bio.length).toBeGreaterThan(0);
    }
  });

  it("includes exactly 16 news articles with valid categories and reading times", () => {
    // Given: the news dataset
    // When: checking count and structure
    expect(news).toHaveLength(16);
    for (const article of news) {
      expect(article.slug.length).toBeGreaterThan(0);
      expect(article.title.length).toBeGreaterThan(0);
      expect(article.category.length).toBeGreaterThan(0);
      expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.excerpt.length).toBeGreaterThan(0);
      expect(article.body.length).toBeGreaterThan(0);
      expect(article.readingMinutes).toBeGreaterThan(0);
      expect(article.image).toMatch(/^\/images\//);
    }
  });

  it("includes exactly 10 events with schedules and registration links", () => {
    // Given: the events dataset
    // When: checking count and structure
    expect(events).toHaveLength(10);
    for (const event of events) {
      expect(event.slug.length).toBeGreaterThan(0);
      expect(event.title.length).toBeGreaterThan(0);
      expect(event.category.length).toBeGreaterThan(0);
      expect(event.startsAt.length).toBeGreaterThan(0);
      expect(event.endsAt.length).toBeGreaterThan(0);
      expect(event.venue.length).toBeGreaterThan(0);
      expect(event.summary.length).toBeGreaterThan(0);
      expect(event.registrationUrl).toMatch(/^https:\/\//);
    }
  });

  it("includes exactly 18 official institutional documents", () => {
    // Given: the documents dataset
    // When: checking count and structure
    expect(documents).toHaveLength(18);
    for (const doc of documents) {
      expect(doc.slug.length).toBeGreaterThan(0);
      expect(doc.title.length).toBeGreaterThan(0);
      expect(doc.category.length).toBeGreaterThan(0);
      expect(doc.description.length).toBeGreaterThan(0);
      expect(doc.fileUrl.length).toBeGreaterThan(0);
    }
  });

  it("includes exactly 12 partners across university and industry sectors", () => {
    // Given: the partners dataset
    // When: checking count and structure
    expect(partners).toHaveLength(12);
    for (const partner of partners) {
      expect(partner.slug.length).toBeGreaterThan(0);
      expect(partner.name.length).toBeGreaterThan(0);
      expect(partner.category.length).toBeGreaterThan(0);
      expect(partner.country.length).toBeGreaterThan(0);
      expect(partner.summary.length).toBeGreaterThan(0);
      expect(partner.website).toMatch(/^https:\/\//);
    }
  });

  it("provides comprehensive faculty leadership, statistics, and history", () => {
    // Given: the faculty dataset
    // When: checking leadership and statistical milestones
    expect(faculty.name).toBe("Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta");
    expect(faculty.leadership.length).toBeGreaterThanOrEqual(5);
    expect(faculty.history.length).toBeGreaterThanOrEqual(3);
    expect(faculty.statistics.length).toBeGreaterThanOrEqual(4);
    expect(faculty.facilities.length).toBeGreaterThanOrEqual(4);
    expect(faculty.senate.length).toBeGreaterThan(0);
  });

  it("includes content landing pages for core institutional sections", () => {
    // Given: the landing pages dataset
    // When: checking count and structure
    expect(landingPages.length).toBeGreaterThanOrEqual(10);
    for (const page of landingPages) {
      expect(page.slug.length).toBeGreaterThan(0);
      expect(page.title.length).toBeGreaterThan(0);
      expect(page.eyebrow.length).toBeGreaterThan(0);
      expect(page.summary.length).toBeGreaterThan(0);
      expect(page.sections.length).toBeGreaterThan(0);
    }
  });
});

describe("FEB UNJ content selectors", () => {
  it("resolves study programs by slug and returns undefined for unknown slugs", () => {
    const program = getStudyProgram("s1-manajemen");
    expect(program?.name).toBe("S1 Manajemen");
    expect(program?.degree).toBe("Sarjana");

    const unknown = getStudyProgram("non-existent-program");
    expect(unknown).toBeUndefined();
  });

  it("resolves lecturers by slug and returns undefined for unknown slugs", () => {
    const lecturer = getLecturer("mujiyatno");
    expect(lecturer?.name).toBe("Dr. Mujiyatno, S.E., M.M.");
    expect(lecturer?.nidn).toBe("0015086704");

    const unknown = getLecturer("unknown-person");
    expect(unknown).toBeUndefined();
  });

  it("resolves content items across all content types correctly", () => {
    const newsItem = getContentItem("news", "feb-unj-perkuat-literasi-keuangan-digital");
    expect(newsItem?.slug).toBe("feb-unj-perkuat-literasi-keuangan-digital");

    const eventItem = getContentItem("events", "conference-ekonomi-berkelanjutan");
    expect(eventItem?.slug).toBe("conference-ekonomi-berkelanjutan");

    const docItem = getContentItem("documents", "pedoman-akademik-2025-2026");
    expect(docItem?.slug).toBe("pedoman-akademik-2025-2026");

    const partnerItem = getContentItem("partners", "bank-indonesia");
    expect(partnerItem?.slug).toBe("bank-indonesia");

    const landingItem = getContentItem("landing-pages", "tentang-feb");
    expect(landingItem?.slug).toBe("tentang-feb");

    const unknown = getContentItem("news", "non-existent-news-item");
    expect(unknown).toBeUndefined();
  });

  it("exposes a populated searchableEntities list covering all domain models", () => {
    expect(searchableEntities.length).toBeGreaterThan(50);
    const types = new Set(searchableEntities.map((e) => e.type));
    expect(types.has("study-programs")).toBe(true);
    expect(types.has("lecturers")).toBe(true);
    expect(types.has("staff")).toBe(true);
    expect(types.has("news")).toBe(true);
    expect(types.has("events")).toBe(true);
    expect(types.has("documents")).toBe(true);
    expect(types.has("partners")).toBe(true);
    expect(types.has("landing-pages")).toBe(true);
  });
});

