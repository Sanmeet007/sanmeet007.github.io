'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, History } from 'lucide-react'

const navLinks = [
  { href: '/', label: '~/home' },
  { href: '/about', label: '~/about me' },
  { href: '/build', label: '~/builds' },
  { href: '/contact', label: '~/contact' },
]

export function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.88)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-sans font-bold text-[16px] text-[#e2e2e2] hover:opacity-80 hover:scale-105 transition-all duration-300 cursor-target inline-block"
        >
          gn.
        </Link>

        {/* Center Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[13px] tracking-[0.1em] lowercase transition-all duration-300 relative cursor-target inline-block hover:scale-[1.03] ${
                isActive(link.href) 
                  ? 'opacity-100' 
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[rgba(255,255,255,0.4)]" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://v1.garvitnag.com"
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.1em] lowercase text-[#a0a0a0] border border-[rgba(255,255,255,0.1)] rounded-md px-2.5 py-1 hover:bg-[rgba(255,255,255,0.05)] hover:text-[#e2e2e2] hover:scale-[1.03] transition-all duration-300 cursor-target"
          >
            <span className="flex items-center gap-1.5 align-middle">
              <History size={12} strokeWidth={1.5} />
              old portfolio
            </span>
          </Link>
          
          <div className="w-px h-4 bg-[rgba(255,255,255,0.15)] mx-1" />

          <Link
            href="/Resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-[13px] tracking-[0.1em] lowercase opacity-40 hover:opacity-100 hover:scale-[1.03] transition-all duration-300 cursor-target"
          >
            <span className="flex items-center gap-1.5 align-middle">
               resume
               <FileText size={14} strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
