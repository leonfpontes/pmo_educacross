import './globals.css';
import logoBelinha from '@/img/Logo_Belinha.png';

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://pmo-educacross.vercel.app'),
  title: {
    default: 'PMO Educacross',
    template: '%s | PMO Educacross',
  },
  description:
    'Visão geral do PMO Educacross, com governança, metodologia, artefatos essenciais e roadmap de implantação.',
  icons: {
    icon: logoBelinha.src,
  },
};

/**
 * @param {{ children: import('react').ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
