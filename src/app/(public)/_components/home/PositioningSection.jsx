import Badge from '@/components/ui/Badge';
import Callout from '@/components/data-display/Callout';
import ContentCard from '@/components/data-display/ContentCard';

/**
 * Seção de posicionamento do PMO.
 */
export default function PositioningSection() {
  return (
    <ContentCard id="posicionamento" aria-labelledby="posicionamento-heading">
      <Badge>Posicionamento do PMO</Badge>
      <h2 id="posicionamento-heading">Centro estratégico de governança</h2>
      <p>
        O Escritório de Projetos da Educacross atua como a ponte entre estratégia e execução, garantindo que cada
        iniciativa da empresa seja planejada, executada e monitorada com disciplina e clareza.
      </p>
      <Callout>
        <ul>
          <li>Não é apenas execução operacional — planilhas, relatórios ou ajustes de documentos.</li>
          <li>É a área que conecta estratégia e execução, transformando iniciativas em resultados concretos.</li>
        </ul>
      </Callout>
    </ContentCard>
  );
}
