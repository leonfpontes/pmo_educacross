import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

const approvalOptions = [
  { id: 'aprovado-planejamento', label: 'Aprovado para Planejamento Detalhado (G2)' },
  { id: 'postergar', label: 'Postergar' },
  { id: 'rejeitado', label: 'Rejeitado' },
];

export default function BusinessCasePage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>G1: Business Case</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Business Case G1 - PMO Educacross"
      description="Modelo de Business Case utilizado no Gate G1 do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <h2>Business Case – Educacross</h2>
          <p>
            <strong>ID do Projeto:</strong> [Lógica de Código]
          </p>
          <p>
            <strong>Data:</strong> [dd/mm/aaaa]
          </p>
          <p>
            <strong>Versão:</strong> 1.0
          </p>
        </section>

        <section className="content-card">
          <h3>1. Resumo Executivo</h3>
          <p>Breve descrição do projeto e da necessidade/oportunidade que ele atende.</p>
          <p>
            <span role="img" aria-label="Exemplo">
              ➡️
            </span>{' '}
            Exemplo: “A parceria Educacross &amp; Evolucional permitirá ampliar a base de clientes no segmento de leitura,
            com previsibilidade de receita e fortalecimento da marca.”
          </p>
        </section>

        <section className="content-card">
          <h3>2. Contexto e Problema/Oportunidade</h3>
          <ul>
            <li>Qual situação atual motiva o projeto?</li>
            <li>Qual problema precisa ser resolvido ou oportunidade explorada?</li>
            <li>Quais impactos se nada for feito?</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>3. Objetivos de Negócio</h3>
          <ul>
            <li>Objetivo 1: _________________________</li>
            <li>Objetivo 2: _________________________</li>
            <li>Objetivo 3: _________________________</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>4. Benefícios Esperados</h3>
          <ul>
            <li>Financeiros: (receita, redução de custo, ROI)</li>
            <li>Operacionais: (eficiência, padronização, escalabilidade)</li>
            <li>Pedagógicos/Qualidade: (impacto no aluno/professor, inovação)</li>
            <li>Reputacionais/Estratégicos: (fortalecimento de marca, entrada em novos mercados)</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>5. Alternativas Consideradas</h3>
          <ul>
            <li>Alternativa 1: Descrição + impactos.</li>
            <li>Alternativa 2: Descrição + impactos.</li>
            <li>Alternativa 3: Status quo (não fazer nada) – quais riscos traz?</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>6. Custos Estimados</h3>
          <ul>
            <li>Investimento inicial: R$ ________</li>
            <li>Custos operacionais recorrentes: R$ ________</li>
            <li>Custos indiretos/recursos internos: R$ ________</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>7. Riscos e Restrições</h3>
          <ul>
            <li>Riscos-chave: [LISTA]</li>
            <li>Restrições conhecidas: [LISTA]</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>8. Análise de Retorno</h3>
          <ul>
            <li>Payback estimado: ______ meses</li>
            <li>ROI estimado: ______ %</li>
            <li>Impacto estratégico não-financeiro: __________________________________</li>
          </ul>
        </section>

        <section className="content-card">
          <h3>9. Conclusão e Recomendação</h3>
          <p>Recomenda-se seguir com o projeto porque…</p>
          <p>
            <span role="img" aria-label="Exemplo">
              ➡️
            </span>{' '}
            Exemplo: “O investimento previsto tem payback de 12 meses, fortalece nossa entrada no mercado de municípios
            e se alinha à visão de expansão da Educacross.”
          </p>
        </section>

        <section className="content-card">
          <h3>10. Aprovação</h3>
          <fieldset className="form-fieldset">
            <legend>Decisão</legend>
            <div className="checkbox-grid">
              {approvalOptions.map((option) => (
                <label key={option.id} className="checkbox-item" htmlFor={option.id}>
                  <input id={option.id} name="aprovacao" type="checkbox" value={option.label} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-grid">
            <label className="form-field" htmlFor="data-aprovacao">
              <span>Data da Aprovação</span>
              <input id="data-aprovacao" name="dataAprovacao" type="date" />
            </label>
            <label className="form-field" htmlFor="assinatura-sponsor">
              <span>Sponsor</span>
              <input id="assinatura-sponsor" name="assinaturaSponsor" type="text" placeholder="Nome do sponsor" />
            </label>
            <label className="form-field" htmlFor="assinatura-diretoria">
              <span>Diretoria/Comitê</span>
              <input
                id="assinatura-diretoria"
                name="assinaturaDiretoria"
                type="text"
                placeholder="Nome da diretoria/comitê"
              />
            </label>
            <label className="form-field" htmlFor="assinatura-pmo">
              <span>PMO</span>
              <input id="assinatura-pmo" name="assinaturaPmo" type="text" placeholder="Nome do responsável do PMO" />
            </label>
          </div>
        </section>

        <section className="content-card">
          <Callout title="Nota">
            <p>
              O Business Case não precisa ser um livro — pode ser 1 a 3 páginas, dependendo da complexidade do projeto. O
              importante é documentar o raciocínio que justifica o investimento.
            </p>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
