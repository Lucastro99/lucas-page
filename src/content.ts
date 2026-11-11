export type Lang = "pt" | "en";

export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
];

const pt = {
  meta: {
    title: "Lucas Castro | Tech Lead hands-on com agentes de IA",
    description:
      "Lucas Castro, Tech Lead hands-on. Programa todo dia com agentes de IA, skills, MCP e SDD, e responde pelas decisões que o código não toma sozinho.",
  },
  nav: {
    links: [
      { label: "Como trabalho", href: "#work" },
      { label: "Sobre", href: "#about" },
      { label: "Projetos", href: "#projects" },
      { label: "Processo", href: "#process" },
    ],
    contact: "Contato",
    language: "Idioma",
  },
  hero: {
    badge: "IA · Skills · MCP · SDD",
    kicker: "Lucas Castro · Tech Lead hands-on",
    title: "Código ficou barato. Boas decisões, não.",
    subtitle:
      "Programo todo dia com agentes de IA. Eles escrevem boa parte do código. Eu decido o que construir, defino o contrato e provo que o resultado está certo antes de entregar.",
    primaryCta: "Fale comigo",
    secondaryCta: "Como eu trabalho",
    photoAlt: "Foto de Lucas Ramos de Castro",
  },
  work: {
    label: "Como eu trabalho",
    title: "O método por trás da velocidade",
    text: "Agente de IA escreve código rápido e erra com a mesma confiança. Montei estas quatro peças para ficar com a velocidade e controlar o risco.",
    hint: "Role para explorar",
    panels: [
      {
        subtitle: "Agentes & LLMs",
        title: "Eu decido. O agente executa.",
        desc: "Agentes de IA escrevem, testam e revisam boa parte do código. Eu defino o problema, a arquitetura e o critério de pronto, escolho o modelo pela dificuldade da tarefa e respondo pelo que vai para produção.",
        features: [
          "Agentes de código no trabalho diário",
          "Modelo barato no simples, forte no crítico",
          "Quem implementa não é quem revisa",
          "A decisão técnica continua sendo minha",
        ],
      },
      {
        subtitle: "Conhecimento empacotado",
        title: "O padrão do time, escrito uma vez",
        desc: "Skill é um pacote de instruções e scripts que o agente carrega só quando a tarefa pede. Escrevo as minhas para fluxos que se repetem. O padrão do time sai da memória de alguém e passa a valer em toda tarefa.",
        features: [
          "Skills próprias para fluxos recorrentes",
          "Subagentes próprios, cada um com um papel",
          "Convenção escrita, não convenção lembrada",
          "Contexto carregado só quando a tarefa pede",
        ],
      },
      {
        subtitle: "Model Context Protocol",
        title: "O agente trabalha com dados reais",
        desc: "MCP é o protocolo que dá ferramentas ao agente. Ler a issue, consultar o erro de produção, chamar a API. Crio meus próprios servidores e integro os que já existem. O agente para de adivinhar.",
        features: [
          "Servidores MCP construídos por mim",
          "Linear, Sentry, ClickUp e Postman integrados",
          "Contexto real no lugar de suposição",
          "Cada ferramenta com escopo e permissão claros",
        ],
      },
      {
        subtitle: "Spec-Driven Development",
        title: "Primeiro a spec, depois o código",
        desc: "Antes do código, escrevo o que precisa ser verdade no final. Objetivo, escopo e critérios de aceite. Agentes implementam contra essa spec, QA e review rodam com contexto limpo e uma auditoria reexecuta cada afirmação.",
        features: [
          "Discovery e spec antes da primeira linha",
          "Sete papéis, do PO ao auditor",
          "QA e review independentes de quem fez",
          "Cada afirmação reexecutada antes da entrega",
        ],
      },
    ],
  },
  video: {
    label: "Vídeo",
    title: "Como esta página foi feita",
    text: "Menos de um minuto sobre o método, usando a própria página como exemplo.",
    captions: "Português",
  },
  statement:
    "A IA escreve o código. A decisão continua sendo minha. E eu só chamo de pronto o que consigo provar.",
  projects: {
    label: "Projetos recentes",
    title: "O que eu entreguei por último",
    text: "Trabalho real, em produção. Os números vêm dos repositórios.",
    items: [
      {
        title: "SDK de pagamento com campos seguros (PCI)",
        metric: "19 dias",
        metricSub: "do primeiro commit à primeira release",
        desc: "Projetei e construí um SDK que permite a parceiros sem certificação PCI coletar cartão no próprio checkout, com os dados sensíveis isolados em iframe e cobrança autorizada por pedido assinado no servidor. Inclui script via CDN e pacotes npm para React e Vue.",
      },
      {
        title: "Migração Vue 2 → Vue 3 de um painel administrativo",
        metric: "875 arquivos",
        metricSub: "+65 mil / −42 mil linhas, em produção",
        desc: "Migrei uma SPA grande em cerca de 8 semanas, mantendo paridade visual e funcional, com troca de todas as bibliotecas presas ao Vue 2.",
      },
      {
        title: "Bootstrap → Tailwind + design system",
        metric: "1.180 arquivos",
        metricSub: "+60 mil / −38 mil linhas",
        desc: "Substituí os componentes legados em Bootstrap por um design system próprio em Tailwind, em ondas incrementais, com o CSS legado removido e a validação de formulários padronizada com Zod.",
      },
      {
        title: "Cobertura de testes de um checkout",
        metric: "128 → 2.450",
        metricSub: "testes em 13 dias",
        desc: "Implantei a infraestrutura de testes com Vitest e levei a suíte de 72 para 293 arquivos de teste. Isso deu a rede de segurança para as migrações e refatorações seguintes.",
      },
      {
        title: "Migração de um checkout para Nuxt 4",
        metric: "Nuxt 4",
        metricSub: "Vitest 4 e i18n v10",
        desc: "Atualizei o checkout para Nuxt 4, com a nova estrutura de pastas, logo depois da campanha de testes e apoiado nela para validar que nada quebrou.",
      },
      {
        title: "Vuex → Pinia",
        metric: "Módulo a módulo",
        metricSub: "sem parar as outras frentes",
        desc: "Migrei o gerenciamento de estado do painel (autenticação, produtos, dados bancários e outros domínios) para Pinia, eliminando os módulos Vuex um a um, sem parar o desenvolvimento das outras frentes.",
      },
      {
        title: "Migração Vue 2 → Vue 3 de uma área de membros",
        metric: "Vue 2 → Vue 3",
        metricSub: "Webpack → Vite",
        desc: "Migrei a SPA de cursos (players e área do aluno) de Vue 2 para Vue 3, com Bootstrap 5 e novas bibliotecas de formulário e editor. O objetivo era sair do Vue 2 em fim de vida sem regressão para os usuários.",
      },
      {
        title: "Documentação de engenharia de front-end",
        metric: "Guia do time",
        metricSub: "referência para code review",
        desc: "Escrevi o guia de padrões de front-end do time (arquitetura, componentes, composables, i18n, configuração, deploy e monitoramento). Ele é distribuído dentro dos repositórios.",
      },
      {
        title: "Ferramenta de análise de perfis do Instagram",
        metric: "Do zero",
        metricSub: "coleta, pontuação e dashboard",
        desc: "Construí uma aplicação que coleta perfis, calcula pontuação de autoridade e cruza com a base de clientes. Tem dashboard com filtros, relatório por perfil e exportação em CSV.",
      },
    ],
  },
  about: {
    label: "Quem sou",
    title: "Sobre mim",
    name: "Lucas Ramos de Castro",
    role: "Tech Lead hands-on | Arquitetura e código com IA",
    lead: "Code is cheap. Good decisions aren't.",
    bio: [
      "Sou Tech Lead hands-on. Programo todo dia, só que hoje com agentes de IA fazendo boa parte do trabalho pesado.",
      "Trabalho com skills, agentes e servidores MCP que eu mesmo criei, além de SDD, e coloco em produção em uma tarde o que antes levava dias.",
      "Só que entregar rápido resolve metade do problema. A outra metade é uma pergunta: isso realmente faz sentido?",
      "Gosto de entrega rápida e de código com qualidade.",
      "Formado em Análise e Desenvolvimento de Sistemas pela Unipar, com pós-graduação em Inteligência Artificial pela Unicesumar.",
    ],
    stats: [
      { label: "Tech Manager", sub: "Liderou squads" },
      { label: "Pós em IA", sub: "Unicesumar" },
      { label: "60+ alunos", sub: "3 anos ensinando" },
      { label: "Até 80%", sub: "Perf. multi-tenant" },
    ],
    tags: ["Skills", "MCP", "SDD", "Multiagentes", "Liderança de squads", "Ensino e palestras"],
  },
  stack: {
    title: "Stack & Tecnologias",
    mainTag: "Principal",
    generativeAi: "IA Generativa",
    categories: {
      backend: "Back-End",
      frontend: "Front-End",
      mobile: "Mobile",
      infra: "Infra & DevOps",
      qa: "Testes & QA",
      ai: "IA & Automação",
    },
  },
  highlights: [
    {
      title: "Multi-tenant do zero",
      desc: "Construí e coordenei do zero um sistema multi-tenant, com ganho de performance de até 80%.",
      tag: "Arquitetura",
    },
    {
      title: "Professor de programação",
      desc: "Três anos ensinando programação, mais de 60 alunos formados e coordenação de conteúdo. Explicar bem é parte de liderar.",
      tag: "Ensino",
    },
    {
      title: "Palestras técnicas",
      desc: "Palestras sobre Vue.js e boas práticas de front-end. Levar o que funciona para mais gente.",
      tag: "Comunidade",
    },
  ],
  process: {
    label: "Processo",
    title: "Do pedido à entrega, com prova em cada etapa",
    text: "Um pipeline de agentes com papéis separados. Cada etapa tem dono, artefato e critério de pronto, e quem confere nunca é quem fez.",
    steps: [
      {
        title: "Discovery",
        desc: "Antes de qualquer código, pergunto se isso faz sentido. Levanto só as dúvidas que mudam o trabalho e fecho escopo e critérios de aceite.",
      },
      {
        title: "Arquitetura",
        desc: "Leio o código que já existe e transformo a tarefa em plano. Arquivos afetados, riscos e estratégia de testes.",
      },
      {
        title: "Spec",
        desc: "O plano vira contrato. Critérios verificáveis, escritos antes, contra os quais o código vai ser medido.",
      },
      {
        title: "Implementação",
        desc: "Agentes implementam seguindo a spec, com tipagem forte, testes e autovalidação. O modelo muda conforme a dificuldade.",
      },
      {
        title: "QA & Review",
        desc: "Validação independente, com contexto limpo, sem ver o raciocínio de quem implementou. Cada critério é provado ou refutado.",
      },
      {
        title: "Auditoria",
        desc: "Antes da entrega, cada afirmação dos relatórios é reexecutada. Afirmação sem evidência não sai.",
      },
    ],
  },
  why: {
    label: "O que eu levo para o time",
    title: "Velocidade que o time inteiro sustenta",
    text: "Programar rápido sozinho ficou fácil. O difícil é um time inteiro entregar rápido sem perder o controle do que vai para produção. É nisso que eu foco.",
    items: [
      {
        title: "Pergunta antes do código",
        desc: "Antes de acelerar, pergunto se a tarefa faz sentido. Entregar rápido a coisa errada continua sendo desperdício.",
      },
      {
        title: "Rápido sem virar dívida",
        desc: "Spec, testes e revisão independente fazem parte do fluxo, não da etapa final. Velocidade que não volta como retrabalho.",
      },
      {
        title: "Liderança com código",
        desc: "Como Tech Manager, liderei squads e respondi por decisão técnica e entrega contínua. Sigo programando todo dia, e decido com contexto.",
      },
      {
        title: "Conhecimento que fica",
        desc: "Três anos ensinando programação, 60+ alunos formados. Hoje transformo o que o time aprende em skills que pessoas e agentes reusam.",
      },
    ],
  },
  cta: {
    title: "Vamos conversar sobre o seu time?",
    text: "Se você procura alguém para liderar engenharia com agentes de IA sem abrir mão de qualidade, me chama. Gosto de falar do problema antes da solução.",
    button: "Fale comigo no WhatsApp",
  },
  footer: {
    tagline: "Tech Lead hands-on | Arquitetura e código com IA",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
  },
};

