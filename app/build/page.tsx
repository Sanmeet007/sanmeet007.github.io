'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layers, Calendar, Github, ExternalLink, Info, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { Footer } from '@/components/footer'
import { projects, categories } from '@/lib/projects'
import { SectionHeading } from '@/components/ui/section-heading'

export default function BuildPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Header Section */}
      <section 
        data-section="1"
        className="section-base pt-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading 
              title="selected work" 
              icon={<Layers size={18} strokeWidth={1.5} />} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase"
          >
            things i&apos;ve built.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="font-sans font-normal text-[clamp(14px,1.8vw,16px)] leading-[1.9] text-[#6a6a6a] mt-6 max-w-[600px]"
          >
            a collection of projects ranging from ai systems to saas platforms — all built because they seemed genuinely useful.
          </motion.p>

          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-[10px] tracking-[0.1em] lowercase px-3 py-1.5 rounded transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.45)] text-[#e2e2e2]'
                    : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-[#6a6a6a] hover:border-[rgba(255,255,255,0.16)]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section 
        data-section="2"
        className="section-alt"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  className="glass-card group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#0d0d0d] rounded-t-[10px] overflow-hidden transition-all duration-300 group-hover:brightness-150">
                    <p className="absolute inset-0 flex items-center justify-center font-sans font-bold text-[24px] text-[#e2e2e2] opacity-[0.06]">
                      {project.name}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-7">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[0.1em] text-[#6a6a6a] opacity-40 lowercase">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} strokeWidth={1.5} className="text-[#4a4a4a]" />
                        <span className="font-mono text-[10px] tracking-[0.1em] text-[#4a4a4a]">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-sans font-semibold text-[19px] text-[#e2e2e2] mt-2">
                      {project.name}
                    </h3>
                    <p className="font-sans text-[13px] text-[#6a6a6a] mt-1">
                      {project.tagline}
                    </p>

                    {/* Stack chips */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.stack.map((tech) => (
                        <span key={tech} className="glass-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank"
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] lowercase opacity-40 hover:opacity-100 transition-opacity"
                        >
                          <Github size={14} strokeWidth={1.5} />
                          code
                        </Link>
                      )}
                      {project.live && (
                        <Link 
                          href={project.live} 
                          target="_blank"
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] lowercase opacity-40 hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink size={14} strokeWidth={1.5} />
                          live
                        </Link>
                      )}
                      <Link 
                        href={`/build/${project.slug}`}
                        className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] lowercase opacity-40 hover:opacity-100 transition-opacity"
                      >
                        <Info size={14} strokeWidth={1.5} />
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
        data-section="3"
        className="section-base"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollAnimation>
            <h2 className="heading-md">there&apos;s more where that came from.</h2>
          </ScrollAnimation>

          <ScrollAnimation delay={1}>
            <Link 
              href="https://github.com/Garvit-Nag"
              target="_blank"
              className="bordered-button inline-flex"
            >
              <Github size={14} strokeWidth={1.5} />
              view all on github
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </>
  )
}
