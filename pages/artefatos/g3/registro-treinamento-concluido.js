import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function RegistroTreinamentoConcluidoPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Registro de Treinamento Concluído – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Registro de Treinamento Concluído G3 - PMO Educacross"
      description="Template de registro de treinamentos concluídos para o Gate G3 do PMO Educacross, com público-alvo, detalhes das sessões, evidências e aprovação."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> __________________________________
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
        </section>

        <section className="content-card">
          <h2>1. Objetivo</h2>
          <p>
            Comprovar que o público-alvo recebeu o treinamento planejado, garantindo a{' '}
            <strong>adoção eficaz</strong> da solução/produto/evento entregue pelo projeto.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Público-alvo do Treinamento</h2>
          <ul className="checkbox-list">
            <li>
              <label htmlFor="publico-times-internos">
                <input id="publico-times-internos" name="publico-alvo" type="checkbox" value="times-internos" /> Times
                Internos (Produto / Operações / Marketing / Financeiro / CS)
              </label>
            </li>
            <li>
              <label htmlFor="publico-professores">
                <input id="publico-professores" name="publico-alvo" type="checkbox" value="professores" /> Professores /
                Escolas / Clientes
              </label>
            </li>
            <li>
              <label htmlFor="publico-fornecedores">
                <input id="publico-fornecedores" name="publico-alvo" type="checkbox" value="fornecedores" /> Fornecedores /
                Parceiros
              </label>
            </li>
            <li>
              <label htmlFor="publico-outro">
                <input id="publico-outro" name="publico-alvo" type="checkbox" value="outro" /> Outro:
                __________________________________
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>3. Detalhes do Treinamento</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Treinamento</th>
                  <th>Data</th>
                  <th>Duração</th>
                  <th>Formato</th>
                  <th>Conteúdo Abordado</th>
                  <th>Público</th>
                  <th>Responsável</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Onboarding do Cliente X</td>
                  <td>dd/mm/aaaa</td>
                  <td>2h</td>
                  <td>Online (Google Meet)</td>
                  <td>Uso da Plataforma Educacross + Relatórios</td>
                  <td>Gestores da Escola</td>
                  <td>Erica (Pedagógico)</td>
                  <td>✔️ Concluído</td>
                </tr>
                <tr>
                  <td>Capacitação Interna</td>
                  <td>dd/mm/aaaa</td>
                  <td>1h</td>
                  <td>Presencial</td>
                  <td>Checklists de evento + SLA de fornecedores</td>
                  <td>Operações</td>
                  <td>Raul</td>
                  <td>✔️ Concluído</td>
                </tr>
                <tr>
                  <td>Treinamento de Atendimento</td>
                  <td>dd/mm/aaaa</td>
                  <td>1h30</td>
                  <td>Online gravado</td>
                  <td>Playbook de suporte e FAQ</td>
                  <td>CS</td>
                  <td>Paula</td>
                  <td>✔️ Concluído</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>4. Evidências de Treinamento</h2>
          <ul>
            <li>📂 Lista de presença / participantes confirmados</li>
            <li>🎥 Gravação de sessão (se aplicável)</li>
            <li>📝 Materiais utilizados (apresentações, guias, FAQs)</li>
            <li>✅ Feedback ou avaliação de satisfação dos participantes</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>5. Consolidação</h2>
          <p>
            <strong>Treinamentos planejados:</strong> ___
          </p>
          <p>
            <strong>Treinamentos realizados:</strong> ___
          </p>
          <p>
            <strong>% Concluído:</strong> ___%
          </p>
          <p>
            <strong>Observações/Pendências:</strong> ______________________________________
          </p>
        </section>

        <section className="content-card">
          <h2>6. Aprovação (Gate G3 – Go/No-Go)</h2>
          <ul className="checkbox-list">
            <li>
              <label htmlFor="aprovacao-concluido">
                <input id="aprovacao-concluido" name="aprovacao" type="checkbox" value="concluido" /> Todos os
                treinamentos foram concluídos conforme plano.
              </label>
            </li>
            <li>
              <label htmlFor="aprovacao-pendencias">
                <input id="aprovacao-pendencias" name="aprovacao" type="checkbox" value="pendencias" /> Existem pendências
                críticas → NÃO aprovado para Go-Live.
              </label>
            </li>
          </ul>

          <p>
            <strong>Data da Decisão:</strong> dd/mm/aaaa
          </p>

          <h3>Assinaturas:</h3>
          <ul>
            <li>PMO: __________________________</li>
            <li>GP: __________________________</li>
            <li>Sponsor/Comitê: __________________________</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>Sempre registrar <strong>quem treinou</strong> e <strong>quem foi treinado</strong>.</li>
              <li>Para clientes/professores → guardar lista de presença e materiais enviados.</li>
              <li>Para times internos → garantir gravação e FAQ para consultas futuras.</li>
              <li>Esse artefato é obrigatório no <strong>Checklist Go/No-Go</strong>.</li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
