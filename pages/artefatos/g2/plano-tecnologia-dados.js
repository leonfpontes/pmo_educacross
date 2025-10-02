import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoTecnologiaDadosPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Tecnologia &amp; Dados</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Tecnologia &amp; Dados G2 - PMO Educacross"
      description="Guia do Plano de Tecnologia e Dados para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano de Tecnologia &amp; Dados</h2>
          <p>É o documento que descreve:</p>
          <ul>
            <li>
              <strong>Infraestrutura tecnológica necessária</strong> para o projeto (softwares, servidores, integrações, licenças).
            </li>
            <li>
              <strong>Gestão de dados</strong>, desde a captura até o relatório final (quais dados, quem coleta, onde armazenar, como tratar).
            </li>
            <li>
              <strong>Critérios de segurança e qualidade</strong>, incluindo LGPD e padrões Educacross.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Infraestrutura Tecnológica</h3>
          <ul>
            <li>Sistemas e ferramentas envolvidas (Bitrix24, Looker, Metabase, Plurall, Google Workspace).</li>
            <li>Necessidade de novas licenças, upgrades ou integrações.</li>
            <li>Ambiente de <strong>homologação</strong> para testes antes do Go-Live.</li>
            <li>Requisitos mínimos de hardware, rede ou cloud.</li>
          </ul>

          <h3>2. Integrações</h3>
          <ul>
            <li>APIs, conectores ou planilhas que alimentam dashboards.</li>
            <li>Responsáveis técnicos por cada integração.</li>
            <li>Critérios de validação antes do uso em produção.</li>
          </ul>

          <h3>3. Gestão de Dados</h3>
          <ul>
            <li>
              <strong>Definição preliminar de dados:</strong> quais indicadores serão acompanhados.
            </li>
            <li>Fontes de dados (CRM, relatórios internos, formulários, dashboards).</li>
            <li>Periodicidade de atualização (diário, semanal, mensal).</li>
            <li>Responsáveis por cada dado.</li>
          </ul>

          <h3>4. Segurança e Compliance</h3>
          <ul>
            <li>Armazenamento seguro (servidores internos, cloud com backup).</li>
            <li>Regras de acesso (quem pode ver/editar).</li>
            <li>Conformidade com LGPD (dados pessoais de alunos, professores, clientes).</li>
            <li>Plano de contingência em caso de falhas ou incidentes.</li>
          </ul>

          <h3>5. Suporte e Continuidade</h3>
          <ul>
            <li>Quem será responsável pelo suporte (Tech, BI, Produto).</li>
            <li>Plano de monitoramento pós-Go-Live (30/60/90 dias).</li>
            <li>Documentação entregue aos times internos.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela – Plano de Tecnologia &amp; Dados</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Necessidade</th>
                  <th>Responsável</th>
                  <th>Prazo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Integração Educacross ↔ Plurall</td>
                  <td>Login via SSO</td>
                  <td>Matheus (Tech)</td>
                  <td>15/10</td>
                  <td>Em homologação</td>
                </tr>
                <tr>
                  <td>Dashboard de indicadores pedagógicos</td>
                  <td>Relatório semanal em Metabase</td>
                  <td>Nathália (BI)</td>
                  <td>30/10</td>
                  <td>Em construção</td>
                </tr>
                <tr>
                  <td>Licenças adicionais Bitrix24</td>
                  <td>+50 usuários</td>
                  <td>Angelita (Financeiro)</td>
                  <td>05/11</td>
                  <td>Aguardando aprovação</td>
                </tr>
                <tr>
                  <td>Backup de dados de evento</td>
                  <td>Servidor Educacross + Google Drive</td>
                  <td>Tech/Operações</td>
                  <td>20/11</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>Nenhum projeto vai a Go-Live sem <strong>homologação aprovada</strong> de tecnologia.</li>
              <li>Todos os indicadores devem estar definidos no início (não deixar para “ver depois”).</li>
              <li>Dados sensíveis (alunos, professores) devem sempre passar por validação de <strong>LGPD</strong>.</li>
              <li>O PMO acompanha <strong>integrações e dashboards</strong> no status report como itens críticos de risco.</li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
