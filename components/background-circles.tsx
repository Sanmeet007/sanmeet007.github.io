'use client'

import { useEffect, useRef } from 'react'

export function BackgroundCircles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animation is handled by CSS
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette-gradient z-10" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--surface-subtle)_0%,transparent_70%)]" />

      {/* Rotating circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* Circle 1 - Largest, slowest */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[var(--border-low)] animate-[spin_60s_linear_infinite]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--border-mid)]" />
        </div>

        {/* Circle 2 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-[var(--border-subtle)] animate-[spin_45s_linear_infinite_reverse]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--border-low)]" />
        </div>

        {/* Circle 3 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--border-low)] animate-[spin_35s_linear_infinite]"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--border-mid)]" />
        </div>

        {/* Circle 4 */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-[var(--border-subtle)] animate-[spin_25s_linear_infinite_reverse]"
        >
          <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[var(--border-low)]" />
        </div>

        {/* Circle 5 - Smallest, fastest */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full border border-[var(--border-subtle)] animate-[spin_18s_linear_infinite]"
        />
      </div>
    </div>
  )
}
