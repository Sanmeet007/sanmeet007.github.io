'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText } from 'lucide-react'

const navLinks = [
  { href: '/', label: '~/home' },
  { href: '/about', label: '~/about' },
  { href: '/build', label: '~/build' },
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
          className="font-sans font-bold text-[14px] text-[#e2e2e2] hover:opacity-80 transition-opacity"
        >
          gn.
        </Link>

        {/* Center Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[11px] tracking-[0.1em] lowercase transition-opacity relative ${
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

        {/* Resume Link */}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] lowercase opacity-40 hover:opacity-100 transition-opacity"
        >
          resume
          <FileText size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </nav>
  )
}
