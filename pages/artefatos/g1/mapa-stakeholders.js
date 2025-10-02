import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function StakeholderMapPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1: Mapa de Stakeholders</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Mapa de Stakeholders G1 - PMO Educacross"
      description="Modelo de mapa de stakeholders utilizado no Gate G1 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Mapa de Stakeholders</h2>
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
          <h2>1. Identificação dos Stakeholders</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Nome / Grupo</th>
                  <th>Função / Papel</th>
                  <th>Interesse no Projeto</th>
                  <th>Influência / Poder</th>
                  <th>Expectativas</th>
                  <th>Estratégia de Gestão</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reginaldo Gotardo</td>
                  <td>CEO / Sponsor</td>
                  <td>Alto</td>
                  <td>Alto</td>
                  <td>Ver expansão e resultados estratégicos</td>
                  <td>
                    <strong>Gerenciar de Perto</strong> (comitês, relatórios executivos)
                  </td>
                  <td>PMO</td>
                </tr>
                <tr>
                  <td>Raul</td>
                  <td>Head de Operações</td>
                  <td>Médio</td>
                  <td>Alto</td>
                  <td>Controle de custos e eficiência</td>
                  <td>
                    <strong>Manter Satisfeito</strong> (status sobre otimização)
                  </td>
                  <td>PMO</td>
                </tr>
                <tr>
                  <td>Maxwell (Produto)</td>
                  <td>Head de Produto</td>
                  <td>Alto</td>
                  <td>Médio</td>
                  <td>Evolução da plataforma e integrações</td>
                  <td>
                    <strong>Gerenciar de Perto</strong> (alinhamentos técnicos)
                  </td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Erica (Pedagógico)</td>
                  <td>Diretora Pedagógica</td>
                  <td>Alto</td>
                  <td>Médio</td>
                  <td>Qualidade do conteúdo e impacto pedagógico</td>
                  <td>
                    <strong>Manter Informado</strong> (validações pedagógicas)
                  </td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Angelita</td>
                  <td>Financeiro/Admin</td>
                  <td>Médio</td>
                  <td>Médio</td>
                  <td>Aderência orçamentária e compliance</td>
                  <td>
                    <strong>Manter Satisfeito</strong> (checkpoints de orçamento)
                  </td>
                  <td>GP/Financeiro</td>
                </tr>
                <tr>
                  <td>Darlete</td>
                  <td>Suprimentos/Logística</td>
                  <td>Médio</td>
                  <td>Médio</td>
                  <td>Contratação de fornecedores e prazos</td>
                  <td>
                    <strong>Manter Informado</strong> (checklists logísticos)
                  </td>
                  <td>GP</td>
                </tr>
                <tr>
                  <td>Clientes (Municípios/Escolas)</td>
                  <td>Usuários finais</td>
                  <td>Alto</td>
                  <td>Variável</td>
                  <td>Adoção, suporte e resultados pedagógicos</td>
                  <td>
                    <strong>Gerenciar de Perto</strong> (treinamentos, relatórios)
                  </td>
                  <td>CS/Pedagógico</td>
                </tr>
                <tr>
                  <td>Professores</td>
                  <td>Usuários chave</td>
                  <td>Alto</td>
                  <td>Baixo</td>
                  <td>Ferramentas práticas e simples</td>
                  <td>
                    <strong>Manter Informado</strong> (treinamentos, FAQs)
                  </td>
                  <td>Pedagógico/CS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>2. Matriz de Poder x Interesse</h2>
          <div className="artifact-image-placeholder">
            <p>Imagem que enviei em anexo.</p>
          </div>
        </section>

        <section className="content-card">
          <h2>3. Estratégia de Comunicação por Categoria</h2>
          <ul>
            <li>
              <strong>Gerenciar de Perto:</strong> contato frequente, participação em comitês e relatórios executivos.
            </li>
            <li>
              <strong>Manter Satisfeito:</strong> atualizações periódicas, envolvimento em decisões críticas.
            </li>
            <li>
              <strong>Manter Informado:</strong> comunicação regular sobre progresso e entregas.
            </li>
            <li>
              <strong>Monitorar:</strong> apenas quando houver impacto direto.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              <li>
                Revisar o mapa a cada <strong>gate</strong> ou quando surgirem novos stakeholders.
              </li>
              <li>
                Usar o Bitrix24 para registrar <strong>públicos críticos</strong> e vincular ao plano de comunicação.
              </li>
              <li>
                Dar nome e <strong>responsável claro</strong> para cada stakeholder → evita ruído.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
