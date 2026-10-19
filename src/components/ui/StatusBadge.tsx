type StatusBadgeProps = {
  status: 'Em andamento' | 'Concluído' | 'Pendente' | 'Ativa' | 'Em revisão' | 'Aguardando'
}

const palette: Record<StatusBadgeProps['status'], string> = {
  'Em andamento': 'bg-emerald-100 text-emerald-700',
  Concluído: 'bg-violet-100 text-violet-700',
  Pendente: 'bg-amber-100 text-amber-700',
  Ativa: 'bg-emerald-100 text-emerald-700',
  'Em revisão': 'bg-orange-100 text-orange-700',
  Aguardando: 'bg-slate-200 text-slate-700',
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${palette[status]}`}>
      {status}
    </span>
  )
}
