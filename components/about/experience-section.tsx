'use client'

import Link from 'next/link'
import { Trophy, Briefcase, BookOpen, ArrowUpRight } from 'lucide-react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

const experiences = [
  {
    icon: Briefcase,
    year: '2024',
    title: 'freelance developer',
    subtitle: 'web application development',
    description: 'built key cms functionalities — product management, content creation, secure user authentication. client: stardom.co.in',
    link: { text: 'view project', href: '#' }
  },
  {
    icon: Trophy,
    year: 'oct 2024',
    title: 'gen ai exchange hackathon',
    subtitle: 'winner, network 18 track · google & devfolio',
    description: 'built credify — perceptual fingerprinting that survives format changes, hierarchical content attribution tracking, and gemini api integration for real-time media fact enrichment.',
    link: { text: 'view credify', href: '/build/credify' }
  },
  {
    icon: Trophy,
    year: 'sept 2024',
    title: 'smart india hackathon',
    subtitle: 'internal winner, aicte id: 1728',
    description: 'designed pramanik — a paperless scholarship disbursement platform for pmsss that automates validation for transparent fund allocation.',
    link: { text: 'view pramanik', href: '/build/pramanik' }
  },
  {
    icon: BookOpen,
    year: '2024',
    title: 'research publication',
    subtitle: 'aodv-propt · published ijnrd · doi: 10.1729/journal.40670',
    description: 'novel routing protocol enhancing network performance through relational parameter indexing.',
    link: { text: 'read publication', href: '/build/aodv-propt' }
  },
]

export function ExperienceSection() {
  return (
    <section 
      data-section="3"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading 
            title="experience & achievements" 
            icon={<Trophy size={18} strokeWidth={1.5} />} 
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase">the journey so far.</p>
        </ScrollAnimation>

        <StaggerContainer className="mt-12">
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <div className="flex gap-6 lg:gap-12 border-b border-[rgba(255,255,255,0.06)] py-8">
                {/* Left column - Icon + Year */}
                <div className="w-[20%] flex flex-col items-start gap-3">
                  <div className="border border-[rgba(255,255,255,0.2)] rounded-lg p-2.5 flex items-center justify-center h-10 w-10">
                    <exp.icon size={18} strokeWidth={1.5} className="text-[#9a9a9a]" />
                  </div>
                  <span className="font-mono text-sm tracking-[0.15em] text-[#6a6a6a]">
                    {exp.year}
                  </span>
                </div>

                {/* Right column - Content */}
                <div className="w-[80%]">
                  <h3 className="font-sans font-semibold text-lg text-[#e2e2e2]">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.15em] text-[#8a8a8a] mt-2 uppercase">
                    {exp.subtitle}
                  </p>
                  <p className="font-sans text-base leading-[1.8] text-[#9a9a9a] mt-4">
                    {exp.description}
                  </p>
                  <Link 
                    href={exp.link.href}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#c8c8c8] border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 mt-4 hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-180"
                  >
                    {exp.link.text}
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
