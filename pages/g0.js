import Head from 'next/head';
import Header from '../components/Header';

export default function G0Page() {
  return (
    <>
      <Head>
        <title>G0 - Fluxo PMO Educacross</title>
        <meta name="description" content="Resumo da fase G0 do fluxo do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>G0 — Intake &amp; Triage</h1>
        <p>Conteúdo detalhado da fase G0 será adicionado em breve.</p>
      </main>
    </>
  );
}
