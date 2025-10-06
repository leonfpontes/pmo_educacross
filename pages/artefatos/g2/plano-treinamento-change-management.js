import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoTreinamentoChangeManagementPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Treinamento &amp; Change Management</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Treinamento &amp; Change Management G2 - PMO Educacross"
      description="Guia do Plano de Treinamento &amp; Change Management para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é</h2>
          <ul>
            <li>
              <strong>Treinamento</strong>: como preparar pessoas (internas e externas) para usar ou operar o que foi entregue.
            </li>
            <li>
              <strong>Change Management (Gestão da Mudança)</strong>: como conduzir a transição organizacional, reduzindo
              resistência, engajando stakeholders e garantindo adoção.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Público-alvo da mudança</h3>
          <ul>
            <li>Times internos (Produto, Tech, Pedagógico, Operações, Marketing, Financeiro, CS).</li>
            <li>Professores, escolas e parceiros.</li>
            <li>Fornecedores/colaboradores externos.</li>
          </ul>

          <h3>2. Impactos da mudança</h3>
          <ul>
            <li>O que muda na rotina dessas pessoas?</li>
            <li>Haverá novos sistemas, processos ou responsabilidades?</li>
            <li>O que deixa de existir/substitui o atual?</li>
          </ul>

          <h3>3. Estratégia de Treinamento</h3>
          <ul>
            <li>
              <strong>Formato:</strong> presencial, online, gravado, tutoriais, FAQs.
            </li>
            <li>
              <strong>Materiais de apoio:</strong> apresentações, guias rápidos, vídeos.
            </li>
            <li>
              <strong>Critérios de sucesso:</strong> % de adesão, NPS dos treinamentos, % de chamados de suporte após rollout.
            </li>
          </ul>

          <h3>4. Estratégia de Change Management</h3>
          <ul>
            <li>
              <strong>Comunicação:</strong> mensagens segmentadas (diretoria, times, clientes).
            </li>
            <li>
              <strong>Engajamento:</strong> envolvimento de key users como multiplicadores.
            </li>
            <li>
              <strong>Suporte na transição:</strong> canal dedicado, acompanhamento intensivo nos primeiros dias.
            </li>
            <li>
              <strong>Resistência:</strong> como identificar e tratar pontos críticos.
            </li>
          </ul>

          <h3>5. Cronograma de Capacitação</h3>
          <p>Integrado ao cronograma do projeto → sempre <strong>antes do Go-Live</strong>.</p>

          <h3>6. Responsabilidades</h3>
          <ul>
            <li>
              <strong>Pedagógico:</strong> roteiros e rubricas de qualidade de treinamentos.
            </li>
            <li>
              <strong>Produto/Tech:</strong> guias técnicos, tutoriais e homologação.
            </li>
            <li>
              <strong>CS:</strong> onboarding de clientes e acompanhamento pós-lançamento.
            </li>
            <li>
              <strong>PMO:</strong> orquestra e garante alinhamento com plano geral.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela – Plano de Treinamento &amp; Change Management</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Público</th>
                  <th>Treinamento</th>
                  <th>Formato</th>
                  <th>Data</th>
                  <th>Responsável</th>
                  <th>Critério de Sucesso</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professores – Osasco</td>
                  <td>Uso da Plataforma Educacross</td>
                  <td>Online (2h) + Guia PDF</td>
                  <td>15/10</td>
                  <td>Erica / CS</td>
                  <td>&ge; 90% adesão</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Time Interno – Marketing</td>
                  <td>Checklist de eventos e assets</td>
                  <td>Presencial (1h)</td>
                  <td>18/10</td>
                  <td>PMO / Marketing</td>
                  <td>&ge; 80% NPS</td>
                  <td>Planejado</td>
                </tr>
                <tr>
                  <td>Time Tech</td>
                  <td>Novas integrações Plurall</td>
                  <td>Sessão prática (1h30)</td>
                  <td>20/10</td>
                  <td>Matheus</td>
                  <td>100% testes aprovados</td>
                  <td>Confirmado</td>
                </tr>
                <tr>
                  <td>Diretores Escolares</td>
                  <td>Painel de indicadores</td>
                  <td>Online gravado (30min)</td>
                  <td>22/10</td>
                  <td>Nathália (BI)</td>
                  <td>&ge; 80% visualizações</td>
                  <td>Em produção</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Treinamento <strong>não é opcional</strong> → deve constar no <strong>Checklist Go/No-Go</strong>.
              </li>
              <li>Sempre medir adesão e satisfação (não basta aplicar).</li>
              <li>Incluir key users desde cedo para reduzir resistência.</li>
              <li>Usar mascotes e identidade Educacross em materiais → engajamento lúdico.</li>
              <li>Change Management deve ser contínuo: reforço em 30/60/90 dias após rollout.</li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
