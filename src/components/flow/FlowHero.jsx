import Button from '../common/Button';

/**
 * Hero com visão geral do fluxo do PMO.
 */
export default function FlowHero() {
  return (
    <header className="flow-hero" role="banner">
      <div className="flow-topbar">
        <a className="flow-brand" href="https://educacross.com.br" target="_blank" rel="noopener noreferrer">
          <span className="flow-brand-mark">educacross</span>
          <span className="flow-brand-tag">PMO</span>
        </a>
      </div>

      <div className="flow-hero-main">
        <div className="flow-hero-text">
          <h1>Fluxo integrado do PMO Educacross</h1>
          <p>
            Fluxo de ponta a ponta para intake, planejamento, execução e acompanhamento dos projetos Educacross, com
            governança baseada em Stage Gates, automações no Bitrix24 e artefatos essenciais.
          </p>
          <ul className="flow-meta">
            <li>
              <strong>Versão:</strong> 1.0 • Set/2025
            </li>
            <li>
              <strong>Responsável:</strong> Leonardo Fonseca Pontes (PMO)
            </li>
            <li>
              <strong>Objetivo:</strong> Orquestrar estratégia, pessoas e tecnologia em um pipeline único.
            </li>
          </ul>
          <div className="flow-hero-stats">
            <div className="flow-stat">
              <span className="flow-stat-number">G0 → G4</span>
              <span className="flow-stat-label">Decisões por Stage Gate</span>
            </div>
            <div className="flow-stat">
              <span className="flow-stat-number">Bitrix24</span>
              <span className="flow-stat-label">Fonte única da verdade</span>
            </div>
            <div className="flow-stat">
              <span className="flow-stat-number">30/60/90</span>
              <span className="flow-stat-label">Ciclo de benefícios pós-projeto</span>
            </div>
          </div>
        </div>
        <aside className="flow-hero-card" aria-label="Resumo do fluxo">
          <h2>O que este fluxo garante</h2>
          <ul>
            <li>Demandas triadas com critérios claros antes de consumir capacidade.</li>
            <li>Planejamento integrado entre áreas com artefatos mínimos padronizados.</li>
            <li>Execução com ritos, semáforo executivo e automações no Bitrix24.</li>
            <li>Fechamento com handover, medição de benefícios e lições aprendidas.</li>
          </ul>
          <Button href="#visao-pipeline">Ver etapas em detalhes</Button>
        </aside>
      </div>
    </header>
  );
}
