/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { isSignedIn } from '@/lib/near';
import useFirebase from '@/hooks/useFirebase';
import useNav from '@/hooks/useNav';

export default function useReviewDashboard() {
  const [profile, setProfile] = useState(null);
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
  }, []);

  return {
    profile,
    data,
    status,
  };
}
