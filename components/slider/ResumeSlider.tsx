import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

import '@splidejs/react-splide/css';

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
  return (
    <Splide
      options={{ rewind: true, autoplay: true }}
      aria-label="our cocktails"
      className="container mx-auto my-10 flex items-center justify-center"
    >
      {resumeImages.map((item) => (
        <SplideSlide key={item.name}>
          <Image
            src={item.image}
            alt={item.name}
            className="-ml-14 lg:-ml-40"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
