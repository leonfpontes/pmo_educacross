import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const g4Artifacts = [
  {
    title: 'Avaliação de Benefícios (30/60/90 dias)',
    description:
      'Acompanhe e documente os resultados do projeto em ciclos de 30, 60 e 90 dias comparando-os com os critérios de sucesso definidos no início.',
    href: '/artefatos/g4/avaliacao-beneficios',
    actionLabel: 'Acessar modelo',
  },
  { 
    title: 'Runbook Operacional',
    description:
      'Compreenda o conceito, a finalidade e a estrutura de runbooks para garantir execuções consistentes e seguras na fase G4.',
    href: '/artefatos/g4/runbook',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Relatório Final do Projeto – Educacross',
    description:
      'Registre a conclusão do projeto com identificação, resumo executivo, indicadores, lições aprendidas e encerramento formal para a fase G4.',
    href: '/artefatos/g4/relatorio-final-projeto',
    actionLabel: 'Acessar modelo',
  },
  {
    title: 'Lições Aprendidas – Educacross',
    description:
      'Consolide sucessos, falhas, pontos de melhoria e recomendações do projeto na fase G4 com o registro estruturado de lições aprendidas.',
    href: '/artefatos/g4/licoes-aprendidas',
    actionLabel: 'Acessar modelo',
  },
  {
    title: 'Termo de Aceite do Sponsor',
    description:
      'Formalize a aprovação final do sponsor registrando escopo entregue, avaliação e assinaturas essenciais para o encerramento do projeto no Gate G4.',
    href: '/artefatos/g4/termo-aceite-sponsor',
    actionLabel: 'Acessar guia',
  },
];

export default function ArtefatoG4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G4</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G4 - PMO Educacross"
      description="Artefatos da fase G4 do PMO Educacross."
      hero={hero}
    >
      <div className="artifact-grid">
        {g4Artifacts.map((artifact) => (
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
