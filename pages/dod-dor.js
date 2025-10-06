import ContentCard from '../src/components/common/ContentCard';
import Layout from '../src/components/layout/Layout';

export default function DodDorPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>DoD / DoR</h1>
        <p className="page-header-minimal__lead">Definition of Done (DoD) e Definition of Ready (DoR)</p>
      </div>
    </header>
  );

  const pageTitle = 'Definition of Done (DoD) e Definition of Ready (DoR) – PMO Educacross';
  const pageDescription =
    'Entenda como o PMO Educacross utiliza a Definition of Ready e a Definition of Done para garantir entregas completas e previsíveis.';

  return (
    <Layout title={pageTitle} description={pageDescription} hero={hero}>
      <section className="simple-page dod-dor-page">
        <ContentCard id="visao-geral">
          <h2>🧭 Definition of Done (DoD) e Definition of Ready (DoR)</h2>
          <p>🌟 Entendendo os dois pilares da qualidade em projetos</p>
          <p>
            No universo de gestão ágil — e dentro do PMO Educacross — dois conceitos garantem previsibilidade e maturidade nas
            entregas: Definition of Ready (DoR) e Definition of Done (DoD).
          </p>
          <p>
            Eles são como as “regras do jogo” que definem quando algo está realmente pronto para começar e quando algo está
            realmente concluído.
          </p>
          <p>💬 Em resumo: DoR garante que o time não comece algo mal definido, e DoD garante que o time não entregue algo incompleto.</p>
        </ContentCard>

        <ContentCard id="definition-of-ready">
          <h2>🚦 Definition of Ready (DoR) — “Quando podemos começar?”</h2>
          <p>A Definition of Ready representa o checklist de entrada de uma atividade, sprint ou entrega.</p>
          <p>É o conjunto de critérios que precisam ser atendidos antes de iniciar o trabalho.</p>
          <h3>📋 Objetivo</h3>
          <p>Evitar retrabalho e gargalos, garantindo que o time comece apenas aquilo que está claramente definido e viável de ser executado.</p>
          <h3>✅ Exemplos práticos na Educacross</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col">Cenário</th>
                  <th scope="col">Critério de “Ready”</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Criação de um relatório de status</td>
                  <td>O modelo padrão já está definido e alinhado com Raul e Maxwell.</td>
                </tr>
                <tr>
                  <td>Início de uma diagramação com Dário</td>
                  <td>O conteúdo e os textos validados por Amanda já foram enviados.</td>
                </tr>
                <tr>
                  <td>Desenvolvimento de dashboard BI</td>
                  <td>As queries foram revisadas por Nathália e os dados de origem estão disponíveis no Synapse.</td>
                </tr>
                <tr>
                  <td>Ação de evento municipal</td>
                  <td>A lista de escolas e o briefing do evento foram validados por Paula e Angelita.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>💡 Se algo ainda depende de alinhamentos, acessos, materiais ou aprovações, ele não está “Ready”.</p>
        </ContentCard>

        <ContentCard id="definition-of-done">
          <h2>🏁 Definition of Done (DoD) — “Quando podemos dizer que está concluído?”</h2>
          <p>A Definition of Done é o checklist de saída — aquilo que determina que uma entrega está realmente finalizada, validada e pronta para ser comunicada ou utilizada.</p>
          <h3>🎯 Objetivo</h3>
          <p>Garantir que as entregas sejam completas, verificadas e de qualidade, evitando “entregas parciais” ou “em aberto”.</p>
          <h3>✅ Exemplos práticos na Educacross</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col">Cenário</th>
                  <th scope="col">Critério de “Done”</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Relatório de status semanal</td>
                  <td>Publicado no Drive institucional, validado por Raul e enviado ao cliente.</td>
                </tr>
                <tr>
                  <td>Template de comunicação escolar</td>
                  <td>Revisado por Dário, validado por Paula e aplicado em um piloto real.</td>
                </tr>
                <tr>
                  <td>Dashboard de performance docente</td>
                  <td>Validado tecnicamente por Matheus e funcionalmente por Nathália.</td>
                </tr>
                <tr>
                  <td>Ata de reunião</td>
                  <td>Gerada, revisada e anexada ao card correspondente no Bitrix24.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>💡 “Done” não é quando o responsável terminou a tarefa, e sim quando o resultado passou pelos critérios combinados e está pronto para uso real.</p>
        </ContentCard>

        <ContentCard id="lado-a-lado">
          <h2>🧩 DoR e DoD lado a lado</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th scope="col">Aspecto</th>
                  <th scope="col">Definition of Ready (DoR)</th>
                  <th scope="col">Definition of Done (DoD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Momento</td>
                  <td>Antes de começar</td>
                  <td>Ao finalizar</td>
                </tr>
                <tr>
                  <td>Propósito</td>
                  <td>Garantir preparo e entendimento</td>
                  <td>Garantir qualidade e conclusão</td>
                </tr>
                <tr>
                  <td>Evita</td>
                  <td>Retrabalho, incerteza, escopo nebuloso</td>
                  <td>Retrabalho, pendências, entregas incompletas</td>
                </tr>
                <tr>
                  <td>Exemplo Educacross</td>
                  <td>“O briefing foi aprovado?”</td>
                  <td>“O artefato foi validado e publicado?”</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentCard>

        <ContentCard id="aplicacao">
          <h2>🛠️ Aplicando no PMO Educacross</h2>
          <p>
            No PMO Educacross, tanto o DoR quanto o DoD fazem parte dos Gate Reviews de cada etapa de projeto. Eles são aplicados em
            todos os níveis — desde tarefas operacionais no Bitrix24 até entregas macro em relatórios e produtos.
          </p>
        </ContentCard>

        <ContentCard id="boas-praticas">
          <h2>🧾 Boas práticas internas</h2>
          <ul>
            <li>Crie checklists claros no Bitrix24 para cada tipo de entrega.</li>
            <li>Não inicie tarefas sem DoR atendido. Se faltar insumo, sinalize.</li>
            <li>Valide sempre com o responsável da etapa seguinte antes de marcar “concluído”.</li>
            <li>Documente o DoD e o DoR nos templates do PMO — isso facilita auditorias e relatórios.</li>
            <li>Use o semáforo de status (verde, amarelo, vermelho) para mostrar o grau de aderência aos critérios.</li>
          </ul>
        </ContentCard>

        <ContentCard id="conclusao">
          <h2>💬 Conclusão</h2>
          <p>
            “Pronto para começar” e “pronto para entregar” parecem parecidos, mas representam momentos e responsabilidades completamente
            diferentes.
          </p>
          <p>
            Adotar Definition of Ready e Definition of Done é o que transforma tarefas soltas em um fluxo de gestão maduro, com
            previsibilidade, rastreabilidade e qualidade — pilares fundamentais do PMO Educacross.
          </p>
        </ContentCard>
      </section>
    </Layout>
  );
}
