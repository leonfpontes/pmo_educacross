import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const g2Artifacts = [
  {
    title: 'EAP/WBS',
    description:
      'Estruture a decomposição do trabalho do projeto em níveis claros, conectando fases, pacotes e entregáveis para orientar o planejamento detalhado do Gate G2.',
    href: '/artefatos/g2/eap-wbs',
    actionLabel: 'Acessar guia',
  },
];

export default function ArtefatoG2Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G2</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G2 - PMO Educacross"
      description="Artefatos da fase G2 do PMO Educacross."
      hero={hero}
    >
      <div className="artifact-grid">
        {g2Artifacts.map((artifact) => (
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
