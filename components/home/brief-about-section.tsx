'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

const snapshots = [
  { label: 'building', value: 'something new' },
  { label: 'into lately', value: 'agents & llm tooling' },
  { label: 'fueled by', value: 'football & late nights' },
]

export function BriefAboutSection() {
  return (
    <section
      data-section="5"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: heading + CTAs */}
          <div>
            <ScrollAnimation>
              <SectionHeading label="the person" />
            </ScrollAnimation>

            <ScrollAnimation delay={1}>
              <div className="max-w-[520px]">
                <h2 className="font-sans font-bold text-[clamp(36px,4.5vw,58px)] tracking-[-0.02em] leading-[1.1] text-[#e2e2e2]">
                  The person behind the code.
                </h2>
                <h3 className="font-sans font-bold text-[clamp(36px,4.5vw,58px)] tracking-[-0.02em] leading-[1.1] text-[#303030]">
                  The story so far.
                </h3>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right: plain underlined items with geometric accents + scale hover */}
          <ScrollAnimation delay={1} className="hidden lg:block">
            <div className="flex flex-col">
              {snapshots.map((item, i) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 py-5 border-b border-[rgba(255,255,255,0.07)] cursor-default hover:translate-x-1 transition-transform duration-200"
                >
                  <ChevronRight size={14} strokeWidth={2} className="text-[#5a5a5a] flex-shrink-0 group-hover:text-[#9a9a9a] transition-colors duration-200" />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#6a6a6a] uppercase w-24 flex-shrink-0 group-hover:text-[#8a8a8a] transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="font-sans text-[15px] text-[#a0a0a0] ml-auto group-hover:text-[#e2e2e2] transition-colors duration-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Centered CTAs */}
        <ScrollAnimation delay={2} className="mt-20 flex items-center justify-center w-full">
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.15)] mr-6 hidden md:block" />
          <div className="flex gap-4">
            <Link href="/about" className="bordered-button group">
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                read the full story
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/contact" className="bordered-button group">
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                get in touch
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-l from-transparent to-[rgba(255,255,255,0.15)] ml-6 hidden md:block" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
