import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const checklistArtifacts = [
  {
    title: 'Checklist - Gate 1 (Iniciação / Descoberta)',
    description:
      'Garanta que todos os requisitos mínimos da fase de Iniciação/Descoberta foram cumpridos antes de avançar para o Gate 2, validando alinhamento estratégico, artefatos e aprovações.',
    href: '/artefatos/checklists/gate-1',
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
      title="Checklists de Artefatos - PMO Educacross"
      description="Coleção de checklists operacionais para apoiar a governança dos projetos do PMO Educacross."
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
