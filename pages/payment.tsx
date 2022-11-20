import NEAROverlay from '@/components/NEAROverlay';
import Layout from '@/layout';

export default function Payment() {
  return (
    <Layout showHero={false}>
      <div className=" make-payment container h-screen">
        <NEAROverlay />
      </div>
    </Layout>
  );
}
