import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__text">
          © {currentYear} Time de Projetos Educacross. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
