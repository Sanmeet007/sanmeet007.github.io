import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Wrench,
  ArrowRight,
  Calendar,
  Layers,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projects";
import { ProjectDetailClient } from "@/components/build/project-detail-client";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link href="/build" className="bordered-button text-sm">
          <ArrowLeft size={14} strokeWidth={1.5} />
          back to projects
        </Link>
      </div>

      {/* Hero Section with Project Image */}
      <section data-section="1" className="relative pt-20 min-h-[60vh]">
        {/* Background Image */}
        {project.image && (
          <div className="absolute inset-0 z-0">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top opacity-30"
            />
            <div className="detail-hero-overlay absolute inset-0" />
          </div>
        )}

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 pt-24 pb-16">
          <ProjectDetailClient project={project} />
        </div>
      </section>

      {/* Project Details Card */}
      <section data-section="2" className="relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="detail-info-card p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              {/* Year */}
              <div className="shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar
                    size={14}
                    strokeWidth={1.5}
                    className="text-[var(--text-label)]"
                  />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-label)] uppercase">
                    year
                  </span>
                </div>
                <p className="font-sans text-[15px] text-[var(--text-strong)]">
                  {project.year}
                </p>
              </div>

              {/* Stack */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Layers
                    size={14}
                    strokeWidth={1.5}
                    className="text-[var(--text-label)]"
                  />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-label)] uppercase">
                    stack
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="glass-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[var(--border-low)]">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="bordered-button group"
                >
                  <Github size={14} strokeWidth={1.5} />
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    source code
                  </span>
                </Link>
              )}
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  className="bordered-button group"
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    live demo
                  </span>
                </Link>
              )}
              {project.confidential && (
                <span>
                  <ExternalLink size={14} strokeWidth={1.5} />
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    confidential
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section data-section="3" className="section-base">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="accent-line" />
            <p className="font-mono text-xs tracking-[0.15em] text-[var(--text-secondary)]">
              about this project
            </p>
          </div>

          <div className="relative">
            {/* Decorative corner */}
            <div className="absolute -left-3 top-0 w-6 h-full border-l border-[var(--border-low)]" />

            <div className="pl-6">
              <p className="font-sans text-[15px] leading-loose text-[var(--text-body)] max-w-[680px]">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Breakdown Section */}
      <section data-section="4" className="section-alt">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="accent-line" />
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[var(--text-secondary)]">
              <Wrench size={14} strokeWidth={1.5} />
              built with
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {project.stack.map((tech) => (
              <div
                key={tech}
                className="detail-info-card p-4 flex items-center gap-3 group hover:border-[var(--border-accent)] transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--border-strong)] group-hover:bg-[var(--border-active)] transition-colors" />
                <span className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-body)] group-hover:text-[var(--text-strong)] transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section data-section="5" className="section-base">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <Link href="/build" className="bordered-button inline-flex">
              view all projects
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
