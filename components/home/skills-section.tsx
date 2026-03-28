'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
  {
    philosophy: "it all starts with the right language.",
    description: "the ones i actually think in. python for ai and scripting, typescript/js for the web side of everything.",
    chips: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C / C++'],
    label: 'languages',
  },
  {
    philosophy: "if the interface needs explaining, it's broken.",
    description: "i care about things that feel effortless to use. next.js is my default — fast, clean, no unnecessary weight.",
    chips: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    label: 'frontend',
  },
  {
    philosophy: "fast apis don't need apologies.",
    description: "quiet, reliable, no drama. i pick the right tool rather than the popular one.",
    chips: ['FastAPI', 'Flask', 'Express.js', 'Appwrite', 'Firebase', 'Clerk', 'Stripe'],
    label: 'backend & apis',
  },
  {
    philosophy: "data that isn't structured isn't useful.",
    description: "relational or not, structure it right from the start. lately deep in vector search and rag.",
    chips: ['PostgreSQL', 'MongoDB', 'Pinecone', 'Redis', 'Supabase'],
    label: 'data & storage',
  },
  {
    philosophy: "real ml. from training to deployment.",
    description: "shipped actual ai-native apps, not just wrappers. rag pipelines, model integrations — done the work.",
    chips: ['TensorFlow', 'Scikit-learn', 'Keras', 'Pandas', 'NumPy', 'Matplotlib', 'Gemini API'],
    label: 'ai / ml',
  },
]

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
            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group relative py-7 px-4 -mx-4 border-b border-[rgba(255,255,255,0.05)] cursor-default transition-opacity duration-200 ${
                  hoveredStep !== null && hoveredStep !== i ? 'opacity-25' : 'opacity-100'
                }`}
              >
                {/* corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#3a3a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#3a3a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <p className={`font-sans text-sm leading-relaxed transition-colors duration-180 ${
                  hoveredStep === i ? 'text-[#e2e2e2]' : 'text-[#9a9a9a]'
                }`}>
                  {step.philosophy}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right panel — flex column so last card fills remaining height */}
          <div className="flex flex-col gap-3 h-full">
            {/* Row 1: Languages + Frontend */}
            <div className="grid grid-cols-2 gap-3">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className={`glass-card p-6 transition-opacity duration-200 ${
                    hoveredStep !== null && hoveredStep !== i ? 'opacity-20' : 'opacity-100'
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase mb-3">
                    {steps[i].label}
                  </p>
                  {hoveredStep === i ? (
                    <p className="font-sans text-[12px] text-[#6a6a6a] leading-[1.7]">
                      {steps[i].description}
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {steps[i].chips.map((chip) => (
                        <span key={chip} className="glass-chip">{chip}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: Backend + Data */}
            <div className="grid grid-cols-2 gap-3">
              {[2, 3].map((i) => (
                <div
                  key={i}
                  className={`glass-card p-6 transition-opacity duration-200 ${
                    hoveredStep !== null && hoveredStep !== i ? 'opacity-20' : 'opacity-100'
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase mb-3">
                    {steps[i].label}
                  </p>
                  {hoveredStep === i ? (
                    <p className="font-sans text-[12px] text-[#6a6a6a] leading-[1.7]">
                      {steps[i].description}
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {steps[i].chips.map((chip) => (
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
              <p className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase mb-3">
                {steps[4].label}
              </p>
              {hoveredStep === 4 ? (
                <p className="font-sans text-[12px] text-[#6a6a6a] leading-[1.7]">
                  {steps[4].description}
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {steps[4].chips.map((chip) => (
                    <span key={chip} className="glass-chip">{chip}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <ScrollAnimation delay={2} className="mt-12 flex justify-center">
          <Link href="/about" className="bordered-button inline-flex">
            see the full stack
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  )
}
