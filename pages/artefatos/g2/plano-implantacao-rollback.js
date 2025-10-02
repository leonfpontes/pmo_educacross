import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoImplantacaoRollbackPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Implantação &amp; Rollback</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Implantação &amp; Rollback G2 - PMO Educacross"
      description="Guia de Plano de Implantação &amp; Rollback para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é</h2>
          <ul>
            <li>
              <strong>Implantação (Go-Live):</strong> conjunto de passos para colocar a solução em
              funcionamento (plataforma ativa, evento acontecendo, material sendo usado).
            </li>
            <li>
              <strong>Rollback:</strong> plano B que define como voltar ao estado anterior se houver
              falha crítica (ex.: sistema fora do ar, erro em grande escala, evento inviabilizado).
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Objetivos</h3>
          <ul>
            <li>Garantir que a transição para o Go-Live seja organizada.</li>
            <li>Reduzir riscos de falha.</li>
            <li>Preparar alternativas seguras caso seja necessário reverter.</li>
          </ul>

          <h3>2. Plano de Implantação</h3>
          <ul>
            <li>Data e hora da implantação.</li>
            <li>Passos detalhados (checklist).</li>
            <li>Responsáveis por cada ação.</li>
            <li>Validação esperada após cada passo (ex.: login funcionando, som testado).</li>
          </ul>

          <h3>3. Critérios de Go/No-Go</h3>
          <ul>
            <li>Checklist de testes aprovados.</li>
            <li>Treinamento concluído.</li>
            <li>Suporte pronto.</li>
            <li>Aprovação do sponsor.</li>
          </ul>

          <h3>4. Plano de Rollback</h3>
          <ul>
            <li>Cenários que disparam rollback (ex.: falha crítica não resolvida em até 2h).</li>
            <li>Passos para reverter (ex.: restaurar backup, acionar fornecedor reserva).</li>
            <li>Responsáveis e tempo máximo para decisão.</li>
            <li>Comunicação a stakeholders em caso de rollback.</li>
          </ul>

          <h3>5. Comunicação e Suporte</h3>
          <ul>
            <li>Quem deve ser avisado em caso de sucesso/falha.</li>
            <li>Como será feito o suporte imediato (CS, Tech, Operações).</li>
            <li>Plano de contingência para usuários/clientes.</li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela – Plano de Implantação &amp; Rollback</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Atividade</th>
                  <th>Data/Hora</th>
                  <th>Responsável</th>
                  <th>Critério de Validação</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Migração de base de dados</td>
                  <td>20/11 – 22h</td>
                  <td>Tech (Matheus)</td>
                  <td>Relatórios rodam sem erro</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Publicação do app whitelabel</td>
                  <td>21/11 – 08h</td>
                  <td>Produto</td>
                  <td>Login via SSO testado</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Treinamento final de professores</td>
                  <td>21/11 – 10h</td>
                  <td>Pedagógico/CS</td>
                  <td>&ge; 90% presença</td>
                  <td>Concluído</td>
                </tr>
                <tr>
                  <td>Go-Live (abertura do evento)</td>
                  <td>21/11 – 14h</td>
                  <td>Operações</td>
                  <td>Estrutura validada + som/luz testados</td>
                  <td>Pendente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h3>📉 Exemplo de Rollback</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Cenário</th>
                  <th>Ação de Rollback</th>
                  <th>Responsável</th>
                  <th>Tempo Máximo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Plataforma indisponível</td>
                  <td>Restaurar backup + acionar fornecedor</td>
                  <td>Tech</td>
                  <td>2h</td>
                </tr>
                <tr>
                  <td>Falha em streaming de evento</td>
                  <td>Migrar para link alternativo (YouTube privado)</td>
                  <td>Marketing/Tech</td>
                  <td>30min</td>
                </tr>
                <tr>
                  <td>Fornecedor de coffee não entrega</td>
                  <td>Acionar fornecedor backup local</td>
                  <td>Operações</td>
                  <td>1h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Implantação só ocorre com <strong>checklist Go/No-Go</strong> aprovado.
              </li>
              <li>
                Rollback sempre precisa ser <strong>viável e testado</strong> (não pode ser só “no papel”).
              </li>
              <li>
                Toda decisão de rollback deve ser documentada e gerar <strong>lição aprendida</strong>.
              </li>
              <li>
                Comunicação clara: quem decide rollback e quem informa stakeholders.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
