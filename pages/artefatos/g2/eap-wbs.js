import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function EapWbsPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: EAP/WBS</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="EAP/WBS G2 - PMO Educacross"
      description="Guia de Estrutura Analítica de Projeto (EAP/WBS) para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>EAP (Estrutura Analítica de Projeto) / WBS (Work Breakdown Structure)</h2>
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
          <h2>Nível 1 – Fases do Projeto</h2>
          <ol>
            <li>Iniciação</li>
            <li>Planejamento</li>
            <li>Execução</li>
            <li>Lançamento/Implantação</li>
            <li>Encerramento</li>
          </ol>
        </section>

        <section className="content-card">
          <h2>Nível 2 – Pacotes de Trabalho (exemplo genérico)</h2>

          <h3>1. Iniciação</h3>
          <ul>
            <li>1.1 Reunião de Kickoff</li>
            <li>1.2 Definição de stakeholders</li>
            <li>1.3 Aprovação da Carta de Abertura (Charter)</li>
            <li>1.4 Elaboração do Business Case</li>
          </ul>

          <h3>2. Planejamento</h3>
          <ul>
            <li>2.1 Estrutura Analítica do Projeto (WBS)</li>
            <li>2.2 Cronograma Detalhado</li>
            <li>2.3 Orçamento Baseline</li>
            <li>2.4 Matriz de Riscos e Mitigações</li>
            <li>2.5 Plano de Comunicação</li>
            <li>2.6 Plano de Aquisições e Contratos</li>
            <li>2.7 Plano de Qualidade</li>
            <li>2.8 Plano de Dados/Dashboards</li>
          </ul>

          <h3>3. Execução</h3>
          <ul>
            <li>3.1 Desenvolvimento/Produção (Produto ou Conteúdo Pedagógico)</li>
            <li>3.2 Preparação de Logística e Operações</li>
            <li>3.3 Desenvolvimento/QA de Tecnologia</li>
            <li>3.4 Criação de Assets de Marketing e Comunicação</li>
            <li>3.5 Treinamento e Capacitação de Usuários/Colaboradores</li>
            <li>3.6 Gestão de Fornecedores</li>
          </ul>

          <h3>4. Lançamento/Implantação</h3>
          <ul>
            <li>4.1 Checklist Go/No-Go</li>
            <li>4.2 Go-Live / Evento / Entrega Oficial</li>
            <li>4.3 Suporte Intensivo (primeira semana)</li>
            <li>4.4 Coleta de Feedback Inicial</li>
          </ul>

          <h3>5. Encerramento</h3>
          <ul>
            <li>5.1 Relatório Final do Projeto</li>
            <li>5.2 Lições Aprendidas</li>
            <li>5.3 Avaliação de Benefícios (30/60/90 dias)</li>
            <li>5.4 Encerramento Financeiro e Contratual</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>Nível 3 – Exemplo de Detalhamento (trecho)</h2>
          <p>
            <strong>3.2 Preparação de Logística e Operações</strong>
          </p>
          <ul>
            <li>3.2.1 Definição de local</li>
            <li>3.2.2 Contratação de fornecedores</li>
            <li>3.2.3 Transporte e materiais</li>
            <li>3.2.4 Checklist de montagem/desmontagem</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas para sua WBS">
            <ul>
              <li>
                Cada item deve ser <strong>entregável</strong>, não atividade solta.
              </li>
              <li>
                Use o nível 3 ou 4 no máximo → abaixo disso já vira tarefa no Bitrix24.
              </li>
              <li>
                Todo item da WBS deve ter <strong>responsável claro (DRI)</strong>.
              </li>
              <li>
                A WBS é o insumo para: cronograma, orçamento, riscos e status reports.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
