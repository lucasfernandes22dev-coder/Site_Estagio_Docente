import { ChevronLeft, ChevronRight, Menu, Presentation, X } from 'lucide-react'
import { useState } from 'react'

type PresentationNavProps = {
  currentIndex: number
  total: number
  onPrevious: () => void
  onNext: () => void
  onSelect: (index: number) => void
  isPresentationMode: boolean
  onTogglePresentation: () => void
  menuLabels: string[]
}

export function PresentationNav({
  currentIndex,
  total,
  onPrevious,
  onNext,
  onSelect,
  isPresentationMode,
  onTogglePresentation,
  menuLabels,
}: PresentationNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  if (isPresentationMode) {
    return (
      <>
        <div className="pointer-events-none fixed inset-y-0 left-4 z-50 hidden items-center md:flex">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={onPrevious}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900/60 text-white backdrop-blur-md transition hover:bg-slate-800"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <div className="pointer-events-none fixed inset-y-0 right-4 z-50 hidden items-center md:flex">
          <button
            type="button"
            aria-label="Próximo slide"
            onClick={onNext}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900/60 text-white backdrop-blur-md transition hover:bg-slate-800"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </>
    )
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5a1d7d] to-[#4f8ecb] text-sm font-black text-white shadow-[0_10px_25px_rgba(90,29,125,0.26)]">
              ED
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5a1d7d]">Estágio</div>
              <div className="text-sm font-black tracking-[-0.06em] text-slate-900">Docente</div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 xl:flex">
            {menuLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => onSelect(index)}
                className={`text-sm font-medium transition ${
                  index === currentIndex ? 'text-[#5a1d7d]' : 'text-slate-600 hover:text-[#5a1d7d]'
                }`}
              >
                {label.replace(/^\d+\s+/, '')}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onTogglePresentation}
              className="hidden rounded-full bg-[#5a1d7d] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(90,29,125,0.28)] transition hover:bg-[#4a1b67] md:inline-flex"
            >
              <span className="inline-flex items-center gap-2">
                <Presentation size={15} />
                Apresentar
              </span>
            </button>

            <button
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 xl:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-3 xl:hidden">
            <div className="grid grid-cols-2 gap-2">
              {menuLabels.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    onSelect(index)
                    setMenuOpen(false)
                  }}
                  className={`rounded-xl px-3 py-2 text-left text-sm ${
                    index === currentIndex ? 'bg-violet-50 text-violet-700' : 'bg-slate-50 text-slate-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-lg shadow-slate-200/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {Array.from({ length: total }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => onSelect(index)}
              className={`h-2.5 rounded-full transition ${
                index === currentIndex ? 'w-8 bg-violet-700' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
