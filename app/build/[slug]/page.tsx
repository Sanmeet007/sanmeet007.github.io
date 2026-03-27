import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, Wrench, ArrowRight } from 'lucide-react'
import { projects, getProjectBySlug } from '@/lib/projects'
import { ProjectDetailClient } from '@/components/build/project-detail-client'
import { Footer } from '@/components/footer'

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link 
          href="/build"
          className="bordered-button text-sm"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          back to projects
        </Link>
      </div>

      {/* Header Section */}
      <section 
        data-section="1"
        className="section-base pt-32"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ProjectDetailClient project={project} />
        </div>
      </section>

      {/* About Section */}
      <section 
        data-section="2"
        className="section-alt"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="font-mono text-xs tracking-[0.15em] text-[#8a8a8a] mb-6">
            about this project
          </p>
          <div className="glass-card p-10 lg:p-12">
            <p className="font-sans text-[15px] leading-[1.9] text-[#9a9a9a]">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Breakdown Section */}
      <section 
        data-section="3"
        className="section-base"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#8a8a8a] mb-6">
            <Wrench size={14} strokeWidth={1.5} />
            built with
          </div>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span key={tech} className="glass-chip text-[11px] px-4 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section 
        data-section="4"
        className="section-alt"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.github && (
              <Link 
                href={project.github}
                target="_blank"
                className="glass-card p-6 flex items-center gap-3 group"
              >
                <Github size={14} strokeWidth={1.5} className="text-[#9a9a9a]" />
                <span className="font-mono text-[11px] tracking-[0.1em] lowercase text-[#9a9a9a] group-hover:text-[#e2e2e2] transition-colors">
                  source code
                </span>
              </Link>
            )}
            {project.live && (
              <Link 
                href={project.live}
                target="_blank"
                className="glass-card p-6 flex items-center gap-3 group"
              >
                <ExternalLink size={14} strokeWidth={1.5} className="text-[#9a9a9a]" />
                <span className="font-mono text-[11px] tracking-[0.1em] lowercase text-[#9a9a9a] group-hover:text-[#e2e2e2] transition-colors">
                  live demo
                </span>
              </Link>
            )}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/build"
              className="bordered-button inline-flex"
            >
              view all projects
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
