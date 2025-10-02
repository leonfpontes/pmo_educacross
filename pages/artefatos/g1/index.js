import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

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
      <section className="content-card">
        <h2>Business Case</h2>
        <p>
          Consolide a justificativa estratégica e financeira para iniciativas que avançam do Gate G0 para o G1.
          Utilize o modelo de Business Case para registrar objetivos, benefícios esperados, custos, riscos e a
          recomendação final do comitê.
        </p>
        <Button href="/artefatos/g1/business-case">Acessar modelo</Button>
      </section>
    </Layout>
  );
}
