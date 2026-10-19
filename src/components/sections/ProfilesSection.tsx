import { motion } from 'framer-motion'
import { profiles } from '../../data/mockData'
import { SectionHeader } from '../ui/SectionHeader'

export function ProfilesSection() {
  return (
    <section id="profiles" className="bg-[linear-gradient(180deg,#f8f4ff_0%,#ffffff_100%)] px-4 py-24 md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <SectionHeader
          eyebrow="Perfis do sistema"
          title="Cada perfil vê o que precisa."
          description="A experiência é pensada para diferentes papéis e níveis de responsabilidade dentro da rede de formação docente."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profiles.map(({ role, responsibilities, accent }, index) => (
            <motion.article
              key={role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-[var(--brand-shadow-soft)] transition"
            >
              <div
                className={`mb-5 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  accent === 'purple' ? 'bg-violet-100 text-violet-700' :
                  accent === 'blue' ? 'bg-blue-100 text-blue-700' :
                  accent === 'orange' ? 'bg-orange-100 text-orange-700' :
                  accent === 'pink' ? 'bg-pink-100 text-pink-700' :
                  'bg-indigo-100 text-indigo-700'
                }`}
              >
                {index + 1}
              </div>
              <h3 className="text-2xl font-black tracking-[-0.06em] text-slate-900">{role}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {responsibilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
