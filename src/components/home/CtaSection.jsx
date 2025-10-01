import Button from '../common/Button';

/**
 * Seção de chamada para ação direcionando ao fluxo do PMO.
 */
export default function CtaSection() {
  return (
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
          <Button href="/fluxo-pmo">Saiba Mais</Button>
        </div>
      </div>
    </section>
  );
}
