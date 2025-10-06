import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function PlanoPedagogicoProdutoPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano Pedagógico &amp; Produto</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano Pedagógico &amp; Produto G2 - PMO Educacross"
      description="Guia do Plano Pedagógico &amp; Produto para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano Pedagógico &amp; Produto</h2>
          <p>É o documento que define:</p>
          <ul>
            <li>
              <strong>Perspectiva pedagógica</strong> → alinhamento com objetivos de aprendizagem, BNCC, rubricas de
              qualidade, experiência de professores e alunos.
            </li>
            <li>
              <strong>Perspectiva de produto</strong> → funcionalidades, diferenciais, jornada do usuário, entregáveis
              digitais ou físicos.
            </li>
          </ul>
          <p>Assim, une <strong>conteúdo + tecnologia + experiência do usuário</strong>.</p>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Objetivos Pedagógicos</h3>
          <ul>
            <li>Quais competências ou habilidades o projeto impacta?</li>
            <li>Qual valor agregado para professores, alunos ou escolas?</li>
            <li>Como será medida a eficácia pedagógica? (ex.: adesão, rubricas, NPS educador).</li>
          </ul>

          <h3>2. Padrões de Qualidade Pedagógica</h3>
          <ul>
            <li>Uso de rubricas Educacross (validação por Erica e time pedagógico).</li>
            <li>Revisões duplas de conteúdo antes de publicação.</li>
            <li>Conformidade com BNCC e com diretrizes educacionais vigentes.</li>
          </ul>

          <h3>3. Visão de Produto</h3>
          <ul>
            <li>Qual problema o produto resolve?</li>
            <li>Quem é o usuário principal (professor, gestor, aluno, parceiro)?</li>
            <li>Diferenciais em relação a soluções de mercado (ex.: gamificação, mascotes, dashboards).</li>
          </ul>

          <h3>4. Escopo do Produto</h3>
          <ul>
            <li>Funcionalidades/entregas mínimas (MVP).</li>
            <li>O que está fora de escopo.</li>
            <li>Evoluções previstas (roadmap V1 → V2 → V3).</li>
          </ul>

          <h3>5. Jornada do Usuário</h3>
          <ul>
            <li>Fluxo resumido da experiência (onboarding → uso → suporte).</li>
            <li>Pontos de atrito previstos.</li>
            <li>Materiais de apoio (FAQs, tutoriais, vídeos).</li>
          </ul>

          <h3>6. Responsabilidades</h3>
          <ul>
            <li>
              <strong>Pedagógico (Erica + time):</strong> validação de conteúdo, rubricas, aderência à BNCC.
            </li>
            <li>
              <strong>Produto (Max + time):</strong> definição de funcionalidades, integrações, UX.
            </li>
            <li>
              <strong>PMO:</strong> garante a integração das duas visões no planejamento.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela - Plano Pedagógico &amp; Produto</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Área</th>
                  <th>Entregável</th>
                  <th>Critério de Qualidade</th>
                  <th>Responsável</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pedagógico</td>
                  <td>Módulo 1 revisado</td>
                  <td>Rubrica ≥ 90%</td>
                  <td>Erica</td>
                  <td>Em validação</td>
                </tr>
                <tr>
                  <td>Pedagógico</td>
                  <td>Formação de professores</td>
                  <td>80% de adesão + NPS ≥ 8,0</td>
                  <td>CS/Pedagógico</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Produto</td>
                  <td>Dashboard de acompanhamento</td>
                  <td>Exibe 6 indicadores principais</td>
                  <td>Tech/Produto</td>
                  <td>Em construção</td>
                </tr>
                <tr>
                  <td>Produto</td>
                  <td>App Whitelabel</td>
                  <td>Login via SSO + identidade visual cliente</td>
                  <td>Produto/Tech</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>Nunca separar <strong>produto da visão pedagógica</strong> - o diferencial está na união.</li>
              <li>
                Garantir que todo entregável tenha <strong>critérios de qualidade pedagógica e técnica</strong> definidos.
              </li>
              <li>
                Usar o PMO como “ponte” entre Erica (Pedagógico) e Max (Produto) para evitar desalinhamentos.
              </li>
              <li>
                Roadmap do produto deve sempre prever <strong>validação pedagógica antes do Go-Live</strong>.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
