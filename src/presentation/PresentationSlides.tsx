import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCheck,
  ClipboardCheck,
  Clock3,
  Download,
  Eye,
  EyeOff,
  FileCheck2,
  Filter,
  GraduationCap,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  MapPinned,
  Mail,
  Search,
  Settings,
  UserPlus,
  Users,
  X,
} from 'lucide-react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import {
  dashboardByPeriod,
  dashboardBySchool,
  dashboardByStatus,
  dashboardMetrics,
  greActions,
  journeyChecklist,
  journeyTimeline,
  overviewAfter,
  overviewBefore,
  presentationMenu,
  recentRecords,
  schoolCards,
  slideOrder,
  students,
  trackingStudents,
  auditLogs,
} from '../data/mockData'
import { PresentationPage } from './PresentationPage'

const goToHash = (id: string) => {
  window.location.hash = id
}

const emptyStudentForm = {
  name: '',
  email: '',
  cpf: '',
  rg: '',
  birthDate: '',
  phone: '',
  institution: '',
  course: '',
  enrollment: '',
  school: '',
  gre: '',
  supervisor: '',
}

function MetricCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm">
      <p className="text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-black text-slate-900">{value}</p>
    </div>
  )
}

export const slides = [
  {
    id: 'cover',
    label: presentationMenu[0],
    component: function CoverSlide() {
      return (
        <PresentationPage tone="offwhite" reserveNavSpace={false} className="overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('./brand/bg.png')" }}
          />

          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="pointer-events-none absolute left-5 top-20 flex items-center gap-3 md:left-10 md:top-1/2 md:-translate-y-1/2 xl:left-20">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#5a1d7d]/20 bg-white/70 text-[#5a1d7d] backdrop-blur-sm">
                <GraduationCap size={19} strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5a1d7d]">Rede Estadual</p>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-600">Paraíba</p>
              </div>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#f08a39]" />
            </div>

            <div aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex md:right-6 xl:right-12">
              <span className="absolute top-4 bottom-4 w-px bg-[#5a1d7d]/20" />
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#5a1d7d]/15 bg-white/80 text-[#5a1d7d] backdrop-blur-sm">
                <BookOpen size={16} strokeWidth={1.8} />
              </span>
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#4f8ecb]/20 bg-white/80 text-[#4f8ecb] backdrop-blur-sm">
                <Users size={16} strokeWidth={1.8} />
              </span>
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#f08a39]/25 bg-white/80 text-[#d97728] backdrop-blur-sm">
                <Building2 size={16} strokeWidth={1.8} />
              </span>
            </div>

            <button
              type="button"
              onClick={() => goToHash(slides[1].id)}
              className="absolute bottom-24 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#f08a39] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(240,138,57,0.25)] transition hover:-translate-y-0.5"
            >
              Iniciar apresentação
              <ArrowRight size={16} />
            </button>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'overview',
    label: presentationMenu[1],
    component: function OverviewSlide() {
      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-start">
            <div className="mx-auto max-w-5xl">
              <div className="flex items-center justify-center gap-3 text-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <ClipboardCheck size={20} />
                </span>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
                  Visão geral
                </h2>
              </div>
            </div>

            <div className="mt-6 grid items-start gap-4 lg:grid-cols-[1fr_auto_1fr]">
              <div className="self-start rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900">Antes</h3>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-800">Fragmentado</span>
                </div>
                <div className="space-y-2">
                  {overviewBefore.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-700 md:p-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-700"><X size={17} /></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center self-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700 shadow-[0_12px_30px_rgba(74,45,187,0.12)]">
                  <ArrowRight size={21} />
                </div>
              </div>

              <div className="rounded-[22px] border border-blue-200 bg-[#edf7ff] p-3 text-slate-900 shadow-[0_18px_40px_rgba(44,125,247,0.08)] md:p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900">Depois</h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-800">Integrado</span>
                </div>
                <div className="space-y-2">
                  {overviewAfter.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-2.5 text-sm text-slate-700 md:p-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700"><CheckCheck size={17} /></span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'journey',
    label: presentationMenu[2],
    component: function JourneySlide() {
      const [selected, setSelected] = useState('Solicitação do estágio')

      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">Visão da jornada do estagiário</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.08em] text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl">
                Jornada do Estagiário
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Estagiário</p>
                    <h3 className="mt-2 text-3xl font-black tracking-[-0.06em] text-slate-900">Ana Beatriz Silva</h3>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Em andamento
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Curso</p>
                    <p className="mt-2 font-semibold text-slate-800">Licenciatura em Matemática</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">IES</p>
                    <p className="mt-2 font-semibold text-slate-800">Universidade Exemplo</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Status</p>
                    <p className="mt-2 font-semibold text-slate-800">Em andamento</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {journeyTimeline.map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${index < 4 ? 'bg-violet-600' : index === 4 ? 'bg-blue-500' : 'bg-slate-300 text-slate-700'}`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-[0_20px_55px_rgba(15,23,42,0.08)]">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <ClipboardCheck size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Visualização conceitual da jornada</p>
                      <h3 className="text-xl font-black tracking-[-0.06em] text-slate-900">Documentos</h3>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      'Solicitação do estágio',
                      'Recebimento da GRE',
                      'Termo de Ciência e Compromisso',
                      'Execução do estágio',
                    ].map((item, index) => {
                      const isInProgress = index === 3
                      const isSelected = selected === item

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSelected(item)}
                          className={`flex min-h-[72px] items-center gap-3 rounded-2xl border p-3 text-left transition ${
                            isSelected ? 'border-violet-300 bg-violet-50' : 'border-slate-200 bg-slate-50 hover:bg-white'
                          }`}
                        >
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                            isInProgress ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {isInProgress ? <Clock3 size={18} /> : <CheckCheck size={18} />}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold leading-snug text-slate-800">{item}</span>
                            <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.12em] ${
                              isInProgress ? 'text-amber-700' : 'text-emerald-700'
                            }`}>
                              {isInProgress ? 'Em andamento' : 'Concluído'}
                            </span>
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-[30px] border border-slate-200 bg-slate-900 p-5 text-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">{selected}</p>
                  <div className="mt-4 space-y-3">
                    {journeyChecklist.map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 px-3 py-2">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${index < 4 ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                          {index < 4 ? '✓' : '○'}
                        </span>
                        <span className="text-sm text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'gre',
    label: presentationMenu[3],
    component: function GRESlide() {
      const [selectedAction, setSelectedAction] = useState(greActions[0].key)
      const current = greActions.find((item) => item.key === selectedAction) ?? greActions[0]

      return (
        <PresentationPage tone="blue" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Gerência Regional</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.08em] text-slate-900 sm:text-4xl md:text-5xl xl:text-6xl">
                Estudante, Escola e Gerência
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-2 rounded-[30px] border border-blue-200 bg-white p-4 shadow-[0_20px_50px_rgba(44,125,247,0.12)] md:space-y-3 md:p-5">
                {greActions.map((action) => (
                  <button
                    key={action.key}
                    type="button"
                    onClick={() => setSelectedAction(action.key)}
                    className={`w-full rounded-[22px] border p-3 text-left transition md:p-4 ${
                      selectedAction === action.key ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">{action.title}</span>
                      <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-700">
                        {action.label}
                      </span>
                    </div>
                    <p className="mt-2 hidden text-sm text-slate-600 md:block">{action.detail}</p>
                  </button>
                ))}
              </div>

              <div className="rounded-[30px] border border-blue-200 bg-slate-900 p-5 text-white shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200">Ação selecionada</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.06em] text-white">{current.title}</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                    {selectedAction === 'cadastrar' ? <BookOpen size={18} /> : selectedAction === 'escolas' ? <Building2 size={18} /> : <BarChart3 size={18} />}
                  </div>
                </div>

                {selectedAction === 'cadastrar' ? (
                  <div className="mt-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-slate-200">Perfil do estudante</p>
                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200">Exemplo demonstrativo</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        { label: 'Nome completo', value: 'Ana Beatriz Silva' },
                        { label: 'CPF', value: '123.456.789-00' },
                        { label: 'Matrícula', value: '20260001' },
                        { label: 'Curso', value: 'Licenciatura em Matemática' },
                        { label: 'Faculdade', value: 'Universidade Federal da Paraíba' },
                        { label: 'Escola', value: 'Escola Estadual Pioneira' },
                        { label: 'Data de nascimento', value: '14/03/2003' },
                      ].map((field) => (
                        <div key={field.label} className="rounded-xl border border-slate-700 bg-slate-800/80 p-3">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">{field.label}</p>
                          <p className="mt-1.5 text-sm font-medium text-white">{field.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : selectedAction === 'escolas' ? (
                  <div className="mt-5">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">1ª Gerência Regional</p>
                        <h4 className="mt-1 text-lg font-bold text-white">Escolas e estudantes cadastrados</h4>
                      </div>
                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200">Dados demonstrativos</span>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-slate-800/80 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Escolas</p>
                        <p className="mt-1 text-2xl font-black text-white">3</p>
                      </div>
                      <div className="rounded-xl bg-slate-800/80 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Estudantes cadastrados</p>
                        <p className="mt-1 text-2xl font-black text-white">39</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: 'Escola Estadual Pioneira', students: 18 },
                        { name: 'Colégio Municipal do Saber', students: 12 },
                        { name: 'Centro de Ensino de Patos', students: 9 },
                      ].map((school) => (
                        <div key={school.name} className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3">
                          <span className="text-sm text-slate-100">{school.name}</span>
                          <span className="shrink-0 text-xs font-semibold text-blue-200">{school.students} estudantes</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-800/70 p-4">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">Relatório regional</p>
                        <h4 className="mt-1 text-lg font-bold text-white">15ª Gerência Regional</h4>
                      </div>
                      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-200">Exemplo demonstrativo</span>
                    </div>
                    <p className="text-sm text-slate-300">Escolas da regional com estudantes cadastrados</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                        <div className="flex items-center gap-2 text-blue-200"><Building2 size={16} /><span className="text-[10px] font-semibold uppercase tracking-[0.14em]">Escolas</span></div>
                        <p className="mt-2 text-3xl font-black text-white">18</p>
                        <p className="mt-1 text-xs text-slate-400">com estudantes cadastrados</p>
                      </div>
                      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                        <div className="flex items-center gap-2 text-cyan-200"><Users size={16} /><span className="text-[10px] font-semibold uppercase tracking-[0.14em]">Estudantes</span></div>
                        <p className="mt-2 text-3xl font-black text-white">126</p>
                        <p className="mt-1 text-xs text-slate-400">cadastrados na regional</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'system',
    label: presentationMenu[4],
    component: function SystemOverviewSlide() {
      const [passwordVisible, setPasswordVisible] = useState(false)
      const [feedback, setFeedback] = useState('')

      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 flex h-full items-center justify-center px-2 py-5">
            <div className="w-full max-w-[430px] rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(39,34,81,0.12)] sm:p-7">
              <div className="mb-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-700 text-white shadow-[0_12px_28px_rgba(74,45,187,0.25)]">
                  <GraduationCap size={28} strokeWidth={1.8} />
                </div>
                <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">Estágio Docente</h2>
                <p className="mt-1 text-sm text-slate-500">Acesse sua área de acompanhamento</p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  goToHash('dashboard')
                }}
                className="space-y-4"
              >
                <label htmlFor="login-identifier" className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">E-mail ou CPF</span>
                  <span className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 text-slate-400 transition focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100">
                    <Mail size={17} />
                    <input
                      id="login-identifier"
                      name="identifier"
                      type="text"
                      autoComplete="username"
                      placeholder="Digite seu e-mail ou CPF"
                      required
                      className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    />
                  </span>
                </label>

                <label htmlFor="login-password" className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">Senha</span>
                  <span className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 text-slate-400 transition focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-100">
                    <LockKeyhole size={17} />
                    <input
                      id="login-password"
                      name="password"
                      type={passwordVisible ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder="Digite sua senha"
                      required
                      className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      aria-label={passwordVisible ? 'Ocultar senha' : 'Mostrar senha'}
                      onClick={() => setPasswordVisible((visible) => !visible)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-violet-700"
                    >
                      {passwordVisible ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </span>
                </label>

                <div className="flex items-center justify-between gap-3 text-xs">
                  <label className="inline-flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-violet-700" />
                    Manter conectado
                  </label>
                  <button
                    type="button"
                    onClick={() => setFeedback('Recuperação de senha demonstrativa.')}
                    className="font-semibold text-violet-700 hover:text-violet-900"
                  >
                    Esqueci minha senha
                  </button>
                </div>

                {feedback ? <p aria-live="polite" className="text-xs text-slate-500">{feedback}</p> : null}

                <button type="submit" className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-violet-700 text-sm font-bold text-white shadow-sm transition hover:bg-violet-800">
                  <KeyRound size={16} />
                  Entrar
                </button>
              </form>

              <p className="mt-5 text-center text-[11px] leading-relaxed text-slate-400">Acesso demonstrativo. Ao entrar, você seguirá para o dashboard.</p>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'dashboard',
    label: presentationMenu[5],
    component: function DashboardSlide() {
      return (
        <PresentationPage tone="offwhite" contentViewport="expanded" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto h-full w-full min-w-0 max-w-[1500px]">
            <div className="h-full rounded-[20px] border border-slate-200 bg-white p-2 shadow-[0_16px_36px_rgba(15,23,42,0.07)]">
              <div className="grid h-full min-w-0 gap-3 lg:grid-cols-[225px_minmax(0,1fr)]">
                <aside className="rounded-2xl border border-violet-100 bg-[#f5f2fb] p-3">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-700 text-sm font-bold text-white">ED</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-violet-700">Sistema</p>
                      <p className="text-sm font-semibold text-slate-900">Estágio Docente</p>
                    </div>
                  </div>

                  <nav className="space-y-2 text-sm text-slate-700">
                    {[
                      { label: 'Visão Geral', icon: <LayoutDashboard size={18} /> },
                      { label: 'Alunos', icon: <Users size={18} /> },
                      { label: 'Estágios', icon: <ClipboardCheck size={18} /> },
                      { label: 'Escolas', icon: <Building2 size={18} /> },
                      { label: 'Relatórios', icon: <BarChart3 size={18} /> },
                      { label: 'Administração', icon: <Settings size={18} /> },
                    ].map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          if (item.label === 'Alunos') goToHash('students')
                          if (item.label === 'Escolas') goToHash('schools')
                          if (item.label === 'Relatórios') goToHash('reports')
                          if (item.label === 'Administração') goToHash('audit')
                        }}
                        className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition ${index === 0 ? 'bg-violet-700 text-white shadow-sm' : 'bg-transparent hover:bg-white'}`}
                      >
                        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${index === 0 ? 'bg-white/15 text-white' : 'bg-white text-violet-700'}`}>{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </aside>

                <div className="flex h-full min-w-0 flex-col gap-2">
                  <div className="flex shrink-0 flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.14em] text-violet-700">Boa tarde</p>
                      <h3 className="mt-0.5 text-lg font-black text-slate-900">Olá, Gerente Regional</h3>
                      <p className="text-xs text-slate-500">1ª Gerência Regional de Educação</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 md:block">
                        <span className="inline-flex items-center gap-2"><Search size={12} /> Buscar</span>
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-500 text-xs font-bold text-white">GR</div>
                    </div>
                  </div>

                  <div className="grid shrink-0 gap-2 md:grid-cols-5">
                    {dashboardMetrics.map((metric) => (
                      <MetricCard key={metric.label} label={metric.label} value={metric.value} />
                    ))}
                  </div>

                  <div className="grid min-h-0 min-w-0 flex-1 gap-2 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                    <div className="flex h-full min-h-0 min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      <p className="mb-2 shrink-0 text-sm font-semibold text-slate-900">Estágios por situação</p>
                      <div className="min-h-[120px] flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={dashboardByStatus} margin={{ top: 2, right: 4, bottom: 0, left: -18 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={9} tickLine={false} />
                            <YAxis stroke="#64748b" fontSize={9} tickLine={false} />
                            <Tooltip contentStyle={{ borderRadius: 10, borderColor: '#e2e8f0', fontSize: 11 }} />
                            <Bar dataKey="value" fill="#4a2dbb" radius={[6, 6, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="flex h-full min-h-0 min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      <p className="mb-2 shrink-0 text-sm font-semibold text-slate-900">Estagiários por período</p>
                      <div className="min-h-[120px] flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={dashboardByPeriod} margin={{ top: 2, right: 4, bottom: 0, left: -18 }}>
                            <defs>
                              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#39a1f2" stopOpacity={0.55} />
                                <stop offset="95%" stopColor="#39a1f2" stopOpacity={0.04} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="name" stroke="#64748b" fontSize={9} tickLine={false} />
                            <YAxis stroke="#64748b" fontSize={9} tickLine={false} />
                            <Tooltip contentStyle={{ borderRadius: 10, borderColor: '#e2e8f0', fontSize: 11 }} />
                            <Area type="monotone" dataKey="value" stroke="#4a2dbb" strokeWidth={2.5} fillOpacity={1} fill="url(#colorUv)" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  <div className="grid min-h-0 min-w-0 flex-1 gap-2 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                    <div className="min-h-0 min-w-0 self-start rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      <p className="mb-2 text-sm font-semibold text-slate-900">Últimos registros</p>
                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="min-w-[480px] text-left text-sm text-slate-600">
                          <thead className="bg-slate-50 text-slate-500">
                            <tr>
                              <th className="px-2 py-1 text-xs">Aluno</th>
                              <th className="px-2 py-1 text-xs">IES</th>
                              <th className="px-2 py-1 text-xs">Escola</th>
                              <th className="px-2 py-1 text-xs">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {recentRecords.map((record) => (
                              <tr key={record.aluno} className="border-t border-slate-100">
                                <td className="px-2 py-1 text-xs font-medium text-slate-900">{record.aluno}</td>
                                <td className="px-2 py-1 text-xs">{record.ies}</td>
                                <td className="px-2 py-1 text-xs">{record.escola}</td>
                                <td className="px-2 py-1 text-xs">
                                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${record.status === 'Em andamento' ? 'bg-amber-100 text-amber-800' : record.status === 'Concluído' ? 'bg-emerald-100 text-emerald-800' : record.status === 'Pendente' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'}`}>{record.status}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex h-full min-h-0 min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      <p className="mb-2 shrink-0 text-sm font-semibold text-slate-900">Estagiários por escola</p>
                      <div className="min-h-[120px] flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie data={dashboardBySchool} dataKey="value" nameKey="name" innerRadius={54} outerRadius={90} paddingAngle={3}>
                              {dashboardBySchool.map((entry, index) => (
                                <Cell key={entry.name} fill={['#5a1d7d', '#2c7df7', '#f08a39', '#16a34a', '#ec4899'][index % 5]} />
                              ))}
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: 12, borderColor: '#e2e8f0' }} />
                            <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: 11, color: '#475569' }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'students',
    label: presentationMenu[6],
    component: function StudentsSlide() {
      const [form, setForm] = useState(emptyStudentForm)
      const [feedback, setFeedback] = useState('')
      const formGroups = [
        {
          title: 'Dados pessoais',
          fields: [
            { name: 'name', label: 'Nome completo', type: 'text', placeholder: 'Digite o nome completo' },
            { name: 'email', label: 'E-mail', type: 'email', placeholder: 'estudante@email.com' },
            { name: 'cpf', label: 'CPF', type: 'text', placeholder: '000.000.000-00' },
            { name: 'rg', label: 'RG', type: 'text', placeholder: 'Número do documento' },
            { name: 'birthDate', label: 'Data de nascimento', type: 'date', placeholder: '' },
            { name: 'phone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
          ],
        },
        {
          title: 'Vínculo acadêmico',
          fields: [
            { name: 'institution', label: 'Faculdade / IES', type: 'text', placeholder: 'Nome da instituição' },
            { name: 'course', label: 'Curso', type: 'text', placeholder: 'Curso de licenciatura' },
            { name: 'enrollment', label: 'Matrícula', type: 'text', placeholder: 'Número de matrícula' },
          ],
        },
        {
          title: 'Local de estágio',
          fields: [
            { name: 'school', label: 'Escola', type: 'text', placeholder: 'Nome da escola' },
            { name: 'gre', label: 'Gerência Regional', type: 'text', placeholder: 'Ex.: GRE 01' },
            { name: 'supervisor', label: 'Professor supervisor', type: 'text', placeholder: 'Nome do professor' },
          ],
        },
      ] as const

      const startNewStudent = () => {
        setForm({ ...emptyStudentForm })
        setFeedback('Novo cadastro em branco.')
      }

      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">Alunos / Estagiários</p>
                  <h2 className="mt-1 text-2xl font-black text-slate-900 md:text-3xl">Cadastro de estudante</h2>
                </div>
              </div>
              <button type="button" onClick={startNewStudent} className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-800 sm:self-auto">
                <UserPlus size={16} />
                Novo estagiário
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                setFeedback('Cadastro demonstrativo pronto para revisão.')
              }}
              className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] md:p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Users size={19} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Identificação e vínculos</h3>
                    <p className="text-xs text-slate-500">Preencha os dados do estudante</p>
                  </div>
                </div>
                <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:inline-flex">Formulário demonstrativo</span>
              </div>

              <div className="space-y-4">
                {formGroups.map((group) => (
                  <section key={group.title}>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{group.title}</h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {group.fields.map((field) => (
                        <label key={field.name} htmlFor={`student-${field.name}`} className="block min-w-0">
                          <span className="mb-1 block text-xs font-semibold text-slate-700">{field.label}</span>
                          <input
                            id={`student-${field.name}`}
                            name={field.name}
                            type={field.type}
                            value={form[field.name]}
                            placeholder={field.placeholder}
                            onChange={(event) => {
                              const value = event.currentTarget.value
                              setForm((current) => ({ ...current, [field.name]: value }))
                              setFeedback('')
                            }}
                            className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                          />
                        </label>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <p aria-live="polite" className="min-h-5 text-xs text-slate-500">{feedback || 'Dados demonstrativos para visualização do formulário.'}</p>
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-800">
                  Salvar cadastro
                </button>
              </div>
            </form>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'schools',
    label: presentationMenu[7],
    component: function SchoolsSlide() {
      const accessibleSchools = schoolCards.filter((school) => school.gre === 'GRE 01')
      const [selectedSchoolName, setSelectedSchoolName] = useState(accessibleSchools[0]?.nome ?? '')
      const selectedSchool = accessibleSchools.find((school) => school.nome === selectedSchoolName) ?? accessibleSchools[0]

      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">Gerência Regional</p>
                <h2 className="mt-1 text-3xl font-black text-slate-900">Escolas</h2>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-violet-200 bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-800 sm:self-auto">
                <MapPinned size={15} />
                1ª Gerência Regional
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.6fr)]">
              <aside className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                <div className="mb-4">
                  <h3 className="text-base font-bold text-slate-900">Escolas da gerência</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">A lista mostra somente unidades vinculadas à sua gerência.</p>
                </div>

                <label htmlFor="school-select" className="mb-2 block text-xs font-semibold text-slate-700">Selecionar escola</label>
                <div className="relative">
                  <select
                    id="school-select"
                    value={selectedSchool?.nome ?? ''}
                    onChange={(event) => setSelectedSchoolName(event.currentTarget.value)}
                    className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 pr-9 text-sm font-medium text-slate-800 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  >
                    {accessibleSchools.map((school) => <option key={school.nome} value={school.nome}>{school.nome}</option>)}
                  </select>
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">⌄</span>
                </div>

                <div className="mt-4 space-y-2">
                  {accessibleSchools.map((school) => (
                    <button
                      key={school.nome}
                      type="button"
                      onClick={() => setSelectedSchoolName(school.nome)}
                      aria-pressed={selectedSchool?.nome === school.nome}
                      className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${selectedSchool?.nome === school.nome ? 'border-violet-200 bg-violet-50' : 'border-transparent bg-slate-50 hover:bg-slate-100'}`}
                    >
                      <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${selectedSchool?.nome === school.nome ? 'bg-violet-700 text-white' : 'bg-white text-violet-700'}`}>
                        <Building2 size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold leading-snug text-slate-900">{school.nome}</span>
                        <span className="mt-1 block text-xs text-slate-500">{school.municipio}, PB</span>
                      </span>
                    </button>
                  ))}
                </div>

                <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500">O escopo da consulta é definido pela gerência vinculada ao usuário.</p>
              </aside>

              {selectedSchool ? (
                <div className="space-y-4">
                  <section className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                          <Building2 size={26} />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Cadastro da unidade escolar</p>
                          <h3 className="mt-1 text-xl font-black text-slate-900 md:text-2xl">{selectedSchool.nome}</h3>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><MapPinned size={14} className="text-blue-600" />{selectedSchool.municipio}, Paraíba</p>
                        </div>
                      </div>
                      <span className="self-start rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-800">{selectedSchool.situacao}</span>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Código INEP</p>
                        <p className="mt-1.5 text-lg font-bold text-slate-900">{selectedSchool.inep}</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Gerência vinculada</p>
                        <p className="mt-1.5 text-lg font-bold text-slate-900">{selectedSchool.gre}</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Estagiários cadastrados</p>
                        <p className="mt-1.5 text-lg font-bold text-slate-900">{selectedSchool.estagiarios}</p>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-[22px] border border-blue-100 bg-[#edf7ff] p-4 md:p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700"><Users size={18} /></div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Dados da escola</h4>
                        <p className="text-xs text-slate-600">Informações básicas disponíveis para esta unidade.</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Município</p><p className="mt-1 font-medium text-slate-800">{selectedSchool.municipio}</p></div>
                      <div><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Localização</p><p className="mt-1 font-medium text-slate-800">{selectedSchool.municipio} - PB</p></div>
                    </div>
                  </section>
                </div>
              ) : (
                <div className="flex min-h-64 items-center justify-center rounded-[22px] border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
                  Nenhuma escola disponível para esta gerência.
                </div>
              )}
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'tracking',
    label: presentationMenu[8],
    component: function TrackingSlide() {
      const accessibleSchools = schoolCards.filter((school) => school.gre === 'GRE 01')
      const [selectedSchoolName, setSelectedSchoolName] = useState(accessibleSchools[0]?.nome ?? '')
      const selectedSchool = accessibleSchools.find((school) => school.nome === selectedSchoolName) ?? accessibleSchools[0]
      const studentsInSchool = trackingStudents.filter((student) => student.gre === 'GRE 01' && student.school === selectedSchool?.nome)
      const [selectedStudentId, setSelectedStudentId] = useState(studentsInSchool[0]?.id ?? '')
      const selectedStudent = studentsInSchool.find((student) => student.id === selectedStudentId) ?? studentsInSchool[0]

      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">Estágios por unidade</p>
                <h2 className="mt-1 text-3xl font-black text-slate-900">Acompanhamento</h2>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-violet-200 bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-800 sm:self-auto">
                <MapPinned size={15} />
                1ª Gerência Regional
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.6fr)]">
              <aside className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                <div className="mb-4">
                  <h3 className="text-base font-bold text-slate-900">Escolas da gerência</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">Selecione uma escola para consultar os estudantes e as etapas.</p>
                </div>
                <div className="space-y-2">
                  {accessibleSchools.map((school) => {
                    const schoolStudentCount = trackingStudents.filter((student) => student.gre === 'GRE 01' && student.school === school.nome).length
                    const isSelected = selectedSchool?.nome === school.nome

                    return (
                      <button
                        key={school.nome}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedSchoolName(school.nome)
                          const firstStudent = trackingStudents.find((student) => student.gre === 'GRE 01' && student.school === school.nome)
                          setSelectedStudentId(firstStudent?.id ?? '')
                        }}
                        className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition ${isSelected ? 'border-violet-200 bg-violet-50' : 'border-transparent bg-slate-50 hover:bg-slate-100'}`}
                      >
                        <span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isSelected ? 'bg-violet-700 text-white' : 'bg-white text-violet-700'}`}><Building2 size={17} /></span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold leading-snug text-slate-900">{school.nome}</span>
                          <span className="mt-1 block text-xs text-slate-500">{school.municipio}, PB</span>
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-600">{schoolStudentCount}</span>
                      </button>
                    )
                  })}
                </div>
                <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500">A consulta considera somente a gerência vinculada ao usuário.</p>
              </aside>

              <div className="min-w-0 space-y-4">
                <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Estudantes na escola</p>
                      <h3 className="mt-1 text-xl font-black text-slate-900">{selectedSchool?.nome ?? 'Escola não selecionada'}</h3>
                    </div>
                    <span className="self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 sm:self-auto">{studentsInSchool.length} {studentsInSchool.length === 1 ? 'estudante' : 'estudantes'}</span>
                  </div>

                  {studentsInSchool.length ? (
                    <div className="space-y-2">
                      {studentsInSchool.map((student) => {
                        const isSelected = selectedStudent?.id === student.id
                        const isAwaitingTerm = student.currentStage === 'Aguardando termo'

                        return (
                          <button
                            key={student.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => setSelectedStudentId(student.id)}
                            className={`grid w-full gap-2 rounded-xl border p-3 text-left transition sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto] sm:items-center ${isSelected ? 'border-blue-200 bg-blue-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700"><Users size={16} /></span>
                              <span className="min-w-0">
                                <span className="block truncate text-sm font-semibold text-slate-900">{student.name}</span>
                                <span className="block truncate text-xs text-slate-500">{student.ies} · {student.course}</span>
                              </span>
                            </span>
                            <span className="text-xs text-slate-600">{student.documents}</span>
                            <span className={`justify-self-start rounded-full px-2.5 py-1 text-[10px] font-semibold ${isAwaitingTerm ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>{student.currentStage}</span>
                          </button>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center text-sm text-slate-500">Nenhum estudante demonstrativo vinculado a esta escola.</div>
                  )}
                </section>

                {selectedStudent ? (
                  <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-700">Processo do estudante</p>
                        <h3 className="mt-1 text-lg font-black text-slate-900">{selectedStudent.name}</h3>
                      </div>
                      <span className={`self-start rounded-full px-3 py-1.5 text-xs font-semibold ${selectedStudent.currentStage === 'Aguardando termo' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}`}>{selectedStudent.currentStage}</span>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className={`rounded-xl p-3 ${selectedStudent.currentStage === 'Aguardando termo' ? 'bg-amber-50' : 'bg-emerald-50'}`}>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">Documentação</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">{selectedStudent.documents}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">Etapa atual</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">{selectedStudent.currentStage}</p>
                      </div>
                      <div className="rounded-xl bg-blue-50 p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-slate-500">Próxima etapa</p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">{selectedStudent.nextStep}</p>
                      </div>
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'reports',
    label: presentationMenu[9],
    component: function ReportsSlide() {
      const schoolOptions = Array.from(new Set(students.map((student) => student.escola))).sort()
      const regionalOptions = Array.from(new Set(students.map((student) => student.gre))).sort()
      const statusOptions = ['Todos', 'Em andamento', 'Concluído', 'Pendente', 'Inativo']
      const [viewBy, setViewBy] = useState<'school' | 'region'>('school')
      const [selectedSchool, setSelectedSchool] = useState(schoolOptions[0] ?? '')
      const [selectedRegion, setSelectedRegion] = useState(regionalOptions[0] ?? '')
      const [selectedStatus, setSelectedStatus] = useState('Todos')
      const [exportFeedback, setExportFeedback] = useState('')
      const filteredStudents = students.filter((student) => {
        const matchesScope = viewBy === 'school' ? student.escola === selectedSchool : student.gre === selectedRegion
        const matchesStatus = selectedStatus === 'Todos' || student.status === selectedStatus
        return matchesScope && matchesStatus
      })
      const filteredSchoolCount = new Set(filteredStudents.map((student) => student.escola)).size
      const inProgressCount = filteredStudents.filter((student) => student.status === 'Em andamento').length
      const completedCount = filteredStudents.filter((student) => student.status === 'Concluído').length
      const pendingCount = filteredStudents.filter((student) => student.status === 'Pendente').length

      const exportSpreadsheet = () => {
        const rows = [
          ['Estudante', 'CPF', 'IES', 'Curso', 'Escola', 'GRE', 'Situação'],
          ...filteredStudents.map((student) => [student.nome, student.cpf, student.ies, student.curso, student.escola, student.gre, student.status]),
        ]
        const csv = `\uFEFF${rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(';')).join('\r\n')}`
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
        const downloadUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        const scopeName = viewBy === 'school' ? selectedSchool : selectedRegion

        link.href = downloadUrl
        link.download = `relatorio-${scopeName.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}.csv`
        document.body.appendChild(link)
        link.click()
        link.remove()
        window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 0)
        setExportFeedback(`Planilha exportada com ${filteredStudents.length} ${filteredStudents.length === 1 ? 'registro' : 'registros'}.`)
      }

      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">Consultas e exportação</p>
                <h2 className="mt-1 text-3xl font-black text-slate-900">Relatórios</h2>
              </div>
              <button type="button" onClick={exportSpreadsheet} className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-violet-700 px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_26px_rgba(74,45,187,0.22)] transition hover:bg-violet-800 sm:self-auto">
                <Download size={17} />
                Exportar planilha
              </button>
            </div>

            <div className="mb-4 rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                <Filter size={15} className="text-violet-700" />
                Filtros do relatório
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[0.8fr_1fr_1fr_auto] xl:items-end">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-700">Visualizar por</span>
                  <select value={viewBy} onChange={(event) => setViewBy(event.currentTarget.value as 'school' | 'region')} className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                    <option value="school">Escola</option>
                    <option value="region">Regional</option>
                  </select>
                </label>
                {viewBy === 'school' ? (
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold text-slate-700">Escola</span>
                    <select value={selectedSchool} onChange={(event) => setSelectedSchool(event.currentTarget.value)} className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                      {schoolOptions.map((school) => <option key={school} value={school}>{school}</option>)}
                    </select>
                  </label>
                ) : (
                  <label className="block">
                    <span className="mb-1 block text-xs font-semibold text-slate-700">Gerência Regional</span>
                    <select value={selectedRegion} onChange={(event) => setSelectedRegion(event.currentTarget.value)} className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                      {regionalOptions.map((region) => <option key={region} value={region}>{region}</option>)}
                    </select>
                  </label>
                )}
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold text-slate-700">Situação</span>
                  <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.currentTarget.value)} className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
                    {statusOptions.map((status) => <option key={status} value={status}>{status}</option>)}
                  </select>
                </label>
                <p className="text-[11px] leading-relaxed text-slate-500 xl:max-w-40">Exportação em CSV compatível com Excel.</p>
              </div>
              {exportFeedback ? <p aria-live="polite" className="mt-3 text-xs font-medium text-emerald-700">{exportFeedback}</p> : null}
            </div>

            <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-5">
              {[
                { label: 'Estudantes encontrados', value: filteredStudents.length },
                { label: 'Em andamento', value: inProgressCount },
                { label: 'Concluídos', value: completedCount },
                { label: 'Pendentes', value: pendingCount },
                { label: 'Escolas no resultado', value: filteredSchoolCount },
              ].map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-xl font-black text-slate-900">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-1 border-b border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-sm font-bold text-slate-900">Detalhamento de estudantes</h3>
                <p className="text-xs text-slate-500">{filteredStudents.length} {filteredStudents.length === 1 ? 'registro' : 'registros'} · dados demonstrativos</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm text-slate-600">
                  <thead className="bg-slate-50 text-xs text-slate-500">
                    <tr>
                      <th className="px-4 py-2.5 font-semibold">Estudante</th>
                      <th className="px-4 py-2.5 font-semibold">CPF</th>
                      <th className="px-4 py-2.5 font-semibold">Escola</th>
                      <th className="px-4 py-2.5 font-semibold">IES / Curso</th>
                      <th className="px-4 py-2.5 font-semibold">GRE</th>
                      <th className="px-4 py-2.5 font-semibold">Situação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredStudents.map((student) => (
                      <tr key={student.cpf} className="border-t border-slate-100">
                        <td className="px-4 py-2.5 font-semibold text-slate-900">{student.nome}</td>
                        <td className="px-4 py-2.5">{student.cpf}</td>
                        <td className="px-4 py-2.5">{student.escola}</td>
                        <td className="px-4 py-2.5">{student.ies} · {student.curso}</td>
                        <td className="px-4 py-2.5">{student.gre}</td>
                        <td className="px-4 py-2.5">
                          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${student.status === 'Em andamento' ? 'bg-amber-100 text-amber-800' : student.status === 'Concluído' ? 'bg-emerald-100 text-emerald-800' : student.status === 'Pendente' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'}`}>{student.status}</span>
                        </td>
                      </tr>
                    ))}
                    {filteredStudents.length === 0 ? (
                      <tr><td colSpan={6} className="px-4 py-10 text-center text-sm text-slate-500">Nenhum estudante encontrado para esses filtros.</td></tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
  {
    id: 'audit',
    label: presentationMenu[10],
    component: function AuditSlide() {
      return (
        <PresentationPage tone="offwhite" className="px-4 pt-20 md:px-8">
          <div className="relative z-10 mx-auto max-w-[1500px]">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-700">Registro de atividades</p>
                <h2 className="mt-1 text-3xl font-black text-slate-900">Administração</h2>
              </div>
              <span className="self-start rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:self-auto">Dados demonstrativos</span>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Atividades recentes</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Ações registradas no sistema</p>
                </div>
                <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-800">{auditLogs.length} eventos</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-sm">
                  <thead className="bg-slate-50 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    <tr>
                      <th className="px-4 py-2">Data e hora</th>
                      <th className="px-4 py-2">Usuário</th>
                      <th className="px-4 py-2">Ação</th>
                      <th className="px-4 py-2">Detalhes</th>
                      <th className="px-4 py-2">Resultado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditLogs.map((log) => {
                      const eventStyle = log.type === 'Cadastro'
                        ? 'bg-blue-100 text-blue-800'
                        : log.type === 'Documento'
                          ? 'bg-violet-100 text-violet-800'
                          : log.type === 'Relatório'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-emerald-100 text-emerald-800'
                      const EventIcon = log.type === 'Cadastro'
                        ? UserPlus
                        : log.type === 'Documento'
                          ? FileCheck2
                          : log.type === 'Relatório'
                            ? Download
                            : CheckCheck

                      return (
                        <tr key={`${log.date}-${log.time}-${log.action}`} className="border-t border-slate-100 align-top">
                          <td className="whitespace-nowrap px-4 py-2">
                            <p className="font-semibold text-slate-800">{log.time}</p>
                            <p className="mt-0.5 text-xs text-slate-500">{log.date}</p>
                          </td>
                          <td className="px-4 py-2">
                            <p className="font-semibold text-slate-900">{log.actor}</p>
                            <p className="mt-0.5 text-xs text-slate-500">{log.profile} · {log.scope}</p>
                          </td>
                          <td className="px-4 py-2">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${eventStyle}`}>
                              <EventIcon size={13} />
                              {log.type}
                            </span>
                            <p className="mt-1.5 font-medium text-slate-800">{log.action}</p>
                          </td>
                          <td className="max-w-[360px] px-4 py-2 text-slate-600">{log.detail}</td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700"><CheckCheck size={14} />{log.result}</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </PresentationPage>
      )
    },
  },
]

export const slideIndexById = Object.fromEntries(slideOrder.map((id, index) => [id, index]))
