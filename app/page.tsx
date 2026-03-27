import { HeroSection } from '@/components/home/hero-section'
import { FeaturedWorkSection } from '@/components/home/featured-work-section'
import { BriefAboutSection } from '@/components/home/brief-about-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <BriefAboutSection />
      <Footer />
    </>
  )
}
