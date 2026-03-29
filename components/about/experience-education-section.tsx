'use client'

import Link from 'next/link'
import { ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { EXPERIENCES, EDUCATION } from '@/lib/constants'

export function ExperienceEducationSection() {
  return (
    <section
      data-section="3"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-stretch">

          {/* Left: Experience */}
          <div className="flex flex-col">
            <ScrollAnimation>
              <div className="flex items-center gap-3 mb-8">
                <div className="border border-[var(--border-strong)] rounded-lg p-2 flex items-center justify-center h-9 w-9 shrink-0">
                  <Briefcase size={16} strokeWidth={1.5} className="text-[var(--text-body)]" />
                </div>
                <h2 className="font-sans font-semibold text-[18px] text-[var(--text-strong)] tracking-[-0.01em]">
                  Experience
                </h2>
              </div>
            </ScrollAnimation>

            <div className="border border-[var(--border-rest)] rounded-xl p-4 sm:p-6 flex-1">
              <StaggerContainer>
                {EXPERIENCES.map((exp, index) => (
                  <StaggerItem key={index}>
                    <div className={`flex gap-4 sm:gap-5 py-6 ${index < EXPERIENCES.length - 1 ? 'border-b border-[var(--border-low)]' : ''}`}>
                      {/* Icon + Year */}
                      <div className="w-[56px] sm:w-[72px] flex flex-col items-start shrink-0">
                        <div className="w-9 flex flex-col items-center gap-2.5">
                          <div className="border border-[var(--border-strong)] rounded-lg p-2 flex items-center justify-center h-9 w-9">
                            <exp.icon size={16} className="text-[var(--text-body)]" />
                          </div>
                          <span className="font-mono text-[10px] tracking-widest text-[var(--text-label)] text-center">
                            {exp.year}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-sans font-semibold text-[15px] sm:text-[16px] text-[var(--text-heading)] capitalize">
                          {exp.title}
                        </h3>
                        <p className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] mt-1 uppercase">
                          {exp.subtitle}
                        </p>
                        <p className="font-sans text-[13px] leading-[1.8] text-[var(--text-body)] mt-3">
                          {exp.description}
                        </p>
                        {exp.link && (
                          <Link
                            href={exp.link.href}
                            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-[var(--text-strong)] border border-[var(--border-mid)] rounded-lg px-3 py-2 mt-4 hover:border-[var(--border-emphasis)] hover:bg-[var(--surface-low)] transition-all duration-180"
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
                <div className="border border-[var(--border-strong)] rounded-lg p-2 flex items-center justify-center h-9 w-9 shrink-0">
                  <GraduationCap size={16} strokeWidth={1.5} className="text-[var(--text-body)]" />
                </div>
                <h2 className="font-sans font-semibold text-[18px] text-[var(--text-strong)] tracking-[-0.01em]">
                  Academic Background
                </h2>
              </div>
            </ScrollAnimation>

            {/* Vertical timeline */}
            <div className="relative flex-1 flex flex-col h-full">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-6 w-px bg-linear-to-b from-[var(--border-strong)] via-[var(--border-low)] to-transparent" />

              <div className="flex flex-col justify-between flex-1 h-full gap-5">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="flex gap-4 sm:gap-5 relative group flex-1">
                    {/* Node */}
                    <div className="w-[22px] shrink-0 flex flex-col items-center pt-1.5">
                      <div className={`w-[10px] h-[10px] rounded-full border shrink-0 flex items-center justify-center transition-colors duration-300 ${
                        edu.current
                          ? 'border-[var(--border-emphasis)] bg-[var(--surface-low)] group-hover:border-[var(--border-active)] group-hover:bg-[var(--surface-mid)]'
                          : 'border-[var(--border-strong)] bg-[var(--bg-base)] group-hover:border-[var(--border-emphasis)] group-hover:bg-[var(--bg-alt)]'
                      }`}>
                        {edu.current && (
                          <div className="w-[4px] h-[4px] rounded-full bg-[var(--text-body)]" />
                        )}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 flex flex-col bg-[var(--surface-subtle)] border border-[var(--border-low)] rounded-lg p-4 sm:p-5 transition-all duration-300 group-hover:bg-[var(--surface-low)] group-hover:border-[var(--border-mid)]">
                      <div className="mb-2">
                        <p className="font-mono text-[10px] tracking-widest text-[var(--text-label)] uppercase mb-1.5">
                          {edu.period}
                        </p>
                        <h3 className="font-sans font-semibold text-[13px] sm:text-[14px] text-[var(--text-strong)] leading-[1.4]">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="font-sans text-[12px] text-[var(--text-muted)]">
                        {edu.institution}
                      </p>
                      <p className="font-sans text-[12px] leading-[1.7] text-[var(--text-muted)] mt-2 mb-4">
                        {edu.blurb}
                      </p>
                      <div className="mt-auto">
                        <span className="inline-block shrink-0 font-mono text-[10px] tracking-widest text-[var(--text-label)] border border-[var(--border-rest)] rounded px-2 py-0.5">
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
