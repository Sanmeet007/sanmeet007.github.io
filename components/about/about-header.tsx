'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import TiltedCard from '@/components/animate-ui/components/tilted-card'

export function AboutHeader() {
  return (
    <section
      data-section="1"
      className="min-h-[85vh] flex items-center bg-transparent pt-24 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <SectionHeading label="about" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          <h1 className="font-sans font-bold text-[clamp(48px,5.5vw,76px)] text-[#e2e2e2] tracking-[-0.02em] leading-[1.1]">
            The person
          </h1>
          <h2 className="font-sans font-bold text-[clamp(48px,5.5vw,76px)] text-[#303030] tracking-[-0.02em] leading-[1.1] mt-2">
            behind the code.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
          className="max-w-[560px] mt-8"
        >
          <p className="font-sans text-[16px] leading-[1.9] text-[#9a9a9a]">
            i build web apps that are clean, fast, and value-dense. using tech that actually excites me. turning messy problems into stuff people genuinely enjoy. always on the lookout for the next interesting challenge.
          </p>
          <p className="font-sans text-[16px] leading-[1.9] text-[#9a9a9a] mt-4">
            when i&apos;m not building, i&apos;m probably watching football, arguing over tactics, or hoping barça holds it together. (i still believe.)
          </p>
        </motion.div>
        </div>

        {/* Right side interactive card */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.5 }}
           className="relative flex justify-center lg:justify-end w-full lg:w-auto shrink-0"
        >
          <TiltedCard
            imageSrc="/pfp.png"
            altText="Garvit Nag - Engineer"
            captionText="gn. / engineer"
            containerHeight="450px"
            containerWidth="350px"
            imageHeight="450px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-[2px] p-6 sm:p-8 flex flex-col justify-between rounded-[15px] border border-[rgba(255,255,255,0.08)]">
                <div>
                  <h3 className="font-sans text-xl font-bold text-[#e2e2e2] tracking-tight">gn.</h3>
                  <p className="font-sans text-[13px] text-[#8a8a8a] mt-2 mb-6 leading-relaxed lowercase">
                    Powered by unhealthy amounts of caffeine and console logs.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[11px] text-[#6a6a6a]">LinkedIn</span>
                      <a href="https://linkedin.com/in/garvit-nag" target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-[#d2d2d2] hover:text-white transition-colors flex items-center justify-between group">
                        linkedin.com/in/garvit-nag
                        <ArrowRight size={14} className="text-[#6a6a6a] group-hover:text-white transition-colors" />
                      </a>
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[11px] text-[#6a6a6a]">GitHub</span>
                      <a href="https://github.com/Garvit-Nag" target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-[#d2d2d2] hover:text-white transition-colors flex items-center justify-between group">
                        github.com/Garvit-Nag
                        <ArrowRight size={14} className="text-[#6a6a6a] group-hover:text-white transition-colors" />
                      </a>
                    </div>

                    <div className="flex flex-col gap-1.5 border-b border-[rgba(255,255,255,0.05)] pb-6">
                      <span className="font-sans text-[11px] text-[#6a6a6a]">X</span>
                      <a href="https://x.com/garvit1505" target="_blank" rel="noopener noreferrer" className="font-sans text-[14px] text-[#d2d2d2] hover:text-white transition-colors flex items-center justify-between group">
                        x.com/garvit1505
                        <ArrowRight size={14} className="text-[#6a6a6a] group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="w-full mt-4 py-3.5 px-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.25)] transition-all flex items-center justify-center gap-2 group">
                  <span className="text-[13px] font-semibold text-[#e2e2e2]">let's talk</span>
                  <ArrowRight size={15} strokeWidth={2} className="text-[#e2e2e2] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  )
}
