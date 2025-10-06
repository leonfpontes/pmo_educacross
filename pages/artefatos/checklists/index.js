import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const checklistArtifacts = [
  {
    title: 'Checklist - Gate 3 (Execução / Go-Live)',
    description:
      'Garanta que todos os critérios críticos de revisão, preparo técnico, comunicação e decisão sejam cumpridos antes do Go-Live no Gate 3.',
    href: '/artefatos/checklists/checklist-g3-execucao-go-live',
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
      description="Coleção de checklists de apoio aos gates do PMO Educacross."
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
