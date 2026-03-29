'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, History, Menu, X, Sun, Moon, Monitor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { useTheme } from '@/context/theme-context'

type Theme = 'system' | 'dark' | 'light'

const THEME_OPTIONS: Array<{ value: Theme; icon: typeof Sun; label: string }> = [
  { value: 'system', icon: Monitor, label: 'system' },
  { value: 'dark',   icon: Moon,    label: 'dark' },
  { value: 'light',  icon: Sun,     label: 'light' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const themeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close theme dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setIsThemeOpen(false)
      }
    }
    if (isThemeOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isThemeOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const currentEntry = THEME_OPTIONS.find(t => t.value === theme) ?? THEME_OPTIONS[0]
  const CurrentIcon = currentEntry.icon

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-[20px] border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans font-bold text-[20px] text-[var(--text-heading)] hover:opacity-80 hover:scale-105 transition-all duration-300 cursor-target inline-block"
        >
          gn.
        </Link>

        {/* Center Nav Links — desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[13px] tracking-widest lowercase transition-all duration-300 relative cursor-target inline-block hover:scale-[1.03] ${
                isActive(link.href)
                  ? 'opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--border-active)]" />
              )}
            </Link>
          ))}
        </div>

        {/* Right side — desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://v1.garvitnag.com"
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest lowercase text-[var(--text-secondary)] border border-[var(--border-low)] rounded-md px-2.5 py-1 hover:bg-[var(--surface-low)] hover:text-[var(--text-heading)] hover:scale-[1.03] transition-all duration-300 cursor-target"
          >
            <span className="flex items-center gap-1.5 align-middle">
              <History size={12} strokeWidth={1.5} />
              v1.
            </span>
          </Link>

          {/* Theme dropdown */}
          <div ref={themeRef} className="relative">
            <button
              onClick={() => setIsThemeOpen(prev => !prev)}
              className="flex items-center justify-center w-7 h-7 text-[var(--text-secondary)] border border-[var(--border-low)] rounded-md hover:bg-[var(--surface-low)] hover:text-[var(--text-heading)] transition-all duration-300 cursor-target"
              aria-label={`Theme: ${currentEntry.label}`}
            >
              <CurrentIcon size={12} strokeWidth={1.5} />
            </button>

            <AnimatePresence>
              {isThemeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-2 bg-[var(--nav-bg-mobile)] backdrop-blur-[20px] border border-[var(--border-low)] rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)] z-50 min-w-[110px]"
                >
                  {THEME_OPTIONS.map((opt) => {
                    const Icon = opt.icon
                    return (
                      <button
                        key={opt.value}
                        onClick={() => { setTheme(opt.value); setIsThemeOpen(false) }}
                        className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 font-mono text-[11px] tracking-widest lowercase transition-all duration-150 ${
                          theme === opt.value
                            ? 'text-[var(--text-heading)] bg-[var(--surface-mid)]'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-heading)] hover:bg-[var(--surface-low)]'
                        }`}
                      >
                        <Icon size={11} strokeWidth={1.5} />
                        {opt.label}
                      </button>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-px h-4 bg-[var(--border-mid)] mx-0.5" />

          <Link
            href="/Resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-[13px] tracking-widest lowercase opacity-40 hover:opacity-100 hover:scale-[1.03] transition-all duration-300 cursor-target"
          >
            <span className="flex items-center gap-1.5 align-middle">
               resume
               <FileText size={14} strokeWidth={1.5} />
            </span>
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-[var(--text-heading)]"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[var(--nav-bg-mobile)] backdrop-blur-[20px] border-b border-[var(--border-subtle)]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-mono text-[14px] tracking-widest lowercase py-3 border-b border-[var(--border-subtle)] transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-[var(--text-heading)]'
                      : 'text-[var(--text-muted)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-3" />

              <div className="flex items-center gap-3 pt-2 flex-wrap">
                <Link
                  href="https://v1.garvitnag.com"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest lowercase text-[var(--text-secondary)] border border-[var(--border-low)] rounded-md px-2.5 py-1.5 hover:bg-[var(--surface-low)] transition-all duration-300"
                >
                  <History size={12} strokeWidth={1.5} />
                  v1.
                </Link>

                {/* Mobile theme options inline */}
                <div className="flex items-center gap-1.5">
                  {THEME_OPTIONS.map((opt) => {
                    const Icon = opt.icon
                    return (
                      <button
                        key={opt.value}
                        onClick={() => setTheme(opt.value)}
                        className={`flex items-center justify-center w-7 h-7 border rounded-md transition-all duration-200 ${
                          theme === opt.value
                            ? 'border-[var(--border-accent)] text-[var(--text-heading)] bg-[var(--surface-mid)]'
                            : 'border-[var(--border-low)] text-[var(--text-secondary)] hover:bg-[var(--surface-low)]'
                        }`}
                        aria-label={opt.label}
                      >
                        <Icon size={12} strokeWidth={1.5} />
                      </button>
                    )
                  })}
                </div>

                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest lowercase text-[var(--text-secondary)] border border-[var(--border-low)] rounded-md px-2.5 py-1.5 hover:bg-[var(--surface-low)] transition-all duration-300"
                >
                  <FileText size={12} strokeWidth={1.5} />
                  resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
