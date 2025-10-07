import Link from 'next/link';

const VARIANT_CLASSNAMES = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
};

const EXTERNAL_LINK_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/**
 * Botão reutilizável que suporta renderização como link ou elemento de botão.
 */
export default function Button({ as: Component = 'button', children, className = '', href, variant = 'primary', ...props }) {
  const baseClassName = VARIANT_CLASSNAMES[variant] || VARIANT_CLASSNAMES.primary;
  const composedClassName = [baseClassName, className].filter(Boolean).join(' ');

  const hasHref = typeof href === 'string' ? href.trim().length > 0 : Boolean(href);

  if (hasHref) {
    const isStringHref = typeof href === 'string';
    const isHashLink = isStringHref && href.startsWith('#');
    const isExternalLink = isStringHref && EXTERNAL_LINK_PATTERN.test(href);

    if (!isExternalLink && !isHashLink) {
      return (
        <Link href={href} className={composedClassName} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={composedClassName} {...props}>
        {children}
      </a>
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
