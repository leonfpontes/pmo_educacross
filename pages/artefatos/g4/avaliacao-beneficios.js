import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function AvaliacaoBeneficiosPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G4: Avaliação de Benefícios (30/60/90 dias)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Avaliação de Benefícios G4 - PMO Educacross"
      description="Modelo de avaliação de benefícios em 30, 60 e 90 dias para a fase G4 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> ____________________________________
          </p>
          <p>
            <strong>Responsável (PMO):</strong> __________________________
          </p>
          <p>
            <strong>Data de Entrega:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Objetivo</h2>
          <p>
            Avaliar, em três ciclos (30, 60 e 90 dias), os benefícios alcançados pelo projeto, comparando-os com os critérios de
            sucesso definidos no início (Business Case / OKRs).
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 2. Benefícios Esperados (do Business Case)</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Benefício</th>
                  <th>Indicador / Métrica</th>
                  <th>Meta</th>
                  <th>Responsável de Monitoramento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maior adesão de professores</td>
                  <td>% de professores ativos</td>
                  <td>&ge; 90% em 60 dias</td>
                  <td>CS / Pedagógico</td>
                </tr>
                <tr>
                  <td>Redução de custos de suporte</td>
                  <td>Nº de chamados</td>
                  <td>-20% em 90 dias</td>
                  <td>Tech / CS</td>
                </tr>
                <tr>
                  <td>Aumento da satisfação de escolas</td>
                  <td>NPS pós-treinamento</td>
                  <td>&ge; 8,5</td>
                  <td>CS / Marketing</td>
                </tr>
                <tr>
                  <td>Visibilidade pedagógica</td>
                  <td>Dashboard atualizado</td>
                  <td>100% semanal</td>
                  <td>BI / PMO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 3. Avaliação – 30 Dias</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Benefício</th>
                  <th>Resultado Obtido</th>
                  <th>Status</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professores ativos</td>
                  <td>75%</td>
                  <td>🟡 Em atenção</td>
                  <td>Engajamento inicial abaixo da meta</td>
                </tr>
                <tr>
                  <td>Redução de chamados</td>
                  <td>-5%</td>
                  <td>🟡 Em atenção</td>
                  <td>Suporte extra em andamento</td>
                </tr>
                <tr>
                  <td>NPS</td>
                  <td>8,2</td>
                  <td>🟢 OK</td>
                  <td>Alinhado à meta</td>
                </tr>
                <tr>
                  <td>Dashboard semanal</td>
                  <td>100% entregue</td>
                  <td>🟢 OK</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 4. Avaliação – 60 Dias</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Benefício</th>
                  <th>Resultado Obtido</th>
                  <th>Status</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professores ativos</td>
                  <td>88%</td>
                  <td>🟡 Em atenção</td>
                  <td>Ações extras de CS necessárias</td>
                </tr>
                <tr>
                  <td>Redução de chamados</td>
                  <td>-15%</td>
                  <td>🟡 Em atenção</td>
                  <td>Meta parcial alcançada</td>
                </tr>
                <tr>
                  <td>NPS</td>
                  <td>8,4</td>
                  <td>🟢 OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Dashboard semanal</td>
                  <td>100% entregue</td>
                  <td>🟢 OK</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 5. Avaliação – 90 Dias</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Benefício</th>
                  <th>Resultado Obtido</th>
                  <th>Status</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Professores ativos</td>
                  <td>92%</td>
                  <td>🟢 OK</td>
                  <td>Meta atingida</td>
                </tr>
                <tr>
                  <td>Redução de chamados</td>
                  <td>-22%</td>
                  <td>🟢 OK</td>
                  <td>Superou a meta</td>
                </tr>
                <tr>
                  <td>NPS</td>
                  <td>8,6</td>
                  <td>🟢 OK</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Dashboard semanal</td>
                  <td>100% entregue</td>
                  <td>🟢 OK</td>
                  <td>Sustentado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 6. Conclusão e Recomendações</h2>
          <ul>
            <li>Síntese dos resultados (metas alcançadas / não alcançadas).</li>
            <li>Recomendações de melhoria contínua.</li>
            <li>Registro no repositório de <strong>Lições Aprendidas</strong>.</li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Sempre usar os <strong>OKRs definidos no G1/G2</strong> como base → evita “inventar meta depois”.
              </li>
              <li>O sponsor deve validar os resultados junto com o PMO.</li>
              <li>
                Comparar <strong>baseline vs. resultado real</strong> → mostra claramente o impacto.
              </li>
              <li>Encerrar somente quando o ciclo 90 dias estiver documentado.</li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
