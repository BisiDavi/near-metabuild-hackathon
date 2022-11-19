/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import Button from '@/components/Button';
import resumes from '@/json/resumes.json';
import { useRouter } from 'next/navigation';

export default function ResumeSlider() {
  const router = useRouter();

  function onSelectResumeHandler(resumeName: string) {
    router.push(`/template/${resumeName}`);
  }

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
        {resumes.map((item) => (
          <SplideSlide key={item.name}>
            <div className="resume-slide relative mx-auto flex flex-col items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="z-10 rounded-md"
              />
              <Button
                className="absolute z-40 mx-auto flex items-center justify-center rounded-lg bg-blue-500 px-4 py-1 text-white hover:bg-opacity-80"
                onClick={() => onSelectResumeHandler(item.name)}
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
