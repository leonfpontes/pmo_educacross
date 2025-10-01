import Layout from '../../src/components/layout/Layout';

export default function G2Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2 — Planejamento Detalhado</h1>
      </div>
    </header>
  );

  return (
    <Layout title="G2 - Fluxo PMO Educacross" description="Resumo da fase G2 do fluxo do PMO Educacross." hero={hero}>
      <section className="simple-page">
        <p>Conteúdo detalhado da fase G2 será adicionado em breve.</p>
      </section>
    </Layout>
  );
}
