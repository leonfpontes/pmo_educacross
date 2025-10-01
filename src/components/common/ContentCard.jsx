/**
 * Wrapper padrão para seções de conteúdo presentes na home.
 */
export default function ContentCard({ as: Component = 'section', children, className = '', id, ...props }) {
  const classes = ['content-card', className].filter(Boolean).join(' ');

  return (
    <Component id={id} className={classes} {...props}>
      {children}
    </Component>
  );
}
