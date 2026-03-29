'use client'

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-base)] px-6">
      <div className="text-center max-w-[480px]">
        {/* Ghosted 404 */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-mono text-[clamp(100px,20vw,180px)] font-bold text-[var(--text-ghost)] leading-none select-none tracking-tighter"
        >
          404
        </motion.p>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
          className="mt-2"
        >
          <h1 className="font-sans font-semibold text-[22px] text-[var(--text-heading)] tracking-[-0.01em]">
            page not found
          </h1>
          <p className="font-mono text-[12px] tracking-widest text-[var(--text-label)] mt-3 leading-relaxed">
            the route you&apos;re looking for doesn&apos;t exist,<br />
            was moved, or you mistyped something.
          </p>
        </motion.div>

        {/* Terminal-style hint */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
          className="mt-8 inline-block border border-[var(--border-low)] rounded-lg px-5 py-3 bg-[var(--surface-subtle)]"
        >
          <p className="font-mono text-[11px] text-[var(--text-label)]">
            <span className="text-[var(--text-muted)]">$</span> cd ~/home <span className="animate-pulse">▌</span>
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="bordered-button group"
          >
            <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              <Home size={14} strokeWidth={1.5} />
              go home
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="bordered-button group"
          >
            <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              <ArrowLeft size={14} strokeWidth={1.5} />
              go back
            </span>
          </button>
        </motion.div>

        {/* Subtle bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <div className="w-8 h-px bg-[var(--border-rest)]" />
          <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--text-ghost)] uppercase">lost in the void</span>
          <div className="w-8 h-px bg-[var(--border-rest)]" />
        </motion.div>
      </div>
    </div>
  )
}
