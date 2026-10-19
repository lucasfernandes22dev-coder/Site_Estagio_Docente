type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'
      }
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-black tracking-[-0.06em] text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
