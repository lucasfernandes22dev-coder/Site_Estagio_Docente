import { motion } from 'framer-motion'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  label: string
}

export function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-[24px] border border-violet-100 bg-white/80 p-6 shadow-[var(--brand-shadow-soft)] backdrop-blur-sm"
    >
      <div className="text-4xl font-black tracking-[-0.08em] text-violet-700 md:text-5xl">
        {value}
        {suffix}
      </div>
      <p className="mt-3 text-sm text-slate-600">{label}</p>
    </motion.div>
  )
}
