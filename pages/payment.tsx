import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import NEAROverlay from '@/components/NEAROverlay';
import useResume from '@/hooks/useResume';
import Layout from '@/layout';
import Button from '@/components/Button';
import formatResumePrice from '@/lib/formatResumePrice';

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

  const price = status === 'success' ? formatResumePrice(data.price) : 0;

  return (
    <Layout showHero={false}>
      <section className="make-payment container mx-auto h-screen bg-white">
        {nearStatus === 'error'
          ? 'error fetching near login status'
          : nearStatus === 'loading'
          ? 'loading...'
          : !nearData && <NEAROverlay />}
        {status === 'error' ? (
          'unable to fetch payment details'
        ) : status === 'loading' ? (
          'loading, fetching payment details...'
        ) : (
          <div className="content flex w-full items-center">
            <div className="w-3/12">
              <h4>
                Thanks for using{' '}
                <span className="font-bold text-white">Near-Resume</span> in
                making your Resumé
              </h4>
              <Button
                text={`Make Payment of ${price}`}
                className="rounded bg-green-500 text-white"
                onClick={() => null}
              />
            </div>
            <div className="w-9/12"></div>
          </div>
        )}
      </section>
    </Layout>
  );
}
