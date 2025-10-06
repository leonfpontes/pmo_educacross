import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function PlanoRiscosPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Risco</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Riscos G2 - PMO Educacross"
      description="Guia para elaboração do Plano de Riscos do Gate G2 no PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Plano de Riscos – Educacross</h2>
          <p>
            <strong>Projeto:</strong> __________________________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h2>1. Objetivo</h2>
          <p>
            Identificar, avaliar e definir estratégias de resposta para os principais riscos do projeto,
            garantindo que eles sejam acompanhados durante todo o ciclo de vida.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Escala de Probabilidade e Impacto</h2>
          <ul>
            <li>
              <strong>Probabilidade (P):</strong>
              <ul>
                <li>1 = Baixa (≤30%)</li>
                <li>2 = Média (31–70%)</li>
                <li>3 = Alta (≥71%)</li>
              </ul>
            </li>
            <li>
              <strong>Impacto (I):</strong>
              <ul>
                <li>1 = Baixo (afeta pouco prazo/escopo/custo)</li>
                <li>2 = Médio (impacta prazo/escopo/custo em até 15%)</li>
                <li>3 = Alto (impacto &gt;15% ou crítico para sucesso do projeto)</li>
              </ul>
            </li>
            <li>
              <strong>Exposição ao Risco (ER):</strong> <code>P x I</code> (varia de 1 a 9)
              <ul>
                <li>1–3 = Baixo (verde)</li>
                <li>4–6 = Moderado (amarelo)</li>
                <li>7–9 = Crítico (vermelho)</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>3. Matriz de Riscos (Exemplo de Tabela)</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Risco</th>
                  <th>Categoria</th>
                  <th>Probabilidade</th>
                  <th>Impacto</th>
                  <th>ER (PxI)</th>
                  <th>Estratégia de Resposta</th>
                  <th>Responsável</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>R1</td>
                  <td>Atraso na entrega de fornecedor</td>
                  <td>Suprimentos</td>
                  <td>3 (Alta)</td>
                  <td>2 (Médio)</td>
                  <td>6</td>
                  <td>
                    Mitigar: contrato com cláusula de SLA + fornecedor backup
                  </td>
                  <td>Darlete</td>
                  <td>Em monitoramento</td>
                </tr>
                <tr>
                  <td>R2</td>
                  <td>Falha de integração tecnológica</td>
                  <td>Técnico</td>
                  <td>2 (Médio)</td>
                  <td>3 (Alto)</td>
                  <td>6</td>
                  <td>Mitigar: testes antecipados + plano de rollback</td>
                  <td>Matheus Brocchi</td>
                  <td>Em aberto</td>
                </tr>
                <tr>
                  <td>R3</td>
                  <td>Baixa adesão de professores ao piloto</td>
                  <td>Pedagógico / Operacional</td>
                  <td>2 (Médio)</td>
                  <td>3 (Alto)</td>
                  <td>6</td>
                  <td>Mitigar: plano de comunicação + treinamento dedicado</td>
                  <td>Erica</td>
                  <td>Em aberto</td>
                </tr>
                <tr>
                  <td>R4</td>
                  <td>Cancelamento de evento por fatores externos</td>
                  <td>Operações</td>
                  <td>1 (Baixa)</td>
                  <td>3 (Alto)</td>
                  <td>3</td>
                  <td>
                    Transferir: seguro de evento + contrato com cláusulas de força maior
                  </td>
                  <td>Raul</td>
                  <td>Fechado</td>
                </tr>
                <tr>
                  <td>R5</td>
                  <td>Orçamento acima do previsto</td>
                  <td>Financeiro</td>
                  <td>2 (Médio)</td>
                  <td>2 (Médio)</td>
                  <td>4</td>
                  <td>Mitigar: baseline detalhado + contingência 10%</td>
                  <td>Angelita</td>
                  <td>Em monitoramento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>4. Estratégias de Resposta (Padrão Educacross)</h2>
          <ul>
            <li>
              <strong>Evitar:</strong> eliminar a causa do risco (ex.: mudar fornecedor).
            </li>
            <li>
              <strong>Mitigar:</strong> reduzir probabilidade ou impacto (ex.: testes extras, cláusulas contratuais).
            </li>
            <li>
              <strong>Transferir:</strong> repassar o risco a terceiros (ex.: seguro, SLA).
            </li>
            <li>
              <strong>Aceitar:</strong> reconhecer e monitorar (para riscos de baixo impacto).
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>5. Processo de Monitoramento</h2>
          <ul>
            <li>
              Revisão quinzenal em <strong>Reuniões de Status</strong> (PMO + GP + times).
            </li>
            <li>
              Atualização de status no <strong>Bitrix24</strong> (campo de risco vinculado ao projeto).
            </li>
            <li>
              Escalonamento de riscos críticos para <strong>Comitê de Projetos</strong>.
            </li>
            <li>
              Avaliação de riscos materializados → convertidos em <strong>issues</strong> com plano de ação.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas">
            <ul>
              <li>
                Cada risco deve ter <strong>responsável nomeado</strong> (não “time”).
              </li>
              <li>
                Evite lista genérica → riscos devem ser <strong>específicos ao projeto</strong>.
              </li>
              <li>
                Use a matriz <strong>PxI</strong> como critério objetivo para priorizar.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
