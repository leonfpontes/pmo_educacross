# PMO Educacross

Aplicação Next.js que reúne o material de apresentação do PMO Educacross, com
páginas dedicadas ao fluxo completo, às fases G0–G4 e aos artefatos
correspondentes. A interface foi modularizada em componentes reutilizáveis para
facilitar manutenção e evolução futura.

## Estrutura de pastas

```
pages/
  index.js                # Página inicial que apenas monta as seções
  fluxo-pmo/index.js      # Página do fluxo montada a partir dos componentes de flow
  fases/                  # Páginas placeholder para cada Gate (G0–G4)
  artefatos/              # Páginas placeholder para artefatos por Gate
src/components/
  common/                 # Botões, badges, cartões e utilitários visuais
  flow/                   # Hero, navegação e seções do fluxo
  home/                   # Seções reutilizadas na página inicial
  layout/                 # Header, Footer e Layout padrão
styles/
  globals.css             # Estilos globais que consomem os tokens
  tokens.css              # Design tokens (cores, espaçamentos, tipografia)
```

Todas as páginas utilizam o componente `Layout`, responsável por renderizar o
cabeçalho, o rodapé e o `<main>` com a classe `page-main`. O conteúdo
específico da página é injetado via `children` e os destaques (hero) são
informados pela prop `hero`.

Os estilos utilizam variáveis centralizadas em `styles/tokens.css`. Sempre que
adicionar novos valores de cor, raio ou espaçamento, declare-os nesse arquivo e
consuma-os em `globals.css` ou em módulos locais.

### Componentes reutilizáveis

- `Button`, `Badge`, `Callout`, `ContentCard`, `SectionBadge` e `TimelineStep`
  formam o kit básico para montar novas seções.
- `src/components/home` concentra as seções da home; basta importar e compor em
  `pages/index.js`.
- `src/components/flow/flowSectionsData.js` armazena o conteúdo de cada etapa do
  fluxo, que é renderizado automaticamente pelo componente `FlowSection`.

## Testes

Ainda não há suíte de testes configurada. Para iniciar testes com Jest e React
Testing Library, instale as dependências correspondentes e crie specs sob
`__tests__/`, garantindo que componentes de UI recebam props simples e puras
para facilitar a cobertura futura.

## Desenvolvimento local

```bash
npm install
npm run dev
```

A navegação principal utiliza o componente [`next/link`](https://nextjs.org/docs/api-reference/next/link)
para transições entre páginas. Para âncoras internas dentro de uma mesma
página, mantenha elementos `<a href="#ancora">` nativos — eles preservam o
scroll suave e o comportamento do scroll spy.
