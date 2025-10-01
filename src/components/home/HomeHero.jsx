/**
 * Hero principal da página inicial.
 */
export default function HomeHero() {
  return (
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
  );
}
