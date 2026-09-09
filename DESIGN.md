# FEB UNJ Design System

## 1. Identity
FEB UNJ uses a warm institutional academic identity: deep UNJ teal establishes authority, copper signals faculty distinction, and limestone creates a calm reading surface. The frame is functional and dignified rather than ornamental.

## 2. Tokens
- **Color:** `--color-unj-teal`, `--color-teal-deep`, `--color-teal-soft`, `--color-teal-mist`, `--color-feb-copper`, `--color-copper-deep`, `--color-limestone`, `--color-white`, `--color-ink`, `--color-muted`, `--color-muted-ink`, `--color-border`, `--color-skeleton`.
- **Typography:** Merriweather for headings through `--font-display`; Plus Jakarta Sans for interface text through `--font-interface`.
- **Spacing:** `--space-1` through `--space-12`, using a 4px base rhythm.
- **Shape:** compact `rounded-sm` controls and institutional surfaces.
- **Motion:** `transition-colors duration-200` for direct interaction feedback. Global reduced-motion rules remove nonessential transitions and animations.

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
