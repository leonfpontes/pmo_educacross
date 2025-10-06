import Layout from '@/components/layout/SiteLayout';
import Callout from '@/components/data-display/Callout';

export default function PlanoMarketingComunicacaoPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Marketing &amp; Comunicação</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Marketing &amp; Comunicação G2 - PMO Educacross"
      description="Guia do Plano de Marketing &amp; Comunicação para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano de Marketing &amp; Comunicação</h2>
          <p>
            É o documento que organiza todas as ações de <strong>posicionamento, divulgação e engajamento</strong>{' '}
            relacionadas ao projeto, garantindo consistência com a marca Educacross e alinhamento com os objetivos
            pedagógicos e comerciais.
          </p>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>1. Objetivos de Marketing &amp; Comunicação</h3>
          <ul>
            <li>O que se quer alcançar? (visibilidade, engajamento, captação, retenção).</li>
            <li>Público-alvo: escolas, professores, alunos, parceiros, sociedade.</li>
            <li>Mensagens-chave que devem ser transmitidas.</li>
          </ul>

          <h3>2. Estratégia de Comunicação Externa</h3>
          <ul>
            <li>Identidade visual → alinhada ao manual da Educacross.</li>
            <li>Canais: redes sociais, newsletters, imprensa, site, materiais físicos (banners, kits).</li>
            <li>Conteúdo: vídeos, posts, comunicados, press releases.</li>
          </ul>

          <h3>3. Estratégia de Comunicação Interna</h3>
          <ul>
            <li>Engajamento dos colaboradores.</li>
            <li>Materiais de alinhamento (briefings, FAQs, manuais).</li>
            <li>Divulgação em canais internos (Bitrix24, newsletters internas, murais).</li>
          </ul>

          <h3>4. Cronograma de Comunicação</h3>
          <ul>
            <li>Datas de disparos, posts, releases e materiais de evento.</li>
            <li>Alinhado ao cronograma do projeto → evitando “furo de comunicação”.</li>
          </ul>

          <h3>5. Materiais de Apoio</h3>
          <ul>
            <li>Kits de branding (logos, mascotes, templates).</li>
            <li>Vídeos tutoriais ou de lançamento.</li>
            <li>FAQs para professores e escolas.</li>
          </ul>

          <h3>6. Papéis e Responsabilidades</h3>
          <ul>
            <li>
              <strong>Marketing (Dário/Luiz):</strong> criação de artes, campanhas, conteúdos.
            </li>
            <li>
              <strong>CS (Paula):</strong> mensagens a professores/escolas.
            </li>
            <li>
              <strong>Operações (Raul/Darlete):</strong> comunicação logística de eventos.
            </li>
            <li>
              <strong>PMO:</strong> garante padronização e alinhamento entre áreas.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela – Plano de Marketing &amp; Comunicação</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Público</th>
                  <th>Canal</th>
                  <th>Data</th>
                  <th>Responsável</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Save the Date – Evento Franca</td>
                  <td>Escolas / Professores</td>
                  <td>E-mail + Redes</td>
                  <td>05/11</td>
                  <td>Marketing</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Campanha mascote Belinha</td>
                  <td>Alunos</td>
                  <td>Instagram + TikTok</td>
                  <td>10/11</td>
                  <td>Marketing + CS</td>
                  <td>Em andamento</td>
                </tr>
                <tr>
                  <td>Release para imprensa local</td>
                  <td>Sociedade</td>
                  <td>Imprensa + Site</td>
                  <td>15/11</td>
                  <td>PMO + Marketing</td>
                  <td>Pendente</td>
                </tr>
                <tr>
                  <td>Kit pedagógico do projeto</td>
                  <td>Professores</td>
                  <td>Impresso + Digital</td>
                  <td>20/11</td>
                  <td>Pedagógico + Marketing</td>
                  <td>Em validação</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>Sempre alinhar <strong>tom e visual</strong> à identidade da marca.</li>
              <li>Antecipar campanhas → não deixar comunicação para “última hora”.</li>
              <li>
                Criar versões <strong>executivas (diretoria)</strong> e <strong>operacionais (professores/alunos)</strong> das mensagens.
              </li>
              <li>
                Registrar todas as ações em um <strong>repositório único</strong> → facilita replicar em outros projetos.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
