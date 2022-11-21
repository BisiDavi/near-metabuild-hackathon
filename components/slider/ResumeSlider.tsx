/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import useResume from '@/hooks/useResume';
import '@splidejs/react-splide/css';
import formatResumePrice from '@/lib/formatResumePrice';
import { useAppDispatch } from '@/hooks/useRedux';
import { selectResume } from '@/redux/resume-slice';
import Button from '@/components/Button';
import type { resumeStateType } from '@/types/redux-types';
import type { resumeType } from '@/types';
import selectSeeder from '@/lib/selectSeeder';

export default function ResumeSlider() {
  const { fetchResumes } = useResume();
  const { status, data } = useQuery(['fetchResumes'], fetchResumes);
  const router = useRouter();
  const dispatch = useAppDispatch();

  function selectResumeHandler(type: resumeStateType['selectedResume']) {
    const selectedSeeder = selectSeeder(type);
    dispatch(selectResume({ type, seeder: selectedSeeder }));
    router.push(`/template/${type}`);
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
                  <div className="resume-slide relative mx-auto flex flex-col items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="z-10 rounded-md"
                    />
                    <Button
                      className="absolute z-40 mx-auto flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
                      text="Use this Template"
                      onClick={() => selectResumeHandler(item.id)}
                    />
                    <div className="absolute bottom-2 z-20 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
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
