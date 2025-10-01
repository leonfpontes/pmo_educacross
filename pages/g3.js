import Head from 'next/head';
import Header from '../components/Header';

export default function G3Page() {
  return (
    <>
      <Head>
        <title>G3 - Fluxo PMO Educacross</title>
        <meta name="description" content="Resumo da fase G3 do fluxo do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>G3 — Execução &amp; Monitoramento</h1>
        <p>Conteúdo detalhado da fase G3 será adicionado em breve.</p>
      </main>
    </>
  );
}
