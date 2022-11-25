import ReviewerProfileForm from '@/components/form/ReviewerProfileForm';
import DashboardLayout from '@/layout/DashboardLayout';
import useReviewDashboard from '@/hooks/useReviewDashboard';
import ReviewProfile from '@/components/ReviewProfile';
import AccountBalance from '@/components/AccountBalance';

export default function ReviewerDashboard() {
  const { profile, formattedProfile, data, status, setSubmit } =
    useReviewDashboard();

  return (
    <DashboardLayout>
      <div className="content overflow-scroll-y h-screen">
        <h4 className="text-xl">
          Get to review client&#39;s resume, offering them tips and information
          that will enable them ace their interview.
        </h4>
        <AccountBalance data={data} status={status} />
        {!profile && <ReviewerProfileForm setSubmit={setSubmit} />}
        <ReviewProfile formattedProfile={formattedProfile} />
      </div>
    </DashboardLayout>
  );
}
