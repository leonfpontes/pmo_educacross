import Head from 'next/head';
import Header from '../../components/Header';

export default function InstrumentoG3Page() {
  return (
    <>
      <Head>
        <title>Instrumentos G3 - PMO Educacross</title>
        <meta name="description" content="Instrumentos da fase G3 do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>Instrumentos — G3</h1>
        <p>Os instrumentos específicos para a fase G3 serão publicados em breve.</p>
      </main>
    </>
  );
}
