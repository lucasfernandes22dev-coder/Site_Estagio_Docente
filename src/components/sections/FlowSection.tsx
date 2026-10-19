import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { flowSteps } from '../../data/mockData'
import { SectionHeader } from '../ui/SectionHeader'

const colorMap = {
  purple: 'from-violet-500 to-violet-700',
  blue: 'from-blue-500 to-blue-700',
  orange: 'from-orange-400 to-orange-600',
  pink: 'from-pink-500 to-pink-700',
  lilac: 'from-indigo-400 to-violet-500',
  'purple-dark': 'from-violet-700 to-indigo-900',
}

export function FlowSection() {
  const [active, setActive] = useState(flowSteps[0].id)
  const currentStep = useMemo(() => flowSteps.find((step) => step.id === active) ?? flowSteps[0], [active])

  return (
    <section id="flow" className="px-4 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="Fluxo do estágio"
          title="A jornada do estágio em um processo claro, organizado e rastreável."
          description="Do registro inicial ao encerramento, a proposta cria um percurso conectado e transparente para todos os envolvidos."
        />

        <div className="mt-12">
          <div className="hidden gap-4 overflow-x-auto pb-4 lg:flex lg:items-center lg:justify-between">
            {flowSteps.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActive(step.id)}
                className={`group relative flex min-w-[170px] flex-1 flex-col items-center rounded-[22px] border p-4 text-left transition ${
                  active === step.id
                    ? 'border-violet-200 bg-violet-50 shadow-[var(--brand-shadow-soft)]'
                    : 'border-slate-200 bg-white hover:border-violet-200 hover:bg-violet-50/40'
                }`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${colorMap[step.color as keyof typeof colorMap]} text-lg font-black text-white`}>
                  {step.phase}
                </div>
                <p className="text-center text-sm font-semibold text-slate-800">{step.title}</p>
                {index < flowSteps.length - 1 ? (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-7 -translate-y-1/2 bg-slate-200 lg:block" />
                ) : null}
              </button>
            ))}
          </div>

          <div className="mt-6 lg:hidden">
            {flowSteps.map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActive(step.id)}
                className={`mb-3 flex w-full items-center gap-4 rounded-[20px] border p-4 text-left ${
                  active === step.id ? 'border-violet-200 bg-violet-50' : 'border-slate-200 bg-white'
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${colorMap[step.color as keyof typeof colorMap]} text-sm font-black text-white`}>
                  {step.phase}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{step.title}</p>
                </div>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[var(--brand-shadow-soft)] md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Etapa {currentStep.phase}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.06em] text-slate-900">{currentStep.title}</h3>
                </div>
                <div className={`inline-flex rounded-full bg-gradient-to-r ${colorMap[currentStep.color as keyof typeof colorMap]} px-4 py-2 text-sm font-semibold text-white`}>
                  Processo institucional
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-lg text-slate-600">{currentStep.detail}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
