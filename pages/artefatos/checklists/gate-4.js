import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function ChecklistGate4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Checklist — Gate 4</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Checklist Gate 4 - PMO Educacross"
      description="Checklist oficial do Gate 4 (Encerramento & Sustentação) do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Checklist - Gate 4 (Encerramento & Sustentação)</h2>
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
          <h2>🔹 1. Entregas Finalizadas</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> Todos os entregáveis concluídos e aprovados.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Testes finais validados com evidências registradas.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Treinamentos realizados com registro de presença/adesão.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Critérios de Aceite cumpridos (Definition of Done validado).
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 2. Formalização</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> Relatório Final elaborado e aprovado pelo sponsor.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Documento de Lições Aprendidas preenchido.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Termo de Aceite assinado pelo sponsor/cliente.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Contratos encerrados ou renovados (se aplicável).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Documentação arquivada no repositório oficial (Bitrix/Drive).
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 3. Sustentação</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> Plano de Suporte ativo (CS, Tech, Operações).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Runbook entregue às áreas responsáveis.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Canal de suporte definido (30/60/90 dias).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Responsáveis pela manutenção e evolução definidos.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 4. Avaliação de Benefícios (30/60/90 dias)</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> Benefícios previstos no Business Case revisados em 30 dias.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Avaliação de 60 dias registrada (metas vs. resultados).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Avaliação de 90 dias concluída (benefícios sustentados).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Recomendação para melhoria contínua registrada.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 5. Encerramento Oficial</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> Reunião de encerramento realizada.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Comunicação oficial de conclusão enviada (interno/externo).
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Projeto movido para status “Encerrado” no portfólio.
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 6. Decisão Gate 4</h2>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> Todos os documentos revisados e armazenados.
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> Sponsor aprovou formalmente o encerramento.
              </label>
            </li>
          </ul>
          <p><strong>Decisão registrada:</strong></p>
          <ul>
            <li>
              <label>
                <input type="checkbox" disabled /> <strong>Encerrado com Sucesso</strong> ✅
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> <strong>Encerrado com Pendências</strong> ⚠️ (listadas no relatório)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" disabled /> <strong>Encerrado sem Benefícios</strong> ❌ (lessons learned registradas)
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Um projeto <strong>só termina</strong> quando gera lições aprendidas e benefícios avaliados.
              </li>
              <li>
                O sponsor deve estar <strong>ativo no encerramento</strong>, não apenas na abertura.
              </li>
              <li>
                O ciclo de 30/60/90 dias é essencial para garantir <strong>impacto real</strong> (não apenas entrega técnica).
              </li>
              <li>
                Encerramento formal = base para <strong>reuso e melhoria contínua</strong> no portfólio.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
