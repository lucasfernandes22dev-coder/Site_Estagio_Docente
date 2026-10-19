export function ClosingSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#4f2aa7_0%,#331d64_100%)] px-4 py-24 text-white md:px-8 lg:px-0">
      <div className="mx-auto max-w-[1180px] rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-[0_40px_80px_rgba(38,25,62,0.25)] backdrop-blur-sm md:p-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">Encerramento</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] md:text-6xl">
            Uma nova forma de acompanhar a formação de futuros professores.
          </h2>
          <p className="mt-6 text-lg text-violet-100 md:text-xl">
            Gestão integrada, informação organizada e acompanhamento de toda a jornada do estágio docente.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black tracking-[-0.06em]">Estágio Docente</div>
            <div className="text-sm uppercase tracking-[0.18em] text-violet-200">Rede Estadual da Paraíba</div>
          </div>
          
          <div className="flex gap-3">
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100">
              Gestão institucional
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-100">
              Educação em rede
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
