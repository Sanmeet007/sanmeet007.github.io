import type { Metadata, Viewport } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { StepCounter } from '@/components/step-counter'
import { DotGrid } from '@/components/dot-grid'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '600', '700']
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Garvit Nag | Full-Stack Developer',
  description: 'Full-stack developer building innovative web applications with clean, functional code.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-[#080808] text-[#e2e2e2]">
        <DotGrid />
        <Navigation />
        <StepCounter />
        <main className="relative z-10">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
