import StarIcon from '@/components/StarIcon';

interface Props {
  ratings: number;
  setRatings: any;
}

export default function RatingStar({ ratings, setRatings }: Props) {
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
            type="button"
            onClick={() => rateHandler(ratingIndex)}
          >
            <StarIcon className={`${className}`} />
          </button>
        );
      })}
    </>
  );
}
