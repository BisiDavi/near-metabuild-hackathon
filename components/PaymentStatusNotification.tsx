import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@/components/Button';

/* eslint-disable @next/next/no-img-element */
interface Props {
  status: 'successful' | 'error';
  id: string;
}
export default function PaymentStatusNotification({ status, id }: Props) {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col items-center justify-center">
      {status === 'successful' ? (
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
            href={`/cv/rate/template?id=${id}`}
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
          <h4 className="my-4 text-center text-xl font-bold">
            Oops, Payment not successful
          </h4>
          <img src="/error.png" alt="payment successful" className="w-1/3" />
          <Button
            text="Go back"
            className="item-center my-4 mx-auto flex h-10 w-40 items-center justify-center border px-4 text-center text-xl font-bold hover:bg-red-500 hover:text-white"
            onClick={() => router.back()}
          />
        </>
      )}
    </div>
  );
}
