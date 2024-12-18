import { HeroSection } from '@/components/hero-section'
import { UniversityCarousel } from '@/components/university-carousel'
import { CoursesSection } from '@/components/courses-section'
import { UniversityRankingsSection } from '@/components/university-rankings-section'
import { FAQsSection } from '@/components/faqs-section'
import { CTABanner } from '@/components/cta-banner'
import { ApplicationSection } from '@/components/application-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
        <UniversityCarousel />
        <ApplicationSection />
      </div>
      <CoursesSection />
      <UniversityRankingsSection />
      <FAQsSection />
      <CTABanner />
    </main>
  )
}

