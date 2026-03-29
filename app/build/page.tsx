'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calendar, Github, ExternalLink, Info, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Footer } from '@/components/footer'
import { projects } from '@/lib/projects'
import { SectionHeading } from '@/components/ui/section-heading'

export default function BuildPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    let result = projects
    if (activeTag) {
      result = result.filter(p => p.stack.includes(activeTag))
    }
    return result
  }, [activeTag])

  // Collect all unique stack tags from all projects
  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(p => p.stack.forEach(t => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  const handleTagClick = (tag: string) => {
    setActiveTag(prev => prev === tag ? null : tag)
  }

  return (
    <>
      {/* Header + Projects Section */}
      <section
        data-section="1"
        className="bg-transparent pt-32 pb-[140px]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading label="builds" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          >
            <h1 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[var(--text-heading)] tracking-[-0.02em] leading-[1.1]">
              Things i&apos;ve built.
            </h1>
            <h2 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[var(--text-ghost)] tracking-[-0.02em] leading-[1.1]">
              The ones that shipped.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="font-sans font-normal text-[clamp(14px,1.8vw,16px)] leading-[1.9] text-[var(--text-muted)] mt-8 max-w-[600px]"
          >
            projects i've shipped over the past couple of years. some for hackathons, some just to learn.
          </motion.p>

          {/* Stack Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap gap-2.5 mt-10 mb-10"
          >
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`filter-tag ${
                  activeTag === tag
                    ? 'filter-tag--active'
                    : 'filter-tag--inactive'
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="filter-tag filter-tag--inactive flex items-center gap-1.5"
              >
                <X size={12} strokeWidth={1.5} />
                clear
              </button>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTag || 'all'}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  className="project-card group flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="card-thumbnail aspect-video bg-[var(--bg-alt)] rounded-t-[10px]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    ) : (
                      <p className="absolute inset-0 flex items-center justify-center font-sans font-bold text-[20px] text-[var(--text-heading)] opacity-[0.06]">
                        {project.name}
                      </p>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 lg:p-6 flex flex-col flex-1">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-semibold text-[17px] text-[var(--text-heading)]">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} strokeWidth={1.5} className="text-[var(--text-label)]" />
                        <span className="font-mono text-[10px] tracking-widest text-[var(--text-label)]">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-[12.5px] text-[var(--text-muted)] mt-1.5 leading-[1.5]">
                      {project.tagline.replace(/\.$/, '')}
                    </p>

                    {/* Spacer to push links to bottom with minimum gap */}
                    <div className="flex-1 min-h-5" />

                    {/* Links */}
                    <div className="flex items-center gap-5 pt-5 border-t border-[var(--border-low)]">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="card-link"
                        >
                          <Github size={13} strokeWidth={1.5} />
                          code
                        </Link>
                      )}
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          className="card-link"
                        >
                          <ExternalLink size={13} strokeWidth={1.5} />
                          live
                        </Link>
                      )}
                      <Link
                        href={`/build/${project.slug}`}
                        className="card-link ml-auto"
                      >
                        <Info size={13} strokeWidth={1.5} />
                        view details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Closer Section */}
      <section
        data-section="2"
        className="section-base"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollAnimation>
            <h2 className="heading-md">There&apos;s more where that came from.</h2>
          </ScrollAnimation>

          <ScrollAnimation delay={1} className="mt-12 flex items-center justify-center w-full">
            <div className="flex-1 max-w-[200px] h-px bg-linear-to-r from-transparent to-[var(--border-strong)] mr-6 hidden md:block" />
            <Link
              href="https://github.com/Garvit-Nag"
              target="_blank"
              className="bordered-button group inline-flex"
            >
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <Github size={14} strokeWidth={1.5} />
                view all on github
              </span>
            </Link>
            <div className="flex-1 max-w-[200px] h-px bg-linear-to-l from-transparent to-[var(--border-strong)] ml-6 hidden md:block" />
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </>
  )
}
