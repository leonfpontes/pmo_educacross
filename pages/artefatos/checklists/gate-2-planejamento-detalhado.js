import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function ChecklistGate2PlanejamentoDetalhadoPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Checklist - Gate 2 (Planejamento Detalhado)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Checklist Gate 2 - Planejamento Detalhado - PMO Educacross"
      description="Checklist completo para validar os entregáveis obrigatórios do Gate 2 (Planejamento Detalhado) do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> ____________________________________
          </p>
          <p>
            <strong>Sponsor:</strong> _________________________________
          </p>
          <p>
            <strong>Responsável (GP/PMO):</strong> ____________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Planejamento de Escopo</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> WBS (Estrutura Analítica do Projeto) criada e validada.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Cronograma detalhado elaborado (com marcos e dependências).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Orçamento baseline definido e aprovado.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Critérios de Qualidade &amp; Aceite documentados.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 2. Planos de Gestão Específicos</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> Plano de Riscos (com matriz probabilidade x impacto).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Comunicação Detalhado (interno + externo).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Aquisições / Suprimentos (fornecedores, prazos, SLAs).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano Jurídico &amp; Contratos (minutas, cláusulas críticas).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Tecnologia &amp; Dados (infraestrutura, integrações, LGPD).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano Pedagógico &amp; Produto (rubricas, escopo funcional).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Marketing &amp; Comunicação (campanhas, materiais).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Operação &amp; Logística (checklists, fornecedores, montagem).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Treinamento &amp; Change Management (formações, key users).
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 3. Governança e Métricas</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> Stakeholders confirmados com papéis claros.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Indicadores / OKRs de sucesso detalhados.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Matriz RACI elaborada.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Processo de Change Request definido.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Definition of Ready (DoR) e Definition of Done (DoD) aplicados.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 4. Preparação para Execução</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> Checklist de Testes/QA planejado.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Plano de Implantação &amp; Rollback esboçado.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Recursos humanos alocados (disponibilidade confirmada).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Contratos com fornecedores encaminhados ou assinados.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 5. Aprovação Gate 2</h2>
          <ul className="checklist">
            <li>
              <label>
                <input type="checkbox" /> Todos os planos revisados e armazenados no repositório oficial (Bitrix/Drive).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Sponsor aprovou formalmente o pacote de planejamento.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Decisão do Gate registrada.
              </label>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Go</strong> → Avança para Gate 3 (Execução / Go-Live).
            </li>
            <li>
              <strong>Hold</strong> → Ajustes necessários antes de avançar.
            </li>
            <li>
              <strong>No-Go</strong> → Projeto não será executado.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                O G2 é o <strong>filtro mais rigoroso</strong>: se não estiver bem detalhado, não pode avançar.
              </li>
              <li>
                A diretoria (Raul e Reginaldo) deve ter <strong>condições objetivas</strong> de avaliar → nada no “achismo”.
              </li>
              <li>
                Sempre deixar os documentos no <strong>mesmo repositório</strong>, evitando versões perdidas.
              </li>
              <li>
                O PMO deve apresentar o <strong>pacote G2 em Comitê de Projeto</strong> para formalizar o Go/No-Go.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
