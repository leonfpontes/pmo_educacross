import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>PMO Educacross - Proposta de Estruturação</title>
        <meta
          name="description"
          content="Visão geral do PMO Educacross com governança, metodologia e roadmap de implantação."
        />
      </Head>
      <header className="page-hero">
        <div className="hero">
          <div className="hero-text">
            <div className="hero-highlight">Estratégia • Governança • Resultados</div>
            <h1>Proposta de Estruturação do Escritório de Projetos</h1>
            <p>
              O PMO da Educacross nasce para conectar a visão estratégica da diretoria à execução impecável dos projetos,
              garantindo o crescimento sustentável, escala e previsibilidade.
            </p>
            <div className="hero-meta">
              <p>
                <strong>Responsável:</strong> Leonardo Fonseca Pontes — Gerente de Projetos
                <br />
                <strong>Data:</strong> Setembro/2025
              </p>
            </div>
          </div>
          <div className="hero-card">
            <h2>Como o PMO se posiciona</h2>
            <p>
              Um centro estratégico que orienta, prioriza e monitora iniciativas para transformar ideias em resultados
              concretos. Mais do que execução operacional: governança, padrões e visão única.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="content-card" id="posicionamento">
          <span className="badge">Posicionamento do PMO</span>
          <h2>Centro estratégico de governança</h2>
          <p>
            O Escritório de Projetos da Educacross atua como a ponte entre estratégia e execução, garantindo que cada
            iniciativa da empresa seja planejada, executada e monitorada com disciplina e clareza.
          </p>
          <div className="callout">
            <ul>
              <li>Não é apenas execução operacional — planilhas, relatórios ou ajustes de documentos.</li>
              <li>É a área que conecta estratégia e execução, transformando iniciativas em resultados concretos.</li>
            </ul>
          </div>
        </section>

        <section className="cta-section" id="fluxo-pmo">
          <div className="cta-card">
            <h2>PMO Educacross: governança para transformar caos em orquestra</h2>
            <p className="cta-intro">
              Quer entender como organizamos a entrada de demandas, priorizamos projetos e entregamos com previsibilidade?
              Desenvolvemos um fluxo único de ponta a ponta que une estratégia, tecnologia e pessoas para reduzir custos
              operacionais e escalar resultados.
            </p>
            <div className="cta-highlights">
              <h3>Principais destaques:</h3>
              <ul>
                <li>
                  <div className="highlight-icon">G0→G4</div>
                  <div className="highlight-content">
                    <strong>Governança com Stage Gates</strong>
                    <p>Decisões rápidas e eficientes do intake à estabilização e ao pós-projeto, com critérios claros em cada etapa.</p>
                  </div>
                </li>
                <li>
                  <div className="highlight-icon">RACI</div>
                  <div className="highlight-content">
                    <strong>Papéis e responsabilidades sem ruído</strong>
                    <p>Sponsor, Liderança, PMO, Gerentes de Projeto e Leads atuam com accountability definida — ninguém joga no escuro.</p>
                  </div>
                </li>
                <li>
                  <div className="highlight-icon">BI</div>
                  <div className="highlight-content">
                    <strong>Pipeline automatizado no Bitrix24</strong>
                    <p>Semáforo padrão, dashboards executivos e artefatos essenciais — tudo enxuto para gerar valor real, sem burocracia.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cta-footer">
              <p>
                Para conhecer o passo a passo, os critérios de cada Gate e o roadmap de implantação, consulte o material completo
                disponível em “Saiba Mais”.
              </p>
              <Link className="btn btn-primary" href="/fluxo-pmo">
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>

        <section className="content-card" id="estrutura">
          <span className="badge">Estrutura Proposta</span>
          <h2>Governança, metodologia e ferramentas</h2>
          <div className="double-column">
            <div>
              <h3>Governança</h3>
              <ul>
                <li>Diretoria aprova projetos estratégicos e orçamentos.</li>
                <li>Times de Operações, Produto, Marketing e outros executam entregas.</li>
                <li>PMO coordena, acompanha e garante aderência metodológica.</li>
              </ul>
            </div>
            <div>
              <h3>Metodologia padrão</h3>
              <ul>
                <li>Kickoff → Planejamento → Execução → Monitoramento → Encerramento.</li>
              </ul>
              <div className="callout">
                <h4>Instrumentos de gestão</h4>
                <ul>
                  <li>Bitrix24 para gestão operacional de atividades.</li>
                  <li>Dashboards no Looker/Metabase com indicadores semaforizados.</li>
                  <li>Status Report quinzenal com foco em prazos, riscos e próximos passos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="content-card" id="roadmap">
          <span className="badge">Roadmap 90 Dias</span>
          <h2>Três ciclos de maturidade</h2>
          <div className="timeline">
            <div className="timeline-step">
              <h4>0 – 30 dias</h4>
              <ul>
                <li>Padronização mínima: modelo único de kickoff e status report.</li>
                <li>Mapeamento completo dos projetos ativos.</li>
              </ul>
            </div>
            <div className="timeline-step">
              <h4>30 – 60 dias</h4>
              <ul>
                <li>Implementação de painel unificado no Metabase/Looker.</li>
                <li>Rituais de acompanhamento com líderes de área definidos.</li>
              </ul>
            </div>
            <div className="timeline-step">
              <h4>60 – 90 dias</h4>
              <ul>
                <li>Criação do Comitê de Projetos Educacross (reunião mensal diretoria + PMO).</li>
                <li>Consolidação do fluxo único de gestão para todos os projetos.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-card" id="beneficios">
          <span className="badge">Benefícios Esperados</span>
          <h2>Eficiência imediata e escala sustentável</h2>
          <div className="double-column">
            <div>
              <h3>Eficiência — foco Raul</h3>
              <ul>
                <li>Redução de retrabalho e custos ocultos.</li>
                <li>Diminuição de tempo em controles dispersos.</li>
              </ul>
            </div>
            <div>
              <h3>Escalabilidade — foco Reginaldo</h3>
              <ul>
                <li>Portfólio com visão executiva em tempo real.</li>
                <li>Capacidade de priorização transparente.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-card" id="artefatos">
          <span className="badge">Artefatos Essenciais</span>
          <h2>Kit mínimo para cada projeto</h2>
          <div className="double-column">
            <div>
              <h3>Planejamento</h3>
              <ul>
                <li>Charter/Business Case validado.</li>
                <li>Plano de Projeto com escopo, cronograma e orçamento.</li>
                <li>RACI macro e detalhado por entregável.</li>
              </ul>
            </div>
            <div>
              <h3>Execução e Monitoramento</h3>
              <ul>
                <li>Kanban no Bitrix24 com automações.</li>
                <li>Status Report quinzenal.</li>
                <li>Dashboard executivo com visão consolidada.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
