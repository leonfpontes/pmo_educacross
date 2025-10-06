import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoTestesQAPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Testes/QA</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Testes/QA G2 - PMO Educacross"
      description="Guia do Plano de Testes/QA para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano de Testes/QA</h2>
          <p>É o documento que define:</p>
          <ul>
            <li>Quais entregas serão testadas.</li>
            <li>Que critérios serão usados para aprovar ou reprovar cada teste.</li>
            <li>Quem será responsável por executar e validar.</li>
            <li>Como os resultados serão documentados.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Objetivos</h3>
          <ul>
            <li>Garantir que as entregas atendam os requisitos definidos.</li>
            <li>Reduzir riscos de falhas em produção/evento.</li>
            <li>Formalizar critérios de aceite objetivos.</li>
          </ul>

          <h3>2. Escopo dos Testes</h3>
          <ul>
            <li>Funcionais (tecnologia, sistemas, integrações).</li>
            <li>Pedagógicos (conteúdos, rubricas, aplicabilidade).</li>
            <li>Operacionais (logística, fornecedores, kits).</li>
            <li>Marketing &amp; Comunicação (artes, campanhas, materiais).</li>
            <li>Suporte (onboarding, CS, FAQs).</li>
          </ul>

          <h3>3. Estratégia de Testes</h3>
          <ul>
            <li>Onde os testes serão feitos (homologação, ambiente real, piloto).</li>
            <li>
              Métodos: testes manuais, checklist, piloto com usuários, testes automatizados (se aplicável).
            </li>
            <li>Critérios de sucesso: todos os testes devem ser aprovados antes do Go-Live.</li>
          </ul>

          <h3>4. Matriz de Testes</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Entregável</th>
                  <th>Tipo de Teste</th>
                  <th>Critério de Aceite</th>
                  <th>Responsável</th>
                  <th>Data</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>T1</td>
                  <td>Integração Educacross ↔ Plurall</td>
                  <td>Funcional</td>
                  <td>Login SSO funciona em 100% dos casos</td>
                  <td>Tech (Matheus)</td>
                  <td>15/11</td>
                  <td>✔️ Aprovado</td>
                </tr>
                <tr>
                  <td>T2</td>
                  <td>Relatório Semaforizado</td>
                  <td>Funcional/BI</td>
                  <td>Exibe escopo, prazo, qualidade, risco</td>
                  <td>PMO</td>
                  <td>16/11</td>
                  <td>✔️ Aprovado</td>
                </tr>
                <tr>
                  <td>T3</td>
                  <td>Conteúdo Módulo 1</td>
                  <td>Pedagógico</td>
                  <td>Rubrica ≥ 90%</td>
                  <td>Erica</td>
                  <td>18/11</td>
                  <td>Em validação</td>
                </tr>
                <tr>
                  <td>T4</td>
                  <td>Kit de professores</td>
                  <td>Operacional</td>
                  <td>100% entregues sem avaria</td>
                  <td>Raul / Darlete</td>
                  <td>20/11</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>T5</td>
                  <td>Arte de campanha</td>
                  <td>Marketing</td>
                  <td>Alinhada à identidade Educacross</td>
                  <td>Marketing</td>
                  <td>22/11</td>
                  <td>✔️ Aprovado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>5. Registro de Evidências</h3>
          <ul>
            <li>Prints de tela.</li>
            <li>Relatórios de homologação.</li>
            <li>Fotos (logística, kits, eventos).</li>
            <li>Feedback de pilotos/testes.</li>
          </ul>

          <h3>6. Aprovação Final (Checklist Go/No-Go)</h3>
          <ul>
            <li>Todos os testes devem estar com status ✔️ <strong>Aprovado</strong>.</li>
            <li>Se houver pendência crítica → projeto não avança para Go-Live.</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Testes devem estar sempre <strong>alinhados aos critérios de aceite</strong> definidos no G2.
              </li>
              <li>Usar <strong>pilotos pequenos</strong> (escola, turma ou evento-teste) quando possível.</li>
              <li>Guardar evidências → serve para auditoria e lições aprendidas.</li>
              <li>
                Se falhar, não é “erro do fornecedor”, é risco → abrir issue e registrar plano de ação.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
