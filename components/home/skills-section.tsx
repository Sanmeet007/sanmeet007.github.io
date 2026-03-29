'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'
import { SKILL_STEPS } from '@/lib/constants'

export function SkillsSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section
      data-section="4"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading
            title="what i work with"
            label="the toolkit"
          />
        </ScrollAnimation>

        {/* Interactive 30/70 layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-8 lg:gap-16 items-stretch">

          {/* Left panel — philosophy steps */}
          <div>
            {SKILL_STEPS.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative py-7 px-4 -mx-4 border-b border-[var(--border-subtle)] cursor-default transition-opacity duration-200 ${
                  hoveredStep !== null && hoveredStep !== i ? 'opacity-25' : 'opacity-100'
                }`}
              >
                {/* corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <p className={`font-sans text-sm leading-relaxed transition-colors duration-180 ${
                  hoveredStep === i ? 'text-[var(--text-heading)]' : 'text-[var(--text-body)]'
                }`}>
                  {step.philosophy}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right panel — flex column so last card fills remaining height */}
          <div className="flex flex-col gap-3 h-full">
            {/* Row 1: Languages + Frontend */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className={`glass-card p-6 transition-opacity duration-200 ${
                    hoveredStep !== null && hoveredStep !== i ? 'opacity-20' : 'opacity-100'
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase mb-3">
                    {SKILL_STEPS[i].label}
                  </p>
                  {hoveredStep === i ? (
                    <p className="font-sans text-[12px] text-[var(--text-muted)] leading-[1.7]">
                      {SKILL_STEPS[i].description}
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {SKILL_STEPS[i].chips.map((chip) => (
                        <span key={chip} className="glass-chip">{chip}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: Backend + Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[2, 3].map((i) => (
                <div
                  key={i}
                  className={`glass-card p-6 transition-opacity duration-200 ${
                    hoveredStep !== null && hoveredStep !== i ? 'opacity-20' : 'opacity-100'
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase mb-3">
                    {SKILL_STEPS[i].label}
                  </p>
                  {hoveredStep === i ? (
                    <p className="font-sans text-[12px] text-[var(--text-muted)] leading-[1.7]">
                      {SKILL_STEPS[i].description}
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {SKILL_STEPS[i].chips.map((chip) => (
                        <span key={chip} className="glass-chip">{chip}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 3: AI/ML — grows to fill remaining height */}
            <div
              className={`glass-card p-6 flex-1 transition-opacity duration-200 ${
                hoveredStep !== null && hoveredStep !== 4 ? 'opacity-20' : 'opacity-100'
              }`}
            >
              <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase mb-3">
                {SKILL_STEPS[4].label}
              </p>
              {hoveredStep === 4 ? (
                <p className="font-sans text-[12px] text-[var(--text-muted)] leading-[1.7]">
                  {SKILL_STEPS[4].description}
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {SKILL_STEPS[4].chips.map((chip) => (
                    <span key={chip} className="glass-chip">{chip}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ScrollAnimation delay={2} className="mt-16 flex items-center justify-center w-full">
          <div className="flex-1 max-w-[200px] h-px bg-linear-to-r from-transparent to-[var(--border-strong)] mr-6 hidden md:block" />
          <Link href="/about" className="bordered-button group inline-flex">
            <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              see the full stack
              <ArrowRight size={14} strokeWidth={1.5} />
            </span>
          </Link>
          <div className="flex-1 max-w-[200px] h-px bg-linear-to-l from-transparent to-[var(--border-strong)] ml-6 hidden md:block" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
