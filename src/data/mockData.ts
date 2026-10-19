// Dados utilizados exclusivamente para demonstração do protótipo.

export const overviewBefore = [
  'Planilhas',
  'Documentos',
  'Dados separados',
  'Processos manuais',
]

export const overviewAfter = [
  'Base centralizada',
  'Dashboard',
  'Acompanhamento',
  'Histórico',
  'Relatórios',
  'Visão regional',
  'Visão estadual',
]

export const journeyChecklist = [
  'Requerimento entregue',
  'Termo assinado',
  'Escola confirmada',
  'Registro de frequência',
  'Carga horária concluída',
  'Relatório final entregue',
]

export const journeyTimeline = [
  '01 Solicitação do estágio',
  '02 Análise / recebimento da GRE',
  '03 Encaminhamento',
  '04 Termo de Ciência e Compromisso',
  '05 Execução do estágio',
  '06 Relatório final / conclusão',
]

export const greActions = [
  {
    key: 'cadastrar',
    title: 'Cadastrar estudante',
    detail: 'Cadastro inicial com revisão de dados pessoais e acadêmicos.',
    label: 'Formulário',
  },
  {
    key: 'escolas',
    title: 'Consultar escolas',
    detail: 'Visualização das unidades escolares vinculadas por município e GRE.',
    label: 'Lista',
  },
  {
    key: 'relatorio',
    title: 'Relatório regional',
    detail: 'Resumo consolidado por indicadores, pendências e evolução do estágio.',
    label: 'Prévia',
  },
]

export const regionalStats = [
  { name: 'GRE 01', value: 18 },
  { name: 'GRE 02', value: 16 },
  { name: 'GRE 03', value: 14 },
  { name: 'GRE 04', value: 13 },
  { name: 'GRE 05', value: 11 },
  { name: 'GRE 06', value: 10 },
]

export const systemModules = [
  { title: 'Autenticação', purpose: 'Organiza a entrada de cada pessoa no ambiente do sistema.', use: 'Ajuda a direcionar o acesso às áreas conforme o perfil de trabalho.' },
  { title: 'Alunos', purpose: 'Reúne os dados cadastrais e acadêmicos dos estagiários.', use: 'Facilita a consulta e a atualização do perfil de cada estudante.' },
  { title: 'Vínculos', purpose: 'Relaciona estudante, curso, instituição de ensino, escola e GRE.', use: 'Permite visualizar as informações que compõem cada estágio.' },
  { title: 'Acompanhamento', purpose: 'Apresenta etapas registradas e o andamento dos estágios.', use: 'Ajuda a identificar etapas concluídas e pontos que precisam de atenção.' },
  { title: 'Escolas', purpose: 'Organiza informações das unidades escolares ligadas aos estágios.', use: 'Facilita consultar escolas e estudantes associados a cada unidade.' },
  { title: 'Dashboard', purpose: 'Consolida indicadores em uma visão resumida do sistema.', use: 'Ajuda a acompanhar números gerais e observar a evolução dos registros.' },
  { title: 'Relatórios', purpose: 'Agrupa informações para consulta por estudante, escola ou regional.', use: 'Apoia a análise e o acompanhamento da gestão.' },
  { title: 'Administração', purpose: 'Reúne opções de gestão de usuários e perfis.', use: 'Ajuda a manter os acessos organizados conforme as responsabilidades definidas.' },
  { title: 'Auditoria', purpose: 'Registra ações e alterações realizadas no sistema.', use: 'Facilita consultar o histórico para acompanhamento.' },
]

export const dashboardMetrics = [
  { label: 'Total de estagiários', value: 162, detail: '162 estudantes' },
  { label: 'Em andamento', value: 109, detail: '109 em andamento' },
  { label: 'Concluídos', value: 76, detail: '76 concluídos' },
  { label: 'Pendências', value: 30, detail: '30 pendências' },
  { label: 'Escolas', value: 42, detail: '42 escolas' },
]

