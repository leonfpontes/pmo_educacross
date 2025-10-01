# PMO Educacross

Aplicação Next.js que reúne o material de apresentação do PMO Educacross, com
páginas dedicadas ao fluxo completo, às fases G0–G4 e aos instrumentos
correspondentes.

## Desenvolvimento local

```bash
npm install
npm run dev
```

A navegação principal utiliza o componente [`next/link`](https://nextjs.org/docs/api-reference/next/link)
para transições entre páginas. Para âncoras internas dentro de uma mesma
página, mantenha elementos `<a href="#ancora">` nativos — eles preservam o
scroll suave e o comportamento do scroll spy.

## Build estático (deploy)

```bash
npm run build
```

O comando gera a saída estática em `out/`, utilizada pela Vercel durante o
deploy. Se preferir executar o site exportado localmente, sirva a pasta `out`
com qualquer servidor HTTP estático.
