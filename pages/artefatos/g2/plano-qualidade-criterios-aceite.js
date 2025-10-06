import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoQualidadeCriteriosAceitePage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Qualidade &amp; Critérios de Aceite</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Qualidade &amp; Critérios de Aceite G2 - PMO Educacross"
      description="Guia de Qualidade &amp; Critérios de Aceite para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano Jurídico &amp; Contratos</h2>
          <p>
            É o documento que organiza <strong>todas as obrigações legais, contratuais e regulatórias</strong> do
            projeto, definindo responsabilidades, prazos, cláusulas críticas e formas de mitigação de riscos
            jurídicos.
          </p>
        </section>

        <section className="content-card">
          <h2>O que é <strong>Qualidade &amp; Critérios de Aceite</strong></h2>
          <ul>
            <li>
              <strong>Qualidade</strong>: conjunto de padrões, normas e boas práticas que definem <em>como</em> as
              entregas devem ser feitas (clareza, consistência, usabilidade, padronização Educacross, rubricas
              pedagógicas etc.).
            </li>
            <li>
              <strong>Critérios de Aceite</strong>: são as <strong>condições objetivas que cada entrega precisa cumprir</strong>
              para ser considerada “pronta” e aceita pelo sponsor, cliente ou área interna.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🛠️ Exemplos Práticos Educacross</h2>

          <h3>1. <strong>Produto / Tecnologia</strong></h3>
          <ul>
            <li>Qualidade: aderência ao design system, performance mínima, segurança e integração sem erros.</li>
            <li>
              Critérios de Aceite:
              <ul>
                <li>Login via SSO funcionando em 100% dos casos de teste.</li>
                <li>Dashboard exibe os 6 indicadores definidos em tempo real.</li>
              </ul>
            </li>
          </ul>

          <h3>2. <strong>Pedagógico</strong></h3>
          <ul>
            <li>Qualidade: alinhamento à BNCC, clareza didática, rubrica de validação aprovada por Erica.</li>
            <li>
              Critérios de Aceite:
              <ul>
                <li>100% dos módulos revisados por 2 revisores pedagógicos.</li>
                <li>Nota mínima de 90% nos testes de rubrica.</li>
              </ul>
            </li>
          </ul>

          <h3>3. <strong>Eventos / Operações</strong></h3>
          <ul>
            <li>Qualidade: fornecedores homologados, logística validada, checklist cumprido.</li>
            <li>
              Critérios de Aceite:
              <ul>
                <li>Estrutura montada 24h antes do evento.</li>
                <li>Todos os kits de alunos entregues sem avarias.</li>
              </ul>
            </li>
          </ul>

          <h3>4. <strong>Marketing / Comunicação</strong></h3>
          <ul>
            <li>Qualidade: identidade visual Educacross, consistência de tom, clareza das mensagens.</li>
            <li>
              Critérios de Aceite:
              <ul>
                <li>Arte final aprovada pelo PMO + Marketing.</li>
                <li>Campanha disparada até 5 dias úteis antes do evento.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Cada entregável da <strong>WBS</strong> deve ter pelo menos <strong>1 critério de aceite objetivo</strong>.
              </li>
              <li>
                Usar o conceito de <strong>Definition of Done (DoD)</strong> → entrega só é “pronta” se atender aos
                critérios de aceite definidos.
              </li>
              <li>
                Documentar critérios de aceite no <strong>Plano de Qualidade</strong> e revisá-los no
                <strong>Checklist Go/No-Go</strong>.
              </li>
              <li>
                Associar critérios de aceite a <strong>evidências</strong> (prints, relatórios, checklists assinados).
              </li>
            </ul>
          </Callout>
        </section>

        <section className="content-card">
          <p>
            ➡️ Em resumo: <strong>Qualidade &amp; Critérios de Aceite</strong> transformam a expectativa em regra clara. Evitam
            retrabalho, dão segurança ao sponsor e fortalecem a imagem da Educacross como empresa organizada e confiável.
          </p>
        </section>
      </article>
    </Layout>
  );
}
