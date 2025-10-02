import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function PlanoAquisicoesPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Plano de Aquisições/Suprimentos</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Plano de Aquisições/Suprimentos G2 - PMO Educacross"
      description="Guia do Plano de Aquisições e Suprimentos para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>O que é o Plano de Aquisições/Suprimentos</h2>
          <p>
            É o documento que define <strong>o que precisa ser adquirido, como será adquirido, quando e por quem</strong>,
            além de indicar fornecedores, SLAs e critérios de qualidade.
          </p>
          <p>Ele serve para evitar compras emergenciais, atrasos e estouros de orçamento.</p>
        </section>

        <section className="content-card">
          <h2>🛠️ O que deve conter</h2>

          <h3>
            1. <strong>Escopo das Aquisições</strong>
          </h3>
          <ul>
            <li>O que será comprado/contratado (materiais, serviços, tecnologia, logística, merchandising, etc.).</li>
            <li>Quantidade estimada.</li>
            <li>Se é item recorrente ou único.</li>
          </ul>

          <h3>
            2. <strong>Estratégia de Suprimentos</strong>
          </h3>
          <ul>
            <li>
              Política Educacross: <strong>mínimo de 30 dias de antecedência</strong> para qualquer contratação.
            </li>
            <li>
              Exigência de <strong>mínimo 3 cotações</strong> para comparativo técnico-comercial.
            </li>
            <li>Preferência por fornecedores homologados.</li>
            <li>Critérios de decisão (preço, qualidade, prazo, histórico).</li>
          </ul>

          <h3>
            3. <strong>Cronograma de Compras</strong>
          </h3>
          <ul>
            <li>Datas de solicitação, aprovação e entrega.</li>
            <li>
              Relação com marcos do cronograma do projeto (ex.: itens de evento precisam estar 10 dias antes da montagem).
            </li>
          </ul>

          <h3>
            4. <strong>Riscos de Suprimentos</strong>
          </h3>
          <ul>
            <li>Dependência de fornecedor único.</li>
            <li>Possibilidade de atraso de entrega.</li>
            <li>Falhas de qualidade.</li>
            <li>Mitigações (backup de fornecedor, cláusulas contratuais, seguro).</li>
          </ul>

          <h3>
            5. <strong>Papéis e Responsabilidades</strong>
          </h3>
          <ul>
            <li>
              <strong>Solicitante:</strong> GP / PMO.
            </li>
            <li>
              <strong>Negociação e contratação:</strong> Suprimentos (Darlete).
            </li>
            <li>
              <strong>Validação técnica:</strong> área demandante (Produto, Tech, Marketing, Operações etc.).
            </li>
            <li>
              <strong>Financeiro:</strong> validação de orçamento e pagamento (Angelita).
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>📊 Exemplo de Tabela do Plano de Aquisições</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Item / Serviço</th>
                  <th>Categoria</th>
                  <th>Quantidade</th>
                  <th>Fornecedor Preferencial</th>
                  <th>Data de Solicitação</th>
                  <th>Data Limite de Entrega</th>
                  <th>Responsável Técnico</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Estrutura de evento (som/luz/palco)</td>
                  <td>Operações</td>
                  <td>1 pacote</td>
                  <td>Fornecedor A</td>
                  <td>10/10</td>
                  <td>20/11</td>
                  <td>Raul</td>
                  <td>Em cotação</td>
                </tr>
                <tr>
                  <td>Kits de professores (camisetas, mochilas)</td>
                  <td>Marketing</td>
                  <td>200 unidades</td>
                  <td>Fornecedor B</td>
                  <td>15/10</td>
                  <td>10/11</td>
                  <td>Paula</td>
                  <td>Aguardando aprovação</td>
                </tr>
                <tr>
                  <td>Licenças extras do Bitrix24</td>
                  <td>Tech</td>
                  <td>50</td>
                  <td>Fornecedor oficial</td>
                  <td>05/11</td>
                  <td>25/11</td>
                  <td>Matheus</td>
                  <td>Aprovado</td>
                </tr>
                <tr>
                  <td>Brindes Educacross (canecas, adesivos)</td>
                  <td>Merchandising</td>
                  <td>500 unidades</td>
                  <td>Fornecedor C</td>
                  <td>12/10</td>
                  <td>15/11</td>
                  <td>Marketing</td>
                  <td>Em andamento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>
                Planejar compras com antecedência <strong>amarrada ao cronograma</strong> (nunca deixar suprimentos “soltos”).
              </li>
              <li>Sempre validar <strong>qualidade antes do pagamento final</strong>.</li>
              <li>Usar cláusulas contratuais com SLA e multa por atraso.</li>
              <li>PMO deve monitorar suprimentos no <strong>Status Report</strong> como um indicador de risco.</li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
