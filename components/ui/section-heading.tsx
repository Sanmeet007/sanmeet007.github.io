interface SectionHeadingProps {
  title?: string
  label: string
}

export function SectionHeading({ title, label }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col w-full mb-6 ${title ? 'gap-6' : ''}`}>
      {/* Geometric line + label */}
      <div className="flex items-center gap-3">
        <span className="block w-1.5 h-1.5 rounded-full bg-[#5a5a5a] flex-shrink-0" />
        <span className="block w-5 h-px bg-gradient-to-r from-[#5a5a5a] to-transparent flex-shrink-0" />
        <span className="font-mono text-[11px] tracking-[0.12em] text-[#787878] uppercase">
          {label}
        </span>
      </div>
      {title && (
        <h2 className="font-sans font-bold text-[clamp(36px,5vw,56px)] text-[#e2e2e2] tracking-[-0.02em] leading-[1.1] capitalize">
          {title}
        </h2>
      )}
    </div>
  )
}
