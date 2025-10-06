import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoComunicacaoG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Plano de Comunicação – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Comunicação G3 - PMO Educacross"
      description="Plano de comunicação da fase G3 do PMO Educacross com objetivos, stakeholders, matriz de comunicação e boas práticas."
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
          <h2>1. Objetivo</h2>
          <p>
            Definir como as informações do projeto serão comunicadas entre stakeholders internos e externos, assegurando{' '}
            <strong>alinhamento, transparência e engajamento</strong>.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Princípios da Comunicação Educacross</h2>
          <ul>
            <li>
              <strong>Clareza:</strong> mensagens diretas, sem jargões desnecessários.
            </li>
            <li>
              <strong>Consistência:</strong> uso de modelos e semáforo padrão Educacross.
            </li>
            <li>
              <strong>Regularidade:</strong> cadências fixas de atualização, sem falhas.
            </li>
            <li>
              <strong>Segmentação:</strong> comunicação certa para cada público.
            </li>
            <li>
              <strong>Registro:</strong> toda comunicação oficial documentada (Bitrix24, e-mail, dashboards).
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>3. Stakeholders e Necessidades de Informação</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Público</th>
                  <th>Necessidade de Informação</th>
                  <th>Canal</th>
                  <th>Frequência</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Diretoria (Reginaldo / Raul)</td>
                  <td>Status executivo, riscos, próximos passos</td>
                  <td>Status Report + Comitê</td>
                  <td>Quinzenal</td>
                  <td>PMO</td>
                </tr>
                <tr>
                  <td>Sponsors / Parceiros Externos</td>
                  <td>Andamento macro, entregas chave, riscos relevantes</td>
                  <td>E-mail executivo + Reunião de checkpoint</td>
                  <td>Mensal ou sob demanda</td>
                  <td>GP / PMO</td>
                </tr>
                <tr>
                  <td>Times Internos (Produto, Pedagógico, Tech, Operações, Marketing, Financeiro, CS)</td>
                  <td>Tarefas, prazos, dependências, impedimentos</td>
                  <td>Bitrix24 + Dailies/Weeklies</td>
                  <td>Diário/Semanal</td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Usuários Finais (professores, escolas, alunos)</td>
                  <td>Informações de uso, treinamentos, lançamentos</td>
                  <td>Tutoriais, treinamentos, vídeos, FAQs, e-mails</td>
                  <td>Conforme rollout</td>
                  <td>Pedagógico / CS</td>
                </tr>
                <tr>
                  <td>Fornecedores</td>
                  <td>Requisitos, prazos de entrega, padrões de qualidade</td>
                  <td>Contratos, checklists, reuniões de alinhamento</td>
                  <td>Conforme contrato</td>
                  <td>Suprimentos / Operações</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>4. Ferramentas de Comunicação</h2>
          <ul>
            <li>
              <strong>Bitrix24:</strong> gestão de tarefas, pipelines, notificações automáticas.
            </li>
            <li>
              <strong>Dashboards (Looker/Metabase):</strong> acompanhamento de indicadores e semáforos.
            </li>
            <li>
              <strong>Status Report:</strong> documento executivo quinzenal, com escopo, prazo, qualidade, riscos e próximos passos.
            </li>
            <li>
              <strong>E-mail/Slack/Chat Interno:</strong> alinhamentos pontuais e comunicados oficiais.
            </li>
            <li>
              <strong>Reuniões:</strong> Kickoff, Comitês de Projeto, Post-mortem.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>5. Matriz de Comunicação (Exemplo Simplificado)</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Comunicação</th>
                  <th>Público</th>
                  <th>Formato</th>
                  <th>Frequência</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reunião de Kickoff</td>
                  <td>Todos os stakeholders principais</td>
                  <td>Reunião online/presencial</td>
                  <td>Início do projeto</td>
                  <td>GP/PMO</td>
                </tr>
                <tr>
                  <td>Status Report</td>
                  <td>Diretoria, Sponsors</td>
                  <td>Documento executivo (PDF/Notion/Bitrix)</td>
                  <td>Quinzenal</td>
                  <td>PMO</td>
                </tr>
                <tr>
                  <td>Reunião Comitê de Projeto</td>
                  <td>Diretoria + Leads</td>
                  <td>Reunião formal com ata</td>
                  <td>Quinzenal/Mensal</td>
                  <td>PMO</td>
                </tr>
                <tr>
                  <td>Atualizações Operacionais</td>
                  <td>Times internos</td>
                  <td>Bitrix24 (tarefas + notificações)</td>
                  <td>Diário/Semanal</td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Go-Live / Lançamento</td>
                  <td>Todos os públicos</td>
                  <td>Plano de divulgação (email, redes, tutoriais)</td>
                  <td>No lançamento</td>
                  <td>Marketing + CS</td>
                </tr>
                <tr>
                  <td>Encerramento / Lições Aprendidas</td>
                  <td>Stakeholders internos</td>
                  <td>Reunião + Relatório final</td>
                  <td>Fim do projeto</td>
                  <td>GP/PMO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>6. Avaliação da Comunicação</h2>
          <ul>
            <li>
              Monitoramento de adesão e engajamento (ex.: taxa de leitura dos e-mails, participação em reuniões, feedback).
            </li>
            <li>
              Ajustes na frequência ou canais se houver falhas de entendimento ou excesso de ruído.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Usar sempre <strong>templates padronizados</strong> (Status Report, apresentações de Kickoff, checklists).
              </li>
              <li>
                Garantir que toda comunicação importante esteja <strong>documentada e acessível</strong> (não apenas verbal).
              </li>
              <li>
                Incluir <strong>seção de comunicação externa</strong> quando envolver cliente/parceiro → para reforçar profissionalismo.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
