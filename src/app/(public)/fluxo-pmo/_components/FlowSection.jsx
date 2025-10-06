import SectionBadge from '@/components/ui/SectionBadge';

/**
 * Seção reutilizável do fluxo, com selo numérico e conteúdo personalizado.
 */
export default function FlowSection({ badge, children, id, title }) {
  return (
    <section className="flow-section" id={id}>
      <h2>
        <SectionBadge value={badge} />
        {title}
      </h2>
      {children}
    </section>
  );
}
