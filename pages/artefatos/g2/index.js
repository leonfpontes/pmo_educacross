import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

const g2Artifacts = [
  {
    title: 'Plano de Aquisições / Suprimentos',
    description:
      'Defina itens, fornecedores, prazos, responsáveis e riscos das compras essenciais para garantir o abastecimento do projeto no Gate G2.',
    href: '/artefatos/g2/plano-aquisicoes',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Operação & Logística',
    description:
      'Organize infraestrutura, fornecedores, cronogramas logísticos e responsabilidades para garantir a execução operacional no Gate G2.',
    href: '/artefatos/g2/plano-operacao-logistica',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Tecnologia & Dados',
    description:
      'Defina infraestrutura, integrações, governança de dados e critérios de segurança para sustentar o projeto na fase G2.',
    href: '/artefatos/g2/plano-tecnologia-dados',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Testes/QA',
    description:
      'Estabeleça objetivos, escopo, estratégias, matriz de testes e critérios de aprovação para garantir a qualidade das entregas no Gate G2.',
    href: '/artefatos/g2/plano-testes-qa',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Comunicação Detalhado',
    description:
      'Oriente a comunicação estratégica, tática e operacional do projeto com cadências, formatos, responsáveis e registros alinhados ao modelo Educacross para o Gate G2.',
    href: '/artefatos/g2/plano-comunicacao-detalhado',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Marketing & Comunicação',
    description:
      'Organize posicionamento, campanhas, cronogramas e responsabilidades para garantir consistência da marca e engajamento dos públicos do projeto no Gate G2.',
    href: '/artefatos/g2/plano-marketing-comunicacao',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Riscos',
    description:
      'Mapeie, avalie e trate riscos críticos do projeto com matrizes PxI, estratégias de resposta e rotinas de monitoramento para o Gate G2.',
    href: '/artefatos/g2/plano-riscos',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano Jurídico & Contratos',
    description:
      'Centralize obrigações legais, cláusulas críticas, contratos e responsabilidades para garantir governança jurídica completa no Gate G2.',
    href: '/artefatos/g2/plano-juridico-contratos',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'EAP/WBS',
    description:
      'Estruture a decomposição do trabalho do projeto em níveis claros, conectando fases, pacotes e entregáveis para orientar o planejamento detalhado do Gate G2.',
    href: '/artefatos/g2/eap-wbs',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Plano de Implantação & Rollback',
    description:
      'Estruture o Go-Live com cronograma, critérios de Go/No-Go, plano de rollback e comunicação para uma transição segura no Gate G2.',
    href: '/artefatos/g2/plano-implantacao-rollback',
    actionLabel: 'Acessar guia',
  },
  {
    title: 'Cronograma',
    description:
      'Construa o cronograma integrado com fases, entregas, responsáveis, prazos e dependências para garantir o alinhamento da execução no Gate G2.',
    href: '/artefatos/g2/cronograma',
    actionLabel: 'Acessar modelo',
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
