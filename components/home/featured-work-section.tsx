'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Github, ExternalLink } from 'lucide-react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { getFeaturedProjects } from '@/lib/projects'
import { SectionHeading } from '@/components/ui/section-heading'

export function FeaturedWorkSection() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section 
      id="featured"
      data-section="3"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollAnimation className="mb-8">
          <SectionHeading
            title="featured work"
            label="craft"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-12 lowercase">
            a couple things i&apos;m proud of.
          </p>
        </ScrollAnimation>

        {/* Project Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <div className="glass-card group">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="font-mono text-[9px] tracking-[0.1em] border border-[rgba(255,255,255,0.15)] rounded px-2 py-1 text-[#9a9a9a]">
                    featured
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#e2e2e2] pulse-dot" />
                </div>

                {/* Thumbnail */}
                <div className="relative aspect-video bg-[#0d0d0d] rounded-t-[12px] overflow-hidden">
                  <p className="absolute inset-0 flex items-center justify-center font-sans font-bold text-[32px] text-[#e2e2e2] opacity-[0.06]">
                    {project.name}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-7">
                  <h3 className="font-sans font-bold text-[20px] text-[#e2e2e2]">
                    {project.name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#6a6a6a] mt-1">
                    {project.tagline}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} strokeWidth={1.5} className="text-[#4a4a4a]" />
                      <span className="font-mono text-[10px] tracking-[0.1em] text-[#4a4a4a]">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.stack.map((tech) => (
                        <span key={tech} className="glass-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
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
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <ScrollAnimation delay={2} className="mt-16 flex items-center justify-center w-full">
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.15)] mr-6 hidden md:block" />
          <Link href="/build" className="bordered-button group inline-flex">
            <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              view all work
              <ArrowRight size={14} strokeWidth={1.5} />
            </span>
          </Link>
          <div className="flex-1 max-w-[200px] h-px bg-gradient-to-l from-transparent to-[rgba(255,255,255,0.15)] ml-6 hidden md:block" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
