import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <Hero />
        <main className="container mx-auto py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
