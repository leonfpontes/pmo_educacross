import Layout from '../../src/components/layout/Layout';

export default function ArtefatoG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G3</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G3 - PMO Educacross"
      description="Artefatos da fase G3 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os artefatos específicos para a fase G3 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
