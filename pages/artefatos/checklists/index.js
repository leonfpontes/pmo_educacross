import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const checklistArtifacts = [
  {
    title: 'G0: Checklist de Triagem / Intake',
    description:
      'Valide rapidamente se uma nova demanda possui informações mínimas para avançar no funil do PMO com alinhamento sobre contexto, premissas e decisão do Gate 0.',
    href: '/artefatos/checklists/g0-triagem-intake',
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
      title="Artefatos Checklists - PMO Educacross"
      description="Checklists de apoio aos gates do PMO Educacross."
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
