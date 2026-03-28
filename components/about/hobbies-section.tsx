'use client'

import { Gamepad2, Film, BookOpen, PenLine, Activity, Mountain } from 'lucide-react'
import { PiTrophy, PiStarFour } from 'react-icons/pi'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

const hobbies = [
  {
    icon: PiTrophy,
    name: 'football',
    description: 'watching, arguing tactics, praying barça holds it together',
    tags: ['la liga', 'premier league', 'tactics']
  },
  {
    icon: Gamepad2,
    name: 'gaming',
    description: 'the other debugging session',
    tags: ['strategy', 'open world']
  },
  {
    icon: Film,
    name: 'cinema',
    description: 'hacksaw ridge, interstellar, the dark knight, taste certified',
    tags: ['drama', 'sci-fi', 'thriller']
  },
  {
    icon: BookOpen,
    name: 'reading',
    description: 'inputs that shape the outputs',
    tags: ['tech', 'fiction', 'philosophy']
  },
  {
    icon: PiStarFour,
    name: 'astronomy',
    description: 'scale that makes your problems feel tiny',
    tags: ['cosmos', 'physics']
  },
  {
    icon: PenLine,
    name: 'sketching',
    description: 'thinking with a pen',
    tags: ['design', 'creative']
  },
  {
    icon: Activity,
    name: 'volleyball',
    description: 'the non-digital sport',
    tags: ['outdoor', 'sports']
  },
  {
    icon: Mountain,
    name: 'trekking',
    description: 'touching grass, literally',
    tags: ['outdoor', 'nature']
  },
]

export function HobbiesSection() {
  return (
    <section 
      data-section="5"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading
            title="beyond the code"
            label="offline"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8">When the laptop closes.</p>
        </ScrollAnimation>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {hobbies.map((hobby, index) => (
            <StaggerItem key={index} className="group pb-6 border-b border-[rgba(255,255,255,0.06)] relative transition-all duration-300 hover:scale-[1.02] bg-transparent z-0 hover:z-10">
              <div className="flex items-start gap-3 mb-3">
                <hobby.icon size={14} strokeWidth={1.5} className="text-[#6a6a6a] shrink-0 mt-0.5 transition-all duration-300 group-hover:text-[#e2e2e2] group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                <span className="font-sans font-semibold text-sm text-[#c8c8c8] capitalize transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {hobby.name}
                </span>
              </div>
              <p className="font-sans font-normal text-sm text-[#9a9a9a] mb-3 ml-7 transition-colors duration-300 group-hover:text-[#c8c8c8]">
                {hobby.description}
              </p>
              <div className="flex gap-2 ml-7 flex-wrap">
                {hobby.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="font-mono text-[9px] tracking-widest text-[#6a6a6a] border border-[rgba(255,255,255,0.12)] rounded px-2 py-1 transition-colors duration-300 group-hover:border-[rgba(255,255,255,0.3)] group-hover:text-[#a0a0a0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
