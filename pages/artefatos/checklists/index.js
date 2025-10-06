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
  {
    title: 'Checklist - Gate 3 (Execução / Go-Live)',
    description:
      'Garanta que todos os critérios críticos de revisão, preparo técnico, comunicação e decisão sejam cumpridos antes do Go-Live no Gate 3.',
    href: '/artefatos/checklists/checklist-g3-execucao-go-live',
    actionLabel: 'Acessar checklist',
  },
  {
    title: 'Checklist - Gate 2 (Planejamento Detalhado)',
    description:
      'Valide se todos os planos do Gate 2 estão completos, aprovados e disponíveis antes de seguir para execução, alinhando escopo, governança e decisão final.',
    href: '/artefatos/checklists/gate-2-planejamento-detalhado',
    actionLabel: 'Acessar checklist',
  },
  {
    title: 'Checklist - Gate 1 (Iniciação / Descoberta)',
    description:
      'Garanta que todos os requisitos mínimos da fase de Iniciação/Descoberta foram cumpridos antes de avançar para o Gate 2, validando alinhamento estratégico, artefatos e aprovações.',
    href: '/artefatos/checklists/gate-1',
    actionLabel: 'Acessar checklist',
  },
  {
    title: 'G0: Checklist de Triagem / Intake',
    description:
      'Valide rapidamente se uma nova demanda possui informações mínimas para avançar no funil do PMO com alinhamento sobre contexto, premissas e decisão do Gate 0.',
    href: '/artefatos/checklists/g0-triagem-intake',
    actionLabel: 'Acessar checklist',
  },
];

export default function ChecklistArtifactsPage() {
/* export default function ChecklistsPage() { */
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
