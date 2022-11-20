import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import NEAROverlay from '@/components/NEAROverlay';
import useResume from '@/hooks/useResume';
import Layout from '@/layout';

export default function Payment() {
  const { fetchResume, isUserSignedToNear } = useResume();
  const router = useRouter();
  const resumeId = router.asPath.split('&')[0].split('template=')[1];
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
  console.log('status', nearStatus, 'data', nearData);
  console.log('router', router);
  
  return (
    <Layout showHero={false}>
      <section className="make-payment container h-screen bg-white">
        <NEAROverlay />
      </section>
    </Layout>
  );
}
