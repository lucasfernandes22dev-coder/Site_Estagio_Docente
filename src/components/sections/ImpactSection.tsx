import { motion } from 'framer-motion'
import { impactStats } from '../../data/mockData'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function ImpactSection() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,_rgba(95,44,197,0.15),_rgba(247,244,255,0.8)_40%,_rgba(255,255,255,0.98)_100%)] px-4 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Impacto esperado</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 md:text-5xl">
            Visão estadual integrada, com clareza e rastreabilidade.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
