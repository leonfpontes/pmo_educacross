/**
 * Hero principal da página inicial — estilo Windows 2000.
 */
export default function HomeHero() {
  return (
    <section className="page-hero" aria-labelledby="hero-title">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-highlight">PMO Educacross — Proposta de Estruturação</p>
          <h1 id="hero-title">Escritório de Projetos da Educacross</h1>
          <p>
            O PMO da Educacross conecta a visão estratégica da diretoria à execução dos projetos,
            garantindo crescimento sustentável, escala e previsibilidade.
          </p>
          <dl className="hero-meta">
            <div>
              <dt>Responsável</dt>
              <dd>Leonardo Fonseca Pontes — Gerente de Projetos</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>Setembro/2025</dd>
            </div>
          </dl>
        </div>
        <div className="hero-card">
          <div className="hero-card-titlebar">
            <h2>Como o PMO se posiciona</h2>
            <div style={{ display: 'flex', gap: '2px', marginLeft: 'auto' }}>
              <span className="titlebar-btn" aria-hidden="true">_</span>
              <span className="titlebar-btn" aria-hidden="true">□</span>
              <span className="titlebar-btn" aria-hidden="true">×</span>
            </div>
          </div>
          <p>
            Um centro estratégico que orienta, prioriza e monitora iniciativas para transformar ideias em resultados
            concretos. Mais do que execução operacional: governança, padrões e visão única.
          </p>
        </div>
      </div>
    </section>
  );
}
