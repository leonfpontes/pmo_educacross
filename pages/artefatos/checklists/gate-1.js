import Layout from '../../../src/components/layout/Layout';
import Callout from '../../../src/components/common/Callout';

const checklistSections = [
  {
    title: '🔹 1. Kickoff de Descoberta',
    items: [
      { id: 'kickoff-reuniao', content: 'Reunião de Kickoff realizada com stakeholders principais.' },
      { id: 'kickoff-atas', content: 'Atas registradas e compartilhadas no Bitrix/Drive.' },
      { id: 'kickoff-stakeholders', content: 'Stakeholders-chave mapeados e validados.' },
    ],
  },
  {
    title: '🔹 2. Artefatos Iniciais',
    items: [
      { id: 'artefatos-charter', content: 'Carta de Abertura do Projeto (Project Charter) elaborada.' },
      { id: 'artefatos-escopo', content: 'Escopo de Alto Nível definido (o que entra e o que não entra).' },
      { id: 'artefatos-okrs', content: 'Critérios de Sucesso / OKRs preliminares definidos.' },
      { id: 'artefatos-stakeholders', content: 'Mapa de Stakeholders criado e categorizado.' },
      {
        id: 'artefatos-business-case',
        content: 'Business Case preliminar elaborado (benefícios x custos x riscos).',
      },
    ],
  },
  {
    title: '🔹 3. Alinhamento Estratégico',
    items: [
      {
        id: 'alinhamento-estrategico',
        content:
          'Projeto vinculado a objetivo estratégico da Educacross (expansão, redução de custos, diferenciação pedagógica).',
      },
      { id: 'alinhamento-sponsor', content: 'Sponsor ciente e engajado.' },
      { id: 'alinhamento-publico', content: 'Público-alvo inicial validado (professores, escolas, parceiros).' },
    ],
  },
  {
    title: '🔹 4. Premissas e Restrições',
    items: [
      { id: 'premissas-restricoes', content: 'Restrições conhecidas registradas (financeiras, prazos, recursos).' },
      { id: 'premissas-dependencias', content: 'Dependências externas identificadas.' },
      { id: 'premissas-riscos', content: 'Riscos iniciais mapeados (visão macro).' },
    ],
  },
  {
    title: '🔹 5. Critério de Pronto para Planejamento (DoR)',
    items: [
      { id: 'dor-documentos', content: 'Documentos do G1 revisados e armazenados em repositório oficial.' },
      { id: 'dor-aprovacao', content: 'Aprovação formal do Sponsor.' },
      {
        id: 'dor-decisao',
        content: 'Decisão do Gate registrada:',
        subItems: [
          {
            id: 'dor-decisao-go',
            content: (
              <span>
                <strong>Go</strong> → Avança para Gate 2 (Planejamento Detalhado).
              </span>
            ),
          },
          {
            id: 'dor-decisao-hold',
            content: (
              <span>
                <strong>Hold</strong> → Aguardar mais informações.
              </span>
            ),
          },
          {
            id: 'dor-decisao-no-go',
            content: (
              <span>
                <strong>No-Go</strong> → Projeto encerrado.
              </span>
            ),
          },
        ],
      },
    ],
  },
];

const boasPraticas = [
  {
    id: 'rapido',
    content: (
      <span>
        O G1 deve ser <strong>rápido (1–2 semanas)</strong> → não aprofundar demais, só garantir clareza e alinhamento.
      </span>
    ),
  },
  {
    id: 'go',
    content: (
      <span>
        A decisão de <strong>Go</strong> significa que vale a pena investir tempo no detalhamento, não que o projeto já está
        garantido.
      </span>
    ),
  },
  {
    id: 'repositorio',
    content: (
      <span>
        Todos os artefatos devem estar disponíveis no <strong>repositório central (Bitrix/Drive)</strong> para rastreabilidade.
      </span>
    ),
  },
  {
    id: 'riscos',
    content: (
      <span>
        PMO deve sempre sinalizar <strong>riscos iniciais</strong> já no G1, para não deixar surpresas no G2.
      </span>
    ),
  },
];

const checklistBlocks = Array.from({ length: 2 }, (_, index) => index);

export default function ChecklistGate1Page() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Checklist - Gate 1 (Iniciação / Descoberta)</h1>
      </div>
    </header>
  );

  return (
    <Layout
      title="Checklist Gate 1 - PMO Educacross"
      description="Checklist completo para validar os critérios do Gate 1 (Iniciação/Descoberta) no PMO Educacross."
      hero={hero}
    >
      <article className="artifact-form">
        {checklistBlocks.map((blockIndex) => (
          <div key={`block-${blockIndex}`}>
            <section className="content-card">
              <p>
                <strong>Projeto:</strong> ____________________________________
              </p>
              <p>
                <strong>Sponsor:</strong> _________________________________
              </p>
              <p>
                <strong>Responsável (GP/PMO):</strong> ____________________
              </p>
              <p>
                <strong>Data:</strong> dd/mm/aaaa
              </p>
            </section>

            {checklistSections.map((section) => (
              <section key={`${section.title}-${blockIndex}`} className="content-card">
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={`${section.title}-${item.id}-${blockIndex}`}>
                      [ ]{' '}
                      {item.content}
                      {item.subItems ? (
                        <ul>
                          {item.subItems.map((subItem) => (
                            <li key={`${section.title}-${item.id}-${subItem.id}-${blockIndex}`}>{subItem.content}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section className="content-card">
              <Callout title="Boas práticas Educacross">
                <ul>
                  {boasPraticas.map((item) => (
                    <li key={item.id}>{item.content}</li>
                  ))}
                </ul>
              </Callout>
            </section>
          </div>
        ))}
      </article>
    </Layout>
  );
}
