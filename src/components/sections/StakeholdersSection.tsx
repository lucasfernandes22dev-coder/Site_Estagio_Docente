import { motion } from 'framer-motion'
import { actorNodes } from '../../data/mockData'

export function StakeholdersSection() {
  return (
    <section className="bg-[#f7f4ff] px-4 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Jornada dos envolvidos</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 md:text-5xl">
            Uma rede conectada em torno da formação docente.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-violet-100 bg-white p-8 shadow-[var(--brand-shadow-soft)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(95,44,197,0.12),_transparent_40%)]" />
          <div className="relative mx-auto h-[520px] max-w-[900px]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-label="Rede de conexões do estagiário">
              <path d="M 12 55 L 22 22" stroke="rgba(95,44,197,0.38)" strokeWidth="0.6" fill="none" />
              <path d="M 22 22 L 42 50" stroke="rgba(95,44,197,0.38)" strokeWidth="0.6" fill="none" />
              <path d="M 42 50 L 62 30" stroke="rgba(95,44,197,0.38)" strokeWidth="0.6" fill="none" />
              <path d="M 62 30 L 78 62" stroke="rgba(95,44,197,0.38)" strokeWidth="0.6" fill="none" />
              <path d="M 42 50 L 88 35" stroke="rgba(95,44,197,0.38)" strokeWidth="0.6" fill="none" />
              <path d="M 12 55 L 42 50" stroke="rgba(95,44,197,0.38)" strokeWidth="0.6" fill="none" />
            </svg>

            {actorNodes.map((node, index) => (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <div className="rounded-full border border-violet-200 bg-white px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-lg shadow-violet-200/20">
                  {node.name}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-500 text-center text-sm font-black tracking-[-0.06em] text-white shadow-[0_30px_80px_rgba(95,44,197,0.35)]">
                Estágio
                <br />
                Docente
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
