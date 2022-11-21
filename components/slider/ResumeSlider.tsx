/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useQuery } from '@tanstack/react-query';
import Router from 'next/router';

import useResume from '@/hooks/useResume';
import Button from '@/components/Button';
import { useAppDispatch } from '@/hooks/useRedux';
import { selectResume } from '@/redux/resume-slice';
import formatResumePrice from '@/lib/formatResumePrice';
import selectSeeder from '@/lib/selectSeeder';
import type { resumeStateType } from '@/types/redux-types';
import type { resumeType } from '@/types';
import '@splidejs/react-splide/css';

export default function ResumeSlider() {
  const { fetchResumes } = useResume();
  const { status, data } = useQuery(['fetchResumes'], fetchResumes);
  const dispatch = useAppDispatch();

  function selectResumeHandler(type: resumeStateType['selectedResume']) {
    console.log('type', type);
    const selectedSeeder = selectSeeder(type);
    Router.push(`/template/${type}`);
    return dispatch(selectResume({ type, seeder: selectedSeeder }));
  }

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
          : data.map((item: resumeType) => {
              const price = formatResumePrice(item.price);
              return (
                <SplideSlide key={item.name}>
                  <div className="relative mx-auto flex flex-col items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="z-10 rounded-md"
                    />
                    <Button
                      className="absolute z-50 mx-auto flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
                      text="Use this Template"
                      onClick={() => selectResumeHandler(item.id)}
                    />
                    <div className="absolute bottom-2 z-10 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
                      Price: {price} NEAR
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
      </Splide>
    </div>
  );
}
