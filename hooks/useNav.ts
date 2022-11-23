/* eslint-disable react-hooks/exhaustive-deps */
import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import useFirebase from '@/hooks/useFirebase';

export default function useNav() {
  const { getAuthdetails, authSignOut } = useFirebase();

  const { data: authData, status: authStatus } = useQuery(
    ['getAuthdetails'],
    getAuthdetails,
  );

  const pathname = usePathname();
  const name =
    authStatus === 'success'
      ? authData?.displayName
        ? authData?.displayName
        : authData?.email
      : '';

  return {
    pathname,
    name,
    authSignOut,
    authData,
    authStatus,
  };
}
