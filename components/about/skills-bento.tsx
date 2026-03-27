'use client'

import { Layers } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'

export function SkillsBento() {
  return (
    <section 
      data-section="2"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading 
            title="what i work with" 
            icon={<Layers size={18} strokeWidth={1.5} />} 
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase">tools of the trade.</p>
        </ScrollAnimation>

        {/* Two-column asymmetric layout - 55/45 split */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4 mt-12">
          {/* Left column - large glass panel */}
          <ScrollAnimation delay={2}>
            <div className="glass-card p-8 h-full flex flex-col gap-6">
              <div>
                <p className="font-mono text-xs tracking-[0.15em] text-[#8a8a8a] mb-2 uppercase">core stack</p>
                <p className="font-sans font-normal text-sm leading-relaxed text-[#9a9a9a]">
                  building fast interfaces and reliable backend architectures.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'Flask'].map((tech) => (
                    <span key={tech} className="glass-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right column - two stacked panels */}
          <div className="flex flex-col gap-4">
            {/* Top panel */}
            <ScrollAnimation delay={2} className="flex-1">
              <div className="glass-card p-8 h-full">
                <p className="font-mono text-xs tracking-[0.15em] text-[#8a8a8a] mb-3 uppercase">data & storage</p>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'MongoDB', 'Appwrite', 'Pandas'].map((tech) => (
                    <span key={tech} className="glass-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Bottom panel */}
            <ScrollAnimation delay={3} className="flex-1">
              <div className="glass-card p-8 h-full">
                <p className="font-mono text-xs tracking-[0.15em] text-[#8a8a8a] mb-3 uppercase">tooling & styling</p>
                <div className="flex flex-wrap gap-2">
                  {['Tailwind CSS', 'Git'].map((tech) => (
                    <span key={tech} className="glass-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
