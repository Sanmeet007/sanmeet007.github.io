'use client'

import { Calendar } from 'lucide-react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

const education = [
  {
    degree: 'b.e. computer science & engineering',
    institution: 'chandigarh college of engineering & technology',
    grade: 'cgpa: 8.04',
    period: 'dec 2021 – june 2025'
  },
  {
    degree: 'intermediate · science stream',
    institution: 'ryan international school, chandigarh',
    grade: '92.4%',
    period: '2018–2020'
  },
  {
    degree: 'matriculation',
    institution: 'ryan international school, chandigarh',
    grade: '95%',
    period: '2017–2018'
  },
]

export function EducationSection() {
  return (
    <section 
      data-section="4"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading
            title="academic background"
            label="roots"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase">where it started.</p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {education.map((edu, index) => (
            <StaggerItem key={index}>
              <div className="glass-card p-6 h-full">
                <h3 className="font-sans font-semibold text-[15px] text-[#e2e2e2]">
                  {edu.degree}
                </h3>
                <p className="font-sans text-[13px] text-[#9a9a9a] mt-2">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-[#4a4a4a]">
                    {edu.grade}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} strokeWidth={1.5} className="text-[#4a4a4a]" />
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#4a4a4a]">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
