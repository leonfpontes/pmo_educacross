# Snippets críticos (antes/depois)

## 1. Header migrado para Client Component reutilizável

**Antes** (`src/components/layout/Header.jsx`)
```jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
// ... estado baseado em useRouter e uso direto de document.body ...
```

**Depois** (`src/components/layout/SiteHeader.jsx`)
```jsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/lib/navigation';
// estado isolado + fallback para window.location quando usado no Pages Router
```

> Redução do acoplamento com `next/router`, compatibilidade com App Router e fonte única de dados (`navigation.js`).

## 2. Landing page migrada para App Router

**Antes** (`pages/index.js`)
```jsx
export default function Home() {
  return (
    <Layout title="PMO Educacross">...
```

**Depois** (`src/app/(public)/page.tsx`)
```tsx
export const metadata = { title: 'Proposta de Estruturação' };

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="section-wrapper">...
```

> Agora a landing é Server Component, recebe metadata nativa e reutiliza wrappers responsivos.

## 3. CSS global modularizado

**Antes** (`styles/globals.css`)
```css
/* +2000 linhas incluindo tokens e estilos globais juntos */
```

**Depois** (`src/app/globals.css` + `src/styles/global.css`)
```css
@import '../styles/tokens.css';
@import '../styles/global.css';

.skip-to-content { ... }
.section-wrapper { ... }
```

> Tokens e estilos separados permitem evolução independente e inclusão de utilitários de acessibilidade (skip link, wrappers responsivos).

## 4. Dados de navegação centralizados

**Antes** (`SiteHeader.jsx`)
```jsx
const menuItems = [
  { label: 'Home', href: '/' },
  // ... duplicado em outros componentes
];
```

**Depois** (`src/lib/navigation.js`)
```js
export const artefactNavItems = [ ... ];
export const mainNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Fluxo PMO', href: '/fluxo-pmo' },
  // ...
];
```

> Manutenção simplificada e evita divergência de rotas entre menus.

## 5. Automação de auditoria

**Antes**: inexistente.

**Depois** (`scripts/audit.js`)
```js
const duplicates = buildDuplicateIndex(filePaths);
const antiPatterns = filePaths
  .map(detectPatterns)
  .filter(Boolean);
```

> Execução via `npm run audit` gera `docs/audit/report.json|md`, acelerando decisões de refino.
