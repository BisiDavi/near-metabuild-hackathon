/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Layout from '@/layout';
import RatingStar from '@/components/RatingStar';
import { getResume } from '@/lib/marketplace';
import formatResumePrice from '@/lib/formatResumePrice';

export default function Template() {
  const router = useRouter();
  const { id }: any = router.query;
  const { data, status } = useQuery([''], () => getResume(id), {
    enabled: !!id,
  });
  const [feedback, setFeedback] = useState('');

  const text =
    status === 'success' ? (data.bought > 1 ? 'people' : 'person') : '';
  const price = status === 'success' ? formatResumePrice(data.price) : 0;

  return (
    <Layout showHero={false}>
      <section className="template container mx-auto flex items-center">
        <div className="w-9/12">
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
        <div className="w-3/12">
          <h4>
            How was the template during usage, Rate this template and give us a
            feedback to earn 0.1 NEAR
          </h4>
          <RatingStar />
          <textarea
            value={feedback}
            placeholder="we will love to hear your feedback"
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
      </section>
    </Layout>
  );
}
