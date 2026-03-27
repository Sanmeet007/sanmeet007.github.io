'use client'

import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

import { BackgroundCircles } from '@/components/background-circles'

export function HeroSection() {
  return (
    <section
      data-section="1"
      className="relative min-h-screen flex items-center justify-center bg-[#080808] overflow-hidden"
      suppressHydrationWarning
    >
      <BackgroundCircles />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center min-h-screen">
          <div className="flex flex-col items-start justify-center">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="font-sans font-normal text-2xl text-[#6a6a6a]"
              suppressHydrationWarning
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
              className="font-sans font-bold text-[clamp(64px,9vw,104px)] text-[#e2e2e2] tracking-[-0.025em] leading-[1.1] mt-3"
              suppressHydrationWarning
            >
              Garvit Nag
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 font-mono text-sm tracking-[0.18em] text-[#6a6a6a] lowercase"
              suppressHydrationWarning
            >
              full-stack developer · chandigarh, india
            </motion.p>

            <div className="h-10" />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
              className="font-sans font-normal text-lg leading-[1.9] text-[#9a9a9a] max-w-[500px]"
              suppressHydrationWarning
            >
              i build innovative web applications with clean, functional code — occasionally pausing to have existential conversations with my console logs.
            </motion.p>

            <div className="h-8" />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
              className="flex items-center gap-4 flex-wrap"
              suppressHydrationWarning
            >
              <Link href="/about" className="bordered-button">
                learn more
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link href="/resume.pdf" target="_blank" className="bordered-button">
                resume
                <FileText size={16} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
            className="hidden lg:flex flex-col justify-center items-end h-full gap-10"
            suppressHydrationWarning
          >
            <motion.div 
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-[340px] text-right group relative py-2"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#3a3a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#3a3a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-xs tracking-[0.2em] text-[#8a8a8a] uppercase mb-4 drop-shadow-sm flex items-center justify-end gap-3">
                <span className="w-6 h-px bg-[rgba(255,255,255,0.15)] block" />
                passion
              </p>
              <p className="font-sans font-medium text-[17px] text-[#c8c8c8] tracking-[-0.01em] leading-relaxed">
                Engineer passionate about design, detail, and doing things right.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-[340px] text-right group relative py-2"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#3a3a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#3a3a3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-xs tracking-[0.2em] text-[#8a8a8a] uppercase mb-4 drop-shadow-sm flex items-center justify-end gap-3">
                <span className="w-6 h-px bg-[rgba(255,255,255,0.15)] block" />
                building
              </p>
              <p className="font-sans font-medium text-[15px] text-[#c8c8c8] tracking-[-0.01em] leading-relaxed">
                Crafting tools I'd actually use. No fluff. Just clean, purposeful builds that feel good.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-[340px] text-right group relative py-2"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#4a4a4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#4a4a4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-xs tracking-[0.2em] text-[#8a8a8a] uppercase mb-4 flex items-center justify-end gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="w-6 h-px bg-[rgba(255,255,255,0.15)] block" />
                currently
              </p>
              <p className="font-sans font-medium text-[16px] text-[#e2e2e2] tracking-[-0.01em] leading-relaxed">
                All set. Ready to ship things that are well-crafted.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.6 }}
        className="absolute bottom-8 left-6 font-mono text-xs tracking-[0.1em]"
        suppressHydrationWarning
      >
        © garvit nag 2026
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.6 }}
        className="absolute bottom-8 right-6 font-mono text-xs tracking-[0.1em]"
        suppressHydrationWarning
      >
        garvit1505@gmail.com
      </motion.p>
    </section>
  )
}
