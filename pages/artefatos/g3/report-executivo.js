import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function ReportExecutivoG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Report Executivo (Quinzenal/Mensal)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Report Executivo G3 - PMO Educacross"
      description="Modelo de report executivo quinzenal ou mensal para o Gate G3 com status consolidado, indicadores e recomendações do PMO."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Período:</strong> dd/mm/aaaa a dd/mm/aaaa
          </p>
          <p>
            <strong>Responsável (GP/PMO):</strong> __________________________
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Resumo Executivo</h2>
          <ul>
            <li>Breve panorama da situação dos projetos Educacross (3–5 linhas).</li>
            <li>Principais conquistas no período.</li>
            <li>Pontos de atenção críticos para diretoria.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 2. Status Consolidado do Portfólio</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Projeto</th>
                  <th>Sponsor</th>
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
                  <td>Raul</td>
                  <td>🟢</td>
                  <td>🟡</td>
                  <td>🟢</td>
                  <td>🟡</td>
                  <td>🟢</td>
                  <td>Em atenção</td>
                </tr>
                <tr>
                  <td>Projeto B</td>
                  <td>Reginaldo</td>
                  <td>🟡</td>
                  <td>🔴</td>
                  <td>🟡</td>
                  <td>🔴</td>
                  <td>🟡</td>
                  <td>Crítico</td>
                </tr>
                <tr>
                  <td>Projeto C</td>
                  <td>Raul</td>
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
          <h2>🔹 3. Principais Avanços (Top 3 - 5)</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> Entrega X concluída e validada pelo sponsor.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Homologação de integração Educacross ↔ Plurall finalizada.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Evento Franca confirmado com 100% dos fornecedores contratados.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 4. Principais Desafios / Alertas</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> Atraso na aprovação de orçamento baseline (impacta prazo).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Risco de baixa adesão em treinamentos → plano de reforço em curso.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Dependência de fornecedor único para kits pedagógicos.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 5. Pendências da Diretoria</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Pendência</th>
                  <th>Responsável</th>
                  <th>Data Limite</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aprovar orçamento baseline</td>
                  <td>Reginaldo</td>
                  <td>30/09</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Validar mudança de escopo (Change Request 02)</td>
                  <td>Raul</td>
                  <td>28/09</td>
                  <td>Em análise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 6. Roadmap Consolidado</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Marco</th>
                  <th>Projeto</th>
                  <th>Data Prevista</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kickoff oficial</td>
                  <td>Projeto A</td>
                  <td>15/10</td>
                  <td>Concluído</td>
                </tr>
                <tr>
                  <td>Treinamento professores</td>
                  <td>Projeto B</td>
                  <td>20/10</td>
                  <td>Em andamento</td>
                </tr>
                <tr>
                  <td>Go-Live plataforma</td>
                  <td>Projeto C</td>
                  <td>15/11</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 7. Indicadores de Portfólio</h2>
          <ul>
            <li>% de projetos <strong>no prazo</strong>: 65%</li>
            <li>% de projetos <strong>dentro do orçamento</strong>: 80%</li>
            <li>% de projetos com <strong>risco alto</strong>: 15%</li>
            <li>Satisfação dos stakeholders (NPS interno): 8,3</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 8. Conclusão e Recomendações do PMO</h2>
          <ul>
            <li>[Reforço das prioridades estratégicas].</li>
            <li>[Sugestão de ação imediata da diretoria].</li>
            <li>[Visão sobre próximos passos críticos].</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Sempre trazer <strong>Top 3 conquistas</strong> e <strong>Top 3 alertas</strong> → foco e clareza.
              </li>
              <li>
                Usar <strong>semáforos e percentuais</strong> para facilitar leitura rápida.
              </li>
              <li>
                Relacionar pendências diretamente à <strong>diretoria</strong>, não a times → facilita tomada de decisão.
              </li>
              <li>
                Apresentar em até <strong>1 página executiva + anexos</strong> (quando necessário).
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
