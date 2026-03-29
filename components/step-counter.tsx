'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function StepCounter() {
  const pathname = usePathname()
  const [currentSection, setCurrentSection] = useState(0)
  const [totalSections, setTotalSections] = useState(0)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    setTotalSections(sections.length)
    setCurrentSection(0)

    if (sections.length === 0) return

    const observer = new IntersectionObserver((entries) => {
      let mostVisibleEntry: IntersectionObserverEntry | undefined
      entries.forEach(entry => {
        if (entry.isIntersecting) mostVisibleEntry = entry
      })
      if (mostVisibleEntry) {
        const index = sections.indexOf(mostVisibleEntry.target as HTMLElement)
        if (index !== -1) setCurrentSection(index + 1)
      }
    }, {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0
    })

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
      observer.disconnect()
    }
  }, [pathname])

  if (totalSections === 0) return null

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center justify-center">
      {/* Top Divider */}
      <div className="h-12 w-px bg-[var(--border-accent)] mb-4" />
      {/* Current section */}
      <span className="font-mono text-sm tracking-[0.2em] text-[var(--text-heading)]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
        {String(currentSection).padStart(2, '0')}
      </span>

      {/* Divider */}
      <div className="h-12 w-px bg-[var(--border-accent)] mt-4" />
    </div>
  )
}
