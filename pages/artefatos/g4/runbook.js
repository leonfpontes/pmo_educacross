import Layout from '@/components/layout/SiteLayout';

export default function RunbookPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G4: O que é um Runbook?</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Runbook G4 - PMO Educacross"
      description="Entenda o conceito, os objetivos e a estrutura de runbooks para operações consistentes na fase G4 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>🎯 Definição</h2>
          <p>
            Um <strong>Runbook</strong> é um documento que reúne <strong>instruções detalhadas e sequenciais</strong> para executar
            uma atividade ou processo recorrente, de forma <strong>padronizada, segura e previsível</strong>.
          </p>
          <p>
            <span role="img" aria-label="Dica">
              👉
            </span>{' '}
            Ele funciona como um <em>manual de bolso</em> que qualquer membro autorizado pode seguir, sem depender de conhecimento
            tácito.
          </p>
        </section>

        <section className="content-card">
          <h2>🛠️ Para que serve</h2>
          <ul>
            <li>Garantir que processos críticos sejam feitos da mesma forma sempre.</li>
            <li>Acelerar resolução de incidentes e reduzir erros humanos.</li>
            <li>Facilitar treinamentos e onboarding de novos colaboradores.</li>
            <li>Apoiar rotinas de operação, manutenção, suporte e implantação.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📌 Estrutura típica de um Runbook</h2>
          <ol>
            <li>
              <strong>Identificação</strong>: título, responsável, data da última atualização.
            </li>
            <li>
              <strong>Objetivo</strong>: o que esse runbook resolve.
            </li>
            <li>
              <strong>Pré-requisitos</strong>: acessos, ferramentas, dados necessários.
            </li>
            <li>
              <strong>Passo a passo</strong>: lista numerada de ações a executar.
            </li>
            <li>
              <strong>Critérios de validação</strong>: como saber que funcionou.
            </li>
            <li>
              <strong>Fallback/rollback</strong>: o que fazer se der errado.
            </li>
            <li>
              <strong>Contatos de suporte</strong>: quem acionar em caso de falha.
            </li>
          </ol>
        </section>

        <section className="content-card">
          <h2>✅ Exemplos Educacross</h2>
          <ul>
            <li>
              <strong>Runbook de Implantação de Evento</strong>: checklist de montagem → transporte → teste de som → validação final.
            </li>
            <li>
              <strong>Runbook de Integração Plurall</strong>: acesso ao ambiente de homologação → execução de testes → validação de login
              SSO → comunicação de Go-Live.
            </li>
            <li>
              <strong>Runbook de Dashboard BI</strong>: extração dos dados → atualização no Metabase → conferência dos indicadores → envio do
              link atualizado.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📌 Diferença de outros artefatos</h2>
          <ul>
            <li>
              <strong>Plano</strong> = visão macro do que será feito.
            </li>
            <li>
              <strong>Runbook</strong> = manual detalhado de <em>como</em> executar.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>Páginas associadas</h2>
          <p>
            <a
              href="https://www.notion.so/Runbook-Educacross-277e9f3bb81e80b4be25e79888326c84?pvs=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Runbook – Educacross
            </a>
          </p>
        </section>
      </article>
    </Layout>
  );
}