export const dashboardByStatus = [
  { name: 'Em andamento', value: 48 },
  { name: 'Concluído', value: 24 },
  { name: 'Aguardando', value: 18 },
  { name: 'Cancelado', value: 10 },
]

export const dashboardByPeriod = [
  { name: 'Jan', value: 16, alunos: 16 },
  { name: 'Fev', value: 21, alunos: 21 },
  { name: 'Mar', value: 24, alunos: 24 },
  { name: 'Abr', value: 29, alunos: 29 },
  { name: 'Mai', value: 31, alunos: 31 },
  { name: 'Jun', value: 27, alunos: 27 },
]

export const dashboardBySchool = [
  { name: 'ESC 01', value: 32, valor: 32 },
  { name: 'ESC 02', value: 28, valor: 28 },
  { name: 'ESC 03', value: 19, valor: 19 },
  { name: 'ESC 04', value: 17, valor: 17 },
  { name: 'ESC 05', value: 12, valor: 12 },
]

export const recentRecords = [
  { aluno: 'Ana Beatriz Silva', ies: 'UFPB', escola: 'Escola Modelo', curso: 'Matemática', status: 'Em andamento' },
  { aluno: 'Carlos Nunes', ies: 'UEPB', escola: 'Colégio Estadual', curso: 'História', status: 'Concluído' },
  { aluno: 'Roberta Alves', ies: 'UFCG', escola: 'Centro de Ensino', curso: 'Pedagogia', status: 'Pendente' },
  { aluno: 'Luciana Costa', ies: 'UNIPÊ', escola: 'Escola Central', curso: 'Língua Portuguesa', status: 'Em andamento' },
]

export const students = [
  { nome: 'Ana Beatriz Silva', cpf: '123.456.789-00', ies: 'UFPB', curso: 'Licenciatura em Matemática', escola: 'Escola Modelo', gre: 'GRE 01', status: 'Em andamento' },
  { nome: 'Carlos Nunes', cpf: '456.789.012-34', ies: 'UEPB', curso: 'História', escola: 'Colégio Estadual', gre: 'GRE 02', status: 'Concluído' },
  { nome: 'Roberta Alves', cpf: '789.012.345-67', ies: 'UFCG', curso: 'Pedagogia', escola: 'Centro de Ensino', gre: 'GRE 03', status: 'Pendente' },
  { nome: 'João Pereira', cpf: '012.345.678-90', ies: 'UNIPÊ', curso: 'Biologia', escola: 'Escola Nova', gre: 'GRE 04', status: 'Inativo' },
]

export const schoolCards = [
  { nome: 'Escola Estadual Pioneira', municipio: 'Campina Grande', gre: 'GRE 01', inep: '12345678', estagiarios: 18, situacao: 'Ativa' },
  { nome: 'Escola Modelo', municipio: 'Campina Grande', gre: 'GRE 01', inep: 'Não informado', estagiarios: 1, situacao: 'Ativa' },
  { nome: 'Colégio Municipal do Saber', municipio: 'João Pessoa', gre: 'GRE 02', inep: '87654321', estagiarios: 12, situacao: 'Em revisão' },
  { nome: 'Centro de Ensino de Patos', municipio: 'Patos', gre: 'GRE 03', inep: '45678912', estagiarios: 24, situacao: 'Ativa' },
  { nome: 'Escola Professor Oliveira', municipio: 'Sousa', gre: 'GRE 04', inep: '98765432', estagiarios: 9, situacao: 'Aguardando' },
]

export const trackingStages = [
  'Requerimento',
  'Encaminhamento',
  'Termo',
  'Execução',
  'Avaliação',
  'Relatório final',
  'Conclusão',
]

export const trackingActivities = [
  'Observação em sala',
  'Planejamento',
  'Participação em atividade pedagógica',
  'Regência',
]

