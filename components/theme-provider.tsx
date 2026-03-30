'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'system' | 'dark' | 'light'
type ResolvedTheme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme === 'system') return getSystemTheme()
  return theme
}

function applyTheme(resolved: ResolvedTheme) {
  const html = document.documentElement
  if (resolved === 'light') {
    html.classList.add('light')
  } else {
    html.classList.remove('light')
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme) || 'system'
    const resolved = resolveTheme(stored)
    setThemeState(stored)
    setResolvedTheme(resolved)
    applyTheme(resolved)

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setThemeState(prev => {
        if (prev === 'system') {
          const newResolved = getSystemTheme()
          setResolvedTheme(newResolved)
          applyTheme(newResolved)
        }
        return prev
      })
    }
    mq.addEventListener('change', handleChange)

    // Enable transitions after initial theme is applied
    const tid = setTimeout(() => {
      document.documentElement.classList.add('theme-ready')
    }, 50)

    return () => {
      mq.removeEventListener('change', handleChange)
      clearTimeout(tid)
    }
  }, [])

  const setTheme = useCallback((t: Theme) => {
    localStorage.setItem(STORAGE_KEY, t)
    const resolved = resolveTheme(t)
    setThemeState(t)
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
