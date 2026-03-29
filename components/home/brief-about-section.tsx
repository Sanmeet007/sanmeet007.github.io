'use client'

import Link from 'next/link'
import { ArrowRight, ChevronRight, Mail } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'
import { SNAPSHOTS } from '@/lib/constants'

export function BriefAboutSection() {
  return (
    <section
      data-section="5"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: heading + CTAs */}
          <div className="text-center lg:text-left">
            <ScrollAnimation>
              <SectionHeading label="the person" />
            </ScrollAnimation>

            <ScrollAnimation delay={1}>
              <div className="max-w-[520px] mx-auto lg:mx-0">
                <h2 className="font-sans font-bold text-[clamp(36px,4.5vw,58px)] tracking-[-0.02em] leading-[1.1] text-text-heading">
                  The person behind the code.
                </h2>
                <h3 className="font-sans font-bold text-[clamp(36px,4.5vw,58px)] tracking-[-0.02em] leading-[1.1] text-text-ghost">
                  The story so far.
                </h3>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right: plain underlined items with geometric accents + scale hover */}
          <ScrollAnimation delay={1} className="block">
            <div className="flex flex-col">
              {SNAPSHOTS.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 py-5 border-b border-border-low cursor-default hover:translate-x-1 transition-transform duration-200"
                >
                  <ChevronRight size={14} strokeWidth={2} className="text-text-label shrink-0 group-hover:text-text-body transition-colors duration-200" />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-text-muted uppercase w-24 shrink-0 group-hover:text-text-secondary transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="font-sans text-[15px] text-text-secondary ml-auto group-hover:text-text-heading transition-colors duration-200">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Centered CTAs */}
        <ScrollAnimation delay={2} className="mt-20 flex items-center justify-center w-full">
          <div className="flex-1 max-w-[200px] h-px bg-linear-to-r from-transparent to-border-strong mr-6 hidden md:block" />
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/about" className="bordered-button group">
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                read the full story
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/contact" className="bordered-button group">
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                get in touch
                <Mail size={14} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
          <div className="flex-1 max-w-[200px] h-px bg-linear-to-l from-transparent to-border-strong ml-6 hidden md:block" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
