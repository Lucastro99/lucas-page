export type Lang = "pt" | "en";

export const LANGS: { code: Lang; label: string; name: string }[] = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
];

const pt = {
  meta: {
    title: "Lucas Castro — Engenharia de software com IA",
    description:
      "Portfólio de Lucas Castro, Tech Lead hands-on. Arquitetura e código com IA: IA aplicada à engenharia de software: Skills, MCP e Spec-Driven Development (SDD).",
  },
  nav: {
    links: [
      { label: "Como trabalho", href: "#work" },
      { label: "Sobre", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Processo", href: "#process" },
    ],
    contact: "Contato",
    language: "Idioma",
  },
  hero: {
    badge: "IA · Skills · MCP · SDD",
    kicker: "Lucas Castro · Tech Lead hands-on",
    title: "Engenharia de software na era dos agentes",
    subtitle:
      "Construo produtos com IA no centro do processo: escrevo skills, conecto agentes a sistemas reais via MCP e conduzo o desenvolvimento por especificação, do pedido à entrega.",
    primaryCta: "Fale comigo",
    secondaryCta: "Como eu trabalho",
    photoAlt: "Foto de Lucas Ramos de Castro",
  },
  work: {
    label: "Como eu trabalho",
    title: "Quatro pilares de uma engenharia feita com IA",
    text: "IA não é atalho, é método. Estes são os quatro pilares que uso para entregar rápido sem abrir mão de controle e qualidade.",
    hint: "Role para explorar",
    panels: [
      {
        subtitle: "Agentes & LLMs",
        title: "IA como parte da engenharia",
        desc: "Agentes planejam, implementam e revisam. Eu defino o problema, o contrato e respondo pelo resultado. A IA entra no processo inteiro, não só no autocomplete.",
        features: [
          "Agentes de código no dia a dia",
          "IA generativa em produto: RAG e APIs de LLM",
          "Engenharia de prompt e de contexto",
          "Modelo certo para cada etapa, por custo e tarefa",
        ],
      },
      {
        subtitle: "Conhecimento empacotado",
        title: "Skills que ensinam o agente a trabalhar",
        desc: "Transformo processos repetidos em skills: instruções, scripts e critérios de pronto versionados, que o agente carrega sob demanda. O que vivia na cabeça de alguém vira ativo do time.",
        features: [
          "Skills próprias para fluxos recorrentes",
          "Subagentes com papéis bem definidos",
          "Padrões e convenções tratados como código",
          "Contexto mínimo, carregado na hora certa",
        ],
      },
      {
        subtitle: "Model Context Protocol",
        title: "Agentes conectados a sistemas reais",
        desc: "Construo servidores MCP e integro os que já existem, para o agente operar onde o trabalho acontece: issues, erros de produção, APIs e dados, sempre com permissões explícitas.",
        features: [
          "Servidores MCP próprios",
          "Integrações com Linear, Sentry, ClickUp e Postman",
          "Ferramentas com contrato e escopo claros",
          "Limites de permissão e segurança",
        ],
      },
      {
        subtitle: "Spec-Driven Development",
        title: "A especificação é a fonte da verdade",
        desc: "Antes do código existe uma spec: objetivo, escopo e critérios de aceite. Um pipeline de agentes implementa, testa e revisa contra ela, e todo \"pronto\" vem com evidência.",
        features: [
          "Discovery e spec antes do código",
          "Pipeline: PO, arquiteto, dev, QA e reviewer",
          "Critérios de aceite verificáveis",
          "Auditoria de evidências antes da entrega",
        ],
      },
    ],
  },
  statement:
    "Especificação antes do código. Agentes na execução. Evidência antes do pronto. E um engenheiro responsável por cada decisão.",
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
      { label: "Tech Manager", sub: "Líder de squads" },
      { label: "Pós em IA", sub: "Concluída" },
      { label: "60+ alunos", sub: "3 anos de ensino" },
      { label: "80% perf.", sub: "Multi-tenant" },
    ],
    tags: ["Skills", "MCP", "SDD", "IA Generativa", "Automações n8n", "Palestras Vue.js"],
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
      title: "Sistema Multi-Tenant",
      desc: "Desenvolvi e coordenei um sistema multi-tenant do zero, com ganho de performance de até 80%.",
      tag: "Arquitetura",
    },
    {
      title: "Instrutor de Programação",
      desc: "Ministrei cursos por 3 anos, com mais de 60 alunos formados, e atuei como coordenador de conteúdo.",
      tag: "Educação",
    },
    {
      title: "Palestras Técnicas",
      desc: "Realizei palestras com foco em Vue.js e boas práticas de front-end para a comunidade dev.",
      tag: "Comunidade",
    },
  ],
  process: {
    label: "Processo",
    title: "Do pedido à entrega, com a spec no centro",
    text: "O fluxo que uso para trabalhar com agentes: cada etapa tem um dono, um artefato e um critério de pronto.",
    steps: [
      {
        title: "Discovery",
        desc: "Entendo o problema, levanto só as dúvidas que mudam o trabalho e fecho escopo e critérios de aceite.",
      },
      {
        title: "Arquitetura",
        desc: "Leio o código existente e transformo a tarefa em plano técnico: arquivos afetados, riscos e estratégia de testes.",
      },
      {
        title: "Spec",
        desc: "A especificação vira o contrato. É contra ela que a implementação será medida.",
      },
      {
        title: "Implementação",
        desc: "Agentes implementam seguindo a spec, com tipagem forte, testes e autovalidação.",
      },
      {
        title: "QA & Review",
        desc: "Validação independente e com contexto limpo: cada critério é provado ou refutado com evidência.",
      },
      {
        title: "Auditoria",
        desc: "Antes da entrega, cada afirmação dos relatórios é reexecutada e conferida.",
      },
    ],
  },
  why: {
    label: "O que eu levo para o time",
    title: "Velocidade de agente, rigor de engenharia",
    text: "A agilidade de quem trabalha com agentes todos os dias, com a responsabilidade de quem já liderou squads e respondeu por produção.",
    items: [
      {
        title: "Foco em resultado",
        desc: "Código é meio. Meço o trabalho pelo problema resolvido e pelo impacto no produto.",
      },
      {
        title: "Velocidade com controle",
        desc: "MVPs rápidos, com spec, testes e revisão. Rápido sem virar dívida técnica.",
      },
      {
        title: "Visão de liderança",
        desc: "Experiência como Tech Manager: decisão técnica, priorização e conversa direta com o negócio.",
      },
      {
        title: "Multiplicador de time",
        desc: "Três anos ensinando programação. Documento, ensino e transformo o que aprendo em skills que o time inteiro usa.",
      },
    ],
  },
  cta: {
    title: "Vamos conversar?",
    text: "Procurando alguém que una engenharia sólida e IA aplicada de verdade? Me chama.",
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
    title: "Lucas Castro — AI-native software engineering",
    description:
      "Portfolio of Lucas Castro, hands-on Tech Lead. Architecture and code with AI: AI applied to software engineering: Skills, MCP and Spec-Driven Development (SDD).",
  },
  nav: {
    links: [
      { label: "How I work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Process", href: "#process" },
    ],
    contact: "Contact",
    language: "Language",
  },
  hero: {
    badge: "AI · Skills · MCP · SDD",
    kicker: "Lucas Castro · Hands-on Tech Lead",
    title: "Software engineering for the age of agents",
    subtitle:
      "I build products with AI at the core of the process: I write skills, connect agents to real systems through MCP and drive development from a spec, from request to delivery.",
    primaryCta: "Get in touch",
    secondaryCta: "How I work",
    photoAlt: "Photo of Lucas Ramos de Castro",
  },
  work: {
    label: "How I work",
    title: "Four pillars of AI-native engineering",
    text: "AI is not a shortcut, it is a method. These are the four pillars I rely on to ship fast without giving up control or quality.",
    hint: "Scroll to explore",
    panels: [
      {
        subtitle: "Agents & LLMs",
        title: "AI as part of the engineering",
        desc: "Agents plan, implement and review. I define the problem and the contract, and I own the result. AI runs through the whole process, not just autocomplete.",
        features: [
          "Coding agents in the daily workflow",
          "Generative AI in product: RAG and LLM APIs",
          "Prompt and context engineering",
          "The right model for each step, by cost and task",
        ],
      },
      {
        subtitle: "Packaged knowledge",
        title: "Skills that teach the agent how to work",
        desc: "I turn repeated processes into skills: versioned instructions, scripts and definitions of done that the agent loads on demand. What lived in someone's head becomes a team asset.",
        features: [
          "Custom skills for recurring workflows",
          "Subagents with well-defined roles",
          "Standards and conventions treated as code",
          "Minimal context, loaded at the right time",
        ],
      },
      {
        subtitle: "Model Context Protocol",
        title: "Agents connected to real systems",
        desc: "I build MCP servers and integrate existing ones so the agent works where the work happens: issues, production errors, APIs and data, always with explicit permissions.",
        features: [
          "Custom MCP servers",
          "Integrations with Linear, Sentry, ClickUp and Postman",
          "Tools with clear contracts and scope",
          "Permission boundaries and security",
        ],
      },
      {
        subtitle: "Spec-Driven Development",
        title: "The spec is the source of truth",
        desc: "Before any code there is a spec: goal, scope and acceptance criteria. A pipeline of agents implements, tests and reviews against it, and every \"done\" comes with evidence.",
        features: [
          "Discovery and spec before code",
          "Pipeline: PO, architect, dev, QA and reviewer",
          "Verifiable acceptance criteria",
          "Evidence audit before delivery",
        ],
      },
    ],
  },
  statement:
    "Spec before code. Agents on execution. Evidence before done. And an engineer accountable for every decision.",
  about: {
    label: "Who I am",
    title: "About me",
    name: "Lucas Ramos de Castro",
    role: "Hands-on Tech Lead | Architecture and code with AI",
    lead: "Code is cheap. Good decisions aren't.",
    bio: [
      "I'm a hands-on Tech Lead. I code every day, only now with AI agents doing a good part of the heavy lifting.",
      "I work with skills, agents and MCP servers I built myself, plus SDD, and I ship to production in an afternoon what used to take days.",
      "But shipping fast solves only half of the problem. The other half is a question: does this actually make sense?",
      "I like fast delivery and quality code.",
      "I hold a degree in Systems Analysis and Development from Unipar and a postgraduate degree in Artificial Intelligence from Unicesumar.",
    ],
    stats: [
      { label: "Tech Manager", sub: "Squad lead" },
      { label: "Postgrad in AI", sub: "Completed" },
      { label: "60+ students", sub: "3 years teaching" },
      { label: "80% perf.", sub: "Multi-tenant" },
    ],
    tags: ["Skills", "MCP", "SDD", "Generative AI", "n8n automations", "Vue.js talks"],
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
      title: "Multi-Tenant System",
      desc: "I built and coordinated a multi-tenant system from scratch, with performance gains of up to 80%.",
      tag: "Architecture",
    },
    {
      title: "Programming Instructor",
      desc: "I taught courses for 3 years, with more than 60 students graduated, and worked as content coordinator.",
      tag: "Education",
    },
    {
      title: "Tech Talks",
      desc: "I gave talks on Vue.js and front-end best practices for the developer community.",
      tag: "Community",
    },
  ],
  process: {
    label: "Process",
    title: "From request to delivery, with the spec at the center",
    text: "The flow I use to work with agents: every step has an owner, an artifact and a definition of done.",
    steps: [
      {
        title: "Discovery",
        desc: "I understand the problem, raise only the questions that change the work, and lock scope and acceptance criteria.",
      },
      {
        title: "Architecture",
        desc: "I read the existing code and turn the task into a technical plan: affected files, risks and test strategy.",
      },
      {
        title: "Spec",
        desc: "The specification becomes the contract. The implementation is measured against it.",
      },
      {
        title: "Implementation",
        desc: "Agents implement following the spec, with strong typing, tests and self-validation.",
      },
      {
        title: "QA & Review",
        desc: "Independent validation with a clean context: every criterion is proven or refuted with evidence.",
      },
      {
        title: "Audit",
        desc: "Before delivery, every claim in the reports is re-run and checked.",
      },
    ],
  },
  why: {
    label: "What I bring to the team",
    title: "Agent speed, engineering rigor",
    text: "The pace of someone who works with agents every day, with the accountability of someone who has led squads and owned production.",
    items: [
      {
        title: "Outcome first",
        desc: "Code is a means. I measure the work by the problem solved and the impact on the product.",
      },
      {
        title: "Speed with control",
        desc: "Fast MVPs, with spec, tests and review. Fast without turning into tech debt.",
      },
      {
        title: "Leadership mindset",
        desc: "Tech Manager experience: technical decisions, prioritization and a direct line with the business.",
      },
      {
        title: "Team multiplier",
        desc: "Three years teaching programming. I document, teach and turn what I learn into skills the whole team uses.",
      },
    ],
  },
  cta: {
    title: "Let's talk?",
    text: "Looking for someone who combines solid engineering with truly applied AI? Reach out.",
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
