import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function TermoAceiteSponsorG4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G4: Termo de Aceite do Sponsor – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Termo de Aceite do Sponsor G4 - PMO Educacross"
      description="Termo de aceite para formalização do encerramento de projeto no Gate G4 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
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
          <h2>1. Identificação</h2>
          <ul>
            <li>
              <strong>Sponsor:</strong> __________________________________
            </li>
            <li>
              <strong>Gerente de Projeto (GP):</strong> __________________________________
            </li>
            <li>
              <strong>PMO:</strong> Leonardo Fonseca Pontes
            </li>
            <li>
              <strong>Período do Projeto:</strong> dd/mm/aaaa a dd/mm/aaaa
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>2. Escopo Entregue</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Entrega</th>
                  <th>Status</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Entrega 1</td>
                  <td>✔️ Concluída</td>
                  <td>__________________________</td>
                </tr>
                <tr>
                  <td>Entrega 2</td>
                  <td>✔️ Concluída</td>
                  <td>__________________________</td>
                </tr>
                <tr>
                  <td>Entrega 3</td>
                  <td>✔️ Concluída</td>
                  <td>__________________________</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>3. Avaliação do Sponsor</h2>
          <h3>Qualidade das Entregas</h3>
          <ul>
            <li>[ ] Excelente</li>
            <li>[ ] Adequada</li>
            <li>[ ] Insatisfatória</li>
          </ul>

          <h3>Atendimento às Expectativas de Negócio</h3>
          <ul>
            <li>[ ] Superou</li>
            <li>[ ] Atendeu</li>
            <li>[ ] Não atendeu</li>
          </ul>

          <h3>Comunicação e Gestão do Projeto</h3>
          <ul>
            <li>[ ] Excelente</li>
            <li>[ ] Adequada</li>
            <li>[ ] Insatisfatória</li>
          </ul>

          <h3>Observações do Sponsor</h3>
          <p>______________________________________________</p>
          <p>______________________________________________</p>
        </section>

        <section className="content-card">
          <h2>4. Decisão Final</h2>
          <ul>
            <li>[ ] Aprovo o encerramento do projeto.</li>
            <li>[ ] Aprovo com ressalvas (detalhar): ___________________________</li>
            <li>[ ] Não aprovo o encerramento (motivo): ______________________</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>5. Assinaturas</h2>
          <ul>
            <li>
              <strong>Sponsor:</strong> __________________________
            </li>
            <li>
              <strong>Diretoria/Comitê:</strong> __________________________
            </li>
            <li>
              <strong>PMO:</strong> Leonardo Fonseca Pontes
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>O aceite deve ser <strong>obrigatório antes do arquivamento</strong> do projeto.</li>
              <li>
                Usar este documento em conjunto com o <strong>Relatório Final</strong>.
              </li>
              <li>
                Aceites com ressalvas devem gerar <strong>plano de ação</strong> a ser monitorado pelo PMO.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
