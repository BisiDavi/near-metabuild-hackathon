/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { isSignedIn } from '@/lib/near';
import useFirebase from '@/hooks/useFirebase';
import useNav from '@/hooks/useNav';

export default function useReviewDashboard() {
  const [profile, setProfile] = useState(null);
  const [submit, setSubmit] = useState(false);

  const { readDbData } = useFirebase();
  const { authData } = useNav();

  const { data, status } = useQuery(['isSignedIn'], isSignedIn);
  console.log('isNearSignedIn', data, 'status', status);

  useEffect(() => {
    if (profile === null) {
      readDbData(`/profiles/${authData?.uid}`).then((response) => {
        console.log('profileResult-response', response);
        setProfile(response);
      });
    }
  }, [submit, authData]);

  function formaReviewerProfile(rProfile: string) {
    const parsedRProfile = JSON.parse(rProfile);
    return [parsedRProfile];
  }

  const formattedProfile = profile ? formaReviewerProfile(profile) : [];

  console.log('profile', profile);

  return {
    profile,
    formattedProfile,
    data,
    status,
    setSubmit,
  };
}
