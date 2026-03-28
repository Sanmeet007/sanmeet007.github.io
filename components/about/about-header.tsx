'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

export function AboutHeader() {
  return (
    <section
      data-section="1"
      className="min-h-[70vh] flex items-center bg-transparent pt-24 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <SectionHeading label="about" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          <h1 className="font-sans font-bold text-[clamp(48px,5.5vw,76px)] text-[#e2e2e2] tracking-[-0.02em] leading-[1.1]">
            The person
          </h1>
          <h2 className="font-sans font-bold text-[clamp(48px,5.5vw,76px)] text-[#303030] tracking-[-0.02em] leading-[1.1] mt-2">
            behind the code.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
          className="max-w-[560px] mt-8"
        >
          <p className="font-sans text-[16px] leading-[1.9] text-[#9a9a9a]">
            i build web apps that are clean, fast, and value-dense — using tech that actually excites me. turning messy problems into stuff people genuinely enjoy. always on the lookout for the next interesting challenge.
          </p>
          <p className="font-sans text-[16px] leading-[1.9] text-[#9a9a9a] mt-4">
            when i&apos;m not building, i&apos;m probably watching football, arguing over tactics, or hoping barça holds it together. (i still believe.)
          </p>
        </motion.div>
      </div>
    </section>
  )
}
