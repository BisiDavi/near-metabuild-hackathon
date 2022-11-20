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
          <div className="content flex h-full w-full items-center">
            <div className="flex h-full w-3/12 flex-col items-center justify-center bg-gray-500 px-4">
              <h4 className="text-center text-white">
                Thanks for using <span className="font-bold">Near-Resumé</span>{' '}
                in making your Resumé, make payment to download the resume
              </h4>
              <p className="my-4 font-bold text-red-500">
                Pay with NEAR testnet token
              </p>
              <Button
                text={`Make Payment of ${price} NEAR`}
                className="my-3 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-900"
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
