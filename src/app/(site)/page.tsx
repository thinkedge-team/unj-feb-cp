import type { Metadata } from "next"

import { AcademicHighlights } from "@/features/home/academic-highlights"
import { AccreditationRibbon } from "@/features/home/accreditation-ribbon"
import { AchievementSection } from "@/features/home/achievement-section"
import { AspirationCTA } from "@/features/home/aspiration-cta"
import { CampusFacilities } from "@/features/home/campus-facilities"
import { DeanWelcome } from "@/features/home/dean-welcome"
import { EventsSection } from "@/features/home/events-section"
import { FacultySpotlight } from "@/features/home/faculty-spotlight"
import { FacultyStatistics } from "@/features/home/faculty-statistics"
import { Hero } from "@/features/home/hero"
import { NewsSection } from "@/features/home/news-section"
import { PartnerSection } from "@/features/home/partner-section"
import { ProgramExplorer } from "@/features/home/program-explorer"
import { QuickAccess } from "@/features/home/quick-access"
import { SocialLifeSection } from "@/features/home/social-life-section"
import { createPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = createPageMetadata({
  title: "Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta",
  description:
    "Portal resmi Fakultas Ekonomi dan Bisnis Universitas Negeri Jakarta (FEB UNJ). Pusat unggulan pendidikan ekonomi, manajemen, dan akuntansi berakreditasi unggul dan bertaraf internasional.",
  path: "/",
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <AccreditationRibbon />
      <QuickAccess />
      <DeanWelcome />
      <FacultyStatistics />
      <ProgramExplorer />
      <AcademicHighlights />
      <CampusFacilities />
      <NewsSection />
      <EventsSection />
      <AchievementSection />
      <FacultySpotlight />
      <PartnerSection />
      <SocialLifeSection />
      <AspirationCTA />
    </>
  )
}
