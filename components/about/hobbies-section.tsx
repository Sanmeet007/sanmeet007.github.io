'use client'

import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'
import { HOBBIES } from '@/lib/constants'

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
          <p className="font-sans text-xl md:text-2xl text-[var(--text-secondary)] mt-2 mb-8">When the laptop closes.</p>
        </ScrollAnimation>

        <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {HOBBIES.map((hobby, index) => (
            <StaggerItem key={index} className="group pb-6 border-b border-[var(--border-low)] relative transition-all duration-300 hover:scale-[1.02] bg-transparent z-0 hover:z-10">
              <div className="flex items-start gap-3 mb-3">
                <hobby.icon size={14} strokeWidth={1.5} className="text-[var(--text-muted)] shrink-0 mt-0.5 transition-all duration-300 group-hover:text-[var(--text-heading)] group-hover:drop-shadow-[0_0_8px_var(--border-strong)]" />
                <span className="font-sans font-semibold text-sm text-[var(--text-strong)] capitalize transition-all duration-300 group-hover:text-[var(--text-heading)]">
                  {hobby.name}
                </span>
              </div>
              <p className="font-sans font-normal text-sm text-[var(--text-body)] mb-3 ml-7 transition-colors duration-300 group-hover:text-[var(--text-strong)]">
                {hobby.description}
              </p>
              <div className="flex gap-2 ml-7 flex-wrap">
                {hobby.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest text-[var(--text-muted)] border border-[var(--border-mid)] rounded px-2 py-1 transition-colors duration-300 group-hover:border-[var(--border-emphasis)] group-hover:text-[var(--text-secondary)]"
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
