import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Providerlayout from '@/providers/ProviderLayout';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providerlayout>
          <Header />
          <Hero />
          <main className="container mx-auto py-6">{children}</main>
          <Footer />
        </Providerlayout>
      </body>
    </html>
  );
}
