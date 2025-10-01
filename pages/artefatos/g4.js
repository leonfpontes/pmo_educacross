import Layout from '../../src/components/layout/Layout';

export default function ArtefatoG4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G4</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G4 - PMO Educacross"
      description="Artefatos da fase G4 do PMO Educacross."
      hero={hero}
    >
      <section className="simple-page">
        <p>Os artefatos específicos para a fase G4 serão publicados em breve.</p>
      </section>
    </Layout>
  );
}
