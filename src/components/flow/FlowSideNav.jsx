/**
 * Navegação lateral fixa utilizada para percorrer as etapas do fluxo.
 */
export default function FlowSideNav({ sections }) {
  return (
    <nav className="flow-side-nav" aria-label="Índice do fluxo">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a className="flow-side-link" href={`#${section.id}`} data-section={section.id}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
