import Layout from '@/components/layout/SiteLayout';
import Button from '@/components/ui/Button';

export default function HighLevelScopePage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1: Escopo de Alto Nível</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Escopo de Alto Nível G1 - PMO Educacross"
      description="Definição de escopo, critérios de sucesso e boas práticas do Gate G1 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>G1: Escopo de Alto Nível</h2>
          <p>
            É a <strong>visão macro do que o projeto vai entregar</strong> (e também o que <strong>não</strong> vai entregar).
          </p>
          <p>
            Ele funciona como um <em>guarda-chuva</em> que dá limites e orienta os próximos passos.
          </p>
        </section>

        <section className="content-card">
          <h3>O que deve conter</h3>
          <ul>
            <li>
              <strong>O que será entregue:</strong> produtos, serviços, eventos, integrações.
            </li>
            <li>
              <strong>O que não será entregue:</strong> itens fora de escopo, para evitar expectativas equivocadas.
            </li>
            <li>
              <strong>Áreas impactadas:</strong> times que precisarão estar envolvidos.
            </li>
            <li>
              <strong>Restrições iniciais:</strong> prazos críticos, recursos limitados, dependências já conhecidas.
            </li>
          </ul>
          <p>
            <span role="img" aria-label="Exemplo">➡️</span>{' '}
            <em>Exemplo Educacross:</em>
          </p>
          <ul>
            <li>
              <strong>Escopo incluído:</strong> implantação da plataforma Educacross em 10 escolas de Osasco, com treinamentos e
              dashboards ativos.
            </li>
            <li>
              <strong>Fora de escopo:</strong> personalização de relatórios além do modelo padrão.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🏆 Critérios de Sucesso / OKRs</h2>
          <p>
            São os <strong>parâmetros que definem se o projeto foi bem-sucedido</strong>.
          </p>
          <p>
            Podem ser formulados como <strong>indicadores (KPIs)</strong> ou no formato de <strong>OKRs (Objectives &amp; Key Results)</strong>.
          </p>
        </section>

        <section className="content-card">
          <h3>Objetivos (O)</h3>
          <p>Declarações qualitativas do que se quer alcançar.</p>
          <p>
            <span role="img" aria-label="Exemplo">➡️</span>{' '}
            <em>Exemplo:</em> “Garantir adesão dos professores à plataforma Educacross.”
          </p>
        </section>

        <section className="content-card">
          <h3>Resultados-Chave (KRs)</h3>
          <p>Métricas quantitativas e verificáveis que comprovam o sucesso.</p>
          <p>
            <span role="img" aria-label="Exemplo">➡️</span>{' '}
            <em>Exemplo:</em>
          </p>
          <ul>
            <li>KR1: 90% dos professores ativos utilizando a plataforma em 60 dias.</li>
            <li>KR2: NPS ≥ 8,0 no pós-treinamento.</li>
            <li>KR3: Dashboard de desempenho rodando semanalmente sem falhas.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📌 Boas práticas Educacross</h2>
          <ul>
            <li>
              Definir escopo de alto nível e critérios de sucesso <strong>ainda no Charter</strong> → isso orienta todo o planejamento.
            </li>
            <li>
              Sempre incluir pelo menos <strong>1 KR financeiro/operacional</strong> (ex.: custo evitado, prazo cumprido) e <strong>1 KR pedagógico/qualitativo</strong> (ex.: impacto em professores/alunos).
            </li>
            <li>
              Revisar OKRs a cada <strong>Gate</strong> → podem ser refinados conforme o projeto amadurece.
            </li>
          </ul>
        </section>

        <section className="content-card content-card--actions">
          <Button href="/artefatos/g1" variant="secondary">
            Voltar para Artefatos G1
          </Button>
        </section>
      </article>
    </Layout>
  );
}
