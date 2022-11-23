import StarIcon from '@/components/StarIcon';

export default function RateResume() {
  const ratingArray = new Array(5).fill(0);
  return (
    <div className="flex items-center">
      {ratingArray.map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}
