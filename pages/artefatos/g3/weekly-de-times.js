import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function WeeklyTimesG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Weekly de Times – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Weekly de Times G3 - PMO Educacross"
      description="Modelo de registro da weekly de times para a fase G3 do PMO Educacross, com foco em conquistas, pendências, prioridades, indicadores e próximos passos."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto/Time:</strong> __________________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Responsável pelo Registro:</strong> __________________________
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. WEEKLY (reunião semanal – 30 a 45 min)</h2>
          <blockquote>
            <p>
              <strong>Objetivo:</strong> refletir, priorizar e planejar a semana com foco em entregas e indicadores.
            </p>
          </blockquote>

          <h3>a) Conquistas da semana passada</h3>
          <ul>
            <li>[ ] Principais entregas concluídas</li>
            <li>[ ] Resultados positivos (indicadores, engajamento, feedbacks)</li>
          </ul>

          <h3>b) Pendências/Bloqueios</h3>
          <ul>
            <li>[ ] Atividades que ficaram em aberto</li>
            <li>[ ] Dependências externas (outros times, fornecedores, diretoria)</li>
          </ul>

          <h3>c) Prioridades da semana atual</h3>
          <ul>
            <li>[ ] Atividade 1 (responsável + prazo)</li>
            <li>[ ] Atividade 2 (responsável + prazo)</li>
            <li>[ ] Atividade 3 (responsável + prazo)</li>
          </ul>

          <h3>d) Indicadores (se aplicável)</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th>Meta</th>
                  <th>Resultado Atual</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ex.: Adesão professores</td>
                  <td>90%</td>
                  <td>82%</td>
                  <td>🟡 Em atenção</td>
                </tr>
                <tr>
                  <td>Ex.: Entregas de fornecedores</td>
                  <td>100% no prazo</td>
                  <td>95%</td>
                  <td>🟢 OK</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>e) Riscos &amp; Alertas</h3>
          <ul>
            <li>[ ] Risco identificado: __________________ (probabilidade x impacto)</li>
            <li>[ ] Ação de mitigação: __________________</li>
          </ul>

          <h3>f) Alinhamentos Gerais</h3>
          <ul>
            <li>Comunicados importantes da diretoria.</li>
            <li>Ajustes de estratégia.</li>
            <li>Agradecimentos e reconhecimentos.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 2. Follow-up / Próximos Passos</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Atividade</th>
                  <th>Responsável</th>
                  <th>Prazo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Definição de escopo final</td>
                  <td>GP</td>
                  <td>28/09</td>
                  <td>Em andamento</td>
                </tr>
                <tr>
                  <td>Revisão de rubricas pedagógicas</td>
                  <td>Erica</td>
                  <td>30/09</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Aprovação de orçamento</td>
                  <td>Reginaldo</td>
                  <td>01/10</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Weekly: foco em <strong>aprendizado e prioridades</strong> → não é só status, é espaço de reflexão.
              </li>
              <li>
                Sempre deixar o registro disponível no Bitrix/Drive, evitando que as decisões fiquem só na memória das pessoas.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
