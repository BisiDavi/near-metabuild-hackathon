import Footer from '@/components/Footer';
import Header from '@/components/Header';

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
        <main className="container mx-auto py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
