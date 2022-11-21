/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import NEAROverlay from '@/components/NEAROverlay';
import Layout from '@/layout';
import Button from '@/components/Button';
import usePayment from '@/hooks/usePayment';
import displayResume from '@/lib/displayResume';
import { useAppSelector } from '@/hooks/useRedux';
import displayResumeDocument from '@/lib/displayResumeDocument';

export default function Payment() {
  const { price, nearData, nearStatus, data, status, mutation } = usePayment();
  const { selectedResume } = useAppSelector((state) => state.resume);

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
                <div className="mx-auto  flex h-full w-3/12 flex-col items-center bg-gray-400 px-4 py-20">
                  <h4 className="border p-2 text-center text-lg text-white">
                    Thanks for using {data.name} template from{' '}
                    <span className="font-bold">Near-Resumé</span> in making
                    your Resumé, make payment to download the resume
                  </h4>
                  <p className="my-4 text-lg font-bold text-white">
                    Pay with NEAR testnet token
                  </p>
                  <Button
                    text={`Make Payment of ${price} NEAR`}
                    className="my-3 rounded bg-green-500 px-4 py-1 font-bold  text-white hover:bg-green-900"
                    onClick={() =>
                      mutation.mutate({ id: data.id, price: data.price })
                    }
                  />
                </div>
                {selectedResume && (
                  <div className="w-9/12 h-full">
                    {displayResumeDocument(selectedResume)}
                  </div>
                )}
              </div>
            )}
      </section>
    </Layout>
  );
}
