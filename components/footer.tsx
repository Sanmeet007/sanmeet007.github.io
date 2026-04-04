"use client";

import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { PiXLogo } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-footer-base border-t border-[rgba(255,255,255,0.05)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-16">
          <div className="max-w-105 pr-0 md:pr-8 lg:pr-16 text-center md:text-left mx-auto md:mx-0">
            <Link
              href="/"
              className="font-sans font-bold text-[18px] text-text-heading mb-6 block hover:opacity-80 hover:scale-105 origin-left transition-all duration-300 w-fit mx-auto md:mx-0"
            >
              gn.
            </Link>
            <p className="font-sans text-[13px] text-text-secondary leading-[1.8] mb-6">
              open to new opportunities, collaborations, or just a good
              conversation about tech and design.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest lowercase text-text-heading border border-border-mid rounded-md px-5 py-2.5 hover:bg-surface-low transition-colors group"
            >
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                let's talk
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-5 items-center md:items-start">
            <span className="font-mono text-xs tracking-[0.15em] text-text-label uppercase">
              navigate
            </span>
            <div className="flex flex-col gap-3 font-mono text-[13px] tracking-widest lowercase text-text-muted items-center md:items-start">
              <Link
                href="/"
                className="hover:text-text-heading hover:scale-105 origin-left transition-all duration-300"
              >
                ~/home
              </Link>
              <Link
                href="/about"
                className="hover:text-text-heading hover:scale-105 origin-left transition-all duration-300"
              >
                ~/root
              </Link>
              <Link
                href="/build"
                className="hover:text-text-heading hover:scale-105 origin-left transition-all duration-300"
              >
                ~/builds
              </Link>
              <Link
                href="/contact"
                className="hover:text-text-heading hover:scale-105 origin-left transition-all duration-300"
              >
                ~/ping
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center md:items-start">
            <span className="font-mono text-xs tracking-[0.15em] text-text-label uppercase">
              connect
            </span>
            <div className="flex flex-row gap-5 text-text-secondary items-center">
              <a
                href="https://github.com/Garvit-Nag"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-heading hover:scale-110 transition-all duration-300"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/garvit-nag"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-heading hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/garvit1505"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-heading hover:scale-110 transition-all duration-300"
                aria-label="X"
              >
                <PiXLogo size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex items-center justify-center pt-6 border-t border-border-subtle font-mono text-[11px] sm:text-[12px] tracking-[0.05em] text-text-secondary text-center">
          <span>gn. · made with way too many console logs · 2026</span>
        </div>
      </div>
    </footer>
  );
}
