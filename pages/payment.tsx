/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
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
              <div className="content payment-view flex h-full w-full items-center">
                <div className="mx-auto  flex h-full w-3/4 flex-col items-center justify-center">
                  <h4 className="text-center text-4xl text-white">
                    Thanks for using {data.name} template from{' '}
                    <span className="font-bold">Near-Resumé</span> in making
                    your Resumé, make payment to download the resume
                  </h4>
                  <p className="my-4 text-2xl font-bold text-white">
                    Pay with NEAR testnet token
                  </p>
                  <Button
                    text={`Make Payment of ${price} NEAR`}
                    className="my-3 text-xl rounded bg-green-500 px-2 py-1 text-white hover:bg-green-900"
                    onClick={() =>
                      mutation.mutate({ id: data.id, price: data.price })
                    }
                  />
                </div>
              </div>
            )}
      </section>
    </Layout>
  );
}
