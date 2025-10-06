import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function LicoesAprendidasPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G4: Lições Aprendidas – Educacross</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Lições Aprendidas G4 - PMO Educacross"
      description="Registro estruturado de lições aprendidas para a fase G4 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> __________________________________
          </p>
          <p>
            <strong>Data:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h2>1. Objetivo</h2>
          <p>
            Registrar as experiências do projeto, destacando sucessos, falhas, pontos de melhoria e recomendações para projetos
            futuros.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Metodologia</h2>
          <ul>
            <li>Sessão de retrospectiva com time do projeto.</li>
            <li>Feedback dos stakeholders (internos e externos).</li>
            <li>
              Análise de riscos materializados, mudanças de escopo e desvios de cronograma/orçamento.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>3. Registro de Lições</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Área / Tema</th>
                  <th>O que deu certo (manter)</th>
                  <th>O que não deu certo (evitar)</th>
                  <th>Recomendações / Ações Futuras</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Escopo</td>
                  <td>Definição clara no kickoff evitou retrabalho</td>
                  <td>Inclusão tardia de demandas extras prejudicou o prazo</td>
                  <td>Formalizar Change Requests desde o G2</td>
                </tr>
                <tr>
                  <td>Cronograma</td>
                  <td>Uso do Gantt no Bitrix24 deu visibilidade</td>
                  <td>Dependências entre áreas não foram bem mapeadas</td>
                  <td>Mapear e validar dependências no início do planejamento</td>
                </tr>
                <tr>
                  <td>Orçamento</td>
                  <td>Reserva de contingência de 10% evitou impacto financeiro</td>
                  <td>Custos indiretos não foram considerados</td>
                  <td>Detalhar recursos internos (hora/homem) na baseline</td>
                </tr>
                <tr>
                  <td>Riscos</td>
                  <td>Revisão quinzenal ajudou no controle</td>
                  <td>Nem todos riscos tiveram responsáveis claros</td>
                  <td>Definir DRI por risco já no G2</td>
                </tr>
                <tr>
                  <td>Comunicação</td>
                  <td>Status Report quinzenal deu clareza à diretoria</td>
                  <td>Algumas áreas não participaram ativamente das reuniões</td>
                  <td>Reforçar presença obrigatória de leads de área nos Comitês</td>
                </tr>
                <tr>
                  <td>Operações</td>
                  <td>Checklist logístico evitou falhas no evento</td>
                  <td>Prazo de fornecedores foi subestimado</td>
                  <td>Negociar SLAs mais realistas e prever backups</td>
                </tr>
                <tr>
                  <td>Pedagógico</td>
                  <td>Rubrica de qualidade garantiu consistência</td>
                  <td>Revisões demoraram além do previsto</td>
                  <td>Agendar validações pedagógicas no cronograma inicial</td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Identidade visual padronizada fortaleceu marca</td>
                  <td>Atrasos na entrega de artes impactaram comunicação</td>
                  <td>Criar cronograma de design paralelo à execução</td>
                </tr>
                <tr>
                  <td>Tech</td>
                  <td>Testes de integração antecipados reduziram bugs</td>
                  <td>Ambiente de homologação não estava pronto no prazo</td>
                  <td>Garantir readiness de ambiente antes de G2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>4. Síntese Geral</h2>
          <ul>
            <li>
              <strong>Pontos Fortes do Projeto:</strong> __________________________________
            </li>
            <li>
              <strong>Principais Problemas Encontrados:</strong> __________________________________
            </li>
          </ul>
          <h3>Top 3 Recomendações para o futuro:</h3>
          <ol>
            <li>__________________________________</li>
            <li>__________________________________</li>
            <li>__________________________________</li>
          </ol>
        </section>

        <section className="content-card">
          <h2>5. Ações de Melhoria Incorporadas</h2>
          <ul className="checkbox-list">
            <li>
              <label>
                <input type="checkbox" /> Atualizar templates do PMO (Charter, Cronograma, Riscos etc.)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Ajustar processo de Go/No-Go (checklists mais rigorosos)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Revisar critérios de status report e indicadores de portfólio
              </label>
            </li>
          </ul>
        </section>

        <section className="content-card">
          <p>
            <strong>Responsável pelo registro:</strong> __________________________________
          </p>
          <p>
            <strong>Aprovadores:</strong> __________________________________
          </p>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Sempre consolidar em até <strong>15 dias após o encerramento</strong>.
              </li>
              <li>
                Tornar o documento <strong>curto e objetivo</strong> (1–2 páginas).
              </li>
              <li>
                Reunir aprendizados em um <strong>repositório central do PMO</strong>, acessível a todos os gestores.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
