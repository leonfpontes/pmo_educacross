import Link from 'next/link';

const flowSections = [
  {
    id: 'objetivo-principios',
    badge: '0',
    label: 'Objetivo',
    title: 'Objetivo e Princípios',
    content: (
      <>
        <p>
          Criar um fluxo único, claro e mensurável de ponta a ponta (da entrada à operação e encerramento) para todos os
          projetos Educacross, reduzindo custos operacionais, aumentando previsibilidade de entregas e suportando expansão.
        </p>
        <h3>Princípios</h3>
        <ul>
          <li>
            <strong>Uma Fonte de Verdade:</strong> Bitrix24 como orquestrador de tarefas/fluxos; dashboards (Looker/Metabase) para
            visão executiva.
          </li>
          <li>
            <strong>Governança com Stage Gates:</strong>{' '}
            decisões em pontos de controle (Gates G0→G4) para foco e eficiência.
          </li>
          <li>
            <strong>Semáforo Executivo Padrão:</strong> mesmo critério para status e riscos em todos os projetos.
          </li>
          <li>
            <strong>Artefatos Essenciais, não Burocracia:</strong> mínimos necessários, padronizados, reutilizáveis.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'papeis-macro',
    badge: '1',
    label: 'Papéis',
    title: 'Papéis Macro (RACI de alto nível)',
    content: (
      <>
        <ul>
          <li>
            <strong>Sponsor/Comitê Executivo (Diretoria, p.ex. Reginaldo):</strong> aprova visão, orçamento e Gates; remove
            impedimentos críticos.
          </li>
          <li>
            <strong>Liderança Operacional (p.ex. Raul):</strong> priorização operacional, capacidade, ganhos de eficiência.
          </li>
          <li>
            <strong>PMO (Leonardo):</strong> define método, garante governança, planeja/acompanha portfólio, reporta status e riscos,
            cobra decisões nos Gates.
          </li>
          <li>
            <strong>Gerente de Projeto (GP):</strong> planejamento detalhado, execução, gestão de riscos/issues, comunicação.
          </li>
          <li>
            <strong>Leads de Área:</strong> Produto (Maxwell), Pedagógico (Erica), Operações (Raul), Marketing, Tecnologia (Douglas e
            Matheus B.), Financeiro (Angelita), Jurídico (Angelita), Suprimentos (Darlete), Relacionamento/CS (Paula Maria), etc.
          </li>
        </ul>
        <blockquote>Nota: A RACI detalhada por projeto será derivada deste macro, no artefato “RACI do Projeto”.</blockquote>
      </>
    ),
  },
  {
    id: 'visao-pipeline',
    badge: '2',
    label: 'Pipeline',
    title: 'Visão Geral do Pipeline',
    content: (
      <>
        <p>
          <strong>Fases / Gates:</strong>
        </p>
        <ul className="link-list">
          <li>
            <strong>Intake / Triage → G0 (Aceitar para Descoberta?)</strong>
          </li>
          <li>
            <strong>Descoberta / Iniciação → G1 (Aprovar Charter/Business Case?)</strong>
          </li>
          <li>
            <strong>Planejamento Detalhado → G2 (Plano pronto para Execução?)</strong>
          </li>
          <li>
            <strong>Execução / Monitoramento → G3 (Liberar para Implantação?)</strong>
          </li>
          <li>
            <strong>Lançamento / Estabilização → G4 (Aprovar Encerramento?)</strong>
          </li>
          <li>
            <Link href="/stage-gates">
              <strong>O que são Stage&nbsp;Gates?</strong>
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'g0',
    badge: '3',
    label: 'G0',
    title: 'G0: Intake / Triage',
    content: (
      <>
        <p>
          <strong>Objetivo:</strong> Filtrar e priorizar demandas antes de consumir capacidade do time.
        </p>
        <h3>Atividades-chave</h3>
        <ol>
          <li>
            <strong>Canal único de entrada:</strong>{' '}
            <Link href="/artefatos/g0">formulário padrão (Ficha de Triagem)</Link> no Bitrix24 + backlog de iniciativas.
          </li>
          <li>
            <strong>Triagem semanal PMO + Liderança:</strong> classificação em Estratégico / Melhoria / Operacional.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/checklists/g0-triagem-intake">Checklist de prontidão</Link>:
            </strong>{' '}
            objetivos claros, patrocinador, valor esperado.
          </li>
        </ol>
        <h3>Saídas / Critérios para G1</h3>
        <ul>
          <li>Iniciativas priorizadas com sponsor designado.</li>
          <li>Estimativa macro de esforço/benefício.</li>
          <li>Decisão: segue para Descoberta ou retorna ao backlog.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'g1',
    badge: '4',
    label: 'G1',
    title: 'G1: Descoberta / Iniciação',
    content: (
      <>
        <p>
          <strong>Objetivo:</strong> Validar problema/oportunidade, hipóteses e viabilidade antes de grandes investimentos.
        </p>
        <h3>Atividades-chave</h3>
        <ol>
          <li>
            <strong>Discovery rápido:</strong> entrevistas com áreas, análise de dados, benchmark.
          </li>
          <li>
            <strong>Canvas de problema/objetivos:</strong> definição de sucesso, hipóteses críticas.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g1/carta-abertura">Charter</Link>/
              <Link href="/artefatos/g1/business-case">Business Case</Link> preliminar:
            </strong>{' '}
            objetivos, escopo macro, estimativa de investimento, riscos iniciais.
          </li>
          <li>
            <strong>RACI macro:</strong> sponsor, PM, áreas envolvidas, principais responsáveis.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g1/kickoff-descoberta">Kickoff Executivo (opcional)</Link>:
            </strong>{' '}
            alinhar expectativas com diretoria.
          </li>
        </ol>
        <h3>Saídas / Critérios para G2</h3>
        <ul>
          <li>
            <Link href="/artefatos/g1/carta-abertura">Charter</Link>/
            <Link href="/artefatos/g1/business-case">Business Case</Link> aprovado pela diretoria.
          </li>
          <li>Financiamento aprovado (se necessário) + estimativa inicial de ROI.</li>
          <li>Time núcleo definido (PM + leads de área).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'g2',
    badge: '5',
    label: 'G2',
    title: 'G2: Planejamento Detalhado',
    content: (
      <>
        <p>
          <strong>Objetivo:</strong> Construir plano executável, com escopo detalhado, cronograma, orçamento e estratégia de execução.
        </p>
        <h3>Atividades-chave</h3>
        <ol>
          <li>
            <strong>
              Plano do Projeto (
              <Link href="/artefatos/g2/eap-wbs">EAP/WBS</Link>,{' '}
              <Link href="/artefatos/g2/cronograma">Cronograma</Link>,{' '}
              <Link href="/artefatos/g2/orcamento-baseline">Orçamento Baseline</Link>
              ):
            </strong>{' '}
            escopo detalhado, entregáveis, milestones, orçamento, riscos, stakeholders.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g2/plano-comunicacao-detalhado">Plano de Comunicação</Link>:
            </strong>{' '}
            cadência de ritos, responsáveis, canais, templates.
          </li>
          <li>
            <strong>
              Plano de Entrega (
              <Link href="/artefatos/g2/plano-operacao-logistica">Operações &amp; Logística</Link> e{' '}
              <Link href="/artefatos/g2/plano-pedagogico-produto">Produto/Pedagógico</Link>
              ):
            </strong>{' '}
            detalhamento das ondas de execução, recursos necessários, integrações.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g2/plano-implantacao-rollback">Plano de Implantação</Link> (se aplicável):
            </strong>{' '}
            preparação de operações, treinamento, suporte.
          </li>
        </ol>
        <h3>Saídas / Critérios para G3</h3>
        <ul>
          <li>Plano aprovado pelo sponsor + diretoria.</li>
          <li>Recursos alocados (pessoas, orçamento, tecnologia).</li>
          <li>Riscos críticos endereçados com planos de resposta.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'g3',
    badge: '6',
    label: 'G3',
    title: 'G3: Execução / Monitoramento',
    content: (
      <>
        <p>
          <strong>Objetivo:</strong> Entregar escopo aprovado, monitorar indicadores e assegurar qualidade.
        </p>
        <h3>Atividades-chave</h3>
        <ol>
          <li>
            <strong>Ritos de acompanhamento:</strong> dailies/squads, semanal de execução, quinzenal executivo.
          </li>
          <li>
            <strong>Gestão de riscos/issues:</strong> registro, análise, plano de ação, escalonamento quando necessário.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g3/report-executivo">Status Report quinzenal</Link>:
            </strong>{' '}
            semáforo padrão (escopo, prazo, orçamento, riscos, próximos passos).
          </li>
          <li>
            <strong>Gestão de mudanças:</strong> avaliação de impactos, aprovação de sponsor, atualização de plano.
          </li>
        </ol>
        <h3>Saídas / Critérios para G4</h3>
        <ul>
          <li>Entregáveis concluídos e validados (critérios de aceite).</li>
          <li>
            <Link href="/artefatos/g2/plano-implantacao-rollback">Plano de lançamento/implantação</Link> aprovado.
          </li>
          <li>Riscos críticos mitigados ou com plano robusto.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'g4',
    badge: '7',
    label: 'G4',
    title: 'G4: Lançamento / Estabilização',
    content: (
      <>
        <p>
          <strong>Objetivo:</strong> Colocar solução em produção/mercado com handover estruturado e operação assistida.
        </p>
        <h3>Atividades-chave</h3>
        <ol>
          <li>
            <strong>
              Plano de Handover (
              <Link href="/artefatos/g4/termo-aceite-sponsor">Termo de Aceite do Sponsor</Link>
              ):
            </strong>{' '}
            transição para operações, documentação final, treinamento.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g4/runbook">Runbook/Playbook</Link>:
            </strong>{' '}
            procedimentos operacionais, SLAs, contatos de suporte.
          </li>
          <li>
            <strong>Monitoramento pós-lançamento:</strong> KPIs, indicadores de adoção/satisfação, correções rápidas.
          </li>
          <li>
            <strong>Reunião de Encerramento:</strong> validação de entregas, lições aprendidas, assinatura de{' '}
            <Link href="/artefatos/g4/relatorio-final-projeto">relatório final</Link> e{' '}
            <Link href="/artefatos/g4/termo-aceite-sponsor">termo de encerramento</Link>.
          </li>
        </ol>
        <h3>Saídas / Critérios para Pós-Projeto</h3>
        <ul>
          <li>Operação assumida pela área responsável.</li>
          <li>KPIs de estabilização acompanhados (30/60/90 dias).</li>
          <li>Plano de benefícios/ROI iniciado.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'pos-projeto',
    badge: '8',
    label: 'Pós-Projeto',
    title: 'Pós-Projeto / Benefícios',
    content: (
      <>
        <p>
          <strong>Objetivo:</strong> Garantir captura de valor, medir resultados e retroalimentar aprendizados.
        </p>
        <h3>Atividades-chave</h3>
        <ol>
          <li>
            <strong>
              <Link href="/artefatos/g4/avaliacao-beneficios">Follow-ups 30/60/90</Link>:
            </strong>{' '}
            monitorar KPIs, confirmar geração de valor, ajustar rota.
          </li>
          <li>
            <strong>
              <Link href="/artefatos/g4/avaliacao-beneficios">Relatório de Benefícios</Link>:
            </strong>{' '}
            ROI, ganhos financeiros/operacionais, indicadores qualitativos.
          </li>
          <li>
            <strong>Encerramento formal:</strong> aprovação da diretoria, arquivamento de artefatos, atualização de base de conhecimento com{' '}
            <Link href="/artefatos/g4/relatorio-final-projeto">relatório final</Link>.
          </li>
        </ol>
        <h3>Saídas</h3>
        <ul>
          <li>
            <Link href="/artefatos/g4/avaliacao-beneficios">Relatório de Benefícios</Link> assinado.
          </li>
          <li>Atualização do portfólio (pipeline) com status final e aprendizados.</li>
          <li>Inputs para melhoria contínua de metodologia.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'governanca-portfolio',
    badge: '9',
    label: 'Portfólio',
    title: 'Governança de Portfólio',
    content: (
      <>
        <ul>
          <li>
            <strong>Comitê de Portfólio (mensal):</strong> diretoria + PMO + líderes. Prioriza pipeline, resolve conflitos de capacidade, aprova Gates críticos.
          </li>
          <li>
            <strong>Dashboard Executivo:</strong> visão consolidada (status, riscos, ROI, próximos marcos).
          </li>
          <li>
            <strong>Rituais Operacionais:</strong> semanal/quinzenal com líderes para acompanhamento detalhado.
          </li>
          <li>
            <strong>Gestão de Demandas:</strong> triagem contínua, backlog priorizado, comunicação transparente.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'artefatos-por-area',
    badge: '10',
    label: 'Artefatos',
    title: 'Artefatos por Área',
    content: (
      <>
        <div className="flow-artifacts-grid">
          <article>
            <h3>PMO</h3>
            <ul>
              <li>
                <Link href="/artefatos/g4/runbook">Playbook do fluxo</Link>
              </li>
              <li>
                Modelos de{' '}
                <Link href="/artefatos/g1/carta-abertura">Charter</Link>,{' '}
                <Link href="/artefatos/g2">Plano de Projeto</Link>,{' '}
                <Link href="/artefatos/g3/report-executivo">Status Report</Link>
              </li>
              <li>Template de Comitê de Portfólio</li>
            </ul>
          </article>
          <article>
            <h3>Produto</h3>
            <ul>
              <li>Backlog priorizado, Discovery Canvas, Plano de Releases</li>
              <li>Matriz de impactos pedagógicos</li>
            </ul>
          </article>
          <article>
            <h3>Operações</h3>
            <ul>
              <li>
                <Link href="/artefatos/g2/plano-implantacao-rollback">Planos de implantação e suporte</Link>
              </li>
              <li>Rituais de operação assistida</li>
            </ul>
          </article>
          <article>
            <h3>Comercial/CS</h3>
            <ul>
              <li>
                <Link href="/artefatos/g3/plano-comunicacao">Planos de comunicação com clientes</Link>
              </li>
              <li>Scripts e playbooks de atendimento</li>
            </ul>
          </article>
          <article>
            <h3>Tecnologia</h3>
            <ul>
              <li>Roadmap técnico, documentação de integrações</li>
              <li>
                <Link href="/artefatos/g2/plano-implantacao-rollback">Plano de contingência</Link>
              </li>
            </ul>
          </article>
          <article>
            <h3>Financeiro/Jurídico</h3>
            <ul>
              <li>
                <Link href="/artefatos/g1/business-case">Análises de viabilidade</Link>,{' '}
                <Link href="/artefatos/g2/plano-juridico-contratos">contratos</Link>, compliance
              </li>
            </ul>
          </article>
        </div>
      </>
    ),
  },
  {
    id: 'bitrix',
    badge: '11',
    label: 'Bitrix24',
    title: 'Bitrix24 como Hub Operacional',
    content: (
      <>
        <ul>
          <li>Pipeline único com etapas por Gate (G0→G4) e automações.</li>
          <li>Templates de tarefas por etapa, checklists padronizados.</li>
          <li>Integração com dashboards executivos (Looker/Metabase).</li>
          <li>Alertas automáticos para riscos, prazos e aprovações pendentes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'politicas',
    badge: '12',
    label: 'Políticas',
    title: 'Políticas e Diretrizes',
    content: (
      <>
        <ul>
          <li>Todo projeto estratégico deve passar por G0 antes de consumir squads/times.</li>
          <li>Gate sem decisão em 5 dias úteis → escalonamento automático para diretoria.</li>
          <li>Alterações de escopo acima de 15% exigem revisão de Business Case.</li>
          <li>Artefatos mínimos obrigatórios para cada Gate (charter, plano, status report, handover, relatório de benefícios).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'implantacao',
    badge: '13',
    label: 'Implantação',
    title: 'Roadmap de Implantação',
    content: (
      <>
        <div className="flow-implementation">
          <article>
            <h3>Fase 1 — 0 a 30 dias</h3>
            <ul>
              <li>Implantação do fluxo G0→G4 no Bitrix24.</li>
              <li>Treinamento rápido com líderes de área + Squads.</li>
              <li>Criação do comitê executivo quinzenal.</li>
            </ul>
          </article>
          <article>
            <h3>Fase 2 — 30 a 60 dias</h3>
            <ul>
              <li>Integração com dashboards Looker/Metabase.</li>
              <li>Implantação dos artefatos padrão (charter, plano, status report, handover).</li>
              <li>Ritos de monitoramento consolidados.</li>
            </ul>
          </article>
          <article>
            <h3>Fase 3 — 60 a 90 dias</h3>
            <ul>
              <li>Operação assistida com squads (governança em produção).</li>
              <li>Dashboards executivos com indicadores de ROI.</li>
              <li>Retro contínua da metodologia + otimização de automações.</li>
            </ul>
          </article>
        </div>
      </>
    ),
  },
];

export default flowSections;
