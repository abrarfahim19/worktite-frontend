import { NavBar } from '../components/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Worktite',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <section className='bg-[#F6F0EE]'>
          <nav>
            <NavBar />
          </nav>
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
