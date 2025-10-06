# Arquitetura proposta

## Árvore de diretórios consolidada

```text
src/
  app/
    layout.tsx                # Layout raiz com fontes + html/body
    globals.css               # Entrada única de estilos globais
    (public)/
      layout.tsx              # Layout das rotas públicas (Header/Footer compartilhados)
      page.tsx                # Landing page do PMO (RSC)
      _components/home/       # Componentes específicos da home
      fluxo-pmo/
        _components/          # Componentes client-side (QuickNav, SideNav, Section...)
        _data/sections.js     # Conteúdo rico reutilizado no fluxo
  components/
    layout/                   # Header/Footer/SiteLayout (suporte ao Pages Router)
    ui/                       # Átomos (Button, Badge, SectionBadge)
    data-display/             # Moléculas (ContentCard, Callout, TimelineStep)
  hooks/                      # (Reservado) hooks compartilhados
  lib/
    navigation.js             # Fonte única para itens de navegação
  services/                   # (Reservado) clientes HTTP
  styles/
    global.css                # Grid/Flex helpers, layout, utilitários
    tokens.css                # Design tokens (cores, espaços, tipografia)
```

## Justificativas

- **Separação por feature** (`src/app/(public)/...`): mantém rotas e componentes próximos do domínio, facilitando futuras migrações de artefatos para o App Router.
- **Componentes atômicos** (`components/ui` e `components/data-display`): eliminam duplicação identificada no relatório de auditoria e viabilizam reuso entre páginas.
- **Lib centralizada** (`src/lib/navigation.js`): garante uma única fonte de verdade para navegação (evita divergência entre header e sidebars).
- **Estilos em camadas** (`globals.css` + `tokens.css`): isolam tokens de design, permitindo ajustes temáticos sem quebrar o layout existente.
- **Compatibilidade com Pages Router**: `SiteLayout` permanece disponível para páginas legadas, reduzindo risco de regressão durante a migração gradual.
