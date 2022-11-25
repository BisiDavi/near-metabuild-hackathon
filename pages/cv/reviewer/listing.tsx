/* eslint-disable @next/next/no-img-element */
import useFirebase from '@/hooks/useFirebase';
import Layout from '@/layout';
import { useQuery } from '@tanstack/react-query';

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
          <ul>
            {listing.map((item) => {
              return (
                <li key={item.name} className="my-3 rounded-lg border shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 rounded-full"
                  />
                  <div className="content">
                    <h4>{item.name}</h4>
                    <h4>{item.email}</h4>
                    <h4>{item.intro}</h4>
                    <ul className="my-3 flex items-center">
                      {item.niche.map(
                        (nicheItem: { value: string; label: string }) => (
                          <li
                            key={nicheItem.value}
                            className="mr-2 rounded-lg border"
                          >
                            {nicheItem.label}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </Layout>
  );
}
