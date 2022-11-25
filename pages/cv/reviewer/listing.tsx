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
          <>
            <h2 className="mt-4 text-center text-xl font-bold">
              Meet our reviewers
            </h2>
            <ul>
              {listing.map((item) => {
                return (
                  <li
                    key={item.name}
                    className="my-3 flex items-center rounded-lg border px-4 py-1 shadow hover:bg-gray-200"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mr-4 w-20 rounded-full"
                    />
                    <div className="content">
                      <h4>{item.fullName}</h4>
                      <h4>{item.email}</h4>
                      <h4>{item.intro}</h4>
                      <h4>{item.price} NEAR</h4>
                      <ul className="my-3 flex items-center">
                        {item.niche.map(
                          (nicheItem: { value: string; label: string }) => (
                            <li
                              key={nicheItem.value}
                              className="mr-2 rounded-lg border px-2 py-0"
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
          </>
        )}
      </section>
    </Layout>
  );
}
