'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars'

export function GlobalBackground() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [windowHeight, setWindowHeight] = useState(800)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Fade in as the user scrolls past the hero section
  const scrollOpacity = useTransform(
    scrollY, 
    [windowHeight * 0.4, windowHeight * 0.8], 
    [0, 1]
  )

  const isHome = pathname === '/'

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        opacity: isHome ? scrollOpacity : 1,
      }}
    >
      <div className="absolute inset-0 pointer-events-auto">
        <GravityStarsBackground
          starsCount={65}
          starsOpacity={0.65}
          starsSize={2}
          movementSpeed={1.0}
          mouseGravity="attract"
          mouseInfluence={220}
          glowIntensity={12}
          className="w-full h-full text-[var(--star-color)]"
        />
      </div>
    </motion.div>
  )
}
