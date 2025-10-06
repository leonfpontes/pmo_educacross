# PMO Educacross

Plataforma em Next.js que consolida governança, artefatos e fluxos do PMO Educacross. A base agora utiliza o **App Router** (Next 13.5) com componentes reutilizáveis, estrutura mobile-first e diretrizes de acessibilidade.

## Visão geral da arquitetura

```text
src/
  app/
    layout.tsx              # Layout raiz (RSC) com fontes globais
    globals.css             # Importa tokens + estilos globais
    (public)/               # Agrupamento de rotas públicas
      layout.tsx            # Shell com Header/Footer compartilhados
      page.tsx              # Landing page (Server Component)
      _components/          # UI específica da home
      fluxo-pmo/            # Feature Flow PMO (componentes + dados)
        _components/
        _data/
  components/
    layout/                 # Header, Footer e layout legado para Pages Router
    ui/                     # Botões, badges, inputs atômicos
    data-display/           # ContentCard, TimelineStep, Callout etc.
  hooks/                    # (reservado) hooks reutilizáveis
  lib/
    navigation.js           # Fonte única de itens de navegação
  services/                 # (reservado) clientes de API
  styles/
    global.css              # Base global (Grid/Flex, helpers)
    tokens.css              # Design tokens
pages/                      # Rotas legadas ainda não migradas (artefatos, fluxo, DoD/DoR)
public/                     # Ativos estáticos
```

> ℹ️ As rotas existentes em `pages/` continuam operando através do wrapper `SiteLayout`. Conforme novas funcionalidades surgirem, priorize criar rotas no App Router e migrar gradualmente as páginas antigas.

## Scripts disponíveis

| Script              | Descrição |
| ------------------- | --------- |
| `npm run dev`       | Inicia o ambiente de desenvolvimento com hot reload. |
| `npm run build`     | Executa `next build` seguido de `next export` para gerar a pasta `out/`. |
| `npm run start`     | Sobe a build em modo produção. |
| `npm run lint`      | Roda `next lint` com as regras `next/core-web-vitals`. |
| `npm run lint:fix`  | Executa o lint com correção automática. |
| `npm run format`    | Tenta formatar com Prettier (se instalado) e faz fallback para `next lint --fix`. |
| `npm run audit`     | Gera o relatório de duplicidades e anti-padrões em `docs/audit/`. |
| `npm run prepare`   | Configura o `core.hooksPath` do Git para apontar para `.husky/`. |

### Hooks de commit

O repositório inclui um hook simples (`.husky/pre-commit`) que roda `npm run lint`. Execute `npm run prepare` após clonar para habilitar o hook.

## Convenções de desenvolvimento

- **Componentes**: use PascalCase e mantenha responsabilidade única. Documente props com JSDoc/TypeScript.
- **Estilos**: priorize classes utilitárias em `global.css` ou módulos locais. Evite `style={{ ... }}` direto nos componentes.
- **Acessibilidade**: mantenha hierarquia de títulos (`h1`→`h2`→`h3`), associe `aria-labelledby`/`aria-controls` quando necessário, defina `alt` em imagens e garanta foco visível.
- **Responsividade**: desenhe mobile-first, utilize Grid/Flex e media queries padrão (`360px`, `768px`, `1024px`, `1280px`).
- **Dados e serviços**: coloque utilitários estáticos em `src/lib/` e clientes HTTP em `src/services/`.

## Fluxo para criar novas features

1. Crie os utilitários puros em `src/lib/` ou hooks em `src/hooks/`.
2. Modele a UI em `src/components/ui` ou `data-display`; componha layouts em `src/components/layout`.
3. Para novas rotas, utilize o App Router (`src/app/<feature>/page.tsx`). Exporte `metadata` conforme necessário para SEO/OG.
4. Adicione testes (unitários para utilitários, smoke tests para componentes críticos).
5. Atualize a documentação (catálogo de componentes, plano de refatoração, etc.).

## Qualidade e validações

- `docs/audit/report.md` lista duplicações e anti-padrões encontrados automaticamente.
- `docs/catalogo/componentes.md` cataloga componentes, props e locais de uso.
- `docs/refatoracao/plano.md` descreve as próximas sprints de refino (migração de páginas, testes e otimizações).
- `docs/snippets/diffs.md` registra trechos críticos antes/depois para acompanhamento histórico.

## Como rodar localmente

```bash
npm install
npm run prepare   # habilita o hook de lint
npm run dev
```

Para gerar a versão estática (usada no deploy atual):

```bash
npm run build
```

## Checklist de entrega contínua

- [ ] Duplicações removidas ou justificadas.
- [ ] Componentes documentados no catálogo.
- [ ] Acessibilidade validada (teclado, foco, contraste, landmarks).
- [ ] Responsividade validada nos breakpoints definidos.
- [ ] Build otimizada (`next/image`, imports dinâmicos quando aplicável).
- [ ] `npm run lint` sem erros.
- [ ] `npm run format` executado ou registrado.
- [ ] README atualizado ao finalizar a entrega.

## Próximos passos sugeridos

1. Migrar gradualmente as rotas de artefatos e DoD/DoR para o App Router.
2. Adicionar testes automatizados (Jest/Testing Library) para componentes críticos (`SiteHeader`, `FlowSection`).
3. Evoluir o design system, movendo tokens para um pipeline compartilhado (CSS Custom Properties ou Theme JSON).
4. Instrumentar métricas de performance (Core Web Vitals) e monitorar `largest-contentful-paint` em produção.
