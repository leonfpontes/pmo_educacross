/**
 * Callout reutilizável para destacar listas e mensagens importantes.
 */
export default function Callout({ children, className = '', title, ...props }) {
  const classes = ['callout', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {title ? <h4>{title}</h4> : null}
      {children}
    </div>
  );
}
