# FEB UNJ Design System

## 1. Identity
FEB UNJ uses an authoritative institutional academic identity reflecting the official faculty color of Universitas Negeri Jakarta: deep academic terracotta and FEB orange (`#C2410C` / `#EA580C`) establish faculty identity and energy, grounded by deep academic navy ink (`#0F172A`) for scholarly rigor, and warm academic ivory parchment (`#FBF9F5`, inspired by `https://feb.unj.ac.id/`) for a dignified reading surface.

## 2. Tokens
- **Color:**
  - Primary Academic Terracotta: `--color-unj-teal` (`#C2410C`, WCAG AA 5.23:1 contrast on white).
  - Vibrant Faculty Orange Accent: `--color-feb-copper` (`#EA580C`).
  - Warm Deep Mahogany / Dark Rust: `--color-teal-darkest` (`#7C2D12`).
  - Deep Burnt Terracotta Hover: `--color-teal-deep` (`#9A3412`).
  - Warm Ivory / Soft Orange Tint: `--color-teal-soft` (`#FFF7ED`).
  - Soft Amber Mist: `--color-teal-mist` (`#FFEDD5`).
  - Warm Academic Ivory / Parchment: `--color-limestone` (`#FBF9F5`).
  - Deep Academic Navy / Ink: `--color-ink` (`#0F172A`).
  - Academic Gold: `--color-gold` (`#D97706`).
  - Border & Muted: `--color-border` (`#E2E8F0`), `--color-muted` (`#64748B`), `--color-muted-ink` (`#334155`).
- **Typography:** Plus Jakarta Sans for both interface and display headings (`--font-display` and `--font-interface`), ensuring sharp legibility across all viewport sizes.
- **Spacing:** `--space-1` through `--space-12`, using a 4px base rhythm.
- **Shape:** rounded corners (`rounded-xl` for cards, `rounded-lg` for controls) and institutional surfaces.
- **Motion:** GPU-composited transitions (`transform`, `opacity`), natural deceleration easing (`cubic-bezier(0.16, 1, 0.3, 1)`), and full support for `prefers-reduced-motion`.

## 3. Layout
- Use a centered `max-w-7xl` content container with responsive horizontal padding.
- Header and footer surfaces use teal and limestone token colors, with borders only via `--color-border` or white translucency.
- Desktop navigation is available from `lg`; mobile navigation begins below `lg` and uses native details disclosure controls with 44px minimum tap targets.

## 4. Accessibility
- Keyboard focus uses the global copper focus ring.
- Every page shell begins with a visible-on-focus skip link targeting `#main-content`.
- Navigation uses semantic landmarks, native buttons and details/summary disclosures, and ARIA labels for landmark clarity.
- Breadcrumbs use a labelled nav with an ordered list and `aria-current="page"` for the terminal item.

## 5. Reusable Primitives
- `Button`: primary, secondary, quiet, and copper actions with 44px minimum height.
- `Input`: native accessible input with a 44px minimum height.
- `Badge`: compact institutional labels.
- `SectionHeading`: heading, optional eyebrow, description, and actions.
- `Header`, `MegaMenu`, `MobileNavigation`, `Footer`, and `Breadcrumbs`: shared institutional frame components. The header exposes top-level group links and disclosure menus; the mobile version supplies accordions; footer groups contact, identity, links, and accreditation.
- `StudyProgramCard`, `ProfileCard`, `NewsCard`, `EventCard`, and `DocumentCard`: token-based directory entities with one clearly labelled destination, compact rectangular surfaces, and 44px minimum action targets.
- `FilterBar` and `Pagination`: controlled directory controls using native search, radio, and button semantics. Pagination marks its selected page with `aria-current="page"`.
- `EmptyState` and `ErrorState`: consistent directory feedback with optional reset and mandatory retry actions.
- `InPageNavigation` and `MetadataRow`: accessible table-of-contents jump links with active state indicator and semantic description list `<dl>` for key-value entity metadata.
- `LandingPageTemplate`, `ListingPageTemplate`, and `DetailPageTemplate`: core macro layout templates providing editorial longform layouts with sticky in-page navigation, directory listings with filter and pagination slots, and structured entity details with semantic `<article>` and `<aside>` containers.

## 6. Responsive Behavior
- The desktop header condenses to the mobile menu below `lg`.
- Multi-column footer content collapses to a single column below `md`.
- All interactive navigation controls preserve a 44px minimum target.

## 7. Accepted Debt
- Search is a labelled trigger only in Task 4. A future search implementation must preserve its native button semantics and accessible dialog behaviour.
