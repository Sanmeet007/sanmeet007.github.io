'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        {/* Footer inner - 3 column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 pb-8 border-b border-[rgba(255,255,255,0.04)]">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <span className="font-sora font-bold text-base text-[#e2e2e2]">gn.</span>
            <p className="font-sora font-normal text-sm text-[#6a6a6a] leading-relaxed">
              mostly just trying to build stuff that works well and feels right.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Garvit-Nag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6a6a6a] hover:text-[#e2e2e2] transition-colors duration-180"
                aria-label="GitHub"
              >
                <Github size={16} strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com/in/garvit-nag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6a6a6a] hover:text-[#e2e2e2] transition-colors duration-180"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/garvit1505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6a6a6a] hover:text-[#e2e2e2] transition-colors duration-180"
                aria-label="Twitter"
              >
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.15em] text-[#4a4a4a] uppercase">navigate</span>
            <nav className="space-y-2">
              <Link href="/" className="block font-mono text-xs text-[#6a6a6a] hover:text-[#c8c8c8] transition-colors duration-180">
                ~/home
              </Link>
              <Link href="/about" className="block font-mono text-xs text-[#6a6a6a] hover:text-[#c8c8c8] transition-colors duration-180">
                ~/about
              </Link>
              <Link href="/build" className="block font-mono text-xs text-[#6a6a6a] hover:text-[#c8c8c8] transition-colors duration-180">
                ~/build
              </Link>
              <Link href="/contact" className="block font-mono text-xs text-[#6a6a6a] hover:text-[#c8c8c8] transition-colors duration-180">
                ~/contact
              </Link>
            </nav>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-[0.15em] text-[#4a4a4a] uppercase">reach out</span>
            <a href="mailto:garvit1505@gmail.com" className="font-sora font-normal text-sm text-[#9a9a9a] hover:text-[#e2e2e2] transition-colors duration-180">
              garvit1505@gmail.com
            </a>
            <a
              href="mailto:garvit1505@gmail.com"
              className="bordered-button w-fit"
            >
              let's build something
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center font-mono text-xs text-[#3a3a3a] pt-5">
          gn. · made with way too many console logs · 2025
        </div>
      </div>
    </footer>
  )
}
