import ReviewListing from '@/components/ReviewListing';

export default function ReviewProfile({ formattedProfile }: any) {
  return (
    <div>
      {formattedProfile.length > 0 && (
        <>
          <h4 className="text-center text-xl font-bold">Profile Details</h4>
          {formattedProfile.map((item: any) => (
            <ReviewListing key={item.email} item={item} />
          ))}
        </>
      )}
    </div>
  );
}
