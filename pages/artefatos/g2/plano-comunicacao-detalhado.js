import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoComunicacaoDetalhadoPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Comunicação Detalhado</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Comunicação Detalhado G2 - PMO Educacross"
      description="Plano de comunicação detalhado para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Plano de Comunicação Detalhado – Educacross</h2>
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
            Assegurar que todas as partes interessadas recebam as informações necessárias no tempo certo, pelo canal mais adequado e com clareza.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Princípios</h2>
          <ul>
            <li>Transparência → toda informação oficial documentada.</li>
            <li>Clareza → linguagem simples, sem ambiguidades.</li>
            <li>Consistência → modelo Educacross (semaforização, relatórios executivos).</li>
            <li>Adequação → cada stakeholder recebe apenas o que precisa.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>3. Stakeholders e Necessidades de Informação</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Stakeholder</th>
                  <th>Necessidade</th>
                  <th>Detalhe de Conteúdo</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Diretoria (Reginaldo / Raul)</td>
                  <td>Status estratégico, riscos e ROI</td>
                  <td>Status Report executivo (1 página) + Comitê</td>
                  <td>PMO</td>
                </tr>
                <tr>
                  <td>Sponsors externos (ex.: Somos, Evolucional)</td>
                  <td>Marcos-chave, riscos críticos</td>
                  <td>E-mails executivos + reuniões de checkpoint</td>
                  <td>GP / PMO</td>
                </tr>
                <tr>
                  <td>Times internos</td>
                  <td>Tarefas, dependências, prazos</td>
                  <td>Bitrix24 + weeklies</td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Professores / Escolas</td>
                  <td>Uso, treinamentos, suporte</td>
                  <td>Tutoriais, FAQs, vídeos, e-mails</td>
                  <td>Pedagógico / CS</td>
                </tr>
                <tr>
                  <td>Fornecedores</td>
                  <td>Requisitos, prazos de entrega</td>
                  <td>Contratos, checklists, reuniões</td>
                  <td>Operações / Suprimentos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>4. Matriz de Comunicação Detalhada</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Comunicação</th>
                  <th>Público</th>
                  <th>Formato</th>
                  <th>Frequência</th>
                  <th>Responsável</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kickoff do projeto</td>
                  <td>Todos os stakeholders-chave</td>
                  <td>Reunião online + ata</td>
                  <td>Início do projeto</td>
                  <td>GP / PMO</td>
                  <td>Ata registrada no Bitrix</td>
                </tr>
                <tr>
                  <td>Status Report</td>
                  <td>Diretoria, Sponsors</td>
                  <td>PDF/Notion com semáforos</td>
                  <td>Quinzenal</td>
                  <td>PMO</td>
                  <td>Apresentado em Comitê</td>
                </tr>
                <tr>
                  <td>Reunião de Comitê</td>
                  <td>Diretoria + Leads</td>
                  <td>Reunião formal com ata</td>
                  <td>Mensal</td>
                  <td>PMO</td>
                  <td>Foco em decisões críticas</td>
                </tr>
                <tr>
                  <td>Weeklies operacionais</td>
                  <td>Times internos</td>
                  <td>Reunião rápida (30min)</td>
                  <td>Semanal</td>
                  <td>GP</td>
                  <td>Reforçar dependências</td>
                </tr>
                <tr>
                  <td>Dailies (se aplicável)</td>
                  <td>Time de execução</td>
                  <td>Alinhamento rápido</td>
                  <td>Diário</td>
                  <td>GP</td>
                  <td>Apenas em projetos críticos</td>
                </tr>
                <tr>
                  <td>Comunicação externa (clientes/professores)</td>
                  <td>Escolas/Usuários</td>
                  <td>Tutoriais, vídeos, e-mails</td>
                  <td>Conforme rollout</td>
                  <td>Pedagógico / CS</td>
                  <td>Suporte ativo 30/60/90</td>
                </tr>
                <tr>
                  <td>Comunicação de Go-Live</td>
                  <td>Todos os públicos</td>
                  <td>E-mail oficial + comunicado interno</td>
                  <td>No lançamento</td>
                  <td>PMO / Marketing</td>
                  <td>Reforçar critérios de sucesso</td>
                </tr>
                <tr>
                  <td>Lições Aprendidas</td>
                  <td>Times internos + diretoria</td>
                  <td>Reunião + Relatório</td>
                  <td>Encerramento</td>
                  <td>PMO</td>
                  <td>Consolidado no repositório</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>5. Ferramentas Oficiais</h2>
          <ul>
            <li>
              <strong>Bitrix24:</strong> gestão de tarefas, pipeline e alertas.
            </li>
            <li>
              <strong>Notion/Drive:</strong> repositório de artefatos e relatórios.
            </li>
            <li>
              <strong>Looker/Metabase:</strong> dashboards e indicadores em tempo real.
            </li>
            <li>
              <strong>Google Meet/Presencial:</strong> reuniões de alinhamento.
            </li>
            <li>
              <strong>E-mail e materiais visuais:</strong> comunicação externa e formalizações.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>6. Indicadores de Efetividade da Comunicação</h2>
          <ul>
            <li>Taxa de participação em reuniões (% de presença).</li>
            <li>% de relatórios entregues no prazo.</li>
            <li>Taxa de leitura/abertura de e-mails externos.</li>
            <li>Feedback qualitativo de stakeholders.</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                O plano deve ser <strong>vivo</strong> → revisado sempre que surgir novo stakeholder ou mudança de prioridade.
              </li>
              <li>
                Toda comunicação importante precisa ter <strong>evidência registrada</strong> (ata, e-mail, arquivo).
              </li>
              <li>
                Ajustar a <strong>linguagem</strong>: diretoria quer visão executiva; professores querem praticidade; operações querem checklist.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
