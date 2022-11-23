import StarIcon from '@/components/StarIcon';

export default function RateResume() {
  const ratingArray = new Array(5).fill(0);
  return (
    <div>
      {ratingArray.map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}
