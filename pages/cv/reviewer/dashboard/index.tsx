/* eslint-disable @next/next/no-img-element */
import ReviewerProfileForm from '@/components/form/ReviewerProfileForm';
import DashboardLayout from '@/layout/DashboardLayout';
import { reviewerLogin } from '@/lib/near';
import Button from '@/components/Button';
import useReviewDashboard from '@/hooks/useReviewDashboard';

export default function ReviewerDashboard() {
  const { profile, formattedProfile, data, status, setSubmit } =
    useReviewDashboard();
  console.log('formattedProfile', formattedProfile);
  return (
    <DashboardLayout>
      <div className="content overflow-scroll-y h-screen">
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
              onClick={reviewerLogin}
            />
          </>
        )}
        {!profile && <ReviewerProfileForm setSubmit={setSubmit} />}

        {formattedProfile.length > 0 && (
          <>
            <h4 className="text-center text-xl font-bold">Profile Details</h4>
            {formattedProfile.map((item: any) => (
              <li
                key={item.name}
                className="my-1 flex flex-col items-center rounded-lg border  p-4 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mr-4 w-20 rounded-full"
                />
                <div className="content">
                  <h4>{item.fullName}</h4>
                  <h4>{item.email}</h4>
                  <h4>{item.intro}</h4>
                  <h4>{item.price} NEAR</h4>
                  <ul className="my-3 flex items-center">
                    {item?.niche.map(
                      (nicheItem: { value: string; label: string }) => (
                        <li
                          key={nicheItem.value}
                          className="mr-2 rounded-lg border px-2 py-0"
                        >
                          {nicheItem.label}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
