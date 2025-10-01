import Head from 'next/head';
import Header from '../components/Header';

export default function G4Page() {
  return (
    <>
      <Head>
        <title>G4 - Fluxo PMO Educacross</title>
        <meta name="description" content="Resumo da fase G4 do fluxo do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>G4 — Lançamento &amp; Estabilização</h1>
        <p>Conteúdo detalhado da fase G4 será adicionado em breve.</p>
      </main>
    </>
  );
}
