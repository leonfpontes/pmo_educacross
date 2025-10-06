import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

const tiposTestes = [
  'Funcionais (sistemas, integrações, APIs, dashboards)',
  'Pedagógicos (conteúdo, usabilidade, rubricas de qualidade)',
  'Operacionais (logística, infraestrutura, fornecedores, kits)',
  'Comunicação/Marketing (materiais, campanhas, assets visuais)',
  'Suporte/CS (onboarding, atendimento, FAQ, playbooks)',
];

const decisaoFinal = [
  'Todos os testes foram aprovados e o projeto está apto para Go-Live.',
  'Existem pendências críticas → NÃO aprovado para Go-Live.',
];

export default function RegistroTestesAprovadosG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Registro de Testes Aprovados – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Registro de Testes Aprovados G3 - PMO Educacross"
      description="Registro de testes aprovados da fase G3 do PMO Educacross com escopo, matriz de testes e consolidação de resultados."
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
            Consolidar os resultados dos testes funcionais, pedagógicos, operacionais e de comunicação realizados, garantindo que
            todos os critérios de aceite definidos no planejamento foram atendidos.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Escopo dos Testes</h2>
          <h3>Tipo de Testes Realizados</h3>
          <div className="checkbox-grid">
            {tiposTestes.map((item) => (
              <label key={item} className="checkbox-item">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="content-card">
          <h2>3. Matriz de Testes</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Entregável/Teste</th>
                  <th>Critério de Aceite</th>
                  <th>Responsável</th>
                  <th>Data Execução</th>
                  <th>Resultado</th>
                  <th>Evidências</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>T1</td>
                  <td>Integração Educacross ↔ Plurall</td>
                  <td>Login via SSO funcionando em 100% dos casos</td>
                  <td>Tech (Matheus)</td>
                  <td>dd/mm/aaaa</td>
                  <td>OK</td>
                  <td>Prints/logs anexos</td>
                  <td>✔️ Aprovado</td>
                </tr>
                <tr>
                  <td>T2</td>
                  <td>Relatório Semaforizado</td>
                  <td>Exibir indicadores Escopo, Prazo, Qualidade Técnica</td>
                  <td>PMO</td>
                  <td>dd/mm/aaaa</td>
                  <td>OK</td>
                  <td>Dashboard validado</td>
                  <td>✔️ Aprovado</td>
                </tr>
                <tr>
                  <td>T3</td>
                  <td>Conteúdo pedagógico módulo 1</td>
                  <td>Rubrica de qualidade aplicada e aprovada por Erica</td>
                  <td>Pedagógico</td>
                  <td>dd/mm/aaaa</td>
                  <td>OK</td>
                  <td>Checklist rubrica</td>
                  <td>✔️ Aprovado</td>
                </tr>
                <tr>
                  <td>T4</td>
                  <td>Arte de campanha do evento</td>
                  <td>Alinhada à identidade visual Educacross</td>
                  <td>Marketing</td>
                  <td>dd/mm/aaaa</td>
                  <td>OK</td>
                  <td>PDF final</td>
                  <td>✔️ Aprovado</td>
                </tr>
                <tr>
                  <td>T5</td>
                  <td>Checklist logístico do evento</td>
                  <td>Todos itens revisados (local, coffee, som)</td>
                  <td>Operações</td>
                  <td>dd/mm/aaaa</td>
                  <td>OK</td>
                  <td>Checklist assinado</td>
                  <td>✔️ Aprovado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>4. Consolidado dos Resultados</h2>
          <ul>
            <li>
              <strong>Total de Testes Realizados:</strong> ___
            </li>
            <li>
              <strong>Total de Testes Aprovados:</strong> ___
            </li>
            <li>
              <strong>Testes Pendentes/Correções:</strong> ___
            </li>
            <li>
              <strong>Observações Gerais:</strong> __________________________________________
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>5. Aprovação Final (Gate G3 – Go/No-Go)</h2>
          <div className="checkbox-grid">
            {decisaoFinal.map((item) => (
              <label key={item} className="checkbox-item">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <p>
            <strong>Data da Decisão:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Assinaturas:</strong>
          </p>
          <ul>
            <li>PMO: __________________________</li>
            <li>GP: __________________________</li>
            <li>Sponsor/Comitê: __________________________</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Cada teste deve ter <strong>evidência anexada</strong> (print, relatório, foto, checklist).
              </li>
              <li>
                Testes críticos devem estar claramente vinculados a um <strong>critério de aceite</strong> do planejamento.
              </li>
              <li>
                O documento serve como <strong>base oficial</strong> para aprovação no <strong>Checklist Go/No-Go</strong>.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
