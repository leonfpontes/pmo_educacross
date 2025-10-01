import Head from 'next/head';
import Header from '../components/Header';

export default function G2Page() {
  return (
    <>
      <Head>
        <title>G2 - Fluxo PMO Educacross</title>
        <meta name="description" content="Resumo da fase G2 do fluxo do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>G2 — Planejamento Detalhado</h1>
        <p>Conteúdo detalhado da fase G2 será adicionado em breve.</p>
      </main>
    </>
  );
}
