import { motion, AnimatePresence } from 'framer-motion'
import { useMemo, useState } from 'react'
import { ArrowUpRight, Building2, CreditCard, FileText, Search, Settings, Users } from 'lucide-react'
import { screenTabs, dashboardMetrics, statusDistribution, studentsByPeriod, studentsBySchool, recentRecords } from '../../data/mockData'
import { ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip } from 'recharts'

const tabs = screenTabs
const colors = ['#5f2cc5', '#2c7df7', '#ff8a3d', '#ff5fb2', '#8b5cf6', '#5b9bd5', '#06b6d4', '#e879f9']

export function SystemMockup() {
  const [activeTab, setActiveTab] = useState('Dashboard')

  const activeView = useMemo(() => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardView />
      case 'Alunos':
        return <StudentsView />
      case 'Detalhe do aluno':
        return <StudentDetailView />
      case 'Novo aluno':
        return <NewStudentView />
      case 'Escolas':
        return <SchoolsView />
      case 'Vínculo de estágio':
        return <VinculoView />
      case 'Relatórios':
        return <ReportsView />
      case 'Administração':
        return <AdminView />
      default:
        return <DashboardView />
    }
  }, [activeTab])

  return (
    <section id="system" className="bg-slate-950 px-4 py-24 text-white md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Sistema</p>
          <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Veja como o sistema poderá funcionar.
          </h2>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-[#0f172a] p-3 shadow-[0_40px_80px_rgba(15,23,42,0.45)]">
          <div className="mb-4 flex flex-wrap gap-2 border-b border-white/10 pb-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-3 py-2 text-xs font-medium transition ${
                  activeTab === tab
                    ? 'bg-violet-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {activeView}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function DashboardView() {
  return (
    <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
      <aside className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-sm font-bold text-violet-200">ED</div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Sistema</p>
            <p className="text-sm font-semibold text-white">Estágio Docente</p>
          </div>
        </div>
        <nav className="space-y-2 text-sm text-slate-300">
          {['Visão Geral', 'Alunos', 'Estágios', 'Escolas', 'Relatórios', 'Administração'].map((item, i) => (
            <div key={item} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${i === 0 ? 'bg-violet-500/15 text-violet-100' : 'bg-transparent'}`}>
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              {item}
            </div>
          ))}
        </nav>
      </aside>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-slate-900 p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Boa tarde</p>
            <h3 className="mt-1 text-xl font-bold text-white">Olá, Gerente Regional</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 md:block">
              <span className="inline-flex items-center gap-2"><Search size={14} /> Buscar</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-500 font-bold text-white">
              GR
            </div>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {dashboardMetrics.map((metric) => (
            <div key={metric.label} className="rounded-[20px] border border-white/10 bg-slate-900 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
              <p className="mt-3 text-3xl font-black tracking-[-0.08em] text-white">{metric.value}</p>
              <p className="mt-1 text-xs text-slate-400">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Estágios por situação</p>
              <span className="text-xs text-slate-400">Últimos 6 meses</span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statusDistribution}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} />
                  <Tooltip />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#7c3aed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Estagiários por período</p>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentsByPeriod}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} />
                  <Tooltip />
                  <Bar dataKey="alunos" radius={[8, 8, 0, 0]} fill="#2c7df7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
            <p className="mb-4 text-sm font-semibold text-white">Últimos registros</p>
            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <table className="min-w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/80">
                  <tr>
                    <th className="px-3 py-2">Aluno</th>
                    <th className="px-3 py-2">IES</th>
                    <th className="px-3 py-2">Escola</th>
                    <th className="px-3 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRecords.map((record) => (
                    <tr key={record.aluno} className="border-t border-slate-800">
                      <td className="px-3 py-2 text-white">{record.aluno}</td>
                      <td className="px-3 py-2">{record.ies}</td>
                      <td className="px-3 py-2">{record.escola}</td>
                      <td className="px-3 py-2"><span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-200">{record.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
            <p className="mb-4 text-sm font-semibold text-white">Estagiários por escola</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={studentsBySchool} dataKey="valor" innerRadius={42} outerRadius={72} paddingAngle={2}>
                    {studentsBySchool.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StudentsView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Lista</p>
          <h3 className="mt-1 text-2xl font-black tracking-[-0.06em] text-white">Alunos / Estagiários</h3>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200">+ Novo aluno</button>
        </div>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800/80">
            <tr>
              <th className="px-3 py-2">Aluno</th>
              <th className="px-3 py-2">CPF</th>
              <th className="px-3 py-2">IES</th>
              <th className="px-3 py-2">Curso</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {['João Santos', 'Maria Silva', 'Pedro Costa', 'Ana Souza'].map((aluno, index) => (
              <tr key={aluno} className="border-t border-slate-800">
                <td className="px-3 py-3 text-white">{aluno}</td>
                <td className="px-3 py-3">{['123.456.789-00', '456.789.012-34', '789.012.345-67', '012.345.678-90'][index]}</td>
                <td className="px-3 py-3">{['UFPB', 'UEPB', 'UFCG', 'UNIPÊ'][index]}</td>
                <td className="px-3 py-3">{['Pedagogia', 'História', 'Matemática', 'Língua Portuguesa'][index]}</td>
                <td className="px-3 py-3"><span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-200">{['Em andamento', 'Concluído', 'Pendente', 'Em andamento'][index]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StudentDetailView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Perfil do estagiário</p>
          <h3 className="mt-1 text-2xl font-black text-white">João Santos</h3>
        </div>
        <div className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">Em andamento</div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {['Carga horária prevista', 'Carga horária realizada', 'Data de início', 'Data prevista de término'].map((label, index) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
            <p className="mt-2 text-xl font-black text-white">{['160h', '96h', '02/2025', '12/2025'][index]}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
        <div className="mb-2 flex justify-between text-xs text-slate-300">
          <span>Progresso</span>
          <span>60%</span>
        </div>
        <div className="h-3 rounded-full bg-slate-700">
          <div className="h-3 w-[60%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
        </div>
      </div>
    </div>
  )
}

function NewStudentView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Novo aluno</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {['Nome', 'CPF', 'Matrícula', 'E-mail', 'Telefone', 'Curso'].map((placeholder) => (
          <label key={placeholder} className="block text-sm text-slate-300">
            <span className="mb-2 block">{placeholder}</span>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2.5 text-white outline-none placeholder:text-slate-500" placeholder={placeholder} />
          </label>
        ))}
      </div>
    </div>
  )
}

function SchoolsView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Escolas</h3>
        <div className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300">Capacidade / disponibilidade</div>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {['Colégio Estadual', 'Escola Modelo', 'Centro de Ensino', 'Escola Pioneira'].map((school, index) => (
          <div key={school} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{school}</span>
              <span className="text-[10px] text-emerald-200">Ativa</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>{['Campina Grande', 'João Pessoa', 'Patos', 'Sousa'][index]}</span>
              <span>{['18', '12', '24', '9'][index]} estagiários</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-700">
              <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" style={{ width: ['72%', '58%', '81%', '64%'][index] }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function VinculoView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Vínculo de estágio</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[
          { label: 'Estagiário', value: 'João Santos', icon: Users },
          { label: 'IES', value: 'UFPB', icon: Building2 },
          { label: 'Escola', value: 'Escola Estadual', icon: CreditCard },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
            <Icon size={18} className="text-violet-300" />
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
            <p className="mt-2 text-lg font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReportsView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Relatórios</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {['Relatório por aluno', 'Relatório por escola', 'Relatório regional', 'Relatório estadual'].map((label) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <FileText size={18} className="text-violet-300" />
              <ArrowUpRight size={16} className="text-slate-400" />
            </div>
            <p className="text-sm font-semibold text-white">{label}</p>
            <button className="mt-4 rounded-full bg-violet-500 px-3 py-2 text-xs font-semibold text-white">Visualizar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function AdminView() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-900 p-4">
      <h3 className="text-2xl font-black tracking-[-0.06em] text-white">Administração</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {['Usuários', 'Perfis', 'Parâmetros', 'Permissões', 'Auditoria', 'Logs'].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4">
            <Settings size={18} className="text-violet-300" />
            <p className="mt-3 text-sm font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
