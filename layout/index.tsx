import { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <Hero />
      <main className="mx-auto py-6">{children}</main>

      <Footer />
    </>
  );
}
