import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const g3Artifacts = [
  {
    title: 'Plano de Comunicação – Educacross',
    description:
      'Guia completo de comunicação do Gate G3 com princípios, matriz de stakeholders, ferramentas e boas práticas para manter todos alinhados.',
    href: '/artefatos/g3/plano-comunicacao',
    actionLabel: 'Acessar plano',
  },
  {
    title: 'Plano Jurídico & Contratos',
    description:
      'Template completo do comitê quinzenal com foco em decisões jurídicas, pendências contratuais e governança executiva do Gate G3.',
    href: '/artefatos/g3/plano-juridico-contratos',
    actionLabel: 'Acessar guia',
  },
];

export default function ArtefatoG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G3</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G3 - PMO Educacross"
      description="Artefatos da fase G3 do PMO Educacross."
      hero={hero}
    >
      <div className="artifact-grid">
        {g3Artifacts.map((artifact) => (
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
