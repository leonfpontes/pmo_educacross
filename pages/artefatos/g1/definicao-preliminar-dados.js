import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

export default function PreliminaryDataDefinitionPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1: Definição Preliminar de Dados</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Definição Preliminar de Dados G1 - PMO Educacross"
      description="Diretrizes para definir indicadores, fontes de dados e responsabilidades no Gate G1 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>G1: Definição Preliminar de Dados</h2>
          <p>
            É o momento em que o projeto estabelece <strong>quais informações precisam ser medidas, acompanhadas e reportadas</strong>
            para avaliar o sucesso da iniciativa.
          </p>
          <p>
            <span role="img" aria-label="Explicação">
              ➡️
            </span>{' '}
            Em outras palavras: antes de planejar em detalhe, já deixamos claro <strong>“quais dados vão contar a história desse projeto”</strong>.
          </p>
        </section>

        <section className="content-card">
          <h3>🎯 Objetivos dessa definição</h3>
          <ul>
            <li>Garantir que o projeto terá <strong>indicadores de desempenho (KPIs)</strong> desde o início.</li>
            <li>Antecipar quais <strong>bases de dados ou sistemas</strong> serão usados (Bitrix, Looker, Metabase, relatórios internos).</li>
            <li>Facilitar a criação de dashboards futuros, sem depender de improviso.</li>
            <li>Evitar projetos sem “medida de valor” → que entregam, mas não provam resultado.</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>🛠️ O que deve conter</h3>
          <ol>
            <li>
              <strong>Indicadores-alvo:</strong> o que será acompanhado? (ex.: adesão de professores, NPS, custo x orçamento, ROI).
            </li>
            <li>
              <strong>Fontes de dados:</strong> de onde virão as informações? (ex.: Metabase, CRM, Google Sheets, relatórios de eventos).
            </li>
            <li>
              <strong>Periodicidade de coleta:</strong> com que frequência vamos medir? (ex.: diário, semanal, mensal).
            </li>
            <li>
              <strong>Responsáveis pelos dados:</strong> quem garante a atualização? (ex.: Nathália para BI, Paula para CS).
            </li>
            <li>
              <strong>Formatos de entrega:</strong> dashboard, relatório executivo, planilha, exportação de sistema.
            </li>
          </ol>
        </section>

        <section className="content-card">
          <h3>📌 Exemplo Educacross</h3>
          <ul>
            <li>
              <strong>Projeto:</strong> Olimpíada Educacross – Canoas.
            </li>
            <li>
              <strong>Definição preliminar de dados:</strong>
              <ul>
                <li>Indicadores: nº de escolas participantes, nº de alunos inscritos, % de presença, custo por participante, satisfação (NPS).</li>
                <li>Fontes: CRM + formulários de inscrição + Metabase.</li>
                <li>Responsáveis: Marketing (cadastro), Operações (logística), PMO (consolidação).</li>
                <li>Frequência: atualização semanal até o evento, relatório final no encerramento.</li>
              </ul>
            </li>
          </ul>
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
