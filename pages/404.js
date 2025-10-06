import Link from 'next/link';
import Layout from '@/components/layout/SiteLayout';

export default function NotFoundPage() {
  const hero = (
    <header className="page-header-minimal">
      <div className="page-header-minimal__inner">
        <h1>Página não encontrada</h1>
        <p className="page-header-minimal__lead">
          A rota acessada não existe. Utilize o menu principal ou retorne para a página inicial.
        </p>
      </div>
    </header>
  );

  return (
    <Layout title="Página não encontrada - PMO Educacross" hero={hero}>
      <section className="simple-page">
        <p>Use o menu principal ou o botão a seguir para retornar à página inicial.</p>
        <Link href="/" className="btn btn-primary">
          Voltar para Home
        </Link>
      </section>
    </Layout>
  );
}
