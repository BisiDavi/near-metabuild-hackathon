import ReviewerProfileForm from '@/components/form/ReviewerProfileForm';
import DashboardLayout from '@/layout/DashboardLayout';

export default function ReviewerDashboard() {
  return (
    <DashboardLayout>
      <div className="content">
        <h4 className="text-xl">
          Get to review client&#39;s resume, offering them tips and information
          that will enable them ace their interview.
        </h4>
        <p className="mt-2">Set up your reviewer profile</p>
        <ReviewerProfileForm />
      </div>
    </DashboardLayout>
  );
}
