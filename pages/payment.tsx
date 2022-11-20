import NEAROverlay from '@/components/NEAROverlay';
import Layout from '@/layout';

export default function Payment() {
  return (
    <Layout showHero={false}>
      <section className="bg-white make-payment container h-screen">
        <NEAROverlay />

      </section>
    </Layout>
  );
}
