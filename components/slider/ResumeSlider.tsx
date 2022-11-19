/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Link from 'next/link';

import resumes from '@/json/resumes.json';
import '@splidejs/react-splide/css';

export default function ResumeSlider() {
  return (
    <Splide
      id="get-started"
      options={{
        autoplay: false,
        perPage: 3,
        gap: '2rem',
        perMove: 1,
        type: 'loop',
      }}
      aria-label="resumes"
      className="relative my-14 flex w-full bg-blue-400 p-10"
    >
      {resumes.map((item) => (
        <SplideSlide key={item.name}>
          <div className="resume-slide relative mx-auto flex flex-col items-center justify-center">
            <img src={item.image} alt={item.name} className="z-10 rounded-md" />
            <Link
              className="absolute z-40 mx-auto flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
              href={`/template/${item.name}`}
            >
              Use this Template
            </Link>
            <div className="absolute bottom-2 z-20 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
              Price: {item.price} NEAR
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
