import { useQuery } from '@tanstack/react-query';
import { accountBalance, reviewerLogin } from '@/lib/near';
import Button from '@/components/Button';

export default function AccountBalance({ data, status }: any) {
  const { data: acctBalData, status: acctBalStatus } = useQuery(
    ['accountBalance'],
    accountBalance,
  );

  console.log('acctBalData', acctBalData, 'acctBalStatus', acctBalStatus);

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
    </div>
  );
}
