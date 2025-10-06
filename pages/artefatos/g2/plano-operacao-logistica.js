import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function PlanoOperacaoLogisticaPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Operação &amp; Logística</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Operação &amp; Logística G2 - PMO Educacross"
      description="Guia do Plano de Operação e Logística para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano de Operação &amp; Logística</h2>
          <p>
            É o documento que organiza <strong>todos os aspectos práticos de execução</strong> de um projeto:
            infraestrutura, transporte, montagem, materiais, fornecedores e cronogramas logísticos.
          </p>
          <p>O foco é transformar o planejamento em realidade, com checklist e previsibilidade.</p>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Escopo Operacional</h3>
          <ul>
            <li>Quais atividades de logística o projeto exige (ex.: evento, transporte de kits, montagem de stands).</li>
            <li>Quais entregáveis dependem de operação (infraestrutura, coffee break, sinalização).</li>
          </ul>

          <h3>2. Checklists de Logística</h3>
          <ul>
            <li>Transporte: veículos, rotas, horários, responsáveis.</li>
            <li>Materiais: o que precisa estar no local (kits, brindes, decoração, tecnologia).</li>
            <li>Montagem/desmontagem: prazos, responsáveis, validações.</li>
            <li>Suprimentos: alimentação, água, segurança, limpeza.</li>
          </ul>

          <h3>3. Fornecedores</h3>
          <ul>
            <li>Lista de fornecedores homologados.</li>
            <li>Escopo contratado de cada um.</li>
            <li>SLA, prazos de entrega, penalidades por atraso.</li>
          </ul>

          <h3>4. Cronograma Operacional</h3>
          <ul>
            <li>Datas-chave de logística (compra, entrega, montagem, desmontagem).</li>
            <li>
              Marcação clara das <strong>dependências críticas</strong> (ex.: palco montado antes do teste de som).
            </li>
          </ul>

          <h3>5. Responsabilidades</h3>
          <ul>
            <li>
              <strong>Operações (Raul + Darlete):</strong> fornecedores, montagem, prazos.
            </li>
            <li>
              <strong>Financeiro (Angelita):</strong> pagamentos e contratos.
            </li>
            <li>
              <strong>PMO:</strong> acompanhamento e reporte em status.
            </li>
            <li>
              <strong>Fornecedor:</strong> execução e SLA.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela – Plano de Operação &amp; Logística</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Atividade</th>
                  <th>Fornecedor / Área</th>
                  <th>Local</th>
                  <th>Data / Hora</th>
                  <th>Responsável</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reserva do espaço</td>
                  <td>Espaço XYZ</td>
                  <td>Canoas</td>
                  <td>10/11</td>
                  <td>Darlete</td>
                  <td>Confirmado</td>
                </tr>
                <tr>
                  <td>Montagem de palco e som</td>
                  <td>Fornecedor A</td>
                  <td>Canoas</td>
                  <td>27/11 – 08h</td>
                  <td>Raul</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Entrega de kits pedagógicos</td>
                  <td>Fornecedor B</td>
                  <td>Canoas</td>
                  <td>26/11 – até 18h</td>
                  <td>Marketing/Operações</td>
                  <td>Em andamento</td>
                </tr>
                <tr>
                  <td>Coffee break</td>
                  <td>Fornecedor C</td>
                  <td>Canoas</td>
                  <td>28/11 – 14h</td>
                  <td>Darlete</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Desmontagem</td>
                  <td>Fornecedor A</td>
                  <td>Canoas</td>
                  <td>28/11 – 20h</td>
                  <td>Raul</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Sempre usar <strong>checklist operacional</strong> (água, energia, limpeza, kit de emergência).
              </li>
              <li>Validar fornecedores <strong>30 dias antes</strong> do evento/projeto.</li>
              <li>Garantir <strong>plano B</strong> para itens críticos (fornecedor backup).</li>
              <li>PMO deve registrar status da logística no <strong>relatório quinzenal</strong> como semáforo.</li>
              <li>
                Documentar <strong>lições aprendidas de logística</strong> (falhas e acertos) para eventos futuros.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
