"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { CONTACT_LINKS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

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
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeading label="reach out" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[var(--text-heading)] tracking-[-0.02em] leading-[1.1]">
              Ready to collaborate?
            </h1>
            <h2 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[var(--text-ghost)] tracking-[-0.02em] leading-[1.1]">
              I&apos;d love to hear from you.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="mt-10 max-w-[540px]"
          >
            <p className="font-sans text-base leading-[1.9] text-[var(--text-body)]">
              currently available and actively exploring what&apos;s next.
              full-time roles, meaningful projects, and the right
              collaborations.
            </p>
            <p className="font-sans text-base leading-[1.9] text-[var(--text-body)] mt-3">
              if you&apos;re building something worth caring about, let&apos;s
              talk. i respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links + Form Section */}
      <section data-section="2" className="section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left - Contact Links + Schedule */}
            <div className="flex flex-col">
              <ScrollAnimation>
                {CONTACT_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5 border-b border-[var(--border-rest)]"
                  >
                    <div className="border border-[var(--border-strong)] rounded-lg p-2.5 flex items-center justify-center h-10 w-10 shrink-0 group-hover:border-[var(--border-emphasis)] group-hover:bg-[var(--surface-low)] transition-all duration-180">
                      <link.icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-[var(--text-body)]"
                      />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)] uppercase">
                      {link.label}
                    </span>
                    <span className="font-sans font-normal text-sm text-[var(--text-strong)] group-hover:text-[var(--text-heading)] group-hover:translate-x-2 transition-all duration-180 ml-auto">
                      {link.value}
                    </span>
                  </Link>
                ))}
              </ScrollAnimation>

              {/* Schedule a meeting — fills remaining height */}
              <ScrollAnimation delay={1} className="flex-1 flex flex-col mt-5">
                <div className="border border-[var(--border-rest)] rounded-xl p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="border border-[var(--border-strong)] rounded-lg p-2 flex items-center justify-center h-9 w-9 shrink-0">
                      <Calendar
                        size={15}
                        strokeWidth={1.5}
                        className="text-[var(--text-body)]"
                      />
                    </div>
                    <h3 className="font-sans font-semibold text-[16px] text-[var(--text-strong)] tracking-[-0.01em]">
                      Schedule a meeting
                    </h3>
                  </div>

                  <p className="font-sans text-[13px] text-[var(--text-muted)] leading-[1.8] mb-6">
                    if a message doesn&apos;t cut it, let&apos;s put something
                    on the calendar. a focused conversation beats a hundred
                    back-and-forths.
                  </p>

                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 font-sans text-[13px] text-[var(--text-ghost)] border border-[var(--border-low)] rounded-lg px-4 py-2.5 cursor-not-allowed select-none">
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
                <div className="px-6 pt-6 pb-5 border-b border-[var(--border-low)]">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase mb-2">
                    write
                  </p>
                  <h3 className="font-sans font-semibold text-xl text-[var(--text-heading)]">
                    Send a message
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div className="px-6 pt-6 space-y-5">
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase block mb-2">
                        name
                      </label>
                      <input
                        type="text"
                        placeholder="your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase block mb-2">
                        email
                      </label>
                      <input
                        type="email"
                        placeholder="your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase block mb-2">
                        subject
                      </label>
                      <input
                        type="text"
                        placeholder="what's this about"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="form-input"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-[0.12em] text-[var(--text-muted)] uppercase block mb-2">
                        message
                      </label>
                      <textarea
                        placeholder="what's on your mind"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="form-input min-h-[80px] resize-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-5">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-transparent border border-[var(--border-strong)] rounded-lg py-3 font-sans text-sm text-[var(--text-strong)] hover:border-[var(--border-active)] hover:bg-[var(--surface-low)] hover:text-[var(--text-heading)] transition-all duration-200"
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
  );
}
