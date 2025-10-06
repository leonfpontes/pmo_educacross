import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const checklistArtifacts = [
  {
    title: 'Checklist - Gate 2 (Planejamento Detalhado)',
    description:
      'Valide se todos os planos do Gate 2 estão completos, aprovados e disponíveis antes de seguir para execução, alinhando escopo, governança e decisão final.',
    href: '/artefatos/checklists/gate-2-planejamento-detalhado',
    actionLabel: 'Acessar checklist',
  },
];

export default function ChecklistsPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — Checklists</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos - Checklists - PMO Educacross"
      description="Modelos de checklists do PMO Educacross para garantir entregas alinhadas aos Gates."
      hero={hero}
    >
      <div className="artifact-grid">
        {checklistArtifacts.map((artifact) => (
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
