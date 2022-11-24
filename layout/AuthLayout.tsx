/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import useFirebase from '@/hooks/useFirebase';

export default function AuthLayout({ children }: PropsWithChildren) {
  const { getAuthdetails } = useFirebase();
  const router = useRouter();
  const { data, status } = useQuery(['getAuthdetails'], getAuthdetails);

  useEffect(() => {
    if (status === 'success' && !data) {
      router.push('/cv/reviewer/dashboard/auth');
    }
  }, [status, router]);
  return <>{children}</>;
}
