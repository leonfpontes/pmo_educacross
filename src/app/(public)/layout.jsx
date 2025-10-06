import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

/**
 * @param {{ children: import('react').ReactNode }} props
 */
export default function PublicLayout({ children }) {
  return (
    <div className="site-shell">
      <a href="#conteudo-principal" className="skip-to-content">
        Ir para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo-principal" className="page-main">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
