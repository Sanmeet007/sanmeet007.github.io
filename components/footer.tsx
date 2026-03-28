"use client";

import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { PiXLogo } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-16">
          <div className="max-w-[420px] pr-8 lg:pr-16">
            <Link
              href="/"
              className="font-sans font-bold text-[18px] text-[#e2e2e2] mb-6 block hover:opacity-80 hover:scale-105 origin-left transition-all duration-300 w-fit"
            >
              gn.
            </Link>
            <p className="font-sans text-[13px] text-[#8a8a8a] leading-[1.8] mb-6">
              open to new opportunities, collaborations, or just a good
              conversation about tech and design.
            </p>
            <a
              href="mailto:garvit1505@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] lowercase text-[#e2e2e2] border border-[rgba(255,255,255,0.1)] rounded-md px-5 py-2.5 hover:bg-[rgba(255,255,255,0.05)] transition-colors group"
            >
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                let's talk
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-mono text-xs tracking-[0.15em] text-[#4a4a4a] uppercase">
              navigate
            </span>
            <div className="flex flex-col gap-3 font-mono text-[13px] tracking-[0.1em] lowercase text-[#7a7a7a] items-start">
              <Link
                href="/"
                className="hover:text-[#e2e2e2] hover:scale-105 origin-left transition-all duration-300"
              >
                ~/home
              </Link>
              <Link
                href="/about"
                className="hover:text-[#e2e2e2] hover:scale-105 origin-left transition-all duration-300"
              >
                ~/about
              </Link>
              <Link
                href="/builds"
                className="hover:text-[#e2e2e2] hover:scale-105 origin-left transition-all duration-300"
              >
                ~/builds
              </Link>
              <Link
                href="/contact"
                className="hover:text-[#e2e2e2] hover:scale-105 origin-left transition-all duration-300"
              >
                ~/contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-mono text-xs tracking-[0.15em] text-[#4a4a4a] uppercase">
              connect
            </span>
            <div className="flex flex-row gap-5 text-[#8a8a8a] items-center">
              <a
                href="https://github.com/Garvit-Nag"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e2e2e2] hover:scale-110 transition-all duration-300"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/garvit-nag"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e2e2e2] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/garvit1505"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e2e2e2] hover:scale-110 transition-all duration-300"
                aria-label="X"
              >
                <PiXLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex items-center justify-center pt-6 border-t border-[rgba(255,255,255,0.05)] font-mono text-[12px] tracking-[0.05em] text-[#8a8a8a]">
          <span>gn. · made with way too many console logs · 2026</span>
        </div>
      </div>
    </footer>
  );
}
