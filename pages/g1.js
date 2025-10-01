import Head from 'next/head';
import Header from '../components/Header';

export default function G1Page() {
  return (
    <>
      <Head>
        <title>G1 - Fluxo PMO Educacross</title>
        <meta name="description" content="Resumo da fase G1 do fluxo do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>G1 — Descoberta &amp; Iniciação</h1>
        <p>Conteúdo detalhado da fase G1 será adicionado em breve.</p>
      </main>
    </>
  );
}
