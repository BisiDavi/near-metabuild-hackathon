import { useState } from 'react';
import StarIcon from '@/components/StarIcon';

export default function RatingStar() {
  const [ratings, setRatings] = useState(0);
  const ratingArray = new Array(5).fill(0);
  let className = '';

  function rateHandler(rateIndex: number) {
    setRatings(rateIndex);
  }

  return (
    <>
      {ratingArray.map((_, index) => {
        const ratingIndex = index + 1;
        className = ratings <= index && ratings !== 0 ? '' : 'fill-yellow-500';
        return (
          <button
            title={`${ratingIndex} star rating`}
            key={index}
            onClick={() => rateHandler(ratingIndex)}
          >
            <StarIcon className={`${className}`} />
          </button>
        );
      })}
    </>
  );
}
