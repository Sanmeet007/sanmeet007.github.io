'use client'

import { useState } from 'react'
import { Terminal, Monitor, ArrowRight, Database, Sun, Code2 } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

const skillRows = [
  {
    icon: Terminal,
    name: 'Languages',
    hint: 'foundation',
    chips: [
      { label: 'Python', hi: true },
      { label: 'TypeScript', hi: true },
      { label: 'JavaScript', hi: true },
      { label: 'SQL', hi: false },
      { label: 'C / C++', hi: false },
    ],
  },
  {
    icon: Monitor,
    name: 'Frontend',
    hint: 'what users see',
    chips: [
      { label: 'Next.js', hi: true },
      { label: 'React', hi: true },
      { label: 'Tailwind CSS', hi: true },
      { label: 'Framer Motion', hi: false },
    ],
  },
  {
    icon: ArrowRight,
    name: 'Backend & APIs',
    hint: 'what powers it',
    chips: [
      { label: 'FastAPI', hi: true },
      { label: 'Flask', hi: true },
      { label: 'Express.js', hi: false },
      { label: 'Appwrite', hi: false },
      { label: 'Firebase', hi: false },
      { label: 'Clerk', hi: false },
      { label: 'Stripe', hi: false },
    ],
  },
  {
    icon: Database,
    name: 'Data & Storage',
    hint: 'persistence layer',
    chips: [
      { label: 'PostgreSQL', hi: true },
      { label: 'MongoDB', hi: true },
      { label: 'Pinecone', hi: true },
      { label: 'Redis', hi: false },
      { label: 'Supabase', hi: false },
    ],
  },
  {
    icon: Sun,
    name: 'AI / ML',
    hint: 'intelligence',
    chips: [
      { label: 'TensorFlow', hi: true },
      { label: 'Scikit-learn', hi: true },
      { label: 'Keras', hi: false },
      { label: 'Pandas', hi: false },
      { label: 'NumPy', hi: false },
      { label: 'Matplotlib', hi: false },
      { label: 'Gemini API', hi: false },
    ],
  },
  {
    icon: Code2,
    name: 'DevOps & Tooling',
    hint: 'ship it',
    chips: [
      { label: 'Docker', hi: true },
      { label: 'Git / GitHub', hi: true },
      { label: 'AWS', hi: false },
      { label: 'Vercel', hi: false },
      { label: 'Linux / Unix', hi: false },
      { label: 'VS Code', hi: false },
      { label: 'PowerShell', hi: false },
    ],
  },
]

export function SkillsBento() {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null)

  return (
    <section
      data-section="2"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading
            title="What I Work With"
            label="toolkit"
          />
          <p className="font-mono text-sm text-[#6a6a6a] -mt-4 mb-10 tracking-[0.04em]">
            tools of the trade.
          </p>
        </ScrollAnimation>

        <div className="mt-6 border-t border-[rgba(255,255,255,0.1)]">
          {skillRows.map((row) => (
            <div
              key={row.name}
              onMouseEnter={() => setHoveredCat(row.name)}
              onMouseLeave={() => setHoveredCat(null)}
              className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b border-[rgba(255,255,255,0.06)] transition-opacity duration-200 cursor-default ${
                hoveredCat !== null && hoveredCat !== row.name ? 'opacity-30' : 'opacity-100'
              }`}
            >
              {/* Left — icon + label */}
              <div className="flex items-center gap-3 py-5 sm:pr-6 sm:border-r sm:border-[rgba(255,255,255,0.06)]">
                <div className={`w-[34px] h-[34px] flex-shrink-0 border rounded-lg flex items-center justify-center transition-all duration-180 ${
                  hoveredCat === row.name
                    ? 'border-[rgba(255,255,255,0.28)] text-[#c8c8c8]'
                    : 'border-[rgba(255,255,255,0.12)] text-[#6a6a6a]'
                }`}>
                  <row.icon size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <p className={`font-sans font-semibold text-[13px] transition-colors duration-180 ${
                    hoveredCat === row.name ? 'text-[#e2e2e2]' : 'text-[#c8c8c8]'
                  }`}>
                    {row.name}
                  </p>
                  <p className={`font-mono text-[10px] tracking-[0.1em] mt-0.5 transition-colors duration-180 ${
                    hoveredCat === row.name ? 'text-[#787878]' : 'text-[#4a4a4a]'
                  }`}>
                    {row.hint}
                  </p>
                </div>
              </div>

              {/* Right — chips */}
              <div className="flex flex-wrap items-center gap-2.5 py-5 sm:pl-7">
                {row.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`font-mono text-[11px] tracking-[0.08em] border rounded px-2.5 py-1.5 transition-all duration-150 ${
                      chip.hi
                        ? hoveredCat === row.name
                          ? 'border-[rgba(255,255,255,0.22)] text-[#e2e2e2] bg-[rgba(255,255,255,0.06)]'
                          : 'border-[rgba(255,255,255,0.1)] text-[#b0b0b0] bg-[rgba(255,255,255,0.03)]'
                        : hoveredCat === row.name
                          ? 'border-[rgba(255,255,255,0.1)] text-[#9a9a9a] bg-[rgba(255,255,255,0.02)]'
                          : 'border-[rgba(255,255,255,0.06)] text-[#6a6a6a]'
                    }`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
