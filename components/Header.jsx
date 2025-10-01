import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useId, useMemo, useState } from 'react';

const phaseLinks = [
  { href: '/g0', label: 'G0' },
  { href: '/g1', label: 'G1' },
  { href: '/g2', label: 'G2' },
  { href: '/g3', label: 'G3' },
  { href: '/g4', label: 'G4' },
];

const instrumentLinks = phaseLinks.map((phase) => ({
  href: `/instrumentos${phase.href}`,
  label: phase.label,
}));

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Fluxo PMO', href: '/fluxo-pmo' },
  {
    label: 'Fases',
    children: phaseLinks,
  },
  {
    label: 'Instrumentos',
    children: instrumentLinks,
  },
];

const CTA_LINK = { href: '/fluxo-pmo#objetivo-principios', label: 'Saiba Mais' };

export default function Header() {
  const router = useRouter();
  const basePath = router.asPath.split('#')[0] || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const submenuBaseId = useId();

  const isActive = (href) => {
    if (href === '/') {
      return basePath === '/';
    }
    return basePath === href;
  };

  const itemsWithActiveState = useMemo(
    () =>
      menuItems.map((item) => ({
        ...item,
        isActive: item.href ? isActive(item.href) : item.children?.some((child) => isActive(child.href)),
      })),
    [basePath]
  );

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [router.asPath]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleSubmenuToggle = (label) => {
    setOpenSubmenu((current) => (current === label ? null : label));
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <header className={`site-header${mobileMenuOpen ? ' is-open' : ''}`}>
      <div className="site-header__inner">
        <div className="site-header__brand">
          <Link href="/" className="brand-link" aria-label="PMO Educacross - Página inicial" onClick={handleLinkClick}>
            <span className="brand-mark" aria-hidden="true">
              EC
            </span>
            <span className="brand-text">PMO Educacross</span>
          </Link>
        </div>

        <nav className="site-nav" aria-label="Menu principal">
          <ul className="site-nav__list">
            {itemsWithActiveState.map((item, index) => {
              if (item.children?.length) {
                const submenuId = `${submenuBaseId}-${index}`;
                const isOpen = openSubmenu === item.label;
                return (
                  <li
                    key={item.label}
                    className={`site-nav__item has-submenu${item.isActive ? ' is-active' : ''}${isOpen ? ' is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="site-nav__toggle"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={submenuId}
                      onClick={() => handleSubmenuToggle(item.label)}
                    >
                      {item.label}
                    </button>
                    <ul id={submenuId} className="site-nav__submenu">
                      {item.children.map((child) => {
                        const active = isActive(child.href);
                        return (
                          <li key={child.href} className="site-nav__submenu-item">
                            <Link
                              href={child.href}
                              className={`site-nav__submenu-link${active ? ' is-active' : ''}`}
                              aria-current={active ? 'page' : undefined}
                              onClick={handleLinkClick}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.label} className={`site-nav__item${item.isActive ? ' is-active' : ''}`}>
                  <Link
                    href={item.href}
                    className={`site-nav__link${item.isActive ? ' is-active' : ''}`}
                    aria-current={item.isActive ? 'page' : undefined}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="site-nav__item site-nav__item--cta">
              <Link href={CTA_LINK.href} className="btn btn-secondary" onClick={handleLinkClick}>
                {CTA_LINK.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link href={CTA_LINK.href} className="btn btn-secondary" onClick={handleLinkClick}>
            {CTA_LINK.label}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={`${mobileMenuOpen ? 'Fechar' : 'Abrir'} menu de navegação`}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            <span className="menu-toggle__line" aria-hidden="true" />
            <span className="menu-toggle__line" aria-hidden="true" />
            <span className="menu-toggle__line" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="site-header__overlay" role="presentation" onClick={closeMobileMenu} />
    </header>
  );
}
