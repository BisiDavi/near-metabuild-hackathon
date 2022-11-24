/* eslint-disable react-hooks/exhaustive-deps */
import useFirebase from '@/hooks/useFirebase';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  const { getAuthdetails } = useFirebase();
  const router = useRouter();
  const { data, status } = useQuery(['getAuthdetails'], getAuthdetails);

  useEffect(() => {
    if (status === 'success' && data === null) {
      router.push('/cv/reviewer/dashboard/auth');
    }
  }, [status, router]);
  return <>{children}</>;
}
