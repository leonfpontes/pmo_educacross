/**
 * Selo circular utilizado nos títulos do fluxo para indicar a sequência das etapas.
 */
export default function SectionBadge({ as: Component = 'span', value, className = '', ...props }) {
  const classes = ['section-badge', className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {value}
    </Component>
  );
}
