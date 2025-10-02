import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function CronogramaG2Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Cronograma</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Cronograma G2 - PMO Educacross"
      description="Modelo de cronograma para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Cronograma – Educacross</h2>
          <p>
            <strong>Projeto:</strong> __________________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h2>Estrutura do Cronograma</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fase</th>
                  <th>Atividade / Entrega</th>
                  <th>Responsável</th>
                  <th>Início Previsto</th>
                  <th>Fim Previsto</th>
                  <th>Dependências</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>1. Iniciação</strong>
                  </td>
                  <td>Reunião de Kickoff</td>
                  <td>GP</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>-</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Carta de Abertura (Charter)</td>
                  <td>PMO/GP</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Kickoff</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td>
                    <strong>2. Planejamento</strong>
                  </td>
                  <td>WBS finalizada</td>
                  <td>GP</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Charter</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Cronograma detalhado</td>
                  <td>PMO</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>WBS</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Orçamento baseline</td>
                  <td>Financeiro</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>WBS</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Matriz de Riscos</td>
                  <td>GP/PMO</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>WBS</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td>
                    <strong>3. Execução</strong>
                  </td>
                  <td>Desenvolvimento/Produção</td>
                  <td>Produto/Pedagógico</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Planejamento aprovado</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>QA/Testes</td>
                  <td>Tech/QA</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Desenvolvimento</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Comunicação/Marketing</td>
                  <td>Marketing</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Planejamento</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td>
                    <strong>4. Lançamento</strong>
                  </td>
                  <td>Checklist Go/No-Go</td>
                  <td>PMO/Comitê</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Execução concluída</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Go-Live / Evento</td>
                  <td>GP/Operações</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Go/No-Go</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td>
                    <strong>5. Encerramento</strong>
                  </td>
                  <td>Relatório Final</td>
                  <td>GP/PMO</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Go-Live</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Lições Aprendidas</td>
                  <td>GP + Times</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Relatório Final</td>
                  <td>Não iniciado</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Avaliação Benefícios (30/60/90)</td>
                  <td>PMO</td>
                  <td>dd/mm/aaaa</td>
                  <td>dd/mm/aaaa</td>
                  <td>Encerramento</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas do cronograma Educacross">
            <ul>
              <li>
                Sempre defina <strong>dependências</strong> para evitar sobreposição/confusão.
              </li>
              <li>
                Use <strong>status semaforizado</strong> (verde/amarelo/vermelho) ou % concluído.
              </li>
              <li>
                Trate “fase” como agrupador (WBS nível 1) → atividades detalhadas (nível 2/3).
              </li>
              <li>
                O cronograma deve estar <strong>integrado ao Bitrix24</strong>, mas este modelo serve como base de aprovação.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}

