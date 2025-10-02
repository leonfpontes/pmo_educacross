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
        <h2>Kickoff de Descoberta</h2>
        <p>
          Organize o encontro inicial da fase de Descoberta garantindo alinhamento de propósito, stakeholders e
          expectativas antes da elaboração dos artefatos mínimos exigidos pelo Gate G1.
        </p>
        <Button href="/artefatos/g1/kickoff-descoberta">Acessar guia</Button>
      </section>

      <section className="content-card">
        <h2>Business Case</h2>
        <p>
          Consolide a justificativa estratégica e financeira para iniciativas que avançam do Gate G0 para o G1.
          Utilize o modelo de Business Case para registrar objetivos, benefícios esperados, custos, riscos e a
          recomendação final do comitê.
        </p>
        <Button href="/artefatos/g1/business-case">Acessar modelo</Button>
      </section>

      <section className="content-card">
        <h2>Escopo de Alto Nível</h2>
        <p>
          Estabeleça a visão macro do projeto, delimitando entregas, exclusões e restrições iniciais para orientar o
          planejamento e o alinhamento entre as áreas impactadas.
        </p>
        <Button href="/artefatos/g1/escopo-alto-nivel">Acessar guia</Button>
      </section>

      <section className="content-card">
        <h2>Definição Preliminar de Dados</h2>
        <p>
          Estabeleça desde o G1 quais indicadores serão acompanhados, as fontes de dados necessárias e os
          responsáveis por manter as informações atualizadas.
        </p>
        <Button href="/artefatos/g1/definicao-preliminar-dados">Acessar guia</Button>
      </section>
    </Layout>
  );
}
