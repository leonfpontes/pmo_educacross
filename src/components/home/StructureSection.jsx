import Badge from '../common/Badge';
import Callout from '../common/Callout';
import ContentCard from '../common/ContentCard';

/**
 * Seção que apresenta a estrutura proposta do PMO.
 */
export default function StructureSection() {
  return (
    <ContentCard id="estrutura">
      <Badge>Estrutura Proposta</Badge>
      <h2>Governança, metodologia e ferramentas</h2>
      <div className="double-column">
        <div>
          <h3>Governança</h3>
          <ul className="custom-bullets">
            <li>Diretoria aprova projetos estratégicos e orçamentos.</li>
            <li>Times de Operações, Produto, Marketing e outros executam entregas.</li>
            <li>PMO coordena, acompanha e garante aderência metodológica.</li>
          </ul>
        </div>
        <div>
          <h3>Metodologia padrão</h3>
          <ul className="custom-bullets">
            <li>Kickoff → Planejamento → Execução → Monitoramento → Encerramento.</li>
          </ul>
          <Callout title="Instrumentos de gestão">
            <ul>
              <li>Bitrix24 para gestão operacional de atividades.</li>
              <li>Dashboards no Looker/Metabase com indicadores semaforizados.</li>
              <li>Status Report quinzenal com foco em prazos, riscos e próximos passos.</li>
            </ul>
          </Callout>
        </div>
      </div>
    </ContentCard>
  );
}
