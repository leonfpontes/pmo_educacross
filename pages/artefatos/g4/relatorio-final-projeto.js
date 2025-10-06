import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function RelatorioFinalProjetoG4Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G4: Relatório Final do Projeto – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Relatório Final do Projeto G4 - PMO Educacross"
      description="Modelo de Relatório Final do Projeto para a fase G4 do PMO Educacross, com identificação, resumo executivo, escopo, cronograma, orçamento, indicadores e encerramento formal."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> __________________________________
          </p>
          <p>
            <strong>Data de Encerramento:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h2>1. Identificação do Projeto</h2>
          <ul>
            <li>
              <strong>Sponsor:</strong> __________________________________
            </li>
            <li>
              <strong>Gerente de Projeto (GP):</strong> __________________________________
            </li>
            <li>
              <strong>PMO:</strong> Leonardo Fonseca Pontes
            </li>
            <li>
              <strong>Período de Execução:</strong> dd/mm/aaaa a dd/mm/aaaa
            </li>
            <li>
              <strong>Objetivo Original:</strong> __________________________________
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>2. Resumo Executivo</h2>
          <p>Breve descrição do que foi realizado, principais conquistas e eventuais desafios.</p>
          <p>
            <span role="img" aria-label="Exemplo">
              ➡️
            </span>{' '}
            <em>
              Exemplo: “O projeto garantiu a implantação da Educacross em 10 escolas do município de Osasco, dentro do prazo e
              com adesão de 92% dos professores.”
            </em>
          </p>
        </section>

        <section className="content-card">
          <h2>3. Escopo Entregue</h2>
          <h3>✅ Entregas concluídas:</h3>
          <ul>
            <li></li>
            <li></li>
          </ul>
          <h3>❌ Entregas não realizadas (justificativa):</h3>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </section>

        <section className="content-card">
          <h2>4. Cronograma</h2>
          <ul>
            <li>
              <strong>Prazo planejado:</strong> __ semanas
            </li>
            <li>
              <strong>Prazo real:</strong> __ semanas
            </li>
            <li>
              <strong>Variação (%):</strong> ___%
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>5. Orçamento</h2>
          <ul>
            <li>
              <strong>Baseline aprovado:</strong> R$ __________
            </li>
            <li>
              <strong>Custo real:</strong> R$ __________
            </li>
            <li>
              <strong>Variação (%):</strong> ___%
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>6. Indicadores de Qualidade</h2>
          <ul>
            <li>% de testes aprovados: ___%</li>
            <li>% de entregas aceitas sem retrabalho: ___%</li>
            <li>Feedback dos stakeholders: __________________________________</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>7. Riscos Materializados</h2>
          <ul>
            <li>Risco X → impacto / resposta adotada / lição aprendida</li>
            <li>Risco Y → impacto / resposta adotada / lição aprendida</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>8. Lições Aprendidas</h2>
          <ul>
            <li>Pontos fortes: __________________________________</li>
            <li>O que melhorar: __________________________________</li>
            <li>Recomendações para projetos futuros: __________________________________</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>9. Avaliação de Benefícios (30/60/90 dias)</h2>
          <ul>
            <li>
              <strong>Financeiros:</strong> receita ativada / custo evitado / ROI alcançado.
            </li>
            <li>
              <strong>Operacionais:</strong> ganhos de eficiência / padronização.
            </li>
            <li>
              <strong>Pedagógicos:</strong> impacto nos professores/alunos.
            </li>
            <li>
              <strong>Reputacionais:</strong> novos contratos / fortalecimento da marca.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>10. Encerramento Formal</h2>
          <p>
            <strong>Decisão:</strong>
          </p>
          <ul>
            <li>[ ] Projeto encerrado com sucesso.</li>
            <li>[ ] Projeto encerrado com ressalvas.</li>
          </ul>
          <p>
            <strong>Data da Aprovação:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Assinaturas:</strong>
          </p>
          <ul>
            <li>Sponsor: __________________________</li>
            <li>Diretoria/Comitê: __________________________</li>
            <li>PMO: Leonardo Fonseca Pontes</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Sempre arquivar junto com <strong>todos os artefatos-chave</strong> (Charter, WBS, Cronograma, Orçamento, Riscos, Status Reports).
              </li>
              <li>
                Relatório Final é também um <strong>case</strong> para clientes → pode ser adaptado para apresentações externas.
              </li>
              <li>
                Deve gerar <strong>insumos para o Radar de Benefícios</strong> do PMO (30/60/90 dias).
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
