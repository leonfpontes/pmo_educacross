import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default function Header() {
  const { asPath } = useRouter();
  const basePath = asPath.split('#')[0] || '/';

  const isActive = (href) => {
    if (href === '/') {
      return basePath === '/';
    }
    return basePath === href;
  };

  const isPhaseActive = phaseLinks.some((phase) => basePath === phase.href);
  const isInstrumentActive = basePath.startsWith('/instrumentos/');

  return (
    <div className="top-bar" role="navigation" aria-label="Menu principal">
      <Link href="/" className="brand" aria-label="PMO Educacross - Página inicial">
        <span>EC</span>
        PMO Educacross
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <Link
              href="/"
              className={`main-nav__link${isActive('/') ? ' active' : ''}`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/fluxo-pmo"
              className={`main-nav__link${isActive('/fluxo-pmo') ? ' active' : ''}`}
              aria-current={isActive('/fluxo-pmo') ? 'page' : undefined}
            >
              Fluxo PMO
            </Link>
          </li>
          <li className={`has-submenu${isPhaseActive ? ' active' : ''}`}>
            <span className="submenu-label" aria-haspopup="true" aria-expanded={isPhaseActive}>Fases</span>
            <ul className="submenu">
              {phaseLinks.map((phase) => (
                <li key={phase.href}>
                  <Link
                    href={phase.href}
                    className={`submenu__link${isActive(phase.href) ? ' active' : ''}`}
                    aria-current={isActive(phase.href) ? 'page' : undefined}
                  >
                    {phase.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={`has-submenu${isInstrumentActive ? ' active' : ''}`}>
            <span className="submenu-label" aria-haspopup="true" aria-expanded={isInstrumentActive}>
              Instrumentos
            </span>
            <ul className="submenu">
              {instrumentLinks.map((instrument) => (
                <li key={instrument.href}>
                  <Link
                    href={instrument.href}
                    className={`submenu__link${isActive(instrument.href) ? ' active' : ''}`}
                    aria-current={isActive(instrument.href) ? 'page' : undefined}
                  >
                    {instrument.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
      <div className="nav-actions">
        <Link href="/fluxo-pmo" className="btn btn-secondary">
          Roadmap 90 dias
        </Link>
      </div>
    </div>
  );
}
