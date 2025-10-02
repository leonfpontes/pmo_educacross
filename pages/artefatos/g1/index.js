import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const g1Artifacts = [
  {
    title: 'Kickoff de Descoberta',
    description:
      'Organize o encontro inicial da fase de Descoberta garantindo alinhamento de propósito, stakeholders e expectativas antes da elaboração dos artefatos mínimos exigidos pelo Gate G1.',
    href: '/artefatos/g1/kickoff-descoberta',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Business Case',
    description:
      'Consolide a justificativa estratégica e financeira para iniciativas que avançam do Gate G0 para o G1. Utilize o modelo para registrar objetivos, benefícios esperados, custos, riscos e a recomendação final do comitê.',
    href: '/artefatos/g1/business-case',
    actionLabel: 'Acessar modelo',
  },
  {
    title: 'Carta de Abertura',
    description:
      'Formalize o início da iniciativa aprovando o escopo de alto nível, patrocinadores, times envolvidos e governança mínima que sustentará a fase de Descoberta.',
    href: '/artefatos/g1/carta-abertura',
    actionLabel: 'Acessar modelo',
  },
  {
    title: 'Mapa de Stakeholders',
    description:
      'Identifique os públicos-chave do projeto, avalie poder e interesse de cada grupo e defina estratégias de relacionamento para garantir engajamento na fase de Descoberta.',
    href: '/artefatos/g1/mapa-stakeholders',
    actionLabel: 'Acessar modelo',
  },
  {
    title: 'Escopo de Alto Nível',
    description:
      'Estabeleça a visão macro do projeto, delimitando entregas, exclusões e restrições iniciais para orientar o planejamento e o alinhamento entre as áreas impactadas.',
    href: '/artefatos/g1/escopo-alto-nivel',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Definição Preliminar de Dados',
    description:
      'Antecipe quais indicadores serão acompanhados, as fontes de dados necessárias e os responsáveis por manter as informações atualizadas desde o Gate G1.',
    href: '/artefatos/g1/definicao-preliminar-dados',
    actionLabel: 'Acessar guia',
  },
];

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
      <div className="artifact-grid">
        {g1Artifacts.map((artifact) => (
          <section key={artifact.href} className="content-card artifact-card">
            <h2>{artifact.title}</h2>
            <p>{artifact.description}</p>
            <Button href={artifact.href} variant="secondary">
              {artifact.actionLabel}
            </Button>
          </section>
        ))}
      </div>
    </Layout>
  );
}
