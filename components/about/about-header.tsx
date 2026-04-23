"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import TiltedCard from "@/components/animate-ui/components/tilted-card";
import Image from "next/image";

export function AboutHeader() {
  return (
    <section
      data-section="1"
      className="min-h-[85vh] flex items-center bg-transparent pt-24 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionHeading label="about" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[var(--text-heading)] tracking-[-0.02em] leading-[1.1]">
              The person
            </h1>
            <h2 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[var(--text-ghost)] tracking-[-0.02em] leading-[1.1] mt-2">
              behind the code.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="max-w-[560px] mt-8 mx-auto lg:mx-0"
          >
            <p className="font-sans text-[16px] leading-[1.9] text-[var(--text-body)]">
             I build AI-driven products, scalable backends, and Flutter apps usually architecting systems, integrating LLMs, and arguing with poorly designed databases.
            </p>
            <p className="font-sans text-[16px] leading-[1.9] text-[var(--text-body)] mt-4">
              When I’m not building, I’m either blundering winning positions in chess or binge-watching anime “for research.” Always chasing the next challenge whether it’s sacrificing my rook for no reason or following Luffy to find the One Piece before I finish my deadlines.
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
            captionText="sanmeet / engineer"
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
              <div
                className="absolute inset-0 backdrop-blur-[2px] p-6 sm:p-8 flex flex-col justify-between rounded-[15px] border border-[var(--border-mid)]"
                style={{ background: `rgba(var(--bg-base-raw), 0.85)` }}
              >
                <div>
                  <h3 className="font-sans text-xl font-bold text-[var(--text-heading)] tracking-tight">
                    <Image src="/logo.svg" alt="SA" width={30} height={30} />
                  </h3>
                  <p className="font-sans text-[13px] text-[var(--text-secondary)] mt-2 mb-6 leading-relaxed lowercase">
                    Powered by unhealthy amounts of caffeine and console logs.
                  </p>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[11px] text-[var(--text-muted)]">
                        LinkedIn
                      </span>
                      <a
                        href="https://linkedin.com/in/sanmeet007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[14px] text-[var(--text-strong)] hover:text-[var(--text-heading)] transition-colors flex items-center justify-between group"
                      >
                        linkedin.com/in/sanmeet007
                        <ArrowRight
                          size={14}
                          className="text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors"
                        />
                      </a>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <span className="font-sans text-[11px] text-[var(--text-muted)]">
                        GitHub
                      </span>
                      <a
                        href="https://github.com/Sanmeet007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[14px] text-[var(--text-strong)] hover:text-[var(--text-heading)] transition-colors flex items-center justify-between group"
                      >
                        github.com/Sanmeet007
                        <ArrowRight
                          size={14}
                          className="text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors"
                        />
                      </a>
                    </div>

                    <div className="flex flex-col gap-1.5 border-b border-[var(--border-subtle)] pb-6">
                      <span className="font-sans text-[11px] text-[var(--text-muted)]">
                        Chess
                      </span>
                      <a
                        href="https://www.chess.com/member/blutzmonkey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[14px] text-[var(--text-strong)] hover:text-[var(--text-heading)] transition-colors flex items-center justify-between group"
                      >
                        chess.com/blutzmonkey
                        <ArrowRight
                          size={14}
                          className="text-[var(--text-muted)] group-hover:text-[var(--text-heading)] transition-colors"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full mt-4 py-3.5 px-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--surface-mid)] hover:shadow-[0_0_20px_var(--border-strong)] hover:border-[var(--border-accent)] transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="text-[13px] font-semibold text-[var(--text-heading)]">
                    let's talk
                  </span>
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="text-[var(--text-heading)] group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
