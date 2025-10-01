import Head from 'next/head';
import Header from '../../components/Header';

export default function InstrumentoG0Page() {
  return (
    <>
      <Head>
        <title>Instrumentos G0 - PMO Educacross</title>
        <meta name="description" content="Instrumentos da fase G0 do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>Instrumentos — G0</h1>
        <p>Os instrumentos específicos para a fase G0 serão publicados em breve.</p>
      </main>
    </>
  );
}
