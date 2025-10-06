/**
 * Navegação rápida exibida no topo do conteúdo principal.
 */
export default function FlowQuickNav({ sections }) {
  return (
    <nav className="flow-quick-nav" aria-label="Navegação pelas seções do fluxo">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} data-section={section.id}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
