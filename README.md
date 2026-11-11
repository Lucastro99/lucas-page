# lucas-page

Portfólio pessoal de Lucas Castro: engenharia de software com IA, Skills, MCP e Spec-Driven Development (SDD).

Página única em React + Vite + Tailwind, com animações em GSAP/ScrollTrigger, scroll suave com Lenis e conteúdo em português e inglês.

## Rodando

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # typecheck + build de produção em dist/
```

## Estrutura

- `src/content.ts`: toda a copy, em PT e EN
- `src/Portfolio.tsx`: a página e o seletor de idioma
- `src/components/ui.tsx`: cursor, barra de progresso e badge de skill
