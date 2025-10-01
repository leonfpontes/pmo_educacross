/**
 * Bloco de passo utilizado no roadmap de implantação.
 */
export default function TimelineStep({ children, title }) {
  return (
    <div className="timeline-step">
      <h4>{title}</h4>
      {children}
    </div>
  );
}
