/* eslint-disable @next/next/no-img-element */
import NEAROverlay from '@/components/NEAROverlay';
import Layout from '@/layout';
import Button from '@/components/Button';
import usePayment from '@/hooks/usePayment';

export default function Payment() {
  const { price, nearData, nearStatus, data, status, mutation } = usePayment();

  return (
    <Layout showHero={false}>
      <section className="make-payment container mx-auto h-screen bg-white">
        {nearStatus === 'error'
          ? 'error fetching near login status'
          : nearStatus === 'loading'
          ? 'loading...'
          : !nearData && <NEAROverlay />}
        {status === 'error'
          ? 'unable to fetch payment details'
          : status === 'loading'
          ? 'loading, fetching payment details...'
          : data && (
              <div className="content flex h-full w-full items-center">
                <div className="flex h-full w-4/12 flex-col items-center justify-center bg-gray-500 px-4">
                  <h4 className="text-center text-white">
                    Thanks for using {data.name} template from{' '}
                    <span className="font-bold">Near-Resumé</span> in making
                    your Resumé, make payment to download the resume
                  </h4>
                  <p className="my-4 font-bold text-red-300">
                    Pay with NEAR testnet token
                  </p>
                  <Button
                    text={`Make Payment of ${price} NEAR`}
                    className="my-3 rounded bg-green-500 px-2 py-1 text-white hover:bg-green-900"
                    onClick={() =>
                      mutation.mutate({ id: data.id, price: data.price })
                    }
                  />
                </div>
                <div className="w-8/12">
                  <img src="/near-banner.webp" className='h-full w-full' alt="near" />
                </div>
              </div>
            )}
      </section>
    </Layout>
  );
}
