'use client'

import { User } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'

export function AboutHeader() {
  return (
    <section 
      data-section="1"
      className="min-h-[70vh] flex items-center bg-[#080808] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <SectionHeading 
            title="about" 
            icon={<User size={18} strokeWidth={1.5} />} 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase"
        >
          the person behind the code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
          className="max-w-[560px] mt-6"
        >
          <p className="font-sans text-[16px] leading-[1.9] text-[#9a9a9a]">
            i build web apps that are clean, fast, and make sense — using tech that actually excites me. turning messy problems into stuff people genuinely enjoy using is my favorite kind of challenge. always on the lookout for new ideas and challenges.
          </p>
          <p className="font-sans text-[16px] leading-[1.9] text-[#9a9a9a] mt-4">
            when i'm not coding, i'm probably watching football, arguing over tactics, or hoping barça doesn't bottle it (and yeah, i still believe in spurs).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
