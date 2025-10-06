import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

export default function OrcamentoBaselinePage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G2: Orçamento Base</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Orçamento Baseline G2 - PMO Educacross"
      description="Modelo de Orçamento Baseline para a fase G2 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>G2: Orçamento Base</h2>
          <h3>Orçamento Baseline – Educacross</h3>
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
            Estabelecer a linha de base de custos aprovada do projeto, a ser usada como referência para controle e
            comparação com custos reais.
          </p>
        </section>

        <section className="content-card">
          <h2>2. Estrutura do Orçamento</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Item / Descrição</th>
                  <th>Tipo de Custo</th>
                  <th>Estimativa (R$)</th>
                  <th>Responsável</th>
                  <th>Observações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Recursos Humanos</strong>
                  </td>
                  <td>Alocação interna (horas de time Educacross)</td>
                  <td>Interno</td>
                  <td>R$ _______</td>
                  <td>PMO/Financeiro</td>
                  <td>Baseado em taxa/hora padrão</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Horas extras / reforço temporário</td>
                  <td>Interno</td>
                  <td>R$ _______</td>
                  <td>RH</td>
                  <td>Se aplicável</td>
                </tr>
                <tr>
                  <td>
                    <strong>Fornecedores / Terceiros</strong>
                  </td>
                  <td>Design/Agência</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Marketing</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Desenvolvimento de Software</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Tech</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Serviços de Logística / Eventos</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Operações</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Infraestrutura / Tecnologia</strong>
                  </td>
                  <td>Licenças / Ferramentas (Bitrix, Looker etc.)</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Tech/Financeiro</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>Servidores / Cloud</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Tech</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Materiais / Merchandising</strong>
                  </td>
                  <td>Kits, brindes, materiais impressos</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Marketing/Operações</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Viagens / Deslocamentos</strong>
                  </td>
                  <td>Passagens, hospedagens, transporte</td>
                  <td>Externo</td>
                  <td>R$ _______</td>
                  <td>Operações</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Financeiro / Contingência</strong>
                  </td>
                  <td>Reserva de contingência (10%)</td>
                  <td>Interno</td>
                  <td>R$ _______</td>
                  <td>Financeiro</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card">
          <h2>3. Totais</h2>
          <ul>
            <li>
              <strong>Custo Estimado Total:</strong> R$ ___________
            </li>
            <li>
              <strong>Contingência Recomendada (10%):</strong> R$ ___________
            </li>
            <li>
              <strong>Baseline Aprovado:</strong> R$ ___________
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>4. Aprovação</h2>
          <ul>
            <li>
              <strong>Sponsor:</strong> __________________________
            </li>
            <li>
              <strong>Financeiro (Angelita):</strong> __________________________
            </li>
            <li>
              <strong>PMO:</strong> Leonardo Fonseca Pontes
            </li>
          </ul>
        </section>

        <section className="content-card">
          <Callout title="📌 Boas práticas Educacross">
            <ul>
              <li>Sempre incluir <strong>contingência mínima de 10%</strong>.</li>
              <li>
                Diferenciar <strong>custos internos</strong> (hora/homem Educacross) de <strong>externos</strong>
                (fornecedores/terceiros).
              </li>
              <li>
                Usar o baseline como <strong>linha de controle</strong>, qualquer alteração significativa deve virar
                <strong>Change Request</strong> e passar por Comitê.
              </li>
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
