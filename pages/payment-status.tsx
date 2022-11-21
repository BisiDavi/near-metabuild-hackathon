import { useRouter } from 'next/router';

import PaymentStatusNotification from '@/components/PaymentStatusNotification';
import Layout from '@/layout';

export default function PaymentStatus() {
  const router = useRouter();
  console.log('router', router);
  return (
    <Layout showHero={false}>
      <section className="paymentStatus container mx-auto h-screen ">
        <PaymentStatusNotification status="success" />
      </section>
    </Layout>
  );
}
