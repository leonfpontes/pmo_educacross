/**
 * Hero principal da página inicial.
 */
export default function HomeHero() {
  return (
    <section className="page-hero" aria-labelledby="hero-title">
      <div className="hero">
        <div className="hero-text">
          <p className="hero-highlight">Estratégia • Governança • Resultados</p>
          <h1 id="hero-title">Proposta de Estruturação do Escritório de Projetos</h1>
          <p>
            O PMO da Educacross nasce para conectar a visão estratégica da diretoria à execução impecável dos projetos,
            garantindo o crescimento sustentável, escala e previsibilidade.
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
          <h2>Como o PMO se posiciona</h2>
          <p>
            Um centro estratégico que orienta, prioriza e monitora iniciativas para transformar ideias em resultados
            concretos. Mais do que execução operacional: governança, padrões e visão única.
          </p>
        </div>
      </div>
    </section>
  );
}
