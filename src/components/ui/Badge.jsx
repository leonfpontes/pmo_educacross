/**
 * Badge genérico utilizado para destacar categorias de conteúdo.
 */
export default function Badge({ as: Component = 'span', children, className = '', variant = 'default', ...props }) {
  const baseClass = 'badge';
  const variantClass = variant !== 'default' ? `${baseClass}--${variant}` : '';
  const composedClassName = [baseClass, variantClass, className].filter(Boolean).join(' ');

  return (
    <Component className={composedClassName} {...props}>
      {children}
    </Component>
  );
}
