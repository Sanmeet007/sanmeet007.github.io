'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Calendar } from 'lucide-react'
import { PiPaperPlaneTilt, PiEnvelopeSimple } from 'react-icons/pi'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/ui/section-heading'

const contactLinks = [
  {
    icon: Github,
    label: 'github',
    value: 'Garvit-Nag',
    href: 'https://github.com/Garvit-Nag'
  },
  {
    icon: PiEnvelopeSimple,
    label: 'email',
    value: 'garvit1505@gmail.com',
    href: 'mailto:garvit1505@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'linkedin',
    value: 'garvit-nag',
    href: 'https://linkedin.com/in/garvit-nag'
  },
  {
    icon: Instagram,
    label: 'instagram',
    value: '@garwiitt',
    href: 'https://instagram.com/garwiitt'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <>
      {/* Header Section */}
      <section 
        data-section="1"
        className="min-h-[60vh] flex items-center bg-transparent pt-24 pb-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading label="reach out" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          >
            <h1 className="font-sans font-bold text-[clamp(48px,5.5vw,76px)] text-[#e2e2e2] tracking-[-0.02em] leading-[1.1]">
              Ready to collaborate?
            </h1>
            <h2 className="font-sans font-bold text-[clamp(48px,5.5vw,76px)] text-[#303030] tracking-[-0.02em] leading-[1.1]">
              I&apos;d love to hear from you.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="mt-10 max-w-[540px]"
          >
            <p className="font-sans text-base leading-[1.9] text-[#9a9a9a]">
              currently available and actively exploring what&apos;s next. full-time roles, meaningful projects, and the right collaborations.
            </p>
            <p className="font-sans text-base leading-[1.9] text-[#9a9a9a] mt-3">
              if you&apos;re building something worth caring about, let&apos;s talk. i respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links + Form Section */}
      <section 
        data-section="2"
        className="section-alt"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Left - Contact Links + Schedule */}
            <div className="flex flex-col">
              <ScrollAnimation>
                {contactLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5 border-b border-[rgba(255,255,255,0.08)]"
                  >
                    <div className="border border-[rgba(255,255,255,0.15)] rounded-lg p-2.5 flex items-center justify-center h-10 w-10 flex-shrink-0 group-hover:border-[rgba(255,255,255,0.3)] group-hover:bg-[rgba(255,255,255,0.04)] transition-all duration-180">
                      <link.icon size={16} strokeWidth={1.5} className="text-[#9a9a9a]" />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-[#6a6a6a] uppercase">
                      {link.label}
                    </span>
                    <span className="font-sans font-normal text-sm text-[#d0d0d0] group-hover:text-[#e2e2e2] group-hover:translate-x-2 transition-all duration-180 ml-auto">
                      {link.value}
                    </span>
                  </Link>
                ))}
              </ScrollAnimation>

              {/* Schedule a meeting — fills remaining height */}
              <ScrollAnimation delay={1} className="flex-1 flex flex-col mt-5">
                <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="border border-[rgba(255,255,255,0.15)] rounded-lg p-2 flex items-center justify-center h-9 w-9 flex-shrink-0">
                      <Calendar size={15} strokeWidth={1.5} className="text-[#9a9a9a]" />
                    </div>
                    <h3 className="font-sans font-semibold text-[16px] text-[#d8d8d8] tracking-[-0.01em]">
                      Schedule a meeting
                    </h3>
                  </div>

                  <p className="font-sans text-[13px] text-[#7a7a7a] leading-[1.8] mb-6">
                    if a message doesn&apos;t cut it, let&apos;s put something on the calendar. a focused conversation beats a hundred back-and-forths.
                  </p>

                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 font-sans text-[13px] text-[#3a3a3a] border border-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5 cursor-not-allowed select-none">
                      <Calendar size={13} strokeWidth={1.5} />
                      Find a time — coming soon
                    </span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right - Form in glass container */}
            <ScrollAnimation delay={1}>
              <div className="glass-card overflow-hidden">
                {/* Header */}
                <div className="px-6 pt-6 pb-5 border-b border-[rgba(255,255,255,0.06)]">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[#787878] uppercase mb-2">
                    write
                  </p>
                  <h3 className="font-sans font-semibold text-xl text-[#e2e2e2]">
                    Send a message
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="px-6 pt-6 space-y-5">
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase block mb-2">
                        name
                      </label>
                      <input
                        type="text"
                        placeholder="your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase block mb-2">
                        email
                      </label>
                      <input
                        type="email"
                        placeholder="your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase block mb-2">
                        subject
                      </label>
                      <input
                        type="text"
                        placeholder="what's this about"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-input"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[#6a6a6a] uppercase block mb-2">
                        message
                      </label>
                      <textarea
                        placeholder="what's on your mind"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input min-h-[80px] resize-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-5">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg py-3 font-sans text-sm text-[#c8c8c8] hover:border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.04)] hover:text-[#e2e2e2] transition-all duration-200"
                    >
                      <PiPaperPlaneTilt size={16} />
                      send it
                    </button>
                  </div>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
