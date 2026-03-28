'use client'

import Link from 'next/link'
import { ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react'
import { PiTrophy, PiBriefcase, PiCode } from 'react-icons/pi'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'

const experiences = [
  {
    icon: PiCode,
    year: '2025',
    title: 'freelance web developer',
    subtitle: 'ongoing',
    description: 'working with clients on web application development — frontend engineering, full-stack builds, and custom integrations.',
    link: null
  },
  {
    icon: PiBriefcase,
    year: '2025',
    title: 'software development intern',
    subtitle: 'stardom · 2025',
    description: 'built key cms functionalities — product management, content creation, secure user authentication.',
    link: null
  },
  {
    icon: PiTrophy,
    year: '2024',
    title: 'google genai exchange hackathon',
    subtitle: 'winner, network 18 track · google & devfolio',
    description: 'built credify — perceptual fingerprinting that survives format changes, hierarchical content attribution tracking, and gemini api integration for real-time media fact enrichment.',
    link: { text: 'view credify', href: '/build/credify' }
  },
]

const education = [
  {
    degree: 'B.E. Computer Science & Engineering',
    institution: 'Chandigarh College of Engineering & Technology · Panjab University',
    grade: 'CGPA: 8.04',
    period: '2021 – 2025',
    current: true,
    blurb: 'most growth came from side projects and hackathons — grinding on problems that actually mattered.',
  },
  {
    degree: '12th Grade · Science Stream',
    institution: 'Ryan International School, Chandigarh · CBSE',
    grade: '92.4%',
    period: '2018–2020',
    current: false,
    blurb: 'also when coding shifted from a curiosity to something i genuinely wanted to pursue.',
  },
  {
    degree: '10th Grade',
    institution: 'Ryan International School, Chandigarh · CBSE',
    grade: '95%',
    period: '2017–2018',
    current: false,
    blurb: 'when tinkering with computers stopped being just a hobby.',
  },
]

export function ExperienceEducationSection() {
  return (
    <section
      data-section="3"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-16 lg:gap-20 items-stretch">

          {/* Left: Experience */}
          <div className="flex flex-col">
            <ScrollAnimation>
              <div className="flex items-center gap-3 mb-8">
                <div className="border border-[rgba(255,255,255,0.15)] rounded-lg p-2 flex items-center justify-center h-9 w-9 flex-shrink-0">
                  <Briefcase size={16} strokeWidth={1.5} className="text-[#9a9a9a]" />
                </div>
                <h2 className="font-sans font-semibold text-[18px] text-[#d8d8d8] tracking-[-0.01em]">
                  Experience
                </h2>
              </div>
            </ScrollAnimation>

            <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex-1">
              <StaggerContainer>
                {experiences.map((exp, index) => (
                  <StaggerItem key={index}>
                    <div className={`flex gap-5 py-6 ${index < experiences.length - 1 ? 'border-b border-[rgba(255,255,255,0.06)]' : ''}`}>
                      {/* Icon + Year */}
                      <div className="w-[72px] flex flex-col items-start gap-2.5 flex-shrink-0">
                        <div className="border border-[rgba(255,255,255,0.15)] rounded-lg p-2 flex items-center justify-center h-9 w-9">
                          <exp.icon size={16} className="text-[#9a9a9a]" />
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.1em] text-[#5a5a5a]">
                          {exp.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-sans font-semibold text-[16px] text-[#e2e2e2] capitalize">
                          {exp.title}
                        </h3>
                        <p className="font-mono text-[10px] tracking-[0.1em] text-[#7a7a7a] mt-1 uppercase">
                          {exp.subtitle}
                        </p>
                        <p className="font-sans text-[13px] leading-[1.8] text-[#9a9a9a] mt-3">
                          {exp.description}
                        </p>
                        {exp.link && (
                          <Link
                            href={exp.link.href}
                            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-[#c8c8c8] border border-[rgba(255,255,255,0.12)] rounded-lg px-3 py-2 mt-4 hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-180"
                          >
                            {exp.link.text}
                            <ArrowUpRight size={11} strokeWidth={1.5} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Right: Education timeline */}
          <div className="flex flex-col h-full">
            <ScrollAnimation delay={2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="border border-[rgba(255,255,255,0.15)] rounded-lg p-2 flex items-center justify-center h-9 w-9 flex-shrink-0">
                  <GraduationCap size={16} strokeWidth={1.5} className="text-[#9a9a9a]" />
                </div>
                <h2 className="font-sans font-semibold text-[18px] text-[#d8d8d8] tracking-[-0.01em]">
                  Academic Background
                </h2>
              </div>
            </ScrollAnimation>

            {/* Vertical timeline */}
            <div className="relative flex-1 flex flex-col h-full">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-6 w-px bg-gradient-to-b from-[rgba(255,255,255,0.15)] via-[rgba(255,255,255,0.06)] to-transparent" />

              <div className="flex flex-col justify-between flex-1 h-full gap-5">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-5 relative group flex-1">
                    {/* Node */}
                    <div className="w-[22px] flex-shrink-0 flex flex-col items-center pt-1.5">
                      <div className={`w-[10px] h-[10px] rounded-full border flex-shrink-0 flex items-center justify-center ${
                        edu.current
                          ? 'border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.06)]'
                          : 'border-[rgba(255,255,255,0.15)] bg-[#080808]'
                      }`}>
                        {edu.current && (
                          <div className="w-[4px] h-[4px] rounded-full bg-[#9a9a9a]" />
                        )}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 flex flex-col bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-lg p-5">
                      <div className="mb-2">
                        <p className="font-mono text-[10px] tracking-[0.1em] text-[#5a5a5a] uppercase mb-1.5">
                          {edu.period}
                        </p>
                        <h3 className="font-sans font-semibold text-[14px] text-[#d8d8d8] leading-[1.4]">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="font-sans text-[12px] text-[#7a7a7a]">
                        {edu.institution}
                      </p>
                      <p className="font-sans text-[12px] leading-[1.7] text-[#6a6a6a] mt-2 mb-4">
                        {edu.blurb}
                      </p>
                      <div className="mt-auto">
                        <span className="inline-block flex-shrink-0 font-mono text-[10px] tracking-[0.1em] text-[#5a5a5a] border border-[rgba(255,255,255,0.08)] rounded px-2 py-0.5">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
