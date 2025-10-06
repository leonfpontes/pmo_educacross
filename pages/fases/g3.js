import Layout from '@/components/layout/SiteLayout';

export default function G3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3 — Execução &amp; Monitoramento</h1>
      </div>
    </header>
  );

  return (
    <Layout title="G3 - Fluxo PMO Educacross" description="Resumo da fase G3 do fluxo do PMO Educacross." hero={hero}>
      <section className="simple-page">
        <p>Conteúdo detalhado da fase G3 será adicionado em breve.</p>
      </section>
    </Layout>
  );
}
