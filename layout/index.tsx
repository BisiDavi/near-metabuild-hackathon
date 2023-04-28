import { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

interface Props {
  showHero?: boolean;
}

export default function Layout({
  children,
  showHero = true,
}: PropsWithChildren<Props>) {
  return (
    <>
      <Header />
      <main className="mx-auto py-6">
        {showHero && <Hero />}
        {children}
      </main>
      <Footer />
    </>
  );
}
