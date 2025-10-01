import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Página não encontrada - PMO Educacross</title>
      </Head>
      <header className="page-header-minimal">
        <Header />
      </header>
      <main className="simple-page">
        <h1>Página não encontrada</h1>
        <p>A rota acessada não existe. Utilize o menu principal ou retorne para a página inicial.</p>
        <Link href="/" className="btn btn-primary">
          Voltar para Home
        </Link>
      </main>
    </>
  );
}
