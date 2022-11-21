import { useQuery } from '@tanstack/react-query';
import Slider from 'react-slick';

import useResume from '@/hooks/useResume';
import ResumeSliderItem from '@/components/slider/ResumeSliderItem';
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
  };

  console.log('data', data);

  return (
    <div id="get-started" className="resume-grid relative my-6">
      {data && (
        <Slider {...settings}>
          {status === 'error'
            ? 'unable to fetch resumes'
            : status === 'loading'
            ? 'loading, fetching resumes ...'
            : data.map((item: resumeType) => (
                <ResumeSliderItem key={item.name} item={item} />
              ))}
        </Slider>
      )}
    </div>
  );
}
