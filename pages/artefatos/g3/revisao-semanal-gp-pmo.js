import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function RevisaoSemanalGpPmoPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Revisão Semanal do GP/PMO</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Revisão Semanal do GP/PMO G3 - PMO Educacross"
      description="Template de revisão semanal do GP/PMO para a fase G3 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>G3: Revisão Semanal do GP/PMO</h2>
          <p>
            <strong>Semana:</strong> dd/mm/aaaa a dd/mm/aaaa
          </p>
          <p>
            <strong>Responsável:</strong> __________________________
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Visão Geral da Semana</h2>
          <ul>
            <li>
              <strong>Resumo Executivo (3-4 linhas):</strong> principais avanços, desafios e decisões tomadas.
            </li>
            <li>
              <strong>Semáforos do Portfólio:</strong>
            </li>
          </ul>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Projeto</th>
                  <th>Escopo</th>
                  <th>Prazo</th>
                  <th>Qualidade</th>
                  <th>Risco</th>
                  <th>Situação Contratual</th>
                  <th>Status Geral</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Projeto A</td>
                  <td>🟢</td>
                  <td>🟡</td>
                  <td>🟢</td>
                  <td>🟡</td>
                  <td>🟢</td>
                  <td>Em andamento</td>
                </tr>
                <tr>
                  <td>Projeto B</td>
                  <td>🟡</td>
                  <td>🔴</td>
                  <td>🟢</td>
                  <td>🔴</td>
                  <td>🟡</td>
                  <td>Crítico</td>
                </tr>
                <tr>
                  <td>Projeto C</td>
                  <td>🟢</td>
                  <td>🟢</td>
                  <td>🟢</td>
                  <td>🟢</td>
                  <td>🟢</td>
                  <td>OK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 2. Atualizações Relevantes</h2>
          <ul>
            <li>Decisões importantes da semana.</li>
            <li>Alinhamentos feitos com diretoria/sponsors.</li>
            <li>Mudanças de escopo, prazos ou contratos.</li>
            <li>Principais conquistas (entregas aprovadas, marcos concluídos).</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 3. Pendências Críticas</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Pendência</th>
                  <th>Impacto</th>
                  <th>Responsável</th>
                  <th>Prazo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aprovação orçamento evento Franca</td>
                  <td>Alto</td>
                  <td>Reginaldo</td>
                  <td>28/09</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Homologação da integração Plurall</td>
                  <td>Alto</td>
                  <td>Matheus</td>
                  <td>30/09</td>
                  <td>Em andamento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 4. Principais Riscos</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Risco</th>
                  <th>Probabilidade</th>
                  <th>Impacto</th>
                  <th>Ação de Mitigação</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Atraso em fornecedores de kits</td>
                  <td>Alta</td>
                  <td>Médio</td>
                  <td>Fornecedor backup homologado</td>
                  <td>Aberto</td>
                </tr>
                <tr>
                  <td>Falha de adesão em treinamentos</td>
                  <td>Média</td>
                  <td>Alto</td>
                  <td>Refazer comunicação + reforço CS</td>
                  <td>Aberto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 5. Planos da Próxima Semana</h2>
          <ul>
            <li>Entregas esperadas.</li>
            <li>Reuniões-chave.</li>
            <li>Aprovações necessárias.</li>
            <li>Ações de mitigação a executar.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 6. Observações do GP/PMO</h2>
          <p>Espaço para insights, recomendações e reforço de prioridades estratégicas.</p>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Manter <strong>curto, objetivo e visual</strong> → diretoria quer clareza, não detalhes excessivos.
              </li>
              <li>Sempre comparar com semana anterior (ganhos e atrasos).</li>
              <li>Usar semáforos de forma consistente.</li>
              <li>
                Garantir que pendências tenham sempre um responsável <strong>nomeado</strong> (não “time X”).
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
