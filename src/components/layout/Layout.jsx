import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

/**
 * Layout component responsável por encapsular o cabeçalho, conteúdo principal e rodapé.
 */
export default function Layout({ children, description, headChildren, hero, mainClassName, title }) {
  const mainClass = ['page-main', mainClassName].filter(Boolean).join(' ');

  return (
    <>
      <Head>
        {title ? <title>{title}</title> : null}
        {description ? <meta name="description" content={description} /> : null}
        {headChildren}
      </Head>
      <Header />
      {hero}
      <main id="main-content" className={mainClass}>
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  description: undefined,
  headChildren: null,
  hero: null,
  mainClassName: '',
  title: undefined,
};
