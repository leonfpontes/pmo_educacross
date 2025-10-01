import Link from 'next/link';

const VARIANT_CLASSNAMES = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
};

/**
 * Botão reutilizável que suporta renderização como link ou elemento de botão.
 */
export default function Button({ as: Component = 'button', children, className = '', href, variant = 'primary', ...props }) {
  const baseClassName = VARIANT_CLASSNAMES[variant] || VARIANT_CLASSNAMES.primary;
  const composedClassName = [baseClassName, className].filter(Boolean).join(' ');

  if (href) {
    return (
      <Link href={href} className={composedClassName} {...props}>
        {children}
      </Link>
    );
  }

  const finalProps = { ...props };
  if (!('type' in finalProps) && Component === 'button') {
    finalProps.type = 'button';
  }

  return (
    <Component className={composedClassName} {...finalProps}>
      {children}
    </Component>
  );
}
