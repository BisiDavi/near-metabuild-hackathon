/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import Layout from '@/layout';
import { getResume } from '@/lib/marketplace';
import formatResumePrice from '@/lib/formatResumePrice';
import FeedbackForm from '@/components/form/FeedbackForm';

export default function Template() {
  const router = useRouter();
  const { id }: any = router.query;
  const { data, status } = useQuery(['getResume'], () => getResume(id), {
    enabled: !!id,
  });

  const text =
    status === 'success' ? (data.bought > 1 ? 'people' : 'person') : '';
  const price = status === 'success' ? formatResumePrice(data.price) : 0;

  return (
    <Layout showHero={false}>
      <section className="template container mx-auto my-4 flex items-start">
        <div className="w-9/12 px-2">
          {status === 'error' ? (
            'unable to fetch the resume template'
          ) : status === 'loading' ? (
            'fetching resume template'
          ) : (
            <div className="relative mx-3  flex w-full flex-col items-center justify-center rounded border">
              <img
                src={data.image}
                alt={data.name}
                className="z-10 rounded-md"
              />
              <div className="absolute bottom-2 z-10 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
                Price: {price} NEAR, {data.bought} {text} chose this template
              </div>
              <div className="absolute top-2 right-4 z-10 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
                {data.name}
              </div>
            </div>
          )}
        </div>
        <div className="w-3/12 px-4">
          <FeedbackForm />
        </div>
      </section>
    </Layout>
  );
}
