import { ArrowRight } from 'lucide-react'
import { beforeAfter } from '../../data/mockData'

export function BeforeAfterSection() {
  return (
    <section className="px-4 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Antes e depois</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 md:text-5xl">
            De processos fragmentados para uma gestão inteligente.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[var(--brand-shadow-soft)]">
            <h3 className="text-2xl font-black tracking-[-0.06em] text-slate-900">Antes</h3>
            <ul className="mt-6 space-y-4">
              {beforeAfter.before.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-violet-200 bg-gradient-to-br from-violet-700 to-violet-950 p-8 text-white shadow-[var(--brand-shadow)]">
            <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Depois</h3>
            <ul className="mt-6 space-y-4">
              {beforeAfter.after.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-violet-50">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"><ArrowRight size={16} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
