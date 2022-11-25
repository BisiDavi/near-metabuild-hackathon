import { useQuery } from '@tanstack/react-query';
import { accountBalance, accountDetails, reviewerLogin } from '@/lib/near';
import Button from '@/components/Button';

export default function AccountBalance({ data, status }: any) {
  const { data: acctBalData, status: acctBalStatus } = useQuery(
    ['accountBalance'],
    accountBalance,
  );
  const { data: acctDetails, status: acctDetailsStatus } = useQuery(
    ['accountDetails'],
    accountDetails,
  );

  console.log('acctBalData', acctBalData, 'acctBalStatus', acctBalStatus);
  console.log(
    'acctDetails',
    acctDetails,
    'acctDetailsStatus',
    acctDetailsStatus,
  );

  return (
    <div>
      {!data && status === 'success' && (
        <>
          <h4 className="mt-4 text-xl">
            login to your NEAR account or create one
          </h4>
          <Button
            text="Login / create NEAR account"
            className="mb-4 rounded border bg-red-500 px-3 py-1 text-white hover:bg-opacity-80"
            onClick={reviewerLogin}
          />
        </>
      )}
      {acctBalStatus === 'error' ? (
        'error fetching account balance'
      ) : acctBalStatus === 'loading' ? (
        'fetching account balance'
      ) : (
        <h4 className="my-2 text-xl font-bold">{acctBalData} NEAR</h4>
      )}
    </div>
  );
}
