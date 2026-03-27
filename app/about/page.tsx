import { AboutHeader } from '@/components/about/about-header'
import { SkillsBento } from '@/components/about/skills-bento'
import { ExperienceSection } from '@/components/about/experience-section'
import { EducationSection } from '@/components/about/education-section'
import { HobbiesSection } from '@/components/about/hobbies-section'
import { ForwardNudge } from '@/components/about/forward-nudge'
import { Footer } from '@/components/footer'

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <SkillsBento />
      <ExperienceSection />
      <EducationSection />
      <HobbiesSection />
      <ForwardNudge />
      <Footer />
    </>
  )
}
