import { useRouter } from 'next/router';

import PaymentStatusNotification from '@/components/PaymentStatusNotification';
import Layout from '@/layout';

export default function PaymentStatus() {
  const router = useRouter();
  const status: any = router?.query?.status;
  const id: any = router?.query?.template;
  return (
    <Layout showHero={false}>
      <section className="paymentStatus container mx-auto h-screen ">
        {status && id && <PaymentStatusNotification status={status} id={id} />}
      </section>
    </Layout>
  );
}
