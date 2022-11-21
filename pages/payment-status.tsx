import PaymentStatusNotification from '@/components/PaymentStatusNotification';
import Layout from '@/layout';
import { useRouter } from 'next/router';

export default function PaymentStatus() {
  const router = useRouter();
  return (
    <Layout>
      <section className="paymentStatus">
        <PaymentStatusNotification status="success" />
      </section>
    </Layout>
  );
}