export const trackingStudents = [
  {
    id: 'ana-beatriz-escola-modelo',
    name: 'Ana Beatriz Silva',
    school: 'Escola Modelo',
    gre: 'GRE 01',
    ies: 'UFPB',
    course: 'Licenciatura em Matemática',
    documents: 'Documentação completa',
    currentStage: 'Estágio em andamento',
    nextStep: 'Concluir o período de estágio para avançar ao encerramento.',
  },
  {
    id: 'estudante-pioneira-termo',
    name: 'Estudante demonstrativo',
    school: 'Escola Estadual Pioneira',
    gre: 'GRE 01',
    ies: 'Instituição demonstrativa',
    course: 'Curso demonstrativo',
    documents: 'Termo de compromisso pendente',
    currentStage: 'Aguardando termo',
    nextStep: 'Aguardar o recebimento do termo de compromisso para seguir com o cadastro como estagiário.',
  },
]

export const reportCards = [
  'Relatório por aluno',
  'Relatório por escola',
  'Relatório regional',
  'Relatório consolidado estadual',
]

export const auditLogs = [
  { date: '18/10/2026', time: '14:32', actor: 'Maria Silva', profile: 'Gerente Regional', scope: 'GRE 01', type: 'Cadastro', action: 'Cadastrou um estudante', detail: 'Ana Beatriz Silva · Escola Modelo', result: 'Concluído' },
  { date: '18/10/2026', time: '14:18', actor: 'Maria Silva', profile: 'Gerente Regional', scope: 'GRE 01', type: 'Documento', action: 'Adicionou termo de compromisso', detail: 'Ana Beatriz Silva · documento conferido', result: 'Registrado' },
  { date: '18/10/2026', time: '13:57', actor: 'João Costa', profile: 'Administrador', scope: 'Sistema', type: 'Relatório', action: 'Exportou relatório final', detail: 'Relatório final · Escola Modelo · CSV', result: 'Exportado' },
  { date: '18/10/2026', time: '13:22', actor: 'Maria Silva', profile: 'Gerente Regional', scope: 'GRE 01', type: 'Acompanhamento', action: 'Atualizou etapa do estágio', detail: 'Ana Beatriz Silva · estágio em andamento', result: 'Atualizado' },
  { date: '18/10/2026', time: '12:46', actor: 'Carlos Mendes', profile: 'Operador', scope: 'GRE 01', type: 'Documento', action: 'Validou documentação do estudante', detail: 'Ana Beatriz Silva · documentos conferidos', result: 'Validado' },
  { date: '18/10/2026', time: '11:08', actor: 'João Costa', profile: 'Administrador', scope: 'Sistema', type: 'Relatório', action: 'Consultou relatório regional', detail: 'Indicadores da GRE 01', result: 'Consultado' },
]

export const userTable = [
  { nome: 'Maria Silva', perfil: 'Gerente Regional', gre: 'GRE 01', status: 'Ativo' },
  { nome: 'João Costa', perfil: 'Administrador', gre: 'GFDP', status: 'Ativo' },
  { nome: 'Ana Nascimento', perfil: 'Operacional', gre: 'GRE 03', status: 'Bloqueado' },
]

export const presentationMenu = [
  '01 Abertura',
  '02 Visão Geral',
  '03 Estagiário',
  '04 GRE',
  '05 Sistema',
  '06 Dashboard',
  '07 Alunos',
  '08 Escolas',
  '09 Acompanhamento',
  '10 Relatórios',
  '11 Administração',
]

export const slideOrder = [
  'cover',
  'overview',
  'journey',
  'gre',
  'system',
  'dashboard',
  'students',
  'schools',
  'tracking',
  'reports',
  'audit',
]

// Compatibilidade com componentes antigos que ainda importam os nomes iniciais.
export const navItems = [
  { id: 'overview', label: 'Visão Geral' },
  { id: 'solution', label: 'Solução' },
  { id: 'flow', label: 'Fluxo' },
  { id: 'profiles', label: 'Perfis' },
  { id: 'system', label: 'Sistema' },
  { id: 'reports', label: 'Relatórios' },
]

