import Head from 'next/head';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

/**
 * Shell responsável por estruturar páginas renderizadas via Pages Router.
 * No App Router utilizamos o layout compartilhado em src/app/(public)/layout.jsx.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.description]
 * @param {React.ReactNode} [props.headChildren]
 * @param {React.ReactNode} [props.hero]
 * @param {string} [props.mainClassName]
 * @param {string} [props.title]
 */
export default function SiteLayout({
  children,
  description,
  headChildren,
  hero,
  mainClassName,
  title,
}) {
  const mainClass = ['page-main', mainClassName].filter(Boolean).join(' ');

  return (
    <>
      <Head>
        {title ? <title>{title}</title> : null}
        {description ? <meta name="description" content={description} /> : null}
        {headChildren}
      </Head>
      <div className="site-shell">
        <a href="#conteudo-principal" className="skip-to-content">
          Ir para o conteúdo principal
        </a>
        <SiteHeader />
        {hero}
        <main id="conteudo-principal" className={mainClass}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

SiteLayout.defaultProps = {
  description: undefined,
  headChildren: null,
  hero: null,
  mainClassName: '',
  title: undefined,
};
