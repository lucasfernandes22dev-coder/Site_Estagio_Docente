import type { ReactNode } from 'react'

type PresentationPageProps = {
  children: ReactNode
  className?: string
  tone?: 'purple' | 'blue' | 'offwhite' | 'dark'
  reserveNavSpace?: boolean
  contentViewport?: 'standard' | 'expanded'
}

const toneMap = {
  purple: 'bg-[linear-gradient(135deg,#5a1d7d_0%,#2b1d74_100%)] text-white',
  blue: 'bg-[linear-gradient(180deg,#edf7ff_0%,#dfeeff_100%)] text-slate-900',
  offwhite: 'bg-[#f4f1ee] text-slate-900',
  dark: 'bg-[linear-gradient(180deg,#171b2f_0%,#0f172a_100%)] text-white',
}

export function PresentationPage({
  children,
  className = '',
  tone = 'offwhite',
  reserveNavSpace = true,
  contentViewport = 'standard',
}: PresentationPageProps) {
  return (
    <section className={`relative h-screen w-screen overflow-hidden ${toneMap[tone]} ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute right-12 top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute left-1/3 top-10 h-40 w-40 rotate-12 rounded-[26px] border border-white/10 bg-white/5" />
        <div className="absolute bottom-10 left-10 h-52 w-52 rotate-12 rounded-[28px] border border-orange-300/30 bg-orange-400/10" />
      </div>
      <div className={`relative z-10 ${reserveNavSpace ? contentViewport === 'expanded' ? 'h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain' : 'h-[calc(100vh-11rem)] overflow-y-auto overscroll-contain' : 'h-full'}`}>
        {children}
      </div>
    </section>
  )
}
