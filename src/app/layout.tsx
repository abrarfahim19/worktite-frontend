import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { AuthProvider } from '@/config/provider/authProvider';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const raleway = Raleway({
  variable: '--display-font',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Worktite',
  description: 'A high performant website for furnicore',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={raleway.className}>
          <NextTopLoader
            color='#E55E2C'
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing='ease'
            speed={200}
            shadow='0 0 10px #E55E2C,0 0 5px #E55E2C'
          />
          <section className='bg-[#F6F0EE]'>
            <nav>
              <NavBar />
            </nav>
            <main className='mx-auto font-raleway'>{children}</main>
            <Footer />
          </section>

          <ToastContainer />
        </body>
      </AuthProvider>
    </html>
  );
}
