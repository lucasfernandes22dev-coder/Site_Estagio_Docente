import { ArrowDown, ArrowRight, Circle, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_38%),linear-gradient(135deg,#4f2aa7_0%,#331d64_100%)] px-4 pb-14 pt-28 text-white md:px-8 lg:px-0">
      <div className="absolute inset-0 opacity-80">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute right-10 top-28 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute left-1/3 top-20 h-40 w-40 rotate-12 rounded-[30px] border border-white/10 bg-white/5" />
        <div className="absolute bottom-12 right-20 h-48 w-48 rotate-45 rounded-[24px] border border-orange-300/40 bg-orange-400/10" />
        <div className="absolute bottom-0 left-0 h-[220px] w-[220px] rounded-tr-[80px] border border-white/10" />
      </div>

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-100">
            <Circle size={8} className="fill-current text-violet-200" />
            Protótipo institucional
          </div>

          <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.08em] md:text-7xl">
            ESTÁGIO
            <span className="mt-2 block text-violet-200">DOCENTE</span>
          </h1>

          <p className="mt-6 text-lg text-violet-100 md:text-xl">
            Sistema de Gestão de Estágios
            <span className="mt-1 block font-medium text-white">da Rede Estadual da Paraíba</span>
          </p>

          <p className="mt-7 max-w-lg text-base text-violet-100/90 md:text-lg">
            Uma nova experiência para organizar, acompanhar e transformar a gestão dos estágios docentes da Rede Estadual.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-800 shadow-lg shadow-violet-950/15 transition hover:-translate-y-0.5"
            >
              Conhecer proposta
              <ArrowRight size={16} />
            </a>
            <a
              href="#system"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Explorar sistema
              <Play size={16} className="fill-current" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-violet-300/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-[0_30px_60px_rgba(15,23,42,0.35)] backdrop-blur-md">
            <div className="rounded-[24px] bg-slate-950/90 p-4 text-slate-100 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Dashboard</p>
                  <h2 className="mt-2 text-xl font-bold text-white">Olá, Gerente Regional</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-200">
                  GR
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: 'Ativos', value: '324', color: 'bg-violet-500/20 text-violet-200' },
                  { label: 'Andamento', value: '218', color: 'bg-emerald-500/20 text-emerald-200' },
                  { label: 'Concluídos', value: '76', color: 'bg-blue-500/20 text-blue-200' },
                  { label: 'Pendências', value: '30', color: 'bg-orange-500/20 text-orange-200' },
                ].map((card) => (
                  <div key={card.label} className={`rounded-2xl border border-white/10 p-3 ${card.color}`}>
                    <p className="text-[11px] uppercase tracking-[0.14em]">{card.label}</p>
                    <div className="mt-2 text-2xl font-black">{card.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-[1.2fr_0.8fr] gap-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.14em] text-slate-300">Estágios por situação</span>
                    <span className="text-[10px] text-slate-400">Últimos 6 meses</span>
                  </div>
                  <div className="flex h-24 items-end gap-2">
                    {[48, 65, 58, 72, 64, 82].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-500 to-blue-400" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-300">Pendências</p>
                  <div className="mt-4 space-y-3">
                    {[75, 62, 89].map((value, index) => (
                      <div key={index}>
                        <div className="mb-1 flex justify-between text-[10px] text-slate-300">
                          <span>{['Documentação', 'Vínculo', 'Relatório'][index]}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800">
                          <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-400" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-[1180px] items-center justify-center pb-4 pt-10 text-violet-100">
        <div className="flex items-center gap-3 text-sm font-medium tracking-[0.16em] uppercase">
          <span>Role para explorar</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
