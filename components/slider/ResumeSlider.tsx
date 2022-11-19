/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState } from 'react';

import '@splidejs/react-splide/css';
import Button from '@/components/Button';
import Link from 'next/link';

const resumeImages = [
  {
    image:
      'https://res.cloudinary.com/verrb-inc/image/upload/v1668870626/near-resume/resume-1_brqgaa.webp',
    price: 2,
    name: 'resume-1',
  },
  {
    image:
      'https://res.cloudinary.com/verrb-inc/image/upload/v1668870626/near-resume/resume-2_swhdv4.webp',
    price: 2,
    name: 'resume-2',
  },
  {
    image:
      'https://res.cloudinary.com/verrb-inc/image/upload/v1668870625/near-resume/resume-3_lss8gt.webp',
    price: 2,
    name: 'resume-3',
  },
];

export default function ResumeSlider() {
  const [selectedResume, setSelectedResume] = useState('');
  return (
    <a id="get-started">
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
        {resumeImages.map((item) => (
          <SplideSlide key={item.name}>
            <div className="resume-slide relative mx-auto flex flex-col items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="z-10 rounded-md"
              />
              <Button
                className="absolute z-40 mx-auto flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
                onClick={() => null}
                text="Use this Template"
              />
              <div className="absolute bottom-2 z-20 rounded-md bg-gray-400 px-2 py-0.5 text-sm text-white">
                Price: {item.price} NEAR
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </a>
  );
}
