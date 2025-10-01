import Layout from '../../src/components/layout/Layout';

export default function InstrumentoG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Instrumentos — G3</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Instrumentos G3 - PMO Educacross"
      description="Instrumentos da fase G3 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os instrumentos específicos para a fase G3 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
