'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useMemo, useState } from 'react';
import { mainNavigation } from '@/lib/navigation';

const getBasePath = (path) => path.split('#')[0] || '/';

export default function SiteHeader() {
  let pathname = null;

  if (typeof usePathname === 'function') {
    try {
      pathname = usePathname();
    } catch (error) {
      // `usePathname` is only supported in the App Router. When this header is rendered
      // inside the legacy Pages Router we fall back to location-based detection.
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn('SiteHeader: falling back to window.location for active link detection.', error);
      }
    }
  }
  const [resolvedPath, setResolvedPath] = useState(() => getBasePath(pathname ?? '/'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const submenuBaseId = useId();

  useEffect(() => {
    if (pathname) {
      setResolvedPath(getBasePath(pathname));
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    const handleRouteChange = () => {
      setResolvedPath(getBasePath(`${window.location.pathname}${window.location.search}` || '/'));
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pathname]);

  const itemsWithActiveState = useMemo(
    () =>
      mainNavigation.map((item) => ({
        ...item,
        isActive: item.href ? resolvedPath === item.href : item.children?.some((child) => resolvedPath === child.href),
      })),
    [resolvedPath]
  );

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

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

  const handleLinkClick = (href) => {
    if (href) {
      setResolvedPath(getBasePath(href));
    }
    closeMobileMenu();
  };

  return (
    <header className={`site-header${mobileMenuOpen ? ' is-open' : ''}`}>
      <div className="site-header__inner">
        <div className="site-header__brand">
          <Link
            href="/"
            className="brand-link"
            aria-label="PMO Educacross - Página inicial"
            onClick={() => handleLinkClick('/')}
          >
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
                        const childIsActive = resolvedPath === child.href;

                        return (
                          <li key={child.href} className="site-nav__submenu-item">
                            <Link
                              href={child.href}
                              className={`site-nav__submenu-link${childIsActive ? ' is-active' : ''}`}
                              aria-current={childIsActive ? 'page' : undefined}
                              onClick={() => handleLinkClick(child.href)}
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
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__actions">
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
