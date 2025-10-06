import './globals.css';
import { DM_Sans, Poppins } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['400', '500', '700'] });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['300', '400', '500', '600', '700'] });

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
    icon: '/favicon.ico',
  },
};

/**
 * @param {{ children: import('react').ReactNode }} props
 */
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
