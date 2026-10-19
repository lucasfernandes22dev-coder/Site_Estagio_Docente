import { motion } from 'framer-motion'
import { BarChart3, BriefcaseBusiness, ClipboardCheck, Database, FolderKanban, ShieldCheck } from 'lucide-react'
import { solutionItems } from '../../data/mockData'
import { SectionHeader } from '../ui/SectionHeader'

const iconMap = {
  purple: Database,
  blue: FolderKanban,
  orange: ClipboardCheck,
  pink: BriefcaseBusiness,
  lilac: BarChart3,
  'purple-dark': ShieldCheck,
}

export function SolutionSection() {
  return (
    <section className="bg-slate-950 px-4 py-24 text-white md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="A solução"
          title="Um único ambiente para acompanhar toda a jornada do estágio."
          description="A proposta conecta dados, processos e papéis em uma interface centralizada e orientada à gestão escolar e regional."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutionItems.map(({ title, description, accent }, index) => {
            const Icon = iconMap[accent as keyof typeof iconMap]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${
                    accent === 'purple' ? 'bg-violet-500/20 text-violet-200' :
                    accent === 'blue' ? 'bg-blue-500/20 text-blue-200' :
                    accent === 'orange' ? 'bg-orange-500/20 text-orange-200' :
                    accent === 'pink' ? 'bg-pink-500/20 text-pink-200' :
                    accent === 'lilac' ? 'bg-indigo-500/20 text-indigo-200' :
                    'bg-violet-200/20 text-violet-100'
                  }`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
