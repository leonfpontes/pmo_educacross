import Layout from '@/components/layout/SiteLayout';

export default function PlanoGestaoFornecedoresG3Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G3: Plano de Gestão de Fornecedores – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Gestão de Fornecedores G3 - PMO Educacross"
      description="Plano de gestão de fornecedores da fase G3 do PMO Educacross com escopo, processo, matriz, indicadores e boas práticas."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> __________________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Objetivo</h2>
          <p>
            Assegurar que todos os fornecedores contratados no projeto cumpram os requisitos de{' '}
            <strong>prazo, qualidade e custo</strong>, com gestão centralizada pelo PMO e Operações/Suprimentos.
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 2. Escopo da Gestão de Fornecedores</h2>
          <ul>
            <li>Serviços terceirizados (logística, som/luz, catering, produção de vídeo).</li>
            <li>Produtos adquiridos (kits, brindes, materiais pedagógicos).</li>
            <li>Licenças e tecnologia (softwares, integrações).</li>
            <li>Comunicação e marketing (agências, designers externos).</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 3. Processo de Gestão</h2>
          <ol>
            <li>
              <strong>Seleção:</strong> mínimo 3 cotações + validação de Suprimentos.
            </li>
            <li>
              <strong>Contratação:</strong> minuta padrão Educacross + cláusulas de SLA.
            </li>
            <li>
              <strong>Acompanhamento:</strong> reuniões de checkpoint + relatórios de status.
            </li>
            <li>
              <strong>Avaliação:</strong> indicadores de entrega (qualidade, prazo, custo, atendimento).
            </li>
            <li>
              <strong>Encerramento:</strong> lições aprendidas e nota de avaliação do fornecedor.
            </li>
          </ol>
        </section>

        <section className="content-card">
          <h2>🔹 4. Matriz de Fornecedores</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Fornecedor</th>
                  <th>Escopo Contratado</th>
                  <th>Responsável Interno</th>
                  <th>Valor (R$)</th>
                  <th>Data de Início</th>
                  <th>Data Limite</th>
                  <th>SLA / Critérios de Qualidade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fornecedor A</td>
                  <td>Estrutura de evento (som/luz/palco)</td>
                  <td>Raul / Darlete</td>
                  <td>50.000</td>
                  <td>01/11</td>
                  <td>27/11</td>
                  <td>Montagem concluída 24h antes</td>
                  <td>Em cotação</td>
                </tr>
                <tr>
                  <td>Fornecedor B</td>
                  <td>Kits pedagógicos</td>
                  <td>Marketing / Suprimentos</td>
                  <td>20.000</td>
                  <td>05/11</td>
                  <td>20/11</td>
                  <td>100% entregues sem avarias</td>
                  <td>Contratado</td>
                </tr>
                <tr>
                  <td>Fornecedor C</td>
                  <td>Brindes (canecas Educacross)</td>
                  <td>Marketing</td>
                  <td>8.000</td>
                  <td>10/11</td>
                  <td>15/11</td>
                  <td>Arte Educacross fiel + prazo</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Fornecedor D</td>
                  <td>Streaming do evento</td>
                  <td>Tech / Marketing</td>
                  <td>15.000</td>
                  <td>20/11</td>
                  <td>28/11</td>
                  <td>Streaming estável ≥ 95% uptime</td>
                  <td>Em negociação</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 5. Indicadores de Avaliação de Fornecedores</h2>
          <ul>
            <li>% de entregas no prazo.</li>
            <li>% de entregas dentro do orçamento.</li>
            <li>% de não-conformidades resolvidas.</li>
            <li>Nota de satisfação do time interno (escala 0–10).</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🔹 6. Riscos de Fornecedores &amp; Mitigação</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Risco</th>
                  <th>Impacto</th>
                  <th>Mitigação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dependência de fornecedor único</td>
                  <td>Alto</td>
                  <td>Ter fornecedor backup homologado</td>
                </tr>
                <tr>
                  <td>Atraso na entrega de kits</td>
                  <td>Médio</td>
                  <td>Inserir multa contratual + plano B</td>
                </tr>
                <tr>
                  <td>Falha em serviços críticos (streaming)</td>
                  <td>Alto</td>
                  <td>Testes prévios + canal alternativo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 7. Boas práticas Educacross</h2>
          <ul>
            <li>Nenhum fornecedor inicia sem contrato assinado.</li>
            <li>Monitorar fornecedores críticos em <strong>Status Report</strong> com semáforo próprio.</li>
            <li>Garantir avaliação formal após cada projeto (ranking de fornecedores).</li>
            <li>Centralizar todos os contratos e notas fiscais em repositório único (Bitrix/Drive).</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}
