'use client'

import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
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
        <span className="glass-chip">{project.category}</span>
        <span className="font-mono text-[10px] tracking-[0.1em] text-[#4a4a4a]">
          {project.year}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        className="font-sans font-bold text-[clamp(40px,5vw,68px)] text-[#e2e2e2] tracking-[-0.02em] mt-4"
      >
        {project.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        className="font-sans text-[16px] text-[#9a9a9a] mt-4"
      >
        {project.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
        className="flex flex-wrap gap-2 mt-6"
      >
        {project.stack.map((tech) => (
          <span key={tech} className="glass-chip">
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.4 }}
        className="flex items-center gap-4 mt-8"
      >
        {project.github && (
          <Link 
            href={project.github}
            target="_blank"
            className="text-link"
          >
            <Github size={14} strokeWidth={1.5} />
            source code
          </Link>
        )}
        {project.live && (
          <Link 
            href={project.live}
            target="_blank"
            className="text-link"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            live demo
          </Link>
        )}
      </motion.div>
    </>
  )
}
