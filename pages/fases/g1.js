import Layout from '@/components/layout/SiteLayout';

export default function G1Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1 — Descoberta &amp; Iniciação</h1>
      </div>
    </header>
  );

  return (
    <Layout title="G1 - Fluxo PMO Educacross" description="Resumo da fase G1 do fluxo do PMO Educacross." hero={hero}>
      <section className="simple-page">
        <p>Conteúdo detalhado da fase G1 será adicionado em breve.</p>
      </section>
    </Layout>
  );
}
