import Layout from '../../src/components/layout/Layout';

export default function InstrumentoG2Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Instrumentos — G2</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Instrumentos G2 - PMO Educacross"
      description="Instrumentos da fase G2 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os instrumentos específicos para a fase G2 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