type Content = typeof pt;

const en: Content = {
  meta: {
    title: "Lucas Castro | Hands-on Tech Lead working with AI agents",
    description:
      "Lucas Castro, hands-on Tech Lead. Codes every day with AI agents, skills, MCP and SDD, and owns the decisions the code can't make on its own.",
  },
  nav: {
    links: [
      { label: "How I work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#process" },
    ],
    contact: "Contact",
    language: "Language",
  },
  hero: {
    badge: "AI · Skills · MCP · SDD",
    kicker: "Lucas Castro · Hands-on Tech Lead",
    title: "Code got cheap. Good decisions didn't.",
    subtitle:
      "I code every day with AI agents. They write a large share of the code. I decide what to build, define the contract and prove the result is right before it ships.",
    primaryCta: "Get in touch",
    secondaryCta: "How I work",
    photoAlt: "Photo of Lucas Ramos de Castro",
  },
  work: {
    label: "How I work",
    title: "The method behind the speed",
    text: "AI agents write code fast, and they get it wrong with the same confidence. I built these four pieces to keep the speed and control the risk.",
    hint: "Scroll to explore",
    panels: [
      {
        subtitle: "Agents & LLMs",
        title: "I decide. The agent executes.",
        desc: "AI agents write, test and review a large share of the code. I define the problem, the architecture and what done means, pick the model by how hard the task is, and own what goes to production.",
        features: [
          "Coding agents in my daily work",
          "Cheap model for simple work, strong for critical",
          "Whoever builds it doesn't review it",
          "Technical decisions stay with me",
        ],
      },
      {
        subtitle: "Packaged knowledge",
        title: "The team's standard, written once",
        desc: "A skill is a bundle of instructions and scripts the agent loads only when a task calls for it. I write mine for workflows that repeat. The team's standard leaves someone's memory and applies to every task.",
        features: [
          "My own skills for recurring workflows",
          "My own subagents, each with one role",
          "Conventions written down, not remembered",
          "Context loaded only when the task needs it",
        ],
      },
      {
        subtitle: "Model Context Protocol",
        title: "The agent works with real data",
        desc: "MCP is the protocol that gives the agent tools. Read the issue, check the production error, call the API. I build my own servers and plug in existing ones. The agent stops guessing.",
        features: [
          "MCP servers I built myself",
          "Linear, Sentry, ClickUp and Postman connected",
          "Real context instead of assumptions",
          "Every tool with clear scope and permissions",
        ],
      },
      {
        subtitle: "Spec-Driven Development",
        title: "Spec first, code second",
        desc: "Before any code, I write down what must be true at the end. Goal, scope, acceptance criteria. Agents build against that spec, QA and review run with clean context, and an audit re-runs every claim.",
        features: [
          "Discovery and spec before the first line",
          "Seven roles, from PO to auditor",
          "QA and review independent of the builder",
          "Every claim re-run before delivery",
        ],
      },
    ],
  },
  video: {
    label: "Video",
    title: "How this page was built",
    text: "Under a minute on the method, using this very page as the example.",
    captions: "English",
  },
  statement:
    "AI writes the code. The decisions are still mine. And I only call it done when I can prove it.",
  projects: {
    label: "Recent projects",
    title: "What I shipped most recently",
    text: "Real work, in production. The numbers come from the repositories.",
    items: [
      {
        title: "Payment SDK with secure fields (PCI)",
        metric: "19 days",
        metricSub: "from first commit to first release",
        desc: "I designed and built an SDK that lets partners without PCI certification collect card data in their own checkout, with sensitive data isolated in an iframe and charges authorized by a server-signed request. Ships as a CDN script and npm packages for React and Vue.",
      },
      {
        title: "Vue 2 → Vue 3 migration of an admin panel",
        metric: "875 files",
        metricSub: "+65k / −42k lines, in production",
        desc: "I migrated a large SPA in about 8 weeks, keeping visual and functional parity and replacing every library tied to Vue 2.",
      },
      {
        title: "Bootstrap → Tailwind + design system",
        metric: "1,180 files",
        metricSub: "+60k / −38k lines",
        desc: "I replaced legacy Bootstrap components with an in-house Tailwind design system, in incremental waves, removing the legacy CSS and standardizing form validation with Zod.",
      },
      {
        title: "Test coverage for a checkout",
        metric: "128 → 2,450",
        metricSub: "tests in 13 days",
        desc: "I set up the test infrastructure with Vitest and took the suite from 72 to 293 test files. That became the safety net for the migrations and refactors that followed.",
      },
      {
        title: "Checkout migration to Nuxt 4",
        metric: "Nuxt 4",
        metricSub: "Vitest 4 and i18n v10",
        desc: "I upgraded the checkout to Nuxt 4, with the new folder structure, right after the testing campaign and relying on it to confirm nothing broke.",
      },
      {
        title: "Vuex → Pinia",
        metric: "Module by module",
        metricSub: "without stopping other work",
        desc: "I migrated the panel's state management (authentication, products, banking data and other domains) to Pinia, removing Vuex modules one at a time while the other workstreams kept shipping.",
      },
      {
        title: "Vue 2 → Vue 3 migration of a members area",
        metric: "Vue 2 → Vue 3",
        metricSub: "Webpack → Vite",
        desc: "I migrated the courses SPA (players and student area) from Vue 2 to Vue 3, with Bootstrap 5 and new form and editor libraries. The goal was to leave end-of-life Vue 2 with no regression for users.",
      },
      {
        title: "Front-end engineering documentation",
        metric: "Team guide",
        metricSub: "the reference for code review",
        desc: "I wrote the team's front-end standards guide (architecture, components, composables, i18n, configuration, deploy and monitoring). It ships inside the repositories.",
      },
      {
        title: "Instagram profile analysis tool",
        metric: "From scratch",
        metricSub: "collection, scoring and dashboard",
        desc: "I built an application that collects profiles, computes an authority score and cross-references it with the customer base. It has a dashboard with filters, a per-profile report and CSV export.",
      },
    ],
  },
  about: {
    label: "Who I am",
    title: "About me",
    name: "Lucas Ramos de Castro",
    role: "Hands-on Tech Lead | Architecture and code with AI",
    lead: "Code is cheap. Good decisions aren't.",
    bio: [
      "I'm a hands-on Tech Lead. I code every day, except now AI agents do a good part of the heavy lifting.",
      "I work with skills, agents and MCP servers I built myself, plus SDD, and I ship to production in an afternoon what used to take days.",
      "But shipping fast is only half the problem. The other half is a question. Does this actually make sense?",
      "I like fast delivery, and I like quality code.",
      "I hold a degree in Systems Analysis and Development from Unipar and a postgraduate degree in Artificial Intelligence from Unicesumar.",
    ],
    stats: [
      { label: "Tech Manager", sub: "Led squads" },
      { label: "Postgrad in AI", sub: "Unicesumar" },
      { label: "60+ students", sub: "3 years teaching" },
      { label: "Up to 80%", sub: "Multi-tenant perf." },
    ],
    tags: ["Skills", "MCP", "SDD", "Multi-agent", "Squad leadership", "Teaching and talks"],
  },
  stack: {
    title: "Stack & Technologies",
    mainTag: "Core",
    generativeAi: "Generative AI",
    categories: {
      backend: "Back-End",
      frontend: "Front-End",
      mobile: "Mobile",
      infra: "Infra & DevOps",
      qa: "Testing & QA",
      ai: "AI & Automation",
    },
  },
  highlights: [
    {
      title: "Multi-tenant from scratch",
      desc: "I built and coordinated a multi-tenant system from scratch, with performance gains of up to 80%.",
      tag: "Architecture",
    },
    {
      title: "Programming instructor",
      desc: "Three years teaching programming, more than 60 students graduated, and content coordination. Explaining well is part of leading.",
      tag: "Teaching",
    },
    {
      title: "Tech talks",
      desc: "Talks on Vue.js and front-end best practices. Taking what works to more people.",
      tag: "Community",
    },
  ],
  process: {
    label: "Process",
    title: "From request to delivery, with proof at every step",
    text: "A pipeline of agents with separate roles. Every step has an owner, an artifact and a definition of done, and the one who checks is never the one who built.",
    steps: [
      {
        title: "Discovery",
        desc: "Before any code, I ask whether this makes sense. I raise only the questions that change the work and lock scope and acceptance criteria.",
      },
      {
        title: "Architecture",
        desc: "I read the existing code and turn the task into a plan. Affected files, risks and test strategy.",
      },
      {
        title: "Spec",
        desc: "The plan becomes the contract. Verifiable criteria, written up front, that the code will be measured against.",
      },
      {
        title: "Implementation",
        desc: "Agents build to the spec with strong typing, tests and self-validation. The model changes with how hard the step is.",
      },
      {
        title: "QA & Review",
        desc: "Independent validation with clean context, blind to the implementer's reasoning. Every criterion is proven or refuted.",
      },
      {
        title: "Audit",
        desc: "Before delivery, every claim in the reports is re-run. A claim without evidence does not ship.",
      },
    ],
  },
  why: {
    label: "What I bring to the team",
    title: "Speed the whole team can sustain",
    text: "Coding fast on your own is easy now. The hard part is a whole team shipping fast while staying in control of what reaches production. That is where I focus.",
    items: [
      {
        title: "Question before code",
        desc: "Before speeding up, I ask whether the task makes sense. Shipping the wrong thing fast is still waste.",
      },
      {
        title: "Fast without debt",
        desc: "Spec, tests and independent review are part of the flow, not a final gate. Speed that doesn't come back as rework.",
      },
      {
        title: "Leadership with code",
        desc: "As Tech Manager I led squads and owned technical decisions and continuous delivery. I still code every day, so I decide with context.",
      },
      {
        title: "Knowledge that stays",
        desc: "Three years teaching programming, 60+ students graduated. Now I turn what the team learns into skills people and agents reuse.",
      },
    ],
  },
  cta: {
    title: "Let's talk about your team",
    text: "If you need someone to lead engineering with AI agents without trading away quality, reach out. I like to talk about the problem before the solution.",
    button: "Message me on WhatsApp",
  },
  footer: {
    tagline: "Hands-on Tech Lead | Architecture and code with AI",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

export const content: Record<Lang, Content> = { pt, en };
export type { Content };
