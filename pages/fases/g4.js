import Layout from '../../src/components/layout/Layout';

export default function G4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G4 — Lançamento &amp; Estabilização</h1>
      </div>
    </header>
  );

  return (
    <Layout title="G4 - Fluxo PMO Educacross" description="Resumo da fase G4 do fluxo do PMO Educacross." hero={hero}>
      <section className="simple-page">
        <p>Conteúdo detalhado da fase G4 será adicionado em breve.</p>
      </section>
    </Layout>
  );
}
