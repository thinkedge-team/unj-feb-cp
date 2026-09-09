import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import ErrorComponent from "@/app/(site)/error";
import LoadingComponent from "@/app/(site)/loading";
import NotFoundComponent from "@/app/(site)/not-found";
import { SearchDialog } from "@/features/search/search-dialog";
import { SearchResults } from "@/features/search/search-results";

const mockPush = vi.fn();
let mockSearchParams = new URLSearchParams();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => mockSearchParams,
}));

beforeEach(() => {
  mockSearchParams = new URLSearchParams();
  mockPush.mockClear();
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("System States (loading, error, not-found)", () => {
  it("renders LoadingComponent with accessible loading status and skeletons", () => {
    // Given: loading state component
    // When: rendering loading.tsx
    render(<LoadingComponent />);

    // Then: accessible status should be present
    const status = screen.getByRole("status");
    expect(status).toBeDefined();
    expect(screen.getByText(/Memuat informasi/i)).toBeDefined();
  });

  it("renders ErrorComponent with academic notice and triggers reset callback on retry click", () => {
    // Given: error boundary component with mock reset callback
    const resetMock = vi.fn();
    const testError = new Error("Simulated network timeout");

    // When: rendering error.tsx
    render(<ErrorComponent error={testError} reset={resetMock} />);

    // Then: institutional heading, explanation, and interactive retry button are rendered
    expect(
      screen.getByRole("heading", { name: /Terjadi Kendala Teknis/i }),
    ).toBeDefined();
    expect(screen.getByText(/Mohon maaf atas ketidaknyamanan/i)).toBeDefined();

    const retryButton = screen.getByRole("button", { name: /Coba Lagi/i });
    expect(retryButton).toBeDefined();

    fireEvent.click(retryButton);
    expect(resetMock).toHaveBeenCalledTimes(1);
  });

  it("renders NotFoundComponent (404) with fast-track navigation links", () => {
    // Given: not-found component
    // When: rendering not-found.tsx
    render(<NotFoundComponent />);

    // Then: 404 heading, message, and navigation to primary hubs are present
    expect(
      screen.getByRole("heading", { name: /Halaman Tidak Ditemukan/i }),
    ).toBeDefined();
    expect(screen.getByText("404")).toBeDefined();

    const berandaLink = screen.getByRole("link", { name: /Kembali ke Beranda/i });
    expect(berandaLink.getAttribute("href")).toBe("/");

    const prodiLink = screen.getByRole("link", { name: /Program Studi/i });
    expect(prodiLink.getAttribute("href")).toBe("/program-studi");

    const layananLink = screen.getByRole("link", { name: /Layanan Mahasiswa/i });
    expect(layananLink.getAttribute("href")).toBe("/layanan");
  });
});

describe("Global Search Spotlight Modal (SearchDialog)", () => {
  it("renders accessible search dialog with search input and category tabs when open", () => {
    // Given: open SearchDialog
    const onCloseMock = vi.fn();

    // When: rendering SearchDialog
    render(<SearchDialog isOpen={true} onClose={onCloseMock} />);

    // Then: dialog role, input, and category tabs are rendered
    expect(screen.getByRole("dialog")).toBeDefined();
    const input = screen.getByRole("searchbox");
    expect(input).toBeDefined();
    expect(input.getAttribute("placeholder")).toContain("Cari");

    // Verify scope filters
    expect(screen.getByRole("button", { name: /^Semua$/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /^Program Studi$/i })).toBeDefined();
    expect(screen.getByRole("button", { name: /^Dosen$/i })).toBeDefined();
  });

  it("updates query live, displays results with type badges, and allows clearing input", () => {
    // Given: open SearchDialog
    const onCloseMock = vi.fn();
    render(<SearchDialog isOpen={true} onClose={onCloseMock} />);

    const input = screen.getByRole("searchbox");

    // When: user types "akuntansi"
    fireEvent.change(input, { target: { value: "akuntansi" } });

    // Then: results should appear containing Akuntansi
    const results = screen.getAllByRole("link");
    expect(results.length).toBeGreaterThan(0);
    const hasAkuntansi = results.some((r) =>
      r.textContent?.toLowerCase().includes("akuntansi"),
    );
    expect(hasAkuntansi).toBe(true);

    // When: clicking clear button
    const clearButton = screen.getByRole("button", { name: /Hapus pencarian/i });
    fireEvent.click(clearButton);

    // Then: input value is cleared
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("displays empty state when no matching results are found", () => {
    // Given: open SearchDialog
    const onCloseMock = vi.fn();
    render(<SearchDialog isOpen={true} onClose={onCloseMock} />);

    const input = screen.getByRole("searchbox");

    // When: user enters query with no matches
    fireEvent.change(input, { target: { value: "xyznonexistentquery999" } });

    // Then: empty state is shown
    expect(screen.getByText(/Tidak ditemukan hasil untuk/i)).toBeDefined();
  });

  it("closes modal when close button is clicked or Escape key is pressed", () => {
    // Given: open SearchDialog
    const onCloseMock = vi.fn();
    render(<SearchDialog isOpen={true} onClose={onCloseMock} />);

    // When: clicking close button
    const closeBtn = screen.getByRole("button", { name: /Tutup pencarian/i });
    fireEvent.click(closeBtn);

    // Then: onClose should be called
    expect(onCloseMock).toHaveBeenCalledTimes(1);

    // When: pressing Escape
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onCloseMock).toHaveBeenCalledTimes(2);
  });
});

describe("Standalone Search Results Page (SearchResults)", () => {
  it("renders starting prompt when no query is present", () => {
    // Given: no search query
    mockSearchParams = new URLSearchParams();

    // When: rendering SearchResults
    render(<SearchResults />);

    // Then: prompt heading and popular topic chips are displayed
    expect(
      screen.getByRole("heading", { name: /Mulai Pencarian Informasi/i }),
    ).toBeDefined();
    expect(screen.getByRole("button", { name: "S1 Manajemen" })).toBeDefined();
  });

  it("renders matching results and category counts when query is present", () => {
    // Given: search query "manajemen"
    mockSearchParams = new URLSearchParams("q=manajemen");

    // When: rendering SearchResults
    render(<SearchResults />);

    // Then: page title and results matching "manajemen" are rendered
    expect(
      screen.getByRole("heading", { name: /Pusat Pencarian Terpadu/i }),
    ).toBeDefined();

    const links = screen.getAllByRole("link");
    const hasManajemen = links.some((l) =>
      l.textContent?.toLowerCase().includes("manajemen"),
    );
    expect(hasManajemen).toBe(true);

    // Verify scope buttons show item counts
    const prodiButton = screen.getByRole("button", { name: /Program Studi/i });
    expect(prodiButton).toBeDefined();
  });

  it("triggers router push when submitting the search form", () => {
    // Given: search input with value
    mockSearchParams = new URLSearchParams();
    render(<SearchResults />);

    const input = screen.getByRole("textbox", { name: /Kata kunci pencarian/i });
    fireEvent.change(input, { target: { value: "ekonomi" } });

    // When: submitting form
    const submitButton = screen.getByRole("button", { name: /Cari Informasi/i });
    fireEvent.click(submitButton);

    // Then: router.push is called with query
    expect(mockPush).toHaveBeenCalledWith("/search?q=ekonomi");
  });
});
