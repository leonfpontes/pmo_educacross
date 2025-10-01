import Head from 'next/head';
import Link from 'next/link';

import Callout from '../src/components/common/Callout';
import ContentCard from '../src/components/common/ContentCard';
import Layout from '../src/components/layout/Layout';

export default function StageGatesPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Stage Gates</h1>
        <p className="page-header-minimal__lead">
          Checkpoints oficiais que mantêm a disciplina entre estratégia, execução e captura de benefícios.
        </p>
      </div>
    </header>
  );

  const pageTitle = 'Stage Gates – PMO Educacross';
  const pageDescription =
    'Entenda como os Stage Gates estruturam decisões, entregáveis e checkpoints do fluxo do PMO Educacross.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <Layout hero={hero}>
        <section className="simple-page stage-gates-page">
          <ContentCard id="introducao">
            <h2>O que são Stage Gates?</h2>
            <p>
              Stage Gates são pontos de controle formais ao longo do ciclo de vida de um projeto. Em cada gate, o time e a
              liderança avaliam se os objetivos, riscos, recursos e entregáveis estão prontos para liberar a próxima fase,
              funcionando como checkpoints oficiais para garantir foco e priorização.
            </p>
          </ContentCard>

          <ContentCard id="por-que">
            <h2>Por que usamos Stage Gates?</h2>
            <ul className="stage-gates-benefits">
              <li>
                <strong>🚦 Organização:</strong> traz visibilidade sobre prioridades, evita dispersão de esforços e mantém o
                portfólio sob governança.
              </li>
              <li>
                <strong>⚙️ Eficiência:</strong> só avançamos quando os pré-requisitos estão prontos, reduzindo retrabalhos e
                alocando melhor a capacidade dos times.
              </li>
              <li>
                <strong>🤝 Alinhamento:</strong> consolida patrocinadores, líderes e squads com expectativas claras sobre
                escopo, sucesso e responsabilidades.
              </li>
              <li>
                <strong>🔍 Transparência:</strong> decisões, riscos e próximos passos ficam documentados, facilitando o
                acompanhamento executivo.
              </li>
            </ul>
          </ContentCard>

          <ContentCard id="como-funciona">
            <h2>Como funciona na Educacross</h2>
            <ol className="stage-gates-steps">
              <li>
                <strong>G0 – Intake &amp; Triage</strong>
                <p>
                  <strong>Decisão:</strong> Vale investir tempo da equipe para estruturar a descoberta?
                </p>
                <p>
                  <strong>Entregáveis:</strong> Demanda registrada e priorizada, sponsor definido e hipótese de valor
                  mapeada.
                </p>
              </li>
              <li>
                <strong>G1 – Descoberta &amp; Iniciação</strong>
                <p>
                  <strong>Decisão:</strong> Charter e Business Case aprovados para planejar em detalhe?
                </p>
                <p>
                  <strong>Entregáveis:</strong> Charter validado, análise de viabilidade, escopo macro e time núcleo
                  confirmados.
                </p>
              </li>
              <li>
                <strong>G2 – Planejamento Detalhado</strong>
                <p>
                  <strong>Decisão:</strong> Plano integrado pronto para execução?
                </p>
                <p>
                  <strong>Entregáveis:</strong> Cronograma detalhado, orçamento consolidado, matriz de riscos e plano de
                  comunicação alinhados.
                </p>
              </li>
              <li>
                <strong>G3 – Execução &amp; Monitoramento</strong>
                <p>
                  <strong>Decisão:</strong> Produto ou serviço preparado para implantação/piloto controlado?
                </p>
                <p>
                  <strong>Entregáveis:</strong> Entregas validadas, readiness checklist completo e plano de implantação com
                  responsáveis.
                </p>
              </li>
              <li>
                <strong>G4 – Lançamento &amp; Estabilização</strong>
                <p>
                  <strong>Decisão:</strong> Aprovar o encerramento e seguir para medições pós-implantação?
                </p>
                <p>
                  <strong>Entregáveis:</strong> Resultados 30/60/90 dias, lições aprendidas, termo de encerramento e plano de
                  sustentação.
                </p>
              </li>
            </ol>
          </ContentCard>

          <ContentCard id="visual-resumido">
            <h2>Visual resumido</h2>
            <pre className="stage-gates-flow">[Ideia/Demanda] → G0 → G1 → G2 → G3 → G4 → [Benefícios 30/60/90 dias]</pre>
          </ContentCard>

          <ContentCard id="resumo">
            <Callout title="Resumo final">
              <p>
                Stage Gates são pontos de decisão obrigatórios que disciplinam a evolução dos projetos, equilibrando eficiência
                operacional e expansão sustentável do portfólio.
              </p>
            </Callout>
            <div className="stage-gates-actions">
              <Link href="/fluxo-pmo" className="btn btn-secondary">
                Voltar ao Fluxo
              </Link>
            </div>
          </ContentCard>
        </section>
      </Layout>
    </>
  );
}
