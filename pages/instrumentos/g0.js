import Layout from '../../src/components/layout/Layout';

export default function InstrumentoG0Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Instrumentos — G0</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Instrumentos G0 - PMO Educacross"
      description="Instrumentos da fase G0 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os instrumentos específicos para a fase G0 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
