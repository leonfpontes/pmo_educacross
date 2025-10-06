import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function ComiteDeProjetoG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Comitê de Projeto (quinzenal)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Comitê de Projeto G3 - PMO Educacross"
      description="Template do comitê de projeto quinzenal com foco em governança jurídica e contratual para o Gate G3."
      hero={hero}
    >
      <article className="artifact-form">

        <section className="content-card">
          <h2>Dados do Comitê</h2>
          <p>
            <strong>Projeto:</strong> __________________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Participantes:</strong> __________________________
          </p>
          <p>
            <strong>Responsável (GP/PMO):</strong> __________________________
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Abertura &amp; Objetivos da Reunião</h2>
          <ul>
            <li>Alinhamento de status do projeto.</li>
            <li>Registro de decisões estratégicas.</li>
            <li>Avaliação de riscos e aprovações.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 2. Status Geral (semáforo executivo)</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Dimensão</th>
                  <th>Status</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escopo</td>
                  <td>🟢 🟡 🔴</td>
                  <td>…</td>
                </tr>
                <tr>
                  <td>Prazo</td>
                  <td>🟢 🟡 🔴</td>
                  <td>…</td>
                </tr>
                <tr>
                  <td>Qualidade</td>
                  <td>🟢 🟡 🔴</td>
                  <td>…</td>
                </tr>
                <tr>
                  <td>Risco</td>
                  <td>🟢 🟡 🔴</td>
                  <td>…</td>
                </tr>
                <tr>
                  <td>Contratos</td>
                  <td>🟢 🟡 🔴</td>
                  <td>…</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 3. Atualizações desde o último Comitê</h2>
          <ul>
            <li>Principais entregas concluídas.</li>
            <li>Decisões tomadas.</li>
            <li>Mudanças de escopo/prazo.</li>
            <li>Impactos estratégicos para Educacross.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 4. Pendências &amp; Decisões Necessárias</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Pendência</th>
                  <th>Responsável</th>
                  <th>Impacto</th>
                  <th>Data Limite</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aprovar orçamento baseline</td>
                  <td>Reginaldo</td>
                  <td>Alto</td>
                  <td>30/09</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Validar plano de treinamento</td>
                  <td>Erica</td>
                  <td>Médio</td>
                  <td>28/09</td>
                  <td>Em andamento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 5. Principais Riscos &amp; Ações</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Risco</th>
                  <th>Probabilidade</th>
                  <th>Impacto</th>
                  <th>Ação de Mitigação</th>
                  <th>Dono</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Atraso em fornecedor de kits</td>
                  <td>Alta</td>
                  <td>Médio</td>
                  <td>Fornecedor backup contratado</td>
                  <td>Raul</td>
                </tr>
                <tr>
                  <td>Resistência dos professores à adoção</td>
                  <td>Média</td>
                  <td>Alto</td>
                  <td>Treinamento reforçado + comunicação CS</td>
                  <td>Paula</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 6. Roadmap &amp; Próximos Marcos</h2>
          <ul>
            <li>
              <strong>Marco 1:</strong> [descrição + data].
            </li>
            <li>
              <strong>Marco 2:</strong> [descrição + data].
            </li>
            <li>
              <strong>Go-Live:</strong> [data prevista].
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 7. Solicitações de Change Request (se houver)</h2>
          <ul>
            <li>[Descrição breve da mudança, impacto e status de aprovação].</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 8. Encerramento &amp; Próximos Passos</h2>
          <ul>
            <li>Resumo das decisões tomadas.</li>
            <li>Pendências com responsáveis e prazos.</li>
            <li>Data do próximo Comitê.</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Comitê é <strong>decisório</strong>, não é para discutir execução → foco em riscos, pendências e aprovações.
              </li>
              <li>
                Sempre usar <strong>semáforos visuais</strong> para facilitar entendimento rápido da diretoria.
              </li>
              <li>
                Registrar atas formais (Bitrix/Drive) → garante rastreabilidade e evita dúvidas futuras.
              </li>
              <li>
                No fim, sempre ter a lista de <strong>decisões e responsáveis</strong> bem clara.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
