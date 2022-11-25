/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import ReviewListing from '@/components/ReviewListing';
import useFirebase from '@/hooks/useFirebase';
import Layout from '@/layout';

export default function Listing() {
  const { readDbData } = useFirebase();
  const { data, status } = useQuery(['getReviewers'], () =>
    readDbData('/profiles'),
  );

  const listing = status === 'success' ? formatData(data) : [];

  console.log('listing', listing);
  function formatData(listing: string) {
    const listingValues = Object.values(listing);
    let listingArray: any[] = [];
    listingValues.map((item) => {
      const parsedListing = JSON.parse(item);
      listingArray.push(parsedListing);
    });
    return listingArray;
  }
  return (
    <Layout showHero={false}>
      <section className="listing container mx-auto h-screen">
        {status === 'error' ? (
          'error fetching reviewers...'
        ) : status === 'loading' ? (
          'fetching reviews'
        ) : (
          <>
            <h2 className="mt-4 text-center text-xl font-bold">
              Meet our reviewers
            </h2>
            <ul>
              {listing.map((item) => {
                return <ReviewListing key={item.email} item={item} />;
              })}
            </ul>
          </>
        )}
      </section>
    </Layout>
  );
}
