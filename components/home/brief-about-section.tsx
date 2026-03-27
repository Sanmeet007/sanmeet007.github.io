'use client'

import Link from 'next/link'
import { ArrowRight, User } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

export function BriefAboutSection() {
  return (
    <section 
      data-section="4"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading 
            title="a bit about me" 
            icon={<User size={18} strokeWidth={1.5} />} 
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase">
            engineer passionate about design, detail, and doing things right.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={2}>
          <div className="font-sans font-normal text-base leading-[1.9] text-[#9a9a9a] max-w-[640px] mt-8 flex flex-col gap-4">
            <p>
              i build web apps that are clean, fast, and make sense — using tech that actually excites me. turning messy problems into stuff people genuinely enjoy using is my favorite kind of challenge. always on the lookout for new ideas and challenges.
            </p>
            <p>
              when i'm not coding, i'm probably watching football, arguing over tactics, or hoping barça doesn't bottle it (and yeah, i still believe in spurs).
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={3}>
          <Link href="/about" className="bordered-button mt-8 inline-flex">
            read the full story
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
