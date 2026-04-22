'use client'

import Link from 'next/link'
import { ArrowRight, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

import { BackgroundCircles } from '@/components/background-circles'

export function HeroSection() {
  return (
    <section
      data-section="1"
      className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden"
      suppressHydrationWarning
    >
      <BackgroundCircles />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center min-h-screen">
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="font-sans font-normal text-2xl text-[var(--text-muted)]"
              suppressHydrationWarning
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
              className="font-sans font-bold text-[clamp(48px,9vw,84px)] text-[var(--text-heading)] tracking-[-0.025em] leading-[1.1] mt-3"
              suppressHydrationWarning
            >
              Sanmeet Singh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 font-mono text-sm tracking-[0.18em] text-[var(--text-muted)] lowercase"
              suppressHydrationWarning
            >
              full-stack ai engineer · mohali, india
            </motion.p>

            <div className="h-10" />

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
              className="font-sans font-normal text-lg leading-[1.9] text-[var(--text-body)] max-w-[500px]"
              suppressHydrationWarning
            >
              I build smart applications with clean, functional code, occasionally pausing to wonder why the model hallucinated again.
            </motion.p>

            <div className="h-8" />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
              className="flex items-center gap-4 flex-wrap justify-center lg:justify-start"
              suppressHydrationWarning
            >
              <button onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} className="bordered-button group">
                <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  learn more
                  <ArrowRight size={16} strokeWidth={1.5} />
                </span>
              </button>
              <Link href="/sanmeet-resume.pdf" target="_blank" className="bordered-button group">
                <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  resume
                  <FileText size={16} strokeWidth={1.5} />
                </span>
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
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-4 drop-shadow-sm flex items-center justify-end gap-3">
                <span className="w-6 h-px bg-[var(--border-strong)] block" />
                passion
              </p>
              <p className="font-sans font-medium text-[17px] text-[var(--text-strong)] tracking-[-0.01em] leading-relaxed">
                Engineer passionate about intelligent systems, clean code, and thoughtful design.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-[340px] text-right group relative py-2"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-4 drop-shadow-sm flex items-center justify-end gap-3">
                <span className="w-6 h-px bg-[var(--border-strong)] block" />
                building
              </p>
              <p className="font-sans font-medium text-[15px] text-[var(--text-strong)] tracking-[-0.01em] leading-relaxed">
                Training models, reading research, and crafting products that feel right.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-[340px] text-right group relative py-2"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--text-label)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-4 flex items-center justify-end gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="w-6 h-px bg-[var(--border-strong)] block" />
                currently
              </p>
              <p className="font-sans font-medium text-[16px] text-[var(--text-heading)] tracking-[-0.01em] leading-relaxed">
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
        className="absolute bottom-8 left-6 font-mono text-xs tracking-widest hidden sm:block"
        suppressHydrationWarning
      >
        © garvit nag 2026
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.6 }}
        className="absolute bottom-8 right-6 font-mono text-xs tracking-widest hidden sm:block"
        suppressHydrationWarning
      >
        garvit1505@gmail.com
      </motion.p>
    </section>
  )
}
