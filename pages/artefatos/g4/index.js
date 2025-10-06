import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const g4Artifacts = [
  {
    title: 'Relatório Final do Projeto – Educacross',
    description:
      'Registre a conclusão do projeto com identificação, resumo executivo, indicadores, lições aprendidas e encerramento formal para a fase G4.',
    href: '/artefatos/g4/relatorio-final-projeto',
    actionLabel: 'Acessar modelo',
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
