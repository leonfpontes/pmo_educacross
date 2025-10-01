import Badge from '../common/Badge';
import ContentCard from '../common/ContentCard';

/**
 * Seção de benefícios esperados.
 */
export default function BenefitsSection() {
  return (
    <ContentCard id="beneficios">
      <Badge>Benefícios Esperados</Badge>
      <h2>Eficiência imediata e escala sustentável</h2>
      <div className="double-column">
        <div>
          <h3>Eficiência — foco Raul</h3>
          <ul>
            <li>Redução de retrabalho e custos ocultos.</li>
            <li>Diminuição de tempo em controles dispersos.</li>
          </ul>
        </div>
        <div>
          <h3>Escalabilidade — foco Reginaldo</h3>
          <ul>
            <li>Portfólio com visão executiva em tempo real.</li>
            <li>Capacidade de priorização transparente.</li>
          </ul>
        </div>
      </div>
    </ContentCard>
  );
}
