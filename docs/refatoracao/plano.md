# Plano de Refatoração por Sprints

## Sprint 1 — Migração de rotas críticas (concluída)
- [x] Adotar App Router para a landing page (`src/app/(public)/page.tsx`).
- [x] Centralizar navegação e layout compartilhado (`SiteHeader`, `SiteFooter`, `SiteLayout`).
- [x] Reorganizar componentes em `ui`, `data-display` e pastas por feature.
- [x] Automatizar auditoria de duplicações (`scripts/audit.js`).
- [x] Documentar arquitetura, catálogo de componentes e plano de refino.

## Sprint 2 — Migração de conteúdo legado
- [ ] Migrar páginas de artefatos (G0→G4) para o App Router com rotas aninhadas (`/app/(public)/artefatos/...`).
- [ ] Substituir formulários estáticos por componentes controlados com validação (HTML5 + utilitários em `src/lib/validators`).
- [ ] Consolidar checklists repetidos em componentes configuráveis (dados provenientes de JSON/YAML).
- **Critério de pronto**: todas as rotas de artefatos utilizam o novo layout e compartilham componentes reutilizáveis.
- **Risco**: regressão de SEO/links existentes — manter `redirects` no `next.config.js`.

## Sprint 3 — Automação de qualidade
- [ ] Adicionar Jest + Testing Library com testes de snapshot/smoke para `SiteHeader`, `FlowSection` e helpers.
- [ ] Configurar lint-staged/husky definitivos (dependências disponíveis) para executar `npm run lint` + `npm run format` em arquivos staged.
- [ ] Integrar verificação de acessibilidade (axe-core ou @testing-library/jest-dom) nos testes de UI críticos.
- **Critério de pronto**: pipeline de CI executa lint, testes e auditoria (`npm run audit`).
- **Risco**: ambiente restrito sem acesso ao npm — planejar mirror ou registry privado.

## Sprint 4 — Performance e observabilidade
- [ ] Migrar imagens para `next/image` com `loading="lazy"` e `sizes` adequados.
- [ ] Aplicar imports dinâmicos (`next/dynamic`) para componentes pesados (ex.: gráficos futuros).
- [ ] Instrumentar Web Vitals (`reportWebVitals`) e enviar métricas para observabilidade (ex.: Logflare). 
- **Critério de pronto**: páginas críticas atingem LCP < 2.5s em dispositivos medianos (simulado via Lighthouse).
- **Risco**: `next export` possui limitações com `app/` + recursos dinâmicos — validar durante `npm run build`.

## Sprint 5 — Evolução de design system
- [ ] Extrair tokens para um pacote compartilhado (`src/styles/tokens.css` → monorepo / npm interno).
- [ ] Documentar componentes com Storybook ou Ladle (após desbloquear dependências).
- [ ] Criar catálogo visual com casos de uso e variações responsivas.
- **Critério de pronto**: Storybook publicado com deploy automático e tokens sincronizados.
- **Risco**: dependências de Storybook exigem acesso ao registry; planejar alternative (ex.: Ladle) caso restrições persistam.
