'use client'

import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'

export function ForwardNudge() {
  return (
    <section 
      data-section="6"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <ScrollAnimation>
          <h2 className="heading-md">curious what i&apos;ve built?</h2>
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <Link href="/build" className="bordered-button">
              explore my work
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link href="/contact" className="bordered-button">
              get in touch
              <Mail size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
