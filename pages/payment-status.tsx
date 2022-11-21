import PaymentStatusNotification from '@/components/PaymentStatusNotification';
import Layout from '@/layout';
import { useRouter } from 'next/router';

export default function PaymentStatus() {
  const router = useRouter();
  return (
    <Layout showHero={false}>
      <section className="paymentStatus container mx-auto h-screen ">
        <PaymentStatusNotification status="success" />
      </section>
    </Layout>
  );
}
