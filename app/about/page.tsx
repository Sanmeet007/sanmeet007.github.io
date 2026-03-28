import { AboutHeader } from '@/components/about/about-header'
import { SkillsBento } from '@/components/about/skills-bento'
import { ExperienceEducationSection } from '@/components/about/experience-education-section'
import { HobbiesSection } from '@/components/about/hobbies-section'
import { ForwardNudge } from '@/components/about/forward-nudge'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <SkillsBento />
      <ExperienceEducationSection />
      <HobbiesSection />
      <ForwardNudge />
      <Footer />
    </>
  )
}
