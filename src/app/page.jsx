import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import HomeContent, { metadata } from './(public)/home-content';

export { metadata };

export default function RootPage() {
  return (
    <div className="site-shell">
      <a href="#conteudo-principal" className="skip-to-content">
        Ir para o conteúdo principal
      </a>
      <SiteHeader />
      <main id="conteudo-principal" className="page-main page-main--with-hero">
        <HomeContent />
      </main>
      <SiteFooter />
    </div>
  );
}
