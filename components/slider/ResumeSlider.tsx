import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';

import useResume from '@/hooks/useResume';
import ResumeSliderItem from '@/components/slider/ResumeSliderItem';
import ResumeSlideLoader from '@/components/loader/ResumeSlideLoader';
import type { resumeType } from '@/types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ResumeSlider() {
  const { fetchResumes } = useResume();
  const { status, data } = useQuery(['fetchResumes'], fetchResumes);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="get-started" className="resume-grid relative lg:my-6 mt-6 mb-20">
      {status === 'error' ? (
        'unable to fetch resumes'
      ) : status === 'loading' ? (
        <ResumeSlideLoader />
      ) : (
        <Slider {...settings}>
          {data.map((item: resumeType) => (
            <ResumeSliderItem key={item.name} item={item} />
          ))}
        </Slider>
      )}
    </div>
  );
}
