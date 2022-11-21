import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
interface Props {
  status: 'success' | 'error';
}
export default function PaymentStatusNotification({ status }: Props) {
  return (
    <div className="item-scenter flex h-full flex-col justify-center">
      {status === 'success' ? (
        <>
          <img
            src="/check-mark-verified.gif"
            alt="payment successful"
            className="mx-auto w-1/4"
          />
          <h4 className="my-4 text-center text-xl font-bold">
            Payment successful, thanks for using NEAR-RESUMÉ, your resumé
            download should begin anytime soon.
          </h4>
          <Link
            href="/cv/rate/template"
            className="item-center my-4 mx-auto flex h-10  items-center justify-center border px-4 text-center text-xl font-bold hover:bg-red-500 hover:text-white"
          >
            Rate the resumé, and earn 0.1 NEAR
          </Link>
          <Link
            href="/"
            className="item-center my-4 mx-auto flex h-10 w-40 items-center justify-center border px-4 text-center text-xl font-bold hover:bg-red-500 hover:text-white"
          >
            Home
          </Link>
        </>
      ) : (
        <>
          <img src="/check-mark-verified.gif" alt="payment successful" />
        </>
      )}
    </div>
  );
}
