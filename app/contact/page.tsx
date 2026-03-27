'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react'
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
    icon: Mail,
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
    icon: Twitter,
    label: 'twitter',
    value: '@garwiitt',
    href: 'https://twitter.com/garwiitt'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        className="min-h-[60vh] flex items-center bg-[#080808] pt-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading 
              title="contact" 
              icon={<Mail size={18} strokeWidth={1.5} />} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-8 lowercase"
          >
            let&apos;s build something.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="font-sans font-normal text-base text-[#9a9a9a] mt-8"
          >
            open to freelance, collabs, and interesting problems. i respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Links + Form Section */}
      <section 
        data-section="2"
        className="section-alt"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Links */}
            <div>
              <ScrollAnimation>
                {contactLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-7 border-b border-[rgba(255,255,255,0.08)]"
                  >
                    <div className="border border-[rgba(255,255,255,0.15)] rounded-lg p-2.5 flex items-center justify-center h-11 w-11 flex-shrink-0 group-hover:border-[rgba(255,255,255,0.3)] group-hover:bg-[rgba(255,255,255,0.04)] transition-all duration-180">
                      <link.icon size={18} strokeWidth={1.5} className="text-[#9a9a9a]" />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-[#6a6a6a] uppercase">
                      {link.label}
                    </span>
                    <span className="font-sans font-normal text-base text-[#d0d0d0] group-hover:text-[#e2e2e2] group-hover:translate-x-2 transition-all duration-180 ml-auto">
                      {link.value}
                    </span>
                  </Link>
                ))}
              </ScrollAnimation>
            </div>

            {/* Right - Form */}
            <div>
              <ScrollAnimation delay={1}>
                <SectionHeading 
                  title="send a message" 
                  icon={<Send size={18} strokeWidth={1.5} />} 
                />

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
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
                    <textarea
                      placeholder="what's on your mind"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input min-h-[100px] resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bordered-button"
                  >
                    <Send size={14} strokeWidth={1.5} />
                    send it
                  </button>
                </form>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
