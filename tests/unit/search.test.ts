import { describe, expect, it } from "vitest";

import { searchContent } from "@/lib/search";

describe("Global Search Engine (searchContent)", () => {
  it("returns an empty array when query is empty or only whitespace", () => {
    // Given: empty or whitespace queries
    // When: querying searchContent
    const emptyResult = searchContent("");
    const whitespaceResult = searchContent("   ");

    // Then: both should return empty array
    expect(emptyResult).toEqual([]);
    expect(whitespaceResult).toEqual([]);
  });

  it("finds study programs with type 'program' and correct target route url", () => {
    // Given: search query targeting study programs
    // When: searching for "manajemen"
    const results = searchContent("manajemen", "programs");

    // Then: results should only be programs and contain expected study programs
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((r) => r.type === "program")).toBe(true);

    const s1Manajemen = results.find((r) => r.title.includes("S1 Manajemen"));
    expect(s1Manajemen).toBeDefined();
    expect(s1Manajemen?.url).toBe("/program-studi/s1-manajemen");
    expect(s1Manajemen?.category).toBeDefined();
    expect(s1Manajemen?.description.length).toBeGreaterThan(0);
  });

  it("finds lecturers with type 'lecturer' and target route under /sdm/dosen", () => {
    // Given: search query targeting a lecturer
    // When: searching for "Mujiyatno"
    const results = searchContent("Mujiyatno", "lecturers");

    // Then: results should match the lecturer with appropriate metadata
    expect(results.length).toBeGreaterThan(0);
    const lecturer = results[0];
    expect(lecturer.type).toBe("lecturer");
    expect(lecturer.title).toContain("Mujiyatno");
    expect(lecturer.url).toBe("/sdm/dosen/mujiyatno");
    expect(lecturer.category.length).toBeGreaterThan(0);
  });

  it("finds news articles with type 'news' and route under /informasi/berita", () => {
    // Given: query matching news article
    // When: searching for "keuangan digital"
    const results = searchContent("keuangan digital", "news");

    // Then: returns news item with /informasi/berita link
    expect(results.length).toBeGreaterThan(0);
    const newsItem = results.find((r) => r.title.includes("Literasi Keuangan Digital"));
    expect(newsItem).toBeDefined();
    expect(newsItem?.type).toBe("news");
    expect(newsItem?.url).toMatch(/^\/informasi\/berita\//);
    expect(newsItem?.category).toBe("Akademik");
  });

  it("finds events with type 'event' and route under /informasi/event", () => {
    // Given: query matching event dataset
    // When: searching for "Seminar" or "International"
    const results = searchContent("Seminar", "events");

    // Then: returns event item with /informasi/event link
    expect(results.length).toBeGreaterThan(0);
    const eventItem = results[0];
    expect(eventItem.type).toBe("event");
    expect(eventItem.url).toMatch(/^\/informasi\/event\//);
    expect(eventItem.category).toBeDefined();
  });

  it("finds documents with type 'document' and route to /dokumen", () => {
    // Given: query matching official documents
    // When: searching for "Pedoman Akademik"
    const results = searchContent("Pedoman Akademik", "documents");

    // Then: returns document item
    expect(results.length).toBeGreaterThan(0);
    const docItem = results.find((r) => r.title.includes("Pedoman Akademik"));
    expect(docItem).toBeDefined();
    expect(docItem?.type).toBe("document");
    expect(docItem?.url).toMatch(/\/dokumen/);
  });

  it("finds institutional landing pages with type 'page' and appropriate route", () => {
    // Given: query matching landing page content
    // When: searching for "Sejarah"
    const results = searchContent("Sejarah", "pages");

    // Then: returns landing page item with /profil/sejarah url
    expect(results.length).toBeGreaterThan(0);
    const pageItem = results.find((r) => r.title.includes("Sejarah FEB UNJ"));
    expect(pageItem).toBeDefined();
    expect(pageItem?.type).toBe("page");
    expect(pageItem?.url).toBe("/profil/sejarah");
  });

  it("handles multi-term queries matching across title, category, and description", () => {
    // Given: multi-term query "akuntansi unggul"
    // When: searching across all entities
    const results = searchContent("akuntansi unggul");

    // Then: results should match items having those terms
    expect(results.length).toBeGreaterThan(0);
    const hasAkuntansi = results.some((r) =>
      r.title.toLowerCase().includes("akuntansi") ||
      r.description.toLowerCase().includes("akuntansi"),
    );
    expect(hasAkuntansi).toBe(true);
  });

  it("is case-insensitive across uppercase, lowercase, and mixed queries", () => {
    // Given: identical queries with different casings
    // When: executing search
    const lowerResults = searchContent("ekonomi");
    const upperResults = searchContent("EKONOMI");
    const mixedResults = searchContent("EkoNoMi");

    // Then: results count and ids should match
    expect(lowerResults.length).toBeGreaterThan(0);
    expect(upperResults.length).toBe(lowerResults.length);
    expect(mixedResults.length).toBe(lowerResults.length);
    expect(upperResults.map((r) => r.id)).toEqual(lowerResults.map((r) => r.id));
  });

  it("strictly respects search scopes", () => {
    // Given: query "manajemen" which exists in programs, lecturers, news, and pages
    const query = "manajemen";

    // When: filtering by different scopes
    const allResults = searchContent(query, "all");
    const programResults = searchContent(query, "programs");
    const lecturerResults = searchContent(query, "lecturers");
    const newsResults = searchContent(query, "news");

    // Then: each scope should only contain its respective type
    expect(allResults.length).toBeGreaterThanOrEqual(programResults.length);
    expect(programResults.every((r) => r.type === "program")).toBe(true);
    expect(lecturerResults.every((r) => r.type === "lecturer")).toBe(true);
    expect(newsResults.every((r) => r.type === "news")).toBe(true);
  });

  it("returns empty array for non-matching queries", () => {
    // Given: a query that matches no entity
    // When: searching
    const results = searchContent("xyzrandomnonexistentquery12345");

    // Then: empty results
    expect(results).toEqual([]);
  });
});
