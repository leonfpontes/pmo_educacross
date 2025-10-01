import Head from 'next/head';
import Header from '../../components/Header';

export default function InstrumentoG2Page() {
  return (
    <>
      <Head>
        <title>Instrumentos G2 - PMO Educacross</title>
        <meta name="description" content="Instrumentos da fase G2 do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>Instrumentos — G2</h1>
        <p>Os instrumentos específicos para a fase G2 serão publicados em breve.</p>
      </main>
    </>
  );
}
