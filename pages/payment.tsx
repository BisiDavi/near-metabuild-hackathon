import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import NEAROverlay from '@/components/NEAROverlay';
import useResume from '@/hooks/useResume';
import Layout from '@/layout';

export default function Payment() {
  const { fetchResume, isUserSignedToNear } = useResume();
  const router = useRouter();
  const resumeId: any = router.query.template;
  const { data: nearData, status: nearStatus } = useQuery(
    ['isUserSignedToNear'],
    isUserSignedToNear,
  );
  const { data, status } = useQuery(
    ['fetchResume'],
    () => fetchResume(resumeId),
    {
      enabled: !!resumeId,
    },
  );
  console.log('status', status, 'data', data);

  return (
    <Layout showHero={false}>
      <section className="make-payment container h-screen bg-white">
        {nearStatus === 'error'
          ? 'error fetching near login status'
          : nearStatus === 'loading'
          ? 'loading...'
          : !nearData && <NEAROverlay />}
      </section>
    </Layout>
  );
}
