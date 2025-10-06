import Layout from '@/components/layout/SiteLayout';

export default function G0Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G0 — Intake &amp; Triage</h1>
      </div>
    </header>
  );

  return (
    <Layout title="G0 - Fluxo PMO Educacross" description="Resumo da fase G0 do fluxo do PMO Educacross." hero={hero}>
      <section className="simple-page">
        <p>Conteúdo detalhado da fase G0 será adicionado em breve.</p>
      </section>
    </Layout>
  );
}
