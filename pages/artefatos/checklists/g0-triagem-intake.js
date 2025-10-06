import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

const basicInformationItems = [
  'Nome do projeto definido.',
  'Área solicitante identificada.',
  'Sponsor inicial identificado.',
  'Responsável pela demanda (POC) indicado.',
];

const initialAlignmentItems = [
  'Problema ou oportunidade descrito em 2-3 linhas.',
  'Benefício esperado (qualitativo) identificado.',
  'Público-alvo inicial (quem será impactado).',
  'Aderência à estratégia Educacross (expansão, redução de custos, diferenciação).',
];

const assumptionsConstraintsItems = [
  'Prazos críticos conhecidos (se houver).',
  'Restrições financeiras ou de recursos apontadas.',
  'Dependências externas identificadas (parceiros, fornecedores).',
];

const feasibilityItems = [
  'Ficha de Triagem preenchida.',
  'Sponsor ciente da solicitação.',
  'Aprovação para iniciar Kickoff de Descoberta (G1).',
];

const gateDecisionItems = [
  { label: 'Go → Avança para Gate 1 (Iniciação).', emphasis: 'Go' },
  { label: 'Hold → Aguardar mais informações.', emphasis: 'Hold' },
  { label: 'No-Go → Não será tratado como projeto neste momento.', emphasis: 'No-Go' },
];

const bestPractices = [
  'Gate 0 deve ser rápido (máx. 2 dias úteis para triagem).',
  'O PMO atua como filtro, não como executor.',
  'A decisão de “Go” não significa que o projeto será aprovado, apenas que pode ser analisado no G1.',
  'Sempre registrar o resultado no repositório do portfólio (Bitrix/Drive).',
];

export default function ChecklistGateZeroTriagemIntakePage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Checklist – Gate 0 (Triagem / Intake)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Checklist Gate 0 Triagem Intake - PMO Educacross"
      description="Checklist de triagem para Gate 0 (Intake) do PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        <section className="content-card">
          <p>
            <strong>Projeto:</strong> ____________________________________
          </p>
          <p>
            <strong>Solicitante:</strong> _________________________________
          </p>
          <p>
            <strong>Data da Solicitação:</strong> dd/mm/aaaa
          </p>
          <p>
            <strong>Responsável pela Triagem (PMO):</strong> ____________________
          </p>
        </section>

        <section className="content-card">
          <h2>🔹 1. Informações Básicas</h2>
          <div className="checkbox-grid">
            {basicInformationItems.map((item) => (
              <label key={item} className="checkbox-item">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 2. Alinhamento Inicial</h2>
          <div className="checkbox-grid">
            {initialAlignmentItems.map((item) => (
              <label key={item} className="checkbox-item">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 3. Premissas &amp; Restrições</h2>
          <div className="checkbox-grid">
            {assumptionsConstraintsItems.map((item) => (
              <label key={item} className="checkbox-item">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 4. Viabilidade para Avançar</h2>
          <div className="checkbox-grid">
            {feasibilityItems.map((item) => (
              <label key={item} className="checkbox-item">
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="content-card">
          <h2>🔹 5. Decisão Gate 0</h2>
          <div className="checkbox-grid">
            {gateDecisionItems.map((item) => (
              <label key={item.label} className="checkbox-item">
                <input type="checkbox" />
                <span>
                  <strong>{item.emphasis}</strong> {item.label.replace(`${item.emphasis} → `, '→ ')}
                </span>
              </label>
            ))}
          </div>
        </section>

        <section className="content-card">
          <Callout title="Boas práticas Educacross">
            <ul>
              {bestPractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Callout>
        </section>
      </article>
    </Layout>
  );
}
