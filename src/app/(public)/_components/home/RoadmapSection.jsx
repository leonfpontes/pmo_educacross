import Badge from '@/components/ui/Badge';
import ContentCard from '@/components/data-display/ContentCard';
import TimelineStep from '@/components/data-display/TimelineStep';

/**
 * Seção do roadmap de 90 dias.
 */
export default function RoadmapSection() {
  return (
    <ContentCard id="roadmap">
      <Badge>Roadmap 90 Dias</Badge>
      <h2>Três ciclos de maturidade</h2>
      <div className="timeline">
        <TimelineStep title="0 – 30 dias">
          <ul>
            <li>Padronização mínima: modelo único de kickoff e status report.</li>
            <li>Mapeamento completo dos projetos ativos.</li>
          </ul>
        </TimelineStep>
        <TimelineStep title="30 – 60 dias">
          <ul>
            <li>Implementação de painel unificado no Metabase/Looker.</li>
            <li>Rituais de acompanhamento com líderes de área definidos.</li>
          </ul>
        </TimelineStep>
        <TimelineStep title="60 – 90 dias">
          <ul>
            <li>Criação do Comitê de Projetos Educacross (reunião mensal diretoria + PMO).</li>
            <li>Consolidação do fluxo único de gestão para todos os projetos.</li>
          </ul>
        </TimelineStep>
      </div>
    </ContentCard>
  );
}
