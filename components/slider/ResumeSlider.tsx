/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQuery } from '@tanstack/react-query';

import useResume from '@/hooks/useResume';
import type { resumeType } from '@/types';
import '@splidejs/react-splide/css';
import ResumeSliderItem from './ResumeSliderItem';

export default function ResumeSlider() {
  const { fetchResumes } = useResume();
  const { status, data } = useQuery(['fetchResumes'], fetchResumes);

  return (
    <div id="get-started" className="relative">
      <Splide
        options={{
          autoplay: false,
          perPage: 3,
          gap: '2rem',
          perMove: 1,
          type: 'loop',
        }}
        aria-label="resumes"
        className="my-14 flex w-full bg-blue-400 p-10"
      >
        {status === 'error'
          ? 'unable to fetch resumes'
          : status === 'loading'
          ? 'loading, fetching resumes ...'
          : data.map((item: resumeType) => (
              <SplideSlide key={item.name}>
                <ResumeSliderItem item={item} />
              </SplideSlide>
            ))}
      </Splide>
    </div>
  );
}
