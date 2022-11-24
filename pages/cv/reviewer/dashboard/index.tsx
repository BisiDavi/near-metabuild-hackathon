import { useQuery } from '@tanstack/react-query';
import ReviewerProfileForm from '@/components/form/ReviewerProfileForm';
import DashboardLayout from '@/layout/DashboardLayout';
import { isSignedIn } from '@/lib/near';
import Button from '@/components/Button';

export default function ReviewerDashboard() {
  const { data, status } = useQuery(['isSignedIn'], isSignedIn);
  console.log('isNearSignedIn', data, 'status', status);
  return (
    <DashboardLayout>
      <div className="content">
        <h4 className="text-xl">
          Get to review client&#39;s resume, offering them tips and information
          that will enable them ace their interview.
        </h4>
        <p className="mt-2">Set up your reviewer profile</p>
        {!data && status === 'success' && (
          <>
            <h4 className="mt-4 text-xl">
              login to your NEAR account or create one
            </h4>
            <Button
              text="Login / create NEAR account"
              className="mb-4 rounded border bg-red-500 px-3 py-1 text-white hover:bg-opacity-80"
              onClick={() => null}
            />
          </>
        )}
        <ReviewerProfileForm />
      </div>
    </DashboardLayout>
  );
}
