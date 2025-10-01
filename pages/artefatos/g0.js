import Layout from '../../src/components/layout/Layout';
import Callout from '../../src/components/common/Callout';

export default function ArtefatoG0Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Artefatos — G0: Ficha de Triagem (Modelo)</h1>
      </div>
    </header>
  );

  const originOptions = [
    { id: 'diretoria', label: 'Diretoria' },
    { id: 'comercial', label: 'Comercial/Cliente' },
    { id: 'produto', label: 'Produto' },
    { id: 'operacoes', label: 'Operações' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'pedagogico', label: 'Pedagógico' },
    { id: 'outros', label: 'Outros' },
  ];

  const projectTypes = [
    { id: 'novo-contrato', label: 'Novo Contrato/Implantação Cliente' },
    { id: 'evento-educacross', label: 'Evento Educacross' },
    { id: 'evolucao-produto', label: 'Evolução de Produto' },
    { id: 'parceria', label: 'Parceria/Whitelabel' },
    { id: 'melhoria-interna', label: 'Melhoria Interna' },
  ];

  const complexityLevels = [
    { id: 'complexidade-baixa', label: 'Baixa' },
    { id: 'complexidade-media', label: 'Média' },
    { id: 'complexidade-alta', label: 'Alta' },
  ];

  const impactedAreas = [
    { id: 'area-produto', label: 'Produto' },
    { id: 'area-pedagogico', label: 'Pedagógico' },
    { id: 'area-tecnologia', label: 'Tecnologia' },
    { id: 'area-operacoes', label: 'Operações/Logística' },
    { id: 'area-marketing', label: 'Marketing' },
    { id: 'area-financeiro', label: 'Financeiro' },
    { id: 'area-juridico', label: 'Jurídico' },
    { id: 'area-suprimentos', label: 'Suprimentos' },
    { id: 'area-relacionamento', label: 'Relacionamento/CS' },
  ];

  const viabilityOptions = [
    { id: 'viavel', label: 'Sim, é viável seguir para Descoberta' },
    { id: 'nao-viavel', label: 'Não é viável (justificar abaixo)' },
  ];

  const decisionOptions = [
    { id: 'aprovado', label: 'Aprovado para Descoberta' },
    { id: 'postergar', label: 'Postergar' },
    { id: 'rejeitar', label: 'Rejeitar' },
  ];

  return (
    <Layout
      title="Artefatos G0 - Ficha de Triagem - PMO Educacross"
      description="Detalhes da Ficha de Triagem utilizada na fase G0 do PMO Educacross."
      hero={hero}
    >
      <form className="artifact-form">
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
          <div className="form-grid">
            <label className="form-field" htmlFor="nome-projeto">
              <span>Nome do Projeto/Demanda</span>
              <input id="nome-projeto" name="nomeProjeto" type="text" placeholder="Informe o título do projeto" />
            </label>
            <label className="form-field" htmlFor="sponsor">
              <span>Sponsor/Solicitante principal</span>
              <input id="sponsor" name="sponsor" type="text" placeholder="Nome do responsável" />
            </label>
            <label className="form-field" htmlFor="prazo-desejado">
              <span>Prazo desejado</span>
              <input id="prazo-desejado" name="prazoDesejado" type="date" />
            </label>
            <label className="form-field" htmlFor="canal-contato">
              <span>Canal de contato principal</span>
              <input
                id="canal-contato"
                name="canalContato"
                type="text"
                placeholder="E-mail, telefone ou outro canal"
              />
            </label>
          </div>

          <fieldset className="form-fieldset">
            <legend>Origem da demanda</legend>
            <p className="fieldset-helper">Selecione as áreas envolvidas na solicitação.</p>
            <div className="checkbox-grid">
              {originOptions.map((option) => (
                <label key={option.id} className="checkbox-item" htmlFor={`origem-${option.id}`}>
                  <input
                    id={`origem-${option.id}`}
                    name="origemDemanda"
                    type="checkbox"
                    value={option.label}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="form-field" htmlFor="descricao-objetivo">
            <span>Descrição do objetivo/benefício</span>
            <textarea
              id="descricao-objetivo"
              name="descricaoObjetivo"
              rows="4"
              placeholder="Resuma os ganhos esperados com a execução do projeto"
            />
          </label>
        </section>

        <section className="content-card">
          <h2>Classificação Inicial</h2>
          <p>O sponsor indica a natureza da demanda e o impacto estimado para apoiar a análise preliminar.</p>

          <div className="form-grid">
            <fieldset className="form-fieldset">
              <legend>Tipo de Projeto</legend>
              <div className="checkbox-grid">
                {projectTypes.map((option) => (
                  <label key={option.id} className="checkbox-item" htmlFor={`tipo-${option.id}`}>
                    <input id={`tipo-${option.id}`} name="tipoProjeto" type="checkbox" value={option.label} />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="form-fieldset">
              <legend>Complexidade Estimada</legend>
              <div className="checkbox-grid">
                {complexityLevels.map((option) => (
                  <label key={option.id} className="checkbox-item" htmlFor={option.id}>
                    <input id={option.id} name="complexidadeEstimada" type="checkbox" value={option.label} />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <fieldset className="form-fieldset">
            <legend>Áreas impactadas</legend>
            <div className="checkbox-grid checkbox-grid--three">
              {impactedAreas.map((option) => (
                <label key={option.id} className="checkbox-item" htmlFor={option.id}>
                  <input id={option.id} name="areasImpactadas" type="checkbox" value={option.label} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </section>

        <section className="content-card">
          <h2>Análise Preliminar (PMO)</h2>
          <p>
            O PMO consolida as informações recebidas, valida a aderência aos objetivos estratégicos e indica se a demanda
            deve avançar para a Descoberta.
          </p>

          <fieldset className="form-fieldset">
            <legend>Viabilidade inicial</legend>
            <div className="checkbox-grid">
              {viabilityOptions.map((option) => (
                <label key={option.id} className="checkbox-item" htmlFor={option.id}>
                  <input id={option.id} name="viabilidadeInicial" type="checkbox" value={option.label} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="form-field" htmlFor="justificativa">
            <span>Justificativa (quando não viável)</span>
            <textarea
              id="justificativa"
              name="justificativa"
              rows="4"
              placeholder="Descreva os motivos para não avançar com a demanda"
            />
          </label>

          <label className="form-field" htmlFor="observacoes-pmo">
            <span>Observações do PMO</span>
            <textarea
              id="observacoes-pmo"
              name="observacoesPmo"
              rows="4"
              placeholder="Registre riscos, premissas e informações complementares"
            />
          </label>
        </section>

        <section className="content-card">
          <h2>Decisão G0 (Comitê/PMO + Liderança)</h2>
          <p>
            Após a análise, o comitê registra formalmente o encaminhamento da demanda e evidencia os responsáveis pela
            aprovação.
          </p>

          <fieldset className="form-fieldset">
            <legend>Encaminhamento</legend>
            <div className="checkbox-grid">
              {decisionOptions.map((option) => (
                <label key={option.id} className="checkbox-item" htmlFor={`decisao-${option.id}`}>
                  <input id={`decisao-${option.id}`} name="decisaoG0" type="checkbox" value={option.label} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-grid">
            <label className="form-field" htmlFor="data-decisao">
              <span>Data da decisão</span>
              <input id="data-decisao" name="dataDecisao" type="date" />
            </label>
            <label className="form-field" htmlFor="aprovadores">
              <span>Aprovadores</span>
              <input id="aprovadores" name="aprovadores" type="text" placeholder="Informe os responsáveis" />
            </label>
          </div>

          <label className="form-field" htmlFor="detalhes-encaminhamento">
            <span>Detalhes do encaminhamento</span>
            <textarea
              id="detalhes-encaminhamento"
              name="detalhesEncaminhamento"
              rows="4"
              placeholder="Inclua os motivos da decisão e próximos passos"
            />
          </label>
        </section>

        <section className="content-card">
          <Callout title="Observação final">
            <p>
              Após a decisão, arquive a Ficha de Triagem no repositório oficial do PMO (Bitrix24 ou Drive) para manter a
              documentação do projeto organizada desde o primeiro gate.
            </p>
          </Callout>
        </section>
      </form>
    </Layout>
  );
}
