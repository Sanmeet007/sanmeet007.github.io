"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollAnimation } from "@/components/scroll-animation";

export function ForwardNudge() {
  return (
    <section data-section="6" className="section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <ScrollAnimation>
          <h2 className="heading-md">Curious what i&apos;ve built?</h2>
        </ScrollAnimation>

        <ScrollAnimation
          delay={1}
          className="mt-12 flex items-center justify-center w-full"
        >
          <div className="flex-1 max-w-50 h-px bg-linear-to-r from-transparent to-border-strong mr-6 hidden md:block" />
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/build" className="bordered-button group inline-flex">
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                explore my work
                <ArrowRight size={14} strokeWidth={1.5} />
              </span>
            </Link>
            <Link href="/contact" className="bordered-button group inline-flex">
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                get in touch
                <Mail size={14} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
          <div className="flex-1 max-w-50 h-px bg-linear-to-l from-transparent to-border-strong ml-6 hidden md:block" />
        </ScrollAnimation>
      </div>
    </section>
  );
}
