import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  icon: ReactNode
}

export function SectionHeading({ title, icon }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 w-full mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center min-w-[48px] h-12 rounded-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] text-[#e2e2e2] shadow-sm">
          {icon}
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-transparent" />
      </div>
      <h2 className="font-sans font-bold text-[clamp(36px,5vw,56px)] text-[#e2e2e2] tracking-[-0.02em] leading-[1.1] capitalize">
        {title}
      </h2>
    </div>
  )
}
