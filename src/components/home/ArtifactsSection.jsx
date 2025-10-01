import Badge from '../common/Badge';
import ContentCard from '../common/ContentCard';

/**
 * Seção com os artefatos essenciais para execução dos projetos.
 */
export default function ArtifactsSection() {
  return (
    <ContentCard id="artefatos">
      <Badge>Artefatos Essenciais</Badge>
      <h2>Kit mínimo para cada projeto</h2>
      <div className="double-column">
        <div>
          <h3>Planejamento</h3>
          <ul>
            <li>Charter/Business Case validado.</li>
            <li>Plano de Projeto com escopo, cronograma e orçamento.</li>
            <li>RACI macro e detalhado por entregável.</li>
          </ul>
        </div>
        <div>
          <h3>Execução e Monitoramento</h3>
          <ul>
            <li>Kanban no Bitrix24 com automações.</li>
            <li>Status Report quinzenal.</li>
            <li>Dashboard executivo com visão consolidada.</li>
          </ul>
        </div>
      </div>
    </ContentCard>
  );
}
