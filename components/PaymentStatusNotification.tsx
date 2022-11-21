/* eslint-disable @next/next/no-img-element */
interface Props {
  status: 'success' | 'error';
}
export default function PaymentStatusNotification({ status }: Props) {
  return (
    <div>
      {status === 'success' ? (
        <>
          <img
            src="/check-mark-verified.gif"
            alt="payment successful"
            className="mx-auto w-1/3"
          />
        </>
      ) : (
        <>
          <img src="/check-mark-verified.gif" alt="payment successful" />
        </>
      )}
    </div>
  );
}
