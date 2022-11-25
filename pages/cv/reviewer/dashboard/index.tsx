/* eslint-disable @next/next/no-img-element */
import { useQuery } from '@tanstack/react-query';
import ReviewerProfileForm from '@/components/form/ReviewerProfileForm';
import DashboardLayout from '@/layout/DashboardLayout';
import { accountBalance, reviewerLogin } from '@/lib/near';
import Button from '@/components/Button';
import useReviewDashboard from '@/hooks/useReviewDashboard';
import ReviewListing from '@/components/ReviewListing';

export default function ReviewerDashboard() {
  const { profile, formattedProfile, data, status, setSubmit } =
    useReviewDashboard();
  const { data: acctBalData, status: acctBalStatus } = useQuery(
    ['accountBalance'],
    accountBalance,
  );
  console.log('acctBalData', acctBalData);
  return (
    <DashboardLayout>
      <div className="content overflow-scroll-y h-screen">
        <h4 className="text-xl">
          Get to review client&#39;s resume, offering them tips and information
          that will enable them ace their interview.
        </h4>
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
        {!profile && <ReviewerProfileForm setSubmit={setSubmit} />}

        {formattedProfile.length > 0 && (
          <>
            <h4 className="text-center text-xl font-bold">Profile Details</h4>
            {formattedProfile.map((item: any) => (
              <ReviewListing key={item.name} item={item} />
            ))}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
