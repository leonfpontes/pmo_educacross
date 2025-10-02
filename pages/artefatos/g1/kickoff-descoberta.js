import Layout from '../../../src/components/layout/Layout';
import Button from '../../../src/components/common/Button';

export default function KickoffDescobertaPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1: Kickoff de Descoberta</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Kickoff de Descoberta G1 - PMO Educacross"
      description="Guia do Kickoff de Descoberta realizado no Gate G1 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Para que serve?</h2>
          <ul>
            <li>
              Validar o <strong>propósito do projeto</strong> e se ele faz sentido frente às prioridades da Educacross.
            </li>
            <li>
              Identificar os <strong>principais stakeholders</strong> e papéis (quem pede, quem paga, quem usa, quem decide).
            </li>
            <li>
              Nivelar as <strong>expectativas iniciais de escopo e benefícios</strong>.
            </li>
            <li>
              Definir quais <strong>artefatos mínimos</strong> serão produzidos na fase de Descoberta (Charter, Business Case, Mapa de Stakeholders, Critérios de Sucesso).
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>
            <span role="img" aria-label="Ferramentas">
              🛠️
            </span>{' '}
            O que acontece na prática
          </h2>
          <ol>
            <li>
              <strong>Apresentação da Demanda:</strong> quem trouxe explica brevemente a necessidade ou oportunidade.
            </li>
            <li>
              <strong>Objetivo e Benefício Esperado:</strong> sponsor/diretoria reforça a relevância do projeto.
            </li>
            <li>
              <strong>Escopo de Alto Nível:</strong> alinhamento inicial do que o projeto deve e não deve cobrir.
            </li>
            <li>
              <strong>Critérios de Sucesso preliminares:</strong> primeiros indicadores ou OKRs que servirão de norte.
            </li>
            <li>
              <strong>Stakeholders-chave:</strong> identificação das pessoas/áreas que precisam estar envolvidas.
            </li>
            <li>
              <strong>Próximos Passos:</strong> definição de quem fará o quê para chegar ao Gate G1 (ex.: elaboração do Charter e Business Case).
            </li>
          </ol>
        </section>

        <section className="content-card">
          <h2>
            <span role="img" aria-label="Pino">
              📌
            </span>{' '}
            Papel do PMO nesse Kickoff
          </h2>
          <ul>
            <li>
              <strong>Facilitador:</strong> garante que a reunião não vire discussão solta, mas siga agenda clara.
            </li>
            <li>
              <strong>Guardião do método:</strong> lembra todos que o objetivo é <strong>gerar insumos para o Charter</strong>, não resolver tudo de uma vez.
            </li>
            <li>
              <strong>Documentador:</strong> registra decisões e pendências no Bitrix24, vinculando ao intake.
            </li>
          </ul>
        </section>

        <section className="content-card">
          <h2>
            <span role="img" aria-label="Relógio">
              ⏱️
            </span>{' '}
            Duração típica
          </h2>
          <p>30 a 45 minutos → enxuto, só para abrir a Descoberta de forma organizada.</p>
        </section>

        <section className="content-card">
          <p>
            <span role="img" aria-label="Seta">
              ➡️
            </span>{' '}
            Em resumo: o <strong>Kickoff de Descoberta</strong> é como acender a lanterna no início da trilha — dá a direção, mostra os principais riscos e garante que todos entendam <strong>para onde estamos indo e por que</strong> antes de começar a desenhar o caminho detalhado.
          </p>
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
