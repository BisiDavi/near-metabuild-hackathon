import NEAROverlay from '@/components/NEAROverlay';
import useResume from '@/hooks/useResume';
import Layout from '@/layout';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function Payment() {
  const { fetchResume } = useResume();
  const router = useRouter();
  const resumeId = router.asPath.split('&')[0].split('template=')[1];
  const { data, status } = useQuery(
    ['fetchResume'],
    () => fetchResume(resumeId),
    {
      enabled: !!resumeId,
    },
  );
  console.log('status', status, 'data', data);

  console.log('router', router);
  return (
    <Layout showHero={false}>
      <section className="make-payment container h-screen bg-white">
        <NEAROverlay />
      </section>
    </Layout>
  );
}
