'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-widest text-text-muted">
          {project.year}
        </span>
        <span className="w-1 h-1 rounded-full bg-text-label" />
        <span className="font-mono text-[10px] tracking-widest text-text-muted">
          {project.stack.length} technologies
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        className="font-sans font-bold text-[clamp(40px,5vw,68px)] text-text-heading tracking-[-0.02em] mt-4"
      >
        {project.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        className="font-sans text-[16px] text-text-body mt-4 max-w-[560px]"
      >
        {project.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
        className="mt-6"
      >
        <div className="accent-line" />
      </motion.div>
    </>
  )
}
