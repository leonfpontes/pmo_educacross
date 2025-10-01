import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function FluxoPMO() {
  const navContainerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('flow-body');
    return () => {
      document.body.classList.remove('flow-body');
    };
  }, []);

  useEffect(() => {
    const navContainer = navContainerRef.current;
    if (!navContainer) {
      return;
    }

    const navLinks = Array.from(navContainer.querySelectorAll('a[data-section]'));
    if (!navLinks.length) {
      return;
    }

    const sections = Array.from(
      new Set(
        navLinks
          .map((link) => {
            const sectionId = link.dataset.section || link.getAttribute('href').replace('#', '');
            const sectionEl = sectionId ? document.getElementById(sectionId) : null;
            if (sectionEl) {
              link.dataset.section = sectionId;
            }
            return sectionEl;
          })
          .filter(Boolean)
      )
    );

    if (!sections.length) {
      return;
    }

    const setActiveLink = (sectionId) => {
      navLinks.forEach((link) => {
        const isActive = link.dataset.section === sectionId;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -45% 0px',
      threshold: [0.25, 0.5, 0.75],
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveLink(visibleSections[0].target.id);
        return;
      }

      const aboveViewport = entries
        .filter((entry) => entry.boundingClientRect.top < 0)
        .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);

      if (aboveViewport.length > 0) {
        setActiveLink(aboveViewport[0].target.id);
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    const initialId = window.location.hash ? window.location.hash.substring(1) : sections[0].id;
    if (initialId) {
      setActiveLink(initialId);
    }

    const handleClick = (event) => {
      const sectionId = event.currentTarget.dataset.section;
      if (sectionId) {
        setActiveLink(sectionId);
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      observer.disconnect();
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
    };
  }, []);

  return (
    <>
      <Head>
        <title>Fluxo do PMO Educacross</title>
        <meta
          name="description"
          content="Detalhamento do fluxo integrado do PMO Educacross com governança baseada em Stage Gates."
        />
      </Head>
      <header className="flow-hero" role="banner">
        <div className="flow-topbar">
          <a className="flow-brand" href="https://educacross.com.br" target="_blank" rel="noopener noreferrer">
            <span className="flow-brand-mark">educacross</span>
            <span className="flow-brand-tag">PMO</span>
          </a>
        </div>

        <div className="flow-hero-main">
          <div className="flow-hero-text">
            <h1>Fluxo integrado do PMO Educacross</h1>
            <p>
              Fluxo de ponta a ponta para intake, planejamento, execução e acompanhamento dos projetos Educacross, com
              governança baseada em Stage Gates, automações no Bitrix24 e artefatos essenciais.
            </p>
            <ul className="flow-meta">
              <li>
                <strong>Versão:</strong> 1.0 • Set/2025
              </li>
              <li>
                <strong>Responsável:</strong> Leonardo Fonseca Pontes (PMO)
              </li>
              <li>
                <strong>Objetivo:</strong> Orquestrar estratégia, pessoas e tecnologia em um pipeline único.
              </li>
            </ul>
            <div className="flow-hero-stats">
              <div className="flow-stat">
                <span className="flow-stat-number">G0 → G4</span>
                <span className="flow-stat-label">Decisões por Stage Gate</span>
              </div>
              <div className="flow-stat">
                <span className="flow-stat-number">Bitrix24</span>
                <span className="flow-stat-label">Fonte única da verdade</span>
              </div>
              <div className="flow-stat">
                <span className="flow-stat-number">30/60/90</span>
                <span className="flow-stat-label">Ciclo de benefícios pós-projeto</span>
              </div>
            </div>
          </div>
          <aside className="flow-hero-card" aria-label="Resumo do fluxo">
            <h2>O que este fluxo garante</h2>
            <ul>
              <li>Demandas triadas com critérios claros antes de consumir capacidade.</li>
              <li>Planejamento integrado entre áreas com artefatos mínimos padronizados.</li>
              <li>Execução com ritos, semáforo executivo e automações no Bitrix24.</li>
              <li>Fechamento com handover, medição de benefícios e lições aprendidas.</li>
            </ul>
            <a className="btn btn-primary" href="#visao-pipeline">
              Ver etapas em detalhes
            </a>
          </aside>
        </div>
      </header>

      <div className="flow-main-layout" ref={navContainerRef}>
        <nav className="flow-side-nav" aria-label="Índice do fluxo">
          <ul>
            <li>
              <a className="flow-side-link" href="#objetivo-principios" data-section="objetivo-principios">
                Objetivo
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#papeis-macro" data-section="papeis-macro">
                Papéis
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#visao-pipeline" data-section="visao-pipeline">
                Pipeline
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#g0" data-section="g0">
                G0
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#g1" data-section="g1">
                G1
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#g2" data-section="g2">
                G2
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#g3" data-section="g3">
                G3
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#g4" data-section="g4">
                G4
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#pos-projeto" data-section="pos-projeto">
                Pós-Projeto
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#governanca-portfolio" data-section="governanca-portfolio">
                Portfólio
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#artefatos-por-area" data-section="artefatos-por-area">
                Artefatos
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#bitrix" data-section="bitrix">
                Bitrix24
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#politicas" data-section="politicas">
                Políticas
              </a>
            </li>
            <li>
              <a className="flow-side-link" href="#implantacao" data-section="implantacao">
                Implantação
              </a>
            </li>
          </ul>
        </nav>

        <div className="flow-main-content">
          <nav className="flow-quick-nav" aria-label="Navegação pelas seções do fluxo">
            <ul>
              <li>
                <a href="#objetivo-principios" data-section="objetivo-principios">
                  Objetivo
                </a>
              </li>
              <li>
                <a href="#papeis-macro" data-section="papeis-macro">
                  Papéis
                </a>
              </li>
              <li>
                <a href="#visao-pipeline" data-section="visao-pipeline">
                  Pipeline
                </a>
              </li>
              <li>
                <a href="#g0" data-section="g0">
                  G0
                </a>
              </li>
              <li>
                <a href="#g1" data-section="g1">
                  G1
                </a>
              </li>
              <li>
                <a href="#g2" data-section="g2">
                  G2
                </a>
              </li>
              <li>
                <a href="#g3" data-section="g3">
                  G3
                </a>
              </li>
              <li>
                <a href="#g4" data-section="g4">
                  G4
                </a>
              </li>
              <li>
                <a href="#pos-projeto" data-section="pos-projeto">
                  Pós-Projeto
                </a>
              </li>
              <li>
                <a href="#governanca-portfolio" data-section="governanca-portfolio">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#artefatos-por-area" data-section="artefatos-por-area">
                  Artefatos
                </a>
              </li>
              <li>
                <a href="#bitrix" data-section="bitrix">
                  Bitrix24
                </a>
              </li>
              <li>
                <a href="#politicas" data-section="politicas">
                  Políticas
                </a>
              </li>
              <li>
                <a href="#implantacao" data-section="implantacao">
                  Implantação
                </a>
              </li>
            </ul>
          </nav>

          <main className="flow-content">
            <section className="flow-section" id="objetivo-principios">
              <h2>
                <span className="section-badge">0</span>
                Objetivo e Princípios
              </h2>
              <p>
                Criar um fluxo único, claro e mensurável de ponta a ponta (da entrada à operação e encerramento) para todos os
                projetos Educacross, reduzindo custos operacionais, aumentando previsibilidade de entregas e suportando expansão.
              </p>
              <h3>Princípios</h3>
              <ul>
                <li>
                  <strong>Uma Fonte de Verdade:</strong> Bitrix24 como orquestrador de tarefas/fluxos; dashboards (Looker/Metabase)
                  para visão executiva.
                </li>
                <li>
                  <strong>
                    Governança com{' '}
                    <a
                      href="https://www.notion.so/O-que-s-o-Stage-Gates-277e9f3bb81e80589759c9043334eed4?pvs=21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stage Gates
                    </a>
                    :
                  </strong>{' '}
                  decisões em pontos de controle (Gates G0→G4) para foco e eficiência.
                </li>
                <li>
                  <strong>Semáforo Executivo Padrão:</strong> mesmo critério para status e riscos em todos os projetos.
                </li>
                <li>
                  <strong>Artefatos Essenciais, não Burocracia:</strong> mínimos necessários, padronizados, reutilizáveis.
                </li>
              </ul>
            </section>

            <section className="flow-section" id="papeis-macro">
              <h2>
                <span className="section-badge">1</span>
                Papéis Macro (RACI de alto nível)
              </h2>
              <ul>
                <li>
                  <strong>Sponsor/Comitê Executivo (Diretoria, p.ex. Reginaldo):</strong> aprova visão, orçamento e Gates; remove
                  impedimentos críticos.
                </li>
                <li>
                  <strong>Liderança Operacional (p.ex. Raul):</strong> priorização operacional, capacidade, ganhos de eficiência.
                </li>
                <li>
                  <strong>PMO (Leonardo):</strong> define método, garante governança, planeja/acompanha portfólio, reporta status e
                  riscos, cobra decisões nos Gates.
                </li>
                <li>
                  <strong>Gerente de Projeto (GP):</strong> planejamento detalhado, execução, gestão de riscos/issues, comunicação.
                </li>
                <li>
                  <strong>Leads de Área:</strong> Produto (Maxwell), Pedagógico (Erica), Operações (Raul), Marketing, Tecnologia
                  (Douglas e Matheus B.), Financeiro (Angelita), Jurídico (Angelita), Suprimentos (Darlete), Relacionamento/CS
                  (Paula Maria), etc.
                </li>
              </ul>
              <blockquote>
                Nota: A RACI detalhada por projeto será derivada deste macro, no artefato “RACI do Projeto”.
              </blockquote>
            </section>

            <section className="flow-section" id="visao-pipeline">
              <h2>
                <span className="section-badge">2</span>
                Visão Geral do Pipeline
              </h2>
              <p>
                <strong>Fases &amp; Gates:</strong>
              </p>
              <ul className="link-list">
                <li>
                  <a
                    href="https://www.notion.so/Fluxo-do-Escrit-rio-de-Projetos-PMO-Educacross-277e9f3bb81e80e5a81bc16554c44efa?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Intake &amp; Triage → G0 (Aceitar para Descoberta?)</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.notion.so/Fluxo-do-Escrit-rio-de-Projetos-PMO-Educacross-277e9f3bb81e80e5a81bc16554c44efa?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Descoberta &amp; Iniciação → G1 (Aprovar Charter/Business Case?)</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.notion.so/Fluxo-do-Escrit-rio-de-Projetos-PMO-Educacross-277e9f3bb81e80e5a81bc16554c44efa?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Planejamento Detalhado → G2 (Plano pronto para Execução?)</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.notion.so/Fluxo-do-Escrit-rio-de-Projetos-PMO-Educacross-277e9f3bb81e80e5a81bc16554c44efa?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Execução &amp; Monitoramento → G3 (Go/No-Go para Lançamento?)</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.notion.so/Fluxo-do-Escrit-rio-de-Projetos-PMO-Educacross-277e9f3bb81e80e5a81bc16554c44efa?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Lançamento &amp; Estabilização → G4 (Encerrar? Transferir à Operação?)</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.notion.so/Fluxo-do-Escrit-rio-de-Projetos-PMO-Educacross-277e9f3bb81e80e5a81bc16554c44efa?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Pós-Projeto &amp; Benefícios (30/60/90 dias)</strong>
                  </a>
                </li>
              </ul>
              <p>Cada Gate é um ponto de decisão que exige um conjunto mínimo de artefatos/condições para avançar.</p>
            </section>

            <section className="flow-section" id="g0">
              <h2>
                <span className="section-badge">3</span>
                G0: Intake &amp; Triage (Entrada de Demanda)
              </h2>
              <p>
                <strong>Objetivo:</strong> Registrar, padronizar e classificar toda demanda (interna, cliente, parceiro) antes de
                consumir capacidade.
              </p>
              <p>
                <strong>Entradas típicas:</strong> Comercial/Parcerias; Diretoria; Produto; Operações; CS; Melhoria interna.
              </p>
              <h3>Atividades-chave</h3>
              <ol>
                <li>
                  <a
                    href="https://www.notion.so/G0-Ficha-de-Triagem-277e9f3bb81e80d4bd9cddb3b2138d7c?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Ficha de Triagem (Bitrix):</strong>
                  </a>{' '}
                  cadastro único, com validações mínimas.
                </li>
                <li>
                  <strong>Classificação:</strong> tipo de demanda (projeto estratégico, melhoria contínua, manutenção), tamanho,
                  criticidade, impacto.
                </li>
                <li>
                  <strong>Painel de Prioridades:</strong> visão geral das demandas abertas, responsáveis e status (triagem, em
                  avaliação, aguardando decisão).
                </li>
              </ol>
              <h3>Saídas &amp; Critérios para G1</h3>
              <ul>
                <li>Demanda priorizada e aceita para Descoberta.</li>
                <li>Sponsor definido + PM designado (ou responsável pela descoberta).</li>
                <li>Informações mínimas validadas (escopo inicial, impacto, urgência).</li>
              </ul>
            </section>

            <section className="flow-section" id="g1">
              <h2>
                <span className="section-badge">4</span>
                G1: Descoberta &amp; Iniciação
              </h2>
              <p>
                <strong>Objetivo:</strong> Confirmar viabilidade estratégica e definir visão preliminar do projeto.
              </p>
              <h3>Atividades-chave</h3>
              <ol>
                <li>
                  <strong>Entrevistas e análises rápidas:</strong> entendimento do problema/oportunidade, impactos e benefícios.
                </li>
                <li>
                  <strong>Charter/Business Case preliminar:</strong> objetivos, escopo macro, estimativa de investimento, riscos
                  iniciais.
                </li>
                <li>
                  <strong>RACI macro:</strong> sponsor, PM, áreas envolvidas, principais responsáveis.
                </li>
                <li>
                  <strong>Kickoff Executivo (opcional):</strong> alinhar expectativas com diretoria.
                </li>
              </ol>
              <h3>Saídas &amp; Critérios para G2</h3>
              <ul>
                <li>Charter/Business Case aprovado pela diretoria.</li>
                <li>Financiamento aprovado (se necessário) + estimativa inicial de ROI.</li>
                <li>Time núcleo definido (PM + leads de área).</li>
              </ul>
            </section>

            <section className="flow-section" id="g2">
              <h2>
                <span className="section-badge">5</span>
                G2: Planejamento Detalhado
              </h2>
              <p>
                <strong>Objetivo:</strong> Construir plano executável, com escopo detalhado, cronograma, orçamento e estratégia de
                execução.
              </p>
              <h3>Atividades-chave</h3>
              <ol>
                <li>
                  <strong>Plano do Projeto:</strong> escopo detalhado, entregáveis, milestones, orçamento, riscos, stakeholders.
                </li>
                <li>
                  <strong>Plano de Comunicação:</strong> cadência de ritos, responsáveis, canais, templates.
                </li>
                <li>
                  <strong>Plano de Entrega:</strong> detalhamento das ondas de execução, recursos necessários, integrações.
                </li>
                <li>
                  <strong>Plano de Implantação (se aplicável):</strong> preparação de operações, treinamento, suporte.</li>
              </ol>
              <h3>Saídas &amp; Critérios para G3</h3>
              <ul>
                <li>Plano aprovado pelo sponsor + diretoria.</li>
                <li>Recursos alocados (pessoas, orçamento, tecnologia).</li>
                <li>Riscos críticos endereçados com planos de resposta.</li>
              </ul>
            </section>

            <section className="flow-section" id="g3">
              <h2>
                <span className="section-badge">6</span>
                G3: Execução &amp; Monitoramento
              </h2>
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
                  <strong>Status Report quinzenal:</strong> semáforo padrão (escopo, prazo, orçamento, riscos, próximos passos).
                </li>
                <li>
                  <strong>Gestão de mudanças:</strong> avaliação de impactos, aprovação de sponsor, atualização de plano.
                </li>
              </ol>
              <h3>Saídas &amp; Critérios para G4</h3>
              <ul>
                <li>Entregáveis concluídos e validados (critérios de aceite).</li>
                <li>Plano de lançamento/implantação aprovado.</li>
                <li>Riscos críticos mitigados ou com plano robusto.</li>
              </ul>
            </section>

            <section className="flow-section" id="g4">
              <h2>
                <span className="section-badge">7</span>
                G4: Lançamento &amp; Estabilização
              </h2>
              <p>
                <strong>Objetivo:</strong> Colocar solução em produção/mercado com handover estruturado e operação assistida.
              </p>
              <h3>Atividades-chave</h3>
              <ol>
                <li>
                  <strong>Plano de Handover:</strong> transição para operações, documentação final, treinamento.</li>
                <li>
                  <strong>Runbook/Playbook:</strong> procedimentos operacionais, SLAs, contatos de suporte.</li>
                <li>
                  <strong>Monitoramento pós-lançamento:</strong> KPIs, indicadores de adoção/satisfação, correções rápidas.</li>
                <li>
                  <strong>Reunião de Encerramento:</strong> validação de entregas, lições aprendidas, assinatura de termo de
                  encerramento.
                </li>
              </ol>
              <h3>Saídas &amp; Critérios para Pós-Projeto</h3>
              <ul>
                <li>Operação assumida pela área responsável.</li>
                <li>KPIs de estabilização acompanhados (30/60/90 dias).</li>
                <li>Plano de benefícios/ROI iniciado.</li>
              </ul>
            </section>

            <section className="flow-section" id="pos-projeto">
              <h2>
                <span className="section-badge">8</span>
                Pós-Projeto &amp; Benefícios
              </h2>
              <p>
                <strong>Objetivo:</strong> Garantir captura de valor, medir resultados e retroalimentar aprendizados.
              </p>
              <h3>Atividades-chave</h3>
              <ol>
                <li>
                  <strong>Follow-ups 30/60/90:</strong> monitorar KPIs, confirmar geração de valor, ajustar rota.
                </li>
                <li>
                  <strong>Relatório de Benefícios:</strong> ROI, ganhos financeiros/operacionais, indicadores qualitativos.
                </li>
                <li>
                  <strong>Encerramento formal:</strong> aprovação da diretoria, arquivamento de artefatos, atualização de base de
                  conhecimento.
                </li>
              </ol>
              <h3>Saídas</h3>
              <ul>
                <li>Relatório de Benefícios assinado.</li>
                <li>Atualização do portfólio (pipeline) com status final e aprendizados.</li>
                <li>Inputs para melhoria contínua de metodologia.</li>
              </ul>
            </section>

            <section className="flow-section" id="governanca-portfolio">
              <h2>
                <span className="section-badge">9</span>
                Governança de Portfólio
              </h2>
              <ul>
                <li>
                  <strong>Comitê de Portfólio (mensal):</strong> diretoria + PMO + líderes. Prioriza pipeline, resolve conflitos de
                  capacidade, aprova Gates críticos.
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
            </section>

            <section className="flow-section" id="artefatos-por-area">
              <h2>
                <span className="section-badge">10</span>
                Artefatos por Área
              </h2>
              <div className="flow-artifacts-grid">
                <article>
                  <h3>PMO</h3>
                  <ul>
                    <li>Playbook do fluxo</li>
                    <li>Modelos de Charter, Plano de Projeto, Status Report</li>
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
                    <li>Planos de implantação e suporte</li>
                    <li>Rituais de operação assistida</li>
                  </ul>
                </article>
                <article>
                  <h3>Comercial/CS</h3>
                  <ul>
                    <li>Planos de comunicação com clientes</li>
                    <li>Scripts e playbooks de atendimento</li>
                  </ul>
                </article>
                <article>
                  <h3>Tecnologia</h3>
                  <ul>
                    <li>Roadmap técnico, documentação de integrações</li>
                    <li>Plano de contingência</li>
                  </ul>
                </article>
                <article>
                  <h3>Financeiro/Jurídico</h3>
                  <ul>
                    <li>Análises de viabilidade, contratos, compliance</li>
                  </ul>
                </article>
              </div>
            </section>

            <section className="flow-section" id="bitrix">
              <h2>
                <span className="section-badge">11</span>
                Bitrix24 como Hub Operacional
              </h2>
              <ul>
                <li>Pipeline único com etapas por Gate (G0→G4) e automações.</li>
                <li>Templates de tarefas por etapa, checklists padronizados.</li>
                <li>Integração com dashboards executivos (Looker/Metabase).</li>
                <li>Alertas automáticos para riscos, prazos e aprovações pendentes.</li>
              </ul>
            </section>

            <section className="flow-section" id="politicas">
              <h2>
                <span className="section-badge">12</span>
                Políticas e Diretrizes
              </h2>
              <ul>
                <li>Todo projeto estratégico deve passar por G0 antes de consumir squads/times.</li>
                <li>Gate sem decisão em 5 dias úteis → escalonamento automático para diretoria.</li>
                <li>Alterações de escopo acima de 15% exigem revisão de Business Case.</li>
                <li>Artefatos mínimos obrigatórios para cada Gate (charter, plano, status report, handover, relatório de benefícios).</li>
              </ul>
            </section>

            <section className="flow-section" id="implantacao">
              <h2>
                <span className="section-badge">13</span>
                Roadmap de Implantação
              </h2>
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
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
