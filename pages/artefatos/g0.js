import Layout from '../../src/components/layout/Layout';
import Callout from '../../src/components/common/Callout';

export default function ArtefatoG0Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G0: Ficha de Triagem</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Artefatos G0 - Ficha de Triagem - PMO Educacross"
      description="Detalhes da Ficha de Triagem utilizada na fase G0 do PMO Educacross."
      hero={hero}
    >
      <section className="content-card">
        <h2>Introdução</h2>
        <p>
          A Ficha de Triagem é o primeiro documento oficial registrado no Gate G0 e consolida as informações
          essenciais de uma nova demanda. Com ela, o PMO e a liderança conseguem avaliar rapidamente o contexto,
          entender o benefício esperado e decidir se a iniciativa deve seguir para a fase de Descoberta.
        </p>
        <p>
          Utilize este artefato sempre que surgir uma nova solicitação. Quanto mais completa estiver, mais ágil será a
          análise do comitê e a priorização do portfólio.
        </p>
      </section>

      <section className="content-card">
        <h2>Dados Básicos</h2>
        <p>Registre as informações fundamentais da demanda para facilitar o contato e o entendimento inicial.</p>
        <ul className="custom-bullets">
          <li>
            <strong>Nome do Projeto/Demanda:</strong> título que identifique claramente o escopo.
          </li>
          <li>
            <strong>Origem da demanda:</strong> selecione a área responsável (Diretoria, Comercial/Cliente, Produto,
            Operações, Marketing, Pedagógico ou Outro).
          </li>
          <li>
            <strong>Sponsor/Solicitante principal:</strong> responsável por defender a iniciativa junto ao comitê.
          </li>
          <li>
            <strong>Prazo desejado:</strong> expectativa inicial de entrega ou janela crítica para implantação.
          </li>
          <li>
            <strong>Descrição do objetivo/benefício:</strong> resumo dos ganhos esperados com a execução do projeto.
          </li>
        </ul>
      </section>

      <section className="content-card">
        <h2>Classificação Inicial</h2>
        <p>O sponsor indica a natureza da demanda e o impacto estimado para apoiar a análise preliminar.</p>
        <div className="double-column">
          <div>
            <h3>Tipo de Projeto</h3>
            <ul className="custom-bullets">
              <li>Novo Contrato/Implantação Cliente</li>
              <li>Evento Educacross</li>
              <li>Evolução de Produto</li>
              <li>Parceria/Whitelabel</li>
              <li>Melhoria Interna</li>
            </ul>
          </div>
          <div>
            <h3>Complexidade Estimada</h3>
            <ul className="custom-bullets">
              <li>Baixa</li>
              <li>Média</li>
              <li>Alta</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Áreas impactadas</h3>
          <ul className="custom-bullets">
            <li>Produto</li>
            <li>Pedagógico</li>
            <li>Tecnologia</li>
            <li>Operações/Logística</li>
            <li>Marketing</li>
            <li>Financeiro</li>
            <li>Jurídico</li>
            <li>Suprimentos</li>
            <li>Relacionamento/CS</li>
          </ul>
        </div>
      </section>

      <section className="content-card">
        <h2>Análise Preliminar (PMO)</h2>
        <p>
          O PMO consolida as informações recebidas, valida a aderência aos objetivos estratégicos e indica se a demanda
          deve avançar para a Descoberta.
        </p>
        <ul className="custom-bullets">
          <li>
            <strong>Viabilidade inicial:</strong> selecione{' '}
            <em>Sim, é viável seguir para Descoberta</em> ou{' '}
            <em>Não é viável – justificar</em>, registrando os motivos quando aplicável.
          </li>
          <li>
            <strong>Observações:</strong> utilize este espaço para apontar riscos percebidos, premissas críticas ou
            informações complementares coletadas junto ao solicitante.
          </li>
        </ul>
      </section>

      <section className="content-card">
        <h2>Decisão G0 (Comitê/PMO + Liderança)</h2>
        <p>
          Após a análise, o comitê registra formalmente o encaminhamento da demanda e evidencia os responsáveis pela
          aprovação.
        </p>
        <ul className="custom-bullets">
          <li>Aprovado para Descoberta (G1 – Iniciação).</li>
          <li>Postergar (incluir motivo).</li>
          <li>Rejeitado (incluir motivo).</li>
        </ul>
        <p>
          Complete também os campos de apoio: <strong>Data da decisão</strong> e <strong>Aprovadores</strong>, garantindo a
          rastreabilidade do processo.
        </p>
      </section>

      <section className="content-card">
        <Callout title="Observação final">
          <p>
            Após a decisão, arquive a Ficha de Triagem no repositório oficial do PMO (Bitrix24 ou Drive) para manter a
            documentação do projeto organizada desde o primeiro gate.
          </p>
        </Callout>
      </section>
    </Layout>
  );
}