export const challengeCards = [...overviewBefore]
export const afterCards = [...overviewAfter]
export const solutionItems = [
  { title: 'Cadastro centralizado', description: 'Dados cadastrais, vínculos e documentos em um único ambiente.', accent: 'purple' },
  { title: 'Vínculo com escolas', description: 'Relacionamento entre escola, IES, GRE e estagiário em contexto institucional.', accent: 'blue' },
  { title: 'Acompanhamento', description: 'Status, pendências e evolução do estágio em uma visão clara e organizada.', accent: 'orange' },
  { title: 'Gestão regional', description: 'Acompanhamento por GRE com indicadores e ações orientadas a resultados.', accent: 'pink' },
  { title: 'Indicadores', description: 'Métricas consolidadas para apoio à decisão e monitoramento institucional.', accent: 'lilac' },
  { title: 'Auditoria', description: 'Rastreabilidade de alterações, permissões e procedimentos de gestão.', accent: 'purple-dark' },
]

export const flowSteps = [
  { id: 'solicitation', phase: '01', title: 'Solicitação do estágio', color: 'purple', detail: 'A demanda é registrada com dados iniciais e validações essenciais de formação e vínculo.' },
  { id: 'analysis', phase: '02', title: 'Análise / recebimento pela GRE', color: 'blue', detail: 'A GRE recebe o pedido, valida a documentação e organiza o encaminhamento institucional.' },
  { id: 'school', phase: '03', title: 'Encaminhamento para escola', color: 'orange', detail: 'O processo é distribuído às escolas com indicação de perfil, carga e período.' },
  { id: 'term', phase: '04', title: 'Termo de Ciência e Compromisso', color: 'pink', detail: 'Documentos e responsabilidades são formalizados com acompanhamento da instituição e da escola.' },
  { id: 'execution', phase: '05', title: 'Execução e acompanhamento', color: 'lilac', detail: 'Atividades, presença e progresso são monitorados com base em critérios e pendências.' },
  { id: 'conclusion', phase: '06', title: 'Relatório / conclusão', color: 'purple-dark', detail: 'Registro final, validações e entrega do relatório consolida a jornada do estágio.' },
]

export const profiles = [
  { role: 'Administrador GFDP / TI', responsibilities: ['usuários', 'perfis', 'parâmetros', 'permissões', 'auditoria', 'logs'], accent: 'purple' },
  { role: 'Gerente Regional / GRE', responsibilities: ['alunos da regional', 'escolas', 'vínculos', 'acompanhamento', 'relatórios regionais'], accent: 'blue' },
  { role: 'Usuário GFDP', responsibilities: ['visão estadual', 'acompanhamento das GREs', 'indicadores', 'consultas', 'relatórios consolidados'], accent: 'orange' },
  { role: 'Aluno / Estagiário', responsibilities: ['entidade cadastrada', 'documentação', 'evolução', 'relatórios'], accent: 'pink' },
  { role: 'Escola / IES / Professor', responsibilities: ['informações do vínculo', 'acompanhamento do processo', 'validação de atividade'], accent: 'lilac' },
]

export const screenTabs = [
  'Dashboard',
  'Alunos',
  'Detalhe do aluno',
  'Novo aluno',
  'Escolas',
  'Vínculo de estágio',
  'Relatórios',
  'Administração',
]

export const statusDistribution = dashboardByStatus
export const studentsByPeriod = dashboardByPeriod
export const studentsBySchool = dashboardBySchool

export const beforeAfter = {
  before: [...overviewBefore],
  after: [...overviewAfter],
}

export const impactStats = [
  { value: 16, label: 'GREs', suffix: ' GREs' },
  { value: 100, label: 'Registros centralizados', suffix: '%' },
  { value: 24, label: 'Acompanhamento em tempo real', suffix: '/7' },
]

export const actorNodes = [
  { name: 'Estagiário', x: 12, y: 55 },
  { name: 'IES', x: 22, y: 22 },
  { name: 'GRE', x: 42, y: 50 },
  { name: 'Escola', x: 62, y: 30 },
  { name: 'Professor', x: 78, y: 62 },
  { name: 'SEE-PB / GFDP', x: 88, y: 35 },
]
