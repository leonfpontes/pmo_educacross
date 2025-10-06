import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const checklistArtifacts = [
  {
    title: 'Checklist - Gate 4 (Encerramento & Sustentação)',
    description:
      'Valide entregas finais, formalizações, sustentação e decisão do Gate 4 com este checklist completo alinhado ao método Educacross.',
    href: '/artefatos/checklists/gate-4',
    actionLabel: 'Acessar checklist',
  },
];

export default function ChecklistArtifactsPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — Checklists</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Checklists - PMO Educacross"
      description="Checklists oficiais do PMO Educacross."
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
