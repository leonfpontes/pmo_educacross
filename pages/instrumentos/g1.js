import Layout from '../../src/components/layout/Layout';

export default function InstrumentoG1Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Instrumentos — G1</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Instrumentos G1 - PMO Educacross"
      description="Instrumentos da fase G1 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os instrumentos específicos para a fase G1 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
