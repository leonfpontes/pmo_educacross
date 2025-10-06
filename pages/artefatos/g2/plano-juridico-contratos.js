import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function PlanoJuridicoContratosPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano Jurídico &amp; Contratos</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano Jurídico &amp; Contratos G2 - PMO Educacross"
      description="Guia do Plano Jurídico &amp; Contratos para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano Jurídico &amp; Contratos</h2>
          <p>
            É o documento que organiza <strong>todas as obrigações legais, contratuais e regulatórias</strong> do
            projeto, definindo responsabilidades, prazos, cláusulas críticas e formas de mitigação de riscos
            jurídicos.
          </p>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Escopo Jurídico</h3>
          <ul>
            <li>Lista de contratos que precisam ser elaborados, revisados ou renovados.</li>
            <li>Obrigações legais específicas (LGPD, propriedade intelectual, direitos de imagem etc.).</li>
            <li>Políticas internas que devem ser respeitadas.</li>
          </ul>

          <h3>2. Tipos de Contratos Envolvidos</h3>
          <ul>
            <li>
              <strong>Fornecedores de serviços</strong> (eventos, tecnologia, logística).
            </li>
            <li>
              <strong>Parcerias educacionais</strong> (ex.: SOMOS, Evolucional).
            </li>
            <li>
              <strong>Licenciamento de marca / uso de imagem</strong> (mascotes, merchandising).
            </li>
            <li>
              <strong>Contratos de colaboradores temporários / prestadores</strong>.
            </li>
          </ul>

          <h3>3. Cláusulas Críticas</h3>
          <ul>
            <li>
              <strong>Escopo e entregáveis contratuais.</strong>
            </li>
            <li>
              <strong>Prazos de entrega</strong> e penalidades por atraso (SLA).
            </li>
            <li>
              <strong>Multas/rescisões</strong> em caso de descumprimento.
            </li>
            <li>
              <strong>Garantias de confidencialidade e proteção de dados (LGPD).</strong>
            </li>
            <li>
              <strong>Direitos autorais e de imagem</strong> (quando envolve materiais pedagógicos ou mascotes).
            </li>
          </ul>

          <h3>4. Riscos Jurídicos &amp; Mitigações</h3>
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
                  <td>Falta de contrato formal com fornecedor</td>
                  <td>Alto</td>
                  <td>Padronizar minutas e aprovar antes de execução</td>
                </tr>
                <tr>
                  <td>Uso indevido de marca Educacross por parceiro</td>
                  <td>Médio</td>
                  <td>Incluir cláusula de uso restrito de marca</td>
                </tr>
                <tr>
                  <td>Descumprimento de LGPD em dados de alunos</td>
                  <td>Alto</td>
                  <td>Validação jurídica + plano de anonimização</td>
                </tr>
                <tr>
                  <td>Contratação emergencial sem cotação</td>
                  <td>Médio</td>
                  <td>Criar fluxo obrigatório de solicitação a Suprimentos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>5. Papéis e Responsabilidades</h3>
          <ul>
            <li>
              <strong>Solicitante:</strong> GP/PMO.
            </li>
            <li>
              <strong>Elaboração/Validação:</strong> Jurídico.
            </li>
            <li>
              <strong>Negociação:</strong> Suprimentos + área técnica responsável.
            </li>
            <li>
              <strong>Aprovação Final:</strong> Diretoria (Reginaldo/Raul).
            </li>
            <li>
              <strong>Gestão do Contrato:</strong> PMO + responsável da área demandante.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela – Plano Jurídico &amp; Contratos</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Contrato</th>
                  <th>Fornecedor/Parte</th>
                  <th>Data Início</th>
                  <th>Data Fim</th>
                  <th>Cláusulas Críticas</th>
                  <th>Responsável</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Locação de espaço – Evento Canoas</td>
                  <td>Espaço XYZ</td>
                  <td>15/11/25</td>
                  <td>28/11/25</td>
                  <td>SLA de montagem, multa por atraso</td>
                  <td>Operações + Jurídico</td>
                  <td>Assinado</td>
                </tr>
                <tr>
                  <td>Prestação de serviços audiovisuais</td>
                  <td>Produtora ABC</td>
                  <td>01/11/25</td>
                  <td>28/11/25</td>
                  <td>Direitos de imagem, entrega final em 48h</td>
                  <td>Marketing + Jurídico</td>
                  <td>Em revisão</td>
                </tr>
                <tr>
                  <td>Parceria Educacross &amp; Evolucional</td>
                  <td>Evolucional</td>
                  <td>01/01/26</td>
                  <td>31/12/26</td>
                  <td>Proteção de dados, exclusividade em municípios</td>
                  <td>PMO + Jurídico</td>
                  <td>Em negociação</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                <strong>Nenhum fornecedor inicia trabalho sem contrato assinado.</strong>
              </li>
              <li>
                Usar <strong>minutas padrão Educacross</strong> para agilizar negociações.
              </li>
              <li>
                <strong>PMO monitora contratos críticos</strong> no status report → sinaliza riscos de prazo/jurídicos.
              </li>
              <li>
                Contratos devem ficar centralizados em repositório único (Drive/Bitrix).
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
