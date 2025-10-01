import Head from 'next/head';
import Header from '../../components/Header';

export default function InstrumentoG4Page() {
  return (
    <>
      <Head>
        <title>Instrumentos G4 - PMO Educacross</title>
        <meta name="description" content="Instrumentos da fase G4 do PMO Educacross." />
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>Instrumentos — G4</h1>
        <p>Os instrumentos específicos para a fase G4 serão publicados em breve.</p>
      </main>
    </>
  );
}
