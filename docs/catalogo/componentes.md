# Catálogo de Componentes

## Layout

| Componente | Props principais | Estado/Efeitos | Uso | Observações |
| ---------- | ---------------- | -------------- | --- | ----------- |
| `SiteHeader` (`src/components/layout/SiteHeader.jsx`) | — | controla menu mobile (`mobileMenuOpen`) e submenu ativo | Layout público (App Router) e páginas legadas | Client Component (`'use client'`), usa dados de `src/lib/navigation.js`. |
| `SiteFooter` (`src/components/layout/SiteFooter.jsx`) | — | Sem estado | Layout público e páginas legadas | Atualiza automaticamente o ano. |
| `SiteLayout` (`src/components/layout/SiteLayout.jsx`) | `title`, `description`, `hero`, `mainClassName` | Sem estado | Wrapper para rotas em `pages/` | Mantém compatibilidade com Head API do Pages Router. |

## UI (átomos)

| Componente | Props | Descrição | Local de uso |
| ---------- | ----- | --------- | ------------- |
| `Button` (`src/components/ui/Button.jsx`) | `href`, `variant`, `icon`, `as` | Botão/link estilizado com variantes `primary` e `secondary`. | CTA da home, cartões de artefatos, listas de checklists. |
| `Badge` (`src/components/ui/Badge.jsx`) | `children` | Badge sólida para indicar contexto. | Cards da home e artefatos. |
| `SectionBadge` (`src/components/ui/SectionBadge.jsx`) | `value` | Selo numérico/alfanumérico para seções. | Fluxo PMO (`FlowSection`). |

## Data-display (moléculas)

| Componente | Props | Descrição | Local de uso |
| ---------- | ----- | --------- | ------------- |
| `ContentCard` (`src/components/data-display/ContentCard.jsx`) | `as`, `id`, `className` | Wrapper semântico padrão (`section`/`article`). | Home (`Positioning`, `Structure`, `Benefits`). |
| `Callout` (`src/components/data-display/Callout.jsx`) | `title`, `children` | Destaque visual para listas e alertas. | Home e artefatos (orientações). |
| `TimelineStep` (`src/components/data-display/TimelineStep.jsx`) | `label`, `title`, `description` | Item da linha do tempo responsiva. | Home (`RoadmapSection`). |

## Home (feature)

| Componente | Props | Responsabilidade |
| ---------- | ----- | ---------------- |
| `HomeHero` | — | Hero semântico com `<dl>` informando responsável/data. |
| `PositioningSection` | — | Descreve posicionamento estratégico do PMO. |
| `CtaSection` | — | CTA para o fluxo do PMO com destaques. |
| `StructureSection` | — | Apresenta pilares da estrutura do PMO. |
| `RoadmapSection` | — | Mostra etapas com `TimelineStep`. |
| `BenefitsSection` | — | Lista benefícios divididos por eixos. |
| `ArtifactsSection` | — | Destaca entrega de artefatos por Gate. |

## Fluxo PMO

| Artefato | Descrição |
| -------- | --------- |
| `_data/sections.js` | Estrutura rica (JSX) com conteúdo de cada etapa (G0→G4). |
| `FlowHero` | Hero e CTA da página do fluxo. |
| `FlowQuickNav` | Navegação horizontal para pular para seções (mobile). |
| `FlowSideNav` | Navegação fixa lateral (desktop). |
| `FlowSection` | Renderiza badges e títulos de cada etapa. |

## Utilitários

| Arquivo | Função |
| ------- | ------ |
| `src/lib/navigation.js` | Exporta `mainNavigation` e `artefactNavItems` (utilizados no header e sidebars). |
| `scripts/audit.js` | Gera relatórios JSON/Markdown de duplicidade e anti-padrões. |
| `scripts/format.js` | Executa Prettier (quando disponível) ou fallback para `next lint --fix`. |
| `scripts/setup-hooks.js` | Configura `core.hooksPath` para `.husky`. |
