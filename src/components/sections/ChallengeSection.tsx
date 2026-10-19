import { motion } from 'framer-motion'
import { ArrowRight, FileText, LayoutGrid, SearchCheck } from 'lucide-react'
import { challengeCards, afterCards } from '../../data/mockData'
import { SectionHeader } from '../ui/SectionHeader'

export function ChallengeSection() {
  return (
    <section id="solution" className="px-4 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="O desafio"
          title="Da informação dispersa para uma gestão integrada."
          description="A jornada do estágio exige organização, rastreabilidade e visão de conjunto. O cenário atual fragmenta dados e compromete a tomada de decisão."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[var(--brand-shadow-soft)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-[-0.06em] text-slate-900">Antes</h3>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                Fragmentado
              </span>
            </div>

            <div className="space-y-4">
              {challengeCards.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    {index === 0 ? <FileText size={18} /> : index === 1 ? <LayoutGrid size={18} /> : <SearchCheck size={18} />}
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.08 }}
            className="rounded-[30px] border border-violet-200 bg-gradient-to-br from-violet-700 to-violet-950 p-8 text-white shadow-[var(--brand-shadow)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-[-0.06em]">Depois</h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100">
                Integrado
              </span>
            </div>

            <div className="space-y-4">
              {afterCards.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
                    {index === 0 ? <SearchCheck size={18} /> : <ArrowRight size={18} />}
                  </div>
                  <span className="font-medium text-violet-50">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
