import Head from 'next/head';
import Header from '../../components/Header';

export default function InstrumentoG1Page() {
  return (
    <>
      <Head>
        <title>Instrumentos G1 - PMO Educacross</title>
        <meta name="description" content="Instrumentos da fase G1 do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>Instrumentos — G1</h1>
        <p>Os instrumentos específicos para a fase G1 serão publicados em breve.</p>
      </main>
    </>
  );
}
