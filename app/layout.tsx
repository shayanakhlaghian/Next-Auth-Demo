import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './providers';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Auth Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-200 text-gray-900`}>
        <Providers>
          <Header />
          <main className='mt-20'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
