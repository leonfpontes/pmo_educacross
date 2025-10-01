import Layout from '../../src/components/layout/Layout';

export default function InstrumentoG4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Instrumentos — G4</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Instrumentos G4 - PMO Educacross"
      description="Instrumentos da fase G4 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os instrumentos específicos para a fase G4 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
