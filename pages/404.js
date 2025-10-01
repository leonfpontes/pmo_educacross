import Head from 'next/head';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Página não encontrada - PMO Educacross</title>
      </Head>
      <header className="page-header-minimal">
        <div className="page-header-minimal__inner">
          <h1>Página não encontrada</h1>
          <p className="page-header-minimal__lead">
            A rota acessada não existe. Utilize o menu principal ou retorne para a página inicial.
          </p>
        </div>
      </header>
      <main className="simple-page">
        <p>Use o menu principal ou o botão a seguir para retornar à página inicial.</p>
        <Link href="/" className="btn btn-primary">
          Voltar para Home
        </Link>
      </main>
    </>
  );
}
