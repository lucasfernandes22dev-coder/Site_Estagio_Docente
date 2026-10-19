import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../../data/mockData'

type HeaderProps = {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-[0_1px_0_rgba(15,23,42,0.06)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="Início da página">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 text-lg font-black text-white shadow-lg shadow-violet-500/20">
            ED
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Estágio</div>
            <div className="text-base font-black tracking-[-0.06em] text-slate-900">Docente</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-violet-700' : 'text-slate-700 hover:text-violet-700'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#system"
            className="rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-100"
          >
            Explorar sistema
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-sm lg:hidden"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMobileOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Menu móvel">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-xl px-3 py-2 text-sm font-medium ${
                  activeSection === item.id ? 'bg-violet-50 text-violet-700' : 'text-slate-700'
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#system"
              className="mt-3 inline-flex rounded-full bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white"
              onClick={() => setIsMobileOpen(false)}
            >
              Explorar sistema
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
