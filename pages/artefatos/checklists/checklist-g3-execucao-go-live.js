import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function ChecklistG3ExecucaoGoLivePage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Checklist - Gate 3 (Execução / Go-Live)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Checklist Gate 3 - PMO Educacross"
      description={`Checklist de verificação para o Gate 3 (Execução / Go-Live) garantindo revisão de planos, preparação técnica e decisão segura.`}
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
          <h2>🔹 1. Revisão dos Planos</h2>
          <ul>
            <li>[ ] Todos os planos do G2 revisados e atualizados (risco, comunicação, logística, jurídico, pedagógico/produto, etc.).</li>
            <li>[ ] Orçamento baseline aprovado e recursos assegurados.</li>
            <li>[ ] Contratos críticos assinados.</li>
            <li>[ ] Fornecedores confirmados com prazos validados.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 2. Preparação Técnica e Operacional</h2>
          <ul>
            <li>[ ] Ambiente tecnológico homologado e validado (SSO, dashboards, integrações).</li>
            <li>[ ] Testes de QA executados e aprovados (com evidências registradas).</li>
            <li>[ ] Checklist de logística concluído (transporte, kits, palco, coffee, brindes).</li>
            <li>[ ] Treinamento realizado com usuários e equipe interna.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 3. Critérios de Go/No-Go</h2>
          <ul>
            <li>[ ] Checklist de Qualidade &amp; Critérios de Aceite revisado.</li>
            <li>[ ] Plano de Implantação (Go-Live) documentado e validado.</li>
            <li>[ ] Plano de Rollback definido (com cenários de falha e contingência).</li>
            <li>[ ] Equipe de suporte preparada (CS, Tech, Operações).</li>
            <li>[ ] Sponsor aprovou formalmente o Go-Live.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 4. Comunicação</h2>
          <ul>
            <li>[ ] Plano de Comunicação de Go-Live pronto (interno + externo).</li>
            <li>[ ] Mensagem oficial preparada para stakeholders.</li>
            <li>[ ] Materiais de apoio distribuídos (FAQs, tutoriais, kits, artes).</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 5. Execução Segura</h2>
          <ul>
            <li>[ ] War room definido (canal de suporte centralizado).</li>
            <li>[ ] Escalonamento de incidentes documentado (quem chamar e quando).</li>
            <li>[ ] Equipe de prontidão no dia do Go-Live.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 6. Decisão Gate 3</h2>
          <ul>
            <li>[ ] Todos os critérios cumpridos.</li>
            <li>[ ] Sponsor e Comitê validaram o Go.</li>
            <li>
              [ ] Decisão do Gate registrada:
              <ul>
                <li><strong>Go</strong> → Avança para execução/implantação.</li>
                <li><strong>Hold</strong> → Correções antes do Go-Live.</li>
                <li><strong>No-Go</strong> → Projeto suspenso ou replanejado.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>O G3 deve ser tratado como um <strong>checklist de aviação</strong> → ninguém “sobe” sem todos os itens validados.</li>
              <li>Sempre registrar <strong>evidências</strong> (prints, fotos, atas de validação).</li>
              <li>Se algo falhar, acionar <strong>Rollback imediatamente</strong> para proteger a imagem e a operação.</li>
              <li>Comunicação clara: todos os stakeholders precisam saber quando o Go-Live acontece.</li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
