import Layout from '../../src/components/layout/Layout';

export default function ArtefatoG1Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G1</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G1 - PMO Educacross"
      description="Artefatos da fase G1 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os artefatos específicos para a fase G1 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
