import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';
import Button from '@/components/ui/Button';

const approvalOptions = [
  { id: 'aprovado-planejamento', label: 'Aprovado para Planejamento Detalhado (G2)' },
  { id: 'postergar', label: 'Postergar' },
  { id: 'rejeitado', label: 'Rejeitado' },
];

export default function ProjectCharterPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1: Carta de Abertura do Projeto</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Carta de Abertura G1 - PMO Educacross"
      description="Modelo de Carta de Abertura do Projeto utilizado no Gate G1 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Carta de Abertura do Projeto - Educacross</h2>
          <p>
            <strong>ID do Projeto:</strong> [Lógica de Código]
          </p>
          <p>
            <strong>Data de Aprovação:</strong> [dd/mm/aaaa]
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h3>1. Informações Básicas</h3>
          <ul>
            <li>
              <strong>Nome do Projeto:</strong> __________________________________
            </li>
            <li>
              <strong>Sponsor:</strong> __________________________________
            </li>
            <li>
              <strong>Gerente de Projeto (GP):</strong> __________________________________
            </li>
            <li>
              <strong>PMO Responsável:</strong> Leonardo Fonseca Pontes
            </li>
            <li>
              <strong>Área Solicitante:</strong> __________________________________
            </li>
            <li>
              <strong>Data Prevista de Início:</strong> dd<strong>/mm</strong>/aaaa
            </li>
            <li>
              <strong>Data Prevista de Conclusão:</strong> dd<strong>/mm</strong>/aaaa
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h3>2. Propósito e Justificativa</h3>
          <p>
            Descrever de forma clara <strong>por que este projeto existe</strong>, qual problema resolve ou qual oportunidade
            atende.
          </p>
          <p>
            <span role="img" aria-label="Exemplo">
              ➡️
            </span>{' '}
            <em>
              Exemplo: “Expandir a plataforma Educacross para novos municípios, garantindo escalabilidade e padronização de
              relatórios.”
            </em>
          </p>
        </section>

        <section className="content-card">
          <h3>3. Objetivos e Benefícios Esperados</h3>
          <div className="content-grid">
            <div>
              <h4>Objetivos</h4>
              <ol>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </div>
            <div>
              <h4>Benefícios (tangíveis e intangíveis)</h4>
              <ul>
                <li>Receita esperada: ________</li>
                <li>Redução de custo: ________</li>
                <li>Melhoria de processo/eficiência: ________</li>
                <li>Impacto pedagógico/estratégico: ________</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-card">
          <h3>4. Escopo</h3>
          <div className="content-grid">
            <div>
              <h4>Inclusões (o que o projeto irá entregar)</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <h4>Exclusões (fora do escopo)</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-card">
          <h3>5. Principais Entregas e Marcos (Macrocronograma)</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Entrega/Marco</th>
                  <th>Data Prevista</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kickoff</td>
                  <td>
                    <strong>dd/mm</strong>/aaaa
                  </td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Entrega 1</td>
                  <td>
                    <strong>dd/mm</strong>/aaaa
                  </td>
                  <td>_______</td>
                </tr>
                <tr>
                  <td>Entrega 2</td>
                  <td>
                    <strong>dd/mm</strong>/aaaa
                  </td>
                  <td>_______</td>
                </tr>
                <tr>
                  <td>Go-Live</td>
                  <td>
                    <strong>dd/mm</strong>/aaaa
                  </td>
                  <td>_______</td>
                </tr>
                <tr>
                  <td>Encerramento</td>
                  <td>
                    <strong>dd/mm</strong>/aaaa
                  </td>
                  <td>GP/PMO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h3>6. Papéis e Responsabilidades (RACI Macro)</h3>
          <ul>
            <li>
              <strong>Sponsor:</strong> aprova escopo, orçamento, remove impedimentos.
            </li>
            <li>
              <strong>PMO:</strong> garante metodologia, reporta status, cobra decisões de Gate.
            </li>
            <li>
              <strong>GP:</strong> planeja, executa e acompanha o dia a dia.
            </li>
            <li>
              <strong>Leads de Área:</strong> contribuem com entregas e validações específicas.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h3>7. Orçamento e Recursos</h3>
          <ul>
            <li>
              <strong>Orçamento Estimado:</strong> R$ __________
            </li>
            <li>
              <strong>Recursos Críticos:</strong> ______________________________________
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h3>8. Riscos Iniciais e Assunções</h3>
          <div className="content-grid">
            <div>
              <h4>Principais Riscos Identificados</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <h4>Assunções (premissas)</h4>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-card">
          <h3>9. Critérios de Sucesso</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <section className="content-card">
          <h3>10. Aprovação (Gate G1)</h3>
          <fieldset className="form-fieldset">
            <legend>Decisão</legend>
            <div className="checkbox-grid">
              {approvalOptions.map((option) => (
                <label key={option.id} className="checkbox-item" htmlFor={option.id}>
                  <input id={option.id} name="aprovacao" type="checkbox" value={option.label} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-grid">
            <label className="form-field" htmlFor="data-aprovacao">
              <span>Data da Aprovação</span>
              <input id="data-aprovacao" name="dataAprovacao" type="date" />
            </label>
            <label className="form-field" htmlFor="assinatura-sponsor">
              <span>Sponsor</span>
              <input id="assinatura-sponsor" name="assinaturaSponsor" type="text" placeholder="Nome do sponsor" />
            </label>
            <label className="form-field" htmlFor="assinatura-diretoria">
              <span>Diretoria/Comitê</span>
              <input
                id="assinatura-diretoria"
                name="assinaturaDiretoria"
                type="text"
                placeholder="Nome da diretoria/comitê"
              />
            </label>
            <label className="form-field" htmlFor="assinatura-pmo">
              <span>PMO</span>
              <input id="assinatura-pmo" name="assinaturaPmo" type="text" placeholder="Nome do responsável do PMO" />
            </label>
          </div>
        </section>

        <section className="content-card">
          <Callout title="Nota">
            <p>
              A Carta de Abertura é o documento que <strong>autoriza oficialmente o início do projeto</strong>.
            </p>
            <p>Deve ser anexada no repositório padrão e usada como referência em todas as reuniões de status.</p>
          </Callout>
        </section>

        <section className="content-card content-card--actions">
          <Button href="/artefatos/g1" variant="secondary">
            Voltar para Artefatos G1
          </Button>
        </section>
      </article>
    </Layout>
  );
}
