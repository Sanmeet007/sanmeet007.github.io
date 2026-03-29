interface SectionHeadingProps {
  title?: string
  label: string
}

export function SectionHeading({ title, label }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col w-full mb-6 ${title ? 'gap-6' : ''}`}>
      {/* Geometric line + label */}
      <div className="flex items-center gap-3">
        <span className="block w-1.5 h-1.5 rounded-full bg-text-label shrink-0" />
        <span className="block w-5 h-px bg-linear-to-r from-text-label to-transparent shrink-0" />
        <span className="font-mono text-[11px] tracking-[0.12em] text-text-muted uppercase">
          {label}
        </span>
      </div>
      {title && (
        <h2 className="font-sans font-bold text-[clamp(36px,5vw,56px)] text-text-heading tracking-[-0.02em] leading-[1.1] capitalize">
          {title}
        </h2>
      )}
    </div>
  )
}
